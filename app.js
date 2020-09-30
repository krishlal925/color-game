let numSquares = 6;
let colors= [];



let pickedColor;
let squares = document.querySelectorAll(".square");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

generateRandomColors()




//set picked color
pickedColor = squares[randomBoxSelector()].style.backgroundColor;

//set event listeners
for (i =0; i < squares.length; i++){
    squares[i].addEventListener('click', compareColors )
}

resetButton.addEventListener('click', generateRandomColors)


function compareColors(ev) {
    
    console.log(ev)
    let clickedColor = ev.target.style.backgroundColor;
    //alert(`option ${i} was clicked`) 
    
    //if correct block is clicked do something....   
    if (pickedColor === clickedColor){
        //alert("you picked the right color!!!!")
        
    }
    //if wrong block is clicked do something....
    else{
        alert("you picked the wrong color :-( ")
        ev.target.classList.toggle('hidden')
    }
}

function randomNumGenerator() {
    return Math.floor(Math.random() *256)
}

function randomBoxSelector() {
    let num = Math.floor(Math.random()* numSquares);
    console.log(num)
    return num;
}

function generateRandomColors(){
    colors = []
    for (let i =0; i< numSquares; i++){
        colors.push(`rgb(${randomNumGenerator()}, ${randomNumGenerator()}, ${randomNumGenerator()})`)
    }
    colorTheBlocks()
}

function colorTheBlocks() {
    // add random colors to blocks
    for (i =0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    
}