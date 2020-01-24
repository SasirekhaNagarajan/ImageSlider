/* Issues 

1. Handle AMD for lyte-dom - ???
4. May need to revisit toggle class. jquery has done some extra stuff
5. is visible is not working...
6. offset needs to set values
7. Need to remove element cache from dom element
8. Selecting no elements should return an object not an array like object for eg: $('asdas')
9. In attr/prop we might have to take tabindex into account. jQuery seemed to have faced an issue.
10. For css and style in .css function you may need
11. test css key-value mappings
12. also vendorpropname and finalpropname in css ..?? why??..
13. Search todos 
14. some global elem value yikes!
15. Memory problem in empty

*/



;( function( window ) {


	var arr = [];
	var slice = arr.slice;
	var push = arr.push;
	var indexOf = arr.indexOf;
	var concat = arr.concat;
	var class2type = {};
	var toString = class2type.toString;
	var hasOwn = class2type.hasOwnProperty;
	var fnToString = hasOwn.toString;
	var ObjectFunctionString = fnToString.call( Object );
	var prefDoc = window.document;

	/* POLYFILLING MATCHES */

	function groupMatch( sel, arr ) {
		var res = [], 
		i = 0, len = arr.length;

		for( ; i < len; i++ ) {
			if( $L._matches( arr[ i ], sel ) ) {
				res.push( arr[ i ] );
			} 
		}

		return res;
	}

	/* END */

	/* ISXML POLYFILL */

	var isXML = function( elem ) {
		var docElem = elem && ( elem.ownerDocument || elem ).documentElement;
		return docElem ? docElem.tagName !== 'HTML' : false;
	}

	/* ISXML POLYFILL */

	

	function toType( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	}


	function isArrayLike( obj ) {
		var length = !!obj && "length" in obj && obj.length,type = toType( obj );
		if ( $L.isFunction( obj ) || $L.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 || typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}

	function containsCustom( sel ) {
		return sel.indexOf( ':visible' ) !== -1;
	}

	function getVisible( sel, context ) {
		var ind = sel.indexOf( ':visible' ),
		sub = sel.substring( 0, ind ),
		nodes, i = 0, ret = [];

		nodes = context.querySelectorAll( sub ? sub : '*' );

		for( ; i < nodes.length; i++ ) {
			if( isVisible( nodes[ i ] ) ) {
				ret.push( nodes[ i ] );
			}
		}

		return ret;
	}

	function processQuery( sel, context, ret ) {
		var groups, i;

		if( containsCustom( sel ) ) {
			groups = sel.split( "," );

			if( groups.length > 1 ) {
				for( i = 0; i < groups.length; i++ ) {
					processQuery( groups[ i ], context, ret );
				}
			}
			else {
				push.apply( ret, getVisible( groups[ 0 ], context ) );
			}
		}
		else {
			domQuery( sel, context, ret );
		}
	}

	function isVisible( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	}

	function domQuery( sel, context, ret ) {
		var nodes = context.querySelectorAll( sel );

		push.apply( ret, nodes );
	}

	var $L = function( selector, context ) {
		return new lyteDomObj( selector, context );
	}

	$L.isFunction = function( obj ) {
    	return typeof obj === "function" && typeof obj.nodeType !== "number";
  	}


	// we removed the  last part of the first regex over here
	var idRegex = /^(?:\s*(<[\w\W]+>)|#([\w-]+))$/,
	rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i ),
	rhtml = /<|&#?\w+;/,
	rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );



	// A regex to match the selector passed in

	var lyteDomObj = function( selector, context ) {
		var rootElem = rootElement, 
		idElem, match, key, idRet;

		if( !selector ) {
			return this;
		}

		if( typeof selector === 'string' ) {
			if( selector[ 0 ] === '<' 
				&& selector[ selector.length - 1 ] === '>' 
				&& selector.length > 3 
			) {
				match = [ null, selector, null ];
			}
			else {
				match = idRegex.exec( selector );
			}

			if( match && ( match[ 1 ] || !context ) ) {
				if( match[ 1 ] ) {
					context = context instanceof lyteDomObj ? context[ 0 ] : context;

					$L.merge( this, $L.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument : document
					) );

					if( rsingleTag.test( match[ 1 ] ) && $L.isPlainObject( context ) ) {
						for( key in context ) {
							if( $L.isFunction( this[ key ] ) ) {
								this[ key ]( context[ key ] );
							}
							else {
								this.attr( key, context[ key ] );
							}
						}
					}

					return this;
				}
				else {
					idElem = document.getElementById( match[ 2 ] );
					idRet = this.pushStack( idElem ? [ idElem ] : [] );
					idRet.isId = true;
					return idRet;
				}
			}

			else if( !context || context instanceof lyteDomObj ) {
				return ( context || rootElem ).find( selector );
			}
			else  {
				return this.constructor( context ).find( selector );
			}
		}
		// Handle nodes passed into lyte-dom
		else if( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			this.singular = true;
			
			return this;
		}

		idRet = $L.makeArray( selector, this );
		if( selector === window ) {
			idRet.singular = true;
		}

		return idRet;
	}

	

	lyteDomObj.prototype = {
		splice: arr.splice, 
		constructor: $L,
		length: 0,
		push: arr.push,
		sort: arr.sort
	}

	$L.prototype = lyteDomObj.prototype;


	// Add a new key with specified value to the object
	$L.extend = lyteDomObj.prototype.extend = function() {
		var key,
		i = 1,
		newObj, oldObj, obj, vessel,
		deep = false,
		length = arguments.length,
		result = arguments[ 0 ] || {};

		if( typeof result === 'boolean' ) {
			deep = result;
			result = arguments[ i ] || {};
			i++;
		}

		if( length == i ) {
			result = this
			i--;
		}

		if( !$L.isFunction( result ) && typeof result !== 'object' ) {
			result = {};
		}
		
		for( ; i < arguments.length; i++ ) {
			obj = arguments[ i ];

			for( key in obj ) {
				newObj = obj[ key ];
				oldObj = result[ key ];

				if( newObj === oldObj ) {
					continue;
				}

				if( newObj && deep ) {
					if( Array.isArray( newObj ) ) {
						vessel = oldObj && Array.isArray( oldObj ) ? oldObj : [];

						result[ key ] = $L.extend( deep, vessel, newObj );
					}
					else if( $L.isPlainObject( newObj ) ) {
						vessel = $L.isPlainObject( oldObj ) ? oldObj : {};

						result[ key ] = $L.extend( deep, vessel, newObj );
					}
					else if( newObj !== undefined ) {
						result[ key ] = newObj;
					}
				}
				else {
					result[ key ] = obj[ key ];
				}
			}
		}
		return result;
	}


	$L.extend( {
		regex: {
			rnothtmlwhite: (/[^\x20\t\r\n\f]+/g)
		},

		_meta: {
			support: {}
		},

		_processInput: function( elems, key, value, fn, ret, eget, raw ) {
			var name, length = elems.length, i = 0;
			var bulk = key == null;

			if( toType( key ) === 'object') {
				ret = true;
				for( name in key ) {
					$L._processInput( elems, name, key[ name ], fn, true );
				}
			}
			else if( value !== undefined ) {
				ret = true;
				if( !$L.isFunction( value ) ) {
					raw = true;
				}

				if( bulk ) {
					if( raw ) {
						fn.call( elems,value );
						fn = null;
					}
					else {
						bulk = fn;
						fn = function( elem, key, value) {
							return bulk.call( $L( elem ), value );
						}
					}
				}

				if ( fn ) {
					for( ; i < length; i++ ) {
						fn( elems[ i ], key, raw ? value : value.call( elems[ i ], i, fn( elems[ i ], key ) ) )
					}
				}
			}

			if( ret ) {
				return elems;
			}

			if( bulk ) {
				return fn.call( elems )
			}	

			return length ? fn( elems[ 0 ], key ) : eget;

		},

		_camelCase: function ( string ) {
			return string.replace( msPrefix, "ms-" ).replace( venPrefix, fcamelCase );
		},

		_removeDupes: function( elems, reverse, context ) {
			if( elems.length > 1 ){
				var nodes = uniqueSort( elems ) ;
				return context.pushStack( reverse ? nodes.reverse() : nodes );	
			}	

			return context.pushStack( elems );
		},

		_checkMatch: function( elem, sel ) {
			return !sel || $L._matches( elem, sel ) ? true : false;
		},

		_matches: function( elem, sel ) {
			var groups, i, ret, ind, sub,

			matchesSelector = elem.matches
							|| elem.matchesSelector
							|| elem.msMatchesSelector
							|| elem.webkitMatchesSelector
							|| elem.mozMatchesSelector;

			if( containsCustom( sel ) ) {
				groups = sel.split( "," );

				if( groups.length > 1 ) {
					for( i = 0; i < groups.length; i++ ) {
						ret = $L._matches( elem, groups[ i ] );
						if( ret ) {
							return true;
						}
					}	
				}
				else {
					sel = groups[ 0 ];
					ind = sel.indexOf( ':visible' );
					sub = sel.substring( 0, ind );

					return matchesSelector.call( elem, sub ? sub : '*' ) && isVisible( elem );
				}
			
			}
			// Should be in an else because there is a case in the if where it doesn't return a value
			else {
				return matchesSelector.call( elem, sel );
			}
		},

		expando: "lytedom" + Math.random().toString().replace(/\D/g,""),
		// Looks like map is going to get a third argument called which is mostly for internal usage

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		map: function( items, cb ) {
			var len = items.length,
			i,value,
			matches = [];

			if( isArrayLike( items ) ) {
				for( i = 0; i < len; i++ ) {
					value = cb( items[ i ], i );
					if( value != null ) {
						matches.push( value );
					}
				}
			}
			else {
				for( i in items ) {
					value = cb( items[ i ], i );
					if( value != null ) {
						matches.push( value );
					}
				}
			}
			
			// Flatten it
			return concat.apply( [], matches );

		},

		grep: function( items, cb, invert ) {
			var i=0, 
			expected = !invert,
			len = ( items || [] ).length, 
			matches = [];

			for( ; i < len; i++ ) {
				var ret = cb.call( window, items[ i ], i );
				if( !!ret === expected ) {
					matches.push( items[ i ] );
				}
			}

			return matches;
		},

		each: function( items, cb ) {
			var i, len;

			if( isArrayLike( items ) ) {
				len = items.length;
				for( i = 0; i < len; i++ ) {
					if( cb.call( items[ i ], i, items[ i ] ) === false ) {
						break;
					}
				}
			}
			else {
				for( i in items ) {
					if( cb.call( items[ i ], i, items[ i ] ) === false ) {
						break;
					}
				}
			}

			return items;
		},

		merge: function( obj, arr ) {
			var len, i, 
			extra = arr.length || 0;
			len = obj.length || 0;
			
			for( i = 0 ; i < extra; i++ ) {
				obj[ len + i ] = arr[ i ];
			}

			obj.length = extra + len;

			return obj;
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}

			return true;
		},

		makeArray: function( arr, results ) {
			var ret = results || [];

			if( arr != null ) {
				if( isArrayLike( Object( arr ) ) ) {
					$L.merge(ret, typeof arr === 'string' ? [ arr ] :arr );
				}
				else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray : function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		isPlainObject: function( obj ) {
			var pro,ctor;

			if( !obj || toString.call( obj ) !== '[object Object]' ) {
				return false;
			}

			pro = Object.getPrototypeOf( obj );

			if( !pro ) {
				return true;
			}

			ctor = hasOwn.call( pro, 'constructor' ) && pro.constructor;

			return typeof ctor === "function" && fnToString.call( ctor ) === ObjectFunctionString;
		},

		parseXML: function( data ) {
			var parser = new DOMParser();

			return parser.parseFromString( data, 'text/xml' );
		},

		Evaluate: function( code ) {
			var node = document.createElement( 'script' );

			node.text = code;
			document.head.appendChild( node ).parentNode.removeChild( node );
		},

		removeLeaks: function( elems ) {
			var i = 0, cache, e;
			for( ; i < elems.length; i++ ) {
				if( ( cache = elems[ i ][ $L._dataPriv.expando ] ) ) {
					if( cache.events ) {
						for( e in cache.events ) {
							$L.ev.removeEvents( elems[ i ], e, cache.handle );
						}
					}

					cache = undefined;
				}

				if( cache ) {
					cache = undefined;
				}
			}
		}
	
	} );

function uniqueSort( res ) {
	var hasDupes = false,
	dupes = [], i = 0, j = 0, elem,
	inp = res.slice( 0 );

	res.sort( function( a, b ) {

		var compare;

		if( a === b ) {
			hasDupes = true;
			return 0;
		}

		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
					a.compareDocumentPosition( b ) :
					1;

		if( compare & 1 ) {
			if( a === document || a.ownerDocument === prefDoc && prefDoc.contains( a ) ) {
				return -1;
			}

			if( b === document || b.ownerDocument === prefDoc && prefDoc.contains( b ) ) {
				return 1;
			}

			return inp ? inp.indexOf( a ) - inp.indexOf( b ) : 0;
		}

		return compare & 4 ? -1 : 1;

	} );

	if( hasDupes ) {
		while( ( elem = res[ i++ ] ) ) {
			if( elem === res[ i ] ) {
				j = dupes.push( i );
			}
		}

		while( j-- ) {
			res.splice( dupes[ j ], 1 );
		}
	}

	return res;
}


	$L.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
		function( i, name ) {
			class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function roundPixelMeasures( val ) {
		return Math.round( parseFloat( val ) );
	}

	( function() {
		var input = document.createElement( 'input' ),
			select = document.createElement( 'select' ),
			opt = select.appendChild( document.createElement( 'option' ) );

		input.type = 'checkbox';

		// Android <= 4.3 bug
		$L._meta.support.checkOn = input.value !== '';

		// IE Bugs
		$L._meta.support.optSelected = opt.selected;

		input = document.createElement( 'input' );
		input.value = 't';
		input.type = 'radio';
		$L._meta.support.radioValue = input.value === 't';
	} )();

	( function() {
		function computeStyleTests() {
			if( !div ) {
				return ;
			}

			var styles, doc = document.documentElement;

			container.style = 'position: absolute; left: -2222px;width:300px;height:5px;';
			div.style = 'position:relative;width:200px;margin: auto; top: 1%;';

			container.appendChild( div );
			doc.appendChild( container );

			styles = window.getComputedStyle( div );

			reliableMarginLeft = roundPixelMeasures( styles.marginLeft ) === 50;
			pixelPos = styles.top !== '1%';

			doc.removeChild( container );
			div = null;
		}

		var div = document.createElement( 'div' ),
		container = document.createElement( 'div' ), 
		reliableMarginLeft, pixelPos;

		$L.extend( $L._meta.support, {
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeft;
			},

			reliablePixelPosition: function() {
				computeStyleTests();
				return pixelPos;
			}
		} );
	} )();


	$L.needsContext = /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i;


	$L.dataid = 0

	function Data() {
		this.expando = $L.expando + $L.dataid++;
	}

	$L.extend( Data.prototype, {
		cache: function( elem ) {
			var res = elem[ this.expando ];

			if( !res ) {
				res = {};

				// Doing accept data stuff over here
				if( elem.nodeType ) {
					elem[ this.expando ] = res;
				}
				else {
					Object.defineProperty( elem, this.expando, {
						value: res,
						configurable: true
					} );
				}
			}

			return res;
		},

		get: function( elem, key ) {
			return key === undefined ? this.cache( elem ) :
										elem[ this.expando ] && elem[ this.expando ][ $L._camelCase( key ) ];
		},
		hasData: function( owner )
		{
			var cache = owner[this.expando];
			return cache !== undefined &&  !$L.isEmptyObject(cache)
		},
		access: function( elem,key,value )
		{
			if( key === undefined || ((key && typeof key==='string') && value === undefined))
			{
				return this.get(elem,key);
			}
			this.set(elem,key,value);
			return value !==undefined ? value : key;
		},
		set: function( elem, data, value )
		{
			var prop,
			cache = this.cache( elem );

			if ( typeof data === "string" ) 
			{
				cache[ $L._camelCase( data ) ] = value;
			} 
			else 
			{
				for ( prop in data ) 
				{
					cache[ $L._camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		remove: function( owner, key )
		{
			var i,cache = owner[ this.expando ];
			if (cache===undefined)
			{
				return;
			}
			if(key !== undefined)
			{
				if( Array.isArray( key ) )
				{
					key =key.map( $L._camelCase )
				}
				else
				{
					key = $L._camelCase( key );
					key = key in cache ?  [key] : ( key.match( $L.regex.rnothtmlwhite ) || [] )
				}
				i = key.length;
				while(i--)
				{
					delete cache[ key[i] ];
				}
			}

			if( key === undefined || $L.isEmptyObject(cache))
			{
				if( owner.nodeType )
				{
					owner[ this.expando ] = undefined;
				}
				else
				{
					delete owner[ this.expando ];
				}
			}
		}
	} );

	$L._dataPriv = new Data();
	var dataUser = new Data();

	lyteDomObj.prototype.extend( {
		toArray: function() {
			return slice.call( this );
		},

		add: function( sel, context ) {
			return this.pushStack(
				uniqueSort( 
					$L.merge(
						this.get(),
						$L( 
							sel, 
							context 
						)
					) 
				)
			);
		},

		addBack: function( sel ) {
			return this.add( sel == null ? this.prevObject : this.prevObject.filter( sel ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		has: function( arg ) {
			var args = $L( arg, this );
			var l = args.length;

			return this.filter( function() {
				var i = 0;
				for( ; i < l; i++ ) {
					// CONTAINS
					if( this !== args[ i ] && this.contains( args[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		is: function( sel ) {
			return filterFn( 
				this, 
				typeof sel === 'string' 
				&& $L.needsContext.test( sel ) ? $L( sel ) : 
												sel || [], 
				false ).length > 0 ;
		},

		not: function( sel ) {
			return this.pushStack( filterFn( this, sel || [] , true ) );
		}

	} );


	// LYTE DOM arrayLike manipulations
	lyteDomObj.prototype.extend( {

		eq: function( i ) {
			var length = this.length;
			i = i < 0 ? length + i : i;
			return this.pushStack( i < 0 || i > length - 1 ? [ ] : [ this[ i ] ] );
		},

		last: function() {
			return this.eq( -1 );
		},

		first: function() {
			return this.eq( 0 );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		map: function( cb ) {
			return this.pushStack( $L.map( this, function( item, index ) {
						return cb.call( item, index, item );
				} )
			);
		},

		filter: function( sel ) {
			return this.pushStack( filterFn( this, sel || [], false ) );
		},

		find: function( sel ) {
			var ret,
			self = this,
			len = this.length, i;

			if( typeof sel !== 'string' ) {
				return this.pushStack( $L( sel ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						// CONTAINS
						if ( self[ i ] !== this && self[ i ].contains( this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for( i = 0; i < len; i++ ) {
				processQuery( sel, this[ i ], ret );
				//domQuery( sel, this[ i ], ret );
			}

			return ret.length > 1 ? uniqueSort( ret ) : ret;
		},

		pushStack: function( elems ) {
			var retElements;

			retElements = $L.merge( this.constructor(), elems );
			retElements.prevObject = this;
			
			return retElements;
		},

		each: function( cb ) {
			return $L.each( this, cb );
		},

		get: function( i ) {

			if ( i == null ) {
				return slice.call( this );
			}

			return i < 0 ? this[ i + this.length ] : this[ i ];
		},

    	empty: function() {
     	 	this.each( function( index, elem ) {
     	 		if( elem.nodeType === 1 ) {
        			$L.removeLeaks( elem.getElementsByTagName( '*' ) );

          			elem.textContent = '';
        		}
     	 	} );
        		

      		return this;
    	},

		text: function( value ) {
      		return $L._processInput( this, null, value, function( value ) {
          		return value === undefined ? 
          		findText( this ) : 
          		this.empty().each( function() {
            		if( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
              			this.textContent = value;
              		}
          		} )
        	}, arguments.length );
    	},

    	clone: function( dAndE, deepDAndE ) {
    		dAndE = ( dAndE===true ) ?true : false;
    		deepDAndE = deepDAndE == null ? dAndE : deepDAndE;

    		return this.map( function() {
    			return $L.clone( this , dAndE ,deepDAndE );
    		} );
    	}
	} );

	function findText( elems ) {
		var node, i = 0, ret = '',
		type = elems.nodeType, elem;

		if( !type ) {
			while( ( node = elems[ i++ ] ) ) {
				ret += findText( node );
			}	
		}
		else if( type === 1 || type === 9 || type === 11 ) {
			if( typeof elems.textContent === 'string' ) {
				return elems.textContent;
			}
			else {
				for( elem = elems.firstChild; elem; elem = elem.nextSibling ) {
					ret += findText( elem );
				}
			}
		}
		else if( type === 3 || type === 4 ) {
			return elems.nodeValue;
		}
		
		return ret;
	}

	var msPrefix = /^-ms-/,
	venPrefix = /-([a-z])/g;

	function fcamelCase( all, letter ) {
		return letter.toUpperCase();
	}

	( function() {
			var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

			input.setAttribute( "type", "radio" );
			input.setAttribute( "checked", "checked" );
			input.setAttribute( "name", "t" );

			div.appendChild( input );

			$L._meta.support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

			div.innerHTML = "<textarea>x</textarea>";
			$L._meta.support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();

	/*
	function getAll( context , tag ) {
		var ret;
		if( typeof context.getElementsByTagName !== 'undefined' )
		{
			ret = context.getElementsByTagName( tag || '*' )
		}
		else if( typeof context.querySelectorAll !== 'undefined' )
		{
			ret = context.querySelectorAll( tag || '*' )
		}
		else
		{
			ret = []
		}
		if( tag === undefined || tag && (context.nodeName && context.nodeName.toLowerCase() === tag.toLowerCase()))
		{
			return $L.merge( [context],ret )
		}
		return ret;
	}

	function setGlobalEval( elems, ref ) {
		var i=0, l= elems.length;

		for( ; i < l; i++ )
		{
			dataPriv.set( elems[i], 'globalEval', 
				!ref || dataPriv.get( ref[i],'globalEval') )
		}
	}

	function cloneCopyEvent( src, dest )
	{
		var i,l,type,oldPdata,curPdata,oldUdata,curUdata,events;

		if( dest.nodeType !== 1 )
		{
			return;
		}

		if( dataPriv.hasData(src))
		{
			oldPdata = dataPriv.access( src );
			curPdata = dataPriv.set( dest, oldPdata );
			events = oldPdata.events;

			if ( events ) 
			{
				delete curPdata.handle;
				curPdata.events = {};

				for ( type in events ) 
				{
					for ( i = 0, l = events[ type ].length; i < l; i++ ) 
					{
						setEvents( [dest], type, events[ type ][ i ].handler );
					}
				}
			}
		}

		if ( dataUser.hasData( src ) ) 
		{
			oldUdata = dataUser.access( src );
			curUdata = $L.extend( {}, oldUdata );

			dataUser.set( dest, curUdata );
		}

	}
	
var rcheckableType = ( /^(?:checkbox|radio)$/i );

	function fixInput( src, dest )
	{
		var nodeName = dest.nodeName.toLowerCase();

		if(nodeName === 'input' && rcheckableType.test(src.type))
		{
			dest.checked = src.checked;
		}
		else if( nodeName === 'input' || nodeName === 'textarea' )
		{
			dest.defaultValue = src.defaultValue;
		}
	} 

	$L.extend( {

		 clone: function( elem, dAndE , deepDAndE)
		{
			var i,l,src,dest,
			clone = elem.cloneNode( true ),
			// CONTAINS
			inp = elem.ownerDocument.contains( elem );

			if( !$L._meta.support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11)
				&& !isXML( elem ) ) {
				dest = getAll(clone);
				src = getAll(elem);

				for( i=0, l=src.length ; i<l ; i++ )
				{
					fixInput( src[i], dest[i])
				}
			}

			if( dAndE )
			{
				if( deepDAndE )
				{
					src = src || getAll(elem);
					dest = dest || getAll( clone );
				
					for( i=0, l=src.length ; i<l ; i++ )
					{
						cloneCopyEvent( src[i], dest[i])
					}
				}
				else
				{
					cloneCopyEvent( elem, clone )
				}
			}

			dest = getAll( clone, 'script' );
			if( dest.length >0 )
			{
				setGlobalEval( dest, !inp && getAll(elem,'script') )
			}

			return clone;
		}
	} ); */
	

	function filterFn( elems, sel, not ) {

		if( typeof sel === 'string' ) {
			if( not ) {
				sel = ":not(" + sel + ")";
			}

			return groupMatch( sel, $L.grep( elems, function( node ) {
				return node.nodeType === 1;
			} ) );

		}
		else if( $L.isFunction( sel ) ) {
			return $L.grep( elems, function( elem, index ) {
				return !!sel.call( elem, index, elem ) !== not;
			} );
		}
		else if( sel.nodeType === 1 ) {
			return $L.grep( elems, function( elem ) {
				return ( elem === sel ) !== not;
			} );
		}
		else {
			return $L.grep( elems, function( elem ) {
				return ( indexOf.call( sel, elem ) > -1 ) !== not;
			} );
		}
	}


var wrapMap = {
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	_default: [ 0, "", "" ]
};


wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

$L.extend( {
	parseHTML: function( val, context ) {
		var matches = rsingleTag.exec( val ),
		parsed;

		if( matches ) {
			return [ context.createElement( matches[ 1 ] ) ];
		}

		parsed = buildFragment( val, context );

		return parsed;
	}
} );

function buildFragment( val, context ) {
	var frag = document.createDocumentFragment(),
	tag, wrap , j, nodes = [], first;

	if( rhtml.test( val ) ) {
		first = frag.appendChild( document.createElement( 'div' ) );
		tag = ( rtagName.exec( val )[ 1 ] || '' ).toLowerCase();
		wrap = wrapMap[ tag ] || wrapMap._default;
		first.innerHTML = wrap[ 1 ] + val + wrap[ 2 ];

		j = wrap[ 0 ];
		while ( j-- ) {
			first = first.lastChild;
		}

		$L.merge( nodes, first.childNodes ); 
		first = frag.firstChild;
		first.textContent = "";
	}

	return nodes;


} 


	$L.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || $L._dataPriv.hasData( elem )
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data);
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem,name );
		},

		_data: function( elem, name, data ) {
			return $L._dataPriv.access( elem,name,data )
		},

		_removeData: function( elem, name ) {
			$L._dataPriv.remove( elem,name );
		}

	} );

	lyteDomObj.prototype.extend( {
		data: function( key, value ) {

			var i, name, data,
			elem = this[ 0 ], 
			attr = elem && elem.attributes;

			if( key === undefined ) {
				if( this.length ) {
					data = dataUser.get( elem );

					if( elem.nodeType === 1 && !$L._dataPriv.get( elem, 'hasDataAttrs' ) ) {
						i = attr.length;
						while( i-- ) {
							if( attr[ i ] ) {
								name = attr[ i ].name;

								if( name.indexOf('data-') === 0) {
									name = $L._camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}

						$L._dataPriv.set( elem, 'hasDataAttrs', true );
					}
				}

				return data;
			}

			if( typeof key === 'object' ) {
				return this.each( function() {
					dataUser.set( this, key )
				} );
			}

			return $L._processInput( this, null, value, function( value ) {
				var data;

				if( elem && value === undefined) {
					data = dataUser.get( elem, key )
					if( data !== undefined ) {
						return data;
					}

					data = dataAttr( elem, key );

					if( data !== undefined ) {
						return data;
					}

					return ;
				}

				this.each( function() {
					dataUser.set( this, key, value )
				} );

			}, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} )
		}
	} );

var rmultiDash = /[A-Z]/g,
rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try  {
				data = getData( data );
			}

			catch ( e ) {}

			dataUser.set( elem, key, data );
		} 
		else {
			data = undefined;
		}
	}

	return data;
}




	var rootElement = $L( document );

	// We have not handled AMD yet
	$L.parse = JSON.parse;
	window.$L = $L;
	window.lyteDomObj = lyteDomObj;




} )( window === undefined ? this : window );

( function( window ) {

	var r = window.requestAnimationFrame
  		|| window.webkitRequestAnimationFrame
  		|| window.mozRequestAnimationFrame
  		|| window.msRequestAnimationFrame
  		|| function( cb ) { return setTimeout( cb, 1000 / 40 ) };

  	var FastDom = function() {
  		this.readOps = [];
  		this.writeOps = [];
  	}

  	FastDom.prototype = {
  		constructor: FastDom, 

  		scheduled: false,

  		measure: function( cb, context ) {
  			cb = context ? cb.bind( context ) : cb;
  			this.readOps.push( cb );
  			this.stagingFn();
  			return cb;
  		},

  		mutate: function( cb, context ) {
  			cb = context ? cb.bind( context ) : cb;
  			this.writeOps.push( cb );
  			this.stagingFn();
  			return cb;
  		},

  		stagingFn: function() {
  			if( !this.scheduled ) {
  				this.scheduled = true;
  				r( this.executeTasks.bind( this ) );
  			}
  		},

  		executeTasks: function() {
  			var error;
  			try {
  				this.execute( this.readOps );
  				this.execute( this.writeOps );
  			}
  			catch( e ) {
  				error = e;
  			}

  			this.scheduled = false;
  			if( this.readOps.length || this.writeOps.length ) {
  				this.stagingFn();
  			}

  			if( error ) {
  				if( this.catch ) {
  					this.catch( error );
  				}
  				else {
  					throw error ;
  				}
  			}
  			
  		},

  		execute: function( cbs ) {
  			var cb;
  			while( cb = cbs.shift() ) {
  				cb();
  			}

  		},

  		clear: function( task ) {
  			return this.remove( this.readOps, task ) || this.remove( this.writeOps, task );
  		},

  		remove: function( tasks, task ) {
  			var ind = tasks.indexOf( task );
  			return ind !== -1 ? !!tasks.splice( ind, 1 ) : false;
  		},

  		catch: null
  	}

  	window.$L.fastdom = new FastDom();





} )( typeof window !== 'undefined' ? window : this );

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


			var xml = xhr ? xhr() : new XMLHttpRequest();

			
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