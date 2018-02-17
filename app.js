// Init storage
const storage = new Storage();

//Get stored location data
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.state);

const ui = new UI();

// Get weather on DOM load
	document.addEventListener('DOMContentLoaded', getWeather)


function getWeather() {
    console.log('pidor')
    weather.getWeather()
        .then(results => {
            console.log(results);
            ui.paint(results);
        })
        .catch(err => console.log(err))
}

// Change location event
    document.getElementById('w-change-btn').addEventListener('click', (e) => {

/*         weather.changeLocation('Zaporizhia', 'Ukraine'); */

        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        
        weather.changeLocation(city, state);

        //set location display weather
        storage.setLocationData(city, state);

        // Get and display weather
        getWeather();

        //Close modal
        $('#locModal').modal('hide')
    });

