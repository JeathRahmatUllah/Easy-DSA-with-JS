# **Understanding Graph: A Beginner's Guide**

### **1. Teaching "Graph" to a Beginner**

#### **What is a Graph?**
- A **graph** is like a map of connections between places or things.
- It has:
  - **Nodes (Vertices)**: The places or things (e.g., cities, people).
  - **Edges**: The connections between them (e.g., roads, friendships).
- Graphs can be **directed** (one-way connections) or **undirected** (two-way connections).

#### **Key Concepts**:
1. **Node (Vertex)**: A point in the graph (e.g., a city).
2. **Edge**: A connection between two nodes (e.g., a road).
3. **Directed Graph**: Edges have a direction (e.g., one-way streets).
4. **Undirected Graph**: Edges have no direction (e.g., two-way streets).
5. **Weighted Graph**: Edges have weights (e.g., distance between cities).

#### **Example:**
Imagine a map of cities and roads:
```
    A
   / \
  B---C
```
- **Nodes**: A, B, C (cities).
- **Edges**: A-B, A-C, B-C (roads).

---

### **2. Basic Examples of Graphs**

#### **Example 1: Undirected Graph**
An undirected graph where cities are connected by two-way roads.

```javascript
// Define a graph using an adjacency list
let graph = {
  A: ["B", "C"], // A is connected to B and C
  B: ["A", "C"], // B is connected to A and C
  C: ["A", "B"], // C is connected to A and B
};

// Graph structure:
//    A
//   / \
//  B---C
```

#### **Example 2: Directed Graph**
A directed graph where friendships are one-way.

```javascript
// Define a directed graph using an adjacency list
let directedGraph = {
  Alice: ["Bob"], // Alice is friends with Bob
  Bob: ["Charlie"], // Bob is friends with Charlie
  Charlie: [], // Charlie has no friends
};

// Graph structure:
// Alice -> Bob -> Charlie
```

---

### **3. Leetcode-Type Problems**

#### **Problem 1: Easy (Number of Islands)**
- **Task**: Given a 2D grid of '1's (land) and '0's (water), count the number of islands.
- **Example**:
  - Input:
    ```
    [
      ["1","1","0","0","0"],
      ["1","1","0","0","0"],
      ["0","0","1","0","0"],
      ["0","0","0","1","1"]
    ]
    ```
  - Output: `3` (there are 3 islands)

#### **Problem 2: Medium (Clone Graph)**
- **Task**: Clone a connected undirected graph.
- **Example**:
  - Input: A graph with nodes `1`, `2`, `3` connected as `1-2-3`.
  - Output: A deep copy of the graph.

---

### **4. Pseudo Code Solutions**

#### **Problem 1: Number of Islands**
```
1. Initialize a counter for islands.
2. Loop through each cell in the grid:
   - If the cell is '1' (land), increment the counter and perform a depth-first search (DFS) to mark all connected land cells as visited.
3. Return the counter.
```

#### **Problem 2: Clone Graph**
```
1. Create a map to store the original node and its clone.
2. Use depth-first search (DFS) to traverse the graph:
   - For each node, create a clone and add it to the map.
   - Recursively clone the neighbors.
3. Return the clone of the starting node.
```

---

### **5. Real Code in JavaScript**

#### **Problem 1: Number of Islands**
```javascript
// Function to count the number of islands
function numIslands(grid) {
  let count = 0; // Counter for islands

  // Helper function to perform DFS
  function dfs(row, col) {
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[0].length ||
      grid[row][col] === "0"
    ) {
      return; // Stop if out of bounds or water
    }
    grid[row][col] = "0"; // Mark the cell as visited
    dfs(row + 1, col); // Check down
    dfs(row - 1, col); // Check up
    dfs(row, col + 1); // Check right
    dfs(row, col - 1); // Check left
  }

  // Loop through the grid
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") { // If land is found
        count++; // Increment the counter
        dfs(row, col); // Mark all connected land as visited
      }
    }
  }

  return count; // Return the number of islands
}

// Test the function
let grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
console.log(numIslands(grid)); // Output: 3
```

#### **Problem 2: Clone Graph**
```javascript
// Define a graph node
class Node {
  constructor(val, neighbors = []) {
    this.val = val; // Value of the node
    this.neighbors = neighbors; // List of neighbors
  }
}

// Function to clone a graph
function cloneGraph(node, map = new Map()) {
  if (node === null) { // If the node is null
    return null;
  }
  if (map.has(node)) { // If the node is already cloned
    return map.get(node);
  }
  let clone = new Node(node.val); // Create a clone of the node
  map.set(node, clone); // Add the original node and its clone to the map
  for (let neighbor of node.neighbors) { // Recursively clone the neighbors
    clone.neighbors.push(cloneGraph(neighbor, map));
  }
  return clone; // Return the cloned node
}

// Test the function
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
node1.neighbors = [node2, node3];
node2.neighbors = [node1, node3];
node3.neighbors = [node1, node2];

let clonedGraph = cloneGraph(node1);
console.log(clonedGraph); // Output: Cloned graph
```

---

### **6. Real-Life Problem Solving**

#### **Problem: Find the Shortest Path Between Two Cities**
- **Task**: Given a graph of cities and roads, find the shortest path between two cities.

```javascript
// Define a graph using an adjacency list
let graph = {
  A: { B: 1, C: 4 }, // A is connected to B (distance 1) and C (distance 4)
  B: { A: 1, C: 2, D: 5 }, // B is connected to A, C, and D
  C: { A: 4, B: 2, D: 1 }, // C is connected to A, B, and D
  D: { B: 5, C: 1 }, // D is connected to B and C
};

// Function to find the shortest path using Dijkstra's algorithm
function shortestPath(graph, start, end) {
  let distances = {}; // Store the shortest distances
  let previous = {}; // Store the previous node in the shortest path
  let queue = new PriorityQueue(); // Use a priority queue to process nodes

  // Initialize distances and queue
  for (let node in graph) {
    distances[node] = Infinity; // Set initial distance to infinity
    previous[node] = null; // No previous node initially
  }
  distances[start] = 0; // Distance to the start node is 0
  queue.enqueue(start, 0); // Add the start node to the queue

  // Process the queue
  while (!queue.isEmpty()) {
    let current = queue.dequeue().element; // Get the node with the smallest distance
    for (let neighbor in graph[current]) { // Loop through neighbors
      let distance = distances[current] + graph[current][neighbor]; // Calculate new distance
      if (distance < distances[neighbor]) { // If a shorter path is found
        distances[neighbor] = distance; // Update the distance
        previous[neighbor] = current; // Update the previous node
        queue.enqueue(neighbor, distance); // Add the neighbor to the queue
      }
    }
  }

  // Build the shortest path
  let path = [];
  let current = end;
  while (current !== null) {
    path.unshift(current); // Add the current node to the path
    current = previous[current]; // Move to the previous node
  }

  return path; // Return the shortest path
}

// Test the function
console.log(shortestPath(graph, "A", "D")); // Output: ["A", "B", "C", "D"]
```

---

### **Pseudo Code for Real-Life Problem**
```
1. Define a graph of cities and roads.
2. Use Dijkstra's algorithm to find the shortest path:
   - Initialize distances and previous nodes.
   - Use a priority queue to process nodes.
   - Update distances and previous nodes as shorter paths are found.
3. Build the shortest path from the start to the end.
4. Return the shortest path.
```

---

### **Key Takeaways**
- A **graph** is a collection of nodes and edges.
- Graphs are used in real-life scenarios like maps, social networks, and recommendation systems.
- You can solve problems like finding the number of islands, cloning a graph, or finding the shortest path.

