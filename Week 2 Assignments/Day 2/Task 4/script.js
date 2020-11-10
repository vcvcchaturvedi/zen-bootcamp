let arr1=[1,2,3,4,5,6,7,8,9,10]
let isPrime=function(x){
	if(x==1)
	return false;
	else if(x==2 || x==3)
	return true;
	else
	{
		for(let i=2;i<=x/2;i++)
		if(x%i==0)
		return false;
		return true;
	}
}
let returnPrimes=function(arr){
	let arr2=arr.reduce(function(last,current){
		if(isPrime(current))
		last.push(current);
		return last;		
	},[]);
	return arr2;
};
console.log(returnPrimes(arr1));
(function(){
	let arr2=arr1.reduce(function(last,current){
		if(isPrime(current))
		last.push(current);
		return last;		
	},[]);
	console.log(arr2);
}());

