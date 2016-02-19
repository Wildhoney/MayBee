module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * @constant IS_UNDEFINED
	 * @type {Symbol}
	 */
	var IS_UNDEFINED = Symbol('undefined');

	/**
	 * @constant IS_NULL
	 * @type {Symbol}
	 */
	var IS_NULL = Symbol('null');

	/**
	 * @method throwError
	 * @param {String} message
	 * @return {void}
	 * @throws {Error}
	 */
	var throwError = function throwError(message) {
	    throw new Error('MayBee: ' + message + '.');
	};

	/**
	 * @method cursor
	 * @param {Object} cursor
	 * @param {*} defaultValue
	 * @return {Proxy}
	 */
	var wrap = function wrap(cursor, defaultValue) {

	    return new Proxy(cursor, _defineProperty({

	        /**
	         * @method get
	         * @param {Object} target
	         * @param {String} property
	         * @return {Proxy|*}
	         */
	        get: function get(target, property) {

	            switch (property) {
	                case 'valueOf':
	                    return function () {
	                        return defaultValue;
	                    };
	                case Symbol.toPrimitive:
	                    return function () {
	                        return '';
	                    };
	            }

	            var value = target[property];

	            switch (value) {
	                case undefined:
	                    return wrap(function () {}, IS_UNDEFINED);
	                case null:
	                    return wrap(function () {}, IS_NULL);
	            }

	            return target[property];
	        },

	        /**
	         * @method apply
	         * @return {Proxy}
	         */
	        apply: function apply() {
	            return wrap(function () {}, IS_UNDEFINED);
	        }

	    }, Symbol.toPrimitive, function () {
	        return '';
	    }));
	};

	/**
	 * @method guard
	 * @param {Object} cursor
	 * @return {Proxy}
	 */
	var safeguard = exports.safeguard = function safeguard(cursor) {

	    if ((typeof cursor === 'undefined' ? 'undefined' : _typeof(cursor)) !== 'object') {
	        return void throwError('Cannot safeguard non-objects');
	    }

	    return wrap(cursor);
	};

	/**
	 * @method valueOf
	 * @param {String} property
	 * @return {*}
	 */
	var valueOf = function valueOf(property) {

	    if (typeof Object(property).valueOf === 'function') {
	        return Object(property).valueOf();
	    }

	    return property;
	};

	/**
	 * @method isSupported
	 * @return {Boolean}
	 */
	var isSupported = exports.isSupported = function isSupported() {
	    return 'Proxy' in global;
	};

	/**
	 * @method isUndefined
	 * @param {*} value
	 * @return {Boolean}
	 */
	var isUndefined = exports.isUndefined = function isUndefined(value) {
	    return valueOf(value) === IS_UNDEFINED;
	};

	/**
	 * @method isNull
	 * @param {*} value
	 * @return {Boolean}
	 */
	var isNull = exports.isNull = function isNull(value) {
	    return valueOf(value) === IS_NULL;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);