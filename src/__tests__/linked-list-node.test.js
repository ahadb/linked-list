import LinkedListNode from '../linked-list-node.js';

describe('LinkedListNode Class', () => {
  it('should create list node with value', () => {
    const node = new LinkedListNode(1);

    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  });

  it('should create list node with a number primitive value', () => {
    const nodeValue = new LinkedListNode(1);
    const node = new LinkedListNode(nodeValue);

    expect(node.value.value).toBe(1);
    expect(node.next).toBeNull();
  });

  it('should create list node with a string primitive value', () => {
    const nodeValue = new LinkedListNode('one');
    const node = new LinkedListNode(nodeValue);

    expect(node.value.value).toBe("one");
    expect(node.next).toBeNull();
  });

  it('should create list node with object as a value', () => {
    const nodeValue = { value: 1, key: 'one' };
    const node = new LinkedListNode(nodeValue);

    expect(node.value.value).toBe(1);
    expect(node.value.key).toBe('one');
    expect(node.next).toBeNull();
  });

  it('should link two nodes together', () => {
    const node2 = new LinkedListNode(2);
    const node1 = new LinkedListNode(1, node2);

    expect(node1.next).toBeDefined();
    expect(node2.next).toBeNull();
    expect(node1.value).toBe(1);
    expect(node1.next.value).toBe(2);
    expect(node2.value).toBe(2);
  });

  it('should convert node to string', () => {
    const node = new LinkedListNode(1);

    expect(node.toString()).toBe('1');

    node.value = 'mutated node value';

    expect(node.toString()).toBe('mutated node value');
  });

  it('should convert node to string with custom callback stringifier', () => {
    const nodeValue = { value: 1, key: 'one' };
    const node = new LinkedListNode(nodeValue);
    const toStringCallback = value => `value: ${value.value}, key: ${value.key}`;

    expect(node.toString(toStringCallback)).toBe('value: 1, key: one');
  });
});

