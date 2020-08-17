solve = (Case) => {
	
	max = (budget) => {
		//console.log('arr :',arr);
		let ans=0;
		for(i=0;i<=Case.allocation.length;++i){
			if(Case.allocation[i]<=budget){
				budget-=Case.allocation[i];
				ans++;
			}
		}
		return ans;
	}

	Case.allocation.sort((a,b) => a-b);
	return max(Case.B);
}

parseCase = (line,data) => {
	
	let result = data;

	if(!result.N){

		numbers = line.split(' ');
		result.N = numbers[0]
		result.B = numbers[1]
		result.isProcessing = true;
		return result;
	}else{

		if(!result.allocation){ result.allocation = new Array()}
		line.split(' ').map( (n) => result.allocation.push(parseInt(n)));
		result.isProcessing = false;
		return result;
	}

	
}

parseProblem = (line,problem) => {
	
	if(!problem.T || problem.T === 0){
		problem.T = parseInt(line);
		return problem;
	}

	let cases = problem.cases;
	if(cases.length === 0 || !cases[cases.length-1].isProcessing){
		cases.push({isProcessing:true});
	}
	cases.length[cases.length-1] = parseCase(line,cases[cases.length-1]);

	problem.cases = cases;
	if(problem.T===problem.cases.length && !problem.cases[problem.cases.length-1].isProcessing) { 
		problem.isProcessing = false
	};

	return problem;
}

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