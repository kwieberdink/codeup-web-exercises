(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split(`|`);
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    console.log(planetsArray.join('<br>'));

    let list = document.createElement(`ul`); // create an unordered list
    // create a list for each wizard
    // and append it to the list
    planetsArray.forEach(function(planet) {
        let li = document.createElement(`li`);
        li.textContent = planet;
        list.appendChild(li)
    });
    console.log(list)

})();