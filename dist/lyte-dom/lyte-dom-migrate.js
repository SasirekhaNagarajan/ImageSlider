( function( window ) {
	$L.migrateEnabled = true;

	var warnings = {};

	function initialWarn() {
		console.warn( 'Lyte-Dom-Migrate has been enabled. Some of the removed functions are now being supported through migrate plugin.' );
	}

	function displayWarn( funcName ) {

		if( warnings[ funcName ] ) {
			return ;
		}

		warnings[ funcName ] = true;
		console.warn( 'The ' + funcName + ' has been removed and is now being supported through the migrate plugin.' );
	}


	var boundEvent = {};

	Object.defineProperty( lyteDomObj.prototype, 'e', {
		get: function() {
			displayWarn( '.e property' );

			if( this.singular || this.isId ) {
				return this[ 0 ];
			}

			return this;
		}
	} );

	lyteDomObj.prototype.iterator = function( fn ) {
		// Do we need string check ??
		displayWarn( 'iterator function' );

		this.each( function( index, item ) {
			fn.call( undefined, item );
		} );
	}

	lyteDomObj.prototype.insertBefore = function( node ) {
		displayWarn( 'insertBefore function' );

		this.iterator( function( item ) {
			item.parentElement.insertBefore( node, item );
		} );
	}

	lyteDomObj.prototype.insertAfter = function( node ) {
		displayWarn( 'insertAfter function' );

		this.iterator( function( item ) {
			item.after( node );
		} );
	}

	lyteDomObj.prototype.html = function( data ) {
		displayWarn( 'html function' );

		if( data || data === '' ) {
			this.iterator( function( node ) {
				node.innerHTML = data;
			} );
		}
		else {
			return this[ 0 ].innerHTML;
		}
	}

	lyteDomObj.prototype.append = function( node ) {
		displayWarn( 'append function' );

		this.iterator( function( item ) {
			item.appendChild( node );
		} );
	}

	lyteDomObj.prototype.replace = function( node ) {
		this.iterator( function( item ) {
			item.parentElement.replaceChild( node, item );
		} );
	}

	lyteDomObj.prototype.empty = function() {
		displayWarn( 'empty function' );

		this.iterator( function( node ) {
			while ( node && node.lastChild ) {
			  node.removeChild( node.lastChild );
			}
		} );
	}

	lyteDomObj.prototype.bind = function( eventName, fn ) {
		displayWarn( 'bind function' );

		eventObjetManupulation( this.e, eventName, fn, true );
		if(!boundEvent[eventName]){
			if(this.e === window){
				window.addEventListener(eventName,handleEvent);
			}
			document.addEventListener(eventName,handleEvent);
			boundEvent[eventName] = true;
		}
	}

	lyteDomObj.prototype.unbind = function( eventName, fn ) {
		displayWarn( 'unbind function' );

		if(this.e["_"+eventName].hasOwnProperty(fn.name)){
			eventObjetManupulation(this.e,eventName,fn);
		}
		else{
			console.error("Improper function name");
		}
	}

	function eventObjetManupulation( e, eventName, fn, isSet ) {
		if( typeof e !== "string" && e.length ) {
			var nodesLength = e.length;
			for( var i = 0; i < nodesLength; i++ ) {
				isSet ? setEventsObject( e[ i ], eventName, fn ) : deleteEventsObject( e[ i ], fn.name );
			}
		}
		else{
			isSet ? setEventsObject( e, eventName, fn ) : deleteEventsObject( e, eventName, fn.name );
		}
	}

	function setEventsObject( ele, eventName, fn ) {
		var localKey = ( new Date() ).getTime;

		if( !ele[ "_" + eventName ] ) {
			ele[ "_" + eventName ] = {};
		}

		if( fn.name ) {
			ele[ "_" + eventName ][ fn.name ] = fn;
		}
		else{
			ele[ "_" + eventName ][ localKey ] = fn;	
		}
	}

	function deleteEventsObject( ele, eventName, fnName ) {
		if( ele[ "_" + eventName ].hasOwnProperty( fnName ) ) {
			delete ele[ "_" + eventName ][ fnName ];
		}
	}

	function handleEvent(event) {
		window.event = event || window.event;
		var targetElem = event.target;
		while(targetElem && targetElem !== document && !targetElem.hasOwnProperty("_"+event.type)){
			targetElem = targetElem.parentElement ? targetElem.parentElement : document;
			event._currentTarget = targetElem;
		}

		if(targetElem && targetElem.hasOwnProperty("_"+event.type)){
			var stopEvent = false;
			do {
				for(key in targetElem["_"+event.type]){
					var bubbleEvent = targetElem["_"+event.type][key].call(event.target,event);
					if(!bubbleEvent && !stopEvent){
						stopEvent = true;
					}
				}
				targetElem = targetElem.parentElement;
	
			}while(!stopEvent && targetElem);
		}
	}

	if( !lyteDomObj.prototype.hide ) {
		lyteDomObj.prototype.hide = function( node ) {
			displayWarn( 'hide function' );
			this.iterator( function( item ) {
				item.style.display = 'none';
			} );
		}
	}

	if( !lyteDomObj.prototype.show ) {
		lyteDomObj.prototype.show = function( node ) {
			displayWarn( 'show function' );
			this.iterator( function( item ) {
				item.style.display = 'inherit';
			} );
		}
	}

	initialWarn();
} )( window );