var myNum=Number(9);

var someNum=Number(prompt("Please enter a number(Numeric)"))
while(isNaN(someNum))
{
    someNum=Number(prompt("Please enter a number(Numeric)"))
}
if(someNum<myNum)
{
    console.log("Too low")
    alert("Too low")

}
else if(someNum>myNum)
{
    console.log("Too High")
    alert("Too high")

}
else{
    console.log("Got it!")
    console.log("Get out of here now!")

}

