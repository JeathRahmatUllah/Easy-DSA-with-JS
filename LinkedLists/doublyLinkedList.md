# **Understanding Doubly Linked List: A Beginner's Guide**

### **1. Teaching "Doubly Linked List" to a Beginner**

#### **What is a Doubly Linked List?**
- A **doubly linked list** is like a train where each carriage is connected to the next one **and the previous one**.
- Each carriage is called a **node**, and it has three parts:
  1. **Data**: The thing it carries (like a number or a name).
  2. **Next Pointer**: A link to the next carriage (node).
  3. **Previous Pointer**: A link to the previous carriage (node).
- The first carriage is called the **head**, and the last carriage is called the **tail**.

#### **Example:**
Imagine a train with 3 carriages:
```
Head <-> [Data: 10 | Previous | Next] <-> [Data: 20 | Previous | Next] <-> [Data: 30 | Previous | Next] <-> Tail
```
- The first node has data `10`, points to the next node, and points to `null` for the previous node.
- The second node has data `20`, points to the next node, and points to the previous node.
- The third node has data `30`, points to `null` for the next node, and points to the previous node.

---

### **2. Good Examples of Doubly Linked Lists**

#### **Example 1: A List of Friends**
```javascript
// Friend 1 <-> Friend 2 <-> Friend 3
let friends = {
  data: "Alice",
  prev: null,
  next: {
    data: "Bob",
    prev: friends, // Points back to Alice
    next: {
      data: "Charlie",
      prev: friends.next, // Points back to Bob
      next: null
    }
  }
};
```
- `friends` is the head of the list.
- Each friend points to the next friend and the previous friend.

#### **Example 2: A List of Numbers**
```javascript
// 5 <-> 10 <-> 15
let numbers = {
  data: 5,
  prev: null,
  next: {
    data: 10,
    prev: numbers, // Points back to 5
    next: {
      data: 15,
      prev: numbers.next, // Points back to 10
      next: null
    }
  }
};
```
- `numbers` is the head of the list.
- Each number points to the next number and the previous number.

---

### **3. Leetcode-Type Problems**

#### **Problem 1: Easy (Traverse a Doubly Linked List)**
- **Task**: Print all the elements of a doubly linked list.
- **Example**:
  - Input: `5 <-> 10 <-> 15`
  - Output: `5, 10, 15`

#### **Problem 2: Medium (Reverse a Doubly Linked List)**
- **Task**: Reverse a doubly linked list.
- **Example**:
  - Input: `5 <-> 10 <-> 15`
  - Output: `15 <-> 10 <-> 5`

---

### **4. Pseudo Code Solutions**

#### **Problem 1: Traverse a Doubly Linked List**
```
1. Start at the head of the list.
2. While the current node is not null:
   - Print the data of the current node.
   - Move to the next node.
```

#### **Problem 2: Reverse a Doubly Linked List**
```
1. Start at the head of the list.
2. While the current node is not null:
   - Swap the next and previous pointers of the current node.
   - Move to the previous node (which was the next node before swapping).
3. Update the head to the last node.
```

---

### **5. Real Code in JavaScript**

#### **Problem 1: Traverse a Doubly Linked List**
```javascript
// Define the doubly linked list
let list = {
  data: 5,
  prev: null,
  next: {
    data: 10,
    prev: list, // Points back to 5
    next: {
      data: 15,
      prev: list.next, // Points back to 10
      next: null
    }
  }
};

// Function to traverse and print the list
function traverseList(head) {
  let current = head; // Start at the head
  while (current !== null) { // Loop until the end
    console.log(current.data); // Print the data
    current = current.next; // Move to the next node
  }
}

// Call the function
traverseList(list); // Output: 5, 10, 15
```

#### **Problem 2: Reverse a Doubly Linked List**
```javascript
// Define the doubly linked list
let list = {
  data: 5,
  prev: null,
  next: {
    data: 10,
    prev: list, // Points back to 5
    next: {
      data: 15,
      prev: list.next, // Points back to 10
      next: null
    }
  }
};

// Function to reverse the list
function reverseList(head) {
  let current = head;
  let temp = null;

  while (current !== null) {
    // Swap next and prev pointers
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;

    // Move to the previous node (which was next before swapping)
    current = current.prev;
  }

  // Update the head to the last node
  if (temp !== null) {
    head = temp.prev;
  }

  return head;
}

// Call the function and traverse the reversed list
let reversedList = reverseList(list);
traverseList(reversedList); // Output: 15, 10, 5
```

---

### **Explanation **

#### **Problem 1: Traverse a Doubly Linked List**
- Imagine you’re walking through the train carriages.
- You start at the first carriage (head) and write down the number it carries.
- You move to the next carriage and repeat until there are no more carriages.

#### **Problem 2: Reverse a Doubly Linked List**
- Imagine you’re flipping the train around so the last carriage becomes the first.
- You swap the next and previous pointers for each carriage.
- When you’re done, the train moves in the opposite direction.

---

### **Key Takeaways**
- A **doubly linked list** is like a train where each carriage points to the next one **and the previous one**.
- You can **traverse** the list to visit each node.
- You can **reverse** the list by swapping the next and previous pointers.
