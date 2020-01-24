;( function() {
	if( lyteDomObj ) {
		function fndChdrn( ori ){
			var query = ".lyteScrollSpy " + this._scrollspy.obj.query +":not(template)", ignore = this._scrollspy.obj.ignore;
			if( ignore.constructor == String ) {
				ignore = ignore.split( ',' );
			}
			for( var i = 0; i < ignore.length; i++ ) {
				query += ":not(" + ignore[ i ].trim() + ")";
			}
			
			return this.parentElement.querySelectorAll( query );
		}

		function intEl( prev, curr, cd ){
			var grp = [];
			for( var i = 0; i < cd.length; i++ ) {
				if( cd[ i ] != prev && cd[ i ] != curr && ( ( cd[ i ].off > prev.off && cd[ i ].off < curr.off ) || ( cd[ i ].off < prev.off && cd[ i ].off > curr.off ) ) ) {
					grp.push( cd[ i ] ); 
				}
			}	
			return grp;
		}

		function oT( src, sT, flag ) {
			var bcr = src.getBoundingClientRect();
			return Math.round( Math.max( 0, ( -this.getBoundingClientRect().top + sT + bcr.top + ( flag ? bcr.height : 0 ) ) ) )
		}

		function spyall( cd, hgt, sT, cge ) {
			var curr = [], prev = [], map = [], chged;
			for( var i = 0; i < cd.length; i++ ) { 
				map.push( { topp : oT.call( this, cd[ i ], sT ), hgt : cd[ i ].offsetHeight } );
				var cls = $L( cd[ i ] ).hasClass( 'lyteSpyActive' );
				if( ( map[ i ].topp <= sT + hgt && map[ i ].topp > sT  ) || ( ( map[ i ].topp + map[ i ].hgt ) >= sT && ( map[ i ].topp + map[ i ].hgt ) <= sT + hgt ) || ( map[ i ].topp <= sT && ( map[ i ].topp + map[ i ].hgt ) >= sT + hgt ) ) {
						if( !cls ) {
							$L( cd[ i ] ).addClass( 'lyteSpyActive' );
							chged = true
						}
						curr.push( cd[ i ] )
				} else if( cls ) {
					$L( cd[ i ] ).removeClass( 'lyteSpyActive' );
					prev.push( cd[ i ] ) 
					chged = true
				}	
			}
			if( chged && cge && cge.constructor == Function ){
				cge( curr, prev ,this )
			}
		}

		function setClass( cd ){
			var wO = this._wheelObj, hgt = this.offsetHeight, spy = this._scrollspy.obj, sT = ( wO ? wO.scrollTop : ( this == document.body ? window.pageYOffset : this.scrollTop ) ), prev = this.parentElement.querySelector( '.lyteScrollSpy ' + spy.query + '.lyteSpyActive:not(template)' ), curr, cge = spy.onChange;
			if( cd.length ) {
				if( spy.position == "all" ) {
					spyall.call( this, cd, hgt, sT, cge )
				} else {
					if( spy.position == "bottom" ) {
						for( var i = cd.length - 1; i >= 0; i-- ) {
							cd[ i ].off = oT.call( this, cd[ i ], sT, true ); 
							if( sT + hgt - this._scrollspy.obj.offset > cd[ i ].off ) {
								if( curr && cd[ i ].off < curr.off ){
									continue;
								}
								curr = cd[ i ];
							}
						}
					} else {
						for( var i = 0; i < cd.length; i++ ) {
							cd[ i ].off = oT.call( this, cd[ i ], sT ) + cd[ i ].offsetHeight; 
							if( sT + this._scrollspy.obj.offset < cd[ i ].off ) {
								if( curr && cd[ i ].off > curr.off ){
									continue;
								}
								curr = cd[ i ];
							}
						}
					}
					if( prev != curr ) {
						if( prev ){
							prev.classList.remove( 'lyteSpyActive' );
						}
						curr.classList.add( 'lyteSpyActive' );
						if( cge && cge.constructor == Function ){
							cge( curr, prev, prev ? intEl.call( this, prev, curr, cd ) : [] ,this )
						}
					}
				}
			}	

		}
		function innfun(){
			var chdrn = setClass.call( this, fndChdrn.call( this, this.children ) );	
			delete this._scrollspy.obj._spytime;
		}

		function glbscrll( evt ) {
			var tg = evt.target;
			if( tg._scrollspy ) {
				if( tg._scrollFun ) {
					clearTimeout( tg._scrollspy.obj._spytime );
					tg._scrollspy.obj._spytime = setTimeout( innfun.bind( tg ) , 0 );
				} else {
					innfun.call( tg );
				}
			}
		}
		lyteDomObj.prototype.removeScrollspy = function(){
			for( var i = 0; i < this.length; i++ ) {
				this[ i ].classList.remove( 'lyteScrollSpy' )
				clearTimeout( this[ i ]._scrollspy.obj._spytime );
				delete this[ i ]._scrollspy;
			}
		}
		lyteDomObj.prototype.scrollspy = function( obj ) {
			obj = obj || {};
			obj.activeClass = obj.activeClass || 'lyteSpyActive';
			obj.offset = obj.offset || 0; obj.ignore = obj.ignore || [];
			obj.position = obj.position || "top";
			obj.query = obj.query || ">*";
			for( var i = 0; i < this.length; i++ ) {
				this[ i ].classList.add( 'lyteScrollSpy' )
				this[ i ]._scrollspy = { obj : obj } ;
				setTimeout( glbscrll, 20, { target : this[ i ] } );
			}
			return this;	
		}
		window.addEventListener( 'scroll', glbscrll, true );
	}
} )( window );