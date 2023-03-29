class Circle
{
    Radius:number
    PI:number
    constructor(N1:number , N2:number=3.14)
    {
        this.Radius=N1
        this.PI=N2
    }
    Area():number
    {
     let Area:number=0
     
     Area=this.PI*this.Radius*this.Radius;
     return Area;
    }
  
}
var obj1=new Circle(10)
var ret:number
ret=obj1.Area()

console.log("Area of Circle: "+ret)