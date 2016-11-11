var highlands = {
  latLong: {lat: 39.7619471, lng: -105.0377847},
  id: "highlands-map",
  content: "<div>\
              <a href='https://goo.gl/maps/MnsY4zfPnqv'>\
                <h4>Bodyschema Movement @ Highlands Pilates</h4>\
                <p>3630 W 32nd Ave #2, Denver, CO 80211</p>\
              </a>\
              <a href=tel:+15102894464>(510) 289-4464</a>\
            </div>"
};

var congresspark = {
  latLong: {lat: 39.738560, lng: -104.950838},
  id: "congresspark-map",
  content: "<div>\
              <a href='https://goo.gl/maps/ECoU2RXYdJL2'>\
                <h4>Bodyschema Movement @ Congress Park Studio</h4>\
                <p>1379 St. Paul Street, Denver, CO 80206</p>\
              </a>\
              <a href=tel:+15102894464>(510) 289-4464</a>\
            </div>"
};

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
