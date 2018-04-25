
var mymap = L.map('map', {
    center: [40.310032, -100.922839], // somewhere in Nebraska
    zoom: 4,
    maxZoom: 10,
    minZoom: 1,
    detectRetina: true});
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(mymap);

// 3. Add airports GeoJSON Data
// Null variable that will hold airports data
var airports = null;

// Get GeoJSON and put on it on the map when it loads
airports= L.geoJson.ajax("assets/airports.geojson",{

    attribution: 'Airports Data &copy; ???? | US States &copy; ???? | Base Map &copy; CartoDB | Made By Aradia Farmer'
});
// Add the airports to the map.
airports.addTo(mymap);