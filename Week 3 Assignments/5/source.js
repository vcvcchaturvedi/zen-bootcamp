let request=new XMLHttpRequest();                                   //Creates a new XML HTTP Request for the browser to fetch data from

request.open('GET','https://restcountries.eu/rest/v2/all',true);	//Opens the request by passing the URL of API and open mode as GET 
																	//and in asynchronous mode

request.send();														//Sends the request to the URL resource to fetch data	

request.onload=function(){											//Assigns the function to execute to the request when the data 
																	//is fetched

	var data=JSON.parse(this.response);								//Store the JSON based parsed data of the string response from 
																	//the API
//Apply the filter function to get list of Asian countries and
//combining it with reduce function along with initial sum value 
//of 0 to get total population of Asian countries
	let sumPopulationAsian = data.filter(item => item.region=='Asia').reduce((s,x) =>s+=x.population,0);   
																			
	console.log('Total population of Asian countries is = '+sumPopulationAsian);  //log the output of total population of Asian countries 
																				//to the output
};