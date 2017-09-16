const Node = require('./node');

class LinkedList {
    constructor() {
      this._head = null;
      this._tail = null;
      this.length = 0;
    }

    append(data) {
      if (this.isEmpty()) this._head = this._tail = new Node(data);
      else {
        this._tail.next = new Node(data, this._tail);
        this._tail = this._tail.next;
      }
      this.length++;
      return this;
    }

    head() {
      return (this._head) ? this._head.data : null;
    }

    tail() {
      return (this._tail) ? this._tail.data : null;
    }

    at(index) {
      let node = this._head;
      while(true) {
        if (index === 0) return node.data;
        node = node.next;
        index--;
      }
    }

    insertAt(index, data) {
      let node = this._head;
      if (!node) return this.append(data);
      while(true) {
        if (index === 0) {
          node.prev = new Node(data, node.prev, node);
          node.prev.prev.next = node.prev;
          return this;
        }
        node = node.next;
        index--;
      }
    }

    isEmpty() {
      return (!this.length) ? true : false;
    }

    clear() {
      this._head = null;
      this._tail = null;
      this.length = 0;
      return this;
    }

    deleteAt(index) {
      let node = this._head;
      while(true) {
        if (index === 0) {
          if (node.prev) node.prev.next = node.next;
          if (node.next) node.next.prev = node.prev;
          return this;
        }
        node = node.next;
        index--;
      }
    }

    reverse() {
      let tmp = this._head;
      this._head = this._tail;
      this._tail = tmp;
      let node = this._head;
      while(true) {
        let tmp = node.prev;
        node.prev = node.next;
        node.next = tmp;
        if (!node.next) return this;
        node = node.next;
      }
    }

    indexOf(data, index = 0) {
      let node = this._head;
      while(true) {
        if (node.data === data) return index;
        else if (!node.next) return -1;
        node = node.next;
        index++;
      }
    }
}

let a = new LinkedList();
console.log(a.append(4).reverse().deleteAt(0).clear().insertAt(0, 3));

module.exports = LinkedList;
