//Initializing maindiv that contains the container class of bootstrap
let maindiv=document.createElement('div');
maindiv.classList.add('container', 'bg-secondary');

//Initializing the row tag that contains all the cards
let divrow=document.createElement('div');
divrow.classList.add('row','mt-3');

//Function to handle weather click and display weather in alert
let getWeatherByLatLong=function(){
	let latlong=this.id;						//Get latitude and longitude from id
	let lat=latlong.split(',')[0];
	let long=latlong.split(',')[1];
	fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=b93631f38258a10cafa37d57fc3b3932')    //call the weather API by fetch promise
	.then((response)=>{return response.text();})
	.then((data)=>alert(data))
	.catch((err)=>alert(err));
}

//Initialize the Rest Countries API to get countries details
fetch('https://restcountries.eu/rest/v2/all')
.then((response)=>{return response.json()})
.then((data)=>{									//on success build up HTML elements from returned data
	data.forEach(function(x){
		let columndiv=document.createElement('div');								//column element for specific card
		columndiv.classList.add('col-12', 'col-lg-4', 'col-sm-12');
		let carddiv=document.createElement('div');
		carddiv.classList.add('card', 'text-center', 'cardGradient', 'text-white', 'm-3');		//card element to be placed inside column element
		let h4=document.createElement('h4');
		h4.classList.add('card-header', 'p-2', 'bg-black');
		h4.innerText=x.name;
		carddiv.appendChild(h4);
		let cardbody=document.createElement('div');
		cardbody.classList.add('card-body', 'p-2');
		let img=document.createElement('img');
		img.classList.add('card-img-top','img-fluid');
		img.src=x.flag;
		img.alt='loading flag image...';
		cardbody.appendChild(img);
		let pCapital=document.createElement('p');
		pCapital.classList.add('card-text', 'h5', 'mt-4');
		pCapital.innerText='Capital : '+x.capital;
		cardbody.appendChild(pCapital);
		let pLatLong=document.createElement('p');
		pLatLong.classList.add('card-text', 'h5');
		if(x.latlng[0]>0)
		pLatLong.innerText='LatLong : '+x.latlng[0]+'°N, ';
		else
		pLatLong.innerText='LatLong : '+Math.abs(x.latlng[0])+'°S, ';
		if(x.latlng[1]>0)
		pLatLong.innerText+=x.latlng[1]+'°E';
		else
		pLatLong.innerText+=Math.abs(x.latlng[1])+'°W';
		cardbody.appendChild(pLatLong);
		let pRegion=document.createElement('p');
		pRegion.classList.add('card-text', 'h5');
		pRegion.innerText='Region : '+x.region;
		cardbody.appendChild(pRegion);
		let pCountryCode=document.createElement('div');
		pCountryCode.classList.add('card-text', 'h5');
		pCountryCode.innerText='Country Code : '+x.alpha3Code;
		cardbody.appendChild(pCountryCode);
		carddiv.appendChild(cardbody);
		let getWeather=document.createElement('button');
		getWeather.setAttribute('id',x.latlng);
		getWeather.onclick=getWeatherByLatLong;
		getWeather.classList.add('btn', 'btn-primary', 'col-6', 'offset-3', 'bg-transparent', 'border-white', 'mb-4');
		getWeather.innerText='Click for Weather';
		carddiv.appendChild(getWeather);
		columndiv.appendChild(carddiv);
		divrow.appendChild(columndiv);
	});
})
.catch((err)=>alert(err));

//append the row tag to maindiv now
maindiv.appendChild(divrow);

//append the main div to document's body
document.body.appendChild(divrow);