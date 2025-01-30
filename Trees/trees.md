# **Understanding Trees: A Beginner's Guide**

### **1. Teaching "Tree" to a Beginner**

#### **What is a Tree?**
- A **tree** is like a family tree or a tree in nature:
  - It has a **root** (the starting point).
  - It has **branches** (called **edges**) that connect to other parts of the tree.
  - Each part of the tree is called a **node**.
  - Nodes at the end of the branches are called **leaves** (they have no children).

#### **Key Concepts**:
1. **Root**: The topmost node (like the grandfather in a family tree).
2. **Parent**: A node that has one or more child nodes.
3. **Child**: A node connected to a parent node.
4. **Leaf**: A node with no children.
5. **Depth**: How far a node is from the root.
6. **Height**: The longest path from the root to a leaf.

#### **Example:**
Imagine a family tree:
```
        Grandpa (Root)
          /     \
     Dad        Uncle
     /  \         \
  You  Sister    Cousin
```
- **Grandpa** is the root.
- **Dad** and **Uncle** are children of Grandpa.
- **You**, **Sister**, and **Cousin** are leaves.

---

### **2. Basic Examples of Trees**

#### **Example 1: Binary Tree**
A binary tree is a tree where each node has at most two children (left and right).

```javascript
// Define a binary tree node
class TreeNode {
  constructor(value) {
    this.value = value; // Value of the node
    this.left = null;   // Left child
    this.right = null;  // Right child
  }
}

// Create a binary tree
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Tree structure:
//       1
//      / \
//     2   3
//    / \
//   4   5
```

#### **Example 2: Family Tree**
A family tree where each node represents a person.

```javascript
// Define a family tree node
class FamilyTreeNode {
  constructor(name) {
    this.name = name; // Name of the person
    this.children = []; // List of children
  }

  // Add a child
  addChild(name) {
    this.children.push(new FamilyTreeNode(name));
  }
}

// Create a family tree
let grandpa = new FamilyTreeNode("Grandpa");
grandpa.addChild("Dad");
grandpa.addChild("Uncle");
grandpa.children[0].addChild("You");
grandpa.children[0].addChild("Sister");
grandpa.children[1].addChild("Cousin");

// Tree structure:
//        Grandpa
//          /     \
//       Dad      Uncle
//       /  \        \
//    You  Sister   Cousin
```

---

### **3. Leetcode-Type Problems**

#### **Problem 1: Easy (Maximum Depth of a Binary Tree)**
- **Task**: Find the maximum depth (height) of a binary tree.
- **Example**:
  - Input:
    ```
        1
       / \
      2   3
     / \
    4   5
    ```
  - Output: `3` (longest path: 1 -> 2 -> 4 or 1 -> 2 -> 5)

#### **Problem 2: Medium (Binary Tree Level Order Traversal)**
- **Task**: Traverse the tree level by level and return the nodes in a list of lists.
- **Example**:
  - Input:
    ```
        1
       / \
      2   3
     / \
    4   5
    ```
  - Output: `[[1], [2, 3], [4, 5]]`

---

### **4. Pseudo Code Solutions**

#### **Problem 1: Maximum Depth of a Binary Tree**
```
1. If the tree is empty, return 0.
2. Recursively calculate the depth of the left subtree.
3. Recursively calculate the depth of the right subtree.
4. Return the maximum depth of the two subtrees plus 1 (for the root).
```

#### **Problem 2: Binary Tree Level Order Traversal**
```
1. Create an empty result list.
2. Use a queue to keep track of nodes at each level.
3. While the queue is not empty:
   - Create a list for the current level.
   - Process all nodes at the current level and add their children to the queue.
   - Add the current level list to the result.
4. Return the result.
```

---

### **5. Real Code in JavaScript**

#### **Problem 1: Maximum Depth of a Binary Tree**
```javascript
// Function to find the maximum depth of a binary tree
function maxDepth(root) {
  if (root === null) { // If the tree is empty
    return 0;
  }
  let leftDepth = maxDepth(root.left); // Depth of the left subtree
  let rightDepth = maxDepth(root.right); // Depth of the right subtree
  return Math.max(leftDepth, rightDepth) + 1; // Max depth + 1 (for the root)
}

// Test the function
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(maxDepth(root)); // Output: 3
```

#### **Problem 2: Binary Tree Level Order Traversal**
```javascript
// Function to perform level order traversal
function levelOrder(root) {
  if (root === null) { // If the tree is empty
    return [];
  }
  let result = []; // To store the result
  let queue = [root]; // Queue to process nodes

  while (queue.length > 0) {
    let levelSize = queue.length; // Number of nodes at the current level
    let currentLevel = []; // List for the current level

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift(); // Remove the first node from the queue
      currentLevel.push(node.value); // Add its value to the current level
      if (node.left !== null) { // Add left child to the queue
        queue.push(node.left);
      }
      if (node.right !== null) { // Add right child to the queue
        queue.push(node.right);
      }
    }

    result.push(currentLevel); // Add the current level to the result
  }

  return result;
}

// Test the function
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(levelOrder(root)); // Output: [[1], [2, 3], [4, 5]]
```

---

### **6. Real-Life Problem Solving**

#### **Problem: Find All Employees Under a Manager**
- **Task**: Given a tree representing a company hierarchy, find all employees under a specific manager.

```javascript
// Define a company hierarchy tree
class EmployeeNode {
  constructor(name) {
    this.name = name; // Name of the employee
    this.subordinates = []; // List of subordinates
  }

  // Add a subordinate
  addSubordinate(name) {
    this.subordinates.push(new EmployeeNode(name));
  }
}

// Function to find all employees under a manager
function findEmployees(manager, result = []) {
  if (manager === null) { // If the manager is null
    return result;
  }
  result.push(manager.name); // Add the manager to the result
  for (let subordinate of manager.subordinates) { // Recursively add subordinates
    findEmployees(subordinate, result);
  }
  return result;
}

// Test the function
let ceo = new EmployeeNode("CEO");
ceo.addSubordinate("Manager1");
ceo.addSubordinate("Manager2");
ceo.subordinates[0].addSubordinate("Employee1");
ceo.subordinates[0].addSubordinate("Employee2");
ceo.subordinates[1].addSubordinate("Employee3");

console.log(findEmployees(ceo)); // Output: ["CEO", "Manager1", "Employee1", "Employee2", "Manager2", "Employee3"]
```

---

### **Pseudo Code for Real-Life Problem**
```
1. Define a tree structure for the company hierarchy.
2. Create a function to traverse the tree and collect all employees under a manager.
3. Start with the manager and add their name to the result.
4. Recursively add the names of all subordinates.
5. Return the result.
```

---

### **Key Takeaways**
- A **tree** is a hierarchical structure with a root, branches, and leaves.
- Trees are used in real-life scenarios like family trees, company hierarchies, and file systems.
- You can solve problems like finding the depth of a tree or traversing it level by level.
