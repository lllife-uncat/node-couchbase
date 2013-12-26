var Base = require("./base").Base;

function Category(){

	this.name = null;
	this.description = null;
	this.categoryId = null;

	Base.apply(this, arguments);
	Object.preventExtensions(this); 
}

Category.prototype = Base.prototype;
exports.Category = Category;