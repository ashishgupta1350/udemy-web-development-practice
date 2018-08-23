// // Create a Paper.js Path to draw a line into it:
// var path = new Path();
// // Give the stroke a color
// path.strokeColor = 'black';
// var start = new Point(0, 0);
// // Move to start and draw a line from there
// path.moveTo(start);
// // Note the plus operator on Point objects.
// // PaperScript does that for us, and much more!
// path.lineTo(start + [ 1000, 1000 ]);

// var myPoint=new Point(10,20);
// console.log(myPoint);

// var myPath=new Path();
// myPath.strokeColor="black";
// myPath.add(myPoint);
// var myPoint2=new Point(200,200);
// console.log(myPoint2);
// myPath.add(myPoint2);

// ways to create a point in javascript???
// Why am I doing this? Because I have the time to do this
// Others will waste their time talking to people, talking to strangers and going on the random jargon of talks. Some will be busy in Gls, some just watching a movie. This is increasing my learning power. I can now read docs and enjoy the things that I always waanted to do! They are interesting, IDK where they will come in handy, but as show perspective, this project is a lot cooler than simply creating lifeless websites and boring talks.

var firstPoint=new Point(10,20);
var secondPoint=new Point(200,200);
// var thirdPoint=new Point(firstPoint);

// console.log(firstPoint+" "+secondPoint+" "+thirdPoint);

var myPath=new Path();
myPath.strokeColor="blue";
// myPath.add(firstPoint);
// myPath.add(secondPoint);
// console.log(secondPoint)
// path.add(thirdPoint);

// var mySize=new Size();

// console.log(mySize);

// mySize.height=10;
// mySize.width=10;

// var newMySize=new Size(100,100);
// console.log(newMySize);

var rect=new Rectangle(10,10,200,100);
console.log(rect);
myPath.add(rect);



var point1 = new Point(10, 20);
var point2 = point1 + { x: 100, y: 100 };
console.log(point2); // { x: 110, y: 120 }

// Adding size objects to points work too,
// forcing them to be converted to a point first
var point3 = point2 + new Size(50, 100);
console.log(point3); // { x: 160, y: 220 }

// And using the object notation for size works just as well:
var point4 = point3 + { width: 40, height: 80 };
console.log(point4); // { x: 200, y: 300 }

// How about adding a point in array notation instead?
var point5 = point4 + [100, 0];
console.log(point5); // { x: 300, y: 300 }

var point=new Point(1.2,1.8);

var rounded=point.round();
console.log(rounded);

var ceiled=point.ceil();
console.log(ceiled);

var floored= point.floor();
console.log(floored);