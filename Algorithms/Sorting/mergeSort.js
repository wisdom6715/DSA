const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  // divide the length of the array by two then use it to divide to right and left
  const middle = Math.floor(array.length / 2)
  let left = array.slice(0, middle)
  let right = array.slice(middle)
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
    for(let i = 0; i < right.length; i++){
        if(left[0] < right[i]){
            left.unshift(right.splice(i, 1)[0])
        }
    }
    for(let i = left.length; i >= 0; i++){
        if(right[0] && left[0] > right[0]){
            left.unshift(right.shift())
        }
    }
}

const answer = mergeSort(numbers);
console.log(answer);