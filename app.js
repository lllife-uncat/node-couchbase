
function callback(error, result) {
	if(error) {
		console.log("\n-- Error --");
		console.log(error);
	}

	console.log("\n-- Result --")
	console.log(result);
}


var models = require("./lib/models");

var u = new models.User();
u.name = "xxx";
u.xx = "xx"; 	// juck
u.yyy = "yy";	// junk
u.save(callback);

var x = new models.Product();
x.yyy = "hello";	// juck
x.brand = "Nike";
x.save(callback);
