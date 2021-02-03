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



// --- FIBONACCI SEQUENCE  --- //

// Creating the fibonacci(fib) function
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

// calling the fib function in a for loop to log the sequence
for(let i = 0; i < 10; i++)
{
    console.log(fib(i));
}

// ----- SORT ----- //



// bubble sort
function bubbleSort(array){
    for(let i = 0; i < array.length -1; i++){
        for(let j = 0; j < array.length -1 -i; j++){
            if(array[j] > array[j + 1]){
                const x = array[j];
                array[j] = array[j + 1];
                array[j + 1 ] = x
            }
        }
    }
    return array;
}

console.log(bubbleSort([1, 2, 4, 8, 123, 345, 43, 32, 5000, 2700, 15, 325]));








