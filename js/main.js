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
function initMap() {
    mapProp = { center: null, zoom: 12, mapTypeId: google.maps.MapTypeId.ROADMAP };
    map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    infowindow = new google.maps.InfoWindow({ map: map });
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            request = { location: pos, radius: 1000, query: document.getElementById("Table").textContent };
            map.setCenter(pos);
            infowindow = new google.maps.InfoWindow();
            service = new google.maps.places.PlacesService(map);
            service.textSearch(request, callback);
        }, function () {
            handleLocationError(true, infowindow, map.getCenter());
        });
    }
    else {
        //Browser doesn't support Geolocation
        handleLocationError(false, infowindow, map.getCenter());
    }
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
    }
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
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
