


// **** show maps in modal ******* //

$("#congresspark-modal").on('shown.bs.modal', function() {
    renderMap(createMap(congresspark))
});

$("#highlands-modal").on('shown.bs.modal', function() {
  renderMap(createMap(highlands))
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



function createMap(location) {
  var latLong = location.latLong
  var id = location.id
  var content = location.content

  var map = new google.maps.Map(document.getElementById(id),{
    center: latLong,
    zoom:12
  });
  var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  var marker = new google.maps.Marker({
    position: latLong,
    map: map
  });

  var infowindow = new google.maps.InfoWindow({
    content: content
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  return {
    map,
    marker,
    infowindow
  }
}

function renderMap(location){
  var center = location.map.getCenter();
  google.maps.event.trigger(location.map, "resize")
  location.map.setCenter(center);
  setTimeout(function(){
    location.infowindow.open(location.map, location.marker);
  }, 100);


}
