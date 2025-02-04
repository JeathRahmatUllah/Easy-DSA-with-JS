// 1️⃣ Beginner: Find a number in an array
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return index if found
        }
    }
    return -1; // Return -1 if not found
}

console.log(linearSearch([10, 20, 30, 40, 50], 30)); // Output: 2
console.log(linearSearch([10, 20, 30, 40, 50], 100)); // Output: -1

// -------------------------------------------------

// 2️⃣ Easy: Find the first occurrence of a word in a sentence
function findWord(sentence, word) {
    let words = sentence.split(" "); // Convert sentence into an array of words
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word) {
            return i; // Return index of found word
        }
    }
    return -1; // Return -1 if not found
}

console.log(findWord("JavaScript is awesome and powerful", "awesome")); // Output: 2
console.log(findWord("JavaScript is awesome and powerful", "Python")); // Output: -1

// -------------------------------------------------

// 3️⃣ Medium: Find an object in an array (Search by name in a contact list)
function findContact(contacts, name) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].name === name) {
            return contacts[i].phone; // Return phone number if found
        }
    }
    return "Not found"; // Return "Not found" if the name is not in the list
}

let contacts = [
    { name: "Alice", phone: "123-456-7890" },
    { name: "Bob", phone: "987-654-3210" },
    { name: "Charlie", phone: "555-666-7777" }
];

console.log(findContact(contacts, "Bob")); // Output: 987-654-3210
console.log(findContact(contacts, "David")); // Output: Not found

// -------------------------------------------------

// 4️⃣ Hard: Find the last occurrence of a number in an array
function lastOccurrence(arr, target) {
    let lastIndex = -1; // Start with -1 assuming target is not found
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            lastIndex = i; // Keep updating the index if found
        }
    }
    return lastIndex; // Return the last found index or -1 if not found
}

console.log(lastOccurrence([1, 2, 3, 2, 4, 2, 5], 2)); // Output: 5
console.log(lastOccurrence([1, 2, 3, 4, 5], 6)); // Output: -1

// -------------------------------------------------

// 5️⃣ Hardest: Find multiple occurrences of a target number in an array
function findAllOccurrences(arr, target) {
    let indices = []; // Create an array to store all indices
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            indices.push(i); // Add index to result array
        }
    }
    return indices.length > 0 ? indices : "Not found"; // Return indices or "Not found"
}

console.log(findAllOccurrences([4, 7, 9, 7, 6, 7, 3], 7)); // Output: [1, 3, 5]
console.log(findAllOccurrences([1, 2, 3, 4, 5], 8)); // Output: Not found
