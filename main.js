define(function (require, exports, module) {
	"use strict";
	var Menus               = brackets.getModule("command/Menus"),
			CommandManager      = brackets.getModule("command/CommandManager"),
			EditorManager       = brackets.getModule("editor/EditorManager");
	/*
  *	Adds a menuitem, gives it an id, triggers a function when menuitem is pressed.
  */
	CommandManager.register("Generate HTML-Skeleton", "gustav-malm.brackets-template-generator.generateHTML", getHTMLTemplate);
	/*
  * Creates a custom menu.
  */
	var menu = Menus.addMenu("Templates", "gustav-malm.brackets.menu");
	menu.addMenuItem("gustav-malm.brackets-template-generator.generateHTML", "Ctrl-Alt-Shift-H");
	/*
	*	A function which uses "require" to load a HTML-Template.
	*/
	function getHTMLTemplate() {
		var template = require('text!assets/templates/template.html');
		EditorManager.getCurrentFullEditor()._codeMirror.setValue(template);
	}
});