/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
( function() {	

    var nav = jQuery('#site-navigation'),
    animateTime = 500,
    navLink = jQuery('#menu-toggle');

    navLink.click(function(event) {    	
        nav.slideToggle();
        event.preventDefault();
    });


    // -- Initialize bx slider
    $('.slider').bxSlider({
    	slideWidth: 480,
    	minSlides: 2,
    	maxSlides: 2,
    	slideMargin: 20
    });

    // -- Initialize jQuery tabs

	$( "#tabs" ).tabs();

} )();
