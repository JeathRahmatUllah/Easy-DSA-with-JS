// ------------------------
// Example 1: Basic Prim's Algorithm (Adjacency Matrix)
// ------------------------

/**
 * Function to implement Prim's Algorithm using an adjacency matrix.
 * @param {number[][]} graph - A 2D matrix representing the weighted graph.
 */
function primMST(graph) {
    let V = graph.length; // Number of vertices
    let selected = new Array(V).fill(false); // Track visited nodes
    let minEdge = new Array(V).fill(Infinity); // Store the minimum weight of edges
    let parent = new Array(V).fill(-1); // Store parent nodes for the MST

    minEdge[0] = 0; // Start from the first node

    for (let count = 0; count < V - 1; count++) {
        let u = -1;

        // Find the node with the smallest edge not yet included in the MST
        for (let v = 0; v < V; v++) {
            if (!selected[v] && (u === -1 || minEdge[v] < minEdge[u])) {
                u = v;
            }
        }

        selected[u] = true; // Include this node in MST

        // Update adjacent nodes
        for (let v = 0; v < V; v++) {
            if (graph[u][v] && !selected[v] && graph[u][v] < minEdge[v]) {
                minEdge[v] = graph[u][v];
                parent[v] = u;
            }
        }
    }

    // Print the resulting Minimum Spanning Tree (MST)
    console.log("Example 1 - Basic Prim's Algorithm");
    console.log("Edge   Weight");
    for (let i = 1; i < V; i++) {
        console.log(`${parent[i]} - ${i}    ${graph[i][parent[i]]}`);
    }
}

// Example Graph (Adjacency Matrix)
let graph1 = [
    [0, 2, 0, 6, 0],
    [2, 0, 3, 8, 5],
    [0, 3, 0, 0, 7],
    [6, 8, 0, 0, 9],
    [0, 5, 7, 9, 0]
];

primMST(graph1);

// ------------------------
// Example 2: Prim's Algorithm (Adjacency List)
// ------------------------

/**
 * Prim's Algorithm using an adjacency list.
 * @param {number} n - Number of nodes
 * @param {number[][]} edges - List of edges [u, v, weight]
 */
function primsAdjList(n, edges) {
    let graph = new Map();

    // Build adjacency list
    for (let [u, v, w] of edges) {
        if (!graph.has(u)) graph.set(u, []);
        if (!graph.has(v)) graph.set(v, []);
        graph.get(u).push([v, w]);
        graph.get(v).push([u, w]);
    }

    let minEdge = new Array(n).fill(Infinity);
    let visited = new Array(n).fill(false);
    let parent = new Array(n).fill(-1);
    minEdge[0] = 0;
    let totalCost = 0;

    // Find MST
    for (let i = 0; i < n; i++) {
        let u = -1;
        for (let j = 0; j < n; j++) {
            if (!visited[j] && (u === -1 || minEdge[j] < minEdge[u])) {
                u = j;
            }
        }

        visited[u] = true;
        totalCost += minEdge[u];

        for (let [v, w] of graph.get(u) || []) {
            if (!visited[v] && w < minEdge[v]) {
                minEdge[v] = w;
                parent[v] = u;
            }
        }
    }

    console.log("Example 2 - Prim's Algorithm using Adjacency List");
    console.log("Total Minimum Cost:", totalCost);
}

// Example Graph (Adjacency List)
let edges = [[0, 1, 4], [0, 2, 6], [1, 2, 2], [1, 3, 5], [2, 3, 8]];
primsAdjList(4, edges);

// ------------------------
// Example 3: Connecting Points with Minimum Cost
// ------------------------

/**
 * Prim's Algorithm to connect points with minimum cost.
 * @param {number[][]} points - Array of (x, y) coordinates.
 */
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

    console.log("Example 3 - Min Cost to Connect Points:", totalCost);
}

minCostConnectPoints([[0,0],[2,2],[3,10],[5,2],[7,0]]);

// ------------------------
// Example 4: Minimum Cost to Connect Cities
// ------------------------

/**
 * Prim's Algorithm for connecting cities with minimum cost.
 * @param {number} n - Number of cities
 * @param {number[][]} connections - List of edges [city1, city2, cost]
 */
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

        if (minEdge[u] === Infinity) return -1;
        visited[u] = true;
        totalCost += minEdge[u];

        for (let [v, cost] of (graph.get(u) || [])) {
            if (!visited[v] && cost < minEdge[v]) {
                minEdge[v] = cost;
            }
        }
    }

    console.log("Example 4 - Min Cost to Connect Cities:", totalCost);
}

minCostToConnectCities(4, [[1,2,3],[3,4,4],[1,3,1],[4,2,2]]);
