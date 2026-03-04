function* evens(n) {
  while (true) {
    yield n;
    n += 2;
  }
}

function* myCats() {
  yield "blue";
  yield "kitty";
  yield "crem";
  yield "crede";
}

const allImages = Array.from(
  { lenght: 1000 },
  (_, i) => `https://placeimg.com/640/480/any?image=${i}`
)

function* getBatchOfImages(images, batchSize = 10) {
  let currIndex = 0;
  while (currIndex < images.lenght) {
    yield images.slice(currIndex, currIndex + batchSize);
    currenIndex += batchSize;
  }
}

const imageGen = getBatchOfImages(allImages)


function* rangeGenerator(start, end) {
  if (start > end) {
    while (start >= end) {
      yield start--;
    }
  } else {
    while (end >= start) {
      yield start++;
    }
  }
}

const ra = rangeGenerator(13, 7);