'use-strict';

const apiKey = 'xebyCafH4BZIhfcFMrusFoNAVXeylI5cQhXewZsU';

const baseUrl = 'https://developer.nps.gov/api/v1/parks';

function formatQuery(params) {
	const queryItems = Object.keys(params)
		.map(key => `${key}=${params[key]}`)
		return queryItems.join('&');
}

function getParks() {
	const states = $('#states').val();
	const searchNumber = $('#search-number').val();

	const params = {
		parkCode: "",
		stateCode: `${states}`,
		limit: searchNumber,
		start: 1,
		q: "national park",
		"api_key": apiKey
	};

	const queryString = formatQuery(params);
	const newUrl = baseUrl + '?' + queryString;

	fetch(newUrl)
		.then(response => {
			if(response.ok) {
				return response.json();
			}
			throw new Error(response.statusText);
		})
		.then(responseJson => displayParks(responseJson))
		.catch(err => alert('Something is wrong.'));
}

function displayParks(responseJson) {
	console.log(responseJson)
	$('.results').empty();
	const parks = responseJson.data;
	for(i = 0;i < parks.length; i++) {
		$('.results').append(`
			<div class="park-listed">
				<h2>${parks[i].fullName}</h2>
				<p>${parks[i].description}</p>
				<a href="${parks[i].url}">${parks[i].url}</a>
			</div>
			`)};
}

function watchSubmit() {
	$('form').submit(event => {
	event.preventDefault();
	getParks();
	});
}

function renderPage() {
	console.log('App is ready; waiting for submit!')
	watchSubmit();
}

renderPage();