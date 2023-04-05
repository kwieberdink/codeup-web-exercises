const setFavorite = async (movie) => {
    try {
        let url = `http://localhost:3000/favorites`;
        let options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        }
        let response = await fetch(url, options);
        let data = await response.json()
        return data;
    } catch(error) {
        console.log(error)
    }
}
(async()=>{
    let movieData = {
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "genre": "Fantasy",
        "rating": 3
    }
    let response = await setFavorite(movieData);


})();