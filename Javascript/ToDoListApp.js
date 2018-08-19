// console.log("Connected")

work=prompt("What will you like to do?")
items=[]
if(work==="new")
{
    // ask for the item
    newItem=prompt("Which Item to add?")
    items.push(newItem)
}
else if(work==="list"){
    console.log(items)
}
while(work!=="quit")
{
    work=prompt("What will you like to do?")
    if(work==="new")
    {
        // ask for the item
        newItem=prompt("Which Item to add?")
        items.push(newItem)
    }
    else if(work==="list"){
        console.log(items)
    }
    else if(work==='quit'){
        break;
    }


}
items.forEach(function(color){
    console.log(color);

});
    
console.log("The application is now dead!")