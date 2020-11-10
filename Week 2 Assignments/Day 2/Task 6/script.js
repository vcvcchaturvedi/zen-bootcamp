let a1=[1,2,4,9,11,14,15];
let a2=[3,5,6,7,8,10,12,13];

let findMedian=function(arr1,arr2){
	arr=arr1.concat(arr2);
	arr.sort(function(a,b){return a-b;});
	return arr[Math.floor(arr.length/2)];
}
console.log(findMedian(a1,a2));

console.log((function(){
	arr=a1.concat(a2);
	arr.sort(function(a,b){return a-b;});
	return arr[Math.floor(arr.length/2)];
}()));