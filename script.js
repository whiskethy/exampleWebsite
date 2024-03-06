// Function to change the background color
function changeColor() {
    var body = document.querySelector('body');
    body.style.backgroundColor = getRandomColor();
}

// Function to generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Event listener for the button click
var button = document.querySelector('button');
button.addEventListener('click', changeColor);
