
// ======================
// Beginner Level Examples
// ======================

// Example 1: Basic Queue Using an Array
// A simple queue implementation using JavaScript arrays.

class Queue {
    constructor() {
        this.items = []; // Array to store queue elements
    }

    // Add an element to the end of the queue (enqueue)
    enqueue(element) {
        this.items.push(element);
    }

    // Remove an element from the front of the queue (dequeue)
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty"; // Check if the queue is empty
        }
        return this.items.shift(); // Remove and return the first element
    }

    // Get the front element of the queue without removing it
    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the queue
    size() {
        return this.items.length;
    }

    // Print the queue
    print() {
        console.log(this.items);
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Front element:", queue.front()); // Output: 10
queue.print(); // Output: [10, 20, 30]

queue.dequeue();
queue.print(); // Output: [20, 30]

// ======================
// Intermediate Level Examples
// ======================

// Example 2: Queue Using a Linked List
// A queue implementation using a singly linked list for better performance.

class QueueNode {
    constructor(data) {
        this.data = data; // Data stored in the node
        this.next = null; // Pointer to the next node
    }
}

class LinkedListQueue {
    constructor() {
        this.front = null; // Front of the queue
        this.rear = null; // Rear of the queue
        this.size = 0; // Size of the queue
    }

    // Add an element to the end of the queue (enqueue)
    enqueue(data) {
        const newNode = new QueueNode(data);
        if (this.isEmpty()) {
            this.front = newNode; // If the queue is empty, set the new node as both front and rear
            this.rear = newNode;
        } else {
            this.rear.next = newNode; // Link the new node to the rear
            this.rear = newNode; // Update the rear
        }
        this.size++;
    }

    // Remove an element from the front of the queue (dequeue)
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        const removedNode = this.front;
        this.front = this.front.next; // Move the front to the next node
        if (!this.front) {
            this.rear = null; // If the queue becomes empty, update the rear
        }
        this.size--;
        return removedNode.data;
    }

    // Get the front element of the queue without removing it
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.front.data;
    }

    // Check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Print the queue
    print() {
        let current = this.front;
        const elements = [];
        while (current) {
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements);
    }
}

const linkedListQueue = new LinkedListQueue();
linkedListQueue.enqueue(10);
linkedListQueue.enqueue(20);
linkedListQueue.enqueue(30);

console.log("Front element:", linkedListQueue.peek()); // Output: 10
linkedListQueue.print(); // Output: [10, 20, 30]

linkedListQueue.dequeue();
linkedListQueue.print(); // Output: [20, 30]

// ======================
// Advanced Level Examples
// ======================

// Example 3: Circular Queue
// A circular queue implementation to efficiently use fixed-size storage.

class CircularQueue {
    constructor(capacity) {
        this.capacity = capacity; // Maximum size of the queue
        this.items = new Array(capacity); // Array to store queue elements
        this.front = -1; // Front pointer
        this.rear = -1; // Rear pointer
        this.size = 0; // Current size of the queue
    }

    // Add an element to the queue (enqueue)
    enqueue(element) {
        if (this.isFull()) {
            return "Queue is full"; // Check if the queue is full
        }
        if (this.isEmpty()) {
            this.front = 0; // Initialize front if the queue is empty
        }
        this.rear = (this.rear + 1) % this.capacity; // Circular increment
        this.items[this.rear] = element;
        this.size++;
    }

    // Remove an element from the queue (dequeue)
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        const removedElement = this.items[this.front];
        if (this.front === this.rear) {
            this.front = -1; // Reset pointers if the queue becomes empty
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.capacity; // Circular increment
        }
        this.size--;
        return removedElement;
    }

    // Get the front element of the queue without removing it
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[this.front];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Check if the queue is full
    isFull() {
        return this.size === this.capacity;
    }

    // Print the queue
    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        let i = this.front;
        const elements = [];
        while (true) {
            elements.push(this.items[i]);
            if (i === this.rear) break;
            i = (i + 1) % this.capacity;
        }
        console.log(elements);
    }
}

const circularQueue = new CircularQueue(3);
circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);

console.log("Front element:", circularQueue.peek()); // Output: 10
circularQueue.print(); // Output: [10, 20, 30]

circularQueue.dequeue();
circularQueue.print(); // Output: [20, 30]

// Example 4: Priority Queue
// A priority queue where elements are dequeued based on priority.

class PriorityQueue {
    constructor() {
        this.items = []; // Array to store queue elements
    }

    // Add an element to the queue with a priority
    enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;
        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement); // Insert at the correct position
                added = true;
                break;
            }
        }
        if (!added) {
            this.items.push(queueElement); // Add to the end if it has the lowest priority
        }
    }

    // Remove the element with the highest priority
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift().element;
    }

    // Get the element with the highest priority without removing it
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0].element;
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Print the queue
    print() {
        console.log(this.items.map((item) => `${item.element} (${item.priority})`));
    }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Task 1", 3);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 2);

console.log("Front element:", priorityQueue.peek()); // Output: Task 2
priorityQueue.print(); // Output: ["Task 2 (1)", "Task 3 (2)", "Task 1 (3)"]

priorityQueue.dequeue();
priorityQueue.print(); // Output: ["Task 3 (2)", "Task 1 (3)"]

// Example 5: Deque (Double-Ended Queue)
// A deque allows insertion and removal from both ends.

class Deque {
    constructor() {
        this.items = []; // Array to store deque elements
    }

    // Add an element to the front of the deque
    addFront(element) {
        this.items.unshift(element);
    }

    // Add an element to the rear of the deque
    addRear(element) {
        this.items.push(element);
    }

    // Remove an element from the front of the deque
    removeFront() {
        if (this.isEmpty()) {
            return "Deque is empty";
        }
        return this.items.shift();
    }

    // Remove an element from the rear of the deque
    removeRear() {
        if (this.isEmpty()) {
            return "Deque is empty";
        }
        return this.items.pop();
    }

    // Get the front element without removing it
    peekFront() {
        if (this.isEmpty()) {
            return "Deque is empty";
        }
        return this.items[0];
    }

    // Get the rear element without removing it
    peekRear() {
        if (this.isEmpty()) {
            return "Deque is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Check if the deque is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Print the deque
    print() {
        console.log(this.items);
    }
}

const deque = new Deque();
deque.addFront(10);
deque.addRear(20);
deque.addFront(5);

console.log("Front element:", deque.peekFront()); // Output: 5
console.log("Rear element:", deque.peekRear()); // Output: 20
deque.print(); // Output: [5, 10, 20]

deque.removeFront();
deque.print(); // Output: [10, 20]

// ======================
// Conclusion
// ======================

// Queues are a fundamental data structure that follows the FIFO (First In, First Out) principle.
// They are useful for managing tasks, scheduling, and more. Understanding how to implement
// and manipulate queues is essential for solving many algorithmic problems.
