var obj = {name : 'RajiniKanth', age : 25, hasPets : true};
function printAllKeys(obj) {
 let final=[];
 for(let i in obj)
 {
	 final.push(i);
 }
 return final;
}
console.log(printAllKeys(obj));