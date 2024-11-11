class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value) {
        const newMember = new Node(value);
        newMember.next = this.first
        this.first = newMember;
        this.length++;
        return this;
    }
    dequeue() {
       this.first =  this.first.next
        this.length--;
        return this
    }
    //isEmpty;
  }

  const myQueue = new Queue();

  //Joy
  //Matt
  //Pavel
  //Samir
myQueue.enqueue('joy')
myQueue.enqueue('Matt')
myQueue.enqueue('Pavel')
myQueue.enqueue('Samir')
myQueue.dequeue()