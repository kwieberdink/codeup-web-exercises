(function() {
    "use strict";
    // TODO: Create an AJAX GET request for the file under data/inventory.json
    const getInventory = async () => {
        let response = await fetch('data/inventory.json')
        console.log(response)
        let data = await response.json();
        console.log(data);
    }


    // TODO: Take the data from inventory.json and append it to the products table
    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    //       HINT: You will want to target #insertProducts for your new HTML elements
})();