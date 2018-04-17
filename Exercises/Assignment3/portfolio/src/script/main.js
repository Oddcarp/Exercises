

const jquery = require("jquery");
const modernizr = require("modernizr");

$( document ).ready(function() {
    $( '#container' ).SecretNav({
    	navSelector: 'nav',			// selector of the nav tag
		openSelector: '.open-menu',	// selector of the menu's opener
		position: 'left'			// left | top
    });
});
