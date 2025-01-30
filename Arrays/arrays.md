# **Understanding Static Arrays: A Beginner's Guide**

## **1. Teaching "Static Array" to a Beginner**

### **What is a Static Array?**
A **static array** is like a box with fixed compartments. Each compartment can hold one item (like a toy or a number), and the number of compartments is fixed (it cannot grow or shrink). You can access each compartment using its **index** (a number that tells you its position in the box).

### **Example:**
Imagine a box with 5 compartments:

```
Index:  0  |  1  |  2  |  3  |  4
Value: 10  | 20  | 30  | 40  | 50
```

- The first compartment (index `0`) has the value `10`.
- The second compartment (index `1`) has the value `20`, and so on.

---

## **2. Good Examples of Static Arrays**

### **Example 1: Days of the Week**
```javascript
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
```
- This array has 5 compartments (fixed size).
- `days[0]` is `"Monday"`, `days[1]` is `"Tuesday"`, etc.

### **Example 2: Scores in a Game**
```javascript
let scores = [100, 200, 150, 300];
```
- This array has 4 compartments.
- `scores[2]` is `150`.

---

## **3. Leetcode-Type Problems**

### **Problem 1: Easy (Sum of Array Elements)**
- **Task**: Calculate the sum of all elements in a static array.
- **Example**:
  - **Input**: `[1, 2, 3, 4, 5]`
  - **Output**: `15`

### **Problem 2: Medium (Find the Maximum Element)**
- **Task**: Find the maximum element in a static array.
- **Example**:
  - **Input**: `[10, 20, 5, 30, 15]`
  - **Output**: `30`

---

## **4. Pseudo Code Solutions**

### **Problem 1: Sum of Array Elements**
```
1. Start with a sum variable set to 0.
2. Loop through each element in the array:
   - Add the current element to the sum.
3. Return the sum.
```

### **Problem 2: Find the Maximum Element**
```
1. Start with a max variable set to the first element of the array.
2. Loop through each element in the array:
   - If the current element is greater than max, update max.
3. Return max.
```

---

## **5. Real Code in JavaScript**

### **Problem 1: Sum of Array Elements**
```javascript
// Input array
let numbers = [1, 2, 3, 4, 5];

// Initialize sum
let sum = 0;

// Loop through the array
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]; // Add each element to sum
}

// Output the result
console.log("Sum of array elements:", sum); // Output: 15
```

### **Problem 2: Find the Maximum Element**
```javascript
// Input array
let numbers = [10, 20, 5, 30, 15];

// Initialize max with the first element
let max = numbers[0];

// Loop through the array
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i]; // Update max if current element is greater
  }
}

// Output the result
console.log("Maximum element in the array:", max); // Output: 30
```

---

## **6. Explanation **

### **Problem 1: Sum of Array Elements**
- Imagine you have a box of candies: `[1, 2, 3, 4, 5]`.
- You start with `0` candies.
- You take one candy at a time from the box and add it to your total.
- At the end, you have `15` candies.

### **Problem 2: Find the Maximum Element**
- Imagine you have a box of toy sizes: `[10, 20, 5, 30, 15]`.
- You start by assuming the first toy is the biggest.
- You compare each toy with the biggest one you’ve seen so far.
- At the end, you find the biggest toy is `30`.

---

## **7. Key Takeaways**
- A **static array** is like a fixed-size box with compartments.
- You can access each compartment using its **index**.
- You can solve problems like **summing elements** or **finding the maximum** by looping through the array.

---

