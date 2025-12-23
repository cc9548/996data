// 選擇排序函式
function selectionSort(arr) {
    let n = arr.length;

    // 外層迴圈控制未排序區域
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i; // 假設目前最小值的索引是 i

        // 找到剩餘未排序區域中的最小值
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // 如果找到的最小值索引與當前索引不同，則進行交換
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // 使用解構賦值交換數值
        }

        // 印出每一輪排序結果
        console.log(`第 ${i + 1} 次排序結果:`, arr);
    }
}

// 初始化陣列
let numbers = [19, 22, 35, 37, 5, 9, 20];

console.log("原始陣列：", numbers);
selectionSort(numbers); // 執行選擇排序
console.log("排序後的陣列：", numbers);