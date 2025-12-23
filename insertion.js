// 插入排序函式
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // 目前的數字
        let j = i - 1;

        // 把比 key 大的數字往右移動
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // 將 key 插入正確位置
        arr[j + 1] = key;

        // 印出排序過程
        console.log(`第 ${i} 次排序結果:`, arr);
    }
}

// 初始化陣列
let numbers = [19, 22, 35, 37, 5, 9, 20];

console.log("原始陣列：", numbers);
insertionSort(numbers); // 執行插入排序
console.log("排序後的陣列：", numbers);