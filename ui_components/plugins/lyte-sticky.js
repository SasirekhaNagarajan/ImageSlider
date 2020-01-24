;( function(){
	if( window.lyteDomObj ){

		var isSticky = {}, span = document.createElement( 'span' );
		span.style.position = "sticky";
		if( span.style.position == "sticky" ){
			isSticky.sticky = true;
		} else {
			span.style.position = "-webkit-sticky";
			if( span.style.position == "-webkit-sticky" ){
				isSticky.webkitsticky = true;
			} else {
				isSticky.sticky = false;
			}
		}
		span = undefined;

		function getPos( pos ) {
			if( _lyteUiUtils.getRTL() ) {
				if( pos == "left" ){
					return 'right';
				} else if( pos == "right" ) {
					return "left";
				}

			} 
			return pos;
		}

		function globalScroll( evt ){
			var target = evt.target;
			if( target._sticky ){
				findScroll.call( target );
			}
		}

		function makeSticky( arg ){
			var elms = this.parentElement.querySelectorAll( ".lyteSticky " + arg.query );
			for( var i = 0; i < elms.length; i++ ){
				var sty = elms[ i ].style, parstyle = elms[ i ].parentElement.style
				elms[ i ]._sticky = { val : sty[ arg.position ], position : sty.position, parPos : parstyle.position };
				if( isSticky.sticky != false ) {
					sty.position = isSticky.sticky ? "sticky" : ( isSticky.webkitsticky ?  "-webkit-sticky" : '' );
					sty[ arg.position ] = arg.offset + 'px';
				} else {
					sty.position = "relative";
					parstyle.position = "relative";
				}

			}
		}

		function unbind( arg ){
			var elms = this.parentElement.querySelectorAll( ".lyteSticky " + arg.query );
			for( var i = 0; i < elms.length; i++ ){
				var obj = elms[ i ]._sticky, style = elms[ i ].style, parstyle = elms[ i ].parentElement.style;
				style.position = obj.position;
				parstyle.position = obj.parPos;
				style[ arg.position ] = obj.val;
				delete elms[ i ]._sticky;
			}
		}

		function findScroll(){
			if( !this.offsetParent ) {
				return
			}
			var arg = this._sticky, offs = [], slft, stp, elms = this.parentElement.querySelectorAll( ".lyteSticky " + arg.query ),
			stp = this == document.body ? window.pageYOffset : this.scrollTop, slft = this == document.body ? window.pageXOffset : this.scrollLeft,
			pos = arg.position, vert = [ 'bottom', 'top' ].indexOf( pos ) != -1, 
			bcr = this.getBoundingClientRect(), wid = vert ? "height" : "width", ofset = arg.offset;
			if( ( !vert && arg._prevx != slft ) || ( vert && arg._prevy != stp ) ) {
				for( var i = 0; i < elms.length; i++ ) {
					offs[ i ] = {};
					offs[ i ].node = elms[ i ]; elms[ i ].parent = elms[ i ].parentElement;
					offs[ i ].curBcr = elms[ i ].getBoundingClientRect();
					offs[ i ].parBcr = elms[ i ].parentElement.getBoundingClientRect();
				}
				for( var i = 0; i < elms.length; i++ ) {
					var cEl = offs[ i ], pBcr = cEl.parBcr, curBcr = cEl.curBcr, node = cEl.node.style,
					fact = 1, val = 0, flag = false;
					if( [ 'bottom', 'right' ].indexOf( pos ) != -1 ) {
						fact *= -1;
					}
					if( fact > 0 ) {
						if( parseInt( pBcr[ pos ] ) <= parseInt( bcr[ pos ] ) && ( parseInt( pBcr[ pos ] + pBcr[ wid ] ) >= parseInt( bcr[ pos ] + ofset ) ) ){
							var min = bcr[ pos ] - ( pBcr[ pos ] )
						 	val = min + ofset;
							flag = true;
						}
					} else {
						if( parseInt( pBcr[ pos ] ) >= parseInt( bcr[ pos ] ) && ( parseInt( pBcr[ pos ] - pBcr[ wid ] ) < parseInt( bcr[ pos ] - ofset ) ) ){
							var min = pBcr[ pos ] - bcr[ pos ];
							val = min + ofset;
							flag = true;
						}
					}
					if( flag ) {
						node[ pos ] = val + 'px';
					}
				}
			}
			arg._prevx = slft; arg._prevY = stp;
		}

		lyteDomObj.prototype.destroySticky = function(){
			$L( '.lyteSticky' ).removeSticky();
			window.removeEventListener( 'scroll', globalScroll, true )
			return this;
		}

		lyteDomObj.prototype.removeSticky = function(){
			for( var i = 0; i < this.length; i++ ){
				var obj = this[ i ]._sticky;
				if( obj ) {
					clearTimeout( obj._stickytime ); clearTimeout( obj._init );
					clearTimeout( obj._genscroll );
					unbind.call( this[ i ], obj ); 
					this[ i ].classList.remove( 'lyteSticky' );
					delete this[ i ]._sticky; 
				}
			}
			return this;
		}

		lyteDomObj.prototype.sticky = function( obj ){
			obj = obj || {};
			obj.position = getPos( obj.position ) || "top";
			obj.offset = obj.offset || 0;
			obj.query = obj.query || "*>*:first-child:not(template)";
			for( var i = 0; i < this.length; i++ ){
				if( this[ i ]._sticky ){
					$L( this[ i ] ).removeSticky();
				}
				this[ i ].classList.add( 'lyteSticky' );
				this[ i ]._sticky = JSON.parse( JSON.stringify( obj ) );
				this[ i ]._sticky._stickytime = setTimeout( makeSticky.bind( this[ i ] ), 20, this[ i ]._sticky )
				if( isSticky.sticky == false ) {
					this[ i ]._sticky._init = setTimeout( findScroll.bind( this[ i ] ), 40 )
				}
			}
		 	return this;
		}
		if( isSticky.sticky == false ){
			window.addEventListener( 'scroll', globalScroll, true )
		}
	}
} )( window )