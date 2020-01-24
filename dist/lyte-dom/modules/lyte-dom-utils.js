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