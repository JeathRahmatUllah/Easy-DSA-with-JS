
// ======================
// Beginner Level Examples
// ======================

// Example 1: Basic Singly Linked List Node
// A simple node structure for a singly linked list.

class Node {
    constructor(data) {
        this.data = data; // Data stored in the node
        this.next = null; // Pointer to the next node (initially null)
    }
}

// Example 2: Creating and Linking Nodes
// Demonstrates how to create nodes and link them manually.

const node1 = new Node(10); // Create the first node with data 10
const node2 = new Node(20); // Create the second node with data 20
const node3 = new Node(30); // Create the third node with data 30

node1.next = node2; // Link node1 to node2
node2.next = node3; // Link node2 to node3

console.log(node1.data); // Output: 10
console.log(node1.next.data); // Output: 20
console.log(node1.next.next.data); // Output: 30

// ======================
// Intermediate Level Examples
// ======================

// Example 3: Singly Linked List Class
// A class to manage a singly linked list with basic operations.

class SinglyLinkedList {
    constructor() {
        this.head = null; // Head of the list (initially null)
    }

    // Add a node to the end of the list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode; // If the list is empty, set the new node as the head
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next; // Traverse to the end of the list
            }
            current.next = newNode; // Add the new node at the end
        }
    }

    // Print the list
    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const list = new SinglyLinkedList();
list.append(10);
list.append(20);
list.append(30);

list.print(); // Output: 10, 20, 30

// Example 4: Inserting at the Beginning
// Adds a node to the beginning of the list.

SinglyLinkedList.prototype.prepend = function (data) {
    const newNode = new Node(data);
    newNode.next = this.head; // Point the new node to the current head
    this.head = newNode; // Set the new node as the head
};

list.prepend(5);
list.print(); // Output: 5, 10, 20, 30

// ======================
// Advanced Level Examples
// ======================

// Example 5: Deleting a Node by Value
// Deletes the first node with the specified value.

SinglyLinkedList.prototype.delete = function (data) {
    if (!this.head) return; // If the list is empty, do nothing

    // If the head node is the one to be deleted
    if (this.head.data === data) {
        this.head = this.head.next; // Move the head to the next node
        return;
    }

    let current = this.head;
    while (current.next) {
        if (current.next.data === data) {
            current.next = current.next.next; // Skip the node to delete it
            return;
        }
        current = current.next;
    }
};

list.delete(20);
list.print(); // Output: 5, 10, 30

// Example 6: Reversing the Linked List
// Reverses the linked list in place.

SinglyLinkedList.prototype.reverse = function () {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
        next = current.next; // Store the next node
        current.next = prev; // Reverse the pointer
        prev = current; // Move prev and current one step forward
        current = next;
    }

    this.head = prev; // Set the new head
};

list.reverse();
list.print(); // Output: 30, 10, 5

// Example 7: Detecting a Cycle in the Linked List
// Checks if the linked list has a cycle (advanced).

SinglyLinkedList.prototype.hasCycle = function () {
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
list.head.next.next.next = list.head; // Creates a cycle: 30 -> 10 -> 5 -> 30

console.log(list.hasCycle()); // Output: true

// ======================
// Conclusion
// ======================

// Singly linked lists are a fundamental data structure in computer science.
// They are useful for dynamic data storage and operations like insertion,
// deletion, and traversal. Understanding how to implement and manipulate
// linked lists is essential for solving many algorithmic problems.
