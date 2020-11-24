let request=new XMLHttpRequest();                                   //Creates a new XML HTTP Request for the browser to fetch data from

request.open('GET','https://restcountries.eu/rest/v2/all',true);	//Opens the request by passing the URL of API and open mode as GET 
																	//and in asynchronous mode

request.send();														//Sends the request to the URL resource to fetch data	

request.onload=function(){											//Assigns the function to execute to the request when the data 
																	//is fetched

	var data=JSON.parse(this.response);								//Store the JSON based parsed data of the string response from 
																	//the API

	let sumPopulation = data.reduce((s,x) =>s+=x.population,0);   //Apply the reduce function along with initial sum value of 0 to 
																			//get total population of all countries
																			
	console.log('Total population of all countries is = '+sumPopulation);		//log the output of total population of all countries to the output
};