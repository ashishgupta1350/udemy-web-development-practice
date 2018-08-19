var myButtons = document.querySelectorAll("button");

console.log("My buttons count is : "+ myButtons.length);

var b1=myButtons[0];
var b2=myButtons[1];
var b3=myButtons[2]; 


var score=document.querySelectorAll(".score")

var score1=score[0];
var score2=score[1];

var n1=Number(score1.innerText);
var n2=Number(score2.innerText);

var winLimit=5;
// document.querySelector("input").textContent = winLimit;

// document.querySelector("input").addEventListener("click",function()
// {
    
//     winLimit=Number(document.querySelector("input").textContent); 
//     score1.textContent=0;
//     score2.textContent=0;
//     n1=0;
//     n2=0;
//     // console.clear()
//     document.querySelector(".winLimit").innerText=winLimit;
//     console.log(winLimit)
// });

inputNumber=document.querySelector("input")
inputNumber.value=5;


inputNumber.addEventListener("change",function()
{
    winLimit=inputNumber.value;
    document.querySelector(".winLimit").textContent=winLimit;

    score1.textContent=0;
    score2.textContent=0;
    n1=0;
    n2=0;
    console.clear()

});

b1.addEventListener("click",function()
{
    // update the counter
    n1=Number(score1.innerText);
    if(n1<winLimit && n2<winLimit)
    {
        console.log(n1 + " is the score of first player");
        n1++;
        score1.textContent=n1;
    }
    if(n1==winLimit)
    {
        score1.classList.add("winner")
    }
});

b2.addEventListener("click",function()
{
    // update the counter
    n2=Number(score2.innerText);
    if(n2<winLimit && n1<winLimit)
    {
        console.log(n2 + " is the score of second player");
        n2++;
        score2.textContent=n2;
    }
    if(n2==winLimit)
    {
        score2.classList.add("winner")
    }
});

b3.addEventListener("click",function()
{
    // update the counter
    // reset both the counters and reset the winFlag
    score1.textContent=0;
    score2.textContent=0;
    n1=0;
    n2=0;
    score1.classList.remove("winner");
    score2.classList.remove("winner");

    console.clear()
});


