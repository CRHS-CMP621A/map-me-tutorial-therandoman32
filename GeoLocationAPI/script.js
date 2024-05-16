navigator.geolocation.getCurrentPosition(
    function (position){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`https://www.google.com/maps/@${latitude},${longitude},21z`);
        const coords= [latitude, longitude]

var map = L.map('map').setView(coords, 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker(coords).addTo(map)
    .bindPopup('Where the Computer thinks you are')
    .openPopup();
    },
    function (){
        alert("Could not get position");
    }
)
