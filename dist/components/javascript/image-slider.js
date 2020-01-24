Lyte.Component.register("image-slider",{
_template:"<template tag-name=\"image-slider\"> <div class=\"mainContent\"> <input id=\"sliderSwitch\" class=\"sliderCheck\" type=\"checkbox\" name=\"sliderSwitch\" onchange=\"{{action('autoplay')}}\" hidden=\"\"> <div class=\"slider\"> <div id=\"sliderList\" class=\"sliderList\"> <template is=\"for\" items=\"{{images}}\" item=\"item\" index=\"index\"> <div class=\"sliderSlide\"> <img src=\"{{item}}\" alt=\"img\"> </div> </template> </div> </div> <div class=\"sliderControl\"><label for=\"sliderSwitch\"></label></div> <div class=\"leftDiv {{if(leftDivFlag,'','none')}}\" onclick=\"{{action('leftClick')}}\"> <div id=\"arrowleft\" onclick=\"{{action('leftClick')}}\" class=\"arrow\">❮</div> </div> <div class=\"rightDiv {{if(rightDivFlag,'','none')}}\" onclick=\"{{action('rightClick')}}\"> <div id=\"arrowright\" onclick=\"{{action('rightClick')}}\" class=\"arrow\">❯</div> </div> </div> </template>\n<style>html{\n  font-size: 16px;\n}\n\n#title {\n  text-align: center;\n}\n\n.slider {\n  position: relative;\n  margin-top: 2.2rem;\n  overflow-x: hidden;\n  height: 40rem;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);\n}\n\n.sliderList { \n  position: absolute;\n  display: flex;\n  height: 40rem;\n  transition-duration: 1s;\n}\n\n.sliderSlide {\n  justify-content: space-around;\n  height: 40rem;\n  width: 35rem;\n} \n\nimg {\n  height: 40rem;\n  width: 35rem;\n}\n\n/**\n* Left Div\n*/\n.leftDiv {\n  position: absolute;\n  top: 6rem;\n  height: 40rem;\n  width: 2.5rem;\n  display: block;\n}\n\n/**\n* Right Div\n*/\n.rightDiv {\n  position: absolute;\n  top: 6rem;\n  height: 40rem;\n  width: 2.5rem;\n  right: 0;\n  margin-right: 7px;\n  display: block;\n}\n\n.none {\n  display: none;\n}\n\n.leftDiv:hover, .rightDiv:hover {\n  opacity: 0.7;\n  cursor: pointer;\n  background-color: rgba(128, 128, 128, 0.705);\n}\n\n/**\n* Arrow Left and Right\n*/\n.arrow {\n  cursor: pointer;\n  position: absolute;\n  font-size: 2rem;\n  top: 22.5rem;\n  margin-top: -65px;\n  color: white;\n}\n\n#arrowleft {\n  left: 0;\n  margin-left: 17px;\n}\n\n#arrowright {\n  right: 0;\n  margin-right: 17px;\n}\n\n/**\n* Autoplay \n*/\n@keyframes autoplay {  \n    0% {\n      left: 0;\n    }\n    10% {\n    left: -35rem;\n    }\n    20% {\n    left: -70rem;\n    }\n    30% {\n    left: -105rem;\n    }\n    40% {\n      left: -140rem;\n    }\n    50% {\n      left: -175rem;\n    }\n    60% {\n      left: -210rem;\n    }\n    70% {\n      left: -245rem;\n    }\n}\n\n/**\n* Slider control\n*/\n\n.sliderControl {\n  margin-right: auto;\n  margin-left: auto;\n  width: 4.5rem;\n  font-family: sans-serif;\n}\n\n.sliderControl label {\n  position: relative;\n  display: block;\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n  width: 4.5rem;\n  height: 2rem;\n  line-height: 1.5;\n  background: #ddd;\n  border-radius: 2rem;\n  cursor: pointer;\n  /* transition: left 0.15s ease-out; */\n}\n\n.sliderControl label:before {\n  content: \"Autoplay\";\n  position: absolute;\n  top: 2.5rem;\n  color: #333;\n  font-size: .95rem;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.sliderControl label:after {\n  content: \"\";\n  position: absolute;\n  top: .25rem;\n  left: .25rem;\n  display: block;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 2rem;\n  background: #fff;\n}\n\n.sliderCheck:checked + .slider > .sliderList {\n  animation-name: autoplay;\n  animation-duration: 20s;\n  animation-iteration-count: infinite;\n}\n\n.sliderCheck:checked + .slider + .sliderControl > label { \n  background: #455a64; \n}\n\n.sliderCheck:checked + .slider + .sliderControl > label:after {\n   left: 2.75rem; \n}</style>",
_dynamicNodes: [{"type":"attr","position":[1,1]},{"type":"attr","position":[1,3,1,1]},{"type":"for","position":[1,3,1,1],"dynamicNodes":[{"type":"attr","position":[1,1]}]},{"type":"attr","position":[1,7]},{"type":"attr","position":[1,7,1]},{"type":"attr","position":[1,9]},{"type":"attr","position":[1,9,1]}],
_observedAttributes :["position","imageCount","leftDivFlag","rightDivFlag","images"],
	data : function() {
		return {
			position : Lyte.attr("number", {"default": 0}),
			imageCount : Lyte.attr("number",{"default": 0}),
			leftDivFlag : Lyte.attr("boolean",{"default": false}),
			rightDivFlag : Lyte.attr("boolean",{"default": false}),
			images : Lyte.attr("array")
		}
	},

	init : function() {
		this.loadJSON();
		this.setData('rightDivFlag',true);
	},

	actions  : { 
		/**
		 * function to move slider to left slide ie. to previous image
		 * translateX is for sliding in x-axis
		 */
		leftClick  : function (){ 
			//check to prevent sliding before 1st slide
			if(this.data.position !== 0) {
				this.setData('rightDivFlag',true);
				this.setData('leftDivFlag',true);

				this.data.imageCount--;
				//slide width = 35rem to be added to move to next slide image
				this.data.position += 35;
				//translate is for carousel effect to move right
				let sliderList = this.$node.querySelector(".sliderList");
				sliderList.style.transform = "translateX("+(this.data.position)+"rem)";
			}
			else {
				//to hide left arrow div when there are no images
				this.setData('rightDivFlag',true);
				this.setData('leftDivFlag',false);

			}
		},

		/**
		 * function to move slider right slide ie. to next image
		 * document.body.clientWidth is taken for the logic to stop sliding after last image
		 * 
		 * window.getComputedStyle(sliderList) returns all CSS properties of an element gvn as a parameter 
		 * eg : window.getComputedStyle(sliderList).width - gives width of an element
		 * 
		 * window.screen.width - returns the width of the visitor's screen in pixels
		 * window.screen.availWidth - Returns the amount of horizontal space in pixels available to the window
		 * Note that not all of the width given by this property may be available to the window itself. 
		 * When other widgets occupy space that cannot be used by the window object, there is a difference in window.screen.width and window.screen.availWidth.
		 * 
		 * document.body.clientWidth - returns the visible width of the body
		 */
		rightClick : function(){
			let sliderList = this.$node.querySelector('.sliderList');
			let slider = this.$node.querySelector('.slider').offsetWidth;
			let slide = this.$node.querySelector('.sliderSlide').offsetWidth;
			let slideDisplayCount = Math.round(slider/slide);

			/**
			 * To hide right arrow div when there are no more images on right side
			 */
			if((this.data.imageCount + slideDisplayCount) === 9){
				this.setData('rightDivFlag',false);
			}

			/**
			 * imageCount - number of slides/images moved
			 * slideDisplayCount - number of slides displayed on window
			 */
			if((this.data.imageCount + slideDisplayCount) < 10) {
				this.data.imageCount++;
				this.setData('leftDivFlag',true);

				//slide width = 35rem to be added to move to next slide image
				this.data.position -= 35;
				//translate is for carousel effect to move left 
				sliderList.style.transform = "translateX("+(this.data.position)+"rem)";
			}
		},

		/**
		 * To hide right arrow div if checked else display
		 */
		autoplay : function() {
			let sliderList = this.$node.querySelector('.sliderList');
			sliderList.style.transform = "translateX(25rem)";

			if(this.$node.querySelector('.sliderCheck').checked) {
				this.setData('rightDivFlag',false);
				this.setData('leftDivFlag',false);
			}
			else {
				this.setData('rightDivFlag',true);
			}
		}
	},

	/**
	 * function to load json from json file and set json to variable
	 */
	loadJSON : function() {   
		let xobj = new XMLHttpRequest();
		xobj.overrideMimeType("application/json");
		xobj.open('GET', 'imageMap.json', true); 
		xobj.onreadystatechange =  ()=> {
			  if (xobj.readyState == 4 && xobj.status == "200") {
				let actual_JSON = JSON.parse(xobj.responseText);
				this.setData('images',actual_JSON['image_map']);
			  }
		};
		xobj.send(null);  
	 }
});

