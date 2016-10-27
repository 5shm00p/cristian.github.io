var myCenter = new google.maps.LatLng(21.1165341, -101.7185123);
function initialize() {
  var mapProp = {
    center: myCenter,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map"), mapProp);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);
