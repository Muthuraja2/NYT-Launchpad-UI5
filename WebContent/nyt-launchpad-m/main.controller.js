sap.ui.controller("nyt-launchpad-m.main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf nyt-launchpad-m.main
*/
	onInit: function() {
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf nyt-launchpad-m.main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf nyt-launchpad-m.main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf nyt-launchpad-m.main
*/
//	onExit: function() {
//
//	}

	onPressArticleSearch: function(){
		//sap.ui.localResources("nyt-launchpad-m");
		//jQuery.sap.registerModulePath("other", "");
		//var view_other = sap.ui.view({id:"other", viewName:"nyt-launchpad-m.other_page", type:sap.ui.core.mvc.ViewType.JS});

		// var app = sap.ui.getCore().byId("launchpad");
		// app.addPage(view_other).fireNavigate({
		// 	to: view_other,
		// });
	

	}

});