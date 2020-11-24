let request=null;
try{              //enclose all API calling related code in try catch error handling block

                                  //Creates a new XML HTTP Request for the browser to fetch data from
request=new XMLHttpRequest(); 
request.open('GET','https://restcountries.eu/rest/v2/all',true);	//Opens the request by passing the URL of API and open mode as GET 
																	//and in asynchronous mode

request.send();														//Sends the request to the URL resource to fetch data	
}
catch(err)			//catch any API querying error
{
	alert("An Exception has happened in fetching the API with error message: "+err.message);   //display the error message to the userAgent
}
request.onload=function(){											//Assigns the function to execute to the request when the data 
																	//is fetched

	var data=JSON.parse(this.response);								//Store the JSON based parsed data of the string response from 
																	 //the API
																	 
//Apply the filter function to get list of countries using USD as currency and use the map function to get name of the countries alone
	let countriesUsingUSD = data.filter(item => item.currencies[0].code=='USD').map(x=> x.name);   
																			
	console.log('Countries using USD as currency are - ' + countriesUsingUSD.join(';'));  //log the output of USD using countries list
};