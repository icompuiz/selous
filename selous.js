'use strict';

function Selous() {

	var modules = {};
	
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

	/* Deprecated */
	this.module = handleRequest.bind(this, modules);
	/* Deprecated */
	this.model = handleRequest.bind(this, modules);
	/* Deprecated */
	this.controller = handleRequest.bind(this, modules);
	/* Deprecated */
	this.plugin =  handleRequest.bind(this, modules);

	this.require =  handleRequest.bind(this, modules);

}

module.exports = Selous;
