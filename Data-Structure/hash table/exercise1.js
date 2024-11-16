//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input){
    /// create set data structure and add each element of the array to it and it should return the 
    //// element that has occured before

    const setArr = new Set();
    for(let x = 0; x < input.length; x++){
        if(!setArr.has(input[x])){
            setArr.add(input[x])
        }else{
            return input[x]
        }
    }
    return undefined;
} 

firstRecurringCharacter([5,3,7,4,5])

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2