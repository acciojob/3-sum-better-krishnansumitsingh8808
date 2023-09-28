function threeSum(arr, target) {
let sum=NEGATIVE_INFINITY;
	for(let i in arr){
		sum+=arr[i];
	}
	if(sum==target||sum==target-1||sum==target+1||sum==target+2||sum==target-2){
		return sum;
	}
  
}

module.exports = threeSum;
