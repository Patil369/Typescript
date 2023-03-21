function Maximum( Arr : number[]) : number
{
    var Max : number = 0

    var i : number = 0

    for( i=0; i<Arr.length; i++)
    {
        if(Arr[i]>Max)
        {
            Max = Arr[i]
        }
    }
    return Max
}

var Arr : number[] = [ 23 , 89 , 6 , 29 , 56 , 45 , 77 , 32 ]

var Max : number = 0

Max = Maximum(Arr)

console.log("Maximum number is: "+Max)
