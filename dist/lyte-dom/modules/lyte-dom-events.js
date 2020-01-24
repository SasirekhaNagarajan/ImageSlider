( function( window ) {
	var readyQueue = [],
	state = 'initial';

	var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/;

	$L.each( [
		'ajaxStart',
		'ajaxStop',
		'ajaxComplete',
		'ajaxError',
		'ajaxSuccess',
		'ajaxSend'
		], function( i, fnc ) {
			lyteDomObj.prototype[ fnc ] = function( cb ) {
				return this.on( fnc, cb );
			}
	} );

	function executeReady() {
		var fn;
		while( ( fn = readyQueue.shift() ) ) {
			fn.call();
		}
	}

	lyteDomObj.prototype.ready = function( fn ) {
		readyQueue.push( fn );

		if( state === 'initial' 
			&& document.readyState !== 'ready' 
			&& document.readyState !== 'complete' 
		) {
			state = 'registered';
			document.addEventListener( 'DOMContentLoaded', function() {
				executeReady();
			} );
		}
		else if( document.readyState === 'ready' || document.readyState === 'complete' ) {
			executeReady();
		}

		return this;
	}

	
	$L.each( [ 'blur', 'focus', 'focusin', 'focusout', 'resize', 'bindScroll', 'click', 'dblclick',
			'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave',
			'change', 'select', 'submit', 'keydown', 'keypress', 'keyup', 'contextmenu' 
		], 
		function( ind, func ) {
			lyteDomObj.prototype[ func ] = function( data, fn ) {
				var actual = func === 'bindScroll' ? 'scroll' : func;
				
				return arguments.length > 0 ?
					this.on( actual , null, data, fn ) :
					this.trigger( actual );
			}
		} 
	);

	function eventsEmpty( events ) {
		for( var key in events ) {
			if( events[ key ].length > 0 ) {
				return false;
			}
		}

		return true;
	}

	function setEvents( elems, type, cb, sel, data, one ) {

		var orig;
		if( typeof cb === 'boolean' ) {
			cb = retFalse;
		}

		if( typeof cb !== 'function' ) {
			return elems;
		}

		orig = cb;

		if( one ) {
			cb = function( e ) {

				// Manually removing the event handler
				var del = e.delegateTarget, k,
				elemcache = $L._dataPriv.get( del ),
				type = e.type,
				cache = elemcache.events[ type ];

				for( k = 0; k < cache.length; k++ ) {
					if( cache[ k ].handler === cb ) {
						cache.splice( k, 1 );
						break;
					}
				}

				if( eventsEmpty( elemcache.events ) ) {
					del.removeEventListener( type, elemcache.handle );
				}

				orig.apply( this, arguments );
			}
		}

		if( !cb.unId ) {
			cb.unId = $L.ev.unId++;
		}

		return $L.each( elems, function( index, elem ) {
			var ecache = $L._dataPriv.get( elem ), 
			evts, i, name, handler;

			if( !ecache.events ) {
				ecache.events = {}; 
			}

			var evts = type.match( $L.regex.rnothtmlwhite );
			i = evts.length;

			if( !( handler = ecache.handle ) ) {
				ecache.handle = handler = function( evt ) {
					$L.ev.triggered !== evt.type ? $L.ev.dispatch.apply( elem, arguments ) : undefined;
				}
			}

			while( i-- ) {
				name = evts[ i ];
				if( !ecache.events[ name ] ) {
					ecache.events[ name ] = [];
				}

				ecache.events[ name ].push( {
					handler: cb,
					type: name,
					selectors: sel,
					data: data
				} );

				elem.addEventListener( name, handler );
			}
				
		} );
	}

	lyteDomObj.prototype.extend( {
		on: function( eventType, selectors, data, callback ) {
			return $L.ev.add( this, eventType, selectors, data, callback );
		},

		one: function( eventType, selectors, data, callback ) {
			return $L.ev.add( this, eventType, selectors, data, callback, true );
		},

		off: function( eventType, selector, fn ) {
			var type, handler;

			if( eventType.preventDefault && eventType.handleObj ) {
				handler = eventType.handleObj;
				$L( eventType.delegateTarget ).off( eventType.type, handler.selector, handler.handler );

				return this;
			}

			if( typeof eventType === 'object' ) {
				for( type in eventType ) {
					this.off( type, selector, eventType[ type ] );
				}

				return this;
			}

			if( selector === false || typeof selector === 'function' ) {
				fn = selector;
				selector = undefined;
			}

			if( fn === false ) {
				fn = retFalse;
			}

			return $L.each( this, function() {
				$L.ev.removeEvents( this, eventType, selector, fn );
			} );
		},

		trigger: function( type, data ) {
			return this.each( function( i, item ) {
				$L.ev.trigger( type, data, item );
			} );
		},

		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];

			if( elem ) {
				return $L.ev.trigger( type, data, elem, true );
			}
		}
	});

	function acceptData( owner ) {
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	}

	function stopCallback( event ) {
		event.stopPropagation();
	}


	$L.ev = {
		unId: 1,

		removeEvents: function( elem, type, sel, fn ) {
			var cache = $L._dataPriv.hasData( elem ) && $L._dataPriv.get( elem ),
			events = ( cache || {} ).events, types, length, i = 0, j, length, e, handlers, handleObj, cb;

			if( !events ) {
				return ;
			}

			types = ( type || "" ).match( $L.regex.rnothtmlwhite ) || [];
			length = types.length;

			for( ; i < length; i++ ) {
				e = types[ i ];
				handlers = events[ e ];

				for( j = 0; j < handlers.length; j++ ) {
					handleObj = handlers[ j ];
					cb = handleObj.handler;

					if( ( !sel || sel === handleObj.selector || sel === '**' && handleObj.selector )
						&& ( !fn || cb.unId === fn.unId ) ) {
						handlers.splice( j, 1 );
						j--;
					}
				}

				if( !handlers.length ) {
					elem.removeEventListener( e, cache.handle );

					delete events[ e ];
				}
			}

			if( $L.isEmptyObject( events ) ) {
				$L._dataPriv.remove( elem, 'events handle' );
			}

		},

		// setEvents( elems, type, cb, sel, data )
		add: function( elems, type, sel, data, cb, one ) {
			var name;

			// on( object ) => object is passed
			if( typeof type === 'object' ) {
				// selector is given ( data may or may not be given )
				if( typeof sel === 'string' ) {
					for( name in type ) {
						$L.ev.add( elems, name, sel, data, type[ name ], one );
					}
				}
				// selector is not given( data may or may not be given )
				else {
					for( name in type ) {
						$L.ev.add( elems, name, undefined, sel, type[ name ], one );
					}
				}

				return elems;
			}

			// on( sel, cb )
			if( data == null && cb == null ) {
				return setEvents( elems, type, sel, undefined, undefined, one );
			}

			// Either selector or data have not been provided
			else if( cb == null ) {

				// selector given, data not given
				if( typeof sel === "string" ) {
					return setEvents( elems, type, data, sel, undefined, one );
				}

				// selector not given, data given
				else {
					return setEvents( elems, type, data, undefined, sel, one );
				}
			}
			else {
				// Everything is here
				return setEvents( elems, type, cb, sel, data, one );
			}
		},

		trigger: function( event, data, item, handler ) {

			// Doing parentNode here because we don't know what is happening in the focus event
			var path = [ item || document ], 
			cur, 
			tmp, event, args, i = 0, handle, 
			type = typeof event === 'string' ? event : event.type, 
			ontype, last, special, 
			data = typeof data === 'undefined' ? 
					[] : 
					data;

			tmp = last = item = item || document;
			cur = item.parentNode;

			event = event[ $L.expando ] ? event : 
										new $L.Event( type, typeof event === 'object' && event );

			type = event.type;
			ontype = 'on' + type;
			if( !event.target ) {
				event.target = item;
			}

			args = $L.merge( [ event ], data );
			special = $L.ev.special[ type ] || {};

			if( !handler && special.trigger && special.trigger.apply( item, data ) === false ) {
				return ;
			}


			if( !handler && !special.noBubble && !$L.isWindow( item ) ) {
				for( ; cur; cur = cur.parentNode ) {
					path.push( cur );
					tmp = cur;
				}

				if( tmp === ( item.ownerDocument || document ) ) {
					path.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
			

			// Fire both handlers and onclicks
			while( ( cur = path[ i++ ] ) && !event.isPropagationStopped() ) {
				// change event type i guess
				last = cur;
				handle = ( $L._dataPriv.get( cur, 'events' ) || {} )[ type ] 
						&& $L._dataPriv.get( cur, 'handle' );

				// handler
				if( handle ) {
					handle.apply( cur, args );
				}

				handle = ontype && cur[ ontype ];
				if( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, args );

					if( event.result === false ) {
						event.preventDefault();
					}
				}
			}

			// change event type i guess

			if( !handler && !event.isDefaultPrevented() ) {
				if( ( !special._default 
					|| special._default.apply( path.pop(), args ) === false )
					&& acceptData( item ) 
				) {
					if( ontype && $L.isFunction( item[ type ] ) && !$L.isWindow( item ) ) {
						tmp = item[ ontype ];

						if( tmp ) {
							item[ ontype ] = null;
						}

						$L.ev.triggered = type;

						if( event.isPropagationStopped() ) {
							last.addEventListener( type, stopCallback );
						}

						item[ type ]();

						if( event.isPropagationStopped() ) {
							last.removeEventListener( type, stopCallback );
						}

						$L.ev.triggered = undefined;

						if( tmp ) {
							item[ ontype ] = tmp;
						}
					}
				}
				
			}

			return event.result;

		},

		addProp: function( name, hook ) {
			Object.defineProperty( $L.Event.prototype, name, {
				enumerable: true,
				configurable: true,
				get: $L.isFunction( hook ) ? 
					function() {
						if( this.originalEvent ) {
							return hook( this.originalEvent );
						}
					} :
					function() {
						if( this.originalEvent ) {
							return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		dispatch: function( e ) {
			var elem = this,
			event = e.expando ? e : new $L.Event( e ),
			ecache = $L._dataPriv.get( elem ),
			events = ecache.events[ event.type ],
			i, eobj, handler, selector, args = [],
			j, res, context, fnc, data, queue = [], 
			tailQueue = {
				context: elem,
				handler: []
			};

			event.delegateTarget = this;

			args[ 0 ] = event;

			for( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}


			for( i = 0; i < events.length; i++ ) {
				eobj = events[ i ];
				handler = eobj.handler;
				selector = eobj.selectors;
				data = eobj.data;
				
				if( selector && !( event.type === 'click' && event.button >= 1 ) ) {
					for( j = e.target; j !== elem; j = j.parentNode ) {
				 		if( j.nodeType === 1 && !( e.type === 'click' && j.disabled === true ) ) {

				 			if( $L._matches( j, selector ) ) {
				 				event.currentTarget = j;
				 				queue.push( { 
				 					context: j, 
				 					handler: [ eobj ] 
				 				} );
				 			}
				 		}
					}
				}
				else if( !( event.type === 'click' && event.button >= 1 ) ) {
					tailQueue.handler.push( eobj );
				}
				
			}

			queue.push( tailQueue );

			for( 
				i = 0; 

				i < queue.length 
				&& !event.isPropagationStopped();

				i++ 
			) {
				handler = queue[ i ].handler;
				context = queue[ i ].context;

				event.currentTarget = context;

				for( 
					j = 0;

					j < handler.length 
					&& !event.isImmediatePropagationStopped(); 

					j++ 
				) {
					fnc = handler[ j ].handler;
					data = handler[ j ].data;
					event.data = data;
					event.handleObj = handler[ j ];

					res = fnc.apply( context, args );

					if( ( event.result = res ) === false ) {
						event.preventDefault();
						event.stopPropagation();
					}
				}
			}

			return event.result;
		},

		triggered: undefined,

		special: {
			load: {
				noBubble: true
			},

			focus: {
				trigger: function() {
					if( this !== document.activeElement && this.focus ) {
						this.focus();
						return false;
					}
				}
			},

			blur: {
				trigger: function() {
					if( this !== document.activeElement && this.blur ) {
						this.blur();
						return false;
					}
				}
			},

			click: {
				trigger: function() {
					if( this.nodeName.toLowerCase() === 'input' && this.type === 'checkbox' && this.click ) {
						this.click();
						return false;
					}
				}
			},

			beforeunload: {
				postDispatch: function( event ) {
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	}

	var retTrue = function() {
		return true;
	}

	var retFalse = function() {
		return false;
	}

	// Looks like you can add your custom data to your event with props
	// src can also be a type what
	$L.Event = function( src, props ) {

		if( this === $L ) {
			return new $L.Event( src, props );
		}

		if( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

			this.isDefaultPrevented = src.defaultPrevented 
									|| src.defaultPrevented === undefined ?
									retTrue :
									retFalse;

			// This is a text node in mousewheel events for old browsers
			this.target = src.target;	
		}
		else {
			this.type = src;
		}
		
		if( props ) {
			$L.extend( this, props );
		}

		this.timeStamp = src && src.timeStamp || Date.now();
		this[ $L.expando ] = true;
	}

	$L.Event.prototype = {
		constructor: $L.event,
		isDefaultPrevented: retFalse,
		isPropagationStopped: retFalse,
		isImmediatePropagationStopped: retFalse,
		isSimulated: false,

		preventDefault: function() {
			var org = this.originalEvent;

			this.isDefaultPrevented = retTrue;
			if( org && !this.isSimulated ) {
				org.preventDefault();
			}
		},

		stopPropagation: function() {
			var org = this.originalEvent;

			this.isPropagationStopped = retTrue;
			if( org && !this.isSimulated ) {
				org.stopPropagation();
			}
		},

		stopImmediatePropagation: function() {
			var org = this.originalEvent;

			this.isImmediatePropagationStopped = retTrue;
			if( org && !this.isSimulated ) {
				org.stopImmediatePropagation();
			}

			this.stopPropagation();
		}

	}

	$L.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,
		which: function( event ) {
			var button = event.button;

			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}
	
				if ( button & 2 ) {
					return 3;
				}

				if ( button & 4 ) {
					return 2;
				}

				return 0;
			}

			return event.which;
		}
	}, $L.ev.addProp );
} )( window == undefined ? this : window );