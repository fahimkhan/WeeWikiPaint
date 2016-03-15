desc("Example!!!!!");
task("example",["dependency"],function(){
	console.log("Example Task!!!");
});

task("dependency",function(){
	console.log("dependency");
});