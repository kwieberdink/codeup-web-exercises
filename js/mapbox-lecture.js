// Prevents the default on the event, which typically submits the pages when clicking the submit button on a form
// Used the mapbox built in IPM, by passing it dynamically and using the value of the zoom ID to input a zoom number
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