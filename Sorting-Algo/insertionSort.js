// =====================================================
// 1️⃣ Example 1: Basic Insertion Sort (Ascending Order)
// =====================================================
// This example sorts a simple array of numbers in ascending order.
function insertionSortArray(arr) {
    // Loop from the second element to the end of the array
    for (let i = 1; i < arr.length; i++) {
      // Store the current element to be inserted
      let current = arr[i];
      let j = i - 1;
      // Shift elements in the sorted portion (left side) that are greater than 'current'
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
      // Insert 'current' into its correct position
      arr[j + 1] = current;
    }
    return arr;
  }
  
  // Test Example 1
  let numbers = [12, 11, 13, 5, 6];
  console.log("1️⃣ Sorted Array (Ascending):", insertionSortArray(numbers));
  // Expected Output: [5, 6, 11, 12, 13]
  
  // =====================================================
  // 2️⃣ Example 2: Insertion Sort for Descending Order
  // =====================================================
  // This example modifies the basic insertion sort to sort an array in descending order.
  function insertionSortDescending(arr) {
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      let j = i - 1;
      // Change the comparison operator to sort in descending order
      while (j >= 0 && arr[j] < current) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = current;
    }
    return arr;
  }
  
  // Test Example 2
  let numbersDesc = [12, 11, 13, 5, 6];
  console.log("2️⃣ Sorted Array (Descending):", insertionSortDescending(numbersDesc));
  // Expected Output: [13, 12, 11, 6, 5]
  
  // =====================================================
  // 3️⃣ Example 3: Insertion Sort on a Linked List (Medium)
  // =====================================================
  // Here we perform insertion sort on a singly linked list.
  // Define the ListNode class for the linked list nodes.
  class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Function to perform insertion sort on a linked list
  function insertionSortList(head) {
    // Create a dummy node that acts as the pre-head of the sorted list.
    let dummy = new ListNode(0);
    let current = head;
  
    // Traverse the original list
    while (current !== null) {
      // At each iteration, find the correct position for 'current' in the sorted list.
      let prev = dummy;
      while (prev.next !== null && prev.next.value < current.value) {
        prev = prev.next;
      }
      // Save the next node to process before re-linking
      let nextTemp = current.next;
      // Insert current node into the sorted list
      current.next = prev.next;
      prev.next = current;
      // Move to the next node in the original list
      current = nextTemp;
    }
    
    // Return the sorted list (skipping the dummy node)
    return dummy.next;
  }
  
  // Helper function to print linked list values
  function printLinkedList(head) {
    let result = [];
    while (head !== null) {
      result.push(head.value);
      head = head.next;
    }
    console.log(result.join(" -> "));
  }
  
  // Create a sample linked list: 4 -> 2 -> 1 -> 3
  let node1 = new ListNode(4);
  let node2 = new ListNode(2);
  let node3 = new ListNode(1);
  let node4 = new ListNode(3);
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  
  let sortedListHead = insertionSortList(node1);
  console.log("3️⃣ Sorted Linked List:");
  printLinkedList(sortedListHead);
  // Expected Output: 1 -> 2 -> 3 -> 4
  
  // =====================================================
  // 4️⃣ Example 4: Insertion Sort for an Array of Objects (Sorting by Property)
  // =====================================================
  // Suppose each object represents a student with a 'name' and a 'score'.
  // We want to sort the array by 'score' in ascending order.
  function insertionSortObjects(arr) {
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      let j = i - 1;
      // Compare based on the 'score' property of each object
      while (j >= 0 && arr[j].score > current.score) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = current;
    }
    return arr;
  }
  
  // Test Example 4
  let students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 75 },
    { name: "Charlie", score: 95 },
    { name: "Diana", score: 70 }
  ];
  console.log("4️⃣ Sorted Students by Score (Ascending):", insertionSortObjects(students));
  // Expected Output: Sorted order by score: Diana (70), Bob (75), Alice (85), Charlie (95)
  
  // =====================================================
  // 5️⃣ Example 5: Real-Life Application – Sorting Daily Tasks by Deadline
  // =====================================================
  // Imagine you have daily tasks, each with a description and a deadline (hour).
  // You want to sort these tasks so that you know which to do first.
  function sortTasksByDeadline(tasks) {
    for (let i = 1; i < tasks.length; i++) {
      let currentTask = tasks[i];
      let j = i - 1;
      // Compare tasks by their 'deadline' property (ascending order)
      while (j >= 0 && tasks[j].deadline > currentTask.deadline) {
        tasks[j + 1] = tasks[j];
        j--;
      }
      tasks[j + 1] = currentTask;
    }
    return tasks;
  }
  
  // Test Example 5
  let dailyTasks = [
    { description: "Finish homework", deadline: 18 },
    { description: "Do laundry", deadline: 20 },
    { description: "Attend meeting", deadline: 10 },
    { description: "Practice piano", deadline: 15 }
  ];
  
  let sortedTasks = sortTasksByDeadline(dailyTasks);
  console.log("5️⃣ Sorted Tasks by Deadline:");
  sortedTasks.forEach(task => {
    console.log(`${task.description} - Deadline: ${task.deadline} hrs`);
  });
  // Expected Output:
  // Attend meeting - Deadline: 10 hrs
  // Practice piano - Deadline: 15 hrs
  // Finish homework - Deadline: 18 hrs
  // Do laundry - Deadline: 20 hrs
  