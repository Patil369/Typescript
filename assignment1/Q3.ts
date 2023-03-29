function Factor (No1 : number) : void
{
    let cnt : number = 0

    for( cnt = 1; cnt  < No1; cnt++ )
    {
        if( No1 % cnt == 0 )
        console.log( cnt )
    }
}

var No1 : number = 20;
Factor (No1)
