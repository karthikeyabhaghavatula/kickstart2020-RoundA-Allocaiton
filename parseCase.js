
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

module.exports = parseCase;