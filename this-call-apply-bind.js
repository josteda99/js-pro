const person = {
  name: "conn",
  city: "bogota",
  sing: function () {
    return `${this.name} sings lalala`;
  },
  song: () => {
    return `${this.name} songs lalala`;
  },
};

const test = person.sing;
const test2 = person.song;

class Test {
  age = 12;

  static name = this;

  whaat() {
    console.log(this);
  }
}

// console.log(...[1, 2, 3, 4, 5]);

const btn = document.querySelector("#button");

if (btn) {
  btn.addEventListener("click", person.sing); // context will be <button/>
  btn.addEventListener("click", person.sing.call(person)); // context will be person but it will be call directly, with no click event
  btn.addEventListener("click", person.sing.bind(person)); // context will  be person but it works
}

class Counter {
  constructor(startingNum = 0, incrementAmt = 1) {
    this.count = startingNum;
    this.incrementAmt = incrementAmt;
  }

  start() {
    setInterval(function () {
      console.log(this);
      console.log(this.count);
      this.count += this.incrementAmt;
    }, 1000);
  }

  start2() {
    console.log(typeof this.test());
    console.log(typeof this.test);
    setInterval(this.test(), 1000);
  }

  test() {
    console.log("hola");
  }
}

const butters = {
  firstName: "Butters",
  lastName: "Cluckly",
  greet: function () {
    return `Hello ${this.firstName} ${this.lastName}`;
  },
};

const fluffy = {
  firstName: "Fluffy",
  lastName: "Meowson",
};

function greetFluffy() {
  // Invoke the greet method but instead of returning "Hello Butters Cluckly", return "Hello Fluffy Meowson". Do not modify the fluffy object above.
  butters.greet.call(fluffy);
}

greetFluffy();

// class Timer {
//   constructor() {
//     this.tick = 0;
//     this.timerId = null;
//   }

//   start() {
//     this.timerId = setInterval(() => {
//       console.log(this.tick++);
//       if (this.tick === 5) {
//         this.stop();
//       }
//     }, 1000);
//   }

//   stop() {
//     clearInterval(this.timerId);
//   }
// }

// const t = new Timer();
