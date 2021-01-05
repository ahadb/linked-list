define("linked-list.amd", [], () => /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _linked_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linked-list.js */ "./src/linked-list.js");
/* harmony import */ var _linked_list_node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linked-list-node.js */ "./src/linked-list-node.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  LinkedList: _linked_list_js__WEBPACK_IMPORTED_MODULE_0__.default,
  LinkedListNode: _linked_list_node_js__WEBPACK_IMPORTED_MODULE_1__.default
});

/***/ }),

/***/ "./src/linked-list-node.js":
/*!*********************************!*\
  !*** ./src/linked-list-node.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ LinkedListNode
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @description Linked List node used store data and to create pointer in Linked List
 * @module LinkedListNode
 */
var LinkedListNode = /*#__PURE__*/function () {
  /**
   * @description class constructor
   */
  function LinkedListNode(value, next) {
    if (next === void 0) {
      next = null;
    }

    _classCallCheck(this, LinkedListNode);

    this.value = value;
    this.next = next;
  }
  /**
   * @public method
   * @description convert linked list node to string
   * @param {function} [callback]
   * @return {LinkedListNode}
   */


  _createClass(LinkedListNode, [{
    key: "toString",
    value: function toString(callback) {
      return callback ? callback(this.value) : "" + this.value;
    }
  }]);

  return LinkedListNode;
}();



/***/ }),

/***/ "./src/linked-list.js":
/*!****************************!*\
  !*** ./src/linked-list.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ LinkedList
/* harmony export */ });
/* harmony import */ var _linked_list_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linked-list-node */ "./src/linked-list-node.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @description implementation of Linked List
 * @module LinkedList
 */


var LinkedList = /*#__PURE__*/function () {
  /**
   * @description class constructor
   */
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.head = null;
    this.tail = null;
  }
  /**
   * @public method
   * @description prepend value to linked list
   * @param {*} value
   * @return {LinkedList}
   */


  _createClass(LinkedList, [{
    key: "prepend",
    value: function prepend(value) {
      var newNode = new _linked_list_node__WEBPACK_IMPORTED_MODULE_0__.default(value, this.head);
      this.head = newNode;

      if (!this.tail) {
        this.tail = newNode;
      }

      return this;
    }
    /**
     * @public method
     * @description append value to linked list
     * @param {*} value
     * @return {LinkedList}
     */

  }, {
    key: "append",
    value: function append(value) {
      var newNode = new _linked_list_node__WEBPACK_IMPORTED_MODULE_0__.default(value);

      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        return this;
      }

      var currentTail = this.tail;
      currentTail.next = newNode;
      this.tail = newNode;
      return this;
    }
    /**
     * @public method
     * @description delete value from linked list node
     * @param {*} value
     * @return {LinkedListNode}
     */

  }, {
    key: "delete",
    value: function _delete(value) {
      if (!this.head) {
        return null;
      }

      var deletedNode = null;

      while (this.head && this.head.value === value) {
        deletedNode = this.head;
        this.head = this.head.next;
      }

      var currentNode = this.head;

      if (currentNode !== null) {
        while (currentNode.next) {
          if (currentNode.next.value === value) {
            deletedNode = currentNode.next;
            currentNode.next = currentNode.next.next;
          } else {
            currentNode = currentNode.next;
          }
        }
      }

      if (this.tail.value === value) {
        this.tail = currentNode;
      }

      return deletedNode;
    }
    /**
     * @public method
     * @description delete tail value from linked list node
     * @return {LinkedListNode}
     */

  }, {
    key: "deleteTail",
    value: function deleteTail() {
      var deletedTail = this.tail;

      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        return deletedTail;
      }

      var currentNode = this.head;

      while (currentNode.next) {
        if (!currentNode.next.next) {
          currentNode.next = null;
        } else {
          currentNode = currentNode.next;
        }
      }

      this.tail = currentNode;
      return deletedTail;
    }
    /**
     * @public method
     * @description delete head value from linked list
     * @return {LinkedListNode}
     */

  }, {
    key: "deleteHead",
    value: function deleteHead() {
      if (!this.head) {
        return null;
      }

      var deletedHead = this.head;

      if (this.head.next) {
        this.head = this.head.next;
      } else {
        this.head = null;
        this.tail = null;
      }

      return deletedHead;
    }
    /**
     * @public method
     * @description find value in linked list
     * @param {Object} findParams
     * @param {function} [findParams.callback]
     * @return {LinkedListNode}
     */

  }, {
    key: "find",
    value: function find(_ref) {
      var _ref$value = _ref.value,
          value = _ref$value === void 0 ? undefined : _ref$value,
          _ref$callback = _ref.callback,
          callback = _ref$callback === void 0 ? undefined : _ref$callback;

      if (!this.head) {
        return null;
      }

      var currentNode = this.head;

      while (currentNode) {
        if (callback && callback(currentNode.value)) {
          return currentNode;
        }

        if (value !== undefined && currentNode.value === value) {
          return currentNode;
        }

        currentNode = currentNode.next;
      }

      return null;
    }
    /**
     * @public method
     * @description convert linked list to array
     * @return {LinkedListNode[]}
     */

  }, {
    key: "toArray",
    value: function toArray() {
      var nodes = [];
      var currentNode = this.head;

      while (currentNode) {
        nodes.push(currentNode);
        currentNode = currentNode.next;
      }

      return nodes;
    }
    /**
     * @public method
     * @description convert linked list to string
     * @param {function} [callback]
     * @return {string}
     */

  }, {
    key: "toString",
    value: function toString(callback) {
      return this.toArray().map(function (node) {
        return node.toString(callback);
      }).toString();
    }
  }]);

  return LinkedList;
}();



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.js");
/******/ })()
.default);;
//# sourceMappingURL=linked-list.amd.js.map