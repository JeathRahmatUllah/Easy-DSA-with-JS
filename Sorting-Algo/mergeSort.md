

## 1️⃣ Teaching "Merge Sort"

### **Concept:**
Imagine you have a big box of Lego pieces that are all mixed up, and you want to arrange them from the smallest to the biggest. Instead of trying to sort the whole box at once, you do this:

1. **Divide:** Split the box into two smaller boxes.
2. **Sort Each Small Box:** Keep splitting each small box until you have very tiny boxes with only one or two pieces. (A single piece or two pieces is already sorted!)
3. **Merge:** Now, you carefully combine the tiny boxes back together. While combining, you put the pieces in order from smallest to biggest.
4. **Result:** At the end, you get one big box of Lego pieces sorted from smallest to biggest.

This is how **Merge Sort** works—by dividing the problem into smaller pieces and then merging the sorted pieces back together.

---

## 2️⃣ Basic Example with Code

Below is a simple JavaScript example of Merge Sort:

```javascript
// 2️⃣ Basic Merge Sort Example in JavaScript

// Function to merge two sorted arrays into one sorted array
function merge(left, right) {
  let merged = []; // Array to hold the merged result
  let i = 0, j = 0;
  
  // Compare elements from both arrays and add the smaller one to 'merged'
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }
  
  // If there are remaining elements in left or right, add them
  return merged.concat(left.slice(i)).concat(right.slice(j));
}

// Merge sort function
function mergeSort(arr) {
  // Base case: if array has 0 or 1 element, it's already sorted
  if (arr.length <= 1) {
    return arr;
  }
  
  // Divide: find the middle index and split the array into two halves
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  
  // Conquer: merge the sorted halves
  return merge(left, right);
}

// Example usage:
let numbers = [38, 27, 43, 3, 9, 82, 10];
console.log("2️⃣ Sorted Array:", mergeSort(numbers));
// Expected Output: Sorted Array: [3, 9, 10, 27, 38, 43, 82]
```

---

## 3️⃣ LeetCode-Style Problems Using Merge Sort

### 🔹 **Easy Problem: Sort an Array Using Merge Sort**

**Problem Statement:**  
Given an unsorted array of numbers, return the sorted array using merge sort.

#### ✅ **Pseudo Code:**
```
function mergeSort(array):
    if length of array <= 1:
        return array
    mid = floor(length of array / 2)
    left = mergeSort(array[0...mid-1])
    right = mergeSort(array[mid...end])
    return merge(left, right)
```

#### 💻 **JavaScript Solution:**
*(The basic merge sort example above already solves this problem.)*
```javascript
function mergeSortEasy(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSortEasy(arr.slice(0, mid));
  let right = mergeSortEasy(arr.slice(mid));
  return merge(left, right);
}

// Test:
console.log("3️⃣ Easy Problem Sorted Array:", mergeSortEasy([5, 2, 9, 1, 5, 6]));
// Expected Output: [1, 2, 5, 5, 6, 9]
```

---

### 🔹 **Medium Problem: Count Inversions in an Array**

**Problem Statement:**  
An inversion in an array is a pair of elements that are out of order (i.e., a larger number appears before a smaller number). Use a modified merge sort to count the number of inversions in the array.

#### ✅ **Pseudo Code:**
```
function countInversions(array):
    if length(array) <= 1:
        return array, 0
    mid = floor(length(array)/2)
    left, invLeft = countInversions(array[0...mid-1])
    right, invRight = countInversions(array[mid...end])
    merged, invMerge = mergeAndCount(left, right)
    totalInversions = invLeft + invRight + invMerge
    return merged, totalInversions

function mergeAndCount(left, right):
    initialize inversion count to 0
    while merging left and right:
        if left[i] <= right[j]:
            add left[i] to merged array
        else:
            add right[j] to merged array
            inversion count += (number of remaining elements in left)
```

#### 💻 **JavaScript Solution:**
```javascript
// Function to merge two sorted arrays and count inversions
function mergeAndCount(left, right) {
  let merged = [];
  let count = 0;
  let i = 0, j = 0;

  // Merge the arrays while counting inversions
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
      // All remaining elements in left are inversions with right[j]
      count += left.length - i;
    }
  }
  
  // Append remaining elements
  merged = merged.concat(left.slice(i)).concat(right.slice(j));
  return { merged, count };
}

// Modified merge sort that counts inversions
function mergeSortCount(arr) {
  if (arr.length <= 1) return { sorted: arr, count: 0 };

  let mid = Math.floor(arr.length / 2);
  let leftResult = mergeSortCount(arr.slice(0, mid));
  let rightResult = mergeSortCount(arr.slice(mid));
  
  let mergeResult = mergeAndCount(leftResult.sorted, rightResult.sorted);
  let totalCount = leftResult.count + rightResult.count + mergeResult.count;
  
  return { sorted: mergeResult.merged, count: totalCount };
}

// Test the inversion count
let testArray = [2, 4, 1, 3, 5];
let result = mergeSortCount(testArray);
console.log("3️⃣ Medium Problem - Sorted Array:", result.sorted);
console.log("3️⃣ Medium Problem - Inversion Count:", result.count);
// Expected Output:
// Sorted Array: [1, 2, 3, 4, 5]
// Inversion Count: 3  (Pairs: (2,1), (4,1), (4,3))
```

---

## 4️⃣ Real-Life Problem Solving Using Merge Sort

### 🔹 **Problem: Merge Sorted Schedules**

**Scenario:**  
Imagine you have two lists of daily events (each event has a start time). Both lists are already sorted by start time, but you need to merge them into one master schedule that is also sorted by start time.

#### ✅ **Pseudo Code:**
```
function mergeSchedules(schedule1, schedule2):
    initialize mergedList as empty
    initialize two pointers i, j at 0
    while i < length(schedule1) and j < length(schedule2):
        if schedule1[i].startTime <= schedule2[j].startTime:
            add schedule1[i] to mergedList
            i++
        else:
            add schedule2[j] to mergedList
            j++
    append any remaining events from schedule1 or schedule2 to mergedList
    return mergedList
```

#### 💻 **JavaScript Solution:**
```javascript
// Each event has a 'title' and a 'startTime' (in 24-hour format)
function mergeSchedules(schedule1, schedule2) {
  let merged = [];
  let i = 0, j = 0;

  // Merge the two schedules while preserving order by startTime
  while (i < schedule1.length && j < schedule2.length) {
    if (schedule1[i].startTime <= schedule2[j].startTime) {
      merged.push(schedule1[i]);
      i++;
    } else {
      merged.push(schedule2[j]);
      j++;
    }
  }

  // Append any remaining events from schedule1
  while (i < schedule1.length) {
    merged.push(schedule1[i]);
    i++;
  }

  // Append any remaining events from schedule2
  while (j < schedule2.length) {
    merged.push(schedule2[j]);
    j++;
  }

  return merged;
}

// Example schedules
let scheduleA = [
  { title: "Breakfast", startTime: 8 },
  { title: "Team Meeting", startTime: 10 },
  { title: "Project Work", startTime: 13 }
];

let scheduleB = [
  { title: "Morning Exercise", startTime: 7 },
  { title: "Client Call", startTime: 9 },
  { title: "Lunch", startTime: 12 }
];

let masterSchedule = mergeSchedules(scheduleA, scheduleB);
console.log("4️⃣ Merged Master Schedule:");
masterSchedule.forEach(event => {
  console.log(`${event.title} at ${event.startTime}:00`);
});
// Expected Output:
// Morning Exercise at 7:00
// Breakfast at 8:00
// Client Call at 9:00
// Team Meeting at 10:00
// Lunch at 12:00
// Project Work at 13:00
```

---

## Summary

1. **Teaching Merge Sort:**  
   - Explained using a Lego/box analogy: Divide the array into smaller pieces, sort them, then merge them back together.

2. **Basic Example:**  
   - Standard merge sort that recursively divides and merges arrays.

3. **LeetCode-Style Problems:**  
   - **Easy Problem:** Sorting an array using merge sort.
   - **Medium Problem:** Counting inversions in an array with a modified merge sort.

4. **Real-Life Example:**  
   - Merging two sorted schedules into one master schedule using the merging technique.

