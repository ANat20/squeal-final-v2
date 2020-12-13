function currentLocRequest(geoLat, geoLong) {    
    const TOKEN = "CdWNqZ-ejJcWQNCu2QgPXFEEx8Mg0xA6CMVdzAh8HmStiAU2ujrjQ2VJlthXSh5tIzGbGCnMSaXLkh_fytNs6mCtTkHzkt0HNaJjOx1tpn_oPdpQWv713RAxcmzKX3Yx"

    $.ajax({
        url: `https://api.yelp.com/v3/businesses/search?term=delis&latitude=${geoLat}&longitude=${geoLong}`,
        type: 'GET',
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Bearer " + TOKEN);
        },
        success: function(result) { 
            processRequest(result);
        },
        error: function() { 
            alert('Failed Fusion API request!'); 
        }
    });
}

function processRequest(results) {
    let obj = results.businesses;

    let workspace = document.getElementById("content");
    workspace.innerHTML = `<h3>Fetching results near ZIP ${obj[0].location.zip_code}!</h3>`;

    alert(`ID: ${obj[2].id}\nLat: ${obj[2].coordinates.latitude}\nLong: ${obj[2].coordinates.longitude}`);

    for (i in obj) {
        workspace.innerHTML += `<div id="card-${i}">
                                    <a href="#${obj[i].id}" data-toggle="collapse">
                                        <img class="card" src="${obj[i].image_url}" alt="${obj[i].name}">
                                    </a>  
                                    <div id="${obj[i].id}" class="collapse"></div>
                               </div>`;

        let collapsible = document.getElementById(obj[i].id);
        
        collapsible.innerHTML += `<p class="collapse-content">
                                    \n
                                    ${obj[i].name}\n
                                    ${obj[i].rating}/5 stars\n
                                    ${obj[i].categories.title} 
                                  </p>
                                  <button class="navButton" onclick="maps(${i}, 
                                                                          ${obj[i].coordinates.latitude}, 
                                                                          ${obj[i].coordinates.longitude})">
                                                                          Get Location</button>
                                  <div id="map-${i}" class="map"></div>`;
    }
}