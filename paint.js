var width = prompt("How wide should the canvas be?")
var height = prompt("how tall should the canvas be?")
$(".canvas").css("width", width);
$(".canvas").css("height", height);
$canvas = $(".canvas")
console.log($canvas)
var currentColor = "black";
var currentWidth = "10px";
var currentHeight = "10px";
var currentBorderRadius = "0%";
var draw = function (e) {

    if (isDrawing === true) {
        let posX = event.clientX  
        let posY = e.clientY
        console.log(posX, posY)
        var $paint = $('<span class="new"></span>')
        $paint.css("background-color", currentColor);
        $paint.css("width", currentWidth)
        $paint.css("height", currentHeight)
        $paint.css("left", posX)
        $paint.css("top", posY)
        $paint.css("position", "absolute")
        $paint.css("border-radius", currentBorderRadius);
        $canvas.append($paint)
    }
}

var color = document.getElementById("color");
color.addEventListener('click', changeColor);

function changeColor(event) {
    var newColor = event.target.id;
    currentColor = newColor;
}

var color = document.getElementById("white");
color.addEventListener('click', changeColor);

function changeColor(event) {
    var newColor = event.target.id;
    currentColor = newColor;
}

var square = document.getElementById("10px");
square.addEventListener('click', changeToSquare);

function changeToSquare(event) {
    var newWidth = event.target.id;
    currentWidth = newWidth;
    currentBorderRadius = "0%";
}

var thin = document.getElementById("5px");
thin.addEventListener('click', changeToThin);

function changeToThin(event) {
    var newWidth = event.target.id;
    currentWidth = newWidth;
    var newBorderRadius = "0%";
    currentBorderRadius = newBorderRadius;
}

var circle = document.getElementById("50%");
circle.addEventListener('click', changeToCircle);

function changeToCircle(event) {
    var newBorderRadius = event.target.id;
    currentBorderRadius = newBorderRadius;
    currentWidth = "10px";
}

var clear = document.getElementById("clear");
clear.addEventListener('click', clearAll);

function clearAll() {
    $('span').css('background', 'white');
    function color() {
        $('span').css('background', 'currentColor');
    }
}

var isDrawing = false

$(".canvas").on("mousedown", function () {
    isDrawing = true;
})

$(".canvas").on('mousedown', draw)
$(".canvas").on('mouseover', draw)

$(".canvas").on("mouseup", function () {
    isDrawing = false
})
