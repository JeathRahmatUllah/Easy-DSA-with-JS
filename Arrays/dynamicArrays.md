# **Understanding Dynamic Arrays: A Beginner's Guide**

### 1. Explaining "Dynamic Array" to a Beginner

Imagine you have a row of boxes to store your toys, but this time, you are not sure how many toys you will have. So, instead of having a fixed number of boxes, you start with a few boxes and if you need more, you can add more boxes. This is called a "dynamic array". You can keep adding or removing boxes (or spaces) as you need.

### 2. Examples of Dynamic Arrays

#### Easy Example:
You start with 3 boxes and you add toys as you get them. If you get more toys, you add more boxes.

```
[ "Car", "Doll", "Ball" ]
```

Then you get two more toys:

```
[ "Car", "Doll", "Ball", "Puzzle", "Robot" ]
```

#### Medium Example:
Let's say you have a list of your friends. You start with a few friends and keep adding as you make new friends.

```
[ "Alice", "Bob" ]
```

You make three new friends:

```
[ "Alice", "Bob", "Charlie", "David", "Eve" ]
```

### 3. LeetCode Type Problems and Solutions

#### Easy LeetCode Problem: Remove Duplicates from Sorted Array

**Problem:**
Given a sorted array, remove the duplicates in-place such that each element appears only once. Return the new length.

**Pseudo Code:**
```
1. If the array is empty, return 0.
2. Initialize a pointer for the new array position.
3. Iterate through the array:
   a. If the current element is not the same as the next element, move it to the new array position.
4. Return the new length.
```

**JavaScript Code:**
```javascript
function removeDuplicates(arr) {
  if (arr.length === 0) return 0;
  let newIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[newIndex]) {
      newIndex++;
      arr[newIndex] = arr[i];
    }
  }
  return newIndex + 1;
}

// Example usage:
const nums = [1, 1, 2, 2, 3];
const newLength = removeDuplicates(nums);
console.log(newLength); // Output: 3
console.log(nums.slice(0, newLength)); // Output: [1, 2, 3]
```

#### Medium LeetCode Problem: Merge Intervals

**Problem:**
Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

**Pseudo Code:**
```
1. If the array is empty, return an empty array.
2. Sort the intervals based on the starting times.
3. Initialize an array to hold the merged intervals.
4. Iterate through the sorted intervals:
   a. If the merged intervals array is empty or the current interval does not overlap with the last one, add it to the merged intervals.
   b. Otherwise, merge the current interval with the last one in the merged intervals.
5. Return the merged intervals.
```

**JavaScript Code:**
```javascript
function mergeIntervals(intervals) {
  if (intervals.length === 0) return [];
  
  // Sort intervals based on the starting times
  intervals.sort((a, b) => a[0] - b[0]);
  
  const merged = [];
  for (let i = 0; i < intervals.length; i++) {
    if (merged.length === 0 || merged[merged.length - 1][1] < intervals[i][0]) {
      merged.push(intervals[i]);
    } else {
      merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], intervals[i][1]);
    }
  }
  return merged;
}

// Example usage:
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(mergeIntervals(intervals)); // Output: [[1, 6], [8, 10], [15, 18]]
```
