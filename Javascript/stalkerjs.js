// // fname=prompt('What is your first name?')
// // lname=prompt('What is your last name?')
// // age=prompt('What is your age?')

// // console.log("Your name is : "+ fname+" "+lname)
// // console.log("Your age is " + age);


// age=prompt('What is your age?')
// console.log("you have been alive for roughly: " + age*365 + " days")


// check if age is a perfect square

var age=15;
var flag=false;

for( i=1;i<age;i++)
{
    if(i*i===age)
    {
        flag="true";
        console.log("Your age is a prefect square");
    }
}
if(flag!=="true")
{
    console.log("You are not perfect!");
}