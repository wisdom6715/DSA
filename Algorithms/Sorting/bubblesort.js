const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    //Code here
    for(let i = 0; i < array.length; i++){
        for(let x = 0; x < array.length; x++){
            if(array[x] > array[x+1]){
                [array[x], array[x+1] ] = [array[x+1], array[x] ]
                // OR
                // let temp = array[x]
                // array[x] = array[x+1]
                // array[x+1] = temp;
            }
            
        }
    }
}

bubbleSort(numbers);
console.log(numbers);