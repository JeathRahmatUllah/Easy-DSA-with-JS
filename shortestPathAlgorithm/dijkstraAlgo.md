
## **1) Teaching Dijkstra's Algorithm**  

### **What is Dijkstra's Algorithm?**  
Imagine you are in a city with many roads, and you want to find the shortest path from your house to a friend's house. But some roads are faster (highways), and some roads are slower (small streets with traffic).  

Dijkstra's algorithm helps us find the **fastest way (shortest path) from one place to another** by checking different routes and choosing the best one.  

### **Concepts in Dijkstra's Algorithm:**  
- **Nodes (Places):** Cities, houses, or locations.  
- **Edges (Roads):** Paths that connect places with different distances (weights).  
- **Shortest Path:** The route with the least total distance.  
- **Priority Queue:** A special list where the nearest place is always checked first.  

---

## **2) Basic Example with Code**  

### **Example: Finding the shortest path in a city**  
We have five locations **A, B, C, D, and E** connected with different distances.  

```
    A ---- 4 ---- B
    | \           |
    2   5        1
    |      \      |
    C ---- 8 ---- D ---- 3 ---- E
```

We want to find the shortest path from **A to all other locations**.  

### **JavaScript Code for Dijkstra’s Algorithm**  
```javascript
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }

    isEmpty() {
        return this.values.length === 0;
    }
}

function dijkstra(graph, start) {
    let distances = {}; // Stores shortest distance to each node
    let pq = new PriorityQueue(); // Priority queue to process nodes
    let previous = {}; // Stores shortest path tree

    // Initialize distances
    for (let node in graph) {
        distances[node] = Infinity; // Start with infinite distance
        previous[node] = null;
    }

    distances[start] = 0;
    pq.enqueue(start, 0);

    while (!pq.isEmpty()) {
        let { val: currentNode } = pq.dequeue();

        for (let neighbor in graph[currentNode]) {
            let newDist = distances[currentNode] + graph[currentNode][neighbor];

            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
                previous[neighbor] = currentNode;
                pq.enqueue(neighbor, newDist);
            }
        }
    }

    return { distances, previous };
}

// Graph representation
const graph = {
    A: { B: 4, C: 2 },
    B: { A: 4, D: 1 },
    C: { A: 2, D: 8 },
    D: { B: 1, C: 8, E: 3 },
    E: { D: 3 }
};

// Finding shortest paths from A
console.log(dijkstra(graph, "A"));
```

---

## **3) Leetcode-Style Problems**  

### **Easy Problem: Find Shortest Path in a Grid**
#### **Problem Statement:**  
You are given a grid where `1` represents a road and `0` represents a blocked path. Find the shortest path from the **top-left** to the **bottom-right** using Dijkstra’s algorithm.

#### **Pseudo Code:**  
```
1. Use a priority queue to store [row, col, distance].
2. Move in 4 directions (up, down, left, right) and update distances.
3. If a shorter path is found, update the distance and continue.
4. Stop when reaching the bottom-right cell.
```

#### **JavaScript Solution:**  
```javascript
function shortestPath(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let directions = [[0,1], [1,0], [0,-1], [-1,0]];
    let pq = new PriorityQueue();
    let distances = Array.from({ length: rows }, () => Array(cols).fill(Infinity));

    pq.enqueue([0, 0], 0);
    distances[0][0] = 0;

    while (!pq.isEmpty()) {
        let { val: [r, c], priority: dist } = pq.dequeue();

        if (r === rows - 1 && c === cols - 1) return dist;

        for (let [dr, dc] of directions) {
            let nr = r + dr, nc = c + dc;

            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
                let newDist = dist + 1;

                if (newDist < distances[nr][nc]) {
                    distances[nr][nc] = newDist;
                    pq.enqueue([nr, nc], newDist);
                }
            }
        }
    }

    return -1; // No path found
}

// Example usage:
console.log(shortestPath([[1, 1, 0], [1, 1, 1], [0, 1, 1]]));
```

---

### **Medium Problem: Network Delay Time**  
#### **Problem Statement:**  
You are given a list of network cables connecting computers with different speeds. Find how long it takes for a signal to reach all computers.  

#### **Pseudo Code:**  
```
1. Represent network as a graph with computers as nodes.
2. Start from a given computer (source).
3. Use Dijkstra’s algorithm to find the longest shortest time.
4. Return the max time taken or -1 if not all computers are reached.
```

#### **JavaScript Solution:**  
```javascript
function networkDelayTime(times, N, K) {
    let graph = {};
    
    for (let [u, v, w] of times) {
        if (!graph[u]) graph[u] = {};
        graph[u][v] = w;
    }

    let { distances } = dijkstra(graph, K);
    let maxTime = Math.max(...Object.values(distances));

    return maxTime === Infinity ? -1 : maxTime;
}

// Example usage:
console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2));
```

---

## **4) Real-Life Problem Solving Using Dijkstra**

### **Problem: Finding the Fastest Route in Google Maps**
#### **Problem Statement:**  
You are building a mini Google Maps. Given a list of roads with travel time, find the fastest route between two locations.  

#### **Pseudo Code:**  
```
1. Represent roads as a graph with locations as nodes.
2. Start from the given location.
3. Use Dijkstra’s algorithm to find the shortest travel time.
4. Return the shortest time to the destination.
```

#### **JavaScript Solution:**  
```javascript
function fastestRoute(roads, start, end) {
    let graph = {};
    
    for (let [from, to, time] of roads) {
        if (!graph[from]) graph[from] = {};
        if (!graph[to]) graph[to] = {};
        graph[from][to] = time;
        graph[to][from] = time; // Roads are two-way
    }

    let { distances } = dijkstra(graph, start);
    return distances[end] === Infinity ? -1 : distances[end];
}

// Example usage:
let roads = [["A", "B", 4], ["A", "C", 2], ["B", "D", 1], ["C", "D", 8], ["D", "E", 3]];
console.log(fastestRoute(roads, "A", "E")); // Output: Fastest time
```

---

## **Conclusion**  
1. **We explained Dijkstra’s algorithm with a simple city example.**  
2. **We implemented a basic example using JavaScript.**  
3. **We solved two Leetcode-style problems (one easy, one medium).**  
4. **We applied Dijkstra’s algorithm to a real-world Google Maps scenario.**  
