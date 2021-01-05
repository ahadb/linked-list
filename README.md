# Linked List

My implementation of a singly linked list in JavaScript (singly meaning unidirectional and can be
traversed in only one direction)

## Why Linked Lists?

Linked lists are the base structures that other more complex data structures are derived from and 
store data in a series of "nodes". If you're here you know the differences, and if not, then you
should read more about them, their advantages and disadvantages, etc. 

## Install

Soon to be distributed on NPM

## Use

```javascript
import LinkedList from "./linked-list.js";

const singlyLinkedList = new LinkedList();

// objects as nodes
const node1 = { value: 1, key: 'one' };
const node2 = { value: 2, key: 'two' };

singlyLinkedList
  .append(node1)
  .prepend(node2);

singlyLinkedList.head // => nodeValue1
singlyLinkedList.tail // => nodeValue2

const nodeStringifier = value => `${value.key}:${value.value}`;
singlyLinkedList.toString(nodeStringifier; // => "two:2,one:1"
```

## API

### `LinkedListNode`

The building block of Singly Linked List is a node.

```javascript
const node2 = new LinkedListNode(2);
const node1 = new LinkedListNode(1, node2);
```

### `LinkedList`

Create a new Singly Linked List with no items.

```javascript
const singlyLinkedList = new LinkedList();
```

### `LinkedList.prepend`

Prepend a node to your Singly Linked List.

```javascript
const singlyLinkedList = new LinkedList();
singlyLinkedList.prepend(2);
```

### `LinkedList.append`

Append a node to your Singly Linked List.

```javascript
const singlyLinkedList = new LinkedList();
singlyLinkedList.append(2);
```

### `LinkedList.delete`

Delete a node by value anywhere in your Singly Linked List.

```javascript
const singlyLinkedList = new LinkedList();

singlyLinkedList.append(1);
singlyLinkedList.append(2);
singlyLinkedList.append(3);

singlyLinkedList.delete(3);
```

### `LinkedList.deleteHead`

Delete the head node in your Singly Linked List.

```javascript
const singlyLinkedList = new LinkedList();

singlyLinkedList.append(1);
singlyLinkedList.append(2);
singlyLinkedList.append(3);

singlyLinkedList.deleteHead();
```

### `LinkedList.deleteTail`

Delete the tail node in your Singly Linked List.

```javascript
const singlyLinkedList = new LinkedList();

singlyLinkedList.append(1);
singlyLinkedList.prepend(2);
singlyLinkedList.prepend(3);

singlyLinkedList.deleteTail();
```

### `LinkedList.find`

Find a node by value in your Singly Linked List.

```javascript
const singlyLinkedList = new LinkedList();

singlyLinkedList.append(1);

singlyLinkedList
  .append(2)
  .append(3);

// you can use a callback as well here
singlyLinkedList.find({ value: 2 });
```

### `LinkedList.toArray`

Convert your Singly Linked List to an Array

```javascript
const singlyLinkedList = new LinkedList();

// objects as nodes
const node1 = { value: 1, key: 'one' };
const node2 = { value: 2, key: 'two' };

singlyLinkedList
  .append(node1)
  .prepend(node2);

singlyLinkedList.toArray()
```

### `LinkedList.toString`

Convert your Singly Linked List to a String

```javascript
const singlyLinkedList = new LinkedList();

// objects as nodes
const node1 = { value: 1, key: 'one' };
const node2 = { value: 2, key: 'two' };

singlyLinkedList
  .append(node1)
  .prepend(node2);

singlyLinkedList.toString()
```


