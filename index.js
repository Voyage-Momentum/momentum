document.addEventListener( 'DOMContentLoaded', () => {
    // ==== Once HTML is there =====
    utils.getData( 'get', 'http://ron-swanson-quotes.herokuapp.com/v2/quotes' )
         .then( quote => document.getElementById('quote').innerHTML = `"${quote}"` )
         .catch(err => console.log(err));
} )
