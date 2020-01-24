(function( window ) {

var
	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	whitespace = "[\\x20\\t\\r\\n\\f]",

	rsibling = /[+~]/,

	expando = "lyte" + 1 * new Date(),

	boundEvent = {},

	// CSS string/identifier serialization
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}
			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	}; 

function handleEvent(event){
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
function eventObjetManupulation(e,eventName,fn,isSet){
	if(typeof e !== "string" && e.length){
		var nodesLength = e.length;
		for(var i=0;i<nodesLength;i++){
			isSet?setEventsObject(e[i],eventName,fn):deleteEventsObject(e[i],fn.name);
		}
	}
	else{
		isSet?setEventsObject(e,eventName,fn):deleteEventsObject(e,eventName,fn.name);
	}
}
function setEventsObject(ele,eventName,fn){
	var localKey = (new Date()).getTime;
	if(!ele["_"+eventName]){
		ele["_"+eventName] = {};
	}
	if(fn.name){
		ele["_"+eventName][fn.name] = fn;
	}
	else{
		ele["_"+eventName][localKey] = fn;	
	}
}
function deleteEventsObject(ele,eventName,fnName){
	if(ele["_"+eventName].hasOwnProperty(fnName)){
		delete ele["_"+eventName][fnName];
	}
}



function $L(selector, context) {

	// About object is returned if there is no selector parameter
	var about = {
		Version: 1.0,
		Author: "Lyte Team",
		Created: "Oct 2017",
		Updated: "20 Oct 2017"
	};

	if (selector) {

		// Avoid clobbering the window scope: 
		// return a new $L object if we're in the wrong scope
		if (window === this) {
			return new $L(selector, context);
		}

		// We're in the correct object scop:
		// Init our element object and return the object
		if(selector === window || selector.nodeType || (typeof selector !== "string" && selector.length)){
			this.e = selector;	
		}
		else{
			this.e = domSelector(selector, context);	
		}
		return this;
	} else {
		// No 'id' paramter was given, return the 'about' object
		return about;
	}
}

/*	_ Prototype Functions
============================*/

$L.prototype = {
	//functions
	hide: function () {
		this.iterator(function(node){
			node.style.display ='none';
		});
		return this;
	},
	show: function () {
		this.iterator(function(node){
			node.style.display ='inherit';
		});
		return this;
	},

	//getter setters
	addClass: function(){
		var arg = arguments;
		this.iterator(function(node){
			node.classList.add.apply(node.classList,arg);
		});
		return this;
	},
	removeClass: function(){
		var arg = arguments;
		this.iterator(function(node){
			node.classList.remove.apply(node.classList,arg);
		});
		return this;
	},
	toggleClass: function(){
		var arg = arguments;
		this.iterator(function(node){
			node.classList.toggle.apply(node.classList,arg);
		});
		return this;
	},
	attr: function(name,value){
		if(value){
			this.iterator(function(node){
				node.setAttribute(name,value);
			});
			return this;
		}
		else{
			return (this.e[0] || this.e).getAttribute(name);
		}
	},
	removeAttr: function(name){
		this.iterator(function(node){
			node.removeAttribute(name);
		});
		return this;
	},
	html: function(htmlValue){
		if(htmlValue || htmlValue === ""){
			this.iterator(function(node){
				node.innerHTML = htmlValue;
			});
			return this;
		}
		else{
			return (this.e[0] || this.e).innerHTML;
		}
	},
	append: function(value){
		this.iterator(function(node){
			node.appendChild(value);
		});
		return this;
	},
	replace: function(value){
		this.iterator(function(node){
			node.parentElement.replaceChild(value,node);
		});
	},
	css: function(name,value){
		if(value){
			this.iterator(function(node){
				node.style[name] = value;
			});
			return this;
		}
		else{
			if(typeof name === "string"){
				return window.getComputedStyle(this.e[0] || this.e)[name];
			}
			else if(name.length){
				var propLengh = name.length;
				var res = {};
				for(var i=0;i<propLengh;i++){
					res[name[i]] = window.getComputedStyle(this.e[0] || this.e)[name[i]];
				}
				return res;
			}
			else if(typeof name === "object"){
				for(key in name){
					this.iterator(function(node){
						node.style[key] = name[key];
					});
				}
				return this;
			}
		}
	},
	empty: function(){
		this.iterator(function(node){
			while (node && node.lastChild) {
			  node.removeChild(node.lastChild);
			}	
		});
	},
	hasClass: function(className){
		var result = false;
		this.iterator(function(node){
			if(!result && node.classList.contains(className)){
				result = true;
	  		}
	  	});
	  	return result;
	},
	//height included content, padding and excluded border
	height: function(value){
		if(value){
			this.iterator(function(node){
				node.style.height = value + 'px';
			});
		}
		else{
			return (this.e[0] || this.e).clientHeight;
		}
	},
	//only getter
	outerHeight: function(){
		return (this.e[0] || this.e).offsetHeight;
	},
	//width included content, padding and excluded border
	width: function(value){
		if(value){
			this.iterator(function(node){
				node.style.width = value + 'px';
			});
		}
		else{
			return (this.e[0] || this.e).clientWidth;
		}
	},
	//only getter
	outerWidth: function(){
		return (this.e[0] || this.e).offsetWidth;
	},
	offset: function(value){
		if(value){

		}
		else{
			var rect = (this.e[0] || this.e).getBoundingClientRect();
			return {
			  top: rect.top + document.body.scrollTop,
			  left: rect.left + document.body.scrollLeft
			}
		}
	},
	insertBefore: function(value){
		this.iterator(function(node){
			node.parentElement.insertBefore(value,node);
		});
	},
	insertAfter: function(value){
		this.iterator(function(node){
			node.after(value);
		});
	},

	iterator: function(fn){
		if(this.e){
			if(typeof this.e !== "string" && this.e.length){
				var nodesLength = this.e.length;
				for(var i=0;i<nodesLength;i++){
					fn.call(undefined,this.e[i]);	
				}
			}
			else{
				fn.call(undefined,this.e);
			}
		}
	},
	bind : function(eventName,fn){
		eventObjetManupulation(this.e,eventName,fn,true);
		if(!boundEvent[eventName]){
			if(this.e === window){
				window.addEventListener(eventName,handleEvent);
			}
			document.addEventListener(eventName,handleEvent);
			boundEvent[eventName] = true;
		}
	},
	unbind : function(eventName,fn){
		if(this.e["_"+eventName].hasOwnProperty(fn.name)){
			eventObjetManupulation(this.e,eventName,fn);
		}
		else{
			console.error("Improper function name");
		}
	}
};


var domSelector = function(selector, context){
	var results=[], m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

	context = context || document,

	nodeType = context ? context.nodeType : 9;

	// If the selector is sufficiently simple, try using a "get*By*" DOM method
	// (excepting DocumentFragment context, where the methods don't exist)
	if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

		// ID selector
		if ( (m = match[1]) ) {
			return context.getElementById( m );
		// Type selector
		} else if ( match[2] ) {
			return context.getElementsByTagName( selector );
		// Class selector
		} else if ( (m = match[3]) ){
			return context.getElementsByClassName( m );
		}
	}

	
	if ( nodeType !== 1 ) {
		newContext = context;
		newSelector = selector;
	} else if ( context.nodeName.toLowerCase() !== "object" ) {

		// Capture the context ID, setting it first if necessary
		if (!(nid = context.getAttribute( "id" )) ) {
			context.setAttribute( "id", (nid = expando) );
		}

		// Prefix every selector in the list
		groups = selector.split(',');
		i = groups.length;
		while ( i-- ) {
			groups[i] = "[id='" + nid + "'] " + groups[i];
		}
		newSelector = groups.join( "," );

		// Expand context for sibling selectors
		newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
			context;
	}

	if ( newSelector ) {		
		try{
			return newContext.querySelectorAll( newSelector );
		}
		catch(e){
			console.log(e);
		}
		finally{
			if ( nid === expando ) {
				context.removeAttribute( "id" );
			}
		}
	}
	// All others
	return context.querySelectorAll( selector );
}


// EXPOSE
var _$L = window.$L;

$L.noConflict = function() {
	if ( window.$L === $L ) {
		window.$L = _$L;
	}	
	return $L;
};


window.$L = $L;
// EXPOSE

})( window );

