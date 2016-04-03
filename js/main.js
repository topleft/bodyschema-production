// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
  // ** create map ** //
  init();
});


// -- google map ---- //

var map;
var marker;
var infowindow;

function init() {
  map = new google.maps.Map(document.getElementById("map"),{
		      center: {lat: 39.7619471, lng: -105.0377847},
		      zoom:12
		});

  var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  marker = new google.maps.Marker({
    position: {lat: 39.7619471, lng: -105.0377847},
    map: map
  });

  infowindow = new google.maps.InfoWindow({
    content: "<div><a href='https://goo.gl/maps/MnsY4zfPnqv'><h4>Bodyschema Movement @ Highlands Pilates</h4><p>3630 W 32nd Ave #2, Denver, CO 80211</p></a><a href="+'tel:+15102894464'+">(510) 289-4464</a></div>"
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
};


// **** custom map styles ******* //

var styles = [
  {
    stylers: [
      { hue: "#00ffe6" },
      { saturation: -20 }
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: 100 },
      { visibility: "simplified" }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
];


// **** show map in modal ******* //

$("#modal").on('shown.bs.modal', function() {
	  var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
	  infowindow.open(map, marker);
 });

// **** accoridian toggles ******* //

$(".sidebar-nav").on("click", "li", function(){
	var block = $(this).next("div")[0];
	showHide(block, "toggle");
});

var showHide = function(elem, elemClass) {
	elem = $(elem);
	elemClass = "."+elemClass
	if (elem.css('display') === "none"){
		$(elemClass).slideUp();
		elem.slideDown();
	} else{
		elem.slideUp();
	}
};

// **** smooth scroll ******* //

  var scroll = true;
  $("#contact").on("click", function(e){
  	if (scroll){
    	setTimeout(
    		$('html, body').animate({
      		scrollTop: $('#form').offset()
      		}, 1000), 2000);
    	scroll = false;
  	}
  	else {
  		scroll = true;}
  });
