// БАЗОВИЙ КЛАС
class Shape {
    constructor(color, x, y) {
        this.color = color;
        this.x = x;
        this.y = y;
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
}

// КОЛО
class Circle extends Shape {
    constructor(color, x, y, radius) {
        super(color, x, y);
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

// ПРЯМОКУТНИК
class Rectangle extends Shape {
    constructor(color, x, y, width, height) {
        super(color, x, y);
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}

// ТРИКУТНИК
class Triangle extends Shape {
    constructor(color, x, y, a, b, c) {
        super(color, x, y);
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const p = this.getPerimeter() / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }
}

// RUN
function run() {
    const out = document.getElementById("out");

    const c = new Circle("red", 0, 0, 5);
    const r = new Rectangle("blue", 0, 0, 4, 6);
    const t = new Triangle("green", 0, 0, 3, 4, 5);

    out.textContent =
        "Коло:\nПлоща: " + c.getArea().toFixed(2) +
        "\nПериметр: " + c.getPerimeter().toFixed(2) + "\n\n" +

        "Прямокутник:\nПлоща: " + r.getArea() +
        "\nПериметр: " + r.getPerimeter() + "\n\n" +

        "Трикутник:\nПлоща: " + t.getArea().toFixed(2) +
        "\nПериметр: " + t.getPerimeter();
}