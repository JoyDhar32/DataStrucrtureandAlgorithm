
//A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. This means that the first element added to the queue will be the first one to be removed. Queues are analogous to real-life queues, like a line of people waiting for a service. The person who comes first is served first, and new people join the end of the line.

class Queue {
    constructor() {
      this.items = [];
    }
  
    // Enqueue: Add an element to the end of the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Dequeue: Remove and return the first element from the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    // Peek: Get the front element of the queue
    peek() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the queue
    size() {
      return this.items.length;
    }
  
    // Print the queue
    print() {
      console.log(this.items.toString());
    }
  }
  
  // Usage example
  let queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  
  console.log(queue.dequeue()); // Output: 10
  console.log(queue.peek());    // Output: 20
  console.log(queue.size());    // Output: 2
  queue.print();                // Output: 20,30

  //⭐ Queue ⭐

  /*

Why Do We Need Queues?
Queues are useful in situations where we need to manage processes or tasks in the order they arrive. They are used in:

Scheduling: Operating systems use queues for process scheduling to ensure that processes are executed in the order they arrive.
Task management: In web servers, tasks or requests are handled in the order they are received.
Buffering: Queues are used in buffering scenarios, like handling IO operations, where data is temporarily stored and processed in the order it was received.
Breadth-First Search (BFS): Queues are used in BFS algorithms for tree or graph traversal.
Pros and Cons of Queues
Pros:

Simple to implement: Queues have a straightforward structure and are easy to understand.
FIFO order: This order is crucial in many scenarios where processing order is important.
Efficient operations: Enqueue (adding an element) and dequeue (removing an element) operations are generally O(1) with appropriate implementations.
Cons:

Limited access: You can only access the front and rear elements, limiting flexibility.
Fixed Size (in arrays): If implemented using a fixed-size array, queues can become full, requiring resizing or handling overflow.
Not suitable for complex operations: Queues are not ideal for scenarios that require more complex operations like random access or element removal from the middle.
*/


  