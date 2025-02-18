// ======================================================
// Kahn's Algorithm Examples (Beginner to Hard)
// ======================================================

// ======================================================
// Example 1: Basic Topological Sort on a Simple Graph
// ------------------------------------------------------
// This example shows a basic topological sort using Kahn's Algorithm.
// The graph is represented as an object (adjacency list) where keys are nodes,
// and values are arrays of nodes that depend on the key node.
function kahnTopologicalSortBasic(graph) {
  // Compute in-degrees for all nodes.
  const inDegree = {};
  for (let node in graph) {
    inDegree[node] = 0;
  }
  // Update in-degree counts based on edges.
  for (let node in graph) {
    for (let neighbor of graph[node]) {
      if (inDegree[neighbor] === undefined) inDegree[neighbor] = 0;
      inDegree[neighbor]++;
    }
  }
  
  // Initialize queue with nodes that have 0 in-degree (no prerequisites).
  const queue = [];
  for (let node in inDegree) {
    if (inDegree[node] === 0) {
      queue.push(node);
    }
  }
  
  const sortedOrder = [];
  // Process nodes until the queue is empty.
  while (queue.length) {
    const current = queue.shift();
    sortedOrder.push(current);
    
    // Decrease in-degree of neighbors.
    for (let neighbor of (graph[current] || [])) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }
  
  // If sortedOrder doesn't include all nodes, there's a cycle.
  if (sortedOrder.length !== Object.keys(graph).length) {
    return "Cycle detected - no valid topological order exists.";
  }
  
  return sortedOrder;
}

// Test for Example 1:
const graph1 = {
  A: ['B', 'C'],  // A must be done before B and C.
  B: ['D'],       // B must be done before D.
  C: ['D'],       // C must be done before D.
  D: []           // D has no outgoing edges.
};
console.log("Example 1 - Basic Topological Sort:", kahnTopologicalSortBasic(graph1));


// ======================================================
// Example 2: Course Schedule (Easy LeetCode Problem)
// ------------------------------------------------------
// Given numCourses and prerequisites (each pair [course, prereq]),
// find a valid order to complete all courses.
function findCourseSchedule(numCourses, prerequisites) {
  // Build the graph and in-degree array.
  const graph = {};
  const inDegree = Array(numCourses).fill(0);
  
  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }
  
  // For each prerequisite pair [course, prereq]:
  // prereq -> course, so increment in-degree of course.
  for (let [course, pre] of prerequisites) {
    graph[pre].push(course);
    inDegree[course]++;
  }
  
  // Initialize queue with courses having 0 prerequisites.
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }
  
  const order = [];
  // Process the queue.
  while (queue.length) {
    let curr = queue.shift();
    order.push(curr);
    for (let neighbor of graph[curr]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }
  
  // If not all courses are in the order, a cycle exists.
  return order.length === numCourses ? order : "Cycle detected - no valid course order.";
}

// Test for Example 2:
console.log("Example 2 - Course Schedule Order:", findCourseSchedule(4, [[1,0], [2,0], [3,1], [3,2]]));


// ======================================================
// Example 3: Course Schedule II (Medium LeetCode Problem)
// ------------------------------------------------------
// This function returns one valid order of courses (if possible).
function findCourseOrderII(numCourses, prerequisites) {
  const graph = {};
  const inDegree = Array(numCourses).fill(0);
  
  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }
  
  for (let [course, pre] of prerequisites) {
    graph[pre].push(course);
    inDegree[course]++;
  }
  
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }
  
  const order = [];
  while (queue.length) {
    let curr = queue.shift();
    order.push(curr);
    for (let neighbor of graph[curr]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }
  
  return order.length === numCourses ? order : [];
}

// Test for Example 3:
console.log("Example 3 - Course Order II:", findCourseOrderII(6, [[1,0],[2,0],[3,1],[4,1],[5,2],[3,2]]));


// ======================================================
// Example 4: Real-Life Project Task Scheduling
// ------------------------------------------------------
// Imagine scheduling tasks in a project where each task depends on others.
// Here, tasks are represented by strings.
function scheduleProjectTasks(tasks, dependencies) {
  // Build the graph and in-degree mapping.
  const graph = {};
  const inDegree = {};
  
  // Initialize graph and inDegree for each task.
  tasks.forEach(task => {
    graph[task] = [];
    inDegree[task] = 0;
  });
  
  // For each dependency [task, prerequisite],
  // prerequisite -> task, so increase inDegree of task.
  for (let [task, pre] of dependencies) {
    graph[pre].push(task);
    inDegree[task]++;
  }
  
  // Queue tasks with no prerequisites.
  const queue = [];
  tasks.forEach(task => {
    if (inDegree[task] === 0) queue.push(task);
  });
  
  const order = [];
  while (queue.length) {
    const current = queue.shift();
    order.push(current);
    for (let neighbor of graph[current]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }
  
  if (order.length !== tasks.length) {
    return "Cycle detected - scheduling not possible.";
  }
  return order;
}

// Test for Example 4:
const projectTasks = ["Design", "Coding", "Testing", "Deployment"];
const taskDependencies = [
  ["Coding", "Design"],    // Design must be completed before Coding.
  ["Testing", "Coding"],   // Coding must be completed before Testing.
  ["Deployment", "Testing"]// Testing must be completed before Deployment.
];
console.log("Example 4 - Project Task Order:", scheduleProjectTasks(projectTasks, taskDependencies));


// ======================================================
// Example 5: Complex Dependency Graph with Cycle Detection (Hard)
// ------------------------------------------------------
// This example shows a graph with a cycle. Kahn's algorithm will detect the cycle.
function kahnTopologicalSortWithCycleDetection(graph) {
  const inDegree = {};
  // Initialize inDegree for every node.
  for (let node in graph) {
    inDegree[node] = 0;
  }
  // Calculate in-degree based on edges.
  for (let node in graph) {
    for (let neighbor of graph[node]) {
      if (inDegree[neighbor] === undefined) inDegree[neighbor] = 0;
      inDegree[neighbor]++;
    }
  }
  
  // Initialize queue with nodes that have in-degree 0.
  const queue = [];
  for (let node in inDegree) {
    if (inDegree[node] === 0) queue.push(node);
  }
  
  const sortedOrder = [];
  while (queue.length) {
    const current = queue.shift();
    sortedOrder.push(current);
    for (let neighbor of (graph[current] || [])) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }
  
  // If the sorted order doesn't include every node, a cycle exists.
  if (sortedOrder.length !== Object.keys(graph).length) {
    return "Cycle detected - no valid topological order exists.";
  }
  return sortedOrder;
}

// Test for Example 5:
const graphWithCycle = {
  A: ['B'],
  B: ['C'],
  C: ['A'],  // Cycle here: A -> B -> C -> A
  D: ['C']   // D depends on C
};
console.log("Example 5 - Topological Sort with Cycle Detection:", kahnTopologicalSortWithCycleDetection(graphWithCycle));

