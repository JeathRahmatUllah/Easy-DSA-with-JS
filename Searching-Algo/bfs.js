// 1️⃣ Beginner: Basic BFS Traversal in an Undirected Graph
function bfsGraph(graph, startNode) {
    let queue = [startNode];  // Queue for BFS
    let visited = new Set();  // Set to keep track of visited nodes
    visited.add(startNode);

    while (queue.length > 0) {
        let node = queue.shift();  // Dequeue the first element
        console.log(node);  // Process node (print it here)

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);  // Enqueue unvisited neighbors
            }
        }
    }
}

// Graph representation (Adjacency List)
const graph1 = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "G"],
    F: ["C"],
    G: ["E"]
};

console.log("BFS Traversal:");
bfsGraph(graph1, "A"); // Output: A B C D E F G

// --------------------------------------------

// 2️⃣ Beginner: BFS to Find the Shortest Path in an Unweighted Graph
function shortestPath(graph, start, target) {
    let queue = [[start, 0]];  // Store node and distance
    let visited = new Set();
    visited.add(start);

    while (queue.length > 0) {
        let [node, distance] = queue.shift();

        if (node === target) return distance;  // If target is reached, return distance

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, distance + 1]);
            }
        }
    }

    return -1;  // If no path found
}

console.log("\nShortest Path from A to G:", shortestPath(graph1, "A", "G")); // Output: 3

// --------------------------------------------

// 3️⃣ Intermediate: Number of Islands Problem (BFS on a Grid)
function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;
    let rows = grid.length, cols = grid[0].length, count = 0;

    function bfs(r, c) {
        let queue = [[r, c]];
        grid[r][c] = "0";  // Mark as visited

        while (queue.length > 0) {
            let [x, y] = queue.shift();
            for (let [dx, dy] of [[1,0], [-1,0], [0,1], [0,-1]]) {
                let newX = x + dx, newY = y + dy;
                if (newX >= 0 && newY >= 0 && newX < rows && newY < cols && grid[newX][newY] === "1") {
                    queue.push([newX, newY]);
                    grid[newX][newY] = "0";  // Mark visited
                }
            }
        }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "1") {
                bfs(r, c);
                count++;  // Found an island
            }
        }
    }

    return count;
}

const grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
];

console.log("\nNumber of Islands:", numIslands(grid)); // Output: 3

// --------------------------------------------

// 4️⃣ Hard: Shortest Path in a Binary Matrix
function shortestPathBinaryMatrix(grid) {
    let n = grid.length;
    if (grid[0][0] === 1 || grid[n-1][n-1] === 1) return -1;  // If start or end is blocked

    let queue = [[0, 0, 1]];  // (row, col, distance)
    let directions = [[1,0], [-1,0], [0,1], [0,-1], [1,1], [1,-1], [-1,1], [-1,-1]];

    while (queue.length > 0) {
        let [x, y, dist] = queue.shift();

        if (x === n - 1 && y === n - 1) return dist;  // If reached destination

        for (let [dx, dy] of directions) {
            let newX = x + dx, newY = y + dy;
            if (newX >= 0 && newY >= 0 && newX < n && newY < n && grid[newX][newY] === 0) {
                queue.push([newX, newY, dist + 1]);
                grid[newX][newY] = 1;  // Mark visited
            }
        }
    }

    return -1;  // No path found
}

console.log("\nShortest Path in Binary Matrix:", shortestPathBinaryMatrix([
    [0,0,0],
    [1,1,0],
    [1,1,0]
])); // Output: 4

// --------------------------------------------

// 5️⃣ Hard: Word Ladder (Transform One Word to Another)
function wordLadder(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    let queue = [[beginWord, 1]];  // (word, transformation steps)

    while (queue.length > 0) {
        let [word, steps] = queue.shift();

        for (let i = 0; i < word.length; i++) {
            for (let c of 'abcdefghijklmnopqrstuvwxyz') {
                let newWord = word.slice(0, i) + c + word.slice(i + 1);
                
                if (newWord === endWord) return steps + 1;
                if (wordSet.has(newWord)) {
                    queue.push([newWord, steps + 1]);
                    wordSet.delete(newWord);
                }
            }
        }
    }

    return 0;
}

console.log("\nWord Ladder Steps:", wordLadder("hit", "cog", ["hot","dot","dog","lot","log","cog"])); // Output: 5
