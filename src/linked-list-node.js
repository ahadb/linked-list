/**
 * @description Linked List node used store data and to create pointer in Linked List
 * @module LinkedListNode
 */

export default class LinkedListNode {
  /**
   * @description class constructor
   */
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  /**
   * @public method
   * @description convert linked list node to string
   * @param {function} [callback]
   * @return {LinkedListNode}
   */
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
