// console.log("Connected")

work=prompt("What will you like to do?")
items=[]
// if(work==="new")
// {
//     // ask for the item
//     newItem=prompt("Which Item to add?")
//     items.push(newItem)
// }
// else if(work==="list"){
//     console.log(items)
// }
while(work!=="quit")
{
    if(work==="new")
    {
        // ask for the item
        newItem=prompt("Which Item to add?")
        items.push(newItem)
        console.log(newItem,' has been added')
    }
    else if(work==="list"){
        var i=0;
        items.forEach(function(listItem){
            console.log(i,listItem)
            i++;
        })
    }
    else if(work==="delete")
    {
        index=prompt('Enter the index that you want to delete');
        items.splice(index,1); // splice of 1 index from the given index
        console.log('Item Removed');
    }
    else if(work==='quit'){
        break;
    }
    work=prompt("What will you like to do?")


}
items.forEach(function(color){
    console.log(color);

});
    
console.log("The application is now dead!")