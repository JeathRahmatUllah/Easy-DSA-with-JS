
// Example 1: Sum of Array Elements
let numbers1 = [1, 2, 3, 4, 5];
let sum = numbers1.reduce((total, num) => total + num, 0); // Add all numbers
console.log("Sum of array elements:", sum); // Output: 15

// Example 2: Find the Maximum Number
let numbers2 = [10, 20, 5, 30, 15];
let max = Math.max(...numbers2); // Use spread operator to pass array elements
console.log("Maximum number in the array:", max); // Output: 30

// Example 3: Filter Even Numbers
let numbers3 = [1, 2, 3, 4, 5, 6];
let evens = numbers3.filter((num) => num % 2 === 0); // Keep only even numbers
console.log("Even numbers in the array:", evens); // Output: [2, 4, 6]

// ==========================================
// Intermediate Examples
// ==========================================

// Example 4: Reverse an Array
let numbers4 = [1, 2, 3, 4, 5];
let reversed = numbers4.reverse(); // Reverse the array in place
console.log("Reversed array:", reversed); // Output: [5, 4, 3, 2, 1]

// Example 5: Remove Duplicates
let numbers5 = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(numbers5)]; // Use Set to remove duplicates
console.log("Array with duplicates removed:", unique); // Output: [1, 2, 3, 4, 5]

// Example 6: Sort an Array
let numbers6 = [5, 3, 8, 1, 2];
let sorted = numbers6.sort((a, b) => a - b); // Sort in ascending order
console.log("Sorted array:", sorted); // Output: [1, 2, 3, 5, 8]

// Example 7: Find the Index of an Element
let numbers7 = [10, 20, 30, 40, 50];
let index = numbers7.indexOf(30); // Find the index of 30
console.log("Index of 30:", index); // Output: 2

// ==========================================
// Advanced Examples
// ==========================================

// Example 8: Flatten a Nested Array
let nestedArray = [1, [2, [3, [4]], 5]];
let flattened = nestedArray.flat(Infinity); // Flatten all levels of nesting
console.log("Flattened array:", flattened); // Output: [1, 2, 3, 4, 5]

// Example 9: Group Objects by Property
let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];
let groupedByAge = people.reduce((acc, person) => {
  if (!acc[person.age]) acc[person.age] = []; // Initialize group if it doesn't exist
  acc[person.age].push(person); // Add person to the group
  return acc;
}, {});
console.log("Grouped by age:", groupedByAge);
// Output: { 25: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }], 30: [{ name: "Bob", age: 30 }] }

// Example 10: Find the Intersection of Two Arrays
let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];
let intersection = array1.filter((x) => array2.includes(x)); // Find common elements
console.log("Intersection of two arrays:", intersection); // Output: [3, 4]

// Example 11: Rotate an Array
let numbers8 = [1, 2, 3, 4, 5];
let rotateBy = 2;
let rotated = [
  ...numbers8.slice(rotateBy), // Take elements from index 2 to the end
  ...numbers8.slice(0, rotateBy), // Take elements from the start to index 2
];
console.log("Rotated array:", rotated); // Output: [3, 4, 5, 1, 2]

// Example 12: Find the Longest Word in an Array
let words = ["apple", "banana", "kiwi", "strawberry"];
let longestWord = words.reduce((longest, word) =>
  word.length > longest.length ? word : longest
);
console.log("Longest word:", longestWord); // Output: "strawberry"

// ==========================================
// Real-Life Problem Solving
// ==========================================

// Example 13: Calculate Total Price of Items in a Cart
let cart = [
  { name: "Apple", price: 1.5 },
  { name: "Banana", price: 0.5 },
  { name: "Orange", price: 2.0 },
];
let totalPrice = cart.reduce((total, item) => total + item.price, 0); // Add all prices
console.log("Total price of items in the cart:", totalPrice); // Output: 4.0

// Example 14: Find the Most Frequent Element in an Array
let numbers9 = [1, 2, 2, 3, 3, 3, 4];
let frequencyMap = numbers9.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1; // Count frequency of each number
  return acc;
}, {});
let mostFrequent = Object.keys(frequencyMap).reduce((a, b) =>
  frequencyMap[a] > frequencyMap[b] ? a : b
);
console.log("Most frequent element:", mostFrequent); // Output: "3"

// Example 15: Merge Two Sorted Arrays
let sortedArray1 = [1, 3, 5];
let sortedArray2 = [2, 4, 6];
let mergedArray = [...sortedArray1, ...sortedArray2].sort((a, b) => a - b); // Merge and sort
console.log("Merged and sorted array:", mergedArray); // Output: [1, 2, 3, 4, 5, 6]