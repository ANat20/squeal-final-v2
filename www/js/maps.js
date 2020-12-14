function maps(elementIdNum, lat, long){
    //let myLatlng = new google.maps.LatLng(lat, long);

    let mapOptions = {
        zoom: 15,
        center: { lat: lat, lng: long},
    }

    let map = new google.maps.Map(document.getElementById(`map-${elementIdNum.toString()}`), mapOptions);

    let marker = new google.maps.Marker({
        position: { lat: lat, lng: long},
        map: map,
    });

    const infowindow = new google.maps.InfoWindow({
        content: "<p> Location:" + marker.getPosition() + "</p>",
    });
    
    google.maps.event.addListener(marker, "click", () => {
        infowindow.open(map, marker);
    });
}

