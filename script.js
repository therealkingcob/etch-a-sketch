const container = document.querySelector('#container');
let divs = []; // Array to store references to the created divs
let dimension = 16;

function createGrid(length) {

    container.setAttribute('style', 'grid-template-columns: repeat(' + length + ', 1fr);')

    for (let i = 0; i < length * length; i++) {
        const div = document.createElement('div');
        div.setAttribute('id', 'div');
        div.addEventListener('mouseenter', function() {
            div.setAttribute('style', 'background-color: blue;');
        });
        container.appendChild(div);
        divs.push(div); // Store the reference to the created div
    }
}

function promptMe() {
    deleteGrid();
    dimension = Number(prompt("What would you like the length/width of the grid to be?", 16));
    createGrid(dimension);
}

function deleteGrid() {
    divs.forEach(div => container.removeChild(div)); // Remove all stored divs from the container
    divs = []; // Clear the array
}

createGrid(dimension);