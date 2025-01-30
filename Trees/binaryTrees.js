
// ======================
// Beginner Level Examples
// ======================

// Example 1: Basic Binary Tree Node
// A simple node structure for a binary tree.

class TreeNode {
    constructor(data) {
        this.data = data; // Data stored in the node
        this.left = null; // Pointer to the left child
        this.right = null; // Pointer to the right child
    }
}

// Example 2: Creating a Binary Tree
// Manually creating a binary tree by linking nodes.

const root = new TreeNode(1); // Root node
root.left = new TreeNode(2); // Left child of root
root.right = new TreeNode(3); // Right child of root
root.left.left = new TreeNode(4); // Left child of node 2
root.left.right = new TreeNode(5); // Right child of node 2

console.log("Binary Tree Created:");
console.log(root);

// ======================
// Intermediate Level Examples
// ======================

// Example 3: Binary Tree Traversal (Inorder, Preorder, Postorder)
// Functions to traverse a binary tree in different orders.

function inorderTraversal(node) {
    if (node === null) return; // Base case
    inorderTraversal(node.left); // Traverse left subtree
    console.log(node.data); // Visit the node
    inorderTraversal(node.right); // Traverse right subtree
}

function preorderTraversal(node) {
    if (node === null) return; // Base case
    console.log(node.data); // Visit the node
    preorderTraversal(node.left); // Traverse left subtree
    preorderTraversal(node.right); // Traverse right subtree
}

function postorderTraversal(node) {
    if (node === null) return; // Base case
    postorderTraversal(node.left); // Traverse left subtree
    postorderTraversal(node.right); // Traverse right subtree
    console.log(node.data); // Visit the node
}

console.log("Inorder Traversal:");
inorderTraversal(root); // Output: 4, 2, 5, 1, 3

console.log("Preorder Traversal:");
preorderTraversal(root); // Output: 1, 2, 4, 5, 3

console.log("Postorder Traversal:");
postorderTraversal(root); // Output: 4, 5, 2, 3, 1

// ======================
// Advanced Level Examples
// ======================

// Example 4: Binary Search Tree (BST)
// A binary search tree implementation with insert and search operations.

class BinarySearchTree {
    constructor() {
        this.root = null; // Root of the BST
    }

    // Insert a new node into the BST
    insert(data) {
        const newNode = new TreeNode(data);
        if (this.root === null) {
            this.root = newNode; // If the tree is empty, set the new node as the root
        } else {
            this.insertNode(this.root, newNode); // Otherwise, find the correct position
        }
    }

    // Helper function to insert a node recursively
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode; // Insert to the left if the data is smaller
            } else {
                this.insertNode(node.left, newNode); // Recur on the left subtree
            }
        } else {
            if (node.right === null) {
                node.right = newNode; // Insert to the right if the data is larger
            } else {
                this.insertNode(node.right, newNode); // Recur on the right subtree
            }
        }
    }

    // Search for a node with the given data
    search(data) {
        return this.searchNode(this.root, data);
    }

    // Helper function to search for a node recursively
    searchNode(node, data) {
        if (node === null) {
            return false; // Data not found
        }
        if (data < node.data) {
            return this.searchNode(node.left, data); // Search in the left subtree
        } else if (data > node.data) {
            return this.searchNode(node.right, data); // Search in the right subtree
        } else {
            return true; // Data found
        }
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log("Search for 7:", bst.search(7)); // Output: true
console.log("Search for 12:", bst.search(12)); // Output: false

// Example 5: Validate a Binary Search Tree
// A function to check if a binary tree is a valid BST.

function isValidBST(node, min = null, max = null) {
    if (node === null) return true; // Base case: an empty tree is a valid BST

    // Check if the current node's data is within the valid range
    if ((min !== null && node.data <= min) || (max !== null && node.data >= max)) {
        return false;
    }

    // Recursively check the left and right subtrees
    return (
        isValidBST(node.left, min, node.data) && // Left subtree must be less than node.data
        isValidBST(node.right, node.data, max) // Right subtree must be greater than node.data
    );
}

const invalidTree = new TreeNode(10);
invalidTree.left = new TreeNode(15); // Invalid: left child is greater than root
invalidTree.right = new TreeNode(20);

console.log("Is valid BST (valid tree):", isValidBST(bst.root)); // Output: true
console.log("Is valid BST (invalid tree):", isValidBST(invalidTree)); // Output: false

// ======================
// Expert Level Examples
// ======================

// Example 6: Find the Lowest Common Ancestor (LCA) in a BST
// A function to find the lowest common ancestor of two nodes in a BST.

function findLCA(root, p, q) {
    if (root === null) return null; // Base case

    // If both nodes are smaller, LCA is in the left subtree
    if (p < root.data && q < root.data) {
        return findLCA(root.left, p, q);
    }

    // If both nodes are larger, LCA is in the right subtree
    if (p > root.data && q > root.data) {
        return findLCA(root.right, p, q);
    }

    // If one is smaller and the other is larger, the current node is the LCA
    return root.data;
}

console.log("Lowest Common Ancestor of 3 and 7:", findLCA(bst.root, 3, 7)); // Output: 5

// Example 7: Serialize and Deserialize a Binary Tree
// Functions to convert a binary tree to a string and reconstruct it.

function serialize(root) {
    if (root === null) return "null"; // Base case
    return `${root.data},${serialize(root.left)},${serialize(root.right)}`; // Preorder traversal
}

function deserialize(data) {
    const nodes = data.split(","); // Split the serialized string into an array
    return buildTree(nodes);
}

function buildTree(nodes) {
    const val = nodes.shift(); // Get the next value from the array
    if (val === "null") return null; // Base case
    const node = new TreeNode(Number(val)); // Create a new node
    node.left = buildTree(nodes); // Build the left subtree
    node.right = buildTree(nodes); // Build the right subtree
    return node;
}

const serializedTree = serialize(root);
console.log("Serialized Tree:", serializedTree); // Output: "1,2,4,null,null,5,null,null,3,null,null"

const deserializedTree = deserialize(serializedTree);
console.log("Deserialized Tree:");
console.log(deserializedTree); // Output: Reconstructed tree

// ======================
// Conclusion
// ======================

// Binary trees are a fundamental data structure used in many algorithms and applications.
// Understanding how to create, traverse, and manipulate binary trees is essential for
// solving complex problems in computer science.
