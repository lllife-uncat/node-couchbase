var Base = require("./base").Base;

function Product(){

	this.name = null;
	this.categoryIds = [];
	this.price = 0;
	this.medieIds = [];
	this.description = null;
	this.brand = null;
	this.color = null;
	this.code = null;

	Base.apply(this, arguments);
	Object.preventExtensions(this); 
}

Product.prototype = Base.prototype;
exports.Product = Product;