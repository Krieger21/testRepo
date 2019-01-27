
// //////// SET DATA STRUCTURE //////////
let mySet = function() {

    let collection = [];

    this.has = function(value) {
        return (collection.indexOf(value) !== -1)
    };

    this.add = function(element) {
        if (!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    };

    this.values = function() {
        return collection
    };

    this.remove = function(element) {
        if (this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true
        };
        return false;
    };

    this.size = function() {
        return collection.length;
    };
};

let setA = new mySet()

// setA.add(3)
// setA.add(4)
// setA.add(5)
// setA.add(7)
// setA.add('a')
// setA.add('b')
// setA.remove('a')
// console.log(setA.has('b'))
// console.log(setA.values())

// ////////////////////////////////////////

// //////// QUEUE DATA STRUCTURE //////////

let Queue = function() {
    collection = [];
    
    this.print = function() {
        console.log(collection)
    };

    this.enqueue = function(value) {
        collection.push(value);
    };

    this.dequeue = function(value) {
        return collection.shift()
    };

    this.front = function() {
        return collection[0];
    };

    this.size = function() {
        return collection.length;
    };

    this.isEmpty = function() {
        return (collection.length === 0);
    };

};

// let newQueue = new Queue()

// newQueue.enqueue(2)
// newQueue.enqueue(3)
// newQueue.enqueue(4)
// newQueue.enqueue(5)
// newQueue.enqueue(6)
// newQueue.print()
// console.log(newQueue.size())


// Average	 	 	 
// Access	Search	Insertion	Deletion
// O(n)	O(n)	O(1)	O(n)

///////////////////// STACK DATA STRUCTURE //////////////

function Stack() {
    this.stack = [];
  }
  
  Stack.prototype.push = function(value) {
    this.stack.push(value);
  };
  Stack.prototype.pop = function() {
    return this.stack.pop();
  };
  Stack.prototype.peek = function() {
    return this.stack[this.stack.length - 1];
  };
  Stack.prototype.length = function() {
    return this.stack.length;
  };
  Stack.prototype.print = function() {
    console.log(this.stack);
  };
  
//   var stack = new Stack();
//   stack.push(4)
//   stack.push(5)
//   stack.push(6)
//   stack.push(7)
//   stack.print()

// Average	 	 	 
// Access	Search	Insertion	Deletion
// O(n)	O(n)	O(1)	O(1)
