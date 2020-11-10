const data = require("./data.js");
const commands = require("./src/commands.js");

// check if arg exist
if(process.argv[2]){
	let command = process.argv[2];
	const regex = /(--filter=)(\w{1,})/;

	// check arg type maybee eval function name with arg if we add more
	if (command === "--count"){
		console.dir(commands.count(data.data), {depth: null, colors: true});
	} else if ((m = regex.exec(command)) !== null && m[2]) {
		console.log(commands.filter(data.data, m[2]));
	} else {
		console.log("Unknown command, use --count or --filter=[string]");
	}
} else {
	console.log("Please enter a command, like: node app.js --filter=ry");
}