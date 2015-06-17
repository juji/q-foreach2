var Q = require('q');
module.exports = exports = function(q){
	q.forEach = function(arr,func){
		var p = Q(0);
		var ret = [];
		for(var i in arr) 
			p = p.then(function(idx){
				return func(arr,idx)
				.then(function(res){
					ret.push({error:null,result:res});
					return ++idx;
				}).fail(function(e){
					ret.push({error:e,result:null});
					return ++idx;
				});
			});
		return p.then(function(){ return ret; });
	};
	
	q.foreach = q.forEach;
};
