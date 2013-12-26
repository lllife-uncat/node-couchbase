var couchbase = require("couchbase");
var db = new couchbase.Connection( { host: "localhost:8091", bucket: "default"});

var Counter = require("./couter").Counter;

///////////////////////////////////////
// Base 
///////////////////////////////////////
function Base() {
	this.id = new Counter().guid();
	this.createdDate = new Date();
	this.modifiedDate = null;

	var type = arguments.callee.caller.name;
	Object.defineProperty( this, "type", {
		value: type,
		writable: false,
		enumerable: true,
		configurable: true
	});

}

Base.prototype.save = function(callback){
	this.modifiedDate = new Date();
	db.set(this.id, this, callback)
}

Base.prototype.get = function(key, callback){
	var rs = db.get(key, callback);
	return rs;
}

Base.prototype.query = function(callback){

}

exports.Base = Base;