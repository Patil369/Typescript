function Summation( Arr: number[]) : number
{
    var Ans : number = 0

    var i : number = 0

    for(i=0; i< Arr.length; i++)
    {
        Ans = Ans + Arr[i]
    
    }
    return Ans
}





var Arr : number[] = [23,6,7,4,5,7]

var Ans : number = 0

Ans = Summation(Arr)

console.log("Addition is "+ Ans)
