// Look at BigFoot example on Ajax Store and use that template
// adding event listeners on const builtTable in BigFoot is more beneficial and simpler
// Remove live reload. settings < tools < web browser < reload behavior < disable
(function() {
    "use strict";
    // TODO: Create an AJAX GET request for the file under data/inventory.json
    // TODO: Take the data from inventory.json and append it to the products table
    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    //       HINT: You will want to target #insertProducts for your new HTML elements

    const $insertProducts = document.querySelector('#insertProducts');

    // Fetches data from the data directory, and waits till the data is completely pulled
    // Returns data after fetching
    const getInventory = async () => {
        let response = await fetch('data/inventory.json')
        let data = await response.json();
        return data;
    }
    // Creating html table layout for data input
    const renderTableData = (inventory) => {
        let tableData = '';
        inventory.forEach(item => {
            tableData += `<tr>`;
            tableData += `<td>${item.title}</td>`;
            tableData += `<td>${item.quantity}</td>`;
            tableData += `<td>${dollaDolla(item.price)}</td>`;
            tableData += `<td>${item.categories.join(', ')}</td>`;
            tableData += `<tr>`;
        });
        return tableData;
    };
    //
    (async()=>{
        let inventory = await getInventory()
        console.log(inventory)
        $insertProducts.innerHTML = renderTableData(inventory);
        console.log($insertProducts.innerHTML);
    })();

    document.querySelector('#refreshBtn').addEventListener('click',async function(){
        document.querySelector('#insertProducts').innerHTML = '';
        let inventory = await getInventory();
        $insertProducts.innerHTML = renderTableData(inventory);
    })
})();