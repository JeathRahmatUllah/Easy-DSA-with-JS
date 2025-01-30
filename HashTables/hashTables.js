
// ======================
// Beginner Level Examples
// ======================

// Example 1: Basic Hashtable (Object)
// A simple object acting as a hashtable to store key-value pairs.

const beginnerHashtable = {
    name: "Alice",
    age: 25,
    occupation: "Software Engineer"
};

console.log(beginnerHashtable.name); // Output: Alice
console.log(beginnerHashtable["age"]); // Output: 25

// Example 2: Adding and Deleting Properties
// Demonstrates how to add and delete properties in a hashtable.

beginnerHashtable.location = "New York"; // Adding a new key-value pair
console.log(beginnerHashtable.location); // Output: New York

delete beginnerHashtable.occupation; // Deleting a key-value pair
console.log(beginnerHashtable.occupation); // Output: undefined

// ======================
// Intermediate Level Examples
// ======================

// Example 3: Using Map for Hashtable
// Maps are similar to objects but can use any data type as a key.

const intermediateMap = new Map();

intermediateMap.set("name", "Bob");
intermediateMap.set(1, "One");
intermediateMap.set(true, "Yes");

console.log(intermediateMap.get("name")); // Output: Bob
console.log(intermediateMap.get(1)); // Output: One
console.log(intermediateMap.get(true)); // Output: Yes

// Example 4: Iterating Over a Map
// Demonstrates how to iterate over a Map using for...of loop.

for (let [key, value] of intermediateMap) {
    console.log(`${key}: ${value}`);
}
// Output:
// name: Bob
// 1: One
// true: Yes

// ======================
// Advanced Level Examples
// ======================

// Example 5: Custom Hashtable Implementation
// A custom hashtable implementation using an array and a simple hash function.

class CustomHashtable {
    constructor(size = 10) {
        this.size = size;
        this.table = new Array(size);
    }

    // Simple hash function
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    // Insert a key-value pair
    set(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push([key, value]);
    }

    // Retrieve a value by key
    get(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            for (let [k, v] of this.table[index]) {
                if (k === key) {
                    return v;
                }
            }
        }
        return undefined;
    }

    // Remove a key-value pair
    delete(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            this.table[index] = this.table[index].filter(([k, v]) => k !== key);
        }
    }
}

const customHashtable = new CustomHashtable();
customHashtable.set("name", "Charlie");
customHashtable.set("age", 30);

console.log(customHashtable.get("name")); // Output: Charlie
console.log(customHashtable.get("age")); // Output: 30

customHashtable.delete("age");
console.log(customHashtable.get("age")); // Output: undefined

// Example 6: Handling Collisions in Custom Hashtable
// Demonstrates how the custom hashtable handles collisions.

customHashtable.set("name", "David"); // Collision with "name"
console.log(customHashtable.get("name")); // Output: David

// Example 7: Using WeakMap for Memory Efficiency
// WeakMap allows for keys to be garbage collected if no other references exist.

const weakMap = new WeakMap();
let obj1 = {};
let obj2 = {};

weakMap.set(obj1, "This is obj1");
weakMap.set(obj2, "This is obj2");

console.log(weakMap.get(obj1)); // Output: This is obj1

obj1 = null; // obj1 is now eligible for garbage collection
console.log(weakMap.get(obj1)); // Output: undefined

// ======================
// Conclusion
// ======================

// Hashtables are a powerful data structure for storing key-value pairs.
// JavaScript provides multiple ways to implement hashtables, including
// using plain objects, Maps, and even custom implementations.
// Understanding how to use and implement hashtables is essential for
// efficient data storage and retrieval in many applications.
