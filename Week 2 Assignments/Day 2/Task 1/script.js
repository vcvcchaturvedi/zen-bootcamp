let arr1=[1,2,3,4,5,6,7,8,9,10]
let printOdd=function(arr){
	let arr2=arr.filter(x => x%2!=0);
	console.log(arr2.join(' '));
};
printOdd(arr1);
(function(){
	let arr2=arr1.filter(x => x%2!=0);
	console.log(arr2.join(' '));
}());