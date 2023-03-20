function Maximum(A : number, B : number, C : number) : number
{
    if(A > B && A > C)
    {
        return A
    }
    else if(B > A && B > C)
    {
        return B
    }
    else
    {
        return C
    }
}

var No1 : number = 23

var No2 : number = 89

var No3 : number = 6

var Ret : number = 0

Ret = Maximum(No1, No2,No3)

console.log( "Maximum number is:" + Ret )
