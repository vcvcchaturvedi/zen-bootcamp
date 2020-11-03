var arr1 = ["GUVI", "I", "am", "a geek"];
function transformFirstAndLast(arr) {
 let newObject={};
 let key=arr[0];
 
 newObject[key]=arr[arr.length-1];
 return newObject;
}
console.log(transformFirstAndLast(arr1));