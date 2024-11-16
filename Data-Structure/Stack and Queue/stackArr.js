class arrStack{
    constructor(value){
        this.array = [];
        this.length = 0;
    }
    push(value){
        this.array[this.length] = value
        this.length++;
        return this.array;
    }
    pop(){
        this.array.pop()
        this.length--;
        return this.array;
    }
    peek(){
        return this.array[length-1]
    }
}
const myStack = new arrStack();
myStack.push(10)
myStack.push(11)
myStack.push(13)
myStack.push(17)
myStack.peek()