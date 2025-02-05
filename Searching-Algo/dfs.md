## **1) Teaching DFS**
---
### **📌 What is DFS (Depth-First Search)?**
Imagine you are **exploring a big maze**. Instead of checking all the paths at once, you **go as deep as possible** in one direction **until you hit a dead end**. Then, you go back and try another path.  

DFS is like **going down one path deeply before trying another**.

### **📌 How DFS Works**
- Start from a point (node).
- Go as far as you can in one direction.
- If you hit a dead end, go back (backtrack) and try another direction.
- Continue until you've visited all possible paths.

💡 **Think of climbing a tree**: You go to the **deepest branch first** before coming back up and trying another branch.

---

## **2) Basic Example of DFS (Graph & Tree Traversal)**
---
```javascript
// 1️⃣ DFS using Recursion (Graph Traversal)
function dfsGraph(graph, node, visited = new Set()) {
    if (visited.has(node)) return; // If already visited, return

    console.log(node); // Process the node (print it)
    visited.add(node); // Mark as visited

    for (let neighbor of graph[node]) {
        dfsGraph(graph, neighbor, visited); // Recur for each neighbor
    }
}

// Graph represented as an adjacency list
const graph = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: ["G"],
    F: [],
    G: []
};

console.log("DFS Traversal:");
dfsGraph(graph, "A"); // Output: A B D E G C F

// --------------------------------------------

// 2️⃣ DFS Traversal of a Binary Tree
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Creating a sample tree
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

console.log("\nDFS Traversal of Tree:");
dfsTree(root); // Output: 1 2 4 5 3 6 7
```

---

## **3) LeetCode Type Problems**
---
### **📌 Easy Problem: Finding a Target in a Grid**
**📝 Problem:** Given a grid with `'1'` as land and `'0'` as water, find if a given position `(x, y)` is reachable.

#### **Pseudo Code**
```
1. Define a DFS function that:
   - Marks visited positions
   - Checks bounds to avoid out-of-bounds access
   - Moves in 4 directions (up, down, left, right)
2. Call DFS from the starting position
3. Return true if the target is reached, otherwise false
```

#### **Solution in JavaScript**
```javascript
function isReachable(grid, startX, startY, targetX, targetY) {
    if (grid[startX][startY] === '0' || grid[targetX][targetY] === '0') return false;
    let rows = grid.length, cols = grid[0].length;
    
    function dfs(x, y) {
        if (x < 0 || y < 0 || x >= rows || y >= cols || grid[x][y] === '0') return false;
        if (x === targetX && y === targetY) return true; // Found target
        
        grid[x][y] = '0'; // Mark visited
        return dfs(x + 1, y) || dfs(x - 1, y) || dfs(x, y + 1) || dfs(x, y - 1);
    }

    return dfs(startX, startY);
}

const grid1 = [
    ['1', '1', '0', '1'],
    ['1', '0', '1', '1'],
    ['0', '1', '1', '0']
];

console.log("\nIs target reachable?", isReachable(grid1, 0, 0, 1, 2)); // Output: true
```

---

### **📌 Medium Problem: Number of Connected Components**
**📝 Problem:** Given an **undirected graph**, count how many connected components exist.

#### **Pseudo Code**
```
1. Use DFS to explore each node.
2. If a node is not visited, start DFS and count it as a new component.
3. Continue DFS for all nodes to find all components.
```

#### **Solution in JavaScript**
```javascript
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

console.log("\nConnected Components:", countComponents(5, [[0, 1], [1, 2], [3, 4]])); // Output: 2
```

---

## **4) Real-Life Problem Solving**
---
### **📌 Problem: Solving a Maze**
**📝 Scenario:** You are given a **maze** where `0` represents walls and `1` represents paths. Find if you can reach the **exit**.

#### **Pseudo Code**
```
1. Define DFS function that:
   - Marks visited positions
   - Moves in four directions
2. If DFS reaches exit, return true
3. If all paths fail, return false
```

#### **Solution in JavaScript**
```javascript
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

console.log("\nCan exit maze?", canExitMaze(maze, 0, 0, 2, 3)); // Output: true
```

---

## **Final Thoughts**
✅ **DFS is like exploring deep before going wide**.  
✅ **Works great for graphs, trees, and mazes**.  
✅ **Used in pathfinding, cycle detection, and connected components**.  
