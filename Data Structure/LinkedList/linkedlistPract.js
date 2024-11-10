class Linkedlist{
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 0;
    }
    // Appending elements in linkedlists
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
    // Prepending elements in linkedlists
    prepend(value){
        const newNode ={
            value: value,
            next: this.head
        }
        this.head = newNode;
        this.length++;
        return this
    }
    printLists(){
        const ListArray = [];
        let currentNode = this.head
        while (currentNode !== null) {
            this.head = currentNode;
            ListArray.push(currentNode.value)
            currentNode = currentNode.next
        }
        return ListArray
    }
}
const myLinkedList = new Linkedlist();
myLinkedList.append(5);
myLinkedList.append(10);
myLinkedList.printLists()
