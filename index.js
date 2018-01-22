document.addEventListener( 'DOMContentLoaded', () => {
    // ==== Once HTML is there =====
    utils.getData( 'get', 'http://ron-swanson-quotes.herokuapp.com/v2/quotes' )
         .then( res => document.getElementById('quote').innerHTML = `"${res}"` )
         // do something if res doesn't come back the way you expect
} )
