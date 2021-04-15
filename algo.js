// ------ ALGORITHMS!!! ----- //

let names = ["Nick", "Ernie", "Walt", "Jenna"]

//looping forward through an array

for(let i = 0; i < names.length; i++){
    console.log(names[i])
}

//looping backward through an array

for(let i = names.length - 1; i >=0; i--){
    console.log(names[i])
}

// while loop

let a = 1;
while(a <= 5){
    console.log(a)
    a++
}

// --- FIBONACCI SEQUENCE  --- //

// Creating the fibonacci(fib) function
function fib(n){
    let a = 0;
    let b = 1;

    for(let i = 0; i < n; i++){
        let x = a;
        a = b;
        b = x + b;
    }
    return a
}

for(let i = 0; i < 10; i++){
    console.log(fib(i))
}

// ----- SORTS ----- //

// bubble sort
function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                const x = array[j];
                array[j] = array[j + 1];
                array[j + 1] = x
            }
        }
    }
    return array;
}

console.log(bubbleSort([1, 2, 4, 8, 123, 345, 43, 32, 5000, 2700, 15, 325]));

// Merge sort
function mergeSort(data) {
    if (data.length < 2) {
        return data;
    }
    let midPoint = Math.round(data.length / 2);
    return merge(
        mergeSort(data.slice(0, midPoint)),
        mergeSort(data.slice(midPoint))
    );
}

function merge(left, right) {
    let out = []
    while (left.length && right.length) {
        out.push(left[0] < right[0] ? left.shift() : right.shift())
    }
    while (left.length) {
        out.push(left.shift());
    }
    while (right.length) {
        out.push(right.shift());
    }
    return out;
}
//console.log(mergeSort([5, 10, 50, 2, 4, 100, 125, 522, 17, 1, 900]))



// Quick sort
function quickSort(data) {
    if (data.length < 1) {
        return []
    }

    let left = [];
    let right = [];
    let pivot = data[0];

    for (var i = 0; i < data.length; i++) {
        if (data[i] < pivot) {
            left.push(data[i]);
        } else {
            right.push(data[i]);
        }
    }
    return [].concat(quickSort(left), pivot, quickSort(right));
}

console.log(quickSort([1, 5, 12, 4, 100, 7, 56, 42, 200]))








