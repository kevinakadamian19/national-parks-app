'use-strict';

const apiKey = 'xebyCafH4BZIhfcFMrusFoNAVXeylI5cQhXewZsU';

const baseUrl = 'https://developer.nps.gov/api/v1';

function formatQuery(params) {
	const queryItems = Object.keys(params)
		.map(key => `${key}=${params[key]}`)
		return queryItems.join('&');
}

function getParks() {
	const params = {
		parkCode: ,
		stateCode:'CA' ,
		limit: 50,
		start: 50,
		q: query,
		fields: ,
		sort: ,
	}
	const options = {
		headers: new Headers({
		X-Api-Key: apiKey})
	};

	const queryString = formatQuery(params);
	const newUrl = baseUrl + '?' + queryString;

	console.log(newUrl);
	fetch(newUrl, options)
	.then(response => {
		if(response.ok) {
			return response.json();
		}
		throw new Error(response.statusText);
	})
	.then(responseJson => displayParks(responseJson))
	.catch(error => alert('Something is wrong with pulling from API.'))
}

function displayParks() {
	$('.results').empty();
	const parks = responseJson.responses;
	for(i = 0;i <= parks.length; i++) {
		$('.results').append(`
			<h2>${responseJson[i].FullName}</h2>
			<p>${responseJson[i].description}</p>
			<a href="${responseJson[i].websiteUrl}">${responseJson[i].websiteUrl}</a>

			`)};
	$('.results').removeClass('hidden');
}

function watchSubmit() {
	$('form').submit(event => {
	event.preventDefault();
	
	getParks();
	});
}

watchSubmit();