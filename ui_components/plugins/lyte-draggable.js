/*
	Optimized by reading the values first and then writting
	Added - 27/07/2014 - documentation not done yet
		1. Added draggable + sortable compatibility - Drag any draggable element to sort it with a list of sortable elements and sort it with them
		2. Added helper options - can be string or any function
		3. Added connectToSortable options
		4. Added onBeforeStop callback - return false to exit
	Date - 28/08/2018
  	1. Added method to destroy draggable.

*/

;(function( window ) {

	if(lyteDomObj){	
		manageDraggable = {
			init : false,
			isRestricted : function(restrict,element){
				restrict = restrict instanceof Array ? restrict : restrict.split(",");
				for(var i = 0; i<restrict.length; i++){
					var elements = document.querySelectorAll(restrict[i]);
					for(var j = 0; j < elements.length; j++){
						if(element.isEqualNode(elements[i])){
							return true;
						}
					}
				}
				return false;
			},

			destroy : function(element){
				if(!(element.classList.contains('draggable-element')) && !(element.classList.contains('draggable-helper'))){
					console.info("ALERT! - U have already destroyed its draggable behaviour.");
					return;
				}
				if(element.classList.contains('draggable-handle-element')){
					element.classList.remove('draggable-handle-element')
					element.removeEventListener('mousedown',element._draggableData.__mousedown);
					element.removeEventListener('touchstart',element._draggableData.__mousedown, true);
					element._draggableData = null;
				}
				else{
					var handleElems = element.querySelectorAll('.draggable-handle-element');
					for(var i = 0; i<handleElems.length; i++){
						handleElems[i].classList.remove('draggable-handle-element')
						handleElems[i].removeEventListener('mousedown',handleElems[i]._draggableData.__mousedown);
						handleElems[i].removeEventListener('touchstart',handleElems[i]._draggableData.__mousedown, true);
						handleElems[i]._draggableData = null;
					}
				}
				element.classList.remove('draggable-element','draggable-helper');
				element._mousedown = undefined;
			}

		};
		
		lyteDomObj.prototype.draggable = function(object) {

			if(!manageDraggable.init){
				if (!Element.prototype.matches) {
				    Element.prototype.matches = 
				        Element.prototype.matchesSelector ||
				        Element.prototype.mozMatchesSelector ||
				        Element.prototype.msMatchesSelector || 
				        Element.prototype.oMatchesSelector || 
				        Element.prototype.webkitMatchesSelector ||
				        function(s) {
				            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
				                i = matches.length - 1;
				            while (i >= 0 && matches.item(i) !== this){
				            	--i;
				            	//gets the index of the matched item
				            }
				            return i > -1;            
				        };
				}
				manageDraggable.init = true;
			}

			if(typeof object === "string" && object === "destroy"){
				if(this.length > 1){
					var elemArray = this;
					for(var i = 0; i<elemArray.length; i++){
						manageDraggable.destroy(elemArray[i]);
					}
				}
				else{
					manageDraggable.destroy(this[0]);
				}
				return;
			}

			var data = object ? object : {};

			if(this.length > 1){
				var elemArray = this;
				for(var i = 0; i<elemArray.length; i++){
					$L(elemArray[i]).draggable(Object.assign({},data));
				}
				return;
			}
			//Parent Element
			if(data.restrict && manageDraggable.isRestricted(data.restrict,this[0])){
				return;
			}
			data._element = this[0];
			$L(data._element).addClass('draggable-element');

			var _handleElement;
			var _initialPos = {};
			var _offset = [0,0];
			var _marginTop = 0;
			var _marginLeft = 0;
			var _mousePosition;
			var _placeholder;
			var _sortableElemClass;
			var _positionedPlceholder = false;
			var _requestId1;
			var _animationFrameFired1;
			var _elemBelow;
			var droppablePlace;
			var returnVal;
			var _mousePosition;
			var prevDimension = null;
			var _maxScrollHeight;
			var _maxScrollWidth;
			var _scrollTop;
			var _scrollLeft;
			//Data initialization
			data.placeholder = data.placeholder ? data.placeholder : "lyteDraggablePlaceholder";
			data.containment = (data.containment === undefined) ? document : $L(data.containment)[0];
			data.orientation = (data.orientation === undefined) ? "default" : data.orientation;
			data.handle = (data.handle === undefined) ? this[0] : data.handle;
			data.restrict = data.restrict === undefined ? [] : data.restrict instanceof Array ? data.restrict : data.restrict.split(",");
			data.helper = data.helper ? data.helper : "original";
			data.connectToSortable = data.connectToSortable ? data.connectToSortable : null;
			data.cursorAt = data.cursorAt;
			data.disabled = data.disabled ? data.disabled : "lyteDraggableDisabledPlaceholder";
			data.appendTo = data.appendTo && data.appendTo != "parent" ? $L(data.appendTo)[0] : "parent";
			data.bubbles = data.bubbles === undefined ? true : data.bubbles;
			data.scrollDivX = data.scrollDivX ? (typeof data.scrollDivX == "string" ? document.querySelector(data.scrollDivX) : data.scrollDivX) : undefined;
			data.scrollDivY = data.scrollDivY ? (typeof data.scrollDivY == "string" ? document.querySelector(data.scrollDivY) : data.scrollDivY) : undefined;

			

			function mouseDownEvent(event){
				// event.preventDefault();
				// console.log("calling mousedown from draggable");
				//Disable right click on the sortable elements to avoid unwanted behaviour
				if(event.which == 3){
					return;
				}
				var _handleElement = event.target.closest('.draggable-handle-element');
				if(_handleElement){
					if(!_handleElement._draggableData.bubbles){
						event.stopPropagation();
					}
					var data = _handleElement._draggableData;
					var elem = data._element;
					var elemOffset = elem.getBoundingClientRect();
					var cs = window.getComputedStyle(elem);
					var width = elemOffset.width;
					var height = elemOffset.height;
					data._offParent = elem.offsetParent;
					data._parent = elem.parentElement;

					//Callback fired
					if(data.onStart){
						onStart(data, event);
					}

					_initialPos = {
						x : elem.offsetLeft,
						y : elem.offsetTop,
						pos : $L(elem).css('position')
					};
					if(data.cursorAt){
						_offset = [
							data.cursorAt.left,
							data.cursorAt.top
						];
					}
					else{
						if(event.type == "mousedown"){
							_offset = [
								event.clientX - elemOffset.left,
								event.clientY - elemOffset.top
							];
						}
						else if(event.type == "touchstart"){
							_offset = [
								event.touches[0].clientX - elemOffset.left,
								event.touches[0].clientY - elemOffset.top
							];
						}
					}
					// if(event.type == "mousedown"){
					// 	_offset = [
					// 		event.clientX - elemOffset.left,
					// 		event.clientY - elemOffset.top
					// 	];
					// }
					if(event.type == "touchstart"){
						// _offset = [
						// 	event.touches[0].clientX - elemOffset.left,
						// 	event.touches[0].clientY - elemOffset.top
						// ];

						//Binding touch events
						document.addEventListener('touchmove',mouseMoveEvent, true);
						document.addEventListener('touchend',mouseUpEvent, true);
						data._element.classList.add('stopDefaultMove');
					}
					
					if(cs.marginTop){
						_marginTop = cs.marginTop;
					}
					if(cs.marginLeft){
						_marginLeft = cs.marginLeft;
					}
					// var parent = elem.offsetParent;

					if(data.scrollDivY && window.getComputedStyle(data.scrollDivY).position == "relative"){
						data._isRelativeY = true;
					}
					else{
						data._isRelativeY = false;
					}
					if(data.scrollDivX && window.getComputedStyle(data.scrollDivX).position == "relative"){
						data._isRelativeX = true;
					}
					else{
						data._isRelativeX = false;
					}

					data._isDown = true;
					data._initialPos = _initialPos;
					data._offset = _offset;
					data._marginLeft = _marginLeft;
					data._marginTop = _marginTop;
					$L(_handleElement).addClass('selected-element');
					
					//Set the current element for manager to manage draggables and droppables
					if(typeof managerDD !== "undefined"){
						managerDD._current = data._element;
					}
					if(event.type == "mousedown"){
						if(window.navigator.platform.indexOf('Win') > -1 && (window.chrome !== null && typeof window.chrome !== "undefined" && window.navigator.vendor === "Google Inc." && typeof window.opr == "undefined" && window.navigator.userAgent.indexOf("Edge") == -1)){
							setTimeout(function(){
								document.addEventListener('mousemove',mouseMoveEvent);
								document.addEventListener('mouseup',mouseUpEvent);
							},16);
						}
						else{
							document.addEventListener('mousemove',mouseMoveEvent);
							document.addEventListener('mouseup',mouseUpEvent);
						}
					}
				}
				else{
					_handleElement = null;
				}
				// console.log(event.target, "selected");
			}

			var mouseMoveEvent = function(event){
				// console.log("calling mousemove from draggable");
				var target = event.target;
				while(target && target != document){
					if($L(target).hasClass("selected-element")){
						_handleElement = target;
						break;
					}
					target = target.parentElement;
				}
				if(_handleElement){
					// console.log(event.target, "moving");
					var data = _handleElement._draggableData;
					if(data && data._isDown){
						if(event.type == "mousemove"){
							event.preventDefault();
						}
						var elem = data._element;
						_offset = data._offset;
						_marginLeft = data._marginLeft;
						_marginTop = data._marginTop;
						var orientation = data.orientation;
						var parent = data._offParent;
						var elemOffset = elem.getBoundingClientRect();
						var parentOffset = parent.getBoundingClientRect();
						if(data.scrollDivY && data._isRelativeY){
							_scrollTop = data.scrollDivY.scrollTop;
						}
						else{
							_scrollTop = 0;
						}
						if(data.scrollDivX && data._isRelativeX){
							_scrollLeft = data.scrollDivX.scrollLeft;
							if(_lyteUiUtils.getRTL() && detectBrowser() == "chrome" && data._isRelativeX){
								_scrollLeft -= (data._maxScrollWidth ? data._maxScrollWidth : (data.scrollDivX.scrollWidth - data.scrollDivX.offsetWidth));
							}
						}
						else{
							_scrollLeft = 0;
						}
						if(data._isRelative){
							scrollLeftValue = _scrollLeft;
						}
						
						if(!data._isMoved){
							
							var cs = window.getComputedStyle(elem);
				            var borderDimensionY = ((cs.borderTop ? parseFloat(cs.borderTop) : 0) +
				                                     (cs.borderBottom ? parseFloat(cs.borderBottom) : 0));
				            var borderDimensionX = ((cs.borderLeft ? parseFloat(cs.borderLeft) : 0) +
				                                     (cs.borderRight ? parseFloat(cs.borderRight) : 0));
							if(typeof data.helper == "string"){
								if(data.helper == "clone"){
									var helper = elem.cloneNode(true);
									LyteComponent.insertAfter(elem,helper);
									$L(elem).removeClass('selected-element');
									if(!($L(helper).hasClass('draggable-handle-element'))){
										$L(helper).addClass('draggable-handle-element');
									}
									helper._draggableData = Object.assign({},data);
									data = helper._draggableData;
									data._element = data.handle = helper;
									_handleElement = helper;
									elem = helper;
									elem.addEventListener("mousedown",mouseDownEvent);
									if(data.connectToSortable){
										data._prevTop = event.clientY;
									}
								}
							}
							else{
								var helper = data.helper(elem);
								if(helper){
									helper._callee = elem;
									$L(elem).removeClass('selected-element');
									if(!($L(helper).hasClass('draggable-handle-element'))){
										$L(helper).addClass('draggable-handle-element');
									}
									if(!($L(helper).hasClass('selected-element'))){
										$L(helper).addClass('selected-element');
									}
									$L(helper).addClass('draggable-helper');
									helper._draggableData = Object.assign({},data);
									data = helper._draggableData;
									data._element = data.handle = helper;
									_handleElement = helper;

									//Appends the helper to the provided element
									if(data.appendTo == "parent"){
										data._parent.appendChild(helper);
									}
									else{
										data.appendTo.appendChild(helper);
									}
									elem = helper;
									elem.addEventListener("mousedown",mouseDownEvent);
									if(data.connectToSortable){
										data._prevTop = event.clientY;
									}
									parent = data._offParent = elem.offsetParent;
									parentOffset = parent.getBoundingClientRect();
								}
							}
							if(typeof managerDD != "undefined"){
								managerDD._current = elem;
							}

							data = elem._draggableData || _handleElement._draggableData;
							
							//Create placeholder and append it to the DOM
							if(data.connectToSortable){
								_placeholder = elem.cloneNode(true);
								_placeholder._callee = elem;
								$L(_placeholder).removeClass('selected-element');
								_placeholder.innerHTML = "";
								$L(_placeholder).attr('id','lyteDraggableDummy');
								$L(_placeholder).addClass(data.placeholder);
								_placeholder.style.boxSizing = "border-box";
								// if(cs.boxSizing == "border-box"){
									_placeholder.style.width = elemOffset.width + "px";
									_placeholder.style.height = elemOffset.height + "px";
								// }
								// else{
								// 	_placeholder.style.width = calculateWidth(elem)/*(elemOffset.width - borderDimensionX)*/ + "px";
								// 	_placeholder.style.height = calculateHeight(elem)/*(elemOffset.height - borderDimensionY)*/ + "px"; 
								// }
								_placeholder.style.padding = "0px";
							}
							elem.style.top = elemOffset.top - parentOffset.top /*- parseInt(cellSpacing)*/ - parseInt(_marginTop) + _scrollTop + 'px';
							elem.style.left = elemOffset.left - parentOffset.left - parseInt(_marginLeft) + _scrollLeft + 'px';
							elem.style.zIndex = 200000;
							if(cs.boxSizing == "border-box"){
								elem.style.width = elemOffset.width /*- borderDimensionX */+'px';
								elem.style.height = elemOffset.height /*- borderDimensionY*/ +'px';
							}
							else{
								elem.style.width = calculateWidth(elem) /*elemOffset.width - borderDimensionX*/ +'px';
								elem.style.height = calculateHeight(elem) /*elemOffset.height - borderDimensionY*/ +'px';
							}
							elem.style.position = "absolute";
							if(data.onDragStart){
								onDragStart(data,_handleElement,_placeholder,event);
							}
							if(data.scrollDivY){
								_maxScrollHeight = data.scrollDivY.scrollHeight - data.scrollDivY.offsetHeight;
							}
							if(data.scrollDivX){
								_maxScrollWidth = data.scrollDivX.scrollWidth - data.scrollDivX.offsetWidth;
								data._maxScrollWidth = _maxScrollWidth;
							}
							if(data.cursorAt && _lyteUiUtils.getRTL()){
								var offset = data.cursorAt,
				                    newOffset = {};
				                for(key in offset){
				                    if(key == "left"){
				                        newOffset.left = data._element.offsetWidth - offset[key];
				                    }
				                    else{
				                        newOffset[key] = offset[key];
				                    }
				                }
				                data._preCursorAt = Object.assign({},data.cursorAt);
				                data.cursorAt = newOffset;
				                _offset = data._offset = [
										                	data.cursorAt.left,
										                	data.cursorAt.top
										                ];
							}
						}
						else{
							if(data._placeholder){
								_placeholder = data._placeholder;
							}
							if(data._positionedPlceholder){
								_positionedPlceholder = data._positionedPlceholder;
							}
						}

						if(event.type == "mousemove"){
							_mousePosition = {
								x : event.clientX,
								y : event.clientY
							};
							data._mousePosition = _mousePosition;
						}
						else if(event.type == "touchmove"){
							data.touchTarget = event.touches;
							data._mousePosition = {
								x : event.touches[0].clientX,
								y : event.touches[0].clientY
							};
						}
						var returnVal = true;
						//Callback fired
						if(data.onDrag){
							returnVal = onDrag(data,_handleElement,event);
						}
						if(returnVal){
							if(orientation === "vertical"){
								elem.style.top = data._mousePosition.y - _offset[1] - parentOffset.top - parseInt(_marginTop) + _scrollTop + 'px';
							}
							else if(orientation === "horizontal"){
								elem.style.left = data._mousePosition.x - _offset[0] - parentOffset.left - parseInt(_marginLeft) + _scrollLeft + 'px';
							}
							else if(orientation === "default"){
								// if(data.cursorAt){
								// 	elem.style.left = data._mousePosition.x - (data.cursorAt.left ? data.cursorAt.left : _offset[0]) - parentOffset.left - parseInt(_marginLeft) + _scrollLeft + 'px';
								// 	elem.style.top = data._mousePosition.y - (data.cursorAt.top ? data.cursorAt.top : _offset[1]) - parentOffset.top - parseInt(_marginTop) + _scrollTop + 'px';
								// }
								// else{
									elem.style.left = data._mousePosition.x - _offset[0] - parentOffset.left - parseInt(_marginLeft) + _scrollLeft + 'px';
									elem.style.top = data._mousePosition.y - _offset[1] - parentOffset.top - parseInt(_marginTop) + _scrollTop + 'px';
								// }

								elemOffset = elem.getBoundingClientRect();
								if(data.scrollDivY){
									var scrollDivOffset = data.scrollDivY.getBoundingClientRect();
									if((elemOffset.left <= scrollDivOffset.right) && (elemOffset.right >= scrollDivOffset.left)){
										_requestId1 = requestAnimationFrame(callForScrollY.bind(this,data,data.scrollDivY,scrollDivOffset,_maxScrollHeight,data._isRelativeY,_mousePosition,_offset,parentOffset));
										_animationFrameFired1 = true;
									}
								}

								//Animation Frame fired for horizontal scrolling
								if(data.scrollDivX){
									var scrollDivOffset = data.scrollDivX.getBoundingClientRect();
									if(elemOffset.left <= scrollDivOffset.right || elemOffset.right >= scrollDivOffset.left){
										_requestId2 = requestAnimationFrame(callForScrollX.bind(this,data,scrollDivOffset,_maxScrollWidth,_mousePosition,_offset,parentOffset,data._isRelativeX));
										_animationFrameFired2 = true; 
									}
								}
								
								if(data.connectToSortable){
									var sortableData = $L(data.connectToSortable).length ? $L(data.connectToSortable)[0]._sortableData : null;
									_sortableElemClass = sortableData.sortableElemClass;
									// if(_positionedPlceholder){
									// 	var scrollDiv = findScrollDiv(_placeholder);
									// 	var scrollDivOffset = scrollDiv ? scrollDiv.getBoundingClientRect() : null;
									// 	if(scrollDiv && (elemOffset.left <= scrollDivOffset.right) && (elemOffset.right >= scrollDivOffset.left)){
									// 		_requestId1 = requestAnimationFrame(callForScrollY.bind(this,data,scrollDiv,scrollDivOffset));
									// 		_animationFrameFired1 = true;
									// 	}
									// }

									//Find the below element over which the sortable element is being dragged
									elem.style.display = "none";
									_elemBelow = document.elementFromPoint(_mousePosition.x,_mousePosition.y);
									elem.style.display = "";
									
									//check isOver sortable list
									manageSortable.isOver(event,data,true);

									if(!_elemBelow){
										return;
									}

									//Find the closest sortable element to sort with
									droppablePlace = _elemBelow.closest('.'+_sortableElemClass);
									// if(document.getElementById('lyteDraggableDummy')){
									// 	document.getElementById('lyteDraggableDummy').style.display = "";
									// }

									if(droppablePlace/* && checkDroppable(droppablePlace,_sortableElem.parentElement,_sortableElem,data.connectedWith,data.containmentDimensions,_mousePosition)*/){
										
										if($L(_elemBelow).hasClass('sortable-parent') && checkParentDroppable(_elemBelow,data) && checkForIntersect(_elemBelow,_mousePosition) && checkForBetween(_elemBelow,_mousePosition,elem/*,isRelativeY,scrollDiv*/)){
											// $L(_elemBelow).append(_placeholder);
											LyteComponent.appendChild(_elemBelow,_placeholder);
											_placeholder.style.display = "";
										}
										else{
											if(elem.getBoundingClientRect().top < droppablePlace.getBoundingClientRect().top){
												LyteComponent.insertBefore(droppablePlace,_placeholder);
											}
											else if(elem.getBoundingClientRect().bottom > droppablePlace.getBoundingClientRect().bottom){
												LyteComponent.insertAfter(droppablePlace,_placeholder);
											}
											_placeholder.style.display = "";
										}
										_positionedPlceholder = true;
									}
									else if(_elemBelow && $L(_elemBelow).hasClass('sortable-parent') && checkParentDroppable(_elemBelow,data) && checkForIntersect(_elemBelow,_mousePosition) && checkForBetween(_elemBelow,_mousePosition,elem/*,isRelativeY,scrollDiv*/)){
										// $L(_elemBelow).append(_placeholder);
										LyteComponent.appendChild(_elemBelow,_placeholder);
										_placeholder.style.display = "";
										_positionedPlceholder = true;
									}
									else{
										if(!checkPlaceholderBelow(_elemBelow) && !($L(_elemBelow).hasClass('sortable-parent') && checkParentDroppable(_elemBelow,data))){
											// console.log("placeholder set to false");
											if(document.getElementById('lyteDraggableDummy')){
												document.getElementById('lyteDraggableDummy').style.display = "none";
											}
											_positionedPlceholder = false;
										}
									}

									if(_positionedPlceholder){
										if(!data.onPlaceholder || checkValidDroppable(data,_placeholder)){
											if($L(_placeholder).hasClass(data.disabled)){
												$L(_placeholder).removeClass(data.disabled);
											}
											$L(_placeholder).addClass(data.placeholder);
										}
										else{
											if($L(_placeholder).hasClass(data.placeholder)){
												$L(_placeholder).removeClass(data.placeholder);
											}
											$L(_placeholder).addClass(data.disabled);
										}
									}
									
									// else{
									// 	console.log("checkParentDroppable",checkParentDroppable(_elemBelow,data._parentElem,_sortableElem,data.connectedWith));
									// 	console.log("checkForIntersect",checkForIntersect(_elemBelow,_mousePosition));
									// 	console.log("came here",_elemBelow);
									// }
									data._placeholder = _placeholder;
									data._positionedPlceholder = _positionedPlceholder;
								}
							}
						}
						
						//Check for any droppable element and if present execute its drag function
						if(typeof managerDD !== "undefined"){
							managerDD._drag(event);
						}
						data._isMoved = true;
					}
				}
			}

			var mouseUpEvent = function(event){
				// console.log("calling mouseup from draggable");
				// event.preventDefault();
				// _handleElement = event.target.closest('.selected-element') ? event.target.closest('.selected-element') : document.querySelector('.selected-element');
				var target = event.target;
				// _handleElement = null;
				while(target && target != document){
					if($L(target).hasClass("selected-element")){
						_handleElement = target;
						break;
					}
					target = target.parentElement;
				}
				//Unbind mouseup and mousemove
				if(event.type == "mouseup"){
					document.removeEventListener('mousemove',mouseMoveEvent);
					document.removeEventListener('mouseup',mouseUpEvent);
				}
				//Unbinding touch events
				if(event.type == "touchend"){
					document.removeEventListener('touchmove',mouseMoveEvent, true);
					document.removeEventListener('touchend',mouseUpEvent, true);
					if(data._element.classList.contains('stopDefaultMove')){
						data._element.classList.remove('stopDefaultMove');
					}
				}
				if(_handleElement){
					var data = _handleElement._draggableData;
					if(data.cursorAt && _lyteUiUtils.getRTL()){
						data.cursorAt = Object.assign({},data._preCursorAt);
		                data._preCursorAt = undefined;
		                
					}
					if(data.connectToSortable && manageSortable.prevSortable){
						manageSortable.prevSortable = false;
					}
					_placeholder = data._placeholder;
					if(data && data._isDown){
						data._isDown = false;
						var elem = data._element;
						if(data._isMoved){
							var placed = false;
							data._isMoved = false;
							_initialPos = data._initialPos;
							_marginTop = parseInt(data._marginTop);
							_marginLeft = parseInt(data._marginLeft);
							
							var returnVal = true;
							if(data.onBeforeStop){
								returnVal = onBeforeStop(data,event);
							}
							if(!returnVal){
								if(data.helper != "original"){
									elem.remove();
									if(document.getElementById('lyteDraggableDummy')){
										_placeholder.remove();
									}
									return;
								}
								if(_initialPos.pos === "absolute"){
									elem.style.left = _initialPos.x + "px";
									elem.style.top = _initialPos.y + "px";
								}
								else{
									elem.style.left = "";
									elem.style.top = "";
									elem.style.position = "";
								}
							}
							else{
								if(data.connectToSortable && data._positionedPlceholder){
									var sibling = (findPreviousElem(_placeholder) ? findPreviousElem(_placeholder) : findNextElem(_placeholder));
									var elementData = sibling ? sibling._sortableData : _placeholder.parentElement._sortableData;
									// $L(_placeholder).replace(_div);
									LyteComponent.replaceWith(_placeholder, elem);
									
									_placeholder = null;
									elem._sortableData = elementData;
									elem.removeEventListener('mousedown',mouseDownEvent);
									removeStyle(elem);
									placed = true;
								}
							}
							
							//Check for any droppable element & if present execute its drop function
							if(typeof managerDD !== "undefined"){
								managerDD._drop(event);
								managerDD._current = null;
							}

							//Callback fired
							if(data.onStop){
								returnVal = onStop(data, event);
							}

							if(!returnVal){
								if(data.helper != "original" && !placed){
									elem.remove();
									if(document.getElementById('lyteDraggableDummy')){
										_placeholder.remove();
									}
									return;
								}
								if(_initialPos.pos === "absolute"){
									elem.style.left = _initialPos.x + "px";
									elem.style.top = _initialPos.y + "px";
								}
								else{
									elem.style.left = "";
									elem.style.top = "";
									elem.style.position = "";
								}
							}

						}
						elem.style.zIndex = "";
						$L(_handleElement).removeClass('selected-element');

					}
					data.touchTarget = null;
					_handleElement = null;
					if(document.getElementById('lyteDraggableDummy')){
						document.getElementById('lyteDraggableDummy').remove();
						if(_placeholder){
							_placeholder = null;
						}
					}
				}
				var elements = event.target.ownerDocument.querySelectorAll(".selected-element");
				var draggableDummy = event.target.ownerDocument.querySelectorAll(".lyteDraggableDummy");
				for(var i = 0; i < elements.length; i++){
					var elem = elements[i],
						data = elem._draggableData;
					if(data.cursorAt && data._preCursorAt && _lyteUiUtils.getRTL()){
						data.cursorAt = Object.assign({},data._preCursorAt);
						data._preCursorAt = undefined;
					}
					if(data._placeholder){
						data._placeholder = null;
						data._positionedPlceholder = false;
					}
					data._isDown = false;
					data._isMoved = false;
					$L(elem).removeClass('selected-element');
					$L(elem).removeClass('stopDefaultMove');
				}
				for(var i = 0; i < draggableDummy; i++){
					draggableDummy[i].remove();
				}
			}

			/*---------------Callbacks Start--------------*/
			var onReady = function(data){
				data.onReady(data._element);
			}

			var onStart = function(data, event){
				data.onStart(data._element, event);
			}

			var onDragStart = function(data,_handleElement,_placeholder,event){
				data.onDragStart(data._element,_handleElement,_placeholder,event);
			}

			var onDrag = function(data, _handleElement,event){
				returnVal = data.onDrag(data._element,_handleElement,event);
				return (returnVal == undefined) ? true : returnVal;
			}

			var onBeforeStop = function(data,event){
				returnVal = data.onBeforeStop(data._element,data._placeholder,data._positionedPlceholder ? data._placeholder.parentElement : null,event);
				return (returnVal == undefined) ? true : returnVal;
			}

			var checkValidDroppable = function(data,placeholder){
				var returnVal = data.onPlaceholder(data._element,placeholder, data._element.parentElement, placeholder ? placeholder.parentElement : null);
				return (returnVal == undefined) ? true : returnVal;
			}

			var onStop = function(data,event){
				data._element.style.display = "none";
				if(event.type == "mouseup"){
					_elemBelow = document.elementFromPoint(event.clientX, event.clientY);
				}
				else if(event.type == "touchend"){
					_elemBelow = document.elementFromPoint(data.touchTarget[0].clientX,data.touchTarget[0].clientY);
				}
				data._element.style.display = "";
				returnVal = data.onStop(data._element, data._positionedPlceholder ? data._element.parentElement : null, _elemBelow,event);
				return (returnVal === undefined) ? true : returnVal;
			}
			/*---------------Callbacks End--------------*/

			
			//Bind events
			data.__mousedown = mouseDownEvent;
			data.__mousemove = mouseMoveEvent;
			data.__mouseup = mouseUpEvent;
			if(!data._element._mousedown){
				if(typeof data.handle !== "string" && data.handle.length){
					data.handle.forEach(function(item){
						ele = $L(item, data._element)[0];
						ele._draggableData = data;
						$L(ele).addClass('draggable-handle-element');
						ele.addEventListener('mousedown',data.__mousedown);
						ele.addEventListener('touchstart',data.__mousedown, true);
					});
				}
				else{
					data.handle._draggableData = data; 
					$L(data.handle).addClass('draggable-handle-element');
					data.handle.addEventListener('mousedown',data.__mousedown);
					data.handle.addEventListener('touchstart',data.__mousedown, true);
				}
				data._element._mousedown = true;
			}
			
			

			//Callback fired
			if(data.onReady){
				onReady(data);
			}

			var checkParentDroppable = function(_elemBelow,data){
				if(_elemBelow.matches(data.connectToSortable)){
					return true;
				}
				return false;
			}

			var calculateHeight = function(element) {
				var cs = getComputedStyle(element);

				var paddingY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);

				var borderY = parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth);

				// Element height minus padding and border
				elementHeight = element.offsetHeight - paddingY - borderY;
				return elementHeight;
			};

			var calculateWidth = function(element) {
				var cs = getComputedStyle(element);

				var paddingX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);

				var borderX = parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth);

				// Element width minus padding and border
				elementWidth = element.offsetWidth - paddingX - borderX;
				return elementWidth;
			};

			var callForScrollY = function(data,scrollDiv,parentOffset,_maxScrollHeight,isRelativeY,_mousePosition,_offset,parent){
				var divOffset = data._element.getBoundingClientRect();
				// var diff = data._placeholder.parentElement.offsetTop - scrollDiv.offsetTop + 5;
				var scrollTop = scrollDiv.scrollTop;
				console.log("Scroll Y getting called",_maxScrollHeight,"    scrollTop",scrollTop);
				
				if((divOffset.top - parseInt(data._marginTop) <= parentOffset.top /*+ diff*/) && (scrollTop > 0)){
					if(isRelativeY){
						data._element.style.top = _mousePosition.y - _offset[1] - parent.top - (_maxScrollHeight - scrollTop >= 10 ? 10 : _maxScrollHeight - scrollTop) + scrollTop + "px";
					}
					scrollDiv.scrollTop -= 10;
				}
				else if((divOffset.bottom >= (parentOffset.bottom - 3)) && (scrollTop < _maxScrollHeight)){
					if(_maxScrollHeight - scrollTop > 10){
						if(isRelativeY){
							data._element.style.top = _mousePosition.y - _offset[1] - parent.top + 10 + scrollTop + "px";
						}
						scrollDiv.scrollTop += 10;
					}
					else{
						if(isRelativeY){
							data._element.style.top = _mousePosition.y - _offset[1] - parent.top + _maxScrollHeight - scrollTop + scrollTop + "px";
						}
						scrollDiv.scrollTop += (_maxScrollHeight - scrollTop);
					}
				}
				else{
					cancelAnimationFrame(_requestId1);
					_animationFrameFired1 = false;
					_requestId1 = null;
					return;
				}
				_requestId1 = requestAnimationFrame(callForScrollY.bind(this,data,scrollDiv,parentOffset,_maxScrollHeight,isRelativeY,_mousePosition,_offset,parent));
				
			};

			var callForScrollX = function(data,parentOffset,_maxScrollWidth,_mousePosition,_offset,parent,isRelative){
				var divOffset = data._element.getBoundingClientRect();
				_scrollLeft = data.scrollDivX.scrollLeft;
				// _maxScrollWidth = data._maxScrollWidth;
				console.log("Scroll X getting called",_maxScrollWidth,"   scrollleft",_scrollLeft);
				if( !_lyteUiUtils.getRTL() || (_lyteUiUtils.getRTL() && detectBrowser() == "chrome" && !isRelative)){
					if((divOffset.right >= parentOffset.right - 2) && (_scrollLeft < _maxScrollWidth)){
						if((_maxScrollWidth - _scrollLeft) >= 5){
							data.scrollDivX.scrollLeft += 5;
							if(isRelative){
								data._element.style.left = _mousePosition.x - _offset[0] - parent.left + 5 + _scrollLeft + "px";
							}
						}
						else{
							data.scrollDivX.scrollLeft += (5 - (_maxScrollWidth - _scrollLeft));
							if(isRelative){
								data._element.style.left = _mousePosition.x - _offset[0] - parent.left + (5 - (_maxScrollWidth - _scrollLeft)) + _scrollLeft + "px";
							}
						}
					}
					else if((divOffset.left <= parentOffset.left + 2) && (_scrollLeft > 0)){
						if(isRelative){
							data._element.style.left = _mousePosition.x - _offset[0] - parent.left - ((_maxScrollWidth - _scrollLeft) > 5 ? 5 : (5 - (_maxScrollWidth - _scrollLeft))) + _scrollLeft + "px";
						}
						data.scrollDivX.scrollLeft -= 5;
					}
					else{
						cancelAnimationFrame(_requestId2);
						_animationFrameFired2 = false;
						_requestId2 = null;
						return;
					}
				}
				else{
					if(detectBrowser() == "chrome" && isRelative){
						// debugger
						if((divOffset.right >= parentOffset.right) && (_scrollLeft < _maxScrollWidth)){
							if((_maxScrollWidth - _scrollLeft) >= 5){
								data.scrollDivX.scrollLeft += 5;
								if(isRelative){
									data._element.style.left = _mousePosition.x - _offset[0] - parent.left + 5 + (_scrollLeft - _maxScrollWidth) + "px";
								}
							}
							else{
								data.scrollDivX.scrollLeft += (5 - (_maxScrollWidth - _scrollLeft));
								if(isRelative){
									data._element.style.left = _mousePosition.x - _offset[0] - parent.left + (5 - (_maxScrollWidth - _scrollLeft)) + _scrollLeft + "px";
								}
							}
						}
						else if((divOffset.left <= parentOffset.left) && (_scrollLeft > 0)){
							if(isRelative){
								data._element.style.left = _mousePosition.x - _offset[0] - parent.left - ((_maxScrollWidth - _scrollLeft) + 5) + "px";
							}
							data.scrollDivX.scrollLeft -= 5;
						}
						else{
							cancelAnimationFrame(_requestId2);
							_animationFrameFired2 = false;
							_requestId2 = null;
							return;
						}
					}
					else if(detectBrowser() == "firefox" || detectBrowser() == "safari"){
						// debugger
						if((divOffset.right >= parentOffset.right) && (_scrollLeft < 0)){
							if((_maxScrollWidth + _scrollLeft) >= 5){
								data.scrollDivX.scrollLeft += 5;
								if(isRelative){
									data._element.style.left = _mousePosition.x - _offset[0] - parent.left + 5 + _scrollLeft + "px";
								}
							}
							else{
								data.scrollDivX.scrollLeft += (5 - (_maxScrollWidth + _scrollLeft));
								if(isRelative){
									data._element.style.left = _mousePosition.x - _offset[0] - parent.left + (5 - (_maxScrollWidth + _scrollLeft)) + _scrollLeft + "px";
								}
							}
						}
						else if((divOffset.left <= parentOffset.left) && (_scrollLeft > -(_maxScrollWidth))){
							if(isRelative){
								data._element.style.left = _mousePosition.x - _offset[0] - parent.left + (_scrollLeft - 5) + "px";
							}
							data.scrollDivX.scrollLeft -= 5;
						}
						else{
							cancelAnimationFrame(_requestId2);
							_animationFrameFired2 = false;
							_requestId2 = null;
							return;
						}
					}
					else if(detectBrowser() == "ie" || detectBrowser() == "edge"){
						// debugger
						if((divOffset.right >= parentOffset.right) && (_scrollLeft > 0)){
							if(_scrollLeft >= 5){
								data.scrollDivX.scrollLeft -= 5;
								// if(isRelative){
								// 	data._element.style.left = _mousePosition.x - _offset[0] - parent.left + 5 + _scrollLeft + "px";
								// }
							}
							else{
								data.scrollDivX.scrollLeft -= _scrollLeft;
								// if(isRelative){
								// 	data._element.style.left = _mousePosition.x - _offset[0] - parent.left + (5 - (_maxScrollWidth + _scrollLeft)) + _scrollLeft + "px";
								// }
							}
						}
						else if((divOffset.left <= parentOffset.left) && (_scrollLeft < _maxScrollWidth)){
							if(isRelative){
								data._element.style.left = _mousePosition.x - _offset[0] - parent.left + (-_scrollLeft) - 5 + "px";
							}
							data.scrollDivX.scrollLeft += 5;
						}
						else{
							cancelAnimationFrame(_requestId2);
							_animationFrameFired2 = false;
							_requestId2 = null;
							return;
						}
					}

				}
				_requestId2 = requestAnimationFrame(callForScrollX.bind(this,data,parentOffset,_maxScrollWidth,_mousePosition,_offset,parent,isRelative)); 
			};

			var detectBrowser = function(){
				//Check if browser is IE11
			    if (navigator.userAgent.search("rv:11") >= 0) {
			        return "ie";
			    }
			    //Check if browser is Edge
			    if (navigator.userAgent.search("Edge") >= 0) {
			        return "edge";
			    }
			    //Check if browser is Chrome || Opera
			    else if (navigator.userAgent.search("Chrome") >= 0) {
			        return "chrome";
			    }
			    //Check if browser is Firefox 
			    else if (navigator.userAgent.search("Firefox") >= 0) {
			        return "firefox";
			    }
			    //Check if browser is Safari
			    else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
			        return "safari";
			    }
			};

			var checkForIntersect = function(parentElem,mP){
				var cs = window.getComputedStyle(parentElem);
				var offset = parentElem.getBoundingClientRect();
				// console.log("cs",cs);
				// console.log("offset",offset);
				// console.log("_mousePosition",mP.x,mP.y);
				if(mP.x > (offset.left + parseFloat(cs.paddingLeft || 0)) && mP.x < (offset.right - parseFloat(cs.paddingRight || 0)) && mP.y > (offset.top + parseFloat(cs.paddingTop || 0)) && mP.y < (offset.bottom - parseFloat(cs.paddingBottom || 0))){
					return true;
				}
				return false; 
			};

			var checkForBetween = function(parentElem,mP,div){
				var childrens = parentElem.children;
				var templateTags = 0;
				var childElem = [];
				for(var i = 0;i<childrens.length;i++){
					if(childrens[i].tagName != "TEMPLATE" && childrens[i].id != "dummy"){
						childElem.push(childrens[i]);
					}
					else{
						templateTags++;
					}
				}
				if(templateTags == childrens.length){
					return true;
				}
				else if(div.getBoundingClientRect().top > (childElem[childElem.length - 1].getBoundingClientRect().bottom/* + (isRelativeY ? scrollDiv.scrollTop : 0)*/)){
					return true;
				}
				return false;
			};


			var findPreviousElem = function(elem){
				while(elem.previousElementSibling){
					elem = elem.previousElementSibling;
					if(elem.tagName != "TEMPLATE" && $L(elem).hasClass('sortable-element')){
						return elem;
					}
				}
				return null;
			};

			var findNextElem = function(elem){
				while(elem.nextElementSibling){
					elem = elem.nextElementSibling;
					if(elem.tagName != "TEMPLATE" && $L(elem).hasClass('sortable-element')){
						return elem;
					}
				}
				return null;
			};

			var removeStyle = function(elem){
				elem.style.left = "";
				elem.style.top = "";
				elem.style.zIndex = "";
				elem.style.position = "";
				$L(elem).addClass("sortable-element "+elem._sortableData.sortableElemClass);
				elem.classList.remove('draggable-handle-element','draggable-element');
			};

			var findScrollDiv = function(elem){
				var parent = elem.parentElement;
				while(elem.parentElement){
					elem = elem.parentElement;
					if(parent.scrollHeight > elem.clientHeight && !(elem.style.overflow && elem.style.overflow == 'hidden')){
						return elem;
					}
				}
				return null;
			};

			var checkPlaceholderBelow = function(elem){
				while(elem){
					if(elem.id && elem.id === "lyteDraggableDummy"){
						return true;
					}
					elem = elem.parentElement;
				}
				return false;
			};

			return this;

		}
	}

})( window );