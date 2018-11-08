import axios from 'axios';

let contentElement: HTMLDivElement = <HTMLDivElement> document.getElementById("content");

let btnFillList: HTMLButtonElement = <HTMLButtonElement> document.getElementById("btnFillList");

let btnFillTable: HTMLButtonElement = <HTMLButtonElement> document.getElementById("btnFillTable");

btnFillList.addEventListener("click", () => 
{
    console.log("Fetching data and populating list");
    // clear div
    contentElement.innerHTML = "";
    contentElement.innerText = "";


    axios.get("http://api.evang.dk/randomwords/index.php", {
        headers: {'numberOfWords': 8}
    })
    .then(function (response) {
        console.log(response.data.words);
        // Create unordered list element and add it to content div
        let list: HTMLUListElement = document.createElement('ul');
        contentElement.appendChild(list);
        response.data.words.forEach(element => {
            let listElement: HTMLLIElement = document.createElement('li');
            listElement.innerText=element;
            list.appendChild(listElement);
        });
    })
    .catch(function (error)
    {
        console.log(error);
    });
});

btnFillTable.addEventListener("click", () => 
{
    console.log("Fetching data and populating table");
    // clear div
    contentElement.innerHTML = "";
    contentElement.innerText = "";
    axios.get("http://api.evang.dk/randomwords/index.php", {
        headers: {'numberOfWords': 8}
    })
    .then(function (response) {
        console.log(response.data.words);

        // Create table element and add it to the div element
        let table: HTMLTableElement = document.createElement('table');
        contentElement.appendChild(table);
        response.data.words.forEach(element => {
            // Create table row
            let tableRow : HTMLTableRowElement = document.createElement('tr');
            // Create table cell
            let tableCell : HTMLTableCellElement = document.createElement('td');
            // set cell content frmo array
            tableCell.innerText = element;
            // add cell to row
            tableRow.appendChild(tableCell);
            // add row to table
            table.appendChild(tableRow);
        });
    });
});