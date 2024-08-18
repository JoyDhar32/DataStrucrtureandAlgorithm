/*
In Data Structures and Algorithms (DSA), a stack is a linear data structure that follows the Last In, First Out (LIFO) principle. This means that the last element added to the stack is the first one to be removed. Imagine a stack of plates; you add a plate to the top, and when you need a plate, you take the top one off first. This is exactly how a stack operates*/






class Stack {
    constructor() {
        this.items = []; // Array to store stack elements
    }

    // Push element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Pop element off the stack (removes and returns the top element)
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // Peek at the top element without removing it
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }
}

// Example usage:

const stack = new Stack();

// Push elements onto the stack
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // Output: 30 (top element)
console.log(stack.pop());  // Output: 30 (removes and returns the top element)
console.log(stack.pop());  // Output: 20
console.log(stack.isEmpty()); // Output: false (there's still one element)
console.log(stack.pop());  // Output: 10
console.log(stack.isEmpty()); // Output: true (now the stack is empty)
console.log(stack.peek()); // Output: true (now the stack is empty)
console.log(stack.pop());  // Output: 10

// ⭐ Stack ⭐















/*
Key Operations:
Push: Adds an element to the top of the stack.
Pop: Removes the top element from the stack.
Peek/Top: Returns the top element without removing it.
isEmpty: Checks if the stack is empty.
Why Do We Need a Stack?
Stacks are essential because they provide a simple way to manage data in a specific order. They are particularly useful when you need to reverse things, track state in recursive algorithms, or manage functions and operations in a LIFO manner.

Pros of Using a Stack:
Simple and Easy to Use: Stacks have a straightforward structure and are easy to implement.
Efficient Memory Use: Because of its LIFO nature, a stack doesn’t require much overhead for managing elements.
Supports Backtracking: Stacks are ideal for scenarios where you need to backtrack, like undo mechanisms in text editors or traversing trees.
Cons of Using a Stack:
Limited Access: You can only access the top element. If you need to access elements in the middle, you either have to pop elements off the stack until you reach it, or use a different data structure.
Fixed Size in Array Implementation: If a stack is implemented using an array, it has a fixed size, which can lead to overflow if not handled properly.
Not Suitable for Large Data Sets: If you have a large amount of data and need to frequently access elements that are not at the top, a stack may not be the best choice.
Where Do We Use Stacks in Real Life?
Stacks are used in various real-life applications, both in computing and everyday scenarios:

Function Call Management in Programming:

Call Stack: When a program calls a function, the details of the current function are pushed onto the call stack. Once the function is completed, it is popped off the stack. This helps manage the return addresses and local variables.
Expression Evaluation:

Expression Parsing: Stacks are used to evaluate expressions, especially those involving parentheses and operators, like converting infix expressions to postfix (Reverse Polish Notation).
Undo Mechanism in Text Editors:

Undo/Redo Operations: Text editors use stacks to implement the undo feature. Each change is pushed onto a stack, and when you hit undo, the last change is popped off.
Browser History:

Navigation: When you navigate between web pages, the previous pages are pushed onto a stack. Hitting the back button pops the last page from the stack and takes you to it.
Backtracking Algorithms:

Maze Solving, Puzzle Games: Stacks are used in algorithms that require backtracking, such as finding paths in a maze or solving puzzles like the Tower of Hanoi.
Recursive Programming:

Recursion Management: In recursive algorithms, each function call is pushed onto a stack, and as the recursion unfolds, these calls are popped off.
*/

