var Q = require('q');
module.exports = exports = function(q){
	q.forEach = function(arr,func){
		var p = Q(0),
			ret = [],
			idx = [];
		for(var i in arr) idx.push(i);
		for(var i in idx)
			p = p.then(function(ii){ 
					return func(arr[idx[ii]],idx[ii])
					.then(function(r){ ret.push({err:null,result:r}); return ++ii; })
					.fail(function(e){ ret.push({err:e,result:null}); return ++ii; });
				});
		return p.then(function(){ return ret; });
	};
	
	q.foreach = q.forEach;
};
