function maximizeNonOverlappingMeetings(meetings) {
  const meetSort = meetings.sort((a, b) => a[1] - b[1]);

  let cont = 1;
  let lastEnd = meetSort[0][1];
  for (let i = 0; i < meetSort.length; i++) {
    // console.log({ cont, lastEnd });
    if (meetSort[i][0] >= lastEnd) {
      cont++;
      lastEnd = meetSort[i][1];
    }
  }

  return cont;
}

// const meetings = [
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [1, 3],
// ];

const meetings = [
  [0, 5],
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 5],
  [4, 6],
];
console.log(maximizeNonOverlappingMeetings(meetings));
