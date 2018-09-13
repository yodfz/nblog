module.exports =
__NEXT_REGISTER_PAGE('/', function() {
          var comp =
      webpackJsonp([5],{

/***/ "../node_modules/isomorphic-unfetch/browser.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = window.fetch || (window.fetch = __webpack_require__("../node_modules/unfetch/dist/unfetch.es.js").default || __webpack_require__("../node_modules/unfetch/dist/unfetch.es.js"));


/***/ }),

/***/ "../node_modules/unfetch/dist/unfetch.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var index = typeof fetch=='function' ? fetch.bind() : function(url, options) {
	options = options || {};
	return new Promise( function (resolve, reject) {
		var request = new XMLHttpRequest();

		request.open(options.method || 'get', url, true);

		for (var i in options.headers) {
			request.setRequestHeader(i, options.headers[i]);
		}

		request.withCredentials = options.credentials=='include';

		request.onload = function () {
			resolve(response());
		};

		request.onerror = reject;

		request.send(options.body);

		function response() {
			var keys = [],
				all = [],
				headers = {},
				header;

			request.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (m, key, value) {
				keys.push(key = key.toLowerCase());
				all.push([key, value]);
				header = headers[key];
				headers[key] = header ? (header + "," + value) : value;
			});

			return {
				ok: (request.status/100|0) == 2,		// 200-299
				status: request.status,
				statusText: request.statusText,
				url: request.responseURL,
				clone: response,
				text: function () { return Promise.resolve(request.responseText); },
				json: function () { return Promise.resolve(request.responseText).then(JSON.parse); },
				blob: function () { return Promise.resolve(new Blob([request.response])); },
				headers: {
					keys: function () { return keys; },
					entries: function () { return all; },
					get: function (n) { return headers[n.toLowerCase()]; },
					has: function (n) { return n.toLowerCase() in headers; }
				}
			};
		}
	});
};

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=unfetch.es.js.map


/***/ }),

/***/ "./components/ArticleListItem.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
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

/***/ "./node_modules/@babel/runtime/core-js/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/@babel/runtime/node_modules/core-js/library/fn/json/stringify.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/fn/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("./node_modules/@babel/runtime/node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/define-properties/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__("./node_modules/object-keys/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/next/dist/lib/link.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/typeof.js"));

var _stringify = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/json/stringify.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _url = __webpack_require__("./node_modules/url/url.js");

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _propTypesExact = _interopRequireDefault(__webpack_require__("./node_modules/prop-types-exact/build/index.js"));

var _router = _interopRequireWildcard(__webpack_require__("./node_modules/next/dist/lib/router/index.js"));

var _utils = __webpack_require__("./node_modules/next/dist/lib/utils.js");

/* global __NEXT_DATA__ */
var Link =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Link, _Component);

  function Link(props) {
    var _ref;

    var _this;

    (0, _classCallCheck2.default)(this, Link);

    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf.default)(Link)).call.apply(_ref, [this, props].concat(rest)));
    _this.linkClicked = _this.linkClicked.bind((0, _assertThisInitialized2.default)(_this));

    _this.formatUrls(props);

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.formatUrls(nextProps);
    }
  }, {
    key: "linkClicked",
    value: function linkClicked(e) {
      var _this2 = this;

      if (e.currentTarget.nodeName === 'A' && (e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var shallow = this.props.shallow;
      var href = this.href,
          as = this.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      var replace = this.props.replace;
      var changeMethod = replace ? 'replace' : 'push'; // straight up redirect

      _router.default[changeMethod](href, as, {
        shallow: shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this2.props.onError) _this2.props.onError(err);
      });
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;
      var href = (0, _url.resolve)(pathname, this.href);

      _router.default.prefetch(href);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    } // We accept both 'href' and 'as' as objects which we can pass to `url.format`.
    // We'll handle it here.

  }, {
    key: "formatUrls",
    value: function formatUrls(props) {
      this.href = props.href && (0, _typeof2.default)(props.href) === 'object' ? (0, _url.format)(props.href) : props.href;
      this.as = props.as && (0, _typeof2.default)(props.as) === 'object' ? (0, _url.format)(props.as) : props.as;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;
      var href = this.href,
          as = this.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

      if (typeof children === 'string') {
        children = _react.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = (0, _router._rewriteUrlForNextExport)(props.href);
      }

      return _react.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

exports.default = Link;
Object.defineProperty(Link, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: (0, _propTypesExact.default)({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warnLink("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  })
});

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

var warnLink = (0, _utils.execOnce)(_utils.warn);

/***/ }),

/***/ "./node_modules/next/head.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/head.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/link.js")


/***/ }),

/***/ "./node_modules/object-keys/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es5-shim
var has = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var slice = Array.prototype.slice;
var isArgs = __webpack_require__("./node_modules/object-keys/isArguments.js");
var isEnumerable = Object.prototype.propertyIsEnumerable;
var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
var dontEnums = [
	'toString',
	'toLocaleString',
	'valueOf',
	'hasOwnProperty',
	'isPrototypeOf',
	'propertyIsEnumerable',
	'constructor'
];
var equalsConstructorPrototype = function (o) {
	var ctor = o.constructor;
	return ctor && ctor.prototype === o;
};
var excludedKeys = {
	$applicationCache: true,
	$console: true,
	$external: true,
	$frame: true,
	$frameElement: true,
	$frames: true,
	$innerHeight: true,
	$innerWidth: true,
	$outerHeight: true,
	$outerWidth: true,
	$pageXOffset: true,
	$pageYOffset: true,
	$parent: true,
	$scrollLeft: true,
	$scrollTop: true,
	$scrollX: true,
	$scrollY: true,
	$self: true,
	$webkitIndexedDB: true,
	$webkitStorageInfo: true,
	$window: true
};
var hasAutomationEqualityBug = (function () {
	/* global window */
	if (typeof window === 'undefined') { return false; }
	for (var k in window) {
		try {
			if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
				try {
					equalsConstructorPrototype(window[k]);
				} catch (e) {
					return true;
				}
			}
		} catch (e) {
			return true;
		}
	}
	return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (o) {
	/* global window */
	if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
		return equalsConstructorPrototype(o);
	}
	try {
		return equalsConstructorPrototype(o);
	} catch (e) {
		return false;
	}
};

var keysShim = function keys(object) {
	var isObject = object !== null && typeof object === 'object';
	var isFunction = toStr.call(object) === '[object Function]';
	var isArguments = isArgs(object);
	var isString = isObject && toStr.call(object) === '[object String]';
	var theKeys = [];

	if (!isObject && !isFunction && !isArguments) {
		throw new TypeError('Object.keys called on a non-object');
	}

	var skipProto = hasProtoEnumBug && isFunction;
	if (isString && object.length > 0 && !has.call(object, 0)) {
		for (var i = 0; i < object.length; ++i) {
			theKeys.push(String(i));
		}
	}

	if (isArguments && object.length > 0) {
		for (var j = 0; j < object.length; ++j) {
			theKeys.push(String(j));
		}
	} else {
		for (var name in object) {
			if (!(skipProto && name === 'prototype') && has.call(object, name)) {
				theKeys.push(String(name));
			}
		}
	}

	if (hasDontEnumBug) {
		var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

		for (var k = 0; k < dontEnums.length; ++k) {
			if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
				theKeys.push(dontEnums[k]);
			}
		}
	}
	return theKeys;
};

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			return (Object.keys(arguments) || '').length === 2;
		}(1, 2));
		if (!keysWorksWithArguments) {
			var originalKeys = Object.keys;
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				} else {
					return originalKeys(object);
				}
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "./node_modules/object.assign/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__("./node_modules/object-keys/index.js");
var bind = __webpack_require__("./node_modules/function-bind/index.js");
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__("./node_modules/has-symbols/shams.js")();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ "./node_modules/object.assign/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__("./node_modules/define-properties/index.js");

var implementation = __webpack_require__("./node_modules/object.assign/implementation.js");
var getPolyfill = __webpack_require__("./node_modules/object.assign/polyfill.js");
var shim = __webpack_require__("./node_modules/object.assign/shim.js");

var polyfill = getPolyfill();

defineProperties(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object.assign/polyfill.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/object.assign/implementation.js");

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ "./node_modules/object.assign/shim.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__("./node_modules/object.assign/polyfill.js");

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__("./node_modules/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__("./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__("./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = {};

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Head__ = __webpack_require__("./components/Head.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ArticleListItem__ = __webpack_require__("./components/ArticleListItem.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_index_less__ = __webpack_require__("./style/index.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__style_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_isomorphic_unfetch__ = __webpack_require__("../node_modules/isomorphic-unfetch/browser.js");
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


    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./url.js":
/***/ (function(module, exports) {

var host = 'http://localhost:7800';
module.exports = {
  default: host + '/api/v1/default'
};

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.jsx");


/***/ })

},[4])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=index.js.map