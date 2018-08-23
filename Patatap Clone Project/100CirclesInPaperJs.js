for(var i =1;i<=10;i++){
    for(var j =1;j<=10;j++)
    {
        // draw 100 circles and that too with different centers
        var circle=new Path.Circle(new Point(i*50,j*50),10)
        circle.fillColor="rgb("+i*j*5+", 0, 0)";
    }
}
