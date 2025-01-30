# **Understanding Queues: A Beginner's Guide**

### **1. Teaching "Queues" to a Beginner**

#### **What is a Queue?**
- A **queue** is like a line of people waiting for something (e.g., a roller coaster ride).
- It follows the **First In, First Out (FIFO)** rule:
  - The first person to join the line is the first one to get on the ride.
  - The last person to join the line is the last one to get on the ride.
- **Two Main Operations**:
  1. **Enqueue**: Add someone to the end of the line.
  2. **Dequeue**: Remove someone from the front of the line.

#### **Example:**
Imagine a line of people waiting for ice cream:
```
Front -> [Alice] -> [Bob] -> [Charlie] <- Rear
```
- Alice is at the front of the line (she will get ice cream first).
- Charlie is at the rear of the line (he will get ice cream last).

---

### **2. Good Examples of Queues**

#### **Example 1: Printer Queue**
- A printer processes print jobs in the order they are received.
- The first document sent to the printer is printed first.

#### **Example 2: Ticket Counter**
- People line up to buy tickets at a movie theater.
- The first person in line gets their ticket first.

---

### **3. Leetcode-Type Problems**

#### **Problem 1: Easy (Implement a Queue)**
- **Task**: Implement a queue using an array.
- **Operations**:
  - `enqueue`: Add an element to the rear of the queue.
  - `dequeue`: Remove an element from the front of the queue.
  - `peek`: Get the element at the front of the queue without removing it.

#### **Problem 2: Medium (Implement a Queue Using Stacks)**
- **Task**: Implement a queue using two stacks.
- **Operations**:
  - `enqueue`: Add an element to the queue.
  - `dequeue`: Remove an element from the queue.

---

### **4. Pseudo Code Solutions**

#### **Problem 1: Implement a Queue**
```
1. Create an empty array to represent the queue.
2. For enqueue:
   - Add the element to the end of the array.
3. For dequeue:
   - Remove the first element from the array.
4. For peek:
   - Return the first element of the array without removing it.
```

#### **Problem 2: Implement a Queue Using Stacks**
```
1. Create two empty stacks: stack1 and stack2.
2. For enqueue:
   - Push the element into stack1.
3. For dequeue:
   - If stack2 is empty, move all elements from stack1 to stack2.
   - Pop the top element from stack2.
```

---

### **5. Real Code in JavaScript**

#### **Problem 1: Implement a Queue**
```javascript
// Define a Queue class
class Queue {
  constructor() {
    this.items = []; // Array to store queue elements
  }

  // Enqueue: Add an element to the rear of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Dequeue: Remove an element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty"; // Check if the queue is empty
    }
    return this.items.shift(); // Remove the first element
  }

  // Peek: Get the element at the front of the queue
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty"; // Check if the queue is empty
    }
    return this.items[0]; // Return the first element
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }
}

// Create a queue and test it
let queue = new Queue();
queue.enqueue(10); // Add 10 to the queue
queue.enqueue(20); // Add 20 to the queue
queue.enqueue(30); // Add 30 to the queue
console.log(queue.peek()); // Output: 10 (front of the queue)
console.log(queue.dequeue()); // Output: 10 (removed from the queue)
console.log(queue.peek()); // Output: 20 (new front of the queue)
```

#### **Problem 2: Implement a Queue Using Stacks**
```javascript
// Define a QueueUsingStacks class
class QueueUsingStacks {
  constructor() {
    this.stack1 = []; // First stack
    this.stack2 = []; // Second stack
  }

  // Enqueue: Add an element to the queue
  enqueue(element) {
    this.stack1.push(element); // Push into stack1
  }

  // Dequeue: Remove an element from the queue
  dequeue() {
    if (this.stack2.length === 0) { // If stack2 is empty
      while (this.stack1.length > 0) { // Move all elements from stack1 to stack2
        this.stack2.push(this.stack1.pop());
      }
    }
    if (this.stack2.length === 0) {
      return "Queue is empty"; // Check if the queue is empty
    }
    return this.stack2.pop(); // Pop from stack2
  }
}

// Create a queue and test it
let queue = new QueueUsingStacks();
queue.enqueue(10); // Add 10 to the queue
queue.enqueue(20); // Add 20 to the queue
queue.enqueue(30); // Add 30 to the queue
console.log(queue.dequeue()); // Output: 10 (removed from the queue)
console.log(queue.dequeue()); // Output: 20 (removed from the queue)
```

---

### **Explanation **

#### **Problem 1: Implement a Queue**
- Imagine a line of people waiting for ice cream.
- When someone joins the line, they go to the back (`enqueue`).
- When someone gets ice cream, they leave from the front (`dequeue`).
- You can check who’s next in line without removing them (`peek`).

#### **Problem 2: Implement a Queue Using Stacks**
- Imagine two stacks of plates.
- When someone joins the line, you put a plate on the first stack (`enqueue`).
- When someone leaves the line, you move all the plates to the second stack and take the top plate (`dequeue`).

---

### **Key Takeaways**
- A **queue** follows the **First In, First Out (FIFO)** rule.
- You can implement a queue using an array or two stacks.
- Queues are used in real-life scenarios like printer queues and ticket counters.

