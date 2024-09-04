/*
LinkedList is a data structure that represents a list of elements. Each element is connected to the next element through a pointer. The first element is called the head and the last element is called the tail. The tail points to null, which indicates the end of the list.

LinkedLists are commonly used to implement other data structures like stacks, queues, and graphs. They provide dynamic memory allocation and efficient insertion and deletion of elements.

Types of LinkedLists
There are several types of LinkedLists, including: 
i) Singly LinkedList, 
ii) Doubly LinkedList,
iii) Circular LinkedList.


Usage of Linked Lists
Linked lists are used when:

Dynamic Size: The size of the data structure can change dynamically (e.g., expanding or contracting as elements are added or removed).
Frequent Insertions/Deletions: Insertions and deletions in the middle of the list are more efficient compared to arrays.
Memory Efficiency: When memory needs to be used efficiently, as linked lists do not require a large contiguous block of memory.
Implementing Other Data Structures: Linked lists are often used to implement stacks, queues, and graphs.


Real-Life Examples of Linked Lists

Music Playlists: Imagine a playlist where each song is linked to the next. You can easily add or remove songs without needing to reorganize the entire playlist.
Undo/Redo Functionality: Applications like text editors use linked lists to track changes. Each state is a node, and you can move forward or backward through the list to undo or redo changes.
Navigating Web Pages: A browser’s forward and backward navigation can be thought of as a doubly linked list, where each webpage visited is a node.


difference between arrays and linked lists

Arrays:
Arrays are static data structures with a fixed size allocated in memory.
Accessing elements in an array is fast and efficient using indices.
Insertions and deletions in the middle of an array are slow and require shifting elements. 
Arrays are suitable for random access and when the size is known in advance.

Linked Lists:
Linked lists are dynamic data structures where elements are linked through pointers.
Accessing elements in a linked list requires traversing from the head to the desired element.
Insertions and deletions in a linked list are efficient, as they involve changing pointers.
Linked lists are suitable for scenarios where the size is unknown or changes frequently.

*/

// Example of a Singly LinkedList in JavaScript

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Insert a new node at the end of the list
    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    // Print the elements of the list
    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example usage:
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.print(); // Output: 1, 2, 3

// In this example, we define a Node class to represent each element in the linked list. The LinkedList class has a head property that points to the first element. The append method adds a new node at the end of the list, and the print method displays the elements of the list.


