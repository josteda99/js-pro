function binarySearch(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let mid = Math.floor((low + high) / 2);

  let item = nums[mid];

  while (item !== target) {
    console.log({ low, high, mid, item });
    if (target < item) {
      low = 0;
      high = mid;
    } else {
      low = mid;
      high = high;
    }
    mid = Math.floor((low + high) / 2);
    item = nums[mid];
  }

  return -1;
}
const nums = [2, 4, 6, 8, 10, 12, 14, 16];
const target = 16;

const result = binarySearch(nums, target);
console.log(result);
