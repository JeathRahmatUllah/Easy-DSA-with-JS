// ==========================================================
// Example 1: Basic Bucket Sort (Ascending Order) for Integers
// ----------------------------------------------------------
// This example sorts an array of positive integers using bucket sort.
// It assumes that the numbers fall within a known range.
// Steps:
// 1. Find the minimum and maximum values.
// 2. Determine the number of buckets based on a fixed bucket size.
// 3. Distribute the elements into appropriate buckets.
// 4. Sort each bucket (using native sort here).
// 5. Concatenate all buckets to form the final sorted array.
function bucketSortBasic(arr, bucketSize = 5) {
  if (arr.length === 0) return arr;

  // 1. Find minimum and maximum values.
  let minValue = Math.min(...arr);
  let maxValue = Math.max(...arr);

  // 2. Calculate the number of buckets.
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  let buckets = Array.from({ length: bucketCount }, () => []);

  // 3. Distribute the elements into buckets.
  for (let num of arr) {
    let bucketIndex = Math.floor((num - minValue) / bucketSize);
    buckets[bucketIndex].push(num);
  }

  // 4. Sort each bucket and concatenate the results.
  let sortedArray = [];
  for (let bucket of buckets) {
    if (bucket.length > 0) {
      sortedArray.push(...bucket.sort((a, b) => a - b));
    }
  }
  return sortedArray;
}

// Test Example 1:
let arr1 = [29, 25, 3, 49, 9, 37, 21, 43];
console.log("Example 1 - Basic Bucket Sort (Ascending):", bucketSortBasic(arr1));
// Expected Output: [3, 9, 21, 25, 29, 37, 43, 49]


// ==========================================================
// Example 2: Bucket Sort for Floats in [0, 1)
// ----------------------------------------------------------
// This example sorts an array of floating-point numbers where each element is in the range [0, 1).
// Each element’s bucket index is computed by multiplying by the number of buckets (n).
function bucketSortFloats(arr) {
  if (arr.length === 0) return arr;
  let n = arr.length;
  // Create n empty buckets.
  let buckets = Array.from({ length: n }, () => []);

  // Distribute each element into the appropriate bucket.
  for (let num of arr) {
    let index = Math.floor(num * n); // since num ∈ [0,1), index will be in 0 ... n-1
    buckets[index].push(num);
  }

  // Sort each bucket individually and merge the results.
  let sortedArray = [];
  for (let bucket of buckets) {
    if (bucket.length > 0) {
      sortedArray.push(...bucket.sort((a, b) => a - b));
    }
  }
  return sortedArray;
}

// Test Example 2:
let arr2 = [0.78, 0.17, 0.39, 0.26, 0.72, 0.94, 0.21, 0.12, 0.23];
console.log("Example 2 - Bucket Sort for Floats:", bucketSortFloats(arr2));
// Expected Output: Sorted array of floats (e.g., [0.12, 0.17, 0.21, 0.23, 0.26, 0.39, 0.72, 0.78, 0.94])


/* ==========================================================
Example 3: Bucket Sort for an Array of Objects (Sorting by Price)
-------------------------------------------------------------
// This example sorts an array of objects (e.g., products) based on a numerical property (price).
// Steps:
// 1. Determine the minimum and maximum prices.
// 2. Create buckets for price ranges (using a given bucket size).
// 3. Distribute each object into the corresponding bucket based on its price.
// 4. Sort each bucket by the 'price' property.
// 5. Concatenate the sorted buckets.
========================================================= */
function bucketSortObjects(arr, bucketSize = 100) {
  if (arr.length === 0) return arr;

  // 1. Find min and max prices.
  let minPrice = Math.min(...arr.map(obj => obj.price));
  let maxPrice = Math.max(...arr.map(obj => obj.price));

  // 2. Calculate the number of buckets.
  let bucketCount = Math.floor((maxPrice - minPrice) / bucketSize) + 1;
  let buckets = Array.from({ length: bucketCount }, () => []);

  // 3. Distribute the objects into buckets based on their price.
  for (let obj of arr) {
    let bucketIndex = Math.floor((obj.price - minPrice) / bucketSize);
    buckets[bucketIndex].push(obj);
  }

  // 4. Sort each bucket by the 'price' property.
  let sortedArray = [];
  for (let bucket of buckets) {
    if (bucket.length > 0) {
      sortedArray.push(...bucket.sort((a, b) => a.price - b.price));
    }
  }
  return sortedArray;
}

// Test Example 3:
let products = [
  { name: "Product A", price: 350 },
  { name: "Product B", price: 120 },
  { name: "Product C", price: 99 },
  { name: "Product D", price: 450 },
  { name: "Product E", price: 200 },
  { name: "Product F", price: 670 },
  { name: "Product G", price: 89 }
];
console.log("Example 3 - Bucket Sort for Objects (by Price):");
bucketSortObjects(products).forEach(product => {
  console.log(`${product.name}: $${product.price}`);
});
// Expected Output: Sorted products by price (ascending order)


// ==========================================================
// Example 4: Bucket Sort in Descending Order (Integers)
// ----------------------------------------------------------
// This example modifies the basic bucket sort to produce a descending order sort.
// The key adjustments:
// - When sorting each bucket, sort in descending order.
// - When concatenating buckets, iterate from the highest-index bucket to the lowest.
function bucketSortDescending(arr, bucketSize = 5) {
  if (arr.length === 0) return arr;

  let minValue = Math.min(...arr);
  let maxValue = Math.max(...arr);
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  let buckets = Array.from({ length: bucketCount }, () => []);

  // Distribute elements into buckets.
  for (let num of arr) {
    let bucketIndex = Math.floor((num - minValue) / bucketSize);
    buckets[bucketIndex].push(num);
  }

  // Concatenate buckets in reverse order with each bucket sorted in descending order.
  let sortedArray = [];
  for (let i = buckets.length - 1; i >= 0; i--) {
    if (buckets[i].length > 0) {
      sortedArray.push(...buckets[i].sort((a, b) => b - a));
    }
  }
  return sortedArray;
}

// Test Example 4:
let arr4 = [29, 25, 3, 49, 9, 37, 21, 43];
console.log("Example 4 - Bucket Sort (Descending):", bucketSortDescending(arr4));
// Expected Output: [49, 43, 37, 29, 25, 21, 9, 3]


// ==========================================================
// Example 5: Bucket Sort Handling Negative Numbers (Advanced)
// ----------------------------------------------------------
// Standard bucket sort assumes non-negative numbers. To handle negatives:
// 1. Find the minimum value; if it’s negative, shift all numbers to be non-negative.
// 2. Perform bucket sort on the shifted array.
// 3. Shift the sorted numbers back to their original range.
function bucketSortWithNegatives(arr, bucketSize = 5) {
  if (arr.length === 0) return arr;
  
  // 1. Find min and max.
  let minValue = Math.min(...arr);
  let maxValue = Math.max(...arr);
  
  // Determine the shift needed to make all numbers non-negative.
  let shift = minValue < 0 ? Math.abs(minValue) : 0;
  
  // Create a new array with all elements shifted.
  let adjustedArr = arr.map(num => num + shift);
  
  // Perform standard bucket sort on the adjusted array.
  let bucketCount = Math.floor((Math.max(...adjustedArr) - Math.min(...adjustedArr)) / bucketSize) + 1;
  let buckets = Array.from({ length: bucketCount }, () => []);
  
  for (let num of adjustedArr) {
    let bucketIndex = Math.floor((num - Math.min(...adjustedArr)) / bucketSize);
    buckets[bucketIndex].push(num);
  }
  
  let sortedAdjusted = [];
  for (let bucket of buckets) {
    if (bucket.length > 0) {
      sortedAdjusted.push(...bucket.sort((a, b) => a - b));
    }
  }
  
  // Shift the numbers back to the original range.
  return sortedAdjusted.map(num => num - shift);
}

// Test Example 5:
let arr5 = [29, -25, 3, -49, 9, 37, -21, 43];
console.log("Example 5 - Bucket Sort with Negative Numbers:", bucketSortWithNegatives(arr5));
// Expected Output: Sorted array with negatives handled properly, e.g., [-49, -25, -21, 3, 9, 29, 37, 43]

