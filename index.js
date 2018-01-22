document.addEventListener( 'DOMContentLoaded', () => {
    // ==== Once HTML is there =====
    utils.getData( 'get', 'http://ron-swanson-quotes.herokuapp.com/v2/quotes')
         .then( res => console.log( res ) )
} )
