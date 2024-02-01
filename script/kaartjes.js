//kaart voor info
document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('locatie').setView([51.21925, 4.77189], 17);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Noah Van Dijck'
    }).addTo(map);

    var marker1 = L.marker([51.21925, 4.77189]).addTo(map)
        .bindPopup('<div style="text-align: center;">LRV De Linderuiters<br>ons derbyterrein is hier.</div>');

    var centralCoordinates = [51.21925, 4.77189]; // corrected syntax
    map.setView(centralCoordinates, 12);
    marker1.openPopup();
});


// kaart voor meer details
document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('detailkaart').setView([51.21930, 4.77092], 17);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Noah Van Dijck'
    }).addTo(map);

    // Marker for the main entrance
    var marker1 = L.marker([51.21904, 4.77101]).addTo(map)
        .bindPopup('<div style="text-align: center;">Hoofdingang.</div>');

    // Marker for the parking (Approximate location, adjust as needed)
    var marker2 = L.marker([51.21972, 4.76967]).addTo(map)
        .bindPopup('<div style="text-align: center;">Is dit onze parking?</div>');

    // vierkant voor parking aan te duiden
    var polygonCoords = [
        [51.21982, 4.76887],
        [51.22003, 4.77018],
        [51.21950, 4.77016],
        [51.21912, 4.76921]
    ];

    // kleurtje aan vierkant voor parking
    L.polygon(polygonCoords, { color: "#fff000", weight: 1 }).addTo(map);

    // Set the central coordinates
    var centralCoordinates = [51.21930, 4.77092];
    map.setView(centralCoordinates, 17);

    // Open the popup for the main entrance marker
    marker1.openPopup();
});
