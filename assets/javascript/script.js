var fact = 'https://cat-fact.herokuapp.com/facts';

/**
 * Returns coordinates for a 3 word address
 * @param {string} words - The 3 word address words to convert to coordinates
 * @returns {Promise} - Promise coordinates response
 */
what3words.api.convertToCoordinates("filled.count.soap")
    .then(function (response) {
        console.log(response.coordinates);
    });


    
// initialize the map on the "map" div with a given center and zoom
var map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13
});

// create map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + "whatever the path to the other key", {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);


//generate a random number
var RNG = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
}

// generate random cat fact
fetch(fact)
    .then(function (response) {
        // console.log(response);
        return response.json();
    })
    .then(function (data) {
        // console.log(data)
        console.log(data[RNG(0, 4)].text)
    })