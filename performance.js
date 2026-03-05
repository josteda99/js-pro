
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const largeArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 1000))

const arrayForBubble = [...largeArray];
const arrayForNative = [...largeArray];

performance.mark("nativeSortStart");
arrayForNative.sort((a, b) => a - b);
performance.mark("nativeSortEnd");

performance.measure("nativeSort", "nativeSortStart", "nativeSortEnd")

performance.mark("bubbleSortStart");
bubbleSort(arrayForBubble);
performance.mark("bubbleSortEnd");

performance.measure("bubbleSort", "bubbleSortStart", "bubbleSortEnd")

const nativeSortDuration = performance.getEntriesByName("nativeSort")[0].duration;
const bubbleSortDuration = performance.getEntriesByName("bubbleSort")[0].duration;

console.log(nativeSortDuration)
console.log(bubbleSortDuration)