
// ======================
// Beginner Level Examples
// ======================

// Example 1: Basic Tree Node
// A simple node structure for a general tree.

class TreeNode {
    constructor(data) {
        this.data = data; // Data stored in the node
        this.children = []; // Array to store child nodes
    }

    // Add a child node
    addChild(data) {
        const child = new TreeNode(data);
        this.children.push(child);
        return child;
    }
}

// Example 2: Creating a General Tree
// Manually creating a general tree by linking nodes.

const root = new TreeNode("Root"); // Root node
const child1 = root.addChild("Child 1"); // Add a child to the root
const child2 = root.addChild("Child 2"); // Add another child to the root
const grandchild1 = child1.addChild("Grandchild 1"); // Add a child to Child 1
const grandchild2 = child1.addChild("Grandchild 2"); // Add another child to Child 1

console.log("General Tree Created:");
console.log(root);

// ======================
// Intermediate Level Examples
// ======================

// Example 3: Tree Traversal (Depth-First Search)
// A function to traverse a general tree using depth-first search.

function depthFirstTraversal(node) {
    if (node === null) return; // Base case
    console.log(node.data); // Visit the node
    for (const child of node.children) {
        depthFirstTraversal(child); // Recursively traverse each child
    }
}

console.log("Depth-First Traversal:");
depthFirstTraversal(root); // Output: Root, Child 1, Grandchild 1, Grandchild 2, Child 2

// Example 4: Tree Traversal (Breadth-First Search)
// A function to traverse a general tree using breadth-first search.

function breadthFirstTraversal(root) {
    const queue = [root]; // Use a queue to manage nodes
    while (queue.length > 0) {
        const node = queue.shift(); // Dequeue the first node
        console.log(node.data); // Visit the node
        for (const child of node.children) {
            queue.push(child); // Enqueue all children
        }
    }
}

console.log("Breadth-First Traversal:");
breadthFirstTraversal(root); // Output: Root, Child 1, Child 2, Grandchild 1, Grandchild 2

// ======================
// Advanced Level Examples
// ======================

// Example 5: Find the Height of a Tree
// A function to calculate the height of a general tree.

function treeHeight(node) {
    if (node === null) return 0; // Base case
    let maxHeight = 0;
    for (const child of node.children) {
        maxHeight = Math.max(maxHeight, treeHeight(child)); // Recursively calculate height of each subtree
    }
    return maxHeight + 1; // Add 1 for the current level
}

console.log("Tree Height:", treeHeight(root)); // Output: 3

// Example 6: Find the Number of Nodes in a Tree
// A function to count the total number of nodes in a general tree.

function countNodes(node) {
    if (node === null) return 0; // Base case
    let count = 1; // Count the current node
    for (const child of node.children) {
        count += countNodes(child); // Recursively count nodes in each subtree
    }
    return count;
}

console.log("Number of Nodes:", countNodes(root)); // Output: 5

// Example 7: Find a Node in the Tree
// A function to search for a node with a specific value.

function findNode(node, target) {
    if (node === null) return null; // Base case
    if (node.data === target) return node; // If the current node matches, return it
    for (const child of node.children) {
        const result = findNode(child, target); // Recursively search in each child
        if (result !== null) return result; // If found, return the result
    }
    return null; // If not found, return null
}

console.log("Find Node 'Grandchild 1':", findNode(root, "Grandchild 1")); // Output: TreeNode { data: 'Grandchild 1', children: [] }
console.log("Find Node 'Non-existent':", findNode(root, "Non-existent")); // Output: null

// ======================
// Expert Level Examples
// ======================

// Example 8: Serialize and Deserialize a General Tree
// Functions to convert a general tree to a string and reconstruct it.

function serializeTree(node) {
    if (node === null) return "null"; // Base case
    let serialized = `${node.data}`;
    for (const child of node.children) {
        serialized += `,${serializeTree(child)}`; // Serialize each child
    }
    serialized += ",null"; // Mark the end of children
    return serialized;
}

function deserializeTree(data) {
    const nodes = data.split(","); // Split the serialized string into an array
    return buildTree(nodes);
}

function buildTree(nodes) {
    const val = nodes.shift(); // Get the next value from the array
    if (val === "null") return null; // Base case
    const node = new TreeNode(val); // Create a new node
    while (nodes[0] !== "null") {
        node.children.push(buildTree(nodes)); // Build each child
    }
    nodes.shift(); // Remove the "null" marking the end of children
    return node;
}

const serializedTree = serializeTree(root);
console.log("Serialized Tree:", serializedTree); // Output: "Root,Child 1,Grandchild 1,null,null,Grandchild 2,null,null,Child 2,null,null,null"

const deserializedTree = deserializeTree(serializedTree);
console.log("Deserialized Tree:");
console.log(deserializedTree); // Output: Reconstructed tree

// Example 9: Find the Lowest Common Ancestor (LCA) in a General Tree
// A function to find the lowest common ancestor of two nodes in a general tree.

function findLCA(root, p, q) {
    if (root === null) return null; // Base case

    // If the current node is one of the targets, return it
    if (root.data === p || root.data === q) return root;

    let result = null;
    for (const child of root.children) {
        const childResult = findLCA(child, p, q); // Recursively search in each child
        if (childResult !== null) {
            if (result !== null) {
                // If two children return non-null, the current node is the LCA
                return root;
            }
            result = childResult;
        }
    }
    return result; // Return the result from the child
}

console.log("Lowest Common Ancestor of 'Grandchild 1' and 'Grandchild 2':", findLCA(root, "Grandchild 1", "Grandchild 2").data); // Output: Child 1

// ======================
// Conclusion
// ======================

// General trees are a versatile data structure used in many applications, such as
// file systems, organizational hierarchies, and more. Understanding how to create,
// traverse, and manipulate general trees is essential for solving complex problems
// in computer science.
