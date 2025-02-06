// ==========================================================
// Example 1: Basic Merge Sort (Ascending Order)
// ----------------------------------------------------------
// This example demonstrates the classic merge sort algorithm
// which sorts a simple array of numbers in ascending order.

function merge(left, right) {
    let merged = []; // Array to store the merged result
    let i = 0, j = 0;
    
    // Compare elements from left and right arrays and merge in order
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        merged.push(left[i]);
        i++;
      } else {
        merged.push(right[j]);
        j++;
      }
    }
    
    // Append any remaining elements from left and right arrays
    return merged.concat(left.slice(i)).concat(right.slice(j));
  }
  
  function mergeSort(arr) {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) return arr;
    
    // Divide the array into two halves
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    
    // Conquer: merge the sorted halves
    return merge(left, right);
  }
  
  // Test Example 1:
  let arr1 = [38, 27, 43, 3, 9, 82, 10];
  console.log("Example 1 - Sorted (Ascending):", mergeSort(arr1));
  // Expected Output: [3, 9, 10, 27, 38, 43, 82]
  
  // ==========================================================
  // Example 2: Merge Sort for Descending Order
  // ----------------------------------------------------------
  // This variation of merge sort sorts the array in descending order.
  // We simply adjust the comparison in the merge function.
  
  function mergeDescending(left, right) {
    let merged = [];
    let i = 0, j = 0;
    
    // Compare and merge elements in descending order
    while (i < left.length && j < right.length) {
      if (left[i] > right[j]) {
        merged.push(left[i]);
        i++;
      } else {
        merged.push(right[j]);
        j++;
      }
    }
    
    return merged.concat(left.slice(i)).concat(right.slice(j));
  }
  
  function mergeSortDescending(arr) {
    if (arr.length <= 1) return arr;
    
    let mid = Math.floor(arr.length / 2);
    let left = mergeSortDescending(arr.slice(0, mid));
    let right = mergeSortDescending(arr.slice(mid));
    
    return mergeDescending(left, right);
  }
  
  // Test Example 2:
  let arr2 = [38, 27, 43, 3, 9, 82, 10];
  console.log("Example 2 - Sorted (Descending):", mergeSortDescending(arr2));
  // Expected Output: [82, 43, 38, 27, 10, 9, 3]
  
  // ==========================================================
  // Example 3: Merge Sort with Inversion Count (Medium)
  // ----------------------------------------------------------
  // An inversion is a pair (i, j) such that i < j and arr[i] > arr[j].
  // This modified merge sort counts the number of inversions while sorting.
  
  function mergeAndCount(left, right) {
    let merged = [];
    let count = 0;
    let i = 0, j = 0;
    
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        merged.push(left[i]);
        i++;
      } else {
        merged.push(right[j]);
        j++;
        // All remaining elements in left form an inversion with right[j]
        count += left.length - i;
      }
    }
    
    merged = merged.concat(left.slice(i)).concat(right.slice(j));
    return { merged, count };
  }
  
  function mergeSortCount(arr) {
    if (arr.length <= 1) return { sorted: arr, count: 0 };
    
    let mid = Math.floor(arr.length / 2);
    let leftResult = mergeSortCount(arr.slice(0, mid));
    let rightResult = mergeSortCount(arr.slice(mid));
    
    let mergeResult = mergeAndCount(leftResult.sorted, rightResult.sorted);
    let totalCount = leftResult.count + rightResult.count + mergeResult.count;
    
    return { sorted: mergeResult.merged, count: totalCount };
  }
  
  // Test Example 3:
  let arr3 = [2, 4, 1, 3, 5];
  let inversionResult = mergeSortCount(arr3);
  console.log("Example 3 - Sorted Array:", inversionResult.sorted);
  console.log("Example 3 - Inversion Count:", inversionResult.count);
  // Expected Output:
  // Sorted Array: [1, 2, 3, 4, 5]
  // Inversion Count: 3  (Inversions: (2,1), (4,1), (4,3))
  
  // ==========================================================
  // Example 4: Merge Sort on a Linked List (Hard)
  // ----------------------------------------------------------
  // Merge sort can be adapted to sort a singly linked list.
  // This example splits the linked list using the "slow and fast pointer" method.
  
  class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(0);
    let tail = dummy;
    
    while (l1 && l2) {
      if (l1.value < l2.value) {
        tail.next = l1;
        l1 = l1.next;
      } else {
        tail.next = l2;
        l2 = l2.next;
      }
      tail = tail.next;
    }
    
    tail.next = l1 || l2;
    return dummy.next;
  }
  
  function getMiddle(head) {
    // Using the slow-fast pointer strategy to find the middle
    let slow = head, fast = head, prev = null;
    while (fast && fast.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    // Disconnect the first half from the second half
    if (prev) prev.next = null;
    return slow;
  }
  
  function mergeSortList(head) {
    if (!head || !head.next) return head;
    
    let mid = getMiddle(head);
    let left = mergeSortList(head);
    let right = mergeSortList(mid);
    
    return mergeTwoLists(left, right);
  }
  
  // Helper function to print linked list values
  function printLinkedList(head) {
    let values = [];
    while (head) {
      values.push(head.value);
      head = head.next;
    }
    console.log(values.join(" -> "));
  }
  
  // Test Example 4:
  // Creating a linked list: 4 -> 2 -> 1 -> 3
  let n1 = new ListNode(4);
  let n2 = new ListNode(2);
  let n3 = new ListNode(1);
  let n4 = new ListNode(3);
  n1.next = n2;
  n2.next = n3;
  n3.next = n4;
  
  let sortedList = mergeSortList(n1);
  console.log("Example 4 - Sorted Linked List:");
  printLinkedList(sortedList);
  // Expected Output: 1 -> 2 -> 3 -> 4
  
  // ==========================================================
  // Example 5: Merge Sort for an Array of Objects (Advanced)
  // ----------------------------------------------------------
  // Suppose we have an array of objects representing students with a 'name' and a 'score'.
  // We want to sort the array in ascending order based on the 'score'.
  
  function mergeObjects(left, right) {
    let merged = [];
    let i = 0, j = 0;
    
    while (i < left.length && j < right.length) {
      if (left[i].score < right[j].score) {
        merged.push(left[i]);
        i++;
      } else {
        merged.push(right[j]);
        j++;
      }
    }
    
    return merged.concat(left.slice(i)).concat(right.slice(j));
  }
  
  function mergeSortObjects(arr) {
    if (arr.length <= 1) return arr;
    
    let mid = Math.floor(arr.length / 2);
    let left = mergeSortObjects(arr.slice(0, mid));
    let right = mergeSortObjects(arr.slice(mid));
    
    return mergeObjects(left, right);
  }
  
  // Test Example 5:
  let students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 75 },
    { name: "Charlie", score: 95 },
    { name: "Diana", score: 70 }
  ];
  
  let sortedStudents = mergeSortObjects(students);
  console.log("Example 5 - Sorted Students by Score:");
  sortedStudents.forEach(student => {
    console.log(`${student.name} - Score: ${student.score}`);
  });
  // Expected Output (by ascending score):
  // Diana - Score: 70
  // Bob - Score: 75
  // Alice - Score: 85
  // Charlie - Score: 95
  