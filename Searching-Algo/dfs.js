 // ==========================
// 1️⃣ DFS Traversal of a Graph (Beginner)
// ==========================
function dfsGraph(graph, node, visited = new Set()) {
    if (visited.has(node)) return; // If already visited, return

    console.log(node); // Process the node (print it)
    visited.add(node); // Mark as visited

    for (let neighbor of graph[node]) {
        dfsGraph(graph, neighbor, visited); // Recur for each neighbor
    }
}

// Example Graph (Adjacency List)
const graph = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: ["G"],
    F: [],
    G: []
};

console.log("1️⃣ DFS Traversal of Graph:");
dfsGraph(graph, "A"); // Output: A B D E G C F


// ==========================
// 2️⃣ DFS Traversal of a Binary Tree (Easy)
// ==========================
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Creating a sample binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

function dfsTree(node) {
    if (!node) return;
    console.log(node.value); // Process node
    dfsTree(node.left); // Recur left
    dfsTree(node.right); // Recur right
}

console.log("\n2️⃣ DFS Traversal of Binary Tree:");
dfsTree(root); // Output: 1 2 4 5 3 6 7


// ==========================
// 3️⃣ DFS to Detect a Cycle in a Graph (Medium)
// ==========================
function hasCycle(graph) {
    let visited = new Set();
    let recStack = new Set();

    function dfs(node) {
        if (recStack.has(node)) return true; // If node is in recursion stack, cycle found
        if (visited.has(node)) return false;

        visited.add(node);
        recStack.add(node);

        for (let neighbor of graph[node]) {
            if (dfs(neighbor)) return true;
        }

        recStack.delete(node); // Remove from recursion stack after visiting
        return false;
    }

    for (let node in graph) {
        if (dfs(node)) return true;
    }
    return false;
}

// Example Graph with a cycle
const cycleGraph = {
    A: ["B"],
    B: ["C"],
    C: ["A"]
};

console.log("\n3️⃣ Does the Graph have a cycle?", hasCycle(cycleGraph)); // Output: true


// ==========================
// 4️⃣ DFS to Count Connected Components (Hard)
// ==========================
function countComponents(n, edges) {
    let graph = Array.from({ length: n }, () => []);
    for (let [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    let visited = new Set(), count = 0;

    function dfs(node) {
        if (visited.has(node)) return;
        visited.add(node);
        for (let neighbor of graph[node]) dfs(neighbor);
    }

    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            count++;  // New component found
            dfs(i);
        }
    }

    return count;
}

console.log("\n4️⃣ Connected Components:", countComponents(5, [[0, 1], [1, 2], [3, 4]])); // Output: 2


// ==========================
// 5️⃣ DFS Maze Solver (Advanced)
// ==========================
function canExitMaze(maze, x, y, exitX, exitY) {
    let rows = maze.length, cols = maze[0].length;
    
    function dfs(x, y) {
        if (x < 0 || y < 0 || x >= rows || y >= cols || maze[x][y] === 0) return false;
        if (x === exitX && y === exitY) return true; // Reached exit
        
        maze[x][y] = 0; // Mark visited
        
        return dfs(x + 1, y) || dfs(x - 1, y) || dfs(x, y + 1) || dfs(x, y - 1);
    }

    return dfs(x, y);
}

const maze = [
    [1, 1, 0, 1],
    [1, 0, 1, 1],
    [0, 1, 1, 1]
];

console.log("\n5️⃣ Can exit maze?", canExitMaze(maze, 0, 0, 2, 3)); // Output: true
