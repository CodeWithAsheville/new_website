var geocoder = L.mapbox.geocoder('examples.map-vyofok3q');
var map = L.mapbox.map('map', 'examples.map-vyofok3q');

map.dragging.disable();
map.scrollWheelZoom.disable();
map.touchZoom.disable();

geocoder.query('Asheville, NC', showMap);

function showMap(err, data) {
     map.fitBounds(data.lbounds);
}

(function($) {
	$("#menu-close").click(function(e) {
	    e.preventDefault();
	    $("#sidebar-wrapper").toggleClass("active");
	});


	$("#menu-toggle").click(function(e) {
	    e.preventDefault();
	    $("#sidebar-wrapper").toggleClass("active");
	});

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
})(jQuery);