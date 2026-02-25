class Circle {
  static allowedColors = new Set(["red", "orange"]);

  constructor(radius, color) {
    this._radius = radius;
    if (Circle.allowedColors.has(color)) {
      this._color = color;
    }
  }

  get diameter() {
    return this._radius * 2;
  }

  set radius(value) {
    if (value < 0) {
      throw new Error("Radius cannon be negative");
    } else {
      this._radius = value;
    }
  }
}

class MyClass {
  static {
    console.log("class is loaded");
  }
}
