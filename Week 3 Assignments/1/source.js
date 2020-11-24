let request=new XMLHttpRequest();                                   //Creates a new XML HTTP Request for the browser to fetch data from

request.open('GET','https://restcountries.eu/rest/v2/all',true);	//Opens the request by passing the URL of API and open mode as GET 
																	//and in asynchronous mode

request.send();														//Sends the request to the URL resource to fetch data	

request.onload=function(){											//Assigns the function to execute to the request when the data 
																	//is fetched

	var data=JSON.parse(this.response);								//Store the JSON based parsed data of the string response from 
																	//the API

	let asianCountries = data.filter(x =>x.region=='Asia').map(x => x.name);   //Apply the filter function along with condition of 
																			//region of country being Asia to filter out specific items 
																			//and also applying map function to return specific property 
																			//of name alone
																			
	console.log('Asian Countries list  - '+asianCountries.join(';'));		//log the output filtered names of Asian countries to the output
};