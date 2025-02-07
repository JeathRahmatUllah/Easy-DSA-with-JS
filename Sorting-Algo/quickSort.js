// ==========================================================
// 1️⃣ Example 1: Basic Quick Sort (Ascending Order)
// ----------------------------------------------------------
// This is the classic Quick Sort algorithm that sorts an array
// in ascending order. We choose the last element as the pivot,
// partition the array into elements less than the pivot (left)
// and elements greater than or equal to the pivot (right),
// and then recursively sort the partitions.

function quickSort(arr) {
  // Base case: arrays with 0 or 1 element are already sorted.
  if (arr.length <= 1) return arr;

  // Choose the pivot element (using the last element).
  const pivot = arr[arr.length - 1];

  // Arrays to store elements less than and greater than (or equal to) pivot.
  let left = [];
  let right = [];

  // Partition the array (exclude the pivot element).
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]); // Elements smaller than pivot go into left.
    } else {
      right.push(arr[i]); // Elements greater than or equal go into right.
    }
  }

  // Recursively sort left and right, then combine.
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Test Example 1:
let arr1 = [10, 7, 8, 9, 1, 5];
console.log("Example 1 - Sorted (Ascending):", quickSort(arr1));
// Expected Output: [1, 5, 7, 8, 9, 10]

// ==========================================================
// 2️⃣ Example 2: Quick Sort for Descending Order
// ----------------------------------------------------------
// This variation sorts the array in descending order.
// The only change is the comparison in the partition step:
// elements greater than the pivot go to the left.

function quickSortDescending(arr) {
  if (arr.length <= 1) return arr;

  // Choose the pivot element.
  const pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  // Partition the array based on descending order.
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      left.push(arr[i]); // For descending, larger elements go left.
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSortDescending(left), pivot, ...quickSortDescending(right)];
}

// Test Example 2:
let arr2 = [10, 7, 8, 9, 1, 5];
console.log("Example 2 - Sorted (Descending):", quickSortDescending(arr2));
// Expected Output: [10, 9, 8, 7, 5, 1]

// ==========================================================
// 3️⃣ Example 3: QuickSelect (Finding the k-th Smallest Element)
// ----------------------------------------------------------
// QuickSelect is a variant of Quick Sort used to find the k-th smallest element.
// It partitions the array similarly and then only recurses into the partition
// that contains the k-th element, reducing the average time complexity.

function quickSelect(arr, k) {
  // If the array has one element, return it.
  if (arr.length === 1) return arr[0];

  // Choose the pivot element.
  const pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  // Partition the array (excluding the pivot).
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Determine the position of the pivot.
  if (k <= left.length) {
    return quickSelect(left, k); // k-th element is in the left partition.
  } else if (k === left.length + 1) {
    return pivot; // Pivot is the k-th smallest element.
  } else {
    // Adjust k for the right partition.
    return quickSelect(right, k - left.length - 1);
  }
}

// Test Example 3:
let arr3 = [7, 10, 4, 3, 20, 15];
let k = 3;
console.log("Example 3 - 3rd Smallest Element:", quickSelect(arr3, k));
// Expected Output: 7 (Sorted order: [3, 4, 7, 10, 15, 20])

// ==========================================================
// 4️⃣ Example 4: Quick Sort on an Array of Objects (Sorting by Property)
// ----------------------------------------------------------
// Imagine we have a list of tasks, each with a description and a priority.
// We want to sort these tasks by priority (lower number means higher priority).
// We use Quick Sort, comparing the 'priority' property of each task.

function quickSortTasks(tasks) {
  if (tasks.length <= 1) return tasks;

  // Choose the pivot task.
  const pivot = tasks[tasks.length - 1];
  let left = [];
  let right = [];

  // Partition tasks based on their priority.
  for (let i = 0; i < tasks.length - 1; i++) {
    if (tasks[i].priority < pivot.priority) {
      left.push(tasks[i]);
    } else {
      right.push(tasks[i]);
    }
  }

  return [...quickSortTasks(left), pivot, ...quickSortTasks(right)];
}

// Test Example 4:
let tasks = [
  { description: "Do homework", priority: 2 },
  { description: "Clean room", priority: 5 },
  { description: "Finish project", priority: 1 },
  { description: "Play outside", priority: 4 },
  { description: "Read a book", priority: 3 }
];

let sortedTasks = quickSortTasks(tasks);
console.log("Example 4 - Sorted Tasks by Priority:");
sortedTasks.forEach(task => {
  console.log(`${task.description} - Priority: ${task.priority}`);
});
// Expected Output (sorted by priority ascending):
// Finish project - Priority: 1
// Do homework - Priority: 2
// Read a book - Priority: 3
// Play outside - Priority: 4
// Clean room - Priority: 5

// ==========================================================
// 5️⃣ Example 5: Randomized Quick Sort (Advanced)
// ----------------------------------------------------------
// Randomized Quick Sort selects a pivot randomly, which helps avoid the worst-case
// scenario (already sorted arrays, etc.). The rest of the algorithm remains the same.

function randomizedQuickSort(arr) {
  if (arr.length <= 1) return arr;

  // Randomly choose a pivot index.
  const pivotIndex = Math.floor(Math.random() * arr.length);
  const pivot = arr[pivotIndex];

  // Create a new array without the pivot.
  const arrWithoutPivot = [
    ...arr.slice(0, pivotIndex),
    ...arr.slice(pivotIndex + 1)
  ];

  let left = [];
  let right = [];

  // Partition the array based on the pivot.
  for (let i = 0; i < arrWithoutPivot.length; i++) {
    if (arrWithoutPivot[i] < pivot) {
      left.push(arrWithoutPivot[i]);
    } else {
      right.push(arrWithoutPivot[i]);
    }
  }

  return [...randomizedQuickSort(left), pivot, ...randomizedQuickSort(right)];
}

// Test Example 5:
let arr5 = [12, 4, 5, 6, 7, 3, 1, 15];
console.log("Example 5 - Randomized Quick Sort Sorted Array:", randomizedQuickSort(arr5));
// Expected Output: [1, 3, 4, 5, 6, 7, 12, 15] (order may vary due to randomness)

