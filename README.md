# Selous
A library used to reference nodejs application modules by name rather than by path

```
app
- plugins
- - myplugin.js
- api
- - mymodule
- - - controller.js
```

plugins/myplugin.js
```
var selous = require('selous');

function MyPlugin() {
	
	this.doSomething = function() {
		console.log('Hello World');
	}

}

module.exports = selous.plugin('MyPlugin', MyPlugin);
```
api/mymodule/controller.js
```
var selous = require('selous');
var MyPlugin = selous.plugin('MyPlugin');

function MyController() {
	
	this.doSomethingComplex = function() {

		MyPlugin.doSomething();

	}

}
module.exports = selous.controller('MyController', MyController);
```
