( function( window ) {

	var hreq = /^(HEAD|GET)$/,
	cquery = /\?/,
	rand = new Date(),
	regheader = /(.*?):\s*(.*?)[\r\n]/g,
	hasher = /#.*$/,
	antiCache = /([?&])_=[^&]*/,

	origin = document.createElement( 'a' )
	origin.href = window.location.href;

	function serializeObj( obj ) {
		var res = [];

		for( var key in obj ) {
			res[ res.length ] = key + '=' +obj[ key ];
		}

		return res.join( '&' );
	}

	function serializeArray( data ) {
		var strarr = [];

		var add = function( name, value ) {
			var res;

			res = $L.isFunction( value ) ? value() : value;
			strarr[ strarr.length ] = encodeURIComponent( name ) + '=' + encodeURIComponent( res );
		}

		$L.each( data, function() {
			add( this.name, this.value );
		} );

		return strarr.join( '&' );
	}

	function convertData( data ) {
		if( typeof data === 'string' ) {
			return data;
		}
		else if( Array.isArray( data ) ) {
			return serializeArray( data );
		}
			
		return serializeObj( data );
	}

	function setQueryParams( url, data ) {
		var strData = '';

		strData = convertData( data );
		url += ( cquery.test( url ) ? '&' : '?' ) + strData;

		return url;
	}

	function mergeObject( first, second ) {
		var key;

		for( var key in second ) {
			key = key.toLowerCase();
			first[ key ] = second[ key ]
		}
	}

	function initializeSettings( s ) {
		var arr = [ 'accepts', 'converters', 'contents' ], i = 0;

		for( ; i < arr.length; i++ ) {
			mergeObject( 
				s[ arr[ i ] ] ? 
					s[ arr[ i ] ] : 
					s[ arr[ i ] ] = {},
				$L.ajaxSettings[ arr[ i ] ]  );
		}
	}

	$L.extend( {

		active: 0,

		ajaxSettings: {

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/,
				script: /\b(?:java|ecma)script\b/
			},

			converters: {
				"* text": String,
				"text text": function( res ) { return res; },
				"text html": function( res ) { return res; },
				"text json": JSON.parse,
				"text xml": $L.parseXML,
				"text javascript": $L.Evaluate
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			accepts: {	
				"*": "*/*",
				"text": "text/plain",
				"html": "text/html",
				"xml": "application/xml, text/xml",
				"json": "application/json, text/javascript",
				"script":"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			}
		},

		ajax: function( url, op ) {

			if( typeof url === 'object' ) {
				op = url;
				url = op.url;
			}

			initializeSettings( op );

			// callback array
			var success = [],
			fail = [],
			complete = [],

			xhr = op.xhr,

			// SETUP - type
			req = ( op.type || 'GET' ).toUpperCase(),
			get = hreq.test( req ),
			// SETUP CONTEXT
			fncContext = op.context || op,
			globalContext = op.context 
							&& ( 
								op.context instanceof lyteDomObj
								|| op.nodeType
							) ? $L( op.context ) : $L.ev,
			// SETUP - async
			async,
			// SETUP - global
			fireEvents,
			// SETUP - beforesend
			beforeSend = op.beforeSend,

			// MIGHT WANT TO ADD A SAFETY CHECK OVER HERE
			timeoutId,
			cacheURL,
			uncached,
			body,
			headers,
			abortType = 'cancelled',
			respHeaders,
			proRespHeader,
			reqHeaders = {},
			processData,
			finish,
			field,
			atag,

			// Used in done/always/...
			isSuccess,
			data,
			error,

			//
			lXHR = {
				readyState: 0,

				setRequestHeader: function( name, value ) {
					if( finish == null ) {
						reqHeaders[ name ] = value;
					}

					return this;
				},

				overrideMimeType: function( type ) {
					if( completed == null ) {
						op.mimeType = type;
					}

					return this;
				},

				getAllResponseHeaders: function() {
					if( finish ) {
						return respHeaders;
					}

					return null;
				},

				getResponseHeader: function( key ) {
					var match;

					if( finish ) {
						if( !proRespHeader ) {
							proRespHeader = {};

							while( ( match = regheader.exec( respHeaders ) ) ) {
								proRespHeader[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}

							match = proRespHeader[ key.toLowerCase() ];
						}
						
						return match ? match : null;
					}
				},

				abort: function( statusText ) {
					var finalText = statusText || abortType;

					if( xml ) {
						// Need to pass statusText over here
						xml.abort();
					}

					done( 0, finalText );

					return this;
				},

				then: function( onSuccess, onFailure ) {
					success.push( onSuccess );
					fail.push( onFailure );

					// should change
					if( !op.async ) {
						if( isSuccess ) {
							fireCallbacks( success, fncContext, [ data, this.statusText, this ] );
						}
						else {
							fireCallbacks( fail, fncContext, [ this, this.statusText, error ] );
						}
					}

					return this;
				},

				fail: function( onFailure ) {
					fail.push( onFailure );

					if( !op.async && !isSuccess ) {
						fireCallbacks( fail, fncContext, [ this, this.statusText, error ] );
					}
					return this;
				},

				always: function( onComplete ) {
					complete.push( onComplete );

					if( !op.async ) {
						fireCallbacks( complete, fncContext, [ this, this.statusText ] );
					}

					return this;
				},

				done: function( onSuccess ) {
					success.push( onSuccess );

					if( !op.async && isSuccess ) {
						fireCallbacks( success, fncContext, [ data, this.statusText, this ] );
					}
					return this;
				}
			};

			op.dataTypes = ( op.dataType || '*' ).toLowerCase().match( $L.regex.rnothtmlwhite );

			async = op.async = ( typeof op.async === 'boolean' ? op.async : true );

			fireEvents = op.global = ( typeof op.global === 'boolean' ? op.global : true );

			processData = op.processData = ( typeof op.processData === 'boolean' ? op.processData : true );

			if( op.crossDomain == null ) {
				atag = document.createElement( 'a' );

				try {
					atag.href = op.url;

					atag.href = atag.href;
					op.crossDomain = atag.protocol + '//' + atag.host !== origin.protocol + '//' + origin.host;
				}
				catch( e ) {
					op.crossDomain = true;
				}
			}

			cacheURL = op.url.replace( hasher, "" );

			if( processData && op.data ) {
				if( get ) {
					uncached = op.url.slice( cacheURL.length );
					cacheURL = setQueryParams( cacheURL, op.data );

					if( op.cache === false ) {
						cacheURL = cacheURL.replace( antiCache, "$1" );
						// bug
						uncached = ( cquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( rand++ ) + uncached;
					}

					op.url = cacheURL + uncached

				}
				else {
					op.data = convertData( op.data );
				}
			}

			if( $L.ev && fireEvents && $L.active++ == 0 ) {
				$L.ev.trigger( 'ajaxStart' );
			}
			
			if( op.data && !get && op.contentType !== false || op.contentType ) {
				// SETUP - HEADER
				lXHR.setRequestHeader( 'Content-Type', op.contentType || 'application/x-www-form-urlencoded; charset=UTF-8' )
			}

			for( headers in op.headers ) {
				lXHR.setRequestHeader( headers, op.headers[ headers ] );
			}

			lXHR.setRequestHeader( 
				'Accept',
				op.dataTypes[ 0 ] && op.accepts[ op.dataTypes[ 0 ] ] ?  
					op.accepts[ op.dataTypes[ 0 ] ] +
					( op.dataTypes[ 0 ] !== '*' ? ',*/*; q=0.01;': "" ) :
					op.accepts[ '*' ]
			);

			// Finish is added here because people can fire lXHR.abort inside the beforeSend callback
			// After aborting the execution continues without returning without it.
			if( beforeSend && ( beforeSend.call( fncContext, lXHR, op ) === false || finish ) ) {
				return lXHR.abort();
			}

			abortType = 'abort';

			if( op.success ) {
				success.push( op.success );
			}
			
			if( op.error ) {
				fail.push( op.error );
			}

			if( op.complete ) {
				complete.push( op.complete );
			}
			
			// prolly another func

			lXHR.readyState = 1;

			if( globalContext && globalContext.trigger && fireEvents ) {
				globalContext.trigger( 'ajaxSend', [ lXHR, op ] )
			}

			if( finish ) {
				return lXHR;
			}


			var xml = xhr ? xhr : new XMLHttpRequest();

			
			// TODO: Should op.url be here??????
			xml.open( 
				req, 
				op.url, 
				async
			);

			for( field in op.xhrFields ) {
				xml[ field ] = op.xhrFields[ field ];
			}

			if ( op.mimeType ) {
				lXHR.overrideMimeType( op.mimeType );
			}

			if( !op.crossDomain && !reqHeaders[ 'X-Requested-With' ] ) {
				reqHeaders[ 'X-Requested-With' ] = 'XMLHttpRequest';
			}

			for( headers in reqHeaders ) {
				xml.setRequestHeader( headers, reqHeaders[ headers ] );
			}

			body = !get && op.data || null;

			xml.onload = function() {
				// Maybe need to handle FTP
				done( xml.status, xml.statusText, xml.responseText, xml.getAllResponseHeaders() );
			}

			xml.onerror = xml.onabort = function() {
				done( xml.status, xml.statusText );
			}

			xml.ontimeout = function() {
				done( 0, 'timeout' );
			}

			if( async && op.timeout > 0 ) {
				timeoutId = setTimeout( function() {
					lXHR.abort( 'timeout' )
				}, op.timeout );
			}

			xml.send( body );

			

			// prolly another func

			function done( status, nStatusText, response, responseHeaders ) {

				var response, statusText = nStatusText;

				if( finish ) {
					return ;
				}

				finish = true;

				if( timeoutId ) {
					window.clearTimeout( timeoutId );
				}

				respHeaders = responseHeaders || "";

				lXHR.readyState = status > 0 ? 4 : 0;
				isSuccess = status >= 200 && status < 300 || status === 304;


				if( isSuccess ) {

					// We are going to handle text -> dataType conversion for now
					// SETUP - DATATYPE
					response = getProperResponse( response, op, lXHR );

					if( status == 304 ) {
						statusText = 'notmodified';
					}
					else if( status == 204 || op.type == 'HEAD' ) {
						statusText = 'nocontent'
					}
					else {
						statusText = response.state;
						data = response.data;
						error = response.error;
						isSuccess = !error;
					}
				}
				else {
					error = statusText;

					if( status || !statusText ) {
						statusText = 'error';
						status = status < 0 ? 0 : status;
					}
				}

				lXHR.status = status;
				lXHR.statusText = ( statusText || nStatusText ) + "";

				if( isSuccess && success.length > 0 ) {
					fireCallbacks( success, fncContext, [ data, statusText, lXHR ] );
				}
				else if( error && fail.length > 0 ) {
					fireCallbacks( fail, fncContext, [ lXHR, statusText, error ] );
				}

				// lXHR.statusCode( statusCode || {} );

				if( globalContext && globalContext.trigger && fireEvents ) {
					globalContext.trigger( 
						isSuccess ? 'ajaxSuccess' : 'ajaxError',
						[ lXHR, op, isSuccess ? data : error ]
					)
				}

				if( complete.length > 0 ) {
					fireCallbacks( complete, fncContext, [ lXHR, statusText ] );
				}

				if( globalContext && globalContext.trigger && fireEvents ) {
					globalContext.trigger( 'ajaxComplete', [ lXHR, op ] );

					// Need to add ajax fail
					if( $L.ev && !( --$L.active ) ) {
						$L.ev.trigger( 'ajaxStop' );
					}
				}


			}

			return lXHR;
		},

		getScript: function( url, data, callback ) {
			return $L.get( url, data, callback );
		},

		getJSON: function( url, callback ) {
			return $L.get( url, undefined, callback );
		}
	} );

	function fireCallbacks( calls, context, args ) {
		var call;

		while( ( call = calls.shift() ) ) {
			call.apply( context, args );
		}
	}

	function convertResponse( first, second, response, lXHR, settings ) {
		var data, hop, cfun;

		if( first === second ) {
			return { data: response, state: 'success' };
		}

		if( settings.type === 'HEAD' ) {
			return ;
		}

		hop = first + " " + second;

		for( var key in settings.converters ) {
			if( key.toLowerCase() === hop ) {
				cfun = settings.converters[ key ];
				break;
			}
		} 

		data = cfun ? cfun( response ) : "";
		lXHR.responseText = response;

		if( $L.ajaxSettings.responseFields[ second ] ) {
			lXHR[ $L.ajaxSettings.responseFields[ second ] ] = data;
		}
		
		return { data: data, state: "success" }; 
	}

	function getProperResponse( response, settings, lXHR ) {
		var contentType, type, 
		types = settings.dataTypes,
		contents = settings.contents;

		// Sniff out content-type
		if( types[ 0 ] === '*' ) {
			contentType = settings.mimeType || lXHR.getResponseHeader( 'content-type' );
		}

		if( contentType ) {
			for( type in contents ) {
				if( contents[ type ].test( contentType ) ) {
					types[ 0 ] = type;
					break;
				}
			}
		}
		
		if( types[ 0 ] === '*' ) {
			types[ 0 ] = 'text';
		}

		return convertResponse( 'text', types[ 0 ], response, lXHR, settings );
	}

	$L.each( [ 'get', 'post' ], function( i, type ) {
		$L[ type ] = function( url, data, success, datatype ) {
			if( $L.isFunction( data ) ) {
				datatype = datatype || success;
				success = data;
				data = undefined;
			}

			return $L.ajax( 
				$L.extend( {
					type: type,
					url: url,
					data: data,
					dataType: datatype,
					success: success

				}, $L.isPlainObject( url ) && url ) 
			);
		};
	} );

} )( window === undefined ? this : window );