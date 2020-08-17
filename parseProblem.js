parseCase = require('./parseCase');

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

module.exports = parseProblem;