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
import SinglyLinkedList from "./singly-linked-list.js";

const singlyLinkedList = new SinglyLinkedList();

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

### `SinglyLinkedList`

Create a new Singly Linked List with no items.

```javascript
const singlyLinkedList = new SinglyLinkedList();
```

### `SinglyLinkedList.prepend`

Prepend a node to your Singly Linked List.

```javascript
const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.prepend(2);
```

### `SinglyLinkedList.append`

Append a node to your Singly Linked List.

```javascript
const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.append(2);
```

### `SinglyLinkedList.delete`

Delete a node by value anywhere in your Singly Linked List.

```javascript
const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.append(1);
singlyLinkedList.append(2);
singlyLinkedList.append(3);

singlyLinkedList.delete(3);
```

### `SinglyLinkedList.deleteHead`

Delete the head node in your Singly Linked List.

```javascript
const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.append(1);
singlyLinkedList.append(2);
singlyLinkedList.append(3);

singlyLinkedList.deleteHead();
```

### `SinglyLinkedList.deleteTail`

Delete the tail node in your Singly Linked List.

```javascript
const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.append(1);
singlyLinkedList.prepend(2);
singlyLinkedList.prepend(3);

singlyLinkedList.deleteTail();
```

### `SinglyLinkedList.find`

Find a node by value in your Singly Linked List.

```javascript
const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.append(1);

singlyLinkedList
  .append(2)
  .append(3);

// you can use a callback as well here
singlyLinkedList.find({ value: 2 });
```

### `SinglyLinkedList.toArray`

Convert your Singly Linked List to an Array

```javascript
const singlyLinkedList = new SinglyLinkedList();

// objects as nodes
const node1 = { value: 1, key: 'one' };
const node2 = { value: 2, key: 'two' };

singlyLinkedList
  .append(node1)
  .prepend(node2);

singlyLinkedList.toArray()
```

### `SinglyLinkedList.toArray`

Convert your Singly Linked List to a String

```javascript
const singlyLinkedList = new SinglyLinkedList();

// objects as nodes
const node1 = { value: 1, key: 'one' };
const node2 = { value: 2, key: 'two' };

singlyLinkedList
  .append(node1)
  .prepend(node2);

singlyLinkedList.toString()
```


