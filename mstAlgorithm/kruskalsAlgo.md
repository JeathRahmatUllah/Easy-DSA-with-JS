

## **2) Basic Kruskal’s Algorithm Example (JavaScript)**
```javascript
// ------------------------
// Kruskal’s Algorithm: Basic Example
// ------------------------

/**
 * Disjoint Set (Union-Find) with Path Compression
 */
class DisjointSet {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = Array(n).fill(0);
    }

    // Find with Path Compression
    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    // Union by Rank
    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX]++;
            }
            return true;
        }
        return false;
    }
}

/**
 * Kruskal’s Algorithm
 * @param {number} n - Number of vertices
 * @param {number[][]} edges - List of edges in format [node1, node2, weight]
 * @returns {number} - Minimum Cost of Spanning Tree
 */
function kruskalMST(n, edges) {
    edges.sort((a, b) => a[2] - b[2]); // Sort edges by weight
    let dsu = new DisjointSet(n);
    let totalCost = 0;
    let mstEdges = [];

    for (let [u, v, w] of edges) {
        if (dsu.union(u, v)) { // If no cycle, add edge
            totalCost += w;
            mstEdges.push([u, v, w]);
        }
    }

    console.log("Minimum Spanning Tree Edges:", mstEdges);
    return totalCost;
}

// Example Graph
let edges = [
    [0, 1, 4], [0, 2, 6], [1, 2, 2],
    [1, 3, 5], [2, 3, 8]
];

console.log("Example 1 - Basic Kruskal’s MST Cost:", kruskalMST(4, edges));
```

---

## **3) Leetcode Problems (Easy & Medium)**  

### **Leetcode Easy: Find the Minimum Cost to Connect Cities**  
#### **Pseudo Code**
1️⃣ Sort all roads by cost.  
2️⃣ Use Union-Find to ensure no cycle is formed.  
3️⃣ Add edges until all cities are connected.  

#### **JavaScript Solution**
```javascript
function minCostToConnectCities(n, roads) {
    roads.sort((a, b) => a[2] - b[2]); // Sort by cost
    let dsu = new DisjointSet(n);
    let totalCost = 0, count = 0;

    for (let [u, v, cost] of roads) {
        if (dsu.union(u, v)) {
            totalCost += cost;
            count++;
        }
        if (count === n - 1) break; // Stop when all are connected
    }

    return count === n - 1 ? totalCost : -1;
}

// Example Usage
console.log("Example 2 - Min Cost to Connect Cities:", minCostToConnectCities(4, [[0,1,3],[1,2,1],[2,3,4],[0,2,5]]));
```

---

### **Leetcode Medium: Connecting Points in a Plane with Minimum Cost**  
#### **Pseudo Code**
1️⃣ Convert the 2D points into a list of edges based on Manhattan Distance.  
2️⃣ Sort the edges by distance.  
3️⃣ Apply Kruskal’s algorithm.  

#### **JavaScript Solution**
```javascript
function minCostConnectPoints(points) {
    let n = points.length;
    let edges = [];

    // Convert points into edge list with weights (Manhattan Distance)
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let weight = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
            edges.push([i, j, weight]);
        }
    }

    edges.sort((a, b) => a[2] - b[2]); // Sort by weight
    let dsu = new DisjointSet(n);
    let totalCost = 0, count = 0;

    for (let [u, v, w] of edges) {
        if (dsu.union(u, v)) {
            totalCost += w;
            count++;
        }
        if (count === n - 1) break;
    }

    return totalCost;
}

console.log("Example 3 - Min Cost to Connect Points:", minCostConnectPoints([[0,0],[2,2],[3,10],[5,2],[7,0]]));
```

---

## **4) Real-Life Problem Solving with Kruskal’s Algorithm**
### **Real-Life Example: Designing an Internet Network**
Imagine a company wants to set up **fiber-optic cables** between multiple cities at the lowest cost.

#### **Pseudo Code**
1️⃣ Convert cities into a list of **fiber connections** with costs.  
2️⃣ Sort these connections.  
3️⃣ Use **Kruskal’s Algorithm** to build the minimum network.  

#### **JavaScript Solution**
```javascript
function minCostInternetNetwork(n, fiberConnections) {
    fiberConnections.sort((a, b) => a[2] - b[2]); // Sort by cost
    let dsu = new DisjointSet(n);
    let totalCost = 0, count = 0;

    for (let [city1, city2, cost] of fiberConnections) {
        if (dsu.union(city1, city2)) {
            totalCost += cost;
            count++;
        }
        if (count === n - 1) break;
    }

    return count === n - 1 ? totalCost : -1;
}

// Example Cities and Costs
console.log("Example 4 - Min Cost to Setup Fiber Network:", minCostInternetNetwork(5, [
    [0,1,2], [1,2,3], [2,3,4], [3,4,5], [0,2,6]
]));
```

---

## **Summary**
✅ **What we learned:**  
- Kruskal’s Algorithm builds the **Minimum Spanning Tree**.  
- It **avoids cycles** using **Union-Find**.  
- It sorts edges **by cost** and picks the **cheapest valid edge**.  
- **Real-world uses:** Road networks, internet cabling, power grids.
