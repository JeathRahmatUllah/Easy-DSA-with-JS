


## 1️⃣ Teaching "Insertion Sort"

### **Concept:**
Imagine you have a hand of playing cards that aren’t in order. You want to arrange them from smallest to largest. Instead of mixing them all up at once, you pick up one card at a time and insert it into the right spot in your already sorted cards.

**Steps:**
- **Start** with one card in your hand (it’s sorted by itself).
- **Pick** the next card.
- **Compare** it with the cards in your hand from right to left.
- **Shift** the larger cards one position to the right.
- **Insert** the new card in its correct position.
- **Repeat** until all cards (or numbers) are sorted!

This is exactly how **Insertion Sort** works: it builds up a sorted list one item at a time by inserting each new element into its proper place.

---

## 2️⃣ Basic Example with Code

Below is a simple JavaScript example of Insertion Sort with comments:

```javascript
// Insertion Sort: Sorts an array in ascending order
function insertionSort(arr) {
  // Loop over the array starting from the second element (index 1)
  for (let i = 1; i < arr.length; i++) {
    // The current element to be inserted in the sorted part of the array
    let current = arr[i];
    let j = i - 1;
    
    // Shift elements of the sorted part (arr[0..i-1]) that are greater than current
    // to one position ahead
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    // Insert the current element into its correct position
    arr[j + 1] = current;
  }
  return arr;
}

// Example usage:
let numbers = [12, 11, 13, 5, 6];
console.log("Sorted Array:", insertionSort(numbers)); 
// Output: Sorted Array: [5, 6, 11, 12, 13]
```

---

## 3️⃣ LeetCode-Type Problems

### 🔹 **Easy Problem: Sort an Array Using Insertion Sort**
**Problem Statement:**  
Given an unsorted array of numbers, sort it in ascending order using the insertion sort algorithm.

#### ✅ **Pseudo Code:**
```
for i from 1 to length(array) - 1:
    current = array[i]
    j = i - 1
    while j >= 0 and array[j] > current:
        array[j + 1] = array[j]
        j = j - 1
    array[j + 1] = current
return array
```

#### 💻 **JavaScript Solution:**
*(This is essentially the basic insertion sort code shown above.)*
```javascript
function insertionSortEasy(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

console.log("Easy Problem Sorted Array:", insertionSortEasy([9, 3, 7, 1, 5]));
// Expected Output: [1, 3, 5, 7, 9]
```

---

### 🔹 **Medium Problem: Insertion Sort on a Linked List**
**Problem Statement:**  
Given the head of a singly linked list, sort the linked list using the insertion sort algorithm and return its head.

#### ✅ **Pseudo Code:**
```
function insertionSortList(head):
    if head is null or head.next is null:
        return head

    sortedList = new dummy node with value 0
    current = head

    while current is not null:
        prev = sortedList
        // Find the correct position to insert current
        while prev.next is not null and prev.next.value < current.value:
            prev = prev.next
        // Save next node to process after insertion
        nextTemp = current.next
        // Insert current between prev and prev.next
        current.next = prev.next
        prev.next = current
        // Move to next node
        current = nextTemp

    return sortedList.next
```

#### 💻 **JavaScript Solution:**
```javascript
// Define a ListNode class for the linked list nodes
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Insertion Sort for a linked list
function insertionSortList(head) {
  // Create a dummy node to serve as the starting point of the sorted list
  let dummy = new ListNode(0);
  let current = head;

  // Traverse the original list
  while (current !== null) {
    // At each iteration, we insert current into the sorted list
    let prev = dummy;
    // Find the correct spot to insert current node
    while (prev.next !== null && prev.next.value < current.value) {
      prev = prev.next;
    }
    
    // Save the next node to process before changing links
    let nextTemp = current.next;
    
    // Insert current between prev and prev.next
    current.next = prev.next;
    prev.next = current;
    
    // Move current to the next node in the original list
    current = nextTemp;
  }
  
  // The sorted list starts from dummy.next
  return dummy.next;
}

// Helper function to print the linked list
function printList(head) {
  let result = [];
  while (head !== null) {
    result.push(head.value);
    head = head.next;
  }
  console.log(result.join(" -> "));
}

// Example usage:
// Creating the linked list: 4 -> 2 -> 1 -> 3
let node1 = new ListNode(4);
let node2 = new ListNode(2);
let node3 = new ListNode(1);
let node4 = new ListNode(3);
node1.next = node2;
node2.next = node3;
node3.next = node4;

let sortedHead = insertionSortList(node1);
console.log("Sorted Linked List:");
printList(sortedHead); // Expected Output: 1 -> 2 -> 3 -> 4
```

---

## 4️⃣ Real-Life Problem Solving Using Insertion Sort

### 🔹 **Problem: Sorting Daily Task Deadlines**
**Scenario:**  
Imagine you have a list of daily tasks, each with a deadline (given as a number representing hours). You want to organize these tasks in order of their deadlines (earliest first) so that you know which task to complete first.

#### ✅ **Pseudo Code:**
```
function sortTasks(tasks):
    for i from 1 to length(tasks) - 1:
        currentTask = tasks[i]
        j = i - 1
        while j >= 0 and tasks[j].deadline > currentTask.deadline:
            tasks[j + 1] = tasks[j]
            j = j - 1
        tasks[j + 1] = currentTask
    return tasks
```

#### 💻 **JavaScript Solution:**
```javascript
// Each task is represented as an object with a description and a deadline (in hours)
function sortTasks(tasks) {
  // Use insertion sort to order tasks by deadline (ascending order)
  for (let i = 1; i < tasks.length; i++) {
    let currentTask = tasks[i];
    let j = i - 1;
    // Shift tasks with later deadlines to the right
    while (j >= 0 && tasks[j].deadline > currentTask.deadline) {
      tasks[j + 1] = tasks[j];
      j--;
    }
    // Insert the current task in its correct position
    tasks[j + 1] = currentTask;
  }
  return tasks;
}

// Example tasks
let dailyTasks = [
  { description: "Finish homework", deadline: 18 },
  { description: "Do laundry", deadline: 20 },
  { description: "Attend meeting", deadline: 10 },
  { description: "Practice piano", deadline: 15 }
];

let sortedTasks = sortTasks(dailyTasks);
console.log("Sorted Tasks by Deadline:");
sortedTasks.forEach(task => {
  console.log(`${task.description} - Deadline: ${task.deadline} hrs`);
});

// Expected Output:
// Attend meeting - Deadline: 10 hrs
// Practice piano - Deadline: 15 hrs
// Finish homework - Deadline: 18 hrs
// Do laundry - Deadline: 20 hrs
```

---

## Summary
- **1️⃣ Teaching Insertion Sort:** Explained using a card game analogy.
- **2️⃣ Basic Example:** Simple array sorting using insertion sort.
- **3️⃣ LeetCode-Type Problems:**
  - **Easy:** Sort an array.
  - **Medium:** Sort a linked list using insertion sort.
- **4️⃣ Real-Life Example:** Sorting daily tasks by deadlines.
