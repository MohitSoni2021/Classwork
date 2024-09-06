function lis(arr) {
    const n = arr.length;
    const L = new Array(n).fill(1); // Initialize LIS lengths

    for (let i = 1; i < n; i++) {
        for (let prev = 0; prev < i; prev++) {
            if (arr[prev] < arr[i]) {
                L[i] = Math.max(L[i], L[prev] + 1);
            }
        }
    }

    return Math.max(...L);
}

// Example usage
const arr = [10, 22, 9, 33, 21, 50, 41, 60, 80];
console.log("Length of LIS:", lis(arr)); // Output: 6 (LIS: [10, 22, 33, 50, 60, 80])
