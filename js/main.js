<<<<<<< HEAD
//<reference path="google.maps.d.ts" />
//declare var $: any;
var myButton = document.getElementById("ClickButton");
//document.addEventListener("DOMContentLoaded", function(){
//var myButton = document.getElementById("ClickButton");
myButton.addEventListener("click", change);
function change() {
    if (myButton.value == "Pick your Dinner") {
        myButton.value = "Pick Again";
        myButton.style.color = "white";
        document.getElementById("Table").innerHTML = Picker();
        initMap();
    }
    else {
        myButton.value = "Pick Again";
        myButton.style.color = "white";
        document.getElementById("Table").innerHTML = Picker();
        initMap();
    }
}
//});
function Picker() {
    var places = ["McDonald's", "Burger King", "KFC", "Pizza", "Chinese", "Kebabs", "Indian", "Denny's", "Sushi", "Subway", "Pita Pit", "Wendy's"];
    var random = Math.floor((Math.random() * 10) + 3);
    return places[random - 1];
}
var map;
var mapProp;
var infowindow;
var request;
var service;
var pos = {lat: -36.849, lng: 174.763};

function initMap() {

  mapProp = { center: pos, zoom: 11, mapTypeId: google.maps.MapTypeId.ROADMAP };

  map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  var geocoder = new google.maps.Geocoder();
  document.getElementById('submit').addEventListener('click', function() {geocodeAddress(geocoder, map);});

  infowindow = new google.maps.InfoWindow({ map: map });

  request = { location: pos, radius: 1000, query: document.getElementById("Table").textContent };
  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);

  function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById("address").value;
    geocoder.geocode({'address': address}, function(results, status) {
      if (status == 'OK') {
        pos = results[0].geometry.location;
        resultsMap.setCenter(pos);
        var marker = new google.maps.Marker({
          map: resultsMap, position: pos
        });
        return pos;
      }
      else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i])
      }
    }
  }

  // creates marker on map
  function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });

    // gives info about marker
    google.maps.event.addListener(marker, 'click', function () {
      //reverse geocode to get address
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }
}
=======
//<reference path="google.maps.d.ts" />
//declare var $: any;
var myButton = document.getElementById("ClickButton");
//document.addEventListener("DOMContentLoaded", function(){
//var myButton = document.getElementById("ClickButton");
myButton.addEventListener("click", change);
function change() {
    if (myButton.value == "Pick your Dinner") {
        myButton.value = "Pick Again";
        myButton.style.color = "white";
        document.getElementById("Table").innerHTML = Picker();
        initMap();
    }
    else {
        myButton.value = "Pick Again";
        myButton.style.color = "white";
        document.getElementById("Table").innerHTML = Picker();
        initMap();
    }
}
//});
function Picker() {
    var places = ["McDonald's", "Burger King", "KFC", "Pizza", "Chinese", "Kebabs", "Indian", "Denny's", "Sushi", "Subway", "Pita Pit", "Wendy's"];
    var random = Math.floor((Math.random() * 10) + 3);
    return places[random - 1];
}
var map;
var mapProp;
var infowindow;
var request;
var service;
var pos = {lat: -36.849, lng: 174.763};

function initMap() {

  mapProp = { center: pos, zoom: 11, mapTypeId: google.maps.MapTypeId.ROADMAP };

  map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  var geocoder = new google.maps.Geocoder();
  document.getElementById('submit').addEventListener('click', function() {geocodeAddress(geocoder, map);});

  infowindow = new google.maps.InfoWindow({ map: map });

  request = { location: pos, radius: 1000, query: document.getElementById("Table").textContent };
  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);

  function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById("address").value;
    geocoder.geocode({'address': address}, function(results, status) {
      if (status == 'OK') {
        pos = results[0].geometry.location;
        resultsMap.setCenter(pos);
        var marker = new google.maps.Marker({
          map: resultsMap, position: pos
        });
        return pos;
      }
      else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i])
      }
    }
  }

  // creates marker on map
  function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });

    // gives info about marker
    google.maps.event.addListener(marker, 'click', function () {
      //reverse geocode to get address
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }

}
>>>>>>> 24c3fb5795fc990acc4d3446d67e1e18291795ec
