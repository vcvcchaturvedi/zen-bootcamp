let arr1=["Hello","my","NAME","is","viNaY"]
let printtc=function(arr){
	
	let arr2=arr.reduce(function(last,x){
			x=x.toLowerCase();
			let arrTemp=x.split('');
			arrTemp[0]=arrTemp[0].toUpperCase();
			x=arrTemp.join('');
			last.push(x);
			return last;
		
	},[]);
	console.log(arr2);
};
printtc(arr1);

(function(){
	
	let arr2=arr1.reduce(function(last,x){
			x=x.toLowerCase();
			let arrTemp=x.split('');
			arrTemp[0]=arrTemp[0].toUpperCase();
			x=arrTemp.join('');
			last.push(x);
			return last;
		
	},[]);
	console.log(arr2);
})();