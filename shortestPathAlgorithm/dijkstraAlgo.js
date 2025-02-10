// Dijkstra's Algorithm Examples (Beginner to Hard)

// Priority Queue Implementation for efficiently selecting the shortest path
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

// Dijkstra's Algorithm Function
// Finds the shortest path from the start node to all other nodes in a weighted graph
function dijkstra(graph, start) {
    let distances = {}; // Stores the shortest distances from start node
    let pq = new PriorityQueue(); // Priority queue to determine next closest node
    let previous = {}; // Stores the shortest path tree

    // Initialize distances and previous nodes
    for (let node in graph) {
        distances[node] = Infinity;
        previous[node] = null;
    }
    distances[start] = 0;
    pq.enqueue(start, 0);

    while (!pq.isEmpty()) {
        let { val: currentNode } = pq.dequeue();
        
        // Process each neighbor of the current node
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

// 1. Simple Graph Example
// Basic test case with a small graph
const graph1 = {
    A: { B: 4, C: 2 },
    B: { A: 4, D: 1 },
    C: { A: 2, D: 8 },
    D: { B: 1, C: 8, E: 3 },
    E: { D: 3 }
};
console.log("1. Simple Graph:", dijkstra(graph1, "A"));

// 2. Shortest Path in a Grid
// Finds the shortest path in a 2D grid where 1 represents a walkable path
function shortestPath(grid) {
    let rows = grid.length, cols = grid[0].length;
    let directions = [[0,1], [1,0], [0,-1], [-1,0]]; // Right, Down, Left, Up
    let pq = new PriorityQueue();
    let distances = Array.from({ length: rows }, () => Array(cols).fill(Infinity));

    pq.enqueue([0, 0], 0);
    distances[0][0] = 0;

    while (!pq.isEmpty()) {
        let { val: [r, c], priority: dist } = pq.dequeue();
        if (r === rows - 1 && c === cols - 1) return dist; // Reached destination
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
    return -1; // No valid path found
}
console.log("2. Shortest Path in Grid:", shortestPath([[1,1,0], [1,1,1], [0,1,1]]));

// 3. Network Delay Time
// Determines how long it takes for a signal to reach all nodes in a network
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
console.log("3. Network Delay Time:", networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2));

// 4. Minimum Cost to Travel in City (Weighted Grid)
// Finds the minimum cost path in a weighted 2D grid
function minTravelCost(grid) {
    let rows = grid.length, cols = grid[0].length;
    let directions = [[0,1], [1,0], [0,-1], [-1,0]];
    let pq = new PriorityQueue();
    let distances = Array.from({ length: rows }, () => Array(cols).fill(Infinity));

    pq.enqueue([0, 0], grid[0][0]);
    distances[0][0] = grid[0][0];

    while (!pq.isEmpty()) {
        let { val: [r, c], priority: cost } = pq.dequeue();
        if (r === rows - 1 && c === cols - 1) return cost;
        for (let [dr, dc] of directions) {
            let nr = r + dr, nc = c + dc;
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
                let newCost = cost + grid[nr][nc];
                if (newCost < distances[nr][nc]) {
                    distances[nr][nc] = newCost;
                    pq.enqueue([nr, nc], newCost);
                }
            }
        }
    }
    return -1;
}
console.log("4. Min Travel Cost:", minTravelCost([[1,3,1],[1,5,1],[4,2,1]]));

