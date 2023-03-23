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
    {name:"Italian Garden", longitude: -97.940975, latitude: 29.88582, info:"food"},
    {name:"Mat`s El Rancho", longitude: -97.77925, latitude: 30.24514, info:"food"},
    {name:"Hopdoddy Burger Bar", longitude: -97.92293, latitude: 29.88733, info:"food"}
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

// document.querySelector("#hideMarkers").addEventListener('click', event=>{
//     document.querySelectorAll(".mapboxgl-marker").forEach(svg=>{
//         svg.style.display = "none"
//     })
// })

// This function creates a button that toggles the display of the markers from visible to none, and vice versa.
const markers = document.querySelectorAll(".mapboxgl-marker");
const markerDisplays = [];

markers.forEach(marker=>{
    markerDisplays.push(marker.style)
    marker.addEventListener('dblclick',function(){
        this.classList.add('bounce-animation','animated');
        this.addEventListener('animationend', ()=>{
            this.classList.remove(`bounce-animation`);
        }, {once:true})
    });
});

document.querySelector('#hideMarkers').addEventListener('click', event=>{markers.forEach((marker,index)=>{
    if (marker.style.display === "none") {
        marker.style.display = markerDisplays[index];
    } else {
        markerDisplays[index] = marker.style.display;
        marker.style.display = "none";
    }
});
})



// Refactor this from jQuery to something else
// $(".mapboxgl-marker").click(function(){
//     $(this).addClass('bounce-animation').addClass('animated');
// });
