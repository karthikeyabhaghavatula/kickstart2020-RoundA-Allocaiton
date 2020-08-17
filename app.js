parseProblem = require('./parseProblem');
solve = require('./solve');

solveCases = (cases) => {
	cases.forEach( (Case,index) => {
		console.log('Case #'+(index+1)+': '+solve(Case));
	})
}

const main = () => {

	readline = require('readline');

	problem = {T:0, cases : [], isProcessing:true};

	const rl = readline.createInterface({
		input : process.stdin,
		output : process.stdout
	})

	rl.on('line', (line) =>{
		parseProblem(line,problem)
		if(!problem.isProcessing){
			rl.close()
		}

	}).on('close',() => {
		solveCases(problem.cases)
		process.exit(0);
	})
}

if(!module.parent){
	main();
}