
// ======================
// Beginner Level Examples
// ======================

// Example 1: Basic Doubly Linked List Node
// A simple node structure for a doubly linked list.

class DoublyNode {
    constructor(data) {
        this.data = data; // Data stored in the node
        this.prev = null; // Pointer to the previous node (initially null)
        this.next = null; // Pointer to the next node (initially null)
    }
}

// Example 2: Creating and Linking Nodes
// Demonstrates how to create nodes and link them manually.

const node1 = new DoublyNode(10); // Create the first node with data 10
const node2 = new DoublyNode(20); // Create the second node with data 20
const node3 = new DoublyNode(30); // Create the third node with data 30

node1.next = node2; // Link node1 to node2
node2.prev = node1; // Link node2 back to node1
node2.next = node3; // Link node2 to node3
node3.prev = node2; // Link node3 back to node2

console.log(node1.data); // Output: 10
console.log(node1.next.data); // Output: 20
console.log(node1.next.next.data); // Output: 30
console.log(node3.prev.data); // Output: 20

// ======================
// Intermediate Level Examples
// ======================

// Example 3: Doubly Linked List Class
// A class to manage a doubly linked list with basic operations.

class DoublyLinkedList {
    constructor() {
        this.head = null; // Head of the list (initially null)
        this.tail = null; // Tail of the list (initially null)
    }

    // Add a node to the end of the list
    append(data) {
        const newNode = new DoublyNode(data);
        if (!this.head) {
            this.head = newNode; // If the list is empty, set the new node as the head and tail
            this.tail = newNode;
        } else {
            newNode.prev = this.tail; // Link the new node to the current tail
            this.tail.next = newNode; // Link the current tail to the new node
            this.tail = newNode; // Update the tail to the new node
        }
    }

    // Print the list from head to tail
    printForward() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Print the list from tail to head
    printBackward() {
        let current = this.tail;
        while (current) {
            console.log(current.data);
            current = current.prev;
        }
    }
}

const list = new DoublyLinkedList();
list.append(10);
list.append(20);
list.append(30);

console.log("Forward:");
list.printForward(); // Output: 10, 20, 30

console.log("Backward:");
list.printBackward(); // Output: 30, 20, 10

// Example 4: Inserting at the Beginning
// Adds a node to the beginning of the list.

DoublyLinkedList.prototype.prepend = function (data) {
    const newNode = new DoublyNode(data);
    if (!this.head) {
        this.head = newNode; // If the list is empty, set the new node as the head and tail
        this.tail = newNode;
    } else {
        newNode.next = this.head; // Link the new node to the current head
        this.head.prev = newNode; // Link the current head back to the new node
        this.head = newNode; // Update the head to the new node
    }
};

list.prepend(5);
console.log("Forward after prepend:");
list.printForward(); // Output: 5, 10, 20, 30

// ======================
// Advanced Level Examples
// ======================

// Example 5: Deleting a Node by Value
// Deletes the first node with the specified value.

DoublyLinkedList.prototype.delete = function (data) {
    if (!this.head) return; // If the list is empty, do nothing

    let current = this.head;
    while (current) {
        if (current.data === data) {
            if (current === this.head) {
                // If the node to delete is the head
                this.head = current.next;
                if (this.head) {
                    this.head.prev = null; // Update the new head's prev pointer
                } else {
                    this.tail = null; // If the list becomes empty, update the tail
                }
            } else if (current === this.tail) {
                // If the node to delete is the tail
                this.tail = current.prev;
                this.tail.next = null;
            } else {
                // If the node to delete is in the middle
                current.prev.next = current.next;
                current.next.prev = current.prev;
            }
            return;
        }
        current = current.next;
    }
};

list.delete(20);
console.log("Forward after delete:");
list.printForward(); // Output: 5, 10, 30

// Example 6: Reversing the Doubly Linked List
// Reverses the doubly linked list in place.

DoublyLinkedList.prototype.reverse = function () {
    let current = this.head;
    let temp = null;

    while (current) {
        temp = current.prev; // Swap prev and next pointers
        current.prev = current.next;
        current.next = temp;
        current = current.prev; // Move to the next node
    }

    if (temp) {
        // Update the head and tail
        this.tail = this.head;
        this.head = temp.prev;
    }
};

list.reverse();
console.log("Forward after reverse:");
list.printForward(); // Output: 30, 10, 5

// Example 7: Detecting a Cycle in the Doubly Linked List
// Checks if the doubly linked list has a cycle (advanced).

DoublyLinkedList.prototype.hasCycle = function () {
    if (!this.head) return false; // If the list is empty, no cycle

    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
        slow = slow.next; // Move slow pointer by 1 step
        fast = fast.next.next; // Move fast pointer by 2 steps

        if (slow === fast) {
            return true; // Cycle detected
        }
    }

    return false; // No cycle
};

// Creating a cycle for testing
list.tail.next = list.head; // Creates a cycle: 30 -> 10 -> 5 -> 30
list.head.prev = list.tail; // Completes the cycle

console.log("Has cycle:", list.hasCycle()); // Output: true

// ======================
// Conclusion
// ======================

// Doubly linked lists are an extension of singly linked lists, allowing
// traversal in both directions. They are useful for dynamic data storage
// and operations like insertion, deletion, and traversal. Understanding
// how to implement and manipulate doubly linked lists is essential for
// solving many algorithmic problems.
