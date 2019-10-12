const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let newNode = new Node(data);
        if(this.length==0){
            this._head = newNode;
            this._tail = newNode;
        }
        else{
            newNode.prev = this._tail;
            this._tail.next = newNode;
            this._tail = newNode;                        
        }
        this.length++;
        return this;
    }

    head() {
        if (this.length == 0) return null;
        else return this._head.data;
    }

    tail() {
        if (this.length == 0) return null;
        else return this._tail.data;
    }

    at(index) {
        if(index == 0) return this._head.data;
        else if(index>=this.length) return -1;
        else{
            let currentNode = this._head;
            for(let i = 0; i<index; i++){
              currentNode = currentNode.next;              
            }
            return currentNode.data;
        }
    }

    insertAt(index, data) {
        let newNode = new Node(data);
        if(this.length == 0 || index == this.length) this.append(data)
        else if(index > this.length) return -1;
        else{
            let currentNode = this._head;
            for(let i = 0; i<index; i++){
              currentNode = currentNode.next;              
            }
            newNode.prev = currentNode.prev;
            newNode.next = currentNode;
            currentNode.prev.next = newNode;
            currentNode.prev = newNode;
        }
        this.length++;
        return this;
    }

    isEmpty() {
        if(this.length != 0) return false;
        else return true;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        if (this.length == 0) return -1;
        else if (this.length == 1) this.clear();
        else{
            let currentNode = this._head;
            for(let i = 0; i<index; i++){
              currentNode = currentNode.next;              
            }
            currentNode.prev.next = currentNode.next;
            currentNode.next.prev = currentNode.prev;
        }
        return this;
    }

    reverse() {
        if (this.length == 0) return null;
        else if (this.length == 1) this._head;
        else{
            let currentNode;
            let bufferNode;
            this._head.prev = this._head.next;
            this._head.next=null;
            currentNode = this._head.prev;
            for(let i = 1; i<this.length-1; i++){
              bufferNode = currentNode.prev;
              currentNode.prev = currentNode.next;
              currentNode.next = bufferNode;
              currentNode = currentNode.prev;
            }
            this._tail.next = this._tail.prev;
            this._tail.prev = null;
            bufferNode = this._tail;
            this._tail = this._head;
            this._head = bufferNode;
        }
        return this;
    }

    indexOf(data) {
        let currentNode = this._head;
        for(let i = 0; i<this.length; i++){
            if(currentNode.data == data) return i;
            else currentNode = currentNode.next;
          }
        return -1;
    }
}

module.exports = LinkedList;
