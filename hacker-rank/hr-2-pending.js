function mergeHighDefinitionIntervalsV1(intervals) {
  const result = [];

  if (intervals.length === 1) return intervals;

  let i = 0;
  while (i < intervals.length) {
    console.log(i)
    const partial = checkIntersection(intervals[i], intervals[i + 1]);

    if (partial && partial.length !== 0) {
      result.push(partial[0]);
      if (partial.length === 2) {
        result.push(partial[1]);
      }
      i++;
    }
    break;
  }

  // console.log(intervals, " - ", result)
  if (intervals.length === result.length) return result;

  return mergeHighDefinitionIntervals(result);
}


function mergeHighDefinitionIntervals(intervals) {
  const result = [];
  const length = intervals.length;

  if (length === 1) return intervals;

  let i = 0;
  while (i < length) {

    if (i + 1 >= length) {
      // result.push(intervals[i])
      break;
    }

    const el1 = intervals[i];
    const el2 = intervals[i + 1];


    const partial = checkIntersection(el1, el2) ?? [];

    if (partial.length !== 0) {
      if (partial.length === 1) {
        //fusion 
        result.push(partial[0]);
        i += 2;
      } else if (partial.length === 2) {
        //no fusion
        result.push(partial[0]);
        result.push(partial[1]);
        i += 1;
      }
    }
    console.log("result", result)

  }

  // console.log({ intervals, result })


  if (result.length === length) return result;

  // return mergeHighDefinitionIntervals(result);
  return result;
}

function checkIntersection(arr1, arr2) {

  // know it overlap
  //calculate min and max

  // if not return 2 arrays

  if (!arr1 || !arr2) return;
  const [first, second] = [...arr1];
  const [thrid, four] = [...arr2];

  if (thrid <= second && thrid >= first) {
    return [[first, four]];
  } else {
    return [arr1, arr2]
  }

}

const intervals = [[1, 3], [2, 6], [8, 10], [15, 18], [16, 21], [14, 22]];

const result = mergeHighDefinitionIntervals(intervals);

console.log(result);

