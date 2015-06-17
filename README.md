#Q-foreach2

Adds `forEach` functionality to Kriskowal's  `q`

Only works for array

```javascript
var Q = require('q');
require('q-foreach2')(Q);

var arr = [1,2,3,4,5];
Q.forEach(arr,function(val,index){
	return Q.timeout(500)
	.then(function(){
		console.log('Index: '+index);
		console.log('Value: '+val);
		return ++val;
	});
}).then(function(results){
	console.log(results);
	/*
	[
		{err:null, result:2},
		{err:null, result:3},
		{err:null, result:4},
		{err:null, result:5},
		{err:null, result:6}
	]
	*/
});
```

And for those lazy coders:
```
Q.foreach = Q.forEach;
```