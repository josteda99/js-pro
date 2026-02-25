const key = "name";
const pet = { species: "Dog", name: "elton", age: 5 };

pet[true] = "hello";

pet.bark = function () {
  return "WOOF";
};

class Triangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }

  sayHello() {
    return "Hello";
  }
}

class ShyTriangle extends Triangle {
  constructor(color) {
    super(5, 10);
  }

  sayHello() {
    return "heelo I am shy";
  }
}


class Cat {
    constructor(name, bread){
        this.name = name;
        this.bread = bread;
    }

    static test = "holanda"

    static moew(){
      return "EMOW";
    }
}