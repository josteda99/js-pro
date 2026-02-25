class Dog{
  constructor(name, breed){
    this.name = name;
    this.breed = breed;
  }

  bark(){
    return "WOOF";
  }
}

class GuideDog extends Dog{
  constructor(name, breed, owner){
    super(name, breed);
    this.owner = owner;
  }

  alert(){
    return `${this.name}this alert you danger`
  }
}

//before class

//old constructor function
function Dog2(name, breed){
  this.name = name;
  this.breed = breed;
}

// Dog("toby", "criollo"); //return undefined -> context window
// const test = new Dog("toby", "criollo"); //return object -> context object


const person = {
  name: "johan",
  sing (){return "lalala"}
}

