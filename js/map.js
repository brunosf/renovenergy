function initMap() {
    
    var myLatLng = {lat: -21.683241, lng:  -51.085168}; 
    
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 16
  });
    
  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Venha nos conhecer!'
  });
}