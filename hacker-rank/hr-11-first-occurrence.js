function findFirstOccurrence(nums, target) {
  const length = nums.length;
  if (length === 0) return -1;

  let low = 0;
  let high = length - 1;
  let mid = Math.floor((low + high) / 2);

  let item = nums[mid];

  let i = 0;

  if (target === nums[0]) return 0;

  while (i < length) {
    if (target === item && item > nums[mid - 1]) {
      return mid;
    } else {
      if (low === mid && target === nums[high]) return high;
    }
    target <= item ? (high = mid) : (low = mid);
    mid = Math.floor((low + high) / 2);

    item = nums[mid];
    i++;
  }

  return -1;
}

const nums = [1, 1, 1, 1, 1, 1];
const target = 1;

console.log(findFirstOccurrence(nums, target));
