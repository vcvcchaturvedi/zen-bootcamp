var arr1 = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function fromListToObject(arr) {
 var newObject = {};
 for(let i=0;i<arr.length;i++)
 {
	 newObject[arr[i][0]]=arr[i][1];
 }
 return newObject;
}
console.log(fromListToObject(arr1));