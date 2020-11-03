var object = {name: "ISRO", age: 35, role: "Scientist",hobbies: {
	'tennis': 'pro',
	'cricket': 'noobie'
}
};
function convertListToObject(obj) {
 let final=[];
 for(i in obj)
 {
	 if(typeof(obj[i])=='object')
	 {
		 let f=[];
		 f.push(i);
		 let f1=convertListToObject(obj[i]);
		 f.push([...f1]);
		 final.push(f);
	 }
	 else
	 {
		 let f=[];
		 f.push(i);
		 f.push(obj[i]);
		 final.push(f);
	 }
 }
 return final;
}
console.log(convertListToObject(object));