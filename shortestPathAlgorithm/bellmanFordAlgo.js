// Bellman-Ford Algorithm - 5 Examples from Beginner to Hard

/**
 * Example 1: Basic Bellman-Ford Algorithm (Find shortest paths)
 * Problem: Given a graph, find the shortest distance from a source node to all other nodes.
 */
function bellmanFordBasic(graph, V, start) {
    let distances = new Array(V).fill(Infinity);
    distances[start] = 0;

    // Relax all edges V-1 times
    for (let i = 0; i < V - 1; i++) {
        for (let [u, v, weight] of graph) {
            if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
                distances[v] = distances[u] + weight;
            }
        }
    }

    return distances;
}

// Test Case 1
console.log("Example 1 - Basic Bellman-Ford:", bellmanFordBasic([[0,1,4],[0,2,5],[1,2,-3],[2,3,3]], 4, 0));


/**
 * Example 2: Detecting Negative Weight Cycles
 * Problem: Find if there is a negative weight cycle in the graph.
 */
function detectNegativeCycle(graph, V) {
    let distances = new Array(V).fill(Infinity);
    distances[0] = 0;

    for (let i = 0; i < V - 1; i++) {
        for (let [u, v, weight] of graph) {
            if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
                distances[v] = distances[u] + weight;
            }
        }
    }

    // Check for negative weight cycle
    for (let [u, v, weight] of graph) {
        if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
            return "Negative Weight Cycle Detected!";
        }
    }

    return "No Negative Weight Cycle";
}

// Test Case 2
console.log("Example 2 - Negative Cycle Detection:", detectNegativeCycle([[0,1,1],[1,2,-1],[2,0,-1]], 3));


/**
 * Example 3: Shortest Path in a Flight Network (With Negative Prices)
 * Problem: Find the cheapest flight from source to all other cities, considering possible discounts (negative costs).
 */
function findCheapestFlights(n, flights, src) {
    let dist = new Array(n).fill(Infinity);
    dist[src] = 0;

    for (let i = 0; i < n - 1; i++) {
        for (let [u, v, price] of flights) {
            if (dist[u] !== Infinity && dist[u] + price < dist[v]) {
                dist[v] = dist[u] + price;
            }
        }
    }

    return dist;
}

// Test Case 3
console.log("Example 3 - Cheapest Flights:", findCheapestFlights(4, [[0,1,100],[1,2,-50],[2,3,100],[0,2,500]], 0));


/**
 * Example 4: Network Delay Time (How long for signals to reach all nodes?)
 * Problem: A network consists of `n` nodes connected by weighted edges. Find the time it takes for signals from the source node to reach all nodes.
 */
function networkDelayTime(times, n, k) {
    let dist = new Array(n + 1).fill(Infinity);
    dist[k] = 0;

    for (let i = 0; i < n - 1; i++) {
        for (let [u, v, time] of times) {
            if (dist[u] !== Infinity && dist[u] + time < dist[v]) {
                dist[v] = dist[u] + time;
            }
        }
    }

    let maxTime = Math.max(...dist.slice(1));
    return maxTime === Infinity ? -1 : maxTime;
}

// Test Case 4
console.log("Example 4 - Network Delay Time:", networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2));


/**
 * Example 5: Routing in a City (Real-Life Example)
 * Problem: Find the fastest travel time from a given city to all other cities in a road network.
 */
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

    // Detect Infinite Travel Loop
    for (let [u, v, time] of roads) {
        if (dist[u] !== Infinity && dist[u] + time < dist[v]) {
            return "⚠️ Traffic system has an infinite loop (negative cycle)!";
        }
    }

    return dist;
}

// Test Case 5
console.log("Example 5 - Fastest Routes:", fastestRoutes([[0,1,10],[1,2,20],[2,3,-5],[3,1,5]], 4, 0));

