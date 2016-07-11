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

	this.require =  handleRequest.bind(this, modules);

}

module.exports = Selous;
