// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
  // ** create maps ** //
  init()
});


// -- google map ---- //

var highlands = {};
var congresspark = {};
var map;

function init() {
  highlands.map = new google.maps.Map(document.getElementById("highlands-map"),{
		      center: {lat: 39.7619471, lng: -105.0377847},
		      zoom:12
		});

  congresspark.map = new google.maps.Map(document.getElementById("congresspark-map"),{
		      center: {lat: 39.738560, lng: -104.950838},
		      zoom:12
		});

  var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

  highlands.map.mapTypes.set('map_style', styledMap);
  highlands.map.setMapTypeId('map_style');

  congresspark.map.mapTypes.set('map_style', styledMap);
  congresspark.map.setMapTypeId('map_style');

  highlands.marker = new google.maps.Marker({
    position: {lat: 39.7619471, lng: -105.0377847},
    map: congresspark.map
  });

  congresspark.marker = new google.maps.Marker({
    position: {lat: 39.738560, lng: -104.950838},
    map: highlands.map
  });

  highlands.infowindow = new google.maps.InfoWindow({
    content: "<div><a href='https://goo.gl/maps/MnsY4zfPnqv'><h4>Bodyschema Movement @ Highlands Pilates</h4><p>3630 W 32nd Ave #2, Denver, CO 80211</p></a><a href="+'tel:+15102894464'+">(510) 289-4464</a></div>"
  });

  congresspark.infowindow = new google.maps.InfoWindow({
    content: "<div><a href='https://goo.gl/maps/ECoU2RXYdJL2'><h4>Bodyschema Movement @ Congress Park Studio</h4><p>1379 St. Paul Street, Denver, CO 80206</p></a><a href="+'tel:+15102894464'+">(510) 289-4464</a></div>"
  });

  highlands.marker.addListener('click', function() {
    highlands.infowindow.open(highlands.map, highlands.marker);
  });

  congresspark.marker.addListener('click', function() {
    congresspark.infowindow.open(congresspark.map, congresspark.marker);
  });

  // var center = congresspark.map.getCenter();
  // google.maps.event.trigger(congresspark.map, "resize");
  // congresspark.map.setCenter(center);
  // // congresspark.infowindow.open(congresspark.map, congresspark.marker);
  //
  // map = highlands
  // var center = map.map.getCenter();
  // google.maps.event.trigger(map.map, "resize");
  // map.map.setCenter(center);
  // // highlands.infowindow.open(highlands.map, highlands.marker);
  //
  // setTimeout(function(){cb()}, 1000)
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
//


$("#congresspark-modal").on('shown.bs.modal', function() {
    // init(function() {
    // })
	  var center = congresspark.map.getCenter();
    // congresspark.infowindow.open(congresspark.map, congresspark.marker);
    google.maps.event.trigger(congresspark.map, "resize", function(){
      congresspark.map.setCenter(center);
      congresspark.infowindow.open(congresspark.map, congresspark.marker);

    }
  );
 });

$("#highlands-modal").on('shown.bs.modal', function() {
    // init(function(){
    //   highlands.infowindow.open(highlands.map, highlands.marker);
    // })
    // // map = highlands
    // // map.infowindow.open(map.map, map.marker);
	  // // var center = map.map.getCenter();
    // // google.maps.event.trigger(map.map, "resize");
    // // map.map.setCenter(center);
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
