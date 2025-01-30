# **Understanding Stacks: A Beginner's Guide**


### **1. Teaching "Stack" to a Beginner**

#### **What is a Stack?**
- A **stack** is like a stack of plates:
  - You can **add** a plate to the top (called **push**).
  - You can **remove** the top plate (called **pop**).
- It follows the **Last In, First Out (LIFO)** rule:
  - The last plate you add is the first one you remove.

#### **Key Concepts**:
1. **Push**: Add an item to the top of the stack.
2. **Pop**: Remove the top item from the stack.
3. **Peek**: Look at the top item without removing it.
4. **IsEmpty**: Check if the stack is empty.

#### **Example:**
Imagine a stack of books:
```
Top -> [Book 3]
        [Book 2]
        [Book 1]
```
- If you **push** "Book 4", it goes on top.
- If you **pop**, "Book 4" is removed.

---

### **2. Basic Examples of Stacks**

#### **Example 1: Simple Stack**
A stack of numbers.

```javascript
// Define a stack using an array
let stack = [];

// Push items onto the stack
stack.push(10); // Stack: [10]
stack.push(20); // Stack: [10, 20]
stack.push(30); // Stack: [10, 20, 30]

// Pop items from the stack
console.log(stack.pop()); // Output: 30 (Stack: [10, 20])
console.log(stack.pop()); // Output: 20 (Stack: [10])
```

#### **Example 2: Stack Class**
A reusable stack class.

```javascript
// Define a Stack class
class Stack {
  constructor() {
    this.items = []; // Array to store stack items
  }

  // Push: Add an item to the top of the stack
  push(item) {
    this.items.push(item);
  }

  // Pop: Remove the top item from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty"; // Check if the stack is empty
    }
    return this.items.pop();
  }

  // Peek: Get the top item without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty"; // Check if the stack is empty
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }
}

// Test the Stack class
let stack = new Stack();
stack.push(10); // Stack: [10]
stack.push(20); // Stack: [10, 20]
stack.push(30); // Stack: [10, 20, 30]
console.log(stack.pop()); // Output: 30 (Stack: [10, 20])
console.log(stack.peek()); // Output: 20 (Stack: [10, 20])
```

---

### **3. Leetcode-Type Problems**

#### **Problem 1: Easy (Valid Parentheses)**
- **Task**: Check if a string of parentheses is valid (e.g., every opening bracket has a closing bracket).
- **Example**:
  - Input: `"()[]{}"`
  - Output: `true`

#### **Problem 2: Medium (Next Greater Element)**
- **Task**: For each element in an array, find the next greater element to its right.
- **Example**:
  - Input: `[4, 5, 2, 25]`
  - Output: `[5, 25, 25, -1]` (25 is the next greater element for 4, 5, and 2; -1 means no greater element)

---

### **4. Pseudo Code Solutions**

#### **Problem 1: Valid Parentheses**
```
1. Create an empty stack.
2. Loop through each character in the string:
   - If it's an opening bracket, push it onto the stack.
   - If it's a closing bracket, check if it matches the top of the stack.
     - If it matches, pop the stack.
     - If it doesn't match, return false.
3. If the stack is empty at the end, return true; otherwise, return false.
```

#### **Problem 2: Next Greater Element**
```
1. Create an empty stack and a result array filled with -1.
2. Loop through the array:
   - While the stack is not empty and the current element is greater than the top of the stack:
     - Update the result for the top element with the current element.
     - Pop the stack.
   - Push the current element onto the stack.
3. Return the result array.
```

---

### **5. Real Code in JavaScript**

#### **Problem 1: Valid Parentheses**
```javascript
// Function to check if parentheses are valid
function isValidParentheses(s) {
  let stack = []; // Create an empty stack
  let map = { "(": ")", "{": "}", "[": "]" }; // Map of opening to closing brackets

  for (let char of s) { // Loop through each character
    if (map[char]) { // If it's an opening bracket
      stack.push(char); // Push onto the stack
    } else { // If it's a closing bracket
      if (stack.length === 0 || map[stack.pop()] !== char) { // Check if it matches
        return false; // Invalid if it doesn't match
      }
    }
  }

  return stack.length === 0; // Valid if the stack is empty
}

// Test the function
console.log(isValidParentheses("()[]{}")); // Output: true
console.log(isValidParentheses("([)]")); // Output: false
```

#### **Problem 2: Next Greater Element**
```javascript
// Function to find the next greater element for each element in the array
function nextGreaterElement(nums) {
  let stack = []; // Create an empty stack
  let result = new Array(nums.length).fill(-1); // Initialize result array with -1

  for (let i = 0; i < nums.length; i++) { // Loop through the array
    while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) { // Check stack
      let index = stack.pop(); // Pop the top of the stack
      result[index] = nums[i]; // Update the result for the popped index
    }
    stack.push(i); // Push the current index onto the stack
  }

  return result; // Return the result array
}

// Test the function
console.log(nextGreaterElement([4, 5, 2, 25])); // Output: [5, 25, 25, -1]
```

---

### **6. Real-Life Problem Solving**

#### **Problem: Undo/Redo Functionality**
- **Task**: Implement undo/redo functionality using stacks.

```javascript
// Define a class for undo/redo functionality
class UndoRedo {
  constructor() {
    this.undoStack = []; // Stack for undo
    this.redoStack = []; // Stack for redo
  }

  // Perform an action
  performAction(action) {
    this.undoStack.push(action); // Push the action onto the undo stack
    this.redoStack = []; // Clear the redo stack
  }

  // Undo the last action
  undo() {
    if (this.undoStack.length > 0) { // Check if there are actions to undo
      let action = this.undoStack.pop(); // Pop the last action
      this.redoStack.push(action); // Push it onto the redo stack
      console.log("Undo:", action);
    } else {
      console.log("Nothing to undo");
    }
  }

  // Redo the last undone action
  redo() {
    if (this.redoStack.length > 0) { // Check if there are actions to redo
      let action = this.redoStack.pop(); // Pop the last undone action
      this.undoStack.push(action); // Push it back onto the undo stack
      console.log("Redo:", action);
    } else {
      console.log("Nothing to redo");
    }
  }
}

// Test the UndoRedo class
let editor = new UndoRedo();
editor.performAction("Type 'Hello'"); // Perform an action
editor.performAction("Type 'World'"); // Perform another action
editor.undo(); // Undo the last action (Output: Undo: Type 'World')
editor.redo(); // Redo the undone action (Output: Redo: Type 'World')
```

---

### **Pseudo Code for Real-Life Problem**
```
1. Create two stacks: one for undo and one for redo.
2. When an action is performed, push it onto the undo stack and clear the redo stack.
3. To undo, pop the last action from the undo stack and push it onto the redo stack.
4. To redo, pop the last undone action from the redo stack and push it back onto the undo stack.
```

---

### **Key Takeaways**
- A **stack** follows the **Last In, First Out (LIFO)** rule.
- Stacks are used in real-life scenarios like undo/redo functionality, parsing expressions, and backtracking.
- You can solve problems like validating parentheses or finding the next greater element using stacks.
