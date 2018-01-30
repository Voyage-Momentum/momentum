const utils = function(){

    // ===== These are functions/variables that are globally available =====
    function getData( method, url ){

        const options = {
            method: method.toUpperCase(),
            mode : 'cors',
            cache: 'default'
        };

        return fetch( url, options )
                .then( res => res.json() )
    }


    function getQuote( element ) {
        return utils.getData( 'get', 'http://ron-swanson-quotes.herokuapp.com/v2/quotes' )
                    .then( quote => element.innerHTML = `"${quote}"` )
                    .catch( err => console.log(err) );
    }


    function getWeather( temp, city, weatherIcon ) {
        return utils.getData( 'get', 'https://ipinfo.io/geo' )
                    .then( locationData => {
                        const location = locationData.loc.split(','),
                              lat = location[0],
                              lon = location[1];

                        utils.getData( 'get', `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=332aac2b0595764b02d7634b86a9b463` )
                             .then( weatherData => {
                                const temperature = `${Math.round(weatherData.main.temp)}&deg;`;
                                const cityName = weatherData.name;
                                const weatherCode = weatherData.weather[0].id;
                                temp.innerHTML = temperature;
                                city.innerHTML = cityName;
                                weatherIcon.classList.add('wi', `wi-owm-${weatherCode}`);
                } );
        } );
    }

    return {
        getData,
        getQuote,
        getWeather
    }
}();
