function binarySearch(nums, target) {
  const length = nums.length;
  if (length === 0) return -1;

  let low = 0;
  let high = length - 1;
  let mid = Math.floor((low + high) / 2);

  let item = nums[mid];

  if (target === nums[low]) return low;
  if (target === nums[high]) return high;
  if (target === nums[mid]) return mid;

  let i = 0;
  while (i < length / 2) {
    if (target === nums[low]) return low;
    if (target === nums[high]) return high;
    if (target === nums[mid]) return mid;

    target < item ? (high = mid) : (low = mid);
    mid = Math.floor((low + high) / 2);
    // console.log("isolated mid:", mid);

    item = nums[mid];
    i++;
  }

  return -1;
}
const nums = [2, 4, 6, 8, 10, 12, 14, 16];
const target = 10;

const result = binarySearch(nums, target);
console.log(result);
