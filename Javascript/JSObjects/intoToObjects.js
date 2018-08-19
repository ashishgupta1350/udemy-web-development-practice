var person ={
    name:"candy",
    age:32,
    place: "USA"

};

person.name

// there are no classes, but there are objects. There is no order in the objects, they are floating around them:)

var person=new object();

person.name="something"
person.age=0
person.city="somethingElse"




var posts= [
    {
        title:"cats are not dogs", 
        author:"ashish",
        comments:["The post is clear","Ill find you and Ill kill you"]
    }
    , 
    {title:"cats are actually better than dogs",
     author:"cat lover",
     comments:["AwesomePosts","Go to hell"]
    }
    ]

var someObject={
    friends:[
        {name:"malfoy"},
        {name:"Cabbie"},
        {name:"Coyle"}

    ],
    color:"baby blue",
    isEvil:"true"
}
someObject.friends[0].name;


var movies=[
    {
        name:"Avengers, Infinity War",
        rating:4.7,
        seen:true
    },
    {
        name:"Captain America, Winter soldier",
        rating:4.5,
        seen:false
    },
    {
        name:"Spiderman: Homecoming",
        rating:4.8,
        seen:true
    }

];

movies.forEach(function loopThrough(anObject)
{
    if(anObject.seen===false)
    {
        console.log("You have not seen "+anObject.name+" - "+anObject.rating+" stars");

    }
    else {
        console.log("You have seen "+anObject.name+" - "+anObject.rating+" stars");
        
    }
});
