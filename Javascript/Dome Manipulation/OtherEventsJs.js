// var firstLi= document.querySelector("li");
// // alert(firstLi)
// firstLi.addEventListener("mouseover",function()
// {
//     // alert("Hovered Over");
//     firstLi.style.color="green";
// })

// firstLi.addEventListener("mouseout",function()
// {
//     // alert("Hovered Over");
//     firstLi.style.color="black";

// })


var lis= document.querySelectorAll("li");
// alert(firstLi)

for(var i=0;i<lis.length;i++){
    lis[i].addEventListener("mouseover",function()
    {
        // alert("Hovered Over");
        // this.style.color="green";
        this.classList.add("selected")

    });
    lis[i].addEventListener("mouseout",function()
    {
        // alert("Hovered Over");
        // this.style.color="black";
        this.classList.remove("selected")

    });
    lis[i].addEventListener("click",function(){
        this.classList.toggle("done");

    });
}
