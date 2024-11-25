

  function findFactorialIterative(number) {
    //code here
      for(let i = number; i > 1; i--){
          number *= i-1
  
      }
    return number;
  }
  findFactorialIterative(6)

  function findFactorialRecursively(number){
    let answer = 1;
    if(number == 0 || number == 1){ 
      return answer; 
    }
    return number * findFactorialRecursively(number - 1)
  }
