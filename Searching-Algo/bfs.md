

## **1️⃣ Teaching BFS**
### **🎯 Concept of BFS**
Imagine you are in a **maze**, and you want to find the shortest path to the exit. Instead of randomly choosing a path, you **explore all paths level by level**.  

👉 **BFS** works like that! It starts from one point, explores all **nearby** locations first, then moves **further away step by step**.

📌 **Analogy**: Think of BFS like throwing a rock in a pond—the ripples spread outward evenly.

---

## **2️⃣ Basic BFS Example in JavaScript**
### **🌟 Example 1: BFS in a Graph**
```javascript
// Basic BFS in an undirected graph
function bfs(graph, startNode) {
    let queue = [startNode]; // Queue to store nodes to explore
    let visited = new Set(); // Set to track visited nodes
    visited.add(startNode);

    while (queue.length > 0) {
        let node = queue.shift(); // Remove the front node
        console.log(node); // Process the node (printing here)

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor); // Add new nodes to the queue
            }
        }
    }
}

// Graph representation (Adjacency List)
const graph = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F", "G"],
    D: ["B"],
    E: ["B", "H"],
    F: ["C"],
    G: ["C"],
    H: ["E"]
};

bfs(graph, "A"); // Output: A B C D E F G H
```
🛠 **How it works?**
- Start at **A** → visit **B, C**.
- Then visit **D, E, F, G**.
- Finally, visit **H**.

---

## **3️⃣ LeetCode Problems Using BFS**
### **🔹 Easy: Number of Islands**
#### **📝 Problem**
Given a 2D grid of `1s` (land) and `0s` (water), find the number of **islands** (connected 1s).

#### **💡 Pseudo Code**
```
1. Loop through the grid and find '1' (land).
2. If found, perform BFS to mark the entire island (convert '1' → '0').
3. Increase island count and continue checking the grid.
```

#### **💻 JavaScript Solution**
```javascript
function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;

    let rows = grid.length, cols = grid[0].length, count = 0;

    function bfs(r, c) {
        let queue = [[r, c]];
        grid[r][c] = "0"; // Mark as visited

        while (queue.length > 0) {
            let [x, y] = queue.shift();

            for (let [dx, dy] of [[1,0], [-1,0], [0,1], [0,-1]]) {
                let newX = x + dx, newY = y + dy;
                if (newX >= 0 && newY >= 0 && newX < rows && newY < cols && grid[newX][newY] === "1") {
                    queue.push([newX, newY]);
                    grid[newX][newY] = "0"; // Mark as visited
                }
            }
        }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "1") {
                bfs(r, c);
                count++; // Found an island
            }
        }
    }

    return count;
}

// Example Usage
const grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
];

console.log(numIslands(grid)); // Output: 3
```

---

### **🔹 Medium: Shortest Path in Binary Matrix**
#### **📝 Problem**
Find the **shortest path** from the **top-left** to **bottom-right** in a binary matrix (`0` = open path, `1` = blocked).

#### **💡 Pseudo Code**
```
1. Use BFS to explore from (0,0).
2. Move in all 8 directions if allowed.
3. Keep track of distance from the start.
4. Return the shortest path length.
```

#### **💻 JavaScript Solution**
```javascript
function shortestPathBinaryMatrix(grid) {
    let n = grid.length;
    if (grid[0][0] === 1 || grid[n-1][n-1] === 1) return -1;

    let queue = [[0, 0, 1]]; // (row, col, distance)
    let directions = [[1,0], [-1,0], [0,1], [0,-1], [1,1], [1,-1], [-1,1], [-1,-1]];

    while (queue.length > 0) {
        let [x, y, dist] = queue.shift();

        if (x === n - 1 && y === n - 1) return dist;

        for (let [dx, dy] of directions) {
            let newX = x + dx, newY = y + dy;
            if (newX >= 0 && newY >= 0 && newX < n && newY < n && grid[newX][newY] === 0) {
                queue.push([newX, newY, dist + 1]);
                grid[newX][newY] = 1; // Mark as visited
            }
        }
    }

    return -1; // No path found
}

// Example Usage
console.log(shortestPathBinaryMatrix([
    [0,0,0],
    [1,1,0],
    [1,1,0]
])); // Output: 4
```

---

## **4️⃣ Real-Life BFS Problem**
### **🔹 Problem: Find the Shortest Word Ladder Transformation**
#### **📝 Problem**
Given a **start** and **end** word, find the shortest transformation sequence by changing one letter at a time, ensuring each transformation is a real word.

#### **💡 Pseudo Code**
```
1. Use BFS starting from the beginWord.
2. Change one letter at a time and check if it exists in wordList.
3. Track transformation steps.
4. If endWord is reached, return the number of steps.
```

#### **💻 JavaScript Solution**
```javascript
function wordLadder(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    let queue = [[beginWord, 1]];

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

// Example Usage
console.log(wordLadder("hit", "cog", ["hot","dot","dog","lot","log","cog"])); // Output: 5
```

---

## **Summary**
1️⃣ **Concept of BFS** using real-life analogies.  
2️⃣ **Basic BFS example in a graph**.  
3️⃣ **LeetCode problems** (Easy & Medium).  
4️⃣ **Real-life example** (Word Ladder).  

