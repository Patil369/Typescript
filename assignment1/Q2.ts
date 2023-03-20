function Area( Rad : number , Pi : number ) : number
{
    let Ans : number = 0

    Ans = Pi * ( Rad * Rad )

    return Ans

}

var Rad : number = 5

var Pi : number = 3.14

var Ans : number = 0

Ans = Area( Rad, Pi ) 

console.log ( "Area of Circle : " + Ans )
