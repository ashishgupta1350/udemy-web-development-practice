var answer=prompt("Are we there yet?")

var yesFlag=false

yesFlag= answer.indexOf('yes')



while(yesFlag == -1)
{
    var answer=prompt("Are we there yet?")
     yesFlag=false
    yesFlag= answer.indexOf('yes')
}

alert("Yay! We made it:)")

