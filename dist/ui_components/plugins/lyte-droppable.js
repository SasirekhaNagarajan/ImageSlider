/*
	Optimized by reading the values first and then writting
	Date - 28/08/2018
  	1. Added method to destroy droppable.
*/

;(function( window ) {

	if(lyteDomObj){	

		//This object synchronizes the draggable elements with the droppable elements
		//It contains the current object which is being dragged in the _current attribute
		//It also contains all the droppables available in the page inside the _droppables array attribute
		managerDD = {
			init : false,
			_current : null,
			_droppables : [],
			_checkAcceptable : function(draggable,acceptables){
				if(typeof acceptables !== "string"){
					if(acceptables.length === 0){
						return true;
					}
					else{
						for(var i = 0 ; i < acceptables.length ;i++){
							if(draggable.matches(acceptables[i])){
								return true;
							}
						}
					}
				}
				return false;
			},

			_isOverAxis : function( x, reference, size ) {
				return ( x >= reference ) && ( x < ( reference + size ) );
			},
			_checkIntersects : function(event,draggable,droppable,toleranceMode){
			
				var draggableOffset = draggable.getBoundingClientRect(),
					droppableOffset = droppable.getBoundingClientRect(),
					x1 = draggableOffset.left,
					y1 = draggableOffset.top,
					x2 = x1 + draggableOffset.width,
					y2 = y1 + draggableOffset.height,
					l = droppableOffset.left,
					t = droppableOffset.top,
					r = l + droppableOffset.width,
					b = t + droppableOffset.height;

				//If draggable and droppable elements are not from same window -
				//Calculate from their dimensions w.r.t top level window.
				if(draggable.ownerDocument.defaultView != droppable.ownerDocument.defaultView){
					//For draggable
					var currentWin = draggable.ownerDocument.defaultView || draggable.ownerDocument.parentWindow;
					while(currentWin && currentWin.frameElement){
						var frameElementOffset = currentWin.frameElement.getBoundingClientRect();
						x1 = x1 + frameElementOffset.left;
						x2 = x2 + frameElementOffset.left;
						y1 = y1 + frameElementOffset.top;
						y2 = y2 + frameElementOffset.top;
						currentWin = currentWin.parent;
					}
					//For droppable
					currentWin = droppable.ownerDocument.defaultView || droppable.ownerDocument.parentWindow;
					while(currentWin && currentWin.frameElement){
						var frameElementOffset = currentWin.frameElement.getBoundingClientRect();
						l = l + frameElementOffset.left;
						r = r + frameElementOffset.left;
						t = t + frameElementOffset.top;
						b = b + frameElementOffset.top;
						currentWin = currentWin.parent;
					}
				}

				switch ( toleranceMode ) {
				case "fit":
					return ( l <= x1 && x2 <= r && t <= y1 && y2 <= b );
				case "intersect":
					return ( l < x1 + ( draggableOffset.width / 2 ) && // Right Half
						x2 - ( draggableOffset.width / 2 ) < r && // Left Half
						t < y1 + ( draggableOffset.height / 2 ) && // Bottom Half
						y2 - ( draggableOffset.height / 2 ) < b ); // Top Half
				case "pointer":
					if(event.type == "mousemove"){
						return managerDD._isOverAxis( event.clientY, t, droppableOffset.height ) &&
						managerDD._isOverAxis( event.clientX, l, droppableOffset.width );
					}
					if(event.type == "touchmove"){
						return managerDD._isOverAxis( event.touches[0].clientY, t, droppableOffset.height ) &&
						managerDD._isOverAxis( event.touches[0].clientX, l, droppableOffset.width );
					}
				case "touch":
					return (
						( y1 >= t && y1 <= b ) || // Top edge touching
						( y2 >= t && y2 <= b ) || // Bottom edge touching
						( y1 < t && y2 > b ) // Surrounded vertically
					) && (
						( x1 >= l && x1 <= r ) || // Left edge touching
						( x2 >= l && x2 <= r ) || // Right edge touching
						( x1 < l && x2 > r ) // Surrounded horizontally
					);
				default:
					return false;
				}
			},
			_drag : function(event){
				
				var droppables = this._droppables;
				var draggable = this._current;
				for(var i=0; i< droppables.length ; i++){
					
					var data = droppables[i]._droppableData;

					//Checks if the droppable is disabled or not
					//Also checks whether the draggable can be accepted by the droppable
					//And the draggable and droppable are not same element
					if(!data.disabled && !(draggable.isEqualNode(droppables[i])) && managerDD._checkAcceptable(draggable,data.accept)){

						//Checks if the draggable intersects the droppable
						if(managerDD._checkIntersects(event,draggable,droppables[i],data.tolerance)){
							if(!data.entered && data.onEnter){
								data.onEnter(draggable,droppables[i]);
							}
							if(data.onDrag){
								data.onDrag(draggable,droppables[i]);
							}
							if(data.hoverClass && !$L(droppables[i]).hasClass(data.hoverClass)){
								if(data.activeClass && $L(droppables[i]).hasClass(data.activeClass)){
									$L(droppables[i]).removeClass(data.activeClass);
								}
								$L(droppables[i]).addClass(data.hoverClass)
							}
							if(!data.entered){
								data.entered = true;
							}
						}
						else{
							if(data.entered && data.onLeave){
								data.onLeave(draggable,droppables[i]);
							}
							if(data.hoverClass && $L(droppables[i]).hasClass(data.hoverClass)){
								$L(droppables[i]).removeClass(data.hoverClass);
							}
							if(data.activeClass && !$L(droppables[i]).hasClass(data.activeClass)){
								$L(droppables[i]).addClass(data.activeClass);
							}
							if(data.entered){
								data.entered = false;
							}
						}
					}
				}
			},
			_drop : function(event){
				var droppables = this._droppables;
				var draggable = this._current;
				for(var i=0; i< droppables.length ; i++){
					if(!(draggable.isEqualNode(droppables[i]))){
						var data = droppables[i]._droppableData;
						if(data.activeClass && $L(droppables[i]).hasClass(data.activeClass)){
							$L(droppables[i]).removeClass(data.activeClass);
						}
						if(data.hoverClass && $L(droppables[i]).hasClass(data.hoverClass)){
							$L(droppables[i]).removeClass(data.hoverClass);
						}
						if(!data.disabled && managerDD._checkAcceptable(draggable,data.accept)){
							if(managerDD._checkIntersects(event,draggable,droppables[i],data.tolerance)){
								if(data.onDrop){
									data.onDrop(draggable,droppables[i]);
								}
								break;
							}
						}
					}
				}
			},
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
				if(!(element.classList.contains('droppable-element'))){
					console.info("ALERT! - U have already destroyed its droppable behaviour.");
					return;
				}
				if(managerDD._droppables.indexOf(element) !== -1){
					managerDD._droppables.splice(managerDD._droppables.indexOf(element),1);
				}
				if (element._droppableData) {
					element._droppableData = null;
				}
				element.classList.remove('droppable-element');
			},

			sortDroppables : function(){
				var droppables = this._droppables,
				lastItem = droppables[droppables.length - 1],
				lastItemOffset = lastItem.getBoundingClientRect();
				for(var i = 0; i < droppables.length - 1; i++){
					var elemOffset = droppables[i].getBoundingClientRect();
					if(lastItemOffset.height < elemOffset.height && lastItemOffset.width < elemOffset.width){
						droppables.splice(droppables.indexOf(lastItem),1);
						droppables.splice(i,0,lastItem);
						return;
					}
				}
			}
		},


		//It initializes the droppable funcionality and stores it in the managerDD._droppables array 
		lyteDomObj.prototype.droppable = function(object) {

			if(!managerDD.init){
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
				managerDD.init = true;
			}

			if(!managerDD.init){
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
				managerDD.init = true;
			}

			if(typeof object === "string" && object === "destroy"){
				if(this.length > 1){
					var elemArray = this;
					for(var i=0; i<elemArray.length; i++){
						managerDD.destroy(elemArray[i]);
					}
				}
				else{
					managerDD.destroy(this[0]);
				}
				return;
			}

			var data = object ? object : {};

			if(this.length > 1){
				var elemArray = this;
				for(var i = 0; i<elemArray.length; i++){
					$L(elemArray[i]).droppable(Object.assign({},data));
				}
				return;
			}

			if(data.restrict && managerDD.isRestricted(data.restrict, this[0])){
				return;
			}

			//Parent Element
			data._element = droppableEle = this[0];
			$L(data._element).addClass('droppable-element');
			data.entered = false;
			data.activeClass = data.activeClass ? data.activeClass : false; 
			data.accept = data.accept ? data.accept : [];
			data.disabled = (data.disabled === true) ? data.disabled : false;
			data.hoverClass = data.hoverClass ? data.hoverClass : false;
			data.tolerance = (data.tolerance === "fit" || data.tolerance === "intersect" || data.tolerance === "pointer" || data.tolerance === "touch") ? data.tolerance : "intersect";
			data.registerToParent = data.registerToParent;
			droppableEle._droppableData = data;

			if(managerDD._droppables.indexOf(droppableEle) == -1){
				// managerDD._droppables.splice(managerDD._droppables.indexOf(droppableEle),1);
				managerDD._droppables.push(droppableEle);
				if(managerDD._droppables.length > 1 && data.sortDroppables){
					managerDD.sortDroppables();
				}
			}
			

			//Incase of nested iframes if user wants the droppables to be available to the parent window context
			if(data.registerToParent){
				var currentWin = window;
				while(currentWin.parent){
					currentWin = currentWin.parent;
					currentWin.managerDD._droppables.push(droppableEle);
					if(currentWin.managerDD._droppables.length > 1 && droppableEle._droppableData.sortDroppables){
						currentWin.managerDD.sortDroppables();
					}
					if(currentWin.parent == currentWin.top){
						break;
					}
				}
			}

			//Incase the user wants all the droppables fro its parent
			if(data.registerFromParent){
				var currentWin = window;
				var parentWindow = window;
				while(parentWindow.parent){
					parentWindow = parentWindow.parent;
					var droppables = parentWindow.managerDD._droppables;
					for(var i = 0; i<droppables.length ; i++){
						if(currentWin.managerDD._droppables.indexOf(droppables[i]) == -1){
							currentWin.managerDD._droppables.push(droppables[i]);
							if(currentWin.managerDD._droppables.length > 1 && droppableEle._droppableData.sortDroppables){
								currentWin.managerDD.sortDroppables();
							}
						}
					}
					if(parentWindow.parent == parentWindow.top){
						break;
					}
				}
			} 

			droppableEle = null;
			if(data.onReady){
				data.onReady(this[0]);
			}

			return this;
		}

	}

})( window );