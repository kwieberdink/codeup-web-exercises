// let person = {
//     firstName: "Jason",
//     lastName: "Merrell",
//     email: "jason.merrell@codeup.com"
// };
//
// let personJSON = JSON.stringify(person);

const getMovie = () => {
        fetch('https://swapi.dev/api/films/1/') // sent cook out to go get product
            .then(response => response.json()) // cook received the product
            .then(data => {
                    // console.log(data);
                    return data
            }).catch(error => {
                console.log(error);
        })
}

async function getMovieAsync(){
    try{
        let response = await fetch('https://swapi.dev/api/films/1/')
        let data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error)
    }
}

