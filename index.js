document.addEventListener( 'DOMContentLoaded', () => {
    // ==== Once HTML is there =====


    // ===== DOM Caching ===== //
    const quote = document.getElementById( 'quote' ),
          temp  = document.getElementById('temp'),
          city  = document.getElementById('city'),
          weatherIcon = document.getElementById('weather-icon');

    utils.getQuote( quote );
    utils.getWeather( temp, city, weatherIcon );

} )
