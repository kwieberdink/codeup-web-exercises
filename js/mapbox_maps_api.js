document.querySelector("#zoomSubmit").addEventListener('click', event => {
    event.preventDefault()
    map.setZoom(document.querySelector("#zoom").value)
})

document.querySelector("#setMarkerButton").addEventListener('click', event => {
    event.preventDefault();
    const address = document.querySelector("#setMarker").value;
    geocode(address, MAPBOX_API_TOKEN).then(coords=>{
        console.log(coords)
        const newMarker = new mapboxgl.Marker()
            .setLngLat(coords)
            .addTo(map);
        map.setCenter(coords);
    });
});

const restaurants = [
    {name:"Texas Sizzle", longitude: -98.48839, latitude: 29.42739, info:"food"},
    {name:"Mat`s El Rancho", longitude: -97.77925, latitude: 30.24514, info:"food"},
    {name:"Sushishima", longitude: -98.52265, latitude: 29.524795, info:"food"}
]
restaurants.forEach(restaurant=>{
    const element = document.createElement("div");
    element.className = 'marker';
    const marker = new mapboxgl.Marker(element)
        .setLngLat([restaurant.longitude,restaurant.latitude])
        .addTo(map);
    const popup = new mapboxgl.Popup()
        .setHTML(`
            <h3 class="popup">${restaurant.name}</h3>
             <p>${restaurant.info}</p>
                `);
    marker.setPopup(popup)
});

document.querySelector("#hideMarkers").addEventListener('click', event=>{
    document.querySelectorAll(".mapboxgl-marker").forEach(svg=>{
        svg.style.display = "none"
    })
})