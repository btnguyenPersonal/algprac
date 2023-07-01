function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

const rray = []
for (let i = 0; i < 100000; i++) {
    rray.push(Math.floor(Math.random() * 100000))
}
bubbleSort(rray)
console.log(rray)
