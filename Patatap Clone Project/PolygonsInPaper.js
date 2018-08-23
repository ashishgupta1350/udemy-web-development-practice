var triangle = new Path.RegularPolygon(new Point(80, 70), 3, 50);
triangle.fillColor = '#e9e9ff';
triangle.selected = true;

var decagon = new Path.RegularPolygon(new Point(200, 70), 10, 50);
decagon.fillColor = '#e9e9ff';
decagon.selected = true;

var rectangle=new Rectangle(new Point(10,10),new Point(50,50));
// this is a square
var cornerSize=new Size(10,10);
var path = new Path.RoundRectangle(rectangle,cornerSize);
path.fillColor="black";

var myPath = new Path();
myPath.strokeColor="black";
myPath.add(new Point(0,0), new Point(100,50));
myPath.insert(1, new Point(30, 40));
myPath.smooth();
decagon.smooth();
triangle.smooth();
path.smooth();
myPath.closed=true;
myPath.smooth();
myPath.center=new Point(100,100);