
## **1️⃣ Teaching Prim’s Algorithm**
Imagine you are **building roads** between cities, but **you want to use the least amount of money** to connect all of them.

🔹 You have some **cities** (nodes) and **possible roads** (edges).  
🔹 Each road has a **cost** (weight).  
🔹 Your goal is to **connect all cities with the lowest total cost**.  

Think of it like **creating a tree** of roads where:  
✅ Every city is connected.  
✅ The total cost is minimized.  

---

## **2️⃣ Basic Example of Prim’s Algorithm in JavaScript**
```javascript
// Prim's Algorithm: Find the Minimum Spanning Tree (MST) of a graph
function primMST(graph) {
    let V = graph.length;
    let selected = new Array(V).fill(false);  // Track visited nodes
    let minEdge = new Array(V).fill(Infinity); // Store minimum edge weights
    let parent = new Array(V).fill(-1); // Store parent nodes

    minEdge[0] = 0; // Start from the first node

    for (let count = 0; count < V - 1; count++) {
        let u = -1;

        // Find the node with the smallest edge that is not in the MST yet
        for (let v = 0; v < V; v++) {
            if (!selected[v] && (u === -1 || minEdge[v] < minEdge[u])) {
                u = v;
            }
        }

        selected[u] = true; // Include node in MST

        // Update adjacent nodes
        for (let v = 0; v < V; v++) {
            if (graph[u][v] && !selected[v] && graph[u][v] < minEdge[v]) {
                minEdge[v] = graph[u][v];
                parent[v] = u;
            }
        }
    }

    // Print the MST
    console.log("Edge   Weight");
    for (let i = 1; i < V; i++) {
        console.log(`${parent[i]} - ${i}    ${graph[i][parent[i]]}`);
    }
}

// Example Graph (Adjacency Matrix)
let graph = [
    [0, 2, 0, 6, 0],
    [2, 0, 3, 8, 5],
    [0, 3, 0, 0, 7],
    [6, 8, 0, 0, 9],
    [0, 5, 7, 9, 0]
];

console.log("Example 1 - Basic Prim's Algorithm:");
primMST(graph);
```
### **📝 Explanation:**
1. We pick the **smallest edge** to start.
2. We **keep adding the next smallest edge** while avoiding cycles.
3. We continue **until all nodes are connected**.

---

## **3️⃣ Easy & Medium LeetCode-Style Problems**
### **🟢 Easy Problem: Find Minimum Cost to Connect Points**
#### **📝 Pseudo Code**
1. Start with any point.
2. Select the nearest unvisited point.
3. Repeat until all points are connected.

#### **✅ Solution in JavaScript**
```javascript
function minCostConnectPoints(points) {
    let n = points.length;
    let minEdge = new Array(n).fill(Infinity);
    let visited = new Array(n).fill(false);
    let totalCost = 0;

    minEdge[0] = 0;

    for (let i = 0; i < n; i++) {
        let u = -1;
        for (let j = 0; j < n; j++) {
            if (!visited[j] && (u === -1 || minEdge[j] < minEdge[u])) {
                u = j;
            }
        }

        visited[u] = true;
        totalCost += minEdge[u];

        for (let v = 0; v < n; v++) {
            let cost = Math.abs(points[u][0] - points[v][0]) + Math.abs(points[u][1] - points[v][1]);
            if (!visited[v] && cost < minEdge[v]) {
                minEdge[v] = cost;
            }
        }
    }

    return totalCost;
}

// Test Case
console.log("Example 2 - Min Cost to Connect Points:", minCostConnectPoints([[0,0],[2,2],[3,10],[5,2],[7,0]]));
```

---

### **🟠 Medium Problem: Connect Cities with Minimum Cost**
#### **📝 Pseudo Code**
1. Create an adjacency list.
2. Use **Prim’s Algorithm** to find the **Minimum Spanning Tree**.
3. Return the total cost.

#### **✅ Solution in JavaScript**
```javascript
function minCostToConnectCities(n, connections) {
    let graph = new Map();

    for (let [u, v, cost] of connections) {
        if (!graph.has(u)) graph.set(u, []);
        if (!graph.has(v)) graph.set(v, []);
        graph.get(u).push([v, cost]);
        graph.get(v).push([u, cost]);
    }

    let minEdge = new Array(n + 1).fill(Infinity);
    let visited = new Array(n + 1).fill(false);
    minEdge[1] = 0;
    let totalCost = 0;

    for (let i = 0; i < n; i++) {
        let u = -1;
        for (let j = 1; j <= n; j++) {
            if (!visited[j] && (u === -1 || minEdge[j] < minEdge[u])) {
                u = j;
            }
        }

        if (minEdge[u] === Infinity) return -1; // Some cities are not connected
        visited[u] = true;
        totalCost += minEdge[u];

        for (let [v, cost] of (graph.get(u) || [])) {
            if (!visited[v] && cost < minEdge[v]) {
                minEdge[v] = cost;
            }
        }
    }

    return totalCost;
}

// Test Case
console.log("Example 3 - Min Cost to Connect Cities:", minCostToConnectCities(4, [[1,2,3],[3,4,4],[1,3,1],[4,2,2]]));
```

---

## **4️⃣ Real-Life Problem: Building a Fiber-Optic Network**
### **📝 Pseudo Code**
1. Represent cities and cable costs as a graph.
2. Use **Prim’s Algorithm** to **minimize total fiber cost**.
3. Return the optimal cost.

#### **✅ Solution in JavaScript**
```javascript
function fiberOpticNetwork(cities, cables) {
    let graph = new Map();

    for (let [a, b, cost] of cables) {
        if (!graph.has(a)) graph.set(a, []);
        if (!graph.has(b)) graph.set(b, []);
        graph.get(a).push([b, cost]);
        graph.get(b).push([a, cost]);
    }

    let minEdge = new Array(cities + 1).fill(Infinity);
    let visited = new Array(cities + 1).fill(false);
    minEdge[1] = 0;
    let totalCost = 0;

    for (let i = 0; i < cities; i++) {
        let u = -1;
        for (let j = 1; j <= cities; j++) {
            if (!visited[j] && (u === -1 || minEdge[j] < minEdge[u])) {
                u = j;
            }
        }

        if (minEdge[u] === Infinity) return -1; 
        visited[u] = true;
        totalCost += minEdge[u];

        for (let [v, cost] of (graph.get(u) || [])) {
            if (!visited[v] && cost < minEdge[v]) {
                minEdge[v] = cost;
            }
        }
    }

    return totalCost;
}

// Test Case
console.log("Example 4 - Fiber Optic Network:", fiberOpticNetwork(5, [[1,2,5],[1,3,10],[2,4,8],[3,4,3],[4,5,7]]));
```

---

💡 **Final Thoughts**
✔ **Prim’s Algorithm is useful for road, network, and city planning.**  
✔ **It ensures we use the minimum cost to connect everything.**  
✔ **Great for real-life scenarios like building networks or laying pipelines.** 🚀
