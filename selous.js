'use strict';

function Selous() {

	var modules = {};
	var controllers = {};
	var plugins = {};
	
	var handleRequest = function(collection, moduleName, module) {

		if ('string' === typeof moduleName) {

			var moduleExists = collection[moduleName];
			if (moduleExists) {
				return moduleExists;
			} else if (module) {
				collection[moduleName] = module;
				return module;
			} else {
				throw new Error(moduleName + ' has not been registered');
			}

		}
		
	};

	this.module = handleRequest.bind(this, modules);
	this.controller = handleRequest.bind(this, controllers);
	this.plugin =  handleRequest.bind(this, plugins);

}

module.exports = Selous;
