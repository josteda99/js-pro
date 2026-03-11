function findFirstOccurrence(nums, target) {
  const length = nums.length;
  if (length === 0) return -1;

  let low = 0;
  let high = length - 1;
  let mid = Math.floor((low + high) / 2);

  let item = nums[mid];

  // if (target === nums[low]) return low;
  // if (target === nums[high]) return high;
  // if (target === nums[mid]) return mid;

  let i = 0;
  let result = -1;

  while (i < length) {
    console.log({ low, mid, high, item });
    if (target === nums[low]) {
      result = low;
    }
    if (target === nums[high]) {
      result = high;
    }
    if (target === nums[mid]) {
      result = mid;
    }

    if (item >= target) {
      high = mid;
    } else {
      low = mid;
    }

    if (nums[low] < target && nums[mid + 1] === target) {
      return nums[mid + 1];
    }

    mid = Math.floor((low + high) / 2);

    item = nums[mid];
    i++;

    // if (nums[low] === target || nums[high] === target) {
    //   if (nums[low] > nums[high]) {
    //     return low;
    //   } else {
    //     return high;
    //   }
    // }
  }

  return -1;
}

const nums = [1, 2, 3, 3, 3, 4, 5];
const target = 4;

console.log(findFirstOccurrence(nums, target));

//  if (target <= item) {
//       if (low === target) {
//         return low;
//       } else {
//         low++;
//       }
//       high = mid - 1;
//       if (high - 1 === target) {
//         high--;
//       }
//     } else {
//       low = mid;
//     }
