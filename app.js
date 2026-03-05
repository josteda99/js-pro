// function mergeHighDefinitionIntervals(intervals) {
//   console.log(intervals);
//   const result = [];

//   if (intervals.length === 1) return intervals;

//   let i = 0;
//   while (i < intervals.length) {
//     console.log(i)
//     const partial = checkIntersection(intervals[i], intervals[i + 1]);

//     if (partial && partial.length !== 0) {
//       result.push(partial[0]);
//       if (partial.length === 2) {
//         result.push(partial[1]);
//       }
//       i++;
//     }
//     break;
//   }

//   // console.log(intervals, " - ", result)
//   if (intervals.length === result.length) return result;

//   return mergeHighDefinitionIntervals(result);
// }

// function checkIntersection(arr1, arr2) {
//   if (!arr1 || !arr2) return;
//   const [first, second] = [...arr1];
//   const [thrid, four] = [...arr2];

//   if (thrid <= second && thrid >= first) {
//     return [[first, four]];
//   } else {
//     return [arr1, arr2]
//   }

// }

// const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];

// const result = mergeHighDefinitionIntervals(intervals);

// console.log(result);

