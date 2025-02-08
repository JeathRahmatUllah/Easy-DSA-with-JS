
### **1) Teaching Bucket Sort**  

#### **What is Bucket Sort?**  
Imagine you have a box full of colorful marbles, and you want to sort them by color. Instead of sorting them one by one, you can use several small cups (buckets), where each cup holds marbles of only one color. After putting the marbles in the right cups, you just combine them, and the marbles are sorted!  

#### **Concepts in Bucket Sort:**  
- **Buckets**: Groups where similar values are collected.  
- **Sorting Inside Buckets**: Each bucket is sorted separately.  
- **Merging Buckets**: Combining the sorted buckets to get the final sorted result.  

---

### **2) Basic Example with Code**  

#### **Example: Sorting an Array of Numbers Using Bucket Sort**  
Let's sort the numbers `[29, 25, 3, 49, 9, 37, 21, 43]`.  

#### **Code Implementation in JavaScript:**  

```javascript
function bucketSort(arr, bucketSize = 5) {
    if (arr.length === 0) return arr; // If array is empty, return it.

    // Step 1: Find min and max values in the array
    let minValue = Math.min(...arr);
    let maxValue = Math.max(...arr);

    // Step 2: Create buckets
    let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    let buckets = Array.from({ length: bucketCount }, () => []);

    // Step 3: Distribute elements into buckets
    for (let num of arr) {
        let bucketIndex = Math.floor((num - minValue) / bucketSize);
        buckets[bucketIndex].push(num);
    }

    // Step 4: Sort individual buckets and merge
    return buckets.reduce((sortedArray, bucket) => {
        return sortedArray.concat(bucket.sort((a, b) => a - b));
    }, []);
}

// Example usage:
let numbers = [29, 25, 3, 49, 9, 37, 21, 43];
console.log(bucketSort(numbers)); // Output: [3, 9, 21, 25, 29, 37, 43, 49]
```

---

### **3) Leetcode-Style Problems**  

#### **Easy Problem: Sort an Array of Decimals (0 to 1)**
##### **Problem Statement:**  
Given an array of floating-point numbers between `0` and `1`, sort them using bucket sort.

##### **Pseudo Code:**  
```
1. Create empty buckets (e.g., 10 buckets for numbers 0-1).
2. Place each number into its appropriate bucket based on its value.
3. Sort each bucket individually.
4. Merge the sorted buckets.
```

##### **Solution in JavaScript:**  
```javascript
function bucketSortDecimals(arr) {
    let n = arr.length;
    if (n <= 0) return arr;

    let buckets = Array.from({ length: n }, () => []);

    // Step 1: Place elements into buckets
    for (let num of arr) {
        let index = Math.floor(num * n);
        buckets[index].push(num);
    }

    // Step 2: Sort each bucket
    for (let bucket of buckets) {
        bucket.sort((a, b) => a - b);
    }

    // Step 3: Merge buckets
    return [].concat(...buckets);
}

// Example usage:
let decimals = [0.78, 0.17, 0.39, 0.26, 0.72, 0.94, 0.21, 0.12, 0.23, 0.68];
console.log(bucketSortDecimals(decimals));
```

---

#### **Medium Problem: Sorting Student Scores**
##### **Problem Statement:**  
Given an array of student scores (0 to 100), sort them efficiently.

##### **Pseudo Code:**  
```
1. Create 10 buckets for score ranges (0-9, 10-19, ..., 90-100).
2. Place each score in the appropriate bucket.
3. Sort each bucket.
4. Merge sorted buckets into a final sorted list.
```

##### **Solution in JavaScript:**  
```javascript
function bucketSortScores(scores) {
    let buckets = Array.from({ length: 10 }, () => []);

    // Step 1: Place scores into buckets
    for (let score of scores) {
        let index = Math.floor(score / 10);
        buckets[index].push(score);
    }

    // Step 2: Sort each bucket
    for (let bucket of buckets) {
        bucket.sort((a, b) => a - b);
    }

    // Step 3: Merge sorted buckets
    return [].concat(...buckets);
}

// Example usage:
let studentScores = [78, 45, 89, 62, 90, 55, 100, 23, 45, 67];
console.log(bucketSortScores(studentScores));
```

---

### **4) Real-Life Problem Solving Using Bucket Sort**

#### **Problem: Sorting Transactions by Amount in an E-commerce System**
##### **Problem Statement:**  
You are given an array of transaction amounts for an e-commerce platform. Your task is to sort these transactions efficiently.

##### **Pseudo Code:**  
```
1. Identify min and max transaction values.
2. Create buckets based on transaction ranges.
3. Distribute transactions into buckets.
4. Sort each bucket.
5. Merge the sorted transactions.
```

##### **Solution in JavaScript:**  
```javascript
function bucketSortTransactions(transactions, bucketSize = 100) {
    if (transactions.length === 0) return transactions;

    let minTransaction = Math.min(...transactions);
    let maxTransaction = Math.max(...transactions);

    let bucketCount = Math.floor((maxTransaction - minTransaction) / bucketSize) + 1;
    let buckets = Array.from({ length: bucketCount }, () => []);

    // Step 1: Distribute transactions into buckets
    for (let amount of transactions) {
        let bucketIndex = Math.floor((amount - minTransaction) / bucketSize);
        buckets[bucketIndex].push(amount);
    }

    // Step 2: Sort each bucket
    for (let bucket of buckets) {
        bucket.sort((a, b) => a - b);
    }

    // Step 3: Merge sorted buckets
    return [].concat(...buckets);
}

// Example usage:
let transactions = [120, 340, 50, 800, 275, 600, 90, 1000, 450, 620];
console.log(bucketSortTransactions(transactions));
```

---

### **Conclusion**
1. We explained **Bucket Sort** with a simple marble-sorting analogy.  
2. We implemented a **basic example** with JavaScript.  
3. We tackled **Leetcode-style problems**, with one easy and one medium-level problem.  
4. We solved a **real-life e-commerce problem** using bucket sort. 
