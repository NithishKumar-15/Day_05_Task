//https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

class Circle{
    static radius=1.0;
    static color='red';
    
    constructor(){
        return "Its an constructor";
    }
    
    // constructor(radius){
    //     return `The radius is:${radius}`;
    // }
    
    // constructor(radius,color){
    //     return `The radius is:${radius} and color is:${color}`;
    // }

    getRadius(Diameter){
        return Diameter/2;
    }

    setRadius(radius){
        return radius;
    }

    getColor(){
    return this.color;
    }

    setColor(Color){
        return Color;
    }

    toString(){
        return `Circle[radius=${this.radius} color=${this.color}]`;
    }

    getArea(){
        var r=20
        var area=2*Math.PI*r*r;
        return area;
    }

    circumfurence(){
        return 2/Math.PI*20;
    }
}

var obj=new Circle();
var obj1=new Circle(1.20);
var obj2=new Circle(1.20,"Blue");
console.log(obj);
console.log(obj1);
console.log(obj2);
console.log(obj.getRadius(46));
console.log(obj.setRadius(46));
console.log(obj.getColor());
console.log(obj.setColor("Red"));
console.log(obj.toString());
console.log(obj.getArea());
console.log(obj.circumfurence());