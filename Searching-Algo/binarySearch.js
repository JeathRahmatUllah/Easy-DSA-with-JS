// ===================== 1️⃣ Basic Binary Search (Beginner) =====================
// Find a target number in a sorted array
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid; // Found target, return index
        else if (arr[mid] < target) left = mid + 1; // Search right half
        else right = mid - 1; // Search left half
    }
    return -1; // Target not found
}

console.log(binarySearch([1, 3, 5, 7, 9], 5)); // Output: 2
console.log(binarySearch([2, 4, 6, 8], 10)); // Output: -1

// ===================== 2️⃣ Binary Search (Recursive Approach) =====================
// Same binary search, but using recursion
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1; // Base case: Not found

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid; // Found target
    else if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, right);
    else return binarySearchRecursive(arr, target, left, mid - 1);
}

console.log(binarySearchRecursive([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(binarySearchRecursive([10, 20, 30, 40], 25)); // Output: -1

// ===================== 3️⃣ Find First and Last Occurrence (Medium) =====================
// Given a sorted array, find the first and last index of a target value
function searchRange(nums, target) {
    function findBoundary(isFirst) {
        let left = 0, right = nums.length - 1, boundary = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                boundary = mid;
                if (isFirst) right = mid - 1; // Search left for first occurrence
                else left = mid + 1; // Search right for last occurrence
            } else if (nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return boundary;
    }

    return [findBoundary(true), findBoundary(false)];
}

console.log(searchRange([1, 2, 2, 2, 3, 4], 2)); // Output: [1, 3]
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]

// ===================== 4️⃣ Square Root using Binary Search (Hard) =====================
// Given a number `x`, find its square root rounded down
function squareRoot(x) {
    if (x < 2) return x; // Handle 0 and 1

    let left = 1, right = x, ans = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let square = mid * mid;

        if (square === x) return mid;
        if (square < x) {
            ans = mid; // Store possible square root
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans; // Return the largest integer sqrt
}

console.log(squareRoot(25)); // Output: 5
console.log(squareRoot(20)); // Output: 4

// ===================== 5️⃣ Find Peak Element in an Array (Hard) =====================
// A peak element is greater than its neighbors. Find any peak element.
function findPeakElement(nums) {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[mid + 1]) right = mid; // Peak is in left half
        else left = mid + 1; // Peak is in right half
    }
    return left; // Return peak index
}

console.log(findPeakElement([1, 2, 3, 1])); // Output: 2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // Output: 5
