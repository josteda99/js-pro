// function outerFunction() {
//   let outerVar = "Iam outer";
//   function innerFunction() {
//     console.log("Iam inner func");
//     console.log("outer var is", outerVar);
//   }

//   return innerFunction;
// }

// const clou = outerFunction();
// clou();

// const a = {
//   name: "johan",
//   sayHi: () => console.log("hello", this.name)
// }

// class B {
//   constructor() {
//     this.name = "johannn"
//   }
//   sayHello() {
//     console.log(this.name)
//   }
// }

// function gussingGame() {
//   let randomNumber = parseInt(Math.random() * 99);
//   let tries = 0;
//   let over = false;

//   return function (value) {
//     tries++;

//     if (over === true) return "The game is over, you already won!";
//     if (value > randomNumber) return `${value} is too high!`;
//     if (value < randomNumber) return `${value} is too low!`;
//     if (value === randomNumber) {
//       over = true;
//       return `You win! You found ${value} in ${tries} guesses.`
//     }
//   }
// }

// let game = gussingGame();

// function createAccount(initialPin, number) {
//   let amount = number;
//   return {
//     checkBalance(pin) {
//       if (pin !== initialPin) return "Invalid PIN."
//       return amount;
//     },
//     deposit(pin, depositAmmount) {
//       if (pin !== initialPin) return "Invalid PIN."
//       return `Successfully deposited $<${amount}>. Current balance$<${amount += depositAmmount}>`
//     },
//     withdraw(pin, withdrawAmmount) {
//       if (pin !== initialPin) return "Invalid PIN."
//       if (withdrawAmmount > amount) return "Withdrawal amount exceeds account balance. Transaction cancelled.";
//       return `Successfully withdrew $<${withdrawAmmount}>. Current balance$<${amount -= withdrawAmmount}>`
//     },
//     changePin(oldPin, newPin) {
//       if (initialPin !== oldPin) return "Invalid PIN."
//       initialPin = newPin;
//       return "PIN successfully changed!";
//     }
//   }
// }

function specialAdd(value) {
  let counter = 0;
  if (value) {
    counter++;
    return function inner(newValue) {
      specialAdd(newValue)
    }
  } else {
    return 0;
  }
}

// console.log(specialAdd()); // 0
console.log(specialAdd(1)(2)()); // 3
// console.log(specialAdd(2)(8)(5)(1)()); // 16