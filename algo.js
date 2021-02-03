// ------ ALGORITHMS!!! ----- //



// basic for loops //


let arr = ["Nick", "walt", "Ernie"];

//looping forward through an array
for(let i = 0; i < arr.length; i++)
{
    console.log(arr[i]);
}


//looping bnackward through an array

let array = ["uno", "dos", "tres"];

for(let i = array.length - 1; i >= 0; i--)
{
    console.log(array[i]);
}

// basic while loop

let a = 1;

while(a <=5)
{
    console.log(a);
    a++;
}



// fibonacci sequence

function fib(n)
{
    let a = 0;
    let b = 1;
    for(let i = 0; i< n; i ++)
    {
        let x = a;
        a = b;
        b = b + x;
    }
    return a;
}

for(let i = 0; i < 10; i++)
{
    console.log(fib(i));
}


