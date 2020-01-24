;(function(window){
	
	if(lyteDomObj){
		
		function formatNumber(num) {
			var neg = (num < 0),x, x1, x2, x3, i, len;
			num = Math.abs(num).toFixed(this._decimals);
			num += '';
			x = num.split('.');
			x1 = x[0];
			x2 = x.length > 1 ? this._options.decimal + x[1] : '';
			if (this._options.useGrouping) {
				x3 = '';
				for (i = 0, len = x1.length; i < len; ++i) {
					if (i !== 0 && ((i % 3) === 0)) {
						x3 = this._options.separator + x3;
					}
					x3 = x1[len - i - 1] + x3;
				}
				x1 = x3;
			}
			return (neg ? '-' : '') + this._options.prefix + x1 + x2 + this._options.suffix;
		}
		function easeOutExpo(t, b, c, d) {
			return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
		}
		function checkForNumber(n) {
			var num=Number(n)
			return (typeof num === 'number' && !isNaN(num));
		}
		lyteDomObj.prototype.counter = function(obj){
				var ele=this[0],duration;
				if(ele._rAFId){
					cancelAnimationFrame(ele._rAFId)
				}
				ele._options={
					useEasing: true, // toggle easing
					useGrouping: true, // 1,000,000 vs 1000000
					separator: ',', // character to use as a separator
					decimal: '.', // character to use as a decimal
					easingFn: easeOutExpo, // optional custom easing function, default is Robert Penner's easeOutExpo
					prefix: '', // optional text before the result
					suffix: '' // optional text after the result
				};
				ele._initialized=false;
			
				if (obj.options && typeof obj.options === 'object') {
					for (var key in ele._options) {
						if (obj.options.hasOwnProperty(key) && obj.options[key] !== null) {
							ele._options[key] = obj.options[key];
						}
					}
				}				
				if (ele._options.separator === '') {
					ele._options.useGrouping = false;
				}
				else {
					ele._options.separator = '' + ele._options.separator;
				}
				if(obj.endValue==null ){
					throw new TypeError('"endValue" is null or not defined');
				}
				if(!checkForNumber(Number(obj.startValue))){
					throw new TypeError('"startValue" is not a number');
				}
				if(!checkForNumber(Number(obj.endValue))){
					throw new TypeError('"endValue" is not a number');
				}
				ele._startValue = obj.startValue? Number(obj.startValue):0;
				ele._endValue = Number(obj.endValue);
				ele._startVal = ele._startValue;
				ele._endVal = ele._endValue;
				delete ele._startTime;
				delete ele._paused
				if(obj.onComplete){
					ele.onComplete=obj.onComplete;
				}
				initialize.call(ele,obj.startValue,obj.endValue,(obj.decimals?obj.decimals:0),(obj.duration?obj.duration:undefined))
			
			return this;
		}
		lyteDomObj.prototype.start = function(data){
			this[0]._rAFId=requestAnimationFrame(count.bind(this[0]));
		}
		lyteDomObj.prototype.update = function(endVal){
			if (!this[0]._initialized){
			 return;
			}
			if (!checkForNumber(endVal)) {
				return;
			}
			if (endVal === this[0]._frameVal){
				 return;
			}
			cancelAnimationFrame(this[0]._rAFId);
			this[0]._paused = false;
			delete this[0]._startTime;
			this[0]._startVal = this[0]._frameVal;
			this[0]._endVal = endVal;
			this[0]._endValue = this[0]._endVal;
			this[0]._countDown = (this[0]._startVal > this[0]._endVal);
			this[0]._rAFId = requestAnimationFrame(count.bind(this[0]));
		}
		lyteDomObj.prototype.pauseResume = function(){
			if(this[0]._initialized){
				if (!this[0]._paused) {
					this[0]._paused = true;
					cancelAnimationFrame(this[0]._rAFId);
				} else {
					this[0]._paused = false;
					delete this[0]._startTime;
					if(this[0]._remaining){
						this[0]._duration = this[0]._remaining;
					}
					if(this[0]._frameVal){
						this[0]._startVal = this[0]._frameVal;
					}
					requestAnimationFrame(count.bind(this[0]));
				}
			}
		}
		lyteDomObj.prototype.reset = function(obj) {
			this[0]._paused = false;
			delete this[0]._startTime;
			this[0]._initialized = false;
			this[0]._startVal = this[0]._startValue;
			if(initialize.call(this[0],arguments[0],arguments[1],(arguments[2]?arguments[2]:0),(arguments[3]?arguments[3]:undefined))
			) {
				cancelAnimationFrame(this[0]._rAFId);
				printValue.call(this[0],this[0]._startVal);
			}
		}
		 function count() {
		 	var timestamp=new Date().getTime();
			if (!this._startTime) { this._startTime = timestamp; }

			this._timestamp = timestamp;
			var progress = timestamp - this._startTime;
			this._remaining = this._duration - progress;
			if (this._options.useEasing) {
				if (this._countDown) {
					this._frameVal = this._startVal - this._options.easingFn(progress, 0, this._startVal - this._endVal, this._duration);
				} else {
					this._frameVal = this._options.easingFn(progress,this._startVal, this._endVal - this._startVal, this._duration);
				}
			} else {
				if (this._countDown) {
					this._frameVal = this._.startVal - ((this._startVal - this._endVal) * (progress / this._duration));
				} else {
					this._frameVal = this._startVal + (this._endVal - this._startVal) * (progress / this._duration);
				}
			}

			if (this._countDown) {
				this._frameVal = (this._frameVal < this._endVal) ? this._endVal : this._frameVal;
			} else {
				this._frameVal = (this._frameVal > this._endVal) ? this._endVal : this._frameVal;
			}
			this._frameVal = Math.round(this._frameVal*this._dec)/this._dec;
			printValue.call(this,this._frameVal);
			if (progress < this._duration) {
				this._rAFId=requestAnimationFrame(count.bind(this));

			}
			else {
				if(this.onComplete){
					this.onComplete()
				}
				return true;
				
			}
		}
		function initialize(startVal,endVal,decimals,duration) { 
			if (this._initialized){
			 	return true;
			}
			if (checkForNumber(this._startVal) && checkForNumber(this._endVal)) {
				this._decimals = Math.max(0, decimals || 0);
				this._dec = Math.pow(10, this._decimals);
				this._duration = Number(duration) * 1000 || 2000;
				this._countDown = (this._startVal > this._endVal);
				this._frameVal = this._startVal;
				this._initialized = true;
				printValue.call(this,this._startVal)
				return true;
			}
			return false;
		}
		function printValue(value) {
			var result = formatNumber.call(this,value);
			if (this.tagName === 'INPUT') {
				this.value = result;
			}
			else if (this.tagName === 'text' || this.tagName === 'tspan') {
				this.textContent = result;
			}
			else {
				this.innerHTML = result;
			}
		}
	}
})( window );