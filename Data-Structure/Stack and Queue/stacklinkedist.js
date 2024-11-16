class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.top = this.bottom;
        this.length = 0;
    }

    peek() {
    }

    push(value) {
        const newNode = new Node(value)
         newNode.next = this.top;  // Link new node to the previous top
        this.top = newNode;  
        this.length++;
        return this
    }

    pop() {
    }

    //isEmpty
}

const myStack = new Stack();
myStack.push(6)
myStack.push(3)
myStack.push(7)