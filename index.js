var cos = require('./sdk/cos');
var advanced_api = require('./sdk/advanced_api');
var util = require('./sdk/util');
var config = require('./sdk/config');


var mod = {};

function methodsCopy(target, source) {
	for(var method in source) {
		if(!target[method]){
			target[method] = source[method];
		}
	}
}

methodsCopy(mod, cos);
methodsCopy(mod, advanced_api);
methodsCopy(mod, util);
methodsCopy(mod, config);



function COS_v5(params) {
	params = params || {};
	this.Appid = params.Appid;
	this.SecretId = params.SecretId;
	this.SecretKey = params.SecretKey;
}

methodsCopy(COS_v5.prototype, mod);

module.exports = COS_v5;
