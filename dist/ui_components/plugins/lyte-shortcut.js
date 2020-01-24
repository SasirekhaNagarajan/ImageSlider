/**
 * Keyboards Supported
 * 1. US keyboard
 */
 /**
 Issues
 block it for mobiles
 ctrl+functional keys test it
 */
/**
 * Intializes the shortcut library
 * @param {object} window - window object
 * @param {document} document - document object
 */
;(function(window,document){

	// Private Variables

	var _registeredKeys = {};
	var _timeoutID;
	var _currentPressed = []
	var _allPressed = []
	var _allPressedWithModifier = []
	var _currentPointer = {}
	var _funcId
	var _clickId
	var _specialKeys = {
		8 : 'backspace',
        9 : 'tab',
        13 : 'enter',
        16 : 'shift',
        17 : 'ctrl',
        18 : 'alt',
        20 : 'capslock',
        27 : 'esc',
		32 : 'space',
		33 : 'pageup',
		34 : 'pagedown',
		35 : 'end',
		36 : 'home',
		37 : 'left',
        38 : 'up',
        39 : 'right',
        40 : 'down',
        45 : 'insert',
		46 : 'delete',
		91 : 'meta',
		92 : 'meta', // windows key
		93 : 'meta',
		224 : 'meta'
	}

	var _otherSpecialKeys = {
		48 : ')',
		49 : '!',
		50 : '@',
		51 : '#',
		52 : '$',
		53 : '%',
		54 : '^',
		55 : '&',
		56 : '*',
		57 : '(',
		187 : 'plus',
		188 : '<',
		190 : '>',
		191 : '?',
		192 : '~',
		219 : '{',
		220 : '|',
		221 : '}',
		222 : '"'
	}

	/* English Languate/US Layout */
	var _conversionUS = {
		'_' : '-',
		'plus' : '=',
		'{' : '[',
		'}' : ']',
		'|' : '\\',
		':' : ';',
		'"' : '\'',
		'<' : ',',
		'>' : '.',
		'?' : '/',
		'~' : '`',
		'!' : '1',
		'@' : '2',
		'#' : '3',
		'$' : '4',
		'%' : '5',
		'^' : '6',
		'&' : '7',
		'*' : '8',
		'(' : '9',
		')' : '0'
	}

	
	// Private Methods

	/**
	 * Checks if the current key is a modifier
	 * @param {string} string - The string which contains the currently processed key
	 */

	function _checkIfModifier(string){
		string = string.toLowerCase()
		return string === "ctrl" || string === "command" || string === "alt" || string === "shift"
	}


	/**
	 * Checks if the character is a function key
	 * @param {string} character - The character that should be checked
	 */


	function _checkIfFunctionKey(character){
		for(var i = 1;i <= 12;i++){
			if(character.toLowerCase() === ('f' + i)){
				return true
			}
		}
		return false
	}


	/**
	 * Checks if the key is one of the modified keys by comparing it with the globally defined map
	 * @param {string} key - The key that should be checked for
	 */


	function _checkIfModifiedKey(key){
		if(_conversionUS[key]){
			return true
		}
		return false
	}

	/**
	 * Split keys in modifiers and normal keys
	 * @param {string} keys - The keys registered to shortcut
	 */

	function _preprocess(keys){
		var array = _getProperArray(keys)
		var modifier = []
		for(var i = 0;i < array.length;i++){
			if(_checkIfModifier(array[i])){
				array[i] = array[i] === 'command'?'meta':array[i]
				if(keys.indexOf('+') != -1){
					modifier.push(array[i])
					array.splice(i,1)
					i--;
				}
			}
			else if(_checkIfFunctionKey(array[i])){
				array[i] = array[i].toLowerCase()
			}
			else if(_checkIfModifiedKey(array[i])){
				if(keys.indexOf('+') != -1){
					modifier.push('shift')
					array[i] = _conversionUS[array[i]]
				}
			}
		}
		var modifierFlag
		if(keys.indexOf('+') !== -1){
			array = array.join('+')
			modifierFlag = true
		}
		else{
			array = array.join(' ')
			modifierFlag = false
		}
		return {
			modifier : modifier,
			newKey : array,
			modifierFlag : modifierFlag
		}
	}

	/**
	 * Split keys and build an array
	 * @param {string} keys - split between spaces or plus
	 */

	function _getProperArray(keys){
		if(keys.indexOf('+') !== -1){
			return keys.split('+')
		}
		else{
			return keys.split(' ')
		}
	}

	/**
	 * Increase character pointer of all the registered keys if the match
	 * @param {string} character - currently pressed character
	 */

	function _increaseCharPointer(character){
		for(var keys in _registeredKeys){
				if(keys.indexOf('r:') !== -1){
					var exp = keys.substring(2)
					var matches = exp.match(new RegExp('^/(.*?)/([gimy]*)$'))
					var regex = new RegExp(matches[1],matches[2])
					if(regex.test(_allPressed.join(''))){
						_currentPointer[keys] = 1
						continue;
					}
					else{
						_currentPointer[keys] = 0
					}
				}
				var key = _getProperArray(keys)
				var progress
				_currentPointer[keys] = progress =  _currentPointer[keys]?_currentPointer[keys]:0
				var withoutMod = _conversionUS[key[progress]]
				if(withoutMod && character === 'shift'){

					continue
				}
				else if(_conversionUS[character] && _conversionUS[character] === key[progress]){
					var items = _registeredKeys[keys]
					var incFlag = false

					for(var i=0;i<items.length;i++){
						if(items[i].modifierFlag && items[i].modifier.indexOf('shift') !== -1){
							_currentPointer[keys]++;

							incFlag = true
							break;
						}
					}
					if(incFlag){
						continue;
					}
				}
				if(key[progress] === character){
					_currentPointer[keys]++;
				}
				else{
					_currentPointer[keys] = 0
				}
			//}
		}
	}

	

	/**
	 * Calls a the matched element which should be invoked.
	 * @param {function} func - The callback that must be invoked
	 * @param {number} wait - A wait period where a user can press a different key to invoke a different element
	 * @param {object} event - The current keydown event
	 */

	function _invokeFunction(func,wait,event,invokedKey){
		
		if(wait){
			_flushTimeout()
			_funcId = setTimeout(function(){
				var prevent
				prevent = func.call(window,event,invokedKey)
				prevent = prevent === false?prevent:true
				if(!prevent){
					event.preventDefault()
				}
				_currentPointer = {}
				_allPressed = []
				_allPressedWithModifier = []
			},wait)
		}
		else{
			_flushTimeout()
			var prevent = func.call(window,event,invokedKey)
			prevent = prevent === false?prevent:true
			if(!prevent){
				event.preventDefault()
			}
			_currentPointer = {}
			_allPressed = []
			_allPressedWithModifier = []
		}
	}

	function _isVisible(element){
		var tagName = element.tagName
		var parent = element;
		switch(tagName){
			case 'BUTTON':
			case 'LYTE-ACCORDION-ITEM':
			case 'LYTE-NAV-ITEM':
				return !!( element.offsetWidth || element.offsetHeight || element.getClientRects().length );
				break;
			case 'LYTE-MENU-ITEM':
				while(parent.tagName !== 'LYTE-MENU-BODY'){
					parent = parent.parentElement
				}
				var menu = parent.parent
				var query = menu.ltProp('query')
				var all = document.querySelectorAll(query)
				for(var i=0;i<all.length;i++){
					var isVisible = !!( all[i].offsetWidth || all[i].offsetHeight || all[i].getClientRects().length );
					if(isVisible){
						return true
					}
				}
				return false

		}
	}

	/**
	 * Triggers a click event on the element that is matched
	 * @param {HTMLElement} element - The HTMLElement that should be clicked
	 * @param {number} wait - A wait period where a user can press a different key to invoke a different element
	 */


	function _invokeClick(element,wait){
		element = element.tagName === 'LYTE-BUTTON'? element.querySelector('button'):element;
		var isVisible = _isVisible(element)
		if(!isVisible){
			return ;
		}
		if(wait){
			_flushTimeout()
			_clickId = setTimeout(function(){
				element.click()
				_currentPointer = {}
				_allPressed = []
				_allPressedWithModifier = []
			},wait)
		}
		else{
			_flushTimeout()
			element.click()
			_currentPointer = {}
			_allPressed = []
			_allPressedWithModifier = []
		}
	}

	/**
	 * Clears the timeout in both the invoke functions
	 */

	function _flushTimeout(){
		clearTimeout(_funcId)
		clearTimeout(_clickId)
	}

	/**
	 * Callbacks/elements that need to be invoked/clicked
	 * @param {array} matchedElements - all the keys that have matched the current sequence of characters
	 */

	function _invokeMatchedElements(matchedElements,event){
		for(var i=0;i<matchedElements.length;i++){
			var type = matchedElements[i].type
			var value = matchedElements[i].value
			var wait = matchedElements[i].wait
			var invokedKey = matchedElements[i]._invokedKey
			if(typeof value === 'function'){
				_invokeFunction(value,wait,event,invokedKey)
			}
			else{
				_invokeClick(value,wait)
			}
		}
	}

	/**
	 * get all the modifiers that are currently pressed
	 * @param {object} event - the keydown event
	 */

	function _getModifiers(event){
		var modifier = []
		if(event.altKey){
			modifier.push('alt')
		}
		if(event.ctrlKey){
			modifier.push('ctrl')
		}
		if(event.shiftKey){
			modifier.push('shift')
		}
		if(event.metaKey){
			modifier.push('meta')
		}
		return modifier
	}

	/**
	 * get all the matching elements for the current sequence
	 * @param {object} event - the keydown event
	 */

	function _getMatchedElements(event){
		var allValues = []
		var allModifier = _getModifiers(event)
		// _invokedKey writes in the global object but it won't cause problems i guess
		for(var keys in _currentPointer){
			if(keys.indexOf('r:') !== -1 && _currentPointer[keys] > 0){
				var item = _registeredKeys[keys]
				item._invokedKey = keys
				allValues.push(item)
				continue
			}
			for(var i = 0;i < _registeredKeys[keys].length;i++){
				var item = _registeredKeys[keys][i]
				if(item.modifierFlag &&	_currentPointer[keys] ===  _getProperArray(keys).length && item.modifier.sort().join(' ') === allModifier.sort().join(' ')){
					item._invokedKey = item.modifier.sort().length !== 0? item.modifier.sort().join('+') + "+" + keys:keys
					allValues.push(item)
					_currentPointer[keys] = 0
				}
				else if(!item.modifierFlag && _currentPointer[keys] ===  _getProperArray(keys).length && _allPressedWithModifier.length === _getProperArray(keys).length){
					item._invokedKey = keys
					allValues.push(item)
					_currentPointer[keys] = 0
				}
			}
		}
		return allValues
	}

	/**
	 * Returns character from event
	 * @param {object} event - the keydown event
	 */

	function _getKeyFromKeyCode(event){
		var code = event.which
		if(_specialKeys[code]){
			return _specialKeys[code]
		}
		else if(_otherSpecialKeys[code]){
			if(event.shiftKey){
				return _otherSpecialKeys[code]
			}
			return _conversionUS[_otherSpecialKeys[code]]
		}
		return String.fromCharCode(code).toLowerCase()
	}


	// A timeout that refreshes the current pressed keys when no more keys are pressed


	function _createGracePeriod(){
		 clearTimeout(_timeoutID)
		_timeoutID = setTimeout(function(){
			_currentPointer = {}
			_allPressed = []
			_allPressedWithModifier = []
		},1000)
	}


	// Checks if the active element is a input/select/textarea

	function _checkActiveElement(){
		var activeElement = document.activeElement
		var tagName = activeElement.tagName
		var inputTypesAllowed = ['checkbox','radio','file','color','range']
		if(
			( 
				(
					tagName === 'INPUT' && inputTypesAllowed.indexOf(activeElement.type) === -1
				) 
				||
					activeElement.getAttribute('contenteditable') === "true"
				||
					tagName === 'SELECT' 
				|| 
					tagName === 'TEXTAREA'
			) 
			&& 
				!activeElement.classList.contains('lyte-shortcut')
			) {
			return true;
		}
		return false
	}

	/**
	 * The callback for the keydown event
	 * @param {object} event - the keydown event
	 */

	function _handleKeyPress(event){
		var shouldReject = _checkActiveElement();
		if(shouldReject){
			return ;
		}
		var character = _getKeyFromKeyCode(event)
		if(!_specialKeys[event.which]){
			_allPressed.push(character)
			_allPressedWithModifier.push(character)
		}
		else {
			_allPressedWithModifier.push(_specialKeys[event.which])
		}
		_increaseCharPointer(character)
		var matchedElements = _getMatchedElements(event)
		_createGracePeriod()
		if(matchedElements.length){
			_invokeMatchedElements(matchedElements,event)
		}
	}

	/**
	 * Builds the registered keys from array
	 * @param {array} keys - Array of keys
	 * @param {function} callback - Function to be invoked for the keys
	 */

	function _processObject(keys,callback,options){
		for(var i = 0;i < keys.length;i++){
			var key = keys[i]
			_processString(key,callback,options)
		}
	}

	/**
	 * Builds the registered key from the string
	 * @param {string} keys - String that represents the key
	 * @param {function} callback - Function to be invoked for the key
	 */

	function _processString(keys,callback,options){
		shortcut.push({
			newKey:keys,
			oldKey:undefined,
			value:callback,
			options:options
		})
	}

	/**
	 * strips white spaces
	 * @param {string} key - The key for which white spaces need to be removed
	 */

	function _stripSpaces(key){
		key = key.replace(/\s+/i,' ');
		return key;
	}


	/**
	 * Adds the regex expression to the registeredKeys
	 * @param {string} key - The regular expresssion
	 * @param {function/HTMLElement} callback - The function or the HTMLElement that should be invoked
	 * @param {object} options - Configuarion for this particular key
	 */


	function _pushRegex(keys,callback,options){
		keys = 'r:' + keys
		var wait = options.wait? options.wait:0
		var type = typeof callback 
		_registeredKeys[keys] = {
			type : type,
			value : callback,
			wait : wait
		}
	}
	

	/**
	 * registers function keys and solves other cross browser issues
	 */


	function _registerOtherKeys(){
		for(var i = 0;i <= 9;i++){
			_specialKeys[i + 96] = i.toString()
		}
		for(var i = 1;i <= 12;i++){
			_specialKeys[111 + i] = 'f' + i
		}
		var sniff = navigator.userAgent
		if(sniff.match('Firefox')){
			_otherSpecialKeys[59] = ':'
			_otherSpecialKeys[173] = '_'
		}
		else{
			_otherSpecialKeys[186] = ':'
			_otherSpecialKeys[189] = '_'
		}
	}

	/**
	 * Removing a single key and its functions
	 * @param {string} keys - The key to remove
	 */

	function _removeKey(keys){
		var obj = _preprocess(_stripSpaces(keys))
		var container = _registeredKeys[obj.newKey]
		if(!container){
			return ;
		}
		for(var i = 0;i < container.length;i++){
			if(obj.modifierFlag && container[i].modifier.sort().join(' ') === obj.modifier.sort().join(' ')){
				_registeredKeys[obj.newKey].splice(i,1)
				break;
			}
			else if(!obj.modifierFlag){
				_registeredKeys[obj.newKey].splice(i,1)
				break;
			}
		}
	}

	// Constructor

	/** 
	 * Shortcut constructor
	 * registers listeners
	 */


	function shortcut(target){
		_registerOtherKeys()
		target.addEventListener('keydown',_handleKeyPress)
	}


	// Public methods

	/**
	 * Exposes the push function so that the custom elements register key presses
	 */


	Object.defineProperty(shortcut,"push",{
		writable:false,
		value : function(entry){
			var oldkey = entry.oldKey
			if(oldkey){
				shortcut.unregister(oldkey)
			}
			if(!entry.newKey){
				return ;
			}
			var key = _stripSpaces(entry.newKey)  // don't know if we need this
			if(entry.type === 'regex'){
				_pushRegex(key,entry.value,options)
				return ;
			}
			var value = entry.value
			var returnedObject = _preprocess(key)
			var wait
			if(entry.options){
				wait = entry.options.wait? entry.options.wait:0
			}
			else{
				wait = 0
			}
			var type = typeof value
			if(_registeredKeys[returnedObject.newKey]){
				var pushed = true
				for(var i = 0; i < _registeredKeys.length;i++){
					if(_registeredKeys[i].modifier.sort().join(' ') === returnedObject.modifier.sort().join(' ')){
						_registeredKeys[returnedObject.newKey][i] = {
							type : type,
							value : value,
							modifier : returnedObject.modifier,
							modifierFlag : returnedObject.modifierFlag,
							wait : wait
						}
						pushed = false
						break;
					}
				}
				if(pushed){
					_registeredKeys[returnedObject.newKey].push({
						type : type,
						value : value,
						modifier : returnedObject.modifier,
						modifierFlag : returnedObject.modifierFlag,
						wait : wait
					})
				}
			}
			else{
				_registeredKeys[returnedObject.newKey] = [{
					type : type,
					value : value,
					modifier : returnedObject.modifier,
					modifierFlag : returnedObject.modifierFlag,
					wait : wait
				}]
			}
			
		}
	})


	/**
	 * Exposes the register function so that developers can register key pressess
	 */


	Object.defineProperty(shortcut,"register",{
		writable:false,
		value : function(keys,callback,options){
			if(options && options.type === 'regex'){
				_pushRegex(keys,callback,options)
			}
			var type = typeof keys 
			if(type !== 'string' && type !== 'object'){
				console.error("Invalid Type")
				return ;
			}
			if(type === 'object'){
				_processObject(keys,callback,options)
			}
			else{
				_processString(keys,callback,options)
			}
		}
	})


	/**
	 * Exposes the unregister function so that developers can unregister already registered keys
	 */


	Object.defineProperty(shortcut,"unregister",{
		writable:false,
		value : function(keys){
			if(typeof keys === 'object'){
				for(var i=0;i < keys.length;i++){
					var _key = keys[i]
					_removeKey(_key);
				}
			}
			else {
				_removeKey(keys);
			}
		}
	})

	/** 
	 * Exposes the unregisterAll function so developers can unregister all keys at once 
	 */


	 Object.defineProperty(shortcut,"unregisterAll",{
		writable:false,
		value : function(){
			for(var key in _registeredKeys){
				delete _registeredKeys[key]
			}
		}
	})



	// Intializing

	shortcut(document)
	window.shortcut = shortcut


})(window,document);