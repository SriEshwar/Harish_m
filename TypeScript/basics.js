// Variable Declarations with Initialized Values
var message = "Hello, TypeScript!";
var count = 10;
// Function with Type Annotations
function greet(name) {
    return "Hello, ".concat(name, "!");
}
// Class
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, ".concat(this.greeting, "!");
    };
    return Greeter;
}());
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
// Generics
function identity(arg) {
    return arg;
}
// Module
var Math;
(function (Math) {
    function add(a, b) {
        return a + b;
    }
    Math.add = add;
})(Math || (Math = {}));
// Type Inference
var input = "Hello, TypeScript!";
var length = input.length;
// Type Assertion
var numberInput = "123";
var numberLength = numberInput.length;
// Initializing Variable and Function Call
var person = { name: "Alice", age: 30 };
var greetingMessage = greet(person.name);
console.log(greetingMessage); // Output: Hello, Alice!
