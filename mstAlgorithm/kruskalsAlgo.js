// ------------------------
// Kruskal's Algorithm Examples (Beginner to Hard)
// ------------------------

// Disjoint Set (Union-Find) with Path Compression
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

// Kruskal's Algorithm Function
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

    console.log("MST Edges:", mstEdges);
    return totalCost;
}

// ------------------------
// Example 1: Basic Graph (Beginner)
// ------------------------
let edges1 = [
    [0, 1, 4], [0, 2, 6], [1, 2, 2],
    [1, 3, 5], [2, 3, 8]
];
console.log("Example 1 - MST Cost:", kruskalMST(4, edges1));

// ------------------------
// Example 2: Medium Graph (Intermediate)
// ------------------------
let edges2 = [
    [0, 1, 1], [0, 2, 3], [1, 2, 2],
    [1, 3, 5], [2, 3, 4], [3, 4, 6],
    [2, 4, 7]
];
console.log("Example 2 - MST Cost:", kruskalMST(5, edges2));

// ------------------------
// Example 3: Large Graph (Hard)
// ------------------------
let edges3 = [
    [0, 1, 2], [0, 2, 4], [1, 2, 1],
    [1, 3, 7], [2, 3, 3], [2, 4, 5],
    [3, 4, 6], [4, 5, 2], [3, 5, 8]
];
console.log("Example 3 - MST Cost:", kruskalMST(6, edges3));

// ------------------------
// Example 4: Real-Life Network Connection
// ------------------------
let fiberConnections = [
    [0, 1, 3], [0, 2, 6], [1, 2, 1],
    [1, 3, 5], [2, 3, 2], [3, 4, 4]
];
console.log("Example 4 - Fiber Network Cost:", kruskalMST(5, fiberConnections));

// ------------------------
// Example 5: City Road Construction Problem
// ------------------------
let cityRoads = [
    [0, 1, 5], [0, 2, 8], [1, 2, 3],
    [1, 3, 7], [2, 3, 4], [3, 4, 6],
    [2, 4, 9]
];
console.log("Example 5 - City Road MST Cost:", kruskalMST(5, cityRoads));

