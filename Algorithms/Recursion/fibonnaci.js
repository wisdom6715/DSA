// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8


function fibonacciIterative(n){
    let arr = [0, 1]
    let result = 1;
    let time = n - arr.length
    for(let x = 0; x < time; x++ ){
        if(n == 2 ){
            return arr;
            break;
        }
        if (n == 1){
            arr.pop()
            return arr
        } 
        if(n > 2){
            result = arr[x] + arr[x + 1]
            arr.push(result)
        }
    }
    return arr;
}
fibonacciIterative(7)


function fibonacciRecursive(n) {
  
}