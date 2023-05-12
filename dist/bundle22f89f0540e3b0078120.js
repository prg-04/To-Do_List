"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["bundle"],{

/***/ "./src/List.js":
/*!*********************!*\
  !*** ./src/List.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var List = /*#__PURE__*/_createClass(function List(description) {
  var completed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : +1;
  _classCallCheck(this, List);
  this.description = description;
  this.completed = completed;
  this.id = index;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);

/***/ }),

/***/ "./src/addList.js":
/*!************************!*\
  !*** ./src/addList.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_dots_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/dots.png */ "./src/assets/dots.png");
/* harmony import */ var _assets_bin_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/bin.png */ "./src/assets/bin.png");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store.js */ "./src/store.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var UIList = /*#__PURE__*/function () {
  function UIList() {
    _classCallCheck(this, UIList);
  }
  _createClass(UIList, null, [{
    key: "displayList",
    value: function displayList() {
      var lists = _store_js__WEBPACK_IMPORTED_MODULE_3__["default"].getList();
      lists.forEach(function (list) {
        return UIList.addList(list);
      });
    }
  }, {
    key: "addList",
    value: function addList(list) {
      var ul = document.getElementById('list');
      var li = document.createElement('li');
      li.className = 'list-group-item';
      li.id = list.id;
      li.innerHTML = "\n      <div>\n        <input type=\"checkbox\" class=\"form-check-input me-2\" ".concat(list.completed ? 'checked' : '', " />\n        <span class=\"task-description").concat(list.completed ? ' completed' : '', "\" contentEditable>").concat(list.description, "</span>\n      </div>\n      <img src=").concat(_assets_dots_png__WEBPACK_IMPORTED_MODULE_0__, " alt=\"toggle-menu\" class=\"dots\" />\n      <img src=").concat(_assets_bin_png__WEBPACK_IMPORTED_MODULE_1__, " alt=\"delete\" class=\"bin\" />\n\n  ");
      ul.appendChild(li);
      var checkbox = li.querySelector('.form-check-input');
      var description = li.querySelector('.task-description');
      if (list.completed) {
        var binIcon = li.querySelector('.bin');
        var dotsIcon = li.querySelector('.dots');
        binIcon.style.display = 'block';
        dotsIcon.style.display = 'none';
        description.classList.add('completed');
      } else {
        var _binIcon = li.querySelector('.bin');
        var _dotsIcon = li.querySelector('.dots');
        _binIcon.style.display = 'none';
        _dotsIcon.style.display = 'block';
      }
      checkbox.addEventListener('change', function () {
        list.completed = checkbox.checked;
        list.element = li;
        var binIcon = li.querySelector('.bin');
        var dotsIcon = li.querySelector('.dots');
        if (list.completed) {
          binIcon.style.display = 'block';
          dotsIcon.style.display = 'none';
          description.classList.add('completed');
          description.contentEditable = false;
          _store_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateCompleted(list);
        } else {
          binIcon.style.display = 'none';
          dotsIcon.style.display = 'block';
          description.classList.remove('completed');
          description.contentEditable = true;
          _store_js__WEBPACK_IMPORTED_MODULE_3__["default"].uncheckCompleted(list);
        }
        UIList.removeCompleted(li);
      });
      description.addEventListener('input', function () {
        list.description = description.textContent;
        list.element = li;
        _store_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateList(list);
      });
    }
  }, {
    key: "showAlert",
    value: function showAlert() {
      var div = document.createElement('div');
      div.className = 'error';
      var text = document.createTextNode('Please enter a task');
      div.appendChild(text);
      var form = document.getElementById('form');
      var cont = document.getElementById('container');
      cont.insertBefore(div, form);
      setTimeout(function () {
        div.remove();
      }, 1000);
    }
  }, {
    key: "clearFields",
    value: function clearFields() {
      document.getElementById('input').value = '';
    }
  }, {
    key: "removeCompletedOnReload",
    value: function removeCompletedOnReload() {
      document.querySelectorAll('.list-group-item').forEach(function (item) {
        item.querySelectorAll('div').forEach(function (childItem) {
          var checkbox = childItem.querySelectorAll('input');
          if (checkbox[0].checked) {
            item.remove();
            _store_js__WEBPACK_IMPORTED_MODULE_3__["default"].removeChecked();
          }
        });
      });
    }
  }, {
    key: "removeCompletedOnClear",
    value: function removeCompletedOnClear() {
      var lists = document.querySelectorAll('.list-group-item');
      var completedLists = Array.from(lists).filter(function (list) {
        return list.querySelector('.form-check-input').checked;
      });
      completedLists.forEach(function (list) {
        return list.remove();
      });
      _store_js__WEBPACK_IMPORTED_MODULE_3__["default"].removeChecked();
    }
  }, {
    key: "removeCompleted",
    value: function removeCompleted(target) {
      var child = target.querySelectorAll('.checked');
      child.forEach(function (elem) {
        if (elem.checked === true) {
          elem.parentElement.parentElement.remove();
        }
      });
    }
  }]);
  return UIList;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UIList);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _assets_refresh_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/refresh.png */ "./src/assets/refresh.png");
/* harmony import */ var _assets_enter_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/enter.png */ "./src/assets/enter.png");
/* harmony import */ var _addList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addList.js */ "./src/addList.js");
/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./List.js */ "./src/List.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store.js */ "./src/store.js");






var heading = document.getElementById('reloadImg');
heading.src = _assets_refresh_png__WEBPACK_IMPORTED_MODULE_1__;
document.getElementById('addBtn').innerHTML = "\n<img src=".concat(_assets_enter_png__WEBPACK_IMPORTED_MODULE_2__, " alt=\"enter\" />\n");
document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  window.location.reload();
  var input = document.getElementById('input').value;
  if (input === '') {
    _addList_js__WEBPACK_IMPORTED_MODULE_3__["default"].showAlert();
  } else {
    var list = new _List_js__WEBPACK_IMPORTED_MODULE_4__["default"](input);
    _addList_js__WEBPACK_IMPORTED_MODULE_3__["default"].addList(list);
    _store_js__WEBPACK_IMPORTED_MODULE_5__["default"].addList(list);
    _addList_js__WEBPACK_IMPORTED_MODULE_3__["default"].clearFields();
  }
});
document.getElementById('reloadImg').addEventListener('click', _addList_js__WEBPACK_IMPORTED_MODULE_3__["default"].removeCompletedOnReload);
document.getElementById('clearBtn').addEventListener('click', _addList_js__WEBPACK_IMPORTED_MODULE_3__["default"].removeCompletedOnClear);
document.addEventListener('DOMContentLoaded', function () {
  _addList_js__WEBPACK_IMPORTED_MODULE_3__["default"].displayList();
  document.querySelectorAll('.bin').forEach(function (item) {
    item.addEventListener('click', function () {
      item.parentNode.remove();
      _addList_js__WEBPACK_IMPORTED_MODULE_3__["default"].removeCompleted(item);
      _store_js__WEBPACK_IMPORTED_MODULE_5__["default"].removeChecked();
    });
  });
});

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Store = /*#__PURE__*/function () {
  function Store() {
    _classCallCheck(this, Store);
  }
  _createClass(Store, null, [{
    key: "getList",
    value: function getList() {
      var list = localStorage.getItem('list');
      if (list === null) {
        return [];
      }
      return JSON.parse(list);
    }
  }, {
    key: "addList",
    value: function addList(list) {
      var lists = Store.getList();
      if (lists.length === 0) {
        list.id = 1;
      } else {
        var lastList = lists[lists.length - 1];
        list.id = lastList.id + 1;
      }
      lists.push(list);
      localStorage.setItem('list', JSON.stringify(lists));
    }
  }, {
    key: "updateList",
    value: function updateList(list) {
      var lists = Store.getList();
      var index = lists.findIndex(function (item) {
        return item.id === list.id;
      });
      if (index === -1) {
        if (lists.length === 0) {
          list.id = 1;
        } else {
          var lastList = lists[lists.length - 1];
          list.id = lastList.id + 1;
        }
        lists.push(list);
      } else {
        lists[index] = list;
      }
      localStorage.setItem('list', JSON.stringify(lists));
    }
  }, {
    key: "updateCompleted",
    value: function updateCompleted(list) {
      var lists = Store.getList();
      var index = lists.findIndex(function (item) {
        return item.id === list.id;
      });
      if (index !== -1) {
        lists[index].completed = !lists[index].completed;
        localStorage.setItem('list', JSON.stringify(lists));
      }
    }
  }, {
    key: "uncheckCompleted",
    value: function uncheckCompleted(list) {
      var lists = Store.getList();
      var index = lists.findIndex(function (item) {
        return item.id === list.id;
      });
      if (index !== -1) {
        lists[index].completed = false;
        localStorage.setItem('list', JSON.stringify(lists));
      }
    }
  }, {
    key: "removeList",
    value: function removeList(id) {
      var lists = Store.getList();
      var index = lists.findIndex(function (list) {
        return list.id === id;
      });
      if (index !== -1) {
        lists.splice(index, 1);
        localStorage.setItem('list', JSON.stringify(lists));
      }
    }
  }, {
    key: "removeChecked",
    value: function removeChecked() {
      var lists = Store.getList();
      var filteredLists = lists.filter(function (list) {
        return !list.completed;
      });
      for (var i = 0; i < filteredLists.length; i++) {
        filteredLists[i].id = i + 1;
      }
      localStorage.setItem('list', JSON.stringify(filteredLists));
    }
  }]);
  return Store;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Store);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  text-decoration: none;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #f3f3f3;\n  min-height: 100vh;\n  width: 100%;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  background-color: #fff;\n  border-radius: 5px;\n  width: 80%;\n  height: 90%;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n.container .heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #ccc;\n  padding: 1rem;\n  width: 100%;\n}\n.container .heading #reloadImg {\n  width: 15px;\n  height: 15px;\n  object-fit: fill;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n.container .heading #reloadImg:hover {\n  transform: rotate(360deg) scale(1.05);\n}\n.container #form {\n  display: flex;\n  width: 100%;\n  height: 3rem;\n  margin-top: 0.5rem;\n  border-bottom: 1px solid #ccc;\n  padding: 1rem;\n}\n.container #form input {\n  width: 95%;\n  border: none;\n}\n.container #form input:focus {\n  outline: none;\n}\n.container #form #addBtn {\n  width: 45px;\n  border: none;\n  position: relative;\n  right: -0.8rem;\n  background-color: #fff;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n.container #form #addBtn img {\n  width: 15px;\n  height: 15px;\n  object-fit: contain;\n}\n.container #form #addBtn:hover img {\n  transform: scale(1.05);\n}\n.container #list {\n  width: 100%;\n  gap: 1rem;\n}\n.container #list .list-group-item {\n  padding: 0 1rem;\n  margin: 1rem 0 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #ccc;\n}\n.container #list .list-group-item div {\n  height: 3rem;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.container #list .list-group-item .bin,\n.container #list .list-group-item .dots {\n  height: 15px;\n  width: 15px;\n  object-fit: contain;\n  cursor: pointer;\n}\n.container #list .list-group-item .bin {\n  display: none;\n}\n.container #list .list-group-item .dots:active {\n  visibility: hidden;\n}\n.container #list .list-group-item .dots:active + .bin {\n  display: block;\n}\n.container #clearBtn {\n  width: 100%;\n  height: 3rem;\n  border: none;\n}\n.container .error {\n  color: red;\n  font-size: 1rem;\n  font-weight: 500;\n  background-color: rgba(204, 51, 204, 0.2);\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2rem;\n}\n\n.task-description {\n  width: 100%;\n  padding: 0.7rem;\n  border: none;\n}\n.task-description:focus {\n  outline: none;\n}\n\n.completed {\n  text-decoration: line-through;\n  color: #ccc;\n}\n\n@media screen and (min-width: 768px) {\n  #container {\n    width: 60%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;EACA,gBAAA;EACA,qBAAA;EACA,sBAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,yBAAA;EACA,iBAAA;EACA,WAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,uCAAA;AACF;AACE;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,6BAAA;EACA,aAAA;EACA,WAAA;AACJ;AACI;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,gCAAA;AACN;AACM;EACE,qCAAA;AACR;AAIE;EACE,aAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,6BAAA;EACA,aAAA;AAFJ;AAII;EACE,UAAA;EACA,YAAA;AAFN;AAIM;EACE,aAAA;AAFR;AAMI;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,cAAA;EACA,sBAAA;EACA,eAAA;EACA,gCAAA;AAJN;AAMM;EACE,WAAA;EACA,YAAA;EACA,mBAAA;AAJR;AAQQ;EACE,sBAAA;AANV;AAYE;EACE,WAAA;EACA,SAAA;AAVJ;AAYI;EACE,eAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,6BAAA;AAVN;AAYM;EACE,YAAA;EACA,OAAA;EACA,aAAA;EACA,mBAAA;EACA,SAAA;AAVR;AAYM;;EAEE,YAAA;EACA,WAAA;EACA,mBAAA;EACA,eAAA;AAVR;AAaM;EACE,aAAA;AAXR;AAeQ;EACE,kBAAA;AAbV;AAcU;EACE,cAAA;AAZZ;AAmBE;EACE,WAAA;EACA,YAAA;EACA,YAAA;AAjBJ;AAoBE;EACE,UAAA;EACA,eAAA;EACA,gBAAA;EACA,yCAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;AAlBJ;;AAsBA;EACE,WAAA;EACA,eAAA;EACA,YAAA;AAnBF;AAqBE;EACE,aAAA;AAnBJ;;AAuBA;EACE,6BAAA;EACA,WAAA;AApBF;;AAuBA;EACE;IACE,UAAA;EApBF;AACF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  text-decoration: none;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #f3f3f3;\n  min-height: 100vh;\n  width: 100%;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  background-color: #fff;\n  border-radius: 5px;\n  width: 80%;\n  height: 90%;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n\n  .heading {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: 1px solid #ccc;\n    padding: 1rem;\n    width: 100%;\n\n    #reloadImg {\n      width: 15px;\n      height: 15px;\n      object-fit: fill;\n      cursor: pointer;\n      transition: all 0.3s ease-in-out;\n\n      &:hover {\n        transform: rotate(360deg) scale(1.05);\n      }\n    }\n  }\n\n  #form {\n    display: flex;\n    width: 100%;\n    height: 3rem;\n    margin-top: 0.5rem;\n    border-bottom: 1px solid #ccc;\n    padding: 1rem;\n\n    input {\n      width: 95%;\n      border: none;\n\n      &:focus {\n        outline: none;\n      }\n    }\n\n    #addBtn {\n      width: 45px;\n      border: none;\n      position: relative;\n      right: -0.8rem;\n      background-color: #fff;\n      cursor: pointer;\n      transition: all 0.3s ease-in-out;\n\n      img {\n        width: 15px;\n        height: 15px;\n        object-fit: contain;\n      }\n\n      &:hover {\n        img {\n          transform: scale(1.05);\n        }\n      }\n    }\n  }\n\n  #list {\n    width: 100%;\n    gap: 1rem;\n\n    .list-group-item {\n      padding: 0 1rem;\n      margin: 1rem 0 0;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      border-bottom: 1px solid #ccc;\n\n      div {\n        height: 3rem;\n        flex: 1;\n        display: flex;\n        align-items: center;\n        gap: 1rem;\n      }\n      .bin,\n      .dots {\n        height: 15px;\n        width: 15px;\n        object-fit: contain;\n        cursor: pointer;\n      }\n\n      .bin {\n        display: none;\n      }\n\n      .dots {\n        &:active {\n          visibility:hidden;\n          + .bin {\n            display: block;\n          }\n        }\n      }\n    }\n  }\n\n  #clearBtn {\n    width: 100%;\n    height: 3rem;\n    border: none;\n  }\n\n  .error {\n    color: red;\n    font-size: 1rem;\n    font-weight: 500;\n    background-color: #c3c3;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 2rem;\n  }\n}\n\n.task-description {\n  width: 100%;\n  padding: 0.7rem;\n  border: none;\n\n  &:focus {\n    outline: none;\n  }\n}\n\n.completed {\n  text-decoration: line-through;\n  color: #ccc;\n}\n\n@media screen and (min-width: 768px) {\n  #container {\n    width: 60%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/bin.png":
/*!****************************!*\
  !*** ./src/assets/bin.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bin.png";

/***/ }),

/***/ "./src/assets/dots.png":
/*!*****************************!*\
  !*** ./src/assets/dots.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dots.png";

/***/ }),

/***/ "./src/assets/enter.png":
/*!******************************!*\
  !*** ./src/assets/enter.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "enter.png";

/***/ }),

/***/ "./src/assets/refresh.png":
/*!********************************!*\
  !*** ./src/assets/refresh.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "refresh.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=bundle22f89f0540e3b0078120.js.map