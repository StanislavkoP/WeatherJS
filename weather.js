class Weather {
	constructor(city, state) {
		this.apiKey = "213a17158dcd7c71";
		this.city = city;
		this.state = state;
	}

	// Fetch weather form API

	async getWeather(){
		const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

		const responseDate = await response.json();

		return responseDate.current_observation;
	}

	// Change weather location

	changeLocation(city, state) {
		this.city = city;
		this.state = state;
	}
}