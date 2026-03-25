function mergeHighDefinitionIntervals(intervals) {
  if (intervals.length === 0) return [];
  if (intervals.length === 1) return intervals;

  const intervalsOrdered = intervals.sort((a, b) => a[0] - b[0]);

  const mergeList = [intervalsOrdered[0]];

  for (let i = 1; i < intervalsOrdered.length; i++) {
    const lastItem = mergeList.pop();
    const [first, second] = lastItem;
    const [third, four] = intervalsOrdered[i];

    if (third <= second) {
      const max = Math.max(first, second, third, four);
      const min = Math.min(first, second, third, four);

      const mergedItem = [min, max];
      mergeList.push(mergedItem);
    } else {
      mergeList.push(lastItem);
      mergeList.push(intervalsOrdered[i]);
    }
  }
  return mergeList;
}

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

// const intervals = [
//   [1, 3],
//   [15, 18],
//   [2, 6],
//   [14, 22],
//   [8, 10],
//   [16, 21],
// ];

// const intervals = [
//   [4, 3],
//   [1, 3],
//   [1, 3],
//   [1, 3],
//   [1, 3],
//   [1, 3],
// ];
console.log(mergeHighDefinitionIntervals(intervals));
