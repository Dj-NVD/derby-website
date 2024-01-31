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
