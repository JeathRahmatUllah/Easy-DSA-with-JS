

## **1) Teaching Kahn’s Algorithm**

Imagine you have a list of chores to do, but some chores can only be done after other chores are finished. For example, you can’t clean your room until you’ve picked up your toys.  
 
**Kahn’s Algorithm** helps you figure out in which order to do your chores so that you never try to do a chore before its pre-requisite is done. The algorithm works like this:

- **Step 1:** Look at all the chores (tasks) and find the ones that don’t depend on any other chore. These are like the chores you can start right away.
- **Step 2:** Do those chores, then remove them from your list. This might free up more chores that were waiting for them.
- **Step 3:** Repeat until all chores are done.

In computer science, we call the list of tasks a **directed acyclic graph (DAG)** and Kahn’s Algorithm gives us a **topological order**—an order in which the tasks can be completed.

---

## **2) Basic Example with Code**

Below is a simple JavaScript example of Kahn’s Algorithm. This code takes a DAG (represented with an adjacency list) and outputs a valid ordering of the tasks.

```javascript
/**
 * Function to perform topological sort using Kahn's Algorithm.
 * @param {Object} graph - An object where keys are node IDs and values are arrays of neighboring node IDs.
 * @returns {string[]} - A topologically sorted array of node IDs.
 */
function kahnTopologicalSort(graph) {
  // Step 1: Compute in-degrees of all nodes.
  const inDegree = {};
  for (let node in graph) {
    inDegree[node] = 0;
  }
  for (let node in graph) {
    for (let neighbor of graph[node]) {
      if (inDegree[neighbor] === undefined) inDegree[neighbor] = 0;
      inDegree[neighbor]++;
    }
  }
  
  // Step 2: Collect nodes with in-degree 0 (no prerequisites).
  const queue = [];
  for (let node in inDegree) {
    if (inDegree[node] === 0) {
      queue.push(node);
    }
  }
  
  const sortedOrder = [];
  
  // Step 3: Process nodes from the queue.
  while (queue.length) {
    const current = queue.shift(); // Remove the node from the queue.
    sortedOrder.push(current); // Append it to the sorted order.
    
    // Reduce the in-degree of each neighbor.
    for (let neighbor of (graph[current] || [])) {
      inDegree[neighbor]--;
      // If in-degree becomes 0, add to queue.
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }
  
  // If sortedOrder length doesn't match number of nodes, there is a cycle.
  if (sortedOrder.length !== Object.keys(graph).length) {
    return "Graph has a cycle. No valid topological order exists.";
  }
  
  return sortedOrder;
}

// Basic Example:
const graphExample = {
  A: ['B', 'C'],  // Chore A must be done before B and C.
  B: ['D'],
  C: ['D'],
  D: []           // D has no outgoing edges.
};

console.log("Example 1 - Basic Kahn's Topological Sort:", kahnTopologicalSort(graphExample));
```

---

## **3) LeetCode-Style Problems**

### **Easy Problem: Course Schedule (Find One Valid Order)**
#### **Pseudo Code:**
```
1. Compute in-degrees for each course.
2. Initialize a queue with courses that have no prerequisites.
3. While queue is not empty:
   a. Remove a course from the queue.
   b. Append it to the order.
   c. For each dependent course, reduce its in-degree by 1.
   d. If in-degree becomes 0, add it to the queue.
4. If the order contains all courses, return order; otherwise, return an empty array.
```

#### **JavaScript Solution:**
```javascript
/**
 * Function to determine a valid course schedule.
 * @param {number} numCourses - Total number of courses.
 * @param {number[][]} prerequisites - Each element is [course, prerequisite].
 * @returns {number[]} - A valid order of courses or empty array if impossible.
 */
function findCourseOrder(numCourses, prerequisites) {
  const graph = {};
  const inDegree = Array(numCourses).fill(0);
  
  // Build graph and in-degree array.
  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }
  for (let [course, pre] of prerequisites) {
    graph[pre].push(course);
    inDegree[course]++;
  }
  
  // Initialize queue with courses having no prerequisites.
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }
  
  const order = [];
  
  // Process the queue.
  while (queue.length) {
    const current = queue.shift();
    order.push(current);
    for (let neighbor of graph[current]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }
  
  // If all courses are processed, return the order; otherwise, return [].
  return order.length === numCourses ? order : [];
}

// Easy Problem Test:
console.log("Example 2 - Course Order:", findCourseOrder(4, [[1,0],[2,0],[3,1],[3,2]]));
```

---

### **Medium Problem: Course Schedule II (Return One Valid Order)**
#### **Pseudo Code:**
```
1. Build the graph and in-degree array from prerequisites.
2. Add all courses with in-degree 0 to a queue.
3. While the queue is not empty:
   a. Dequeue a course, add it to the result list.
   b. For each neighbor, reduce in-degree by 1.
   c. If in-degree becomes 0, add neighbor to the queue.
4. If the result list contains all courses, return the list; otherwise, return an empty list.
```

#### **JavaScript Solution:**
```javascript
/**
 * Function to determine a valid course schedule (Course Schedule II).
 * @param {number} numCourses - Total number of courses.
 * @param {number[][]} prerequisites - Each element is [course, prerequisite].
 * @returns {number[]} - A valid order of courses or empty array if impossible.
 */
function findCourseOrderII(numCourses, prerequisites) {
  const graph = {};
  const inDegree = Array(numCourses).fill(0);
  
  // Initialize graph.
  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }
  
  // Build graph and in-degree array.
  for (let [course, pre] of prerequisites) {
    graph[pre].push(course);
    inDegree[course]++;
  }
  
  const queue = [];
  // Enqueue courses with no prerequisites.
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }
  
  const order = [];
  
  // Process courses in queue.
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
  
  // Return valid order if all courses are taken; otherwise, return empty array.
  return order.length === numCourses ? order : [];
}

// Medium Problem Test:
console.log("Example 3 - Course Order II:", findCourseOrderII(6, [[1,0],[2,0],[3,1],[4,1],[5,2],[3,2]]));
```

---

## **4) Real-Life Problem Solving with Kahn’s Algorithm**

### **Real-Life Example: Task Scheduling in a Project**
Imagine you have a project with multiple tasks, and some tasks must be completed before others. Kahn’s Algorithm helps to determine an order in which to perform these tasks so that no task is started before its prerequisites are completed.

#### **Pseudo Code:**
```
1. Build a graph where each task is a node and edges represent task dependencies.
2. Compute in-degrees (number of prerequisites) for each task.
3. Initialize a queue with tasks having 0 in-degree.
4. While the queue is not empty:
   a. Remove a task from the queue and add it to the schedule.
   b. For each dependent task, reduce its in-degree by 1.
   c. If a dependent task’s in-degree becomes 0, add it to the queue.
5. If the schedule contains all tasks, return it; otherwise, indicate that there is a cycle (an issue in scheduling).
```

#### **JavaScript Solution:**
```javascript
/**
 * Function to determine a valid task order for project scheduling.
 * @param {string[]} tasks - Array of task names.
 * @param {Array.<[string, string]>} dependencies - Array of pairs [task, prerequisite].
 * @returns {string[]|string} - Valid order of tasks or error message if cycle detected.
 */
function scheduleTasks(tasks, dependencies) {
  // Build the graph and in-degree count
  const graph = {};
  const inDegree = {};
  
  // Initialize graph and inDegree for every task
  for (let task of tasks) {
    graph[task] = [];
    inDegree[task] = 0;
  }
  
  // Build graph from dependencies
  for (let [task, pre] of dependencies) {
    graph[pre].push(task);
    inDegree[task]++;
  }
  
  // Queue of tasks with no prerequisites
  const queue = [];
  for (let task of tasks) {
    if (inDegree[task] === 0) queue.push(task);
  }
  
  const order = [];
  
  // Process tasks using Kahn's algorithm
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
  
  // Check if all tasks are scheduled
  if (order.length !== tasks.length) {
    return "Error: There is a cycle in the tasks.";
  }
  return order;
}

// Real-Life Example Test:
const tasks = ["Design", "Coding", "Testing", "Deployment"];
const dependencies = [
  ["Coding", "Design"],   // Design must be done before Coding
  ["Testing", "Coding"],  // Coding must be done before Testing
  ["Deployment", "Testing"]  // Testing must be done before Deployment
];

console.log("Example 4 - Project Task Order:", scheduleTasks(tasks, dependencies));
```

---

## **Summary**
1. **Teaching Kahn's Algorithm:**  
   - We explained it with the analogy of scheduling chores that depend on each other.
2. **Basic Example:**  
   - A simple JavaScript implementation to compute a topological order.
3. **LeetCode-Style Problems:**  
   - **Easy:** Finding a valid course schedule.  
   - **Medium:** Course Schedule II returning one valid ordering.
4. **Real-Life Problem:**  
   - Scheduling project tasks using Kahn’s Algorithm.
