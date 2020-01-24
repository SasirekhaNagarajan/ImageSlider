;( function() {
    if( lyteDomObj ) {
        var uA = navigator.userAgent, isSaf = { uA : uA, isUbuntu : /ubuntu/ig.test( uA ), isIpad : /ipad/ig.test( uA ) , safari : /safari/ig.test( uA ), isIE11Lyte : /rv:11/ig.test( uA ), isEdgeLyte : /Edge/ig.test( uA ),  mode : {}, chrome  : !!window.chrome , firefox : /firefox/ig.test( uA ) };
        function appendDiv( className, obj, dir ) {
            var div = document.createElement( 'div' ), innerDiv;
            div.className = className;
            div._scrolldiv = this;
            div.style.visibility = 'hidden';
            innerDiv = document.createElement( 'div' );
            innerDiv.classList.add( 'lyteScrollDiv' );
            if( obj.handlerClass ) {
                innerDiv.classList.add( obj.handlerClass );
            }
            if( obj.containerClass ) {
                div.classList.add( obj.containerClass )
            }
            div.appendChild(innerDiv);
            if( dir ) {
                innerDiv._direction = dir;
                if( obj.horizontalContainerClass ){
                    div.classList.add( obj.horizontalContainerClass );
                }
                if( obj.horizontalHandlerClass ) {
                    innerDiv.classList.add( obj.horizontalHandlerClass );
                }
                this._horiDiv = div;
            } else {
                if( obj.verticalContainerClass  ) {
                    div.classList.add( obj.verticalContainerClass );
                }
                if( obj.verticalHandlerClass ){
                    innerDiv.classList.add( obj.verticalHandlerClass );
                }
                this._vertDiv = div;
            }
            this.parentElement.appendChild( div )
            div.addEventListener( 'click', outerDivClick, true );
            innerDiv.addEventListener( 'mousedown', innerDivClick );
            return div;
        }   

        function set( elem, prop, val ) {
            elem.style[ prop ] = val
        }

        function checkscrollable( evt ){
            evt = evt || { target : this };
            var target = evt.target.correspondingElement || evt.target, ret;
            while( target && target != this ) {
                if( target.classList.contains( 'preventWheel' ) ) {
                    ret = true;
                    break;
                }
                target = target.parentElement
            }
            return ret
        }

        function check( flag, elem, obj, mode, evt ){
            var fg;
            evt = evt || {}
            if( flag ) {
                if( !( [ 'mouseenter', 'touchstart' ].indexOf( evt.type ) != -1 && this._scrollData.showOn == 'scroll' ) ){
                    this._enableScroll = true
                    if( elem ) {
                        set( elem, 'visibility', 'visible' )
                        elem.classList.add( 'visible' )
                        updatePos.call( this, mode, undefined, {}, obj )
                    }
                }
                fg = true
            } else {
                if( elem ) {
                    set( elem, 'visibility', 'hidden' )
                    elem.classList.remove( 'visible' )
                }
            }
            return fg
        }

        function initialWheel( evt ){
            this.removeEventListener( 'wheel', initialWheel, true )
            if( !this.classList.contains( 'eventBinded' ) ){
                mouseenter.call( this, { type : 'mouseenter' } )
            }
            evt.preventDefault()
        }
        function mouseenter( evt ) {
            if( this.classList.contains( 'eventBinded' ) && evt != true ){
                return
            }
            if( evt.type == 'mouseenter' && this._prtmseenr ){
                return;
            }
            var flag, obj = { scrollLeft : this.scrollLeft, scrollTop : this.scrollTop, scrollWidth : this.scrollWidth, scrollHeight : this.scrollHeight, bcr : this.getBoundingClientRect() };
            this._wheelObj = obj
            if( this.classList.contains( 'lyteTableScroll' ) ){
                forTable.call( this, obj )
            }
            this._direction = getComputedStyle(  this ).direction;
            obj.vertbcr = this._vertDiv ?  this._vertDiv.getBoundingClientRect() : {}
            obj.horbcr = this._horiDiv ?  this._horiDiv.getBoundingClientRect() : {}
            flag = check.call( this, !fitForScroll.call( this, true, obj ), this._vertDiv, obj, true, evt )
            flag = check.call( this, !fitForScroll.call( this, false, obj ), this._horiDiv, obj, false, evt ) || flag
            if( flag && evt ) {
                this._mouseleave = mouseleave.bind( this.parentElement );
                if( evt.type == "touchstart" ) {
                   if( evt.touches.length == 1 ){
                        clearTimeout( this._tchtime );
                        document.addEventListener( 'touchcancel', this._mouseleave, true )
                    } else {
                        return;
                    }
                } else {
                    this.addEventListener( 'wheel', wheelEvent, true );
                    this.addEventListener('keydown', keydownFunc, true);
                    if( this._scrollData.showOn == 'scroll' ){
                        this.addEventListener( 'mousemove', hideScrollbar, true );
                    }
                }
                this._allowTouch = true;
                document.addEventListener( 'touchend', this._mouseleave, true )
                this.classList.add( 'eventBinded' )
                this._tabindex = this.tabIndex;
                if(this.tabIndex == -1){
                    this.tabIndex = 0;
                }
            }
        } 

        function keydownFunc( evt ) {
            if( evt.target != this ){
                return
            }
            var keyCode = evt.keyCode, obj = { scrollLeft : this.scrollLeft, scrollTop : this.scrollTop, scrollWidth : this.scrollWidth, scrollHeight : this.scrollHeight, bcr : this.getBoundingClientRect() };
            if([37, 38, 39, 40].indexOf(keyCode) != -1){
                var step = this._scrollData.keyStep, pos, mode, meta = evt.metaKey || evt.ctrlKey, dir = this._direction;
                if( keyCode == 38 ){
                    pos = meta ? ( -obj.scrollTop ) : -step
                    mode = true
                } else if( keyCode == 40 ){
                    pos = meta ? ( obj.scrollHeight - obj.scrollTop ) : step
                    mode = true
                }else if( keyCode == 39 ){
                    if( dir == 'rtl' ) {
                        var val; 
                        if( isSaf.isIE11Lyte || isSaf.isEdgeLyte ) {
                            val = obj.scrollWidth - obj.scrollLeft;
                        } else if( isSaf.firefox || isSaf.safari ) {
                            val = -obj.scrollLeft;
                        } else {
                            val =  obj.scrollWidth - obj.bcr.width;
                        }
                        pos = meta ? ( val ) : step
                    } else {
                        pos = meta ? ( obj.scrollWidth - obj.bcr.width ) : step
                    }
                } else {
                    if( dir == 'rtl' && ( isSaf.firefox || isSaf.safari ) ) {
                        pos = meta ? ( obj.bcr.width - obj.scrollWidth ) : -step;
                    } else {
                        pos = meta ? ( -obj.scrollLeft ) : -step
                    }
                }
                if( pos != 0 && shouldPrevent.call( this, obj, mode, pos ) ){
                    this[ mode ? 'scrollTop' : 'scrollLeft' ] += pos;
                    scroll.call( this, evt )
                    evt.preventDefault()
                }
            }
        }

        function mouseleave( evt ){
            evt = evt || {};
            if( ( evt.relatedTarget && this.contains( evt.relatedTarget ) ) || document._scrollmouseup ){
                return
            }
            var bars = this.querySelectorAll( '.lyteScrollContainer' ), scrlDiv = this._scrolldiv;
            if( bars.length ) {
                for(  var i = 0; i < bars.length; i++ ) {
                    bars[ i ].classList.remove( 'visible' )
                    bars[ i ].style.visibility = 'hidden';
                }
                if( evt.type == 'mouseleave' ) {
                    scrlDiv.removeEventListener('wheel', wheelEvent, true);
                    scrlDiv.removeEventListener('keydown', keydownFunc, true);
                    scrlDiv.removeEventListener( 'mousemove', hideScrollbar, true );
                    scrlDiv.addEventListener( 'wheel', initialWheel, true );
                } else if( evt.type == 'touchend' || evt.type == "touchcancel" ) {
                    scrlDiv._prtmseenr = true;
                    scrlDiv._tchtime = setTimeout( function(){
                        delete scrlDiv._prtmseenr;
                    }, 500 )
                    document.removeEventListener( 'touchcancel', scrlDiv._mouseleave, true )
                }
                if( evt.type ){
                    document.removeEventListener( 'touchend', scrlDiv._mouseleave, true )
                    delete scrlDiv._allowTouch;
                    scrlDiv.classList.remove( 'eventBinded' );
                    scrlDiv.tabIndex = this._scrolldiv._tabindex;
                    delete scrlDiv._tabindex; delete scrlDiv._wheelObj;
                    delete scrlDiv._prevPosY; delete scrlDiv._mouseleave;
                    delete scrlDiv._prevPosX; delete scrlDiv._wheelEvt;
                }
                delete this._scrolldiv._enableScroll;
            }
        }

        function outerDivClick( evt ) {
            if( !this.classList.contains( 'visible' ) ){
                return
            }
            var elem = this._scrolldiv, mode, inn = this.children[ 0 ], outBcr = this.getBoundingClientRect(), inBcr = inn.getBoundingClientRect(),
            obj = { scrollLeft : elem.scrollLeft, scrollTop : elem.scrollTop, scrollWidth : elem.scrollWidth, scrollHeight : elem.scrollHeight, bcr : elem.getBoundingClientRect() },
            hgt = 'width', top1 = 'left', sT = 'scrollLeft', sH = 'scrollWidth', bt = 'right', cY = 'clientX';
            if( this.classList.contains( 'lyteTableScroll' ) && !obj.$nodeClient ){
                forTable.call( this, obj )
            }
            obj.vertbcr = this._vertDiv ?  this._vertDiv.getBoundingClientRect() : {}
            obj.horbcr = this._vertDiv ?  this._horiDiv.getBoundingClientRect() : {}
            if(!inn._direction){
                mode = true;
                hgt = 'height', top1 = 'top', sT = 'scrollTop', sH = 'scrollHeight', bt = 'bottom', cY = 'clientY';
            }
            var scramt = evt[ cY ] - ( inBcr[ top1 ] + inBcr[ hgt ] / 2 ), newsL;
            newsL = ( scramt / ( obj.bcr[ hgt ] + obj.bcr[ top1 ] - outBcr[ top1 ] ) * obj[ sH ] )
            elem[ sT ] += ( newsL ) ;
            scroll.call( elem, evt )
        }

        function innerDivClick( evt ) {
            document._scrollmousemove = outerDivClick.bind( this.parentElement )
            document._scrollmouseup = mouseup.bind( this.parentElement )
            document.addEventListener( 'mousemove', document._scrollmousemove, true )
            document.addEventListener( 'mouseup', document._scrollmouseup, true )
            evt.preventDefault()
            evt.stopPropagation()
        }

        function mouseup( evt ) {
            document.removeEventListener( 'mousemove', document._scrollmousemove, true )
            document.removeEventListener( 'mouseup', document._scrollmouseup, true )
            delete document._scrollmousemove;
            delete document._scrollmouseup;
            if( !this._scrolldiv.contains( evt.target.correspondingElement || evt.target ) && this._scrolldiv._scrollData.showOn != 'always' ){
                mouseleave.call( this._scrolldiv.parentElement, { type : 'mouseleave' } )
            }
        }

        function mousedown( evt ) {
            if( document._scrollmouseup ) {
                return
            }
            document._scrollmouseup = mouseup.bind( this.parentElement );
            document.addEventListener( 'mouseup', document._scrollmouseup, true )
        }

        function fitForScroll( mode, obj ) {
            var sL = 'scrollTop', sW = 'scrollHeight', wd = 'height', elem = mode ? this._vertDiv : this._horiDiv;
            if( !mode ) {
                sL = 'scrollLeft' , sW = 'scrollWidth', wd = 'width';
            }
            if( obj[ sL ] + obj.bcr[ wd ] >= ( obj[ sW ] - 5 ) && obj[ sL ] == 0 ){
                if( elem && elem.classList.contains( 'visible' ) ) {
                    check.call( this, false, elem )
                }
                return true
            }
        }

        function wheelEvent( evt ){
             if( checkscrollable.call( this, evt ) ) {
                    return
                }
            if( evt.type == 'touchmove' ) { 
                if( this._allowTouch && evt.touches.length == 1 ) {
                    var curr = evt.touches[ 0 ];
                    wheelEvent1.call( this, evt, [ (this._prevPosX || curr.clientX ) - curr.clientX,  ( this._prevPosY || curr.clientY ) - curr.clientY ] )
                    this._prevPosY = curr.clientY;
                    this._prevPosX = curr.clientX;
                }
            } else {   
                wheelEvent1.call( this, evt )
            }
        }

        function shouldPrevent( obj, mode, val ){
            var sL = 'scrollTop', sW = 'scrollHeight', wd = 'height', elem = mode ? this._vertDiv : this._horiDiv;
            if( !mode ) {
                sL = 'scrollLeft' , sW = 'scrollWidth', wd = 'width';
            }
            if( ( val > 0 && Math.round( obj[ sL ] + obj.bcr[ wd ] ) >= obj[ sW ] ) || ( val < 0 && Math.round( -obj[ sL ] + obj.bcr[ wd ] ) >= obj[ sW ] ) ){
                return false
            } else if( !mode && isSaf.firefox && this._direction == 'rtl' && ( val < 0 && obj[ sL ] == 0 ) ){
                return true
            } else if( ( val < 0 && obj[ sL ] == 0 ) && !( val < 0 && isSaf.safari && this._direction == 'rtl' && obj[ sL ] == 0 ) ){
                return false;
            }
            return true
        }

        function wheelEvent1( evt, tch ) {
            if( this._scrollData.showOn == 'scroll' ){
                if( !this._enableScroll ){
                    mouseenter.call( this, true )
                    evt.preventDefault();
                    return
                }
                clearTimeout( this._scrollplugin )  
                this._scrollplugin = setTimeout(mouseleave.bind( this.parentElement, {} ), this._scrollData.tOut )
            }

            function getWheel( evt ) {
                var fact1 = this._scrollData.wheelSpeed, fact = fact1, uA = isSaf.uA.toLowerCase(), inf = this._infiniteScroll, ie = isSaf.isIE11Lyte;
                if( ( uA.indexOf('edge') != -1 || (( uA.indexOf('trident') != -1 || uA.indexOf('msie') != -1)) ) && this._direction == 'rtl' ){
                    fact1 *= -1
                }
                if( evt.shiftKey ) {
                    fact1 *= -1; fact *= -1; 
                }
                var x, y, delta = evt.deltaMode && evt.deltaMode == 1;
                if( evt.deltaX > 0 ) {
                    x = Math.max( delta ? ( evt.deltaX * 6 ) :  evt.deltaX, (inf ? 0 : 4 ) )
                } else if( evt.deltaX < 0 ) {
                    x = Math.min( inf ? 0 : -4, delta ? ( evt.deltaX * 6 ) : evt.deltaX )
                }
                if( evt.deltaY > 0 ) {
                    y = Math.min( Math.max( delta ? ( evt.deltaY * 6 ) : evt.deltaY, inf ? 0 : 4 ), ie ? 20 : Infinity )
                } else if( evt.deltaY < 0 ) {
                    y = Math.max( Math.min( inf ? 0 : -4, delta ? ( evt.deltaY * 6 ) : evt.deltaY ), ie ? -20 : -Infinity )
                }
                return [ x * fact1, y * fact ]
            }

            var ret = tch || getWheel.call( this, evt ), a = ret[ 0 ] || 0, b = ret[ 1 ] || 0, mode = false, obj = this._wheelObj || {} , fit, stpre, isTable = this.classList.contains( 'lyteTableScroll' ); 
            if( this._scrollEnd ) {
                obj= { scrollLeft : this.scrollLeft, scrollTop : this.scrollTop, scrollWidth : this.scrollWidth, scrollHeight : this.scrollHeight, bcr : this.getBoundingClientRect() };
                this._wheelObj = obj
                if( this.classList.contains( 'lyteTableScroll' ) ){
                    forTable.call( this, obj )
                }
            }
             if( Math.abs( tch ? a : ( evt.deltaX || 0 ) ) < Math.abs( tch ? b : ( evt.deltaY || 0 ) ) ) {
                mode = true
            }
            if( this._wheelObj ){
                fit = fitForScroll.call( this, mode, obj );
                if(( fit && mode /*&& b > 0*/ && (  !this._vertDiv || ( this._vertDiv && !this._vertDiv.classList.contains( 'visible' ) ) ) ) || ( fit && !mode /*&& a < 0*/ && ( !this._horiDiv || ( this._horiDiv && !this._horiDiv.classList.contains( 'visible' ) ) ) ) ){
                    return
                }
                stpre = shouldPrevent.call( this, obj, mode, mode ? b : a ); 
                if( this._infiniteScroll || stpre ){
                     evt.preventDefault();
                    if( !stpre && isTable && mode ) {
                        this.comp.scrollTable.call( this.comp, { yScroll : b }, this._wheelObj )
                    }
                } else{
                    if( this._scrollData.preventOnEnd ){
                        evt.preventDefault();
                    }
                    return
                }
            }
            if( mode ) {
                if( isSaf.isIE11Lyte ) {
                    if( this._wheelObj ){
                        this._wheelObj.scrollTop = Math.max( Math.min( this._wheelObj.scrollTop + b, this._wheelObj.scrollHeight - this._wheelObj.bcr.height ), 0 )
                        if(  isTable ) {
                            evt.yScroll = b;
                            this.comp.scroll.call( this, evt )
                        }
                        this.scrollTop += b;
                    } 
                } else if( !isSaf.isIE11Lyte ) {
                    this.scrollTop += b;
                }
            } else {
                 if( isSaf.isIE11Lyte ) {
                    if( this._wheelObj ) {
                        this._wheelObj.scrollLeft = Math.max( Math.min( this._wheelObj.scrollLeft + a, this._wheelObj.scrollWidth - this._wheelObj.bcr.width ), 0 )
                        if(  isTable ) {
                            evt.xScroll = a;
                            this.comp.scroll.call( this, evt )
                        }
                        this.scrollLeft += a;
                    }
                } else {
                   this.scrollLeft += a; 
                }
             }   
            if( isSaf.safari || isSaf.isIE11Lyte || isSaf.isIpad ) {
                    this._alive = true;
                    clearTimeout( this._alivetime )
                    this._alivetime = setTimeout( function(){
                       delete this._alive; delete this._alivetime; 
                    }.bind( this ), 16 )
                this._scrollFun.call( this, evt )
            }
        }

        function scroll( evt ) {
            var a, b, issafIE = isSaf.isIE11Lyte || isSaf.safari || isSaf.isIpad, isIe = isSaf.isIE11Lyte ;
            if( issafIE && evt && evt.type == 'scroll' && ( this._alive && !evt._byFunc ) ) {
                trigEvt.call( this, isSaf.mode.a, isSaf.mode.b, this._wheelObj || { bcr : {} }, evt )
            } else{
                var obj= { scrollLeft : this.scrollLeft, scrollTop : this.scrollTop, scrollWidth : this.scrollWidth, scrollHeight : this.scrollHeight, bcr : this.getBoundingClientRect() };
                this._wheelObj = obj
                if( this.classList.contains( 'lyteTableScroll' ) ){
                    forTable.call( this, obj )
                }
                if( this.prevScrlLeft != obj.scrollLeft ) {
                    a = obj.scrollLeft - ( this.prevScrlLeft || 0 );
                    b = 0;
                    updatePos.call( this, false, a , evt, obj )
                } 
                if( this.prevScrlTop!= obj.scrollTop ) {
                    b = obj.scrollTop - ( this.prevScrlTop || 0 );
                    a = 0;
                    updatePos.call( this, true, b , evt, obj )
                }
                isSaf.mode.b = b; isSaf.mode.a = a;
                if( !isIe || ( issafIE && ( !this._alive || evt._byFunc ) ) ) {
                   if(  this.classList.contains( 'lyteTableScroll' ) ) {
                        this.comp.scroll.call( this, evt )
                    }
                }
            }
        }

         function hideScrollbar( evt ) {
            clearTimeout( this._scrollplugin )  
            this._scrollplugin = setTimeout(mouseleave.bind( this.parentElement), 500 )
        }

        function forTable( obj ) {
            var component =  this.comp, headerList = component.$node.querySelectorAll( 'lyte-th' )
            if( this._infiniteScroll ){
                obj.$nodeClient = this.parentElement.getBoundingClientRect();
                obj.neglected =  this.querySelectorAll( 'lyte-tbody lyte-tr.lytePreventInfiniteScroll:not(.lyteHidden)' )
                obj.compNeg = this.querySelectorAll( 'lyte-tbody lyte-tr.lytePreventInfiniteScroll' )
                if( this.comp._top != undefined ) {
                    obj.topElem = this.querySelectorAll( 'lyte-tbody lyte-tr:not(.dummy)' )[ this.comp._top + obj.compNeg.length ]
                    obj.topElemClient = obj.topElem ? this.comp.topElem( obj.topElem ) : {};
                    obj.bottmElem = this.querySelector( 'lyte-tbody lyte-tr:nth-of-type(' + ( ( this.comp._bottom + 1 + obj.compNeg.length ) ) + ')' );
                    obj.bottmElemClient = obj.bottmElem ? this.comp.topElem( obj.bottmElem ) : {}
                    obj.tbody = this.querySelector( 'lyte-tbody' )
                    obj.tbodyClient = obj.tbody ? obj.tbody.getBoundingClientRect() : {};
                }
            }
            obj.scrollDivClient = obj.bcr;
            for(var k = 0; k < headerList.length; k++)
                {
                    headerList[k].property = headerList[k].getBoundingClientRect();
                    headerList[k].order = k
                }
            obj.calculated = true;  
        }

        function trigEvt( a, b, obj, evt ) {
            delete this._scrollEnd; 
            if( ( ( Math.ceil( obj.scrollLeft + obj.bcr.width + this._scrollData.offset.x ) >= obj.scrollWidth ) && !( this._direction == 'rtl' && isSaf.chrome ) ) || ( ( isSaf.firefox || isSaf.safari ) && this._direction == 'rtl' && ( Math.ceil( -obj.scrollLeft + obj.bcr.width + this._scrollData.offset.x ) >= obj.scrollWidth ) ) || ( this._direction == 'rtl' && isSaf.chrome &&  obj.scrollLeft == this._scrollData.offset.x ) ) {
                evt.horiScrollEnd = true;
            }
            if( Math.ceil( obj.scrollTop + obj.bcr.height + this._scrollData.offset.y ) >= obj.scrollHeight ) {
                this._scrollEnd = evt.vertScrollEnd = true;
            }
            evt.yScroll = b; evt.xScroll = a;
            evt._byPlugin = true;
            this._wheelObj = obj;
        }

        function updatePos( mode, a, evt, obj ) {
            if( parseInt( Math.abs( a ) )  == 0 || ( mode && !this._vertDiv ) || ( !mode && !this._horiDiv ) ){
                return
            }
            var out = this[ mode ? '_vertDiv' : '_horiDiv'  ], railBcr = obj[ mode ? 'vertbcr' : 'horbcr' ] || out.getBoundingClientRect(), inn = out.children[ 0 ];
            var sL = 'scrollTop', sW = 'scrollHeight', wd = 'height', lt = 'top', direction = this._direction ;
            if( !mode ) {
                sL = 'scrollLeft' , sW = 'scrollWidth', wd = 'width', lt = 'left';
            }
            var rt = ( obj.bcr[ wd ] - ( railBcr[ lt ] - obj.bcr[ lt ] ) ) / obj[ sW ], trt = obj[ sL ] / obj[ sW ], mL = this._scrollData.minLength, minLength = mL ? ( mL != 'auto' ? mL : 0 ) : 0.1 * obj.bcr[ wd ];
            set( inn, wd, Math.max( rt * obj.bcr[ wd ], minLength )+ 'px' ) 
            if( direction == 'rtl' &&  inn._direction ) {
                if( ( isSaf.safari && !window.chrome ) || isSaf.firefox ) {
                    set( inn, lt, ( obj[ sL ] / obj[ sW ] * 100 ) + '%' )
                } else {
                    set( inn, lt, -( ( obj[ sW ] - obj.bcr[ wd ] - obj[ sL ] ) / obj[ sW ] * 100 ) + '%' )
                }  
            } else{
                set( inn, lt, trt * ( obj.bcr[ wd ] - ( railBcr[ lt ] - obj.bcr[ lt ] ) - ( Math.max( 0, minLength - rt * obj.bcr[ wd ] ) ) ) + 'px' )
            }
            this.prevScrlLeft = obj.scrollLeft; this.prevScrlTop = obj.scrollTop;
            if( evt.type ){
                trigEvt.call( this, mode ? 0 : a, mode ? a : 0, obj, evt )
            }
        }

        lyteDomObj.prototype.removeScroll = function(){
            var elements = this;
            for( var i = 0; i < elements.length; i++ ) {
                var elem = elements[ i ], wrap = elem.parentElement;
                if( elem._scrollData ) {
                    delete elem._scrollData;
                }
                var scrollDivs = wrap.querySelectorAll( 'div.lyteScrollContainer' );
                for(var k = 0; k < scrollDivs.length; k++){
                    if( scrollDivs[k].parentElement == wrap ) {
                        wrap.removeChild(scrollDivs[k]);
                    }
                }
                elem.classList.remove( 'lyteScrollBar', 'eventBinded' );
                elem.removeEventListener( 'mouseenter', mouseenter, true );
                elem.removeEventListener( 'wheel', initialWheel, true );
                elem.removeEventListener( 'touchstart', mouseenter, true )
                wrap.removeEventListener( 'mouseleave', mouseleave, true );
                elem.removeEventListener( 'mousedown', mousedown );
                elem.removeEventListener( 'touchmove', wheelEvent, { passive : false } )
                elem.removeEventListener( 'scroll', scroll, true );
                clearTimeout( elem._tchtime );
                delete elem._wheelObj; delete elem._vertDiv; delete elem._horiDiv;
                delete elem._scrollFun; delete elem._alivetime; delete elem._alive; delete elem._wheelObj;
                delete elem.resetScrollbar; delete wrap._scrolldiv; delete elem._tchtime;
            }
            return this;
        }

        lyteDomObj.prototype.scroll = function( obj ) {
            obj = obj || {};
            obj.showOn = obj.showOn || 'hover';
            obj.keyStep = obj.keyStep || 30;
            obj.wheelSpeed = obj.wheelSpeed || 1;
            obj.preventOnEnd = obj.preventOnEnd != undefined ? obj.preventOnEnd : true;
            obj.offset = obj.offset || { x : 0, y : 0 };
            obj.tOut = obj.scrollTimeout || 500;
            var elements = this;

            for( var i = 0; i < elements.length; i++ ) {
                var elem =  elements[ i ], vertDiv, horiDiv, wrp = elem.parentElement;
                set( wrp, 'position', 'relative' );
                elem.resetScrollbar = mouseenter.bind( elements[ i ] );
                if( elem._scrollData ) {
                    $L( elem ).removeScroll()
                }
                wrp._scrolldiv = elem;
                elem._scrollData = obj;
                if( !obj.preventVertical ) {
                    vertDiv = appendDiv.call( elem, 'lyteScrollContainer lyteScrollContainerY', obj )
                    if(obj.verticalPosition == 'left'){
                        vertDiv.classList.add('left');
                    }
                }
                if( !obj.preventHorizontal ) {
                    vertDiv = appendDiv.call( elem, 'lyteScrollContainer lyteScrollContainerX', obj, true )
                    if(obj.horizontalPosition == 'top'){
                        vertDiv.classList.add('top');
                    }
                }
                if(isSaf.firefox ){
                        elem.scrollLeft = 0;
                        elem.scrollTop = 0;
                  } 
                elem.addEventListener( 'mouseenter', mouseenter, true )
                elem.addEventListener( 'touchstart', mouseenter, true )
                elem.addEventListener( 'touchmove', wheelEvent, { passive : false } )
                elem.addEventListener( 'mousedown', mousedown );
                elem.addEventListener( 'wheel', initialWheel, true );
                if( obj.showOn != 'always' ){
                    wrp.addEventListener( 'mouseleave', mouseleave, true )
                } else {
                    setTimeout( mouseenter.bind( elements[ i ] ), 100, {} )
                }
                elem.classList.add( 'lyteScrollBar' )
                elem._scrollFun = scroll;
            }
          return this;
        }

        lyteDomObj.prototype.destroyLyteScroll = function(){
            $L( '.lyteScrollBar' ).removeScroll()
            window.removeEventListener('scroll', globalscroll, true ); 
            return this;   
        }

        function globalscroll( evt ){
            var el = evt.target.correspondingElement || evt.target;
            if( el != document && el != document.body && el._scrollFun ) {
                el._scrollFun.call( el, evt );
            }
            if( evt._byFunc ) {
                evt.preventDefault();
                evt.stopPropagation();
                evt.stopImmediatePropagation();
            }
        }
        window.addEventListener('scroll', globalscroll, true ); 
    }
} )( window );
