// easier version of code first and then code was
// made modular and solved sequentially
// var colors=[
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(255, 0, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 100)",
//     "rgb(5, 255, 0)"

// ]

var h1=document.querySelector("h1");

var colors=generateRandomColors(6);

// Fix a color, hard code it, then write the important logic. Then put the correct logic into it:D
var squares=document.querySelectorAll(".square");
// var pickedColor=colors[3];
var pickedColor=pickColor();
var colorDisplay=document.querySelector("#colorDisplay");
colorDisplay.textContent=pickedColor;
var messageDisplay=document.querySelector("#messageDisplay");
var changeColorBtn=document.querySelector("#changeColor");
var easyButton=document.querySelector("#easyButton");
var hardButton=document.querySelector("#hardButton");


easyButton.addEventListener("click",easyButtonClicked);
hardButton.addEventListener("click",hardButtonClicked);
squaresBackup=[];

changeColorBtn.addEventListener("click",function(){
    colors=generateRandomColors(squares.length);
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colors[i];
    }
    messageDisplay.textContent="";
    h1.style.backgroundColor="#232323"; // background color
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor

});

for(var i=0;i<squares.length;i++)
{
    // add initial colors to square
    squares[i].style.backgroundColor=colors[i];

    // add click listners
    squares[i].addEventListener("click", function(){
        // we need the color of the tile clicked
        var clickedColor=this.style.backgroundColor;
        if(clickedColor===pickedColor)
        {
            this.style.backgroundColor=clickedColor;
            // all others are also green
            squares.forEach(function(mySquare){
                mySquare.style.backgroundColor=clickedColor;
            });
            messageDisplay.textContent="Correct"
            h1.style.backgroundColor=pickedColor;

        }
        else{
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try Again";
        }
    });
}

function pickColor()
{
    var random = Math.floor(Math.random()  * colors.length)
    return colors[random]

}

function generateRandomColors(num)
{
    // make array
    var arr=[];
    // add num colors
    for (var i=0;i<num;i++)
    {
        //get random color and put in array
        var color=randomColor();
        arr.push(color);
    }
    // return array
    return arr;

}

function randomColor()
{
    // red from (0,255)
    var red=Math.floor(Math.random()*256);
    // green from (0,255)
    var green=Math.floor(Math.random()*256);
    // blue from (0,255)
    var blue=Math.floor(Math.random()*256);
    var string="rgb("+red+", "+green+", "+blue+")";
    return string;

}

function easyButtonClicked()
{
    easyButton.classList.toggle("selected");
    hardButton.classList.toggle("selected");
    colors=generateRandomColors(3); //1
    pickedColor=pickColor();
    for(var i=0;i<squares.length;i++)
    {
        if(i<=2)
            squares[i].style.backgroundColor=colors[i];
        else{
            squares[i].style.backgroundColor="#232323"
        }
    }
    squaresBackup=squares;
    squares=[squares[0],squares[1],squares[2]];
    colorDisplay.textContent=pickedColor;
    // messageDisplay=document.querySelector("#messageDisplay");
    messageDisplay.textContent="";
    last3Squares.forEach(function(squareSelected){
        squareSelected.style.backgroundColor="#232323"; // fade the remaining 3 squares and set the squares
    })
    

}

function hardButtonClicked()
{
    easyButton.classList.toggle("selected");
    hardButton.classList.toggle("selected");
    colors=generateRandomColors(6); //1
    pickedColor=pickColor();
    squares=squaresBackup

    for(var i=0;i<squares.length;i++)
    {
        
        squares[i].style.backgroundColor=colors[i];
       
    }
    // squares=[squares[0],squares[1],squares[2]];
    colorDisplay.textContent=pickedColor;
    messageDisplay.textContent="";
    

}