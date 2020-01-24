Lyte.Component.register("image-slider",{
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

