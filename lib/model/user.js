var Base = require("./base").Base

/////////////////////////////////////////
// User
/////////////////////////////////////////
function User() {
	// extend property from bases.
	Base.apply(this, arguments);	

	// all user's properties
	this.userName = null;
	this.firstName = null;
	this.lastName = null;
	this.password = null;
	this.email = null;

	// not allow extra property
	Object.preventExtensions(this); 
}

User.prototype = Base.prototype;

exports.User = User;
