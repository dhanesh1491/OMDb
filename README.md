Open Movie Database Api Wrapper
===============================

A simple js wrapper for the omdb api (The Open Movie Database)

## Install 

```
npm install omdbapiwrapper
```

## Example

### Promise
```js
var omdb = require('omdbapi');
omdb.search('pulp fiction')
	.then(function(result){
		console.log(results);
	})
```

### callbacks
```js
var omdb = require('omdbapi');
omdb.search('pulp fiction', function(results) {
	console.log(results);
})
```
