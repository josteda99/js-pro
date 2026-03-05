const cat = {
  name: "blue",
  age: 7,
  breed: "cat"
}

const handler = {
  get: (obj, property) => { return obj[property] }
}
const catProxy = new Proxy(cat, handler);