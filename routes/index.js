Lyte.Router.registerRoute('index', {
	getResources  : function (paramsObject ){ 
		/* View related files should be returned as resources(HTML, CSS, components etc). It will be available before 'renderTemplate' hook. */
		return ['ui_components/components/lyte-input.js'];
	},
	renderTemplate : function() {
		return {
			outlet : '#outletLyte', component : 'image-slider'
		}
	}
})