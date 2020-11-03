var obj = {name : 'RajiniKanth', age : 33, hasPets : false};
function printAllValues(obj) {
 let final=[];
 for(let i in obj)
 {
	 let temp=obj[i];
	 final.push(temp);
 }
 return final;
}
console.log(printAllValues(obj));