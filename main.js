"use strict"
// function updateResult(query) {
//     // let resultList = document.querySelector(".result");
//     // resultList.innerHTML = "";
//
//     coffees.map(function(algo){
//         query.split(" ").map(function (word){
//             if(algo.toLowerCase().indexOf(word.toLowerCase()) != -1){
//                 html += algo;
//             }
//         })
//     })
//
// }

function renderCoffee(coffee) {
    var html = '<div class="coffee d-flex align-items-center">';
    html += '<h4>' + coffee.name + '</h4> ';
    html += '<p class="m-0">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffeeList(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    if(selectedRoast === "All"){
        tbody.innerHTML = renderCoffeeList(coffees)
    }else {
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        tbody.innerHTML = renderCoffeeList(filteredCoffees)
        })
    }
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffeeList(coffees);

submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('input', updateCoffees);