function maps(elementClassNum, lat, long){
    //let collapisble = document.getElementById(elementId);
    alert(elementClassNum + ", " + lat + ", " + long);

    //let myLatlng = new google.maps.LatLng(lat, long);

    let mapOptions = {
        zoom: 15,
        center: { lat: lat, lng: long},
    }

    let map = new google.maps.Map(document.getElementsByClassName('map-' + elementClassNum.toString()), mapOptions);

    let marker = new google.maps.Marker({
        position: { lat: lat, lng: long},
        map: map,
    });

    const infowindow = new google.maps.InfoWindow({
        content: "<p>Marker Location:" + marker.getPosition() + "</p>",
    });
    
    google.maps.event.addListener(marker, "click", () => {
        infowindow.open(map, marker);
    });
}