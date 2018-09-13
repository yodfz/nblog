module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ArticleListItem.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/Users/zhaoyifeng/Documents/project/nblog/ReactSSR/components/ArticleListItem.jsx";


/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var item = props.item || {};
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "detail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/detail/".concat(item.idx, "/").concat(item.title, ".html"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, item.title)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "datetime",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, item.updatedAt.split('T')[0]), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, item.category), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "viewpoint",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, item.viewCount || 0, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), "\u9605\u8BFB\u91CF")));
});

/***/ }),

/***/ "./components/Head.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/zhaoyifeng/Documents/project/nblog/ReactSSR/components/Head.jsx";


var Head = function Head(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "w100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "logoJpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "\u5199\u4EE3\u7801\u7684\u718A\u732B")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: props.index == 0 ? 'action' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "\u9996\u9875")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: props.index == 1 ? 'action' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/article",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "\u6587\u7AE0")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: props.index == 2 ? 'action' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/photo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "\u6444\u5F71")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: props.index == 3 ? 'action' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "\u5173\u4E8E\u6211")))));
};

/* harmony default export */ __webpack_exports__["a"] = (Head);

/***/ }),

/***/ "./fe.config.js":
/***/ (function(module, exports) {

module.exports = {
  // 标题
  title: '一只会写代码的熊猫 Blog',
  // 关键字
  key: '',
  // 描述信息
  description: '',
  // 是否开启评论
  isComment: true
};

/***/ }),

/***/ "./pages/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Head__ = __webpack_require__("./components/Head.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ArticleListItem__ = __webpack_require__("./components/ArticleListItem.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_index_less__ = __webpack_require__("./style/index.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__style_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__url__ = __webpack_require__("./url.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__url__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fe_config__ = __webpack_require__("./fe.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fe_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__fe_config__);

var _jsxFileName = "/Users/zhaoyifeng/Documents/project/nblog/ReactSSR/pages/index.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      var data = this.props.data.data;
      return [__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_9__fe_config___default.a.title)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Head__["a" /* default */], {
        index: "0",
        key: "head",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, " "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "vh100 w100 article clear",
        key: "body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "left70 leftList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, function () {
        var $dom = [];

        for (var i = 0, item; item = data.article[i++];) {
          $dom.push(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_ArticleListItem__["a" /* default */], {
            item: item,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            }
          }));
        }

        return $dom;
      }(), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
        href: "/article",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        className: "more",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "\u67E5\u770B\u66F4\u591A\u6587\u7AE0 +"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "rightDetail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "\u70ED\u95E8\u6587\u7AE0"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, function () {
        var $dom = [];

        for (var i = 0, item; item = data.article[i++];) {
          $dom.push(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          }, i, ".", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
            href: "/detail/1/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8Fwx.request request:fail ssl hand shake error.html",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          }, "\u5FAE\u4FE1\u5C0F\u7A0B\u5E8Fwx.request request:fail ssl hand shake error")));
        }

        return $dom;
      }()), " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        "class": "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, " \u53CB\u60C5\u94FE\u63A5 "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        "class": "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "http://www.yodfz.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "\u5199\u4EE3\u7801\u7684\u718A\u732B"), " "), " "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        "class": "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "\u626B\u7801\u8D5E\u52A9"), " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        "class": "price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/zfb.jpg",
        style: {
          width: '218px'
        },
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      })), " ")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "w100 newphoto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/imgs/newphoto.png",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }), " "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "w100 photoIndexList row wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "photoDetail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "/photoDetail / 40. html ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "img",
        style: {
          'background-image': 'url(http://www.yodfz.com/upload/20180505/1525510424000_thumb.png)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, " "), " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, " \u897F\u6E56 - \u82B1\u6E2F\u89C2\u9C7C ")), " "), " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "photoDetail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "/photoDetail/35.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "img",
        style: {
          'background-image': 'url(http://www.yodfz.com/upload/20180501/1525146656000_thumb.png)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "\u767D\u9A6C\u6E56\u52A8\u6F2B\u5C55 - \u9ED1SABER")), " "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "photoDetail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "/photoDetail / 34. html ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "img",
        style: {
          'background-image': 'url(http://www.yodfz.com/upload/20180501/1525146569000_thumb.png)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, " "), " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, " \u767D\u9A6C\u6E56\u52A8\u6F2B\u5C55 - \u82B1\u5AC1 ? "), " ")), " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "photoDetail photoDetailTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "\u6587\u827A\u8303"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "des",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "[\u98CE\u666F]\xA0\xA0\xA0\xA0[\u4EBA\u7269]\xA0\xA0\xA0\xA0[\u690D\u7269]")), " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "photoDetail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "/photoDetail/35.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "img",
        style: {
          'background-image': 'url(http://www.yodfz.com/upload/20180501/1525146656000_thumb.png)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, "\u767D\u9A6C\u6E56\u52A8\u6F2B\u5C55 - \u9ED1SABER")), " "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "photoDetail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "/photoDetail / 34. html ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "img",
        style: {
          'background-image': 'url(http://www.yodfz.com/upload/20180501/1525146569000_thumb.png)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, " "), " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, " \u767D\u9A6C\u6E56\u52A8\u6F2B\u5C55 - \u82B1\u5AC1 ? "), " ")), " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "photoDetail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "/photoDetail/35.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "img",
        style: {
          'background-image': 'url(http://www.yodfz.com/upload/20180501/1525146656000_thumb.png)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, "\u767D\u9A6C\u6E56\u52A8\u6F2B\u5C55 - \u9ED1SABER"))), " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "photoDetail photoDetailTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, "\u89C6\u89C9\u7CFB"), " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "des",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, "[\u822A\u62CD] \xA0\xA0\xA0\xA0[\u751F\u6D3B] \xA0\xA0\xA0\xA0[\u9759\u7269] ")), " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "photoDetail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "/photoDetail/34.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "img",
        style: {
          'background-image': 'url(http://www.yodfz.com/upload/20180501/1525146569000_thumb.png)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, "\u767D\u9A6C\u6E56\u52A8\u6F2B\u5C55 - \u82B1\u5AC1?"))), " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "photoDetail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "/photoDetail/35.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "img",
        style: {
          'background-image': 'url(http://www.yodfz.com/upload/20180501/1525146656000_thumb.png)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, "\u767D\u9A6C\u6E56\u52A8\u6F2B\u5C55 - \u9ED1SABER")), " "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "photoDetail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "/photoDetail / 34. html ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "img",
        style: {
          'background-image': 'url(http://www.yodfz.com/upload/20180501/1525146569000_thumb.png)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, " "), " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, " \u767D\u9A6C\u6E56\u52A8\u6F2B\u5C55 - \u82B1\u5AC1 ? "), " ")), " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "photoDetail photoDetailTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, "\u8F6C\u77AC\u5373\u901D"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "des",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, "[\u624B\u673A]\xA0\xA0\xA0\xA0[\u8377\u82B1]\xA0\xA0\xA0\xA0[\u52A8\u7269]")), " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "photoDetail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "/photoDetail/35.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "img",
        style: {
          'background-image': 'url(http://www.yodfz.com/upload/20180501/1525146656000_thumb.png)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, "\u767D\u9A6C\u6E56\u52A8\u6F2B\u5C55 - \u9ED1SABER")), " "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "photoDetail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "/photoDetail / 34. html ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "img",
        style: {
          'background-image': 'url(http://www.yodfz.com/upload/20180501/1525146569000_thumb.png)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, " "), " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, " \u767D\u9A6C\u6E56\u52A8\u6F2B\u5C55 - \u82B1\u5AC1 ? "), " ")), " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "photoDetail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "/photoDetail/33.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "img",
        style: {
          'background-image': 'url(http://www.yodfz.com/upload/20180501/1525146529000_thumb.png)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, "\u767D\u9A6C\u6E56\u52A8\u6F2B\u5C55 - \u5154\u5B50"))), " ")];
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var req, userAgent, res, data;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
                _context.next = 4;
                return __WEBPACK_IMPORTED_MODULE_7_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_8__url___default.a.default);

              case 4:
                res = _context.sent;
                _context.next = 7;
                return res.json();

              case 7:
                data = _context.sent;
                return _context.abrupt("return", {
                  userAgent: userAgent,
                  data: JSON.parse(JSON.stringify(data))
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ }),

/***/ "./style/index.less":
/***/ (function(module, exports) {



/***/ }),

/***/ "./url.js":
/***/ (function(module, exports) {

var host = 'http://localhost:7800';
module.exports = {
  default: host + '/api/v1/default'
};

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.jsx");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map