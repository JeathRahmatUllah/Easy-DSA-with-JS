// ------------------------
// Example 1: Basic Prim's Algorithm (Adjacency Matrix)
// ------------------------
function primMST(graph) {
    let V = graph.length;
    let selected = new Array(V).fill(false); // To track visited nodes
    let minEdge = new Array(V).fill(Infinity); // Store minimum edge weights
    let parent = new Array(V).fill(-1); // Store parent nodes

    minEdge[0] = 0; // Start from the first node

    for (let count = 0; count < V - 1; count++) {
        let u = -1;

        // Find the node with the smallest edge not yet included in the MST
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
function primsAdjList(n, edges) {
    let graph = new Map();

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

// ------------------------
// Example 5: Real-Life Problem - Fiber Optic Network
// ------------------------
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

    console.log("Example 5 - Fiber Optic Network:", totalCost);
}

fiberOpticNetwork(5, [[1,2,5],[1,3,10],[2,4,8],[3,4,3],[4,5,7]]);

