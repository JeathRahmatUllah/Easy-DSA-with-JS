

## **1️⃣ Teaching Binary Search**  

### 🌟 Concept of Binary Search  
Imagine you have a **dictionary** 📖, and you need to find the word **"Apple"**.  

🔹 You don’t start from **page 1** and go page by page.   
🔹 Instead, you **open the middle** of the dictionary.   
🔹 If "Apple" comes **before** the middle word, you search the **left half**.  
🔹 If "Apple" comes **after**, you search the **right half**.  
🔹 You keep dividing the pages until you find the word.  

This is **Binary Search**! It works **only on sorted lists** and is much faster than **Linear Search**.  

---

## **2️⃣ Basic Example of Binary Search with Code**  

### Example 1: Finding a Number in a Sorted Array  
```javascript
function binarySearch(arr, target) {
    let left = 0; // Start from the first index
    let right = arr.length - 1; // End at the last index

    while (left <= right) {
        let mid = Math.floor((left + right) / 2); // Find the middle index

        if (arr[mid] === target) {
            return mid; // If the middle element is the target, return its index
        } else if (arr[mid] < target) {
            left = mid + 1; // If target is greater, search the right half
        } else {
            right = mid - 1; // If target is smaller, search the left half
        }
    }
    return -1; // Target not found
}

let numbers = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(numbers, 7)); // Output: 3
console.log(binarySearch(numbers, 10)); // Output: -1
```

✅ **Binary Search reduces the search time from O(n) to O(log n), making it much faster!**  

---

## **3️⃣ LeetCode Style Problems**  

### 🔹 **Easy Problem: Find Target in a Sorted Array**  
📌 **Problem Statement:** Given a **sorted** array, find the index of a target number. If not found, return -1.  

#### ✅ **Pseudo Code**  
```
1. Set left = 0, right = last index
2. While left is <= right:
   - Find middle index
   - If middle element == target, return index
   - If target is greater, search right half
   - If target is smaller, search left half
3. If not found, return -1
```

#### 💻 **JavaScript Solution**  
```javascript
function searchTarget(arr, target) {
    let left = 0, right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid; // Return index if found
        } else if (arr[mid] < target) {
            left = mid + 1; // Search right half
        } else {
            right = mid - 1; // Search left half
        }
    }
    return -1; // Target not found
}

console.log(searchTarget([2, 4, 6, 8, 10, 12], 8)); // Output: 3
console.log(searchTarget([2, 4, 6, 8, 10, 12], 5)); // Output: -1
```

---

### 🔹 **Medium Problem: Find First and Last Position of a Target Number**  
📌 **Problem Statement:** Given a **sorted array**, find the **first and last position** of a target number. If not found, return `[-1, -1]`.  

#### ✅ **Pseudo Code**  
```
1. Use binary search to find the first occurrence:
   - If found, update left boundary
2. Use binary search to find the last occurrence:
   - If found, update right boundary
3. Return both positions
```

#### 💻 **JavaScript Solution**  
```javascript
function searchRange(nums, target) {
    function findBoundary(isFirst) {
        let left = 0, right = nums.length - 1, boundary = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                boundary = mid; // Store position
                if (isFirst) right = mid - 1; // Search left side
                else left = mid + 1; // Search right side
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return boundary;
    }

    return [findBoundary(true), findBoundary(false)];
}

console.log(searchRange([1, 2, 2, 2, 3, 4], 2)); // Output: [1, 3]
console.log(searchRange([1, 3, 5, 7], 4)); // Output: [-1, -1]
```

---

## **4️⃣ Real-Life Problem Solving using Binary Search**  

### 🔹 **Problem 1: Searching for a Book in a Library**  
📌 **Problem Statement:** A library has books sorted alphabetically. Given a book name, find its index.  

#### ✅ **Pseudo Code**  
```
1. Set left = 0, right = last index
2. Find middle book
3. If middle book == target, return index
4. If target is greater, search right half
5. If target is smaller, search left half
6. If not found, return -1
```

#### 💻 **JavaScript Solution**  
```javascript
function findBook(books, target) {
    let left = 0, right = books.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (books[mid] === target) {
            return mid; // Return index
        } else if (books[mid] < target) {
            left = mid + 1; // Search right half
        } else {
            right = mid - 1; // Search left half
        }
    }
    return -1; // Book not found
}

let bookList = ["Alice in Wonderland", "Harry Potter", "Moby Dick", "Sherlock Holmes"];
console.log(findBook(bookList, "Moby Dick")); // Output: 2
console.log(findBook(bookList, "The Hobbit")); // Output: -1
```

---

### 🔹 **Problem 2: Finding the Square Root of a Number**  
📌 **Problem Statement:** Given a number `n`, find its **square root** (rounded down).  

#### ✅ **Pseudo Code**  
```
1. Set left = 0, right = n
2. Find middle number
3. If mid * mid == n, return mid
4. If mid * mid < n, search right half
5. If mid * mid > n, search left half
6. Return closest integer square root
```

#### 💻 **JavaScript Solution**  
```javascript
function squareRoot(n) {
    if (n < 2) return n; // Handle 0 and 1

    let left = 1, right = n, ans = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let square = mid * mid;

        if (square === n) return mid;
        if (square < n) {
            left = mid + 1;
            ans = mid; // Store closest square root
        } else {
            right = mid - 1;
        }
    }
    return ans;
}

console.log(squareRoot(25)); // Output: 5
console.log(squareRoot(20)); // Output: 4
```

---

### **Conclusion**
- **Binary Search** is much faster than **Linear Search**.
- It is used in **search engines, library book systems, and mathematical calculations**.
- Requires **sorted data** to work properly.

