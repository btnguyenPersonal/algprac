class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
class DoubleLinkedList {
    constructor(value) {
        this.head = new Node(undefined);
        this.tail = new Node(undefined);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        if (value !== undefined) {
            this.insertFront(value);
        }
    }
    peek() {
        return this.tail.prev === this.head ? undefined : this.tail.prev.value;
    }
    pop() {
        if (this.tail.prev === this.head) {
            return undefined;
        }
        let temp = this.tail.prev.value;
        this.tail.prev.prev.next = this.tail;
        this.tail.prev = this.tail.prev.prev;
        return temp;
    }
    push(value) {
        let n = new Node(value);
        n.next = tail;
        n.prev = tail.prev;
        tail.prev.next = n;
        tail.prev = n;
    }
    removeAtIndex(index) {
        if (index === undefined) {
            throw new Error('index not specified');
        }
        if (index < 0) {
            throw new Error('index ' + index + ' is negative');
        }
        let temp = this.head.next;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
            if (temp === this.tail) {
                throw new Error('index ' + index + ' not found');
            }
        }
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
    }
    getAtIndex(index) {
        if (index === undefined) {
            throw new Error('index not specified');
        }
        if (index < 0) {
            throw new Error('index ' + index + ' is negative');
        }
        let temp = this.head.next;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
            if (temp === this.tail) {
                throw new Error('index ' + index + ' not found');
            }
        }
        return temp.value;
    }
    insertAtIndex(value, index) {
        if (index === undefined) {
            throw new Error('index not specified');
        }
        if (index < 0) {
            throw new Error('index ' + index + ' is negative');
        }
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
            if (temp === this.tail) {
                throw new Error('index ' + index + ' not found');
            }
        }
        let n = new Node(value);
        n.next = temp.next;
        n.prev = temp;
        temp.next.prev = n;
        temp.next = n;
    }
    insertFront(value) {
        let n = new Node(value);
        n.next = this.head.next;
        n.prev = this.head;
        this.head.next.prev = n;
        this.head.next = n;
    }
    print() {
        let n = this.head.next;
        while (n.next != undefined) {
            console.log(n.value);
            let c = { ...n }
            n = n.next;
        }
    }
}

const list = new DoubleLinkedList();
for (let i = 0; i < 100; i++) {
    list.push(i);
}
list.print();

