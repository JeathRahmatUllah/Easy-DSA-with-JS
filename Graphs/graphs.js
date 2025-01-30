
// Example 1: Representing a Graph Using an Adjacency List
let graph1 = {
    A: ["B", "C"], // A is connected to B and C
    B: ["A", "D"], // B is connected to A and D
    C: ["A", "D"], // C is connected to A and D
    D: ["B", "C"], // D is connected to B and C
  };
  console.log("Graph 1 (Adjacency List):", graph1);
  
  // Example 2: Adding a Node and Edge to a Graph
  graph1["E"] = ["D"]; // Add a new node E connected to D
  graph1["D"].push("E"); // Connect D to E
  console.log("Graph 1 after adding E:", graph1);
  
  // ==========================================
  // Intermediate Examples
  // ==========================================
  
  // Example 3: Depth-First Search (DFS) Traversal
  function dfs(graph, start, visited = new Set()) {
    visited.add(start); // Mark the current node as visited
    console.log("Visited node:", start);
  
    for (let neighbor of graph[start]) {
      if (!visited.has(neighbor)) {
        dfs(graph, neighbor, visited); // Recursively visit neighbors
      }
    }
  }
  
  console.log("DFS Traversal starting from A:");
  dfs(graph1, "A"); // Output: Visited node: A, B, D, E, C
  
  // Example 4: Breadth-First Search (BFS) Traversal
  function bfs(graph, start) {
    let queue = [start]; // Use a queue to track nodes to visit
    let visited = new Set([start]); // Track visited nodes
  
    while (queue.length > 0) {
      let node = queue.shift(); // Get the first node in the queue
      console.log("Visited node:", node);
  
      for (let neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor); // Mark neighbor as visited
          queue.push(neighbor); // Add neighbor to the queue
        }
      }
    }
  }
  
  console.log("BFS Traversal starting from A:");
  bfs(graph1, "A"); // Output: Visited node: A, B, C, D, E
  
  // ==========================================
  // Advanced Examples
  // ==========================================
  
  // Example 5: Detect a Cycle in an Undirected Graph
  function hasCycle(graph, node, visited = new Set(), parent = null) {
    visited.add(node); // Mark the current node as visited
  
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        if (hasCycle(graph, neighbor, visited, node)) {
          return true; // Cycle detected
        }
      } else if (neighbor !== parent) {
        return true; // Cycle detected
      }
    }
  
    return false; // No cycle detected
  }
  
  console.log("Does Graph 1 have a cycle?", hasCycle(graph1, "A")); // Output: false
  
  // Example 6: Shortest Path in an Unweighted Graph (BFS)
  function shortestPath(graph, start, end) {
    let queue = [[start]]; // Use a queue to track paths
    let visited = new Set([start]); // Track visited nodes
  
    while (queue.length > 0) {
      let path = queue.shift(); // Get the first path in the queue
      let node = path[path.length - 1]; // Get the last node in the path
  
      if (node === end) {
        return path; // Return the path if the end node is reached
      }
  
      for (let neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor); // Mark neighbor as visited
          queue.push([...path, neighbor]); // Add new path to the queue
        }
      }
    }
  
    return null; // No path found
  }
  
  console.log("Shortest path from A to E:", shortestPath(graph1, "A", "E")); // Output: ["A", "B", "D", "E"]
  
  // Example 7: Dijkstra's Algorithm for Shortest Path in a Weighted Graph
  let weightedGraph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 },
  };
  
  function dijkstra(graph, start) {
    let distances = {}; // Store the shortest distances
    let queue = new PriorityQueue(); // Use a priority queue to process nodes
  
    // Initialize distances
    for (let node in graph) {
      distances[node] = Infinity; // Set initial distance to infinity
    }
    distances[start] = 0; // Distance to the start node is 0
    queue.enqueue(start, 0); // Add the start node to the queue
  
    while (!queue.isEmpty()) {
      let { element: current, priority: currentDistance } = queue.dequeue();
  
      for (let neighbor in graph[current]) {
        let distance = currentDistance + graph[current][neighbor]; // Calculate new distance
        if (distance < distances[neighbor]) {
          distances[neighbor] = distance; // Update the distance
          queue.enqueue(neighbor, distance); // Add the neighbor to the queue
        }
      }
    }
  
    return distances; // Return the shortest distances
  }
  
  // Priority Queue Implementation (for Dijkstra's Algorithm)
  class PriorityQueue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element, priority) {
      this.items.push({ element, priority });
      this.items.sort((a, b) => a.priority - b.priority); // Sort by priority
    }
  
    dequeue() {
      return this.items.shift();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  console.log("Shortest distances from A:", dijkstra(weightedGraph, "A")); // Output: { A: 0, B: 1, C: 3, D: 4 }
  
  // ==========================================
  // Real-Life Problem Solving
  // ==========================================
  
  // Example 8: Social Network Friend Recommendations
  let socialNetwork = {
    Alice: ["Bob", "Charlie"],
    Bob: ["Alice", "David"],
    Charlie: ["Alice", "David"],
    David: ["Bob", "Charlie", "Eve"],
    Eve: ["David"],
  };
  
  function recommendFriends(graph, user) {
    let recommendations = new Set();
    let visited = new Set([user]); // Track visited nodes
  
    for (let friend of graph[user]) {
      for (let friendOfFriend of graph[friend]) {
        if (!visited.has(friendOfFriend) && !graph[user].includes(friendOfFriend)) {
          recommendations.add(friendOfFriend); // Add potential friend
        }
      }
    }
  
    return Array.from(recommendations); // Convert set to array
  }
  
  console.log("Friend recommendations for Alice:", recommendFriends(socialNetwork, "Alice")); // Output: ["David"]
  
  // Example 9: Detect Strongly Connected Components (Kosaraju's Algorithm)
  let directedGraph = {
    A: ["B"],
    B: ["C"],
    C: ["A", "D"],
    D: ["E"],
    E: ["F"],
    F: ["D"],
  };
  
  function kosaraju(graph) {
    let visited = new Set();
    let stack = [];
  
    // Step 1: Perform DFS and fill the stack
    function fillStack(node) {
      visited.add(node);
      for (let neighbor of graph[node] || []) {
        if (!visited.has(neighbor)) {
          fillStack(neighbor);
        }
      }
      stack.push(node);
    }
  
    for (let node in graph) {
      if (!visited.has(node)) {
        fillStack(node);
      }
    }
  
    // Step 2: Reverse the graph
    let reversedGraph = {};
    for (let node in graph) {
      for (let neighbor of graph[node]) {
        if (!reversedGraph[neighbor]) reversedGraph[neighbor] = [];
        reversedGraph[neighbor].push(node);
      }
    }
  
    // Step 3: Perform DFS on the reversed graph
    let components = [];
    visited.clear();
  
    function dfsReverse(node, component) {
      visited.add(node);
      component.push(node);
      for (let neighbor of reversedGraph[node] || []) {
        if (!visited.has(neighbor)) {
          dfsReverse(neighbor, component);
        }
      }
    }
  
    while (stack.length > 0) {
      let node = stack.pop();
      if (!visited.has(node)) {
        let component = [];
        dfsReverse(node, component);
        components.push(component);
      }
    }
  
    return components;
  }
  
  console.log("Strongly Connected Components:", kosaraju(directedGraph)); // Output: [["A", "C", "B"], ["D", "F", "E"]]