let request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
	var data=JSON.parse(this.response);
	for(let i=0;i<data.length;i++)
	console.log(data[i].flag);
};