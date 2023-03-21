(function() {
    "use strict";
    // TODO: Create an AJAX GET request for the file under data/inventory.json
    // TODO: Take the data from inventory.json and append it to the products table
    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    //       HINT: You will want to target #insertProducts for your new HTML elements

    const $insertProducts = document.querySelector('#insertProducts');

    const getInventory = async () => {
        let response = await fetch('data/inventory.json')
        let data = await response.json();
        return data;
    }
    const renderTableData = (inventory) => {
        let tableData = '';
        inventory.forEach(item => {
            tableData += `<tr>`;
            tableData += `<td>${item.title}</td>`;
            tableData += `<td>${item.quantity}</td>`;
            tableData += `<td>${item.price}</td>`;
            tableData += `<td>${item.categories}</td>`;
            tableData += `<tr>`;
        });
        return tableData;
    };
    (async()=>{
        let inventory = await getInventory()
        console.log(inventory)
        $insertProducts.innerHTML = renderTableData(inventory);
        console.log($insertProducts.innerHTML);
    })();
})();