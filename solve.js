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

module.exports = solve;