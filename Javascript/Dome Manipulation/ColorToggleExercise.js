// // alert("loaded")
// var someBtn =  document.querySelector("button");
// console.log(someBtn)

// someBtn.addEventListener("click",function()
// {
//     document.querySelector("body").style.background="purple";
// });

// document.querySelector("button").addEventListener("click",function(){document.querySelector("body").style.background="purple";});


// bodyEle=document.querySelector("body")
// document.querySelector("button").addEventListener("click",function()
// {
//     if(bodyEle.style.background==="white") 
//     {
//         document.querySelector("body").style.background="purple";
    
//     }
//     else
//     {
//         bodyEle.style.background="white";
    
//     }
// });

bodyEle=document.querySelector("body")
var myButton= document.querySelector("button")

myButton.addEventListener("click",function()
{
    document.body.classList.toggle("purple");
});