let request=new XMLHttpRequest();                                   //Creates a new XML HTTP Request for the browser to fetch data from

request.open('GET','https://restcountries.eu/rest/v2/all',true);	//Opens the request by passing the URL of API and open mode as GET 
																	//and in asynchronous mode

request.send();														//Sends the request to the URL resource to fetch data	

request.onload=function(){											//Assigns the function to execute to the request when the data 
																	//is fetched

	var data=JSON.parse(this.response);								//Store the JSON based parsed data of the string response from 
																	//the API
	//Use the forEach array method to recursively print country's name, capital and flag image url
	data.forEach(x => console.log("Country name: "+x.name+"\t"+"Country capital: "+x.capital+"\t"+"Country flag image url: "+x.flag)); 

	
};