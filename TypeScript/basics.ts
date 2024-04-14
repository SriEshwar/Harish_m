// Variable Declarations 
let message: string = "Hello, TypeScript!";
const count: number = 10;


function greet(name: string): string {
    return `Hello, ${name}!`;
}


interface Person {
    name: string;
    age: number;
}

// Class
class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return `Hello, ${this.greeting}!`;
    }
}

// Enum
enum Color {
    Red,
    Green,
    Blue
}

// Generics
function identity<T>(arg: T): T {
    return arg;
}

// Module
namespace Math {
    export function add(a: number, b: number): number {
        return a + b;
    }
}

// Type Inference
let input = "Hello, TypeScript!";
let length: number = input.length;

// Type Assertion
let numberInput: any = "123";
let numberLength: number = (numberInput as string).length;


let person: Person = { name: "Alice", age: 30 };
let greetingMessage: string = greet(person.name);

console.log(greetingMessage);

// Output: Hello, Alice!
