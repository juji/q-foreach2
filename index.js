var Q = require('q');
module.exports = exports = function(q){
	q.forEach = function(arr,func){
		var p = Q(0);
		var ret = [];
		for(var i in arr) 
			p = func(arr[i],i)
			.then(function(r){ret.push({err:null,result:r});})
			.fail(function(e){ret.push({err:e,result:null});});
		return p.then(function(){ return ret; });
	};
	
	q.foreach = q.forEach;
};
