
// ======================
// Beginner Level Examples
// ======================

// Example 1: Basic Stack Using an Array
// A simple stack implementation using JavaScript arrays.

class Stack {
    constructor() {
        this.items = []; // Array to store stack elements
    }

    // Add an element to the top of the stack (push)
    push(element) {
        this.items.push(element);
    }

    // Remove an element from the top of the stack (pop)
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty"; // Check if the stack is empty
        }
        return this.items.pop(); // Remove and return the top element
    }

    // Get the top element of the stack without removing it (peek)
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.items.length;
    }

    // Print the stack
    print() {
        console.log(this.items);
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top element:", stack.peek()); // Output: 30
stack.print(); // Output: [10, 20, 30]

stack.pop();
stack.print(); // Output: [10, 20]

// ======================
// Intermediate Level Examples
// ======================

// Example 2: Stack Using a Linked List
// A stack implementation using a singly linked list for better performance.

class StackNode {
    constructor(data) {
        this.data = data; // Data stored in the node
        this.next = null; // Pointer to the next node
    }
}

class LinkedListStack {
    constructor() {
        this.top = null; // Top of the stack
        this.size = 0; // Size of the stack
    }

    // Add an element to the top of the stack (push)
    push(data) {
        const newNode = new StackNode(data);
        newNode.next = this.top; // Link the new node to the current top
        this.top = newNode; // Update the top to the new node
        this.size++;
    }

    // Remove an element from the top of the stack (pop)
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        const removedNode = this.top;
        this.top = this.top.next; // Move the top to the next node
        this.size--;
        return removedNode.data;
    }

    // Get the top element of the stack without removing it (peek)
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.top.data;
    }

    // Check if the stack is empty
    isEmpty() {
        return this.size === 0;
    }

    // Print the stack
    print() {
        let current = this.top;
        const elements = [];
        while (current) {
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements);
    }
}

const linkedListStack = new LinkedListStack();
linkedListStack.push(10);
linkedListStack.push(20);
linkedListStack.push(30);

console.log("Top element:", linkedListStack.peek()); // Output: 30
linkedListStack.print(); // Output: [30, 20, 10]

linkedListStack.pop();
linkedListStack.print(); // Output: [20, 10]

// ======================
// Advanced Level Examples
// ======================

// Example 3: Balanced Parentheses Checker
// A stack-based solution to check if parentheses in a string are balanced.

function isBalancedParentheses(str) {
    const stack = new Stack();
    for (let char of str) {
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char); // Push opening brackets onto the stack
        } else if (char === ")" || char === "}" || char === "]") {
            if (stack.isEmpty()) {
                return false; // If the stack is empty, it's unbalanced
            }
            const top = stack.pop();
            if (
                (char === ")" && top !== "(") ||
                (char === "}" && top !== "{") ||
                (char === "]" && top !== "[")
            ) {
                return false; // If the brackets don't match, it's unbalanced
            }
        }
    }
    return stack.isEmpty(); // If the stack is empty, it's balanced
}

console.log("Is balanced:", isBalancedParentheses("({[]})")); // Output: true
console.log("Is balanced:", isBalancedParentheses("({[})")); // Output: false

// Example 4: Postfix Expression Evaluator
// A stack-based solution to evaluate postfix expressions.

function evaluatePostfix(expression) {
    const stack = new Stack();
    for (let char of expression) {
        if (!isNaN(char)) {
            stack.push(Number(char)); // Push numbers onto the stack
        } else {
            const operand2 = stack.pop(); // Pop the top two operands
            const operand1 = stack.pop();
            switch (char) {
                case "+":
                    stack.push(operand1 + operand2);
                    break;
                case "-":
                    stack.push(operand1 - operand2);
                    break;
                case "*":
                    stack.push(operand1 * operand2);
                    break;
                case "/":
                    stack.push(operand1 / operand2);
                    break;
                default:
                    throw new Error("Invalid operator");
            }
        }
    }
    return stack.pop(); // The final result is the remaining element in the stack
}

console.log("Postfix result:", evaluatePostfix("23*5+")); // Output: 11

// Example 5: Min Stack
// A stack that supports retrieving the minimum element in constant time.

class MinStack {
    constructor() {
        this.stack = new Stack(); // Main stack
        this.minStack = new Stack(); // Stack to track minimum elements
    }

    // Add an element to the stack
    push(element) {
        this.stack.push(element);
        if (this.minStack.isEmpty() || element <= this.minStack.peek()) {
            this.minStack.push(element); // Push to minStack if it's the new minimum
        }
    }

    // Remove an element from the stack
    pop() {
        const poppedElement = this.stack.pop();
        if (poppedElement === this.minStack.peek()) {
            this.minStack.pop(); // Pop from minStack if the popped element is the minimum
        }
        return poppedElement;
    }

    // Get the top element of the stack
    peek() {
        return this.stack.peek();
    }

    // Get the minimum element in the stack
    getMin() {
        return this.minStack.peek();
    }

    // Print the stack
    print() {
        this.stack.print();
    }
}

const minStack = new MinStack();
minStack.push(5);
minStack.push(2);
minStack.push(10);
minStack.push(1);

console.log("Minimum element:", minStack.getMin()); // Output: 1
minStack.print(); // Output: [5, 2, 10, 1]

minStack.pop();
console.log("Minimum element:", minStack.getMin()); // Output: 2

// ======================
// Conclusion
// ======================

// Stacks are a fundamental data structure that follows the LIFO (Last In, First Out) principle.
// They are useful for managing function calls, parsing expressions, and more. Understanding
// how to implement and manipulate stacks is essential for solving many algorithmic problems.
