

## 1️⃣ Teaching **Linear Search**

### 🌟 Concept of Linear Search
Imagine you have a box full of toys, and your mom asks you to find your **favorite red car**. You don’t know exactly where it is, so you start **checking each toy one by one** until you find it.  

This is exactly how **Linear Search** works!  

🔹 You **start from the first item**.  
🔹 Check if it’s the one you’re looking for.  
🔹 If yes, you **stop searching**.  
🔹 If not, move to the **next item**.  
🔹 If you reach the **end of the list** and don’t find it, then it's not there.

---

## 2️⃣ **Basic Example of Linear Search with Code**
Let's see how to write it in JavaScript!  

### Example 1: Searching for a number in an array
```javascript
function linearSearch(arr, target) {
    // Go through each element in the array one by one
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) { // If we find the target, return its position
            return i; 
        }
    }
    return -1; // If we don't find it, return -1
}

// Example usage
let numbers = [3, 7, 1, 9, 5];
console.log(linearSearch(numbers, 9)); // Output: 3
console.log(linearSearch(numbers, 10)); // Output: -1
```

### Example 2: Finding a student's name in a list
```javascript
function findStudent(students, name) {
    for (let i = 0; i < students.length; i++) {
        if (students[i] === name) {
            return `Found ${name} at position ${i}`;
        }
    }
    return `${name} not found`;
}

let students = ["Alice", "Bob", "Charlie", "David"];
console.log(findStudent(students, "Charlie")); // Output: Found Charlie at position 2
console.log(findStudent(students, "Eve")); // Output: Eve not found
```

---

## 3️⃣ **LeetCode Style Problems**

### 🔹 **Easy Problem: Find Target in an Array**
📌 **Problem Statement:** Given an array of numbers, return the index of the first occurrence of a given target number. If it's not found, return -1.

#### ✅ Pseudo Code:
```
1. Loop through each number in the array
2. If the number matches the target, return its index
3. If no match is found, return -1
```

#### 💻 **JavaScript Solution**
```javascript
function searchTarget(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return index if found
        }
    }
    return -1; // Return -1 if not found
}

console.log(searchTarget([4, 2, 7, 1, 9], 7)); // Output: 2
console.log(searchTarget([4, 2, 7, 1, 9], 5)); // Output: -1
```

---

### 🔹 **Medium Problem: First Occurrence of a Word in a Sentence**
📌 **Problem Statement:** Given a sentence (as a string), find the position of the first occurrence of a given word. If it's not found, return -1.

#### ✅ Pseudo Code:
```
1. Split the sentence into an array of words
2. Loop through the array
3. If the word matches the target, return its index
4. If no match is found, return -1
```

#### 💻 **JavaScript Solution**
```javascript
function findWord(sentence, word) {
    let words = sentence.split(" "); // Split sentence into words
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word) {
            return i; // Return the position of the word
        }
    }
    return -1; // If not found, return -1
}

console.log(findWord("I love coding in JavaScript", "coding")); // Output: 2
console.log(findWord("I love coding in JavaScript", "Python")); // Output: -1
```

---

## 4️⃣ **Real-Life Problem Solving using Linear Search**

### 🔹 **Problem 1: Finding a Contact in a Phonebook**
📌 **Problem Statement:** You have a list of contacts with names and phone numbers. You need to find the phone number of a given name.

#### ✅ Pseudo Code:
```
1. Loop through the contact list
2. If the name matches the target, return the phone number
3. If no match is found, return "Not found"
```

#### 💻 **JavaScript Solution**
```javascript
function findPhoneNumber(contacts, name) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].name === name) {
            return contacts[i].phone; // Return the phone number
        }
    }
    return "Not found"; // If not found
}

let contacts = [
    { name: "Alice", phone: "123-456-7890" },
    { name: "Bob", phone: "987-654-3210" },
    { name: "Charlie", phone: "555-666-7777" }
];

console.log(findPhoneNumber(contacts, "Bob")); // Output: 987-654-3210
console.log(findPhoneNumber(contacts, "David")); // Output: Not found
```

---

### 🔹 **Problem 2: Checking If an Item is Available in a Store**
📌 **Problem Statement:** You have a store inventory list. Given an item name, check if it is available in stock.

#### ✅ Pseudo Code:
```
1. Loop through the inventory list
2. If the item matches the target, return "Available"
3. If no match is found, return "Not in stock"
```

#### 💻 **JavaScript Solution**
```javascript
function checkAvailability(inventory, item) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i] === item) {
            return "Available"; // If found, return available
        }
    }
    return "Not in stock"; // If not found
}

let storeInventory = ["Apple", "Banana", "Mango", "Orange"];
console.log(checkAvailability(storeInventory, "Mango")); // Output: Available
console.log(checkAvailability(storeInventory, "Grapes")); // Output: Not in stock
```

---

### ✅ **Final Thoughts**
- **Linear Search** is simple and useful when searching small lists.  
- For bigger lists, we use faster search methods like **Binary Search** (which needs sorting first).  
- Real-world use cases include **phonebooks, store inventory, and finding words in texts**.  
