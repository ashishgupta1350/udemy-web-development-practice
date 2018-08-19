someObject={
    items:["ginger","orange","books","pen"]
};

someObject.print = function()
{
    this.items.forEach(function(key){
        console.log(key);
    });
};
someObject.print();