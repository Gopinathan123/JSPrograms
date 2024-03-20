function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        // Find the minimum element in unsorted array
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }

        // Swap the found minimum element with the first element
        let temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

// Example usage
let arr = [64, 25, 12, 22, 11];
selectionSort(arr);
console.log(arr); // Output: [11, 12, 22, 25, 64]
