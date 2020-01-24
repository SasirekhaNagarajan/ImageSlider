( function( window ) {

	var rreturn = /\r/g,
	cssExpand = [ "Top", "Right", "Bottom", "Left" ],
	rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

	var customProp = /^--/;
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );

	var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var cssNormals = {
		letterSpacing: "0",
		fontWeight: "400"
	}, 
	rboolattr = /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
	boolHook = {
		set: function( item, name, value ) {
			if( value === false ) {
				$L.removeAttr( item, name );
			}
			else {
				item.setAttribute( name, name );
			}

			return name;
		}
	};

	function nodeName( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	}

	function stripAndCollapse( value )  {
		var tokens = value.match( $L.regex.rnothtmlwhite ) || [];
		return tokens.join( " " );
	}

	function currentValue( elem, name ) {
		return $L.css( elem, name );
	}

	function adjustCSS( elem, name, ret ) {
		var val,
		adjusted,
		cur = parseFloat( currentValue( elem, name ) ),
		unit = ret && ret[ 3 ] || $L.cssNumber[ name ] ? '' : 'px';

		if( ret ) {
			val = cur || 0;
			adjusted = ret[ 1 ] ?
							val + ( ret[ 1 ] + 1 ) * ret[ 2 ] :
							+ ret[ 2 ];
		}

		return adjusted;
	}

	function makeClassArray( vals ) {
		if( Array.isArray( vals ) ) {
			return vals;
		}

		return stripSpacesAndCollapse( vals ).match( $L.regex.rnothtmlwhite ) || [];
	}

	function stripSpacesAndCollapse( val ) {
		return ( val && val.match && val.match( $L.regex.rnothtmlwhite ) || [] ).join( " " );
	}

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( 'class' ) || "";
	}

	function getStyles( elem ) {
		var win = elem.ownerDocument.defaultView;

		// https://github.com/jquery/jquery/commit/e488d985cfb10ab8c684bbc6a9b8ff3eae23bf83
		// Hacks to fix IE and firefox bugs which occured when trying to access computedStyles.
		if( !win || !win.opener ) {
			win = window;
		}

		return win.getComputedStyle( elem );
	}

	function curCSS( elem, name, computed ) {
		var ret;

		computed = computed || getStyles( elem ); 

		if( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			// if ( ret === "" && !$L.contains( elem.ownerDocument, elem ) ) {
			// 	ret = $L.style( elem, name );
			// }
		}

		// IE returns zIndex as integers
		return ret !== undefined ?
			ret + "":
			ret;
	}


	$L.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, key ) {
		var top = key === 'pageYOffset';

		lyteDomObj.prototype[ method ] = function( val ) {
				return $L._processInput( this, method , val, function( elem, method, val ) {
					var wobj;
					if( $L.isWindow( elem ) ) {
						wobj = elem;
					}
					else if( elem.nodeType === 9 ) {
						wobj = elem.defaultView;
					}

					if( val == undefined ) {
						return wobj ? wobj[ key ] : elem[ method ];
					}

					if( wobj ) {
						wobj.scrollTo( 
							!top ? val : wobj.pageXOffset,
							top ? val : wobj.pageYOffset
						);
					}
					else {
						elem[ method ] = val;
					}
				} );

			}
	} );

	$L.each( { Height: 'height', Width: 'width' }, function( name, type ) {
		$L.each( { padding: 'inner' + name, content: type, '': 'outer' + name }, function( defaultExtra, funcName ) {
			lyteDomObj.prototype[ funcName ] = function( margin, value ) {
				var extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
				return $L._processInput( this, type, typeof margin !== 'boolean' ? margin : undefined, 
					function( elem, type, value ) {
						var doc;

						if( $L.isWindow( elem ) ) {
							return funcName.indexOf( "outer" ) === 0 ?
										elem[ "inner" + name ] :
									elem.document.documentElement[ "client" + name ];
						}

						if( elem.nodeType === 9 ) {
							doc = elem.documentElement;

							return Math.max(
								elem.body[ "scroll" + name ], doc[ "scroll" + name ],
								elem.body[ "offset" + name ], doc[ "offset" + name ],
								doc[ "client" + name ]
							);
						}
						
						return value === undefined ? $L.css( elem, type, extra ) :
												$L.style( elem, type, value, extra );
					} 
				);
			}
		} )
	} );

	

	function boxModelAdjustment( elem, dimension, box, isBorderValue, styles, val ) {

		var i = dimension === 'width' ? 1 : 0,
		extra = 0, delta = 0;

		if( box === ( isBorderValue ? 'border' : 'content' ) ) {
			return 0;
		}

		for( ; i < 4; i += 2 ) {

			if( box === 'margin' ) {
				delta += $L.css( elem, 'margin' + cssExpand[ i ], true, styles );
			}

			if( !isBorderValue ) {

				delta += $L.css( elem, 'padding' + cssExpand[ i ], true, styles );

				if( box !== 'padding' ) {
					delta += $L.css( elem, 'border' + cssExpand[ i ] + 'Width', true, styles );
				}
				else {
					extra += $L.css( elem, 'border' + cssExpand[ i ] + 'Width', true, styles );
				}
			}
			else {

				if( box === 'content' ) {
					delta -= $L.css( elem, 'padding' + cssExpand[ i ], true, styles );
				}

				if( box !== 'margin' ) {
					delta -= $L.css( elem, 'border' + cssExpand[ i ] + 'Width', true, styles );
				}

			}

		}

		// Get scrollgutter 
		if( !isBorderValue && val >= 0 ) {
			delta += Math.max( 0, Math.ceil(
				elem[ 'offset' + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] - val - delta - extra - 0.5
			) );
		}

		return delta;

	}

	function getWidthOrHeight( elem, dimension, extra ) {
		var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = $L.css( elem, "boxSizing", false, styles ) === "border-box",
		isBorderValue = isBorderBox;

		// Return a non-pixel value yikes!
		if ( rnumnonpx.test( val ) ) {
			if ( !extra ) {
				return val;
			}
			val = "auto";
		}

		if( val === 'auto' 
			|| ( !parseFloat( val ) && $L.css( elem, 'display', false, styles ) === 'inline' ) 
		) {
			val = elem[ 'offset' + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];
			isBorderValue = true;
		}

		val = parseFloat( val ) || 0;

		return ( val + 
			boxModelAdjustment(
				elem,
				dimension,
				extra || ( isBorderBox ? "border" : "content" ),
				isBorderValue,
				styles,
				val
			) ) + 'px';


	}

	// args comes later
	function swap( elem, props, cb ) {
		var ret, name,
		temp = {};

		for( name in props ) {
			temp[ name ] = elem.style[ name ];
			elem.style[ name ] = props[ name ];
		}

		ret = cb.call( elem );

		for( name in props ) {
			elem.style[ name ] = temp[ name ];
		}

		return ret;
	}



	// Parent functions
	lyteDomObj.prototype.extend( {

		closest: function( sel, context ) {
			var elems = this,
			i = 0, length = elems.length, matches = [];

			if( !$L.needsContext.test( sel ) ) {
				for( ; i < length; i++ ) {
					var elem = elems[ i ];
					do {
						if( elem.nodeType === 1 && $L( elem ).is( sel ) ) {
							matches.push( elem );
							break;
						}

						elem = elem.parentNode;
					} while( elem && elem !== context );
				}
			}

			return $L._removeDupes( matches, false, this );
		},

		css: function( key, value ) {
			return $L._processInput( this, key, value, function( item, name, val ) {
				var i = 0,
				ret = {};

				if(Array.isArray( name ) ) {
					for( ; i < name.length; i++ ) {
						ret[ name[ i ] ] = $L.css( item, name[ i ] );
					}

					return ret;
				}

				if( val != undefined) {
					return $L.style( item, name, val );
				}
				else {
					return $L.css( item, name );
				}
			});
		},

		removeProp: function( key ) {
			return $L.each( this, function() {
				delete this[ $L.propNames[ key ] || key ];
			} );
		},

		removeAttr: function( key ) {
			return $L.each( this, function( index, elem ) {
				$L.removeAttr( elem, key );
			} );
		},

		attr: function( key, value ) {
			return $L._processInput( this, key, value, $L.attr );
		},

		prop: function( key, value ) {
			return $L._processInput( this, key, value, $L.prop );
		},

		siblings: function( sel ) {
			var results;

			results = $L.map( this, function( item, index ) {
						var result = [], i,
						children = item.parentElement.children;

						for( i = 0; i < children.length; i++ ) {
							if( item !== children[ i ] 
								&& children[ i ].nodeType === 1 
								&& $L._checkMatch( children[ i ], sel ) 
							) {
								result.push( children[ i ] );
							}
						}

						return result;
					} );

			return $L._removeDupes( results, false, this );
		},

		children: function( sel ) {
			var results;

			results = $L.map( this, function( item, index ) {
						var result = [], 
						child = item.children,
						length = child.length, i;

						for( i = 0; i < length; i++ ) {
							if( child[ i ].nodeType === 1 && $L._checkMatch( child[ i ], sel ) ) {
								result.push( child[ i ] );
							}
						}

						return result;
					} );
			
			return this.pushStack( results );
		},

		prevUntil: function( sel, filter ) {
			var results;

			results = $L.map( this, function( item, index ) {
						var result = [];

						while( ( item = item.previousSibling ) ) {
							if( item.nodeType === 1 && $L( item ).is( sel ) ) {
								break;
							}

							if( item.nodeType === 1 && $L._checkMatch( item, filter ) ) {
								result.push( item );	
							}
						}

						return result;
					} );

			return $L._removeDupes( results, true, this );
		},

		nextUntil: function( sel, filter ) {
			var results;

			results = $L.map( this, function( item, index ) {
						var result = [];

						while( ( item = item.nextSibling ) ) {
							if( item.nodeType === 1 && $L( item ).is( sel ) ) {
								break;
							}

							if( item.nodeType === 1 && $L._checkMatch( item, filter ) ) {
								result.push( item );
							}
						}

						return result;
					} );
			
			return $L._removeDupes( results, false, this );
		},

		parentsUntil: function( sel, filter ) {
			var results;
			results = $L.map( this, function( item, index ) {
						var result = [];
						while( ( item = item.parentNode ) ) {
							if( item.nodeType === 1 && $L( item ).is( sel ) ) {
								break;
							}

							if( item.nodeType === 1 && $L._checkMatch( item, filter ) ) {
								result.push(item);
							}
						}

						return result;
					} );
			
			return $L._removeDupes( results, true, this );
		},

		parents: function( sel ) {
			var results;
			results = $L.map( this, function( item, index ) {
						var result = [];
						while( ( item = item.parentNode ) && item.nodeType !== 9 ) {
							if( item.nodeType === 1 ) {
								if( $L._checkMatch( item, sel ) ) {
									result.push( item );
								}
							}
						}

						return result;
					} );

			return $L._removeDupes( results, true, this );
		},

		parent: function( sel ) {
			var nodes = $L.map( this, function( item, index ) { 
				var parent = item.parentNode;

				return parent 
						&& parent.nodeType !== 11 
						&& $L._checkMatch( parent, sel ) ? parent :
														null;
			} );

			return $L._removeDupes( nodes, false, this );
			

		},

		offsetParent: function(){
			return  this.map( function( index, elem ) {
						var offsetParent = elem.offsetParent;

						while( offsetParent && $L.css( offsetParent, 'position' ) === "static" ) {
							offsetParent = offsetParent.offsetParent;
						}

						return offsetParent || document.documentElement;
					} )
		},

		offset: function( args ) {
			if( arguments.length ) {
				return args === undefined ? this : this.each( function( i, e ) {
					$L.offset.setOffset( e, args, i );
				} )
			}

			var rect, win, elem = this[ 0 ];

			if( !elem ) {
				return;
			}

			if( !elem.getClientRects().length ) {
				return { top: 0 , left: 0 };
			}

			rect = elem.getBoundingClientRect();
			win = elem.ownerDocument.defaultView;

			return { 
				top: rect.top + win.pageYOffset,
				left: rect.left + win.pageXOffset
			};
			
		},

		position: function()
		{
			if( !this [0] )
			{
				return;
			}

			var offsetParent,offset,doc,
				elem = this[0],
				parentOffset = {top: 0, left: 0};

			if( $L.css(elem , 'position') === 'fixed')
			{
				offset = elem.getBoundingClientRect()
			}
			else
			{
				offset = this.offset()
				doc = elem.ownerDocument
				offsetParent = elem.offsetParent || doc.documentElement;
				while( offsetParent && ( offsetParent === doc.body || offsetParent === doc.documentElement) && 
					$L.css(offsetParent,'position') === 'static')
				{
					offsetParent = offsetParent.parentNode;
				}
				if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) 
				{

					parentOffset = $L( offsetParent ).offset();
					parentOffset.top += parseFloat($L.css( offsetParent, "borderTopWidth", true ));
					parentOffset.left += parseFloat($L.css( offsetParent, "borderLeftWidth", true ));
				}
			}
			return 			{
				top: offset.top - parentOffset.top - parseFloat($L.css( elem, "marginTop", true )),
				left: offset.left - parentOffset.left - parseFloat($L.css( elem, "marginLeft", true ))
			}
		},

		next: function( sel ) {
			var result = $L.map( this, function( item, index ) {
				do {
					item = item.nextSibling;
				} while( item && item.nodeType != 1 );

				return item 
						&& item.nodeType === 1
						&& $L._checkMatch( item, sel ) ? item : null;
			} );

			return this.pushStack( result );
		},

		nextAll: function( sel ) {
			var results = $L.map( this, function( next, index ) {
				var result = [];

				do {
					next = next.nextSibling;
					if( next 
						&& next.nodeType === 1
						&& $L._checkMatch( next, sel ) 
					) {
						result.push( next );
					}
				} while( next );

				return result;
			} );

			return $L._removeDupes( results, false, this );	
		},

		prev: function( sel ) {
			var result = $L.map( this, function( item, index ) {
				do {
					item = item.previousSibling;
				} while( item && item.nodeType != 1 );

				return item 
					&& item.nodeType === 1
					&& $L._checkMatch( item, sel ) ? item : null;
			} );

			return this.pushStack( result );
		},

		prevAll: function( sel ) {
			var results = $L.map( this, function( prev, index ) {
				var result = [];

				do {
					prev = prev.previousSibling;
					if( prev 
						&& prev.nodeType === 1
						&& $L._checkMatch( prev, sel ) 
					) {
						result.push( prev );
					}
				} while( prev );

				return result;
			} );

			return $L._removeDupes( results, true, this );	
		},

		contents: function()
		{

			var matched =$L.map(this ,function(e)
			{
				
				if(e.nodeName && e.nodeName.toLowerCase() === 'iframe' )
				{
					return e.contentDocument;
				}
				if(e.nodeName && e.nodeName.toLowerCase() === 'template' )
				{
					e = e.content || e;
				}
				return $L.merge([],e.childNodes)
			})
			return this.pushStack( matched );
		},

		toggleClass: function( cls, state ) {
			var elems = this,
			i, lnode, clsName, combined;

			if( $L.isFunction( cls ) ) {
				return elems.each( function( index, item ) {
					$L( item ).toggleClass( 
						cls.call( 
							item, 
							index, 
							getClass( item ) ,
							state 
						), 
						state 
					);
				} );
			}

			if( typeof state === "boolean" ) {
				state ? elems.addClass( cls ): elems.removeClass( cls );
				return this;
			}
			else if( typeof state === 'string' ) {
				combined = [].slice.call( arguments );
				return this.toggleClass( combined );
			}

			return $L.each( elems, function( index, item ) {
				if( item.nodeType !== 1 ) {
					return ;
				}

				if( typeof cls === 'string' || Array.isArray( cls ) ) {
					var classArray = makeClassArray( cls );

					if( classArray.length ) {
						for( i = 0; i < classArray.length; i++ ) {
							lnode = $L( item );
							if( lnode.hasClass( classArray[ i ] ) ) {
								lnode.removeClass( classArray[ i ] );
							}
							else {
								lnode.addClass( classArray[ i ] );
							}
						}
					}
				}
				else {
					clsName = getClass( item );

					if( clsName ) {
						$L._dataPriv.set( item, '__classname__', clsName );
					}

					clsName 
					|| cls === false ? 
						item.setAttribute( 'class', '' ) :
						item.setAttribute( 'class', $L._dataPriv.get( item, '__classname__' ) );
				}

				

			} );
		},

		addClass: function( cls ) {
			var elems = this,
			length = this.length,
			i, j,
			arr, combined;

			// Blah we need to return over here.
			if( $L.isFunction( cls ) ) {
				return elems.each( function( index, item ) {
					$L( item ).addClass( cls.call( item, index, getClass( item ) ) );
				} );
			}

			if( arguments.length > 1 ) {
				combined = [].slice.call( arguments );
				return this.addClass( combined ); 
			}

			arr = makeClassArray( cls );

			for( i = 0; i < length; i++ ) {
				if( elems[ i ].nodeType !== 1 ) {
					continue;
				}

				for( j = 0; j < arr.length; j++ ) {	
					if( typeof arr[ j ] === 'string' && arr[ j ] ) {
						elems[ i ].classList ? 
							elems[ i ].classList.add( arr[ j ] ) :
							elems[ i ].className += ' ' + arr[ j ];
					}
				}	
			}

			return this;
			
		},

		removeClass: function( cls ) {
			var elems = this,
			length = this.length, combined,
			arr, i = 0, j = 0, cur, noCL = false;

			if( $L.isFunction( cls ) ) {
				return elems.each( function( index, item ) {
					$L( item ).removeClass( cls.call( item, index, getClass( item ) ) );
				} );
			}

			if( !arguments.length ) {
				return this.attr( 'class', '' );
			}

			if( arguments.length > 1 ) {
				combined = [].slice.call( arguments );
				return this.removeClass( combined ); 
			}

			arr = makeClassArray( cls );

			for( i = 0; i < length; i++ ) {
				if( elems[ i ].nodeType !== 1 ) {
					continue;
				}

				cur = getClass( elems[ i ] );
				cur = ' ' + cur + ' ';
				for( j = 0; j < arr.length; j++ ) {	
					if( typeof arr[ j ] === 'string' && arr[ j ] ) {
						if( elems[ i ].classList ) {
							elems[ i ].classList.remove( arr[ j ] )
						} 
						else {	
							noCL = true;
							cur.replace( ' ' + arr[ j ] + ' ', ' ' );
						}	
					}
				}

				if( noCL ) {
					elems[ i ].setAttribute( 'class', cur );
					noCL = false;
				}
			}

			return this;

		},

		hasClass: function( cls ) {
			var elems = this,
			length = this.length,
			i, cur;

			cls = " " + cls + " ";
			for( i = 0; i < length; i++ ) {
				if( elems[ i ].nodeType !== 1 ) {
					continue;
				}

				cur = " " + getClass( elems[ i ] ) + " ";
				if( cur.indexOf( cls ) !== -1 ) {
					return true;
				}
			}

			return false;
		},

		val: function( value ) {

			var elem = this[ 0 ],
			ret, isFunc, hooks;

			if( value === undefined ) {
				if( elem ) {
					hooks = $L.valHooks[ elem.type ] ||
							$L.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks && "get" in hooks && ( ret = hooks.get( elem, "value" ) ) !== undefined) {
						return ret;
					}

					ret = elem.value;
				}

				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				return ret == null ? "" : ret;
			}

			isFunc = $L.isFunction( value );

			return this.each( function( index, item ) {
				var newVal;

				if( isFunc ) {
					newVal = value.call( item, index, $L( item ).val() );
				}
				else {
					newVal = value;
				}

				if( newVal == null ) {
					newVal = "";
				}
				else if( typeof newVal == "number" ) {
					newVal = newVal + "";
				}
				else if( Array.isArray( newVal ) ) {
					newVal = $L.map( newVal, function( sval ) {
						return sval == null ? "" : sval + "";
					} );
				}

				var val = $L.valHooks[ this.type ] || $L.valHooks[ this.tagName.toLowerCase() ];

				if( !val || !( 'set' in val ) || val.set( this, newVal, 'value' ) === undefined ) {
					this.value = newVal;
				}
			} );
		}
	} );

	$L.cssHooks = {
		borderWidth: {
			set: setPositiveNumber
		},

		padding: {
			set: setPositiveNumber
		},

		marginLeft: {
			get: function( elem, computed ) {
				if( computed && !$L._meta.support.reliableMarginLeft() ) {
					return ( elem.getBoundingClientRect().left -
							swap( elem, { marginLeft: 0 }, function() {
								return elem.getBoundingClientRect().left;
							} ) ) + 'px';
				}
			}
		},

		opacity: {
			get: function( elem, computed ) {
				if( computed ) {
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	};

	var cssShow = { position: "absolute", visibility: "hidden", display: "block" };

	$L.each( [ 'top', 'left' ], function( index, funcName ) {
		$L.cssHooks[ funcName ] = {
			get: function( elem, computed ) {
				if( computed && !$L._meta.support.reliablePixelPosition() ) {
					var val = curCSS( elem, funcName );

					return rnumnonpx.test( val ) ? $L( elem ).position()[ funcName ] + 'px' : val ;
				}
			}	
		}
	} );

	$L.each( [ 'width', 'height' ], function( index, funcName ) {
		$L.cssHooks[ funcName ] =  {
			get: function( elem, computed, extra ) {
				if( computed ) {
					return rdisplayswap.test( $L.css( elem, 'display' ) ) &&
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?	
					 swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, funcName, extra );
					} )
					: getWidthOrHeight( elem, funcName, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = getStyles( elem ),
					isBorderBox = $L.css( elem, "boxSizing", false, styles ) === "border-box",
					subtract = extra && boxModelAdjustment(
						elem,
						funcName,
						extra,
						isBorderBox,
						styles
					);

					if ( subtract && ( matches = rcssNum.exec( value ) ) &&
						( matches[ 3 ] || "px" ) !== "px" ) {

						elem.style[ funcName ] = value;
						value = $L.css( elem, funcName );
					}

					return setPositiveNumber( elem, value, subtract );
			}
		}
	} );

	$L.offset = {
		setOffset: function( elem, args, i ) {

			var cpos, cleft, csstop, ctop, coffset, cssleft, calpos,
			pos = $L.css( elem, 'position' ),
			cElem = $L(elem),
			props = {};

			if( pos === 'static' ) {
				cElem.css( 'position','relative');
			}

			coffset = cElem.offset();
			csstop = $L.css( elem , "top" );
			cssleft = $L.css( elem , "left" );
			calpos = ( pos === 'absolute' || pos === 'fixed' )
					&& ( csstop + cssleft ).indexOf( 'auto' ) > -1;

			if( calpos ) {
				cpos = cElem.position()
				ctop = cpos.top;
				cleft = cpos.left;
			}
			else {
				ctop = parseFloat( csstop ) || 0 ;
				cleft = parseFloat( cssleft ) || 0 ;
			}

			if( $L.isFunction( args ) ) {
				args = args.call( elem , i , $L.extend( {}, coffset ) );
			}

			if( args.top != null ) {
				props.top = ( args.top - coffset.top ) + ctop;
			}

			if( args.left != null ) {
				props.left = ( args.left - coffset.left ) + cleft;
			}

			cElem.css( 'top', props.top );
			cElem.css( 'left', props.left );

			return cElem
		}
	}

	$L.extend( {
		cssNumber : {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		propNames : {
			"cellpadding": "cellPadding",
			"cellspacing": "cellSpacing",
			"class": "className",
			"colspan": "colSpan",
			"contenteditable": "contentEditable",
			"for": "htmlFor",
			"frameborder": "frameBorder",
			"maxlength": "maxLength",
			"readonly": "readOnly",
			"rowspan": "rowSpan",
			"tabindex": "tabIndex",
			"usemap": "useMap"
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if( !$L._meta.support.radioValue && nodeName( elem, 'input' ) && value === 'radio' ) {
						var val = elem.value;

						elem.setAttribute( type, value );
						if( val ) {
							elem.value = val;
						}
						
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, key ) {
			var i = 0, name;
			key = ( key && key.match( $L.regex.rnothtmlwhite ) ) || [];

			while( ( name = key[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		},

		style: function( item, key, value, extra ) {
			var isCustom = customProp.test( key ),
			style, type = typeof value, hooks;

			if( !item || item.nodeType !== 1 ) {
				return ;
			}

			style = item.style;

			hooks = $L.cssHooks[ key ] || $L.cssHooks[ value ];

			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( item, key, ret );

				type = "number";
			}

			if( type === 'number' ) {
				value += $L.cssNumber[ key ] ? '' : 'px';
			}

			value = hooks && ( 'set' in hooks ) ? hooks.set( item, value, extra ) : value;
			
			if( isCustom ) {
				style.setProperty( item, value );
			}
			else {
				style[ key ] = value;
			}
		},

		css: function(item, key, extra, styles ) {
			var origName = $L._camelCase(key),
			ret, hooks;
			
			hooks = $L.cssHooks[ key ] || $L.cssHooks[ origName ];

			if( hooks && 'get' in hooks ) {
				ret = hooks.get( item, true, extra );
			}

			if( ret === undefined ) {
				ret = curCSS( item, key, styles );
			}

			if ( ret === "normal" && key in cssNormals ) {
				ret = cssNormals[ key ];
			}


			// do extra stuff over here

			if( extra ) {
				// they were checking for infinity for some reason
				return parseFloat( ret ) || 0;
			}

			return ret;
		},

		attr: function( item, key, value ) {
			var hooks, obt, ret;

			key = key.toLowerCase();
			hooks = $L.attrHooks[ key ] || rboolattr.test( key ) && boolHook;

			if( value !== undefined ) {
				if( value === null ) {
					$L.removeAttr( item, key );
					return ;
				}

				obt = hooks && 'set' in hooks && ( ret = hooks.set( item, key, value ) ) !== undefined; 

				if( obt ) {
					return ret;
				}
				else {
					item.setAttribute( key, value + '' );
					return value;
				}
			}
			
			if ( hooks && "get" in hooks && ( ret = hooks.get( item, key ) ) !== null ) {
				return ret;
			}

			ret = item.getAttribute( key );

			return ret == null ? undefined : ret;
		},

		prop: function( item, key, value ) {
			var hooks, ret, obt;

			key = $L.propNames[ key ] || key;
			hooks = $L.propHooks[ key ];

			if( value === undefined ) {
				obt = hooks && 'get' in hooks && ( ret = hooks.get( item, key ) ) !== undefined;
				return obt ? ret : item[ key ];
			}
			else {
				obt = hooks && 'set' in hooks && ( ret = hooks.set( item, value, key ) ) !== undefined ; 
				return obt ? ret : item[ key ] = value;
			}

			return value;
		},

		valHooks:{
				'checkbox': {
					set: function( elem, value ) {
						if ( Array.isArray( value ) ) {
							elem.checked = $L.inArray( $L( elem ).val(), value ) > -1 ;
						}
					},
	
					get: function( elem ) {
						 elem.getAttribute( "value" ) === null ? "on" : elem.value;
					}
				},

				'radio': {
					set: function( elem, value ) {
						if ( Array.isArray( value ) ) {
							return ( elem.checked = $L.inArray( $L( elem ).val(), value ) > -1 );
						}
					},
	
					get: function( elem ) {
						return elem.getAttribute( "value" ) === null ? "on" : elem.value;
					}
				},

				'select': {
					get: function( elem ) {
						var value, opt, i,
						options = elem.options,
						index = elem.selectedIndex,
						one= elem.type === 'select-one',
						values = one ? null : [],
						max= one ? ( index + 1 ) : options.length;

						if( index < 0 ) {
							i = max;
						}
						else {
							i = one ? index : 0;
						}

						for( ; i < max; i++ ) {
							opt=options[ i ];

							if( ( opt.selected || i === index ) && !opt.disabled && (!opt.parentNode.disabled || !nodeName(opt.parentNode,'optgroup')))
							{
								value=$L(opt).val();
								if(one)
								{
									return value;
								}
								values.push(value);
							}
						}
						return values;

					},

					set: function(elem,val) 
					{
						var optset,opt,options=elem.options,
						values =$L.makeArray(val),i=options.length;

						while( i-- )
						{
							opt = options[i];
							if(opt.selected = $L.inArray($L.valHooks.option.get(opt),values)>-1)
							{
								optset=true;
							}
						}	

						if( !optset )
						{
							elem.selectedIndex = -1;
						}
						return values;
					}
				},

				option: {
					get: function( elem ) {
						
						var val = $L.attr(elem,'value')

						return val!=null? val: stripAndCollapse($L(elem).text())
					}
				}
			}
	} );

	$L.propHooks = {
		tabIndex: {
			get: function( elem ) {
				var ind = elem.getAttribute( 'tabindex' );

				if( ind ) {
					return parseInt( ind, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) 
					|| rclickable.test( elem.nodeName ) 
					&& elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	};

	function setPositiveNumber( elem, value, subtract ) {
		var matches = rcssNum.exec( value );

		return matches ? Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || 'px' ) :
						value;
	}


} )( window == undefined ? this : window );