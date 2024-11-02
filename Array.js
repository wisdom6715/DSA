class dynamicArray{
    constructor(length, item){
        this.length = 0;
        this.item = [];
    }
    get(index){
        // return the element at the index given
        return this.item[index];
    }
    push(element){
        /// add the element to the array 
        this.item[this.length] = element
        this.length++
        return this.length;
        /// incement the length conunt.
    }
    pop(lastItem){
        this.item[this.length-1] = lastItem;
        delete this.item[this.length -1]
        this.length--;
        return lastItem;
    }
}
const array = new dynamicArray();
array.push("you")
array.push("are")
array.push("nice")
array.pop()
array.pop()
console.log(array);