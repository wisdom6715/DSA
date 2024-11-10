class Linkedlist{
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 0;
    }
    append(value){
        const newNode ={
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this
    }
}
const myLinkedList = new Linkedlist();
myLinkedList.append(5);
myLinkedList.append(10);
//// Building the appending feauture in linkedlists