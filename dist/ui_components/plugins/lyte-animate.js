;(function(window){
	var elData, AniData;
	function getDefaultDisplay( elem ) {
		if( !elem.lyteAnimateId ) {
			AniData.add( elem );
		}
		var nodeName = elem.nodeName, display = elData.get( elem, 'displayValue' );

		if ( display ) {
			return display;
		}

		var owner = elem.ownerDocument,temp = owner.body.appendChild( owner.createElement( nodeName ) );
		display = owner.defaultView.getComputedStyle( temp ).display;
		owner.body.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		elData.set( elem, 'displayValue', display );
		return display;
	}

	function generateDummyProps ( prop, flag ) {
		var dummy = {};
		var arr = [ 'left', 'right', 'top', 'bottom' ];
		for( var i = 0; i < arr.length; i++ ){
			dummy[ 'margin-' + arr[ i ] ] = dummy[ 'padding-' + arr[ i ] ] = prop;
		}
		if( flag ){
			dummy.width = dummy.height = dummy.opacity = prop;
		}
		return dummy;
	}

	function showhide( elems, flag ) {
		var disps = []
		for( var i = 0; i < elems.length; i++ ) {
			var el = elems[ i ];
			AniData.add( el );
			var actDisp = el.style.display;
			if( flag ) {
				if( actDisp == 'none' ) {
					disps[ i ] = null || elData.get( el,'display' )
					if( !disps[ i ] ) {
						disps[ i ] = "";
					}
				}
				if( actDisp == "" && $L( el ).css( 'display' ) == "none" ) {
					disps[ i ] = getDefaultDisplay( el );
				}
			}else if( actDisp != 'none' ) {
				disps[ i ] = 'none';
				elData.set( el,'display', actDisp );
			}
		}
		for( var j = 0; j < elems.length; j++ ) {
			$L( elems[ j ] ).css( 'display', disps[ j ] )
		}
		return elems;
	}

	function show() {
		return showhide( [ this ], true );
	}

	function hide() {
		return showhide( [ this ] );
	}

	function toggle( arg, prop ) {
		if( !isValid( arg, prop ) ) {
			return;
		}
		if( arg.constructor == Boolean ) {
			return showhide( [ this ], arg )
		}

		return $L.each( this, function() {
			toggle( $L( this ).css( 'display' ) != 'none' ) 
		})
	}

	function camelCase (string){
	 return string.replace(/(-\w)/g, function (m) {
            return m[1].toUpperCase();
        });
	}

	function dasherize(string){
		return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	}

	function AnimationData(){
		this.data = {};
	}

	function animationEnd(evt){
		if(evt.target == this){
			elData.get(this, 'endCallback').call(this, evt);
		}
	}

	AnimationData.prototype = {
		add : function(elem){
			if('lyteAnimateId' in elem){
				return elem.lyteAnimateId;
			}
			var randomId = 'lyteAnimate' + parseInt(Math.random() * Math.pow(10,6));
			elem.lyteAnimateId = randomId;
			this.data[randomId] = [];
			elem[elem.lyteAnimateId] = {}
			return randomId;
		},
		queue : function(elems, options, value){
			for(var i = 0; i < elems.length; i++){
				var el = elems[i];
				var id  = el.lyteAnimateId
				if(!id){
						id = this.add(el);
					}
				this.data[id].push({elem : el, options : options, value : value, properties : Object.keys(value)});
				if(this.data[id].length == 1){
					el.addEventListener('transitionend', animationEnd);
					this.next(el);	
				}
			}
		},
		dequeue : function(elem){
		 	this.data[elem.lyteAnimateId].splice(0, 1);
			this.next(elem);
		},
		dequeueAll : function(elem){
			this.data[elem.lyteAnimateId] = this.data[elem.lyteAnimateId].splice();
			this.next(elem);
		},
		next : function(elems){
			setTimeout(this.call.bind(this), 13, elems);
		},
		call : function(elem){
			if(elem.lyteAnimateId && this.data[elem.lyteAnimateId][0]){
					lyteAnimation.call(elem);
			}else{
				this.data[elem.lyteAnimateId] = [];
				elem.removeEventListener('transitionend', animationEnd);
			}	
		}
	}

	function ElementData(){
	}

	ElementData.prototype = {
		set :  function(){
			if(arguments.length < 3){
				return;
			}
			if(arguments.length == 3){
				if(arguments[0][arguments[0].lyteAnimateId] == undefined){
					arguments[0][arguments[0].lyteAnimateId] = {};
				}
				arguments[0][arguments[0].lyteAnimateId][arguments[1]] = arguments[2];
			}
			else if(arguments.length == 4){
				if(arguments[0][arguments[0].lyteAnimateId][arguments[1]] == undefined){
					arguments[0][arguments[0].lyteAnimateId][arguments[1]] = {};
				}
				arguments[0][arguments[0].lyteAnimateId][arguments[1]][arguments[2]] = arguments[3]
			}

		},
		get : function(){
			if(arguments.length < 1){
				return;
			}
			if(arguments.length == 1){
				return arguments[0][arguments[0].lyteAnimateId];
			}
			else if(arguments.length == 2){
				return arguments[0][arguments[0].lyteAnimateId][arguments[1]];
			}
			else if(arguments.length == 3){
				if(arguments[0][arguments[0].lyteAnimateId][arguments[1]]){
					return arguments[0][arguments[0].lyteAnimateId][arguments[1]][arguments[2]];
				}	
			}
			return;
		}
	}

	function checkCrctValue(value, key, camelCaseKey, compStyle){
		var valueCopy = value[key].toString();
		if(/^(\()/g.exec(valueCopy)){
			return valueCopy;
		}
		var operatorRegex = /^\+=|\-=|\*=|\/=/g, unitRegex = /cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|auto|vmin|vmax|%+$/ig, unit = valueCopy.match(unitRegex), finalVal = valueCopy.match(operatorRegex);
		if(compStyle[camelCaseKey] != "none" && !/matrix/ig.test(compStyle[camelCaseKey])){
			if(unit == null){
				var newUnit = compStyle[camelCaseKey].match(unitRegex);
				if(newUnit == null){
					unit = "";
				}else{
					if(newUnit[0] == 'auto'){
						unit = 'px';
					}else{
						unit = newUnit[0]
					}
				}
			}else{
				unit = unit[0];
				valueCopy = valueCopy.slice(0, valueCopy.indexOf(unit));
			}
		}else{
			unit = "";
		}
		if(finalVal){
			var temp = parseInt(compStyle[camelCaseKey]), split = valueCopy.split("=");
			temp = temp == NaN ? 0 : temp;
			switch(split[0]){
				case '/' : 
					valueCopy = temp  / parseFloat(split[1]);
					break;
				case '-' : 
					valueCopy = temp  - parseFloat(split[1]);
					break;
				case '*' : 
					valueCopy = temp  * parseFloat(split[1]);
					break;
				default : 
					valueCopy = temp  + parseFloat(split[1]);
			}
		}
		// return [valueCopy + unit, unit];
		return valueCopy + unit;

	}

	function lyteAnimation (){	
			var newObj = {}, units = {}, def = this.ownerDocument.defaultView;
			$L.fastdom.measure( function(){
				var compstyle = def.getComputedStyle( this ),
				hidden = compstyle.display == "none";
				if( !hidden && !this.offsetParent ){
					AniData.dequeue( this );
					autoAnimate.call( this )
					return;
				}
				var anidata = AniData.data[this.lyteAnimateId][0], value = anidata.value, auto = [],
				keys = Object.keys( value ), value, animeProp = [], from = {}, to = {}, val,
				originalData = elData.get(this, 'animeProp', 'original');
				if( !originalData ){
					originalData = {};
					elData.set( this, 'animeProp', 'original', originalData )
				}
				$L.fastdom.mutate( function(){
					var flag = true, compstyle, bcr;
					for( var i = 0; i < keys.length; i++ ){
						var curkey = camelCase( keys[ i ] ), curval = value[ keys[ i ] ];
						val = null;
						if( /show|hide|toggle/.test( curval ) ){
							if( curval == 'hide' || !hidden && curval == "toggle" ){
								val = "hide";
							} else if( curval == "show" || hidden && curval == "toggle" ){
								val = "show";
							}
							if( val == "show" && !hidden || val == "hide" && hidden ){
								continue;
							}
						}
						if( flag ){
							if( hidden ){
								this.style.display = this._lytedisplay || '';
							} else {
								this._lytedisplay = this.style.display;
							}
							compstyle = def.getComputedStyle( this );
							bcr = this.getBoundingClientRect();
							flag = false;
						}
						if( animeProp.indexOf( curkey ) == -1 ){
							animeProp.push( curkey );
						}
						if( !hidden ){
							if( val != "hide" ){
								to[ curkey ] = checkCrctValue( value, keys[ i ], curkey, compstyle );
							} else{
								originalData[ curkey ] = this.style[ curkey ];
								to[ curkey ] =  0;
							}
							from[ curkey ] = compstyle[ curkey ];
						} else {
							if( val != "show" ){
								from[ curkey ] = compstyle[ curkey ];
							} else {
								originalData[ curkey ] = this.style[ curkey ];
								from[ curkey ] = 0;
							}
							to[ curkey ] = !val ? checkCrctValue( value, keys[ i ], curkey, compstyle ) : compstyle[ curkey ];
						}
						if( parseFloat( to[ curkey ] ) == parseFloat( from[ curkey ] ) || /auto/.test( to[ curkey ] ) || /auto/.test( from[ curkey ] ) ){
							delete from[ curkey ]; delete to[ curkey ]; 
							Lyte.arrayUtils( animeProp, 'removeAt', animeProp.indexOf( curkey ) )
						}
					}
					elData.set(this, 'animeProp', 'from', from);
					elData.set( this, 'animeProp', 'to', to );
					elData.set( this, 'animeProp', 'mode', val );
					elData.set( this, 'animeProp', 'animate', animeProp );
					$L.each( from, function( prop, val ){
						this.style[ prop ] = val;
					}.bind( this ) )
					autoAnimate.call( this );
				}.bind( this ))
			}.bind( this ))
	}

	function constructCss(){
		if( !document.body.contains( this ) ){
			return;
		}
		var opts = AniData.data[this.lyteAnimateId][0].options,
		defaultOpts = ['timingFunction', 'duration', 'delay'], constyle="",
		value  =  Object.keys(AniData.data[this.lyteAnimateId][0].value || {});
		for(var i = 0; i < defaultOpts.length; i++){
			if(defaultOpts[i] in opts){
				var sec = '';
				if(defaultOpts[i] == 'delay' || defaultOpts[i] == 'duration'){
					if(!/[ms|s]+/ig.test(opts[defaultOpts[i]])){
						sec = 'ms'
					}
				}
				constyle += 'transition-' + dasherize(defaultOpts[i]) + ':' + opts [defaultOpts[i]] + sec + ";";
 			}
		}
		if(value.length)
			{
				constyle += 'transition-property : ';
				for(var j = 0; j < value.length; j++){
					constyle += j > 0 ? ','+ dasherize(value[j]) : dasherize(value[j]);
				}
			}
		return constyle += ";";
	}

	function removeStyle(){
		this.style.removeProperty('transition');
	}

	function autoAnimate () {
		if( ( elData.get(this, 'animeProp', 'animate') || [] ).length)
			{
				removeStyle.call(this);
				var newstyle = constructCss.call(this);
				elData.set(this, 'endCallback', function(evt){				
				 	evt.type != 'timeout' && evt.stopPropagation();
					var props = elData.get(this, 'animeProp', 'animate')
					var opt = AniData.data[this.lyteAnimateId][0].options.complete;
					var propLength = elData.get(this, 'propertyCount');
					if( evt.type == 'timeout' ){
						propLength = props.length - 1;
					}
					elData.set(this, 'propertyCount', ++propLength);
					if(props.length == propLength)
						{
							clearTimeout( this._anitime ); delete this._anitime;
							removeStyle.call(this);
							var mode = elData.get(this, 'animeProp', 'mode'), original = elData.get(this, 'animeProp', 'original');
							if(mode){
								if(mode == 'hide'){
									  setTimeout(function(){
									  	hide.call(this);
									  	$L.each( original, function( prop, value ){
											$L( this ).css( prop, value );
										}.bind( this ))
									  	AniData.dequeue(this);
									  }.bind(this), 20);
									}
								else{
									$L.each( original, function( prop, value ){
										$L( this ).css( prop, value );
									}.bind( this ))
									AniData.dequeue(this);
								}
							}else{	
								AniData.dequeue(this);
							}
							if(opt){
								var aniProp = elData.get(this, 'animeProp');
								evt.transitionProperty = props;
								evt.startTime = aniProp.startTime;
								evt.from = aniProp.from;
								evt.to = aniProp.to;
								opt.call(this, evt);
							}
							setTimeout(function(){
								this.style.overflow = this._orioverflow;
								delete this._orioverflow;
							}.bind(this), 20);	
						}
				});
		    	this._orioverflow = this.style.overflow;
		    	this.style.overflow = "hidden";
				elData.set(this, 'propertyCount', 0);
				setTimeout( function(){
					var sty = $L(this).attr('style');
					$L(this).attr('style', ( sty ? ( sty + ';' ) : "") + newstyle );
					setTimeout(dummy.bind(this), 20);
				}.bind( this ), 20 )
			}
		else{
			AniData.dequeue(this);
		}		

	}

	function dummy(){
			var anidata = AniData.data[this.lyteAnimateId][0];
			if(anidata){
				var options = anidata.options;
				var currTime = Date.now();
				elData.set(this, 'animeProp', 'startTime', currTime);
				var aniProp = elData.get(this, 'animeProp');
				if(options.start){
					options.start.call(this, {options : options, from : aniProp.from, to : aniProp.to, value : AniData.data[this.lyteAnimateId][0].value, startTime : currTime, target : this, transitionProperty : Object.keys(aniProp.to)});
				}
				var elem = this;
				$L.each(elData.get(this, 'animeProp', 'to'), function(prop, val){
					$L(elem).css(prop, val);
				})
				this._anitime = setTimeout( animationEnd.bind( this, { type : "timeout", target : this } ), returntran( options.duration.toString() ) + 10 )
			}else{
				removeStyle.call(this);
				this.removeEventListener('transitionend', animationEnd);
			}
	}

	function returntran( prop ){
		var ret = 0;
		if( /\d+/.test( prop ) ){
			var match = prop.match( /(\d+)(s|ms){0,}$/ );
			ret = parseFloat( match[ 1 ] ) * ( match[ 2 ] == "s" ? 1000 : 1 );
		}
		return ret;
	} 

	elData = new ElementData();
	AniData = new AnimationData();

	function getCorrectOption (duration, ease, callbacks){
		var obj = {};
		if(callbacks){
			if(callbacks.constructor == Function){
				obj.complete = callbacks;
			}
		}
		if(ease){
			if(ease.constructor == Function){
				obj.complete = ease;
			}
			else if(ease.constructor == Object){
				Object.assign(obj, ease);
			}
			else if(ease.constructor == String){
				obj.timingFunction = ease;
			}
		}
		if(duration != undefined){
			if(duration.constructor == Object){
				Object.assign(obj, duration);
			}
			else if(duration.constructor == Number){
				obj.duration = duration
			}
			else if(duration.constructor == Function){
				obj.complete = duration
			}
		}
		if(obj.delay != undefined ){
			if(/[s]+/ig.test(obj.delay)){
				options.delay = parseInt(options.delay) * 1000;
			}
		}
		if(!('duration' in obj)){
			obj.duration = 400;
		}
		if(/[s]+/ig.test(obj.duration)){
				options.duration = parseInt(options.duration) * 1000;
			}
		if(!obj.timingFunction){
			obj.timingFunction = "ease";
		}	
		return obj;
	}

	function replaceStyle( props, from, percent ) {
		$L(this).css(props, this.style[props].replace(/([0-9.-]+)/, function(arg){
			return ((parseFloat(arg) - from) * percent + from);
		}))
	}

	function stopAnimation(jumpToEnd, clearQueue){
		if(jumpToEnd){
			var propLength = elData.get(this, 'propertyCount');
			elData.set(this, 'propertyCount', ( elData.get(this, 'animeProp', 'animate') || [] ).length - 1);
			this.dispatchEvent(new Event('transitionend'));
			if(clearQueue){
				AniData.dequeueAll(this);
			}
		}else{
			// issues in stop with JumpToEnd false. Need to be fixed after 2.0 release
			var data = AniData.data[this.lyteAnimateId];
			if( !data ) {
				return
			}
			clearTimeout( this._anitime ); delete this._anitime;
			var options = data[0].options, animate = elData.get(this, 'animeProp');
			var currTime = Date.now(), val, from = animate.from, to = animate.to;
			var startTime = animate.startTime;
			var remain = Math.max(0, startTime + options.duration - currTime);
			var percent = 1 - (remain / options.duration);
			var props = Object.keys(animate.to || {});
			for(var i = 0; i < props.length; i++){
				var from1 = from[props[i]];
				if( from1 == 'none' && !( /deg/ig.test( from1 ) ) ){
					from1 = 1
				}
				from1 = parseInt( from1 )
				from1 = isNaN(from1) ? 0 : from1;
				replaceStyle.call( this, props[ i ], from1, percent )
			}
			$L(this).css('transition', '');
			if(clearQueue){
				AniData.dequeueAll(this);
			}else{
				AniData.dequeue(this);
			}
		}
	}

	function isValid( bol, prop ){
		if( ( prop == 'hide' && bol ) || ( prop == 'show' && !bol ) ){
			return false;
		}
		return true
	}

	if( lyteDomObj ){
		lyteDomObj.prototype.animate = function(){
			if(arguments.length)
				{
					var opts = getCorrectOption(arguments[1], arguments[2], arguments[3]);
					AniData.queue(this, opts, arguments[0]);
				}
			return this;
		}

		lyteDomObj.prototype.fadeTo = function( value, duration, ease, callback){
			if( duration != undefined && duration.constructor == Number ){
				if( duration < 1 ){
					var temp = duration;
					duration = value;
					value = temp;
				}
			}
			value = value || 0;
			var opts = getCorrectOption(duration, ease, callback);
			AniData.queue(this, opts, value.constructor == Object ? value :  {opacity : value});
			return this;
		}

		$L.each({
				fadeIn : { opacity : 'show'}, 
				fadeOut : { opacity : 'hide' }, 
				fadeToggle : { opacity : 'toggle'},
				slideUp : { height : 'hide'},
				slideDown : {height : 'show'},
				slideToggle :  { height : 'toggle'}
			}, function(property, value){
				lyteDomObj.prototype[property] = function(duration, ease, callback){
				   return this.animate(value, duration, ease, callback);
				}
		})

		lyteDomObj.prototype.stop = function(clearQueue, jumpToEnd){
			return $L.each(this, function(){
				stopAnimation.call(this, jumpToEnd != undefined ? jumpToEnd : true, clearQueue);
			})
		}

		lyteDomObj.prototype.finish = function(){
			return $L.each(this, function(){
				var queues = AniData.data[this.lyteAnimateId];
				if(queues.length)
					{
						for(var i = 1; i < queues.length; i++){
							queues[i].options.duration = 1;
						}
						stopAnimation.call(this, true, false);
					}
			})
		}

		$L.each({
				show : generateDummyProps('show', true), 
				hide : generateDummyProps('hide', true), 
				toggle : generateDummyProps('toggle', true)
			}, function(property, value){
				lyteDomObj.prototype[property] = function(duration, ease, callback){
				   if(duration && duration.constructor != Boolean){
						return this.animate(value, duration, ease, callback);
					}
				   return $L.each(this, function(){
						toggle.call(this, $L(this).css('display') == 'none', property);
					})
				}
		})
		
	}

})(window);