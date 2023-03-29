class Arithmetic
{
    No1 : number;
    No2 : number;

    constructor(N1 : number,N2 : number)
    {
        this.No1 = N1;
        this.No2 = N2;
    }

    Addition() : number
    {
        let Add : number = 0;
        Add = this.No1 + this.No2;

        return Add;
    }

    Substraction() : number
    {
        let Sub : number = 0;
        Sub = this.No1 - this.No2;

        return Sub;
    }

    Multiplication() : number
    {
        let Mul : number = 0;
        Mul = this.No1 * this.No2;

        return Mul;
    }
    
    Division() : number
    {
        let Div : number = 0;
        Div = this.No1 / this.No2;

        return Div;
    }
}

var obj1 = new Arithmetic(20, 10);
 var obj2 = new Arithmetic(50,40);

var ret : number = 0;
ret = obj1.Addition();
console.log("Addition of first objective is : "+ ret);

ret = obj1.Substraction();
console.log("Substraction of first objective is: "+ ret);

ret = obj1.Multiplication();
console.log("Multiplication of first objective is : "+ ret);

ret = obj1.Division();
console.log("Division of first objective is : "+ ret);

ret = obj2.Addition();
console.log("Addition of Second objective is : "+ ret);

ret = obj2.Substraction();
console.log("Substraction of Second objective is: "+ ret);

ret = obj2.Multiplication();
console.log("Multiplication of Second objective is : "+ ret);

ret = obj2.Division();
console.log("Division of Second objective is : "+ ret);

