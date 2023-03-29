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
class circlex extends Circle
{
        constructor(Data:number)
        {
            super(Data);
        }
    circumference():number
    {
      let Ans:number=0;
      Ans=2*this.PI*this.Radius;
      return Ans;
    }
}
var obj1=new circlex(10)
var ret:number=0
ret=obj1.Area()

console.log("Area of Circle: "+ret)

ret=obj1.circumference()

console.log("Circumference of Circle: "+ret)

