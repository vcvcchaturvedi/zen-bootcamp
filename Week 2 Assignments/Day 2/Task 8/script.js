let a1=[1,2,3,4,9,11,14,15,18];
let k=5;
let rotateKTimes=function(arr){
	for(let i=1;i<=k;i++)
	{
		let x=arr.pop();
		arr.unshift(x);
	}
	return arr;
}

console.log(rotateKTimes([...a1]));

console.log(
function(){
	for(let i=1;i<=k;i++)
	{
		let x=a1.pop();
		a1.unshift(x);
	}
	return a1;
}());