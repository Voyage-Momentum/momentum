document.addEventListener( 'DOMContentLoaded', () => {
    // ==== Once HTML is there =====
    utils.getData( 'get', 'http://ron-swanson-quotes.herokuapp.com/v2/quotes' )
         .then( quote => document.getElementById('quote').innerHTML = `"${quote}"` )
         .catch( err => console.log(err) );

    utils.getData( 'get', 'https://ipinfo.io/geo' )
          .then( locationData => {
            const location = locationData.loc.split(',');
            const lat = location[0];
            const lon = location[1];

            utils.getData( 'get', `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=332aac2b0595764b02d7634b86a9b463` )
                  .then( weatherData => {
                    const temp = `${Math.round(weatherData.main.temp)}&deg;`;
                    const city = weatherData.name;
                    const weatherCode = weatherData.weather[0].id;
                    document.getElementById('temp').innerHTML = temp;
                    document.getElementById('city').innerHTML = city;
                    document.getElementById('weather-icon').classList.add('wi', `wi-owm-${weatherCode}`);
                  });
          });

} )
