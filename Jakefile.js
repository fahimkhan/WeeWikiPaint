
task("default",["lint"]);

desc("Lint everything");
task("lint",[],function(){
	console.log("Lint Code goes here");
	var lint = require("./build/lint/lint_runner.js");
	lint.validateFile("Jakefile.js",{},{});
});