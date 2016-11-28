class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    
    move(x,y){
       this.x += x;
       this.y +=y;
    }
    
    print()
    {
        console.log(this.x+','+this.y);
    }
    
    distance(point){
        return Math.sqrt((this.x-point.x)*(this.x-point.x)+(this.y-point.y)*(this.y-point.y)).toFixed(2);
    }
}

var point = new Point(2,3);
point.move(1,1);
point.print();
console.log(point.distance(new Point(0,0)));