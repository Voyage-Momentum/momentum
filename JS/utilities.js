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

    return {
        getData
    }
}();
