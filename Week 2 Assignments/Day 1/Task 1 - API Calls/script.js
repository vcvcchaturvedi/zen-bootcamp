let request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
	var data=JSON.parse(this.response);
	//Showing weather data for 1st country...
	console.log(data);
	
	//Calling API by country name
	let cc1=[data[0].name,data[0].alpha2Code,data[0].latlng];
	let req1cn = new XMLHttpRequest();
	req1cn.open('GET','https://api.openweathermap.org/data/2.5/weather?q='+cc1[0]+'&appid=b93631f38258a10cafa37d57fc3b3932',true);
	req1cn.send();
	req1cn.onload=function(){
	let data1cn=JSON.parse(this.response);
	console.log(data1cn);
	};
	
	//Calling API by Country ID
	let req1cid = new XMLHttpRequest();
	req1cid.open('GET','https://api.openweathermap.org/data/2.5/weather?id=1138958&appid=b93631f38258a10cafa37d57fc3b3932',true); //hard coded city id of Kabul as it is not available with rest countries api, ref: http://bulk.openweathermap.org/sample/city.list.json.gz
	req1cid.send();
	req1cid.onload=function(){
	let data1cn=JSON.parse(this.response);
	console.log(data1cn);
	};
	
	//Calling API by latitude and longitude
	let req1cll= new XMLHttpRequest();
	req1cll.open('GET','https://api.openweathermap.org/data/2.5/weather?lat='+cc1[2][0]+'&lon='+cc1[2][1]+'&appid=b93631f38258a10cafa37d57fc3b3932',true);
	req1cll.send();
	req1cll.onload=function(){
	let data1cn=JSON.parse(this.response);
	console.log(data1cn);
	};

};