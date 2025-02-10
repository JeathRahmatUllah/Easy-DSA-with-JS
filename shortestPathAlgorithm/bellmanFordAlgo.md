

### **1. Teaching Bellman-Ford Algorithm**
Imagine you are **delivering letters** in a big city with many roads. Some roads are short, and some are long. You want to **find the shortest way** to deliver your letters to all the houses.  

But wait! Some roads have **negative travel time** because they are magical roads that make you travel back in time! 🚀  

Bellman-Ford Algorithm helps you find the **shortest route from one place to all other places**, even if there are **magical roads** (negative weights). However, it also **detects dangerous magical loops** that can **trap you in infinite time travel** (negative weight cycles).  

---

### **2. Basic Example of Bellman-Ford Algorithm**
Let's write a simple JavaScript program to find the shortest path from one node to all others in a graph.

#### **Code:**
```javascript
// Bellman-Ford Algorithm in JavaScript

function bellmanFord(graph, V, start) {
    let distances = new Array(V).fill(Infinity);
    distances[start] = 0;

    // Relax all edges V-1 times
    for (let i = 0; i < V - 1; i++) {
        for (let [u, v, weight] of graph) {
            if (distances[u] + weight < distances[v]) {
                distances[v] = distances[u] + weight;
            }
        }
    }

    // Detect Negative Weight Cycle
    for (let [u, v, weight] of graph) {
        if (distances[u] + weight < distances[v]) {
            console.log("Graph contains a negative weight cycle!");
            return;
        }
    }

    return distances;
}

// Example Graph: [From, To, Weight]
let graph = [
    [0, 1, 4], [0, 2, 5], 
    [1, 2, -3], [2, 3, 3]
];

console.log("Shortest distances from node 0:", bellmanFord(graph, 4, 0));
```
✅ **Explanation:**  
1. We set all distances to **Infinity** except the start node.
2. We **relax all edges** (update distances) **V-1 times**.
3. We check if another update is possible (if yes, there’s a **negative cycle**).

---

### **3. Easy & Medium LeetCode Problems**
#### **Easy Problem: Find the Shortest Path in a Graph**
📌 **Problem Statement:**  
Given an array `edges` where `edges[i] = [u, v, w]` represents a directed edge from `u` to `v` with weight `w`, find the shortest path from `source` to all nodes.

📜 **Pseudo Code:**
```
1. Create an array `dist` and initialize all distances as ∞ except the source.
2. Iterate `V-1` times, relax all edges.
3. Check for negative weight cycles.
4. Return the `dist` array.
```
#### **Solution (JavaScript):**
```javascript
function shortestPath(edges, n, src) {
    let dist = new Array(n).fill(Infinity);
    dist[src] = 0;

    for (let i = 0; i < n - 1; i++) {
        for (let [u, v, w] of edges) {
            if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
            }
        }
    }

    return dist;
}

console.log(shortestPath([[0, 1, 4], [0, 2, 5], [1, 2, -3], [2, 3, 3]], 4, 0));
```
---

#### **Medium Problem: Find the Cheapest Flights within K Stops**
📌 **Problem Statement:**  
You are given a list of flights `flights[i] = [from, to, price]` and two integers, `src` (starting city) and `dst` (destination city). Find the **cheapest price** from `src` to `dst` within `K` stops.

📜 **Pseudo Code:**
```
1. Create a distance array `dist` initialized to ∞ except the source.
2. Run the Bellman-Ford Algorithm `K+1` times.
3. If `dist[dst]` is still ∞, return -1 (no valid path).
4. Otherwise, return `dist[dst]`.
```
#### **Solution (JavaScript):**
```javascript
function findCheapestPrice(n, flights, src, dst, K) {
    let dist = new Array(n).fill(Infinity);
    dist[src] = 0;

    for (let i = 0; i <= K; i++) {
        let temp = [...dist];
        for (let [u, v, price] of flights) {
            if (dist[u] !== Infinity && dist[u] + price < temp[v]) {
                temp[v] = dist[u] + price;
            }
        }
        dist = temp;
    }

    return dist[dst] === Infinity ? -1 : dist[dst];
}

console.log(findCheapestPrice(4, [[0,1,100],[1,2,100],[2,3,100],[0,2,500]], 0, 3, 1));
```
---

### **4. Real-Life Applications**
#### **🚗 Application: Traffic Route Optimization**
**Scenario:** You have a set of roads between cities with travel times. Find the fastest route from city A to all others.

📜 **Pseudo Code:**
```
1. Convert roads into a graph with distances.
2. Use Bellman-Ford to find shortest travel times.
3. Detect if there are roads causing infinite travel loops.
```
#### **Solution (JavaScript):**
```javascript
function fastestRoutes(roads, cities, startCity) {
    let dist = new Array(cities).fill(Infinity);
    dist[startCity] = 0;

    for (let i = 0; i < cities - 1; i++) {
        for (let [u, v, time] of roads) {
            if (dist[u] !== Infinity && dist[u] + time < dist[v]) {
                dist[v] = dist[u] + time;
            }
        }
    }

    for (let [u, v, time] of roads) {
        if (dist[u] !== Infinity && dist[u] + time < dist[v]) {
            console.log("⚠️ Traffic system has an infinite loop (negative cycle)!");
            return;
        }
    }

    return dist;
}

let roads = [[0,1,10], [1,2,20], [2,3,-5], [3,1,5]];
console.log(fastestRoutes(roads, 4, 0));
```
---

### **🎯 Summary**
✔️ **What you learned:**  
- **Bellman-Ford Algorithm** helps find the shortest paths in a graph, even with negative weights.  
- It can detect **negative weight cycles** (infinite loops).  
- It works well for **flight routes, traffic systems, and network delays**.  

✔️ **What we did:**  
✅ **Basic Example**  
✅ **Easy LeetCode Problem**  
✅ **Medium LeetCode Problem**  
✅ **Real-Life Use Case (Traffic System)**  

