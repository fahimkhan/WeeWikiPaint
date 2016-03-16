
desc("Default Task")
task("default",[],function(){
	console.log("Default Task!!!");
});

desc("Example!!!!!");
task("example",["dependency"],function(){
	console.log("Example Task!!!");
});

desc("Dpendency")
task("dependency",function(){
	console.log("dependency");
});