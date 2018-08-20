var colors=generateRandomColors(6);
var numSquares=6;
var h1=document.querySelector("h1");
    var colors=generateRandomColors(6);
    var numSquares=6;
    // Fix a color, hard code it, then write the important logic. Then put the correct logic into it:D
    var squares=document.querySelectorAll(".square");
    // var pickedColor=colors[3];
    var pickedColor=pickColor();
    var colorDisplay=document.querySelector("#colorDisplay");
    colorDisplay.textContent=pickedColor;
    var messageDisplay=document.querySelector("#messageDisplay");
    var changeColorBtn=document.querySelector("#changeColor");
    var modeButtons = document.querySelectorAll(".mode");
function init()
{
    
    changeColorBtn.addEventListener("click",function(){
        reset();
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
                changeColorBtn.textContent="Play Again?"

            }
            else{
                this.style.backgroundColor="#232323";
                messageDisplay.textContent="Try Again";
            }
        });
    }
    for(var i=0;i<modeButtons.length;i++)
    {
            modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent==="Easy"? numSquares=3:numSquares=6;
                reset();
        });
    }

}


function reset(){
    colors=generateRandomColors(numSquares);
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colors[i];
    }
    messageDisplay.textContent="";
    h1.style.backgroundColor="steelblue"; // background color
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    changeColorBtn.textContent="Reset Color";
    for(var i=0;i<squares.length;i++){
    
        if(colors[i])
        {
            squares[i].style.backgroundColor=colors[i];
            squares[i].style.display="block";
        }
        else
        {
            squares[i].style.display="none";
        }
    }


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

init();