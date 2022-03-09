module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/app-navbar","2":"components/body-wrapper","3":"components/nuxt-logo","4":"components/widget","5":"components/widget-details","6":"pages/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("162ac6c2", content, true, context)
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("53f61d5f", content, true, context)
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(14);
module.exports = __webpack_require__(40);


/***/ }),
/* 14 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.__nuxt-error-page{\n  padding:1rem;\n  background:#f7f8fb;\n  color:#47494e;\n  text-align:center;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  flex-direction:column;\n  font-family:sans-serif;\n  font-weight:100!important;\n  -ms-text-size-adjust:100%;\n  -webkit-text-size-adjust:100%;\n  -webkit-font-smoothing:antialiased;\n  position:absolute;\n  top:0;\n  left:0;\n  right:0;\n  bottom:0\n}\n.__nuxt-error-page .error{\n  max-width:450px\n}\n.__nuxt-error-page .title{\n  font-size:1.5rem;\n  margin-top:15px;\n  color:#47494e;\n  margin-bottom:8px\n}\n.__nuxt-error-page .description{\n  color:#7f828b;\n  line-height:21px;\n  margin-bottom:10px\n}\n.__nuxt-error-page a{\n  color:#7f828b!important;\n  text-decoration:none\n}\n.__nuxt-error-page .logo{\n  position:fixed;\n  left:12px;\n  bottom:12px\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.nuxt-progress{\n  position:fixed;\n  top:0;\n  left:0;\n  right:0;\n  height:2px;\n  width:0;\n  opacity:1;\n  transition:width .1s,opacity .4s;\n  background-color:#000;\n  z-index:999999\n}\n.nuxt-progress.nuxt-progress-notransition{\n  transition:none\n}\n.nuxt-progress-failed{\n  background-color:red\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("54b08540", content, true)

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! tailwindcss v2.2.19 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n*, ::before, ::after{\n  --tw-border-opacity:1;\n  border-color:rgba(229, 231, 235, var(--tw-border-opacity));\n}\n\n.static{\n  position:static;\n}\n\n.fixed{\n  position:fixed;\n}\n\n.absolute{\n  position:absolute;\n}\n\n.sticky{\n  position:-webkit-sticky;\n  position:sticky;\n}\n\n.mt-3{\n  margin-top:0.75rem;\n}\n\n.mt-11{\n  margin-top:2.75rem;\n}\n\n.mr-8{\n  margin-right:2rem;\n}\n\n.ml-4{\n  margin-left:1rem;\n}\n\n.flex{\n  display:flex;\n}\n\n.table{\n  display:table;\n}\n\n.h-1{\n  height:0.25rem;\n}\n\n.h-5{\n  height:1.25rem;\n}\n\n.h-6{\n  height:1.5rem;\n}\n\n.w-1{\n  width:0.25rem;\n}\n\n.w-5{\n  width:1.25rem;\n}\n\n.w-6{\n  width:1.5rem;\n}\n\n.transform{\n  --tw-translate-x:0;\n  --tw-translate-y:0;\n  --tw-rotate:0;\n  --tw-skew-x:0;\n  --tw-skew-y:0;\n  --tw-scale-x:1;\n  --tw-scale-y:1;\n  transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n@-webkit-keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@-webkit-keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n.cursor-pointer{\n  cursor:pointer;\n}\n\n.flex-col{\n  flex-direction:column;\n}\n\n.flex-col-reverse{\n  flex-direction:column-reverse;\n}\n\n.flex-wrap{\n  flex-wrap:wrap;\n}\n\n.items-center{\n  align-items:center;\n}\n\n.justify-center{\n  justify-content:center;\n}\n\n.justify-between{\n  justify-content:space-between;\n}\n\n.rounded{\n  border-radius:0.25rem;\n}\n\n.rounded-3xl{\n  border-radius:1.5rem;\n}\n\n.border{\n  border-width:1px;\n}\n\n.p-0{\n  padding:0px;\n}\n\n.px-4{\n  padding-left:1rem;\n  padding-right:1rem;\n}\n\n.px-8{\n  padding-left:2rem;\n  padding-right:2rem;\n}\n\n.py-0{\n  padding-top:0px;\n  padding-bottom:0px;\n}\n\n.py-4{\n  padding-top:1rem;\n  padding-bottom:1rem;\n}\n\n.pr-4{\n  padding-right:1rem;\n}\n\n.font-bold{\n  font-weight:700;\n}\n\n.capitalize{\n  text-transform:capitalize;\n}\n\n.opacity-0{\n  opacity:0;\n}\n\n*, ::before, ::after{\n  --tw-shadow:0 0 #0000;\n}\n\n*, ::before, ::after{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n@media (min-width: 640px){\n}\n\n@media (min-width: 768px){\n}\n\n@media (min-width: 1024px){\n}\n\n@media (min-width: 1280px){\n}\n\n@media (min-width: 1536px){\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("b0ae0bbe", content, true)

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(23);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(24);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(25);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(26);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(27);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(28);
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(29);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n\nbody,html{\n  height:100%;\n  background-color:#e5e5e5\n}\n\n@font-face{\n  font-family:\"GT America\";\n\n  src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"otf\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"otf\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"otf\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"otf\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"otf\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"otf\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"otf\")\n}\n\n@font-face{\n  font-family:\"Roboto\",sans-serif;\n\n  src:url(https://fonts.googleapis.com/css2?display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700)\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/GT-America-Standard-Ultra-Light-Trial.1eca8d7.otf";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/GT-America-Standard-Light-Trial.f6af322.otf";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/GT-America-Standard-Thin-Trial.c58bca4.otf";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/GT-America-Standard-Regular-Trial.4874b2c.otf";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/GT-America-Standard-Medium-Trial.7962fb2.otf";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/GT-America-Standard-Bold-Trial.7c5cc00.otf";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/GT-America-Standard-Black-Trial.0a7cbe5.otf";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("83369b24", content, true)

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("2351b520", content, true)

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(34);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(35);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(36);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(37);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(38);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(39);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___, { hash: "?#iefix&v=4.7.0" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___, { hash: "#fontawesomeregular" });
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n\n/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n\n@font-face{\n  font-family:\"FontAwesome\";\n\n  src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n\n  src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"svg\");\n\n  font-weight:400;\n\n  font-style:normal\n}\n\n.fa{\n  display:inline-block;\n  font:normal normal normal 14px/1 FontAwesome;\n  font-size:inherit;\n  text-rendering:auto;\n  -webkit-font-smoothing:antialiased;\n  -moz-osx-font-smoothing:grayscale\n}\n\n.fa-lg{\n  font-size:1.33333333em;\n  line-height:.75em;\n  vertical-align:-15%\n}\n\n.fa-2x{\n  font-size:2em\n}\n\n.fa-3x{\n  font-size:3em\n}\n\n.fa-4x{\n  font-size:4em\n}\n\n.fa-5x{\n  font-size:5em\n}\n\n.fa-fw{\n  width:1.28571429em;\n  text-align:center\n}\n\n.fa-ul{\n  padding-left:0;\n  margin-left:2.14285714em;\n  list-style-type:none\n}\n\n.fa-ul>li{\n  position:relative\n}\n\n.fa-li{\n  position:absolute;\n  left:-2.14285714em;\n  width:2.14285714em;\n  top:.14285714em;\n  text-align:center\n}\n\n.fa-li.fa-lg{\n  left:-1.85714286em\n}\n\n.fa-border{\n  padding:.2em .25em .15em;\n  border:.08em solid #eee;\n  border-radius:.1em\n}\n\n.fa-pull-left{\n  float:left\n}\n\n.fa-pull-right{\n  float:right\n}\n\n.fa.fa-pull-left{\n  margin-right:.3em\n}\n\n.fa.fa-pull-right{\n  margin-left:.3em\n}\n\n.pull-right{\n  float:right\n}\n\n.pull-left{\n  float:left\n}\n\n.fa.pull-left{\n  margin-right:.3em\n}\n\n.fa.pull-right{\n  margin-left:.3em\n}\n\n.fa-spin{\n  -webkit-animation:fa-spin 2s linear infinite;\n  animation:fa-spin 2s linear infinite\n}\n\n.fa-pulse{\n  -webkit-animation:fa-spin 1s steps(8) infinite;\n  animation:fa-spin 1s steps(8) infinite\n}\n\n@-webkit-keyframes fa-spin{\n  0%{\n    transform:rotate(0deg)\n  }\n\n  to{\n    transform:rotate(359deg)\n  }\n}\n\n@keyframes fa-spin{\n  0%{\n    transform:rotate(0deg)\n  }\n\n  to{\n    transform:rotate(359deg)\n  }\n}\n\n.fa-rotate-90{\n  -ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  transform:rotate(90deg)\n}\n\n.fa-rotate-180{\n  -ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  transform:rotate(180deg)\n}\n\n.fa-rotate-270{\n  -ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  transform:rotate(270deg)\n}\n\n.fa-flip-horizontal{\n  -ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  transform:scaleX(-1)\n}\n\n.fa-flip-vertical{\n  -ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  transform:scaleY(-1)\n}\n\n:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{\n  filter:none\n}\n\n.fa-stack{\n  position:relative;\n  display:inline-block;\n  width:2em;\n  height:2em;\n  line-height:2em;\n  vertical-align:middle\n}\n\n.fa-stack-1x,.fa-stack-2x{\n  position:absolute;\n  left:0;\n  width:100%;\n  text-align:center\n}\n\n.fa-stack-1x{\n  line-height:inherit\n}\n\n.fa-stack-2x{\n  font-size:2em\n}\n\n.fa-inverse{\n  color:#fff\n}\n\n.fa-glass:before{\n  content:\"\\f000\"\n}\n\n.fa-music:before{\n  content:\"\\f001\"\n}\n\n.fa-search:before{\n  content:\"\\f002\"\n}\n\n.fa-envelope-o:before{\n  content:\"\\f003\"\n}\n\n.fa-heart:before{\n  content:\"\\f004\"\n}\n\n.fa-star:before{\n  content:\"\\f005\"\n}\n\n.fa-star-o:before{\n  content:\"\\f006\"\n}\n\n.fa-user:before{\n  content:\"\\f007\"\n}\n\n.fa-film:before{\n  content:\"\\f008\"\n}\n\n.fa-th-large:before{\n  content:\"\\f009\"\n}\n\n.fa-th:before{\n  content:\"\\f00a\"\n}\n\n.fa-th-list:before{\n  content:\"\\f00b\"\n}\n\n.fa-check:before{\n  content:\"\\f00c\"\n}\n\n.fa-close:before,.fa-remove:before,.fa-times:before{\n  content:\"\\f00d\"\n}\n\n.fa-search-plus:before{\n  content:\"\\f00e\"\n}\n\n.fa-search-minus:before{\n  content:\"\\f010\"\n}\n\n.fa-power-off:before{\n  content:\"\\f011\"\n}\n\n.fa-signal:before{\n  content:\"\\f012\"\n}\n\n.fa-cog:before,.fa-gear:before{\n  content:\"\\f013\"\n}\n\n.fa-trash-o:before{\n  content:\"\\f014\"\n}\n\n.fa-home:before{\n  content:\"\\f015\"\n}\n\n.fa-file-o:before{\n  content:\"\\f016\"\n}\n\n.fa-clock-o:before{\n  content:\"\\f017\"\n}\n\n.fa-road:before{\n  content:\"\\f018\"\n}\n\n.fa-download:before{\n  content:\"\\f019\"\n}\n\n.fa-arrow-circle-o-down:before{\n  content:\"\\f01a\"\n}\n\n.fa-arrow-circle-o-up:before{\n  content:\"\\f01b\"\n}\n\n.fa-inbox:before{\n  content:\"\\f01c\"\n}\n\n.fa-play-circle-o:before{\n  content:\"\\f01d\"\n}\n\n.fa-repeat:before,.fa-rotate-right:before{\n  content:\"\\f01e\"\n}\n\n.fa-refresh:before{\n  content:\"\\f021\"\n}\n\n.fa-list-alt:before{\n  content:\"\\f022\"\n}\n\n.fa-lock:before{\n  content:\"\\f023\"\n}\n\n.fa-flag:before{\n  content:\"\\f024\"\n}\n\n.fa-headphones:before{\n  content:\"\\f025\"\n}\n\n.fa-volume-off:before{\n  content:\"\\f026\"\n}\n\n.fa-volume-down:before{\n  content:\"\\f027\"\n}\n\n.fa-volume-up:before{\n  content:\"\\f028\"\n}\n\n.fa-qrcode:before{\n  content:\"\\f029\"\n}\n\n.fa-barcode:before{\n  content:\"\\f02a\"\n}\n\n.fa-tag:before{\n  content:\"\\f02b\"\n}\n\n.fa-tags:before{\n  content:\"\\f02c\"\n}\n\n.fa-book:before{\n  content:\"\\f02d\"\n}\n\n.fa-bookmark:before{\n  content:\"\\f02e\"\n}\n\n.fa-print:before{\n  content:\"\\f02f\"\n}\n\n.fa-camera:before{\n  content:\"\\f030\"\n}\n\n.fa-font:before{\n  content:\"\\f031\"\n}\n\n.fa-bold:before{\n  content:\"\\f032\"\n}\n\n.fa-italic:before{\n  content:\"\\f033\"\n}\n\n.fa-text-height:before{\n  content:\"\\f034\"\n}\n\n.fa-text-width:before{\n  content:\"\\f035\"\n}\n\n.fa-align-left:before{\n  content:\"\\f036\"\n}\n\n.fa-align-center:before{\n  content:\"\\f037\"\n}\n\n.fa-align-right:before{\n  content:\"\\f038\"\n}\n\n.fa-align-justify:before{\n  content:\"\\f039\"\n}\n\n.fa-list:before{\n  content:\"\\f03a\"\n}\n\n.fa-dedent:before,.fa-outdent:before{\n  content:\"\\f03b\"\n}\n\n.fa-indent:before{\n  content:\"\\f03c\"\n}\n\n.fa-video-camera:before{\n  content:\"\\f03d\"\n}\n\n.fa-image:before,.fa-photo:before,.fa-picture-o:before{\n  content:\"\\f03e\"\n}\n\n.fa-pencil:before{\n  content:\"\\f040\"\n}\n\n.fa-map-marker:before{\n  content:\"\\f041\"\n}\n\n.fa-adjust:before{\n  content:\"\\f042\"\n}\n\n.fa-tint:before{\n  content:\"\\f043\"\n}\n\n.fa-edit:before,.fa-pencil-square-o:before{\n  content:\"\\f044\"\n}\n\n.fa-share-square-o:before{\n  content:\"\\f045\"\n}\n\n.fa-check-square-o:before{\n  content:\"\\f046\"\n}\n\n.fa-arrows:before{\n  content:\"\\f047\"\n}\n\n.fa-step-backward:before{\n  content:\"\\f048\"\n}\n\n.fa-fast-backward:before{\n  content:\"\\f049\"\n}\n\n.fa-backward:before{\n  content:\"\\f04a\"\n}\n\n.fa-play:before{\n  content:\"\\f04b\"\n}\n\n.fa-pause:before{\n  content:\"\\f04c\"\n}\n\n.fa-stop:before{\n  content:\"\\f04d\"\n}\n\n.fa-forward:before{\n  content:\"\\f04e\"\n}\n\n.fa-fast-forward:before{\n  content:\"\\f050\"\n}\n\n.fa-step-forward:before{\n  content:\"\\f051\"\n}\n\n.fa-eject:before{\n  content:\"\\f052\"\n}\n\n.fa-chevron-left:before{\n  content:\"\\f053\"\n}\n\n.fa-chevron-right:before{\n  content:\"\\f054\"\n}\n\n.fa-plus-circle:before{\n  content:\"\\f055\"\n}\n\n.fa-minus-circle:before{\n  content:\"\\f056\"\n}\n\n.fa-times-circle:before{\n  content:\"\\f057\"\n}\n\n.fa-check-circle:before{\n  content:\"\\f058\"\n}\n\n.fa-question-circle:before{\n  content:\"\\f059\"\n}\n\n.fa-info-circle:before{\n  content:\"\\f05a\"\n}\n\n.fa-crosshairs:before{\n  content:\"\\f05b\"\n}\n\n.fa-times-circle-o:before{\n  content:\"\\f05c\"\n}\n\n.fa-check-circle-o:before{\n  content:\"\\f05d\"\n}\n\n.fa-ban:before{\n  content:\"\\f05e\"\n}\n\n.fa-arrow-left:before{\n  content:\"\\f060\"\n}\n\n.fa-arrow-right:before{\n  content:\"\\f061\"\n}\n\n.fa-arrow-up:before{\n  content:\"\\f062\"\n}\n\n.fa-arrow-down:before{\n  content:\"\\f063\"\n}\n\n.fa-mail-forward:before,.fa-share:before{\n  content:\"\\f064\"\n}\n\n.fa-expand:before{\n  content:\"\\f065\"\n}\n\n.fa-compress:before{\n  content:\"\\f066\"\n}\n\n.fa-plus:before{\n  content:\"\\f067\"\n}\n\n.fa-minus:before{\n  content:\"\\f068\"\n}\n\n.fa-asterisk:before{\n  content:\"\\f069\"\n}\n\n.fa-exclamation-circle:before{\n  content:\"\\f06a\"\n}\n\n.fa-gift:before{\n  content:\"\\f06b\"\n}\n\n.fa-leaf:before{\n  content:\"\\f06c\"\n}\n\n.fa-fire:before{\n  content:\"\\f06d\"\n}\n\n.fa-eye:before{\n  content:\"\\f06e\"\n}\n\n.fa-eye-slash:before{\n  content:\"\\f070\"\n}\n\n.fa-exclamation-triangle:before,.fa-warning:before{\n  content:\"\\f071\"\n}\n\n.fa-plane:before{\n  content:\"\\f072\"\n}\n\n.fa-calendar:before{\n  content:\"\\f073\"\n}\n\n.fa-random:before{\n  content:\"\\f074\"\n}\n\n.fa-comment:before{\n  content:\"\\f075\"\n}\n\n.fa-magnet:before{\n  content:\"\\f076\"\n}\n\n.fa-chevron-up:before{\n  content:\"\\f077\"\n}\n\n.fa-chevron-down:before{\n  content:\"\\f078\"\n}\n\n.fa-retweet:before{\n  content:\"\\f079\"\n}\n\n.fa-shopping-cart:before{\n  content:\"\\f07a\"\n}\n\n.fa-folder:before{\n  content:\"\\f07b\"\n}\n\n.fa-folder-open:before{\n  content:\"\\f07c\"\n}\n\n.fa-arrows-v:before{\n  content:\"\\f07d\"\n}\n\n.fa-arrows-h:before{\n  content:\"\\f07e\"\n}\n\n.fa-bar-chart-o:before,.fa-bar-chart:before{\n  content:\"\\f080\"\n}\n\n.fa-twitter-square:before{\n  content:\"\\f081\"\n}\n\n.fa-facebook-square:before{\n  content:\"\\f082\"\n}\n\n.fa-camera-retro:before{\n  content:\"\\f083\"\n}\n\n.fa-key:before{\n  content:\"\\f084\"\n}\n\n.fa-cogs:before,.fa-gears:before{\n  content:\"\\f085\"\n}\n\n.fa-comments:before{\n  content:\"\\f086\"\n}\n\n.fa-thumbs-o-up:before{\n  content:\"\\f087\"\n}\n\n.fa-thumbs-o-down:before{\n  content:\"\\f088\"\n}\n\n.fa-star-half:before{\n  content:\"\\f089\"\n}\n\n.fa-heart-o:before{\n  content:\"\\f08a\"\n}\n\n.fa-sign-out:before{\n  content:\"\\f08b\"\n}\n\n.fa-linkedin-square:before{\n  content:\"\\f08c\"\n}\n\n.fa-thumb-tack:before{\n  content:\"\\f08d\"\n}\n\n.fa-external-link:before{\n  content:\"\\f08e\"\n}\n\n.fa-sign-in:before{\n  content:\"\\f090\"\n}\n\n.fa-trophy:before{\n  content:\"\\f091\"\n}\n\n.fa-github-square:before{\n  content:\"\\f092\"\n}\n\n.fa-upload:before{\n  content:\"\\f093\"\n}\n\n.fa-lemon-o:before{\n  content:\"\\f094\"\n}\n\n.fa-phone:before{\n  content:\"\\f095\"\n}\n\n.fa-square-o:before{\n  content:\"\\f096\"\n}\n\n.fa-bookmark-o:before{\n  content:\"\\f097\"\n}\n\n.fa-phone-square:before{\n  content:\"\\f098\"\n}\n\n.fa-twitter:before{\n  content:\"\\f099\"\n}\n\n.fa-facebook-f:before,.fa-facebook:before{\n  content:\"\\f09a\"\n}\n\n.fa-github:before{\n  content:\"\\f09b\"\n}\n\n.fa-unlock:before{\n  content:\"\\f09c\"\n}\n\n.fa-credit-card:before{\n  content:\"\\f09d\"\n}\n\n.fa-feed:before,.fa-rss:before{\n  content:\"\\f09e\"\n}\n\n.fa-hdd-o:before{\n  content:\"\\f0a0\"\n}\n\n.fa-bullhorn:before{\n  content:\"\\f0a1\"\n}\n\n.fa-bell:before{\n  content:\"\\f0f3\"\n}\n\n.fa-certificate:before{\n  content:\"\\f0a3\"\n}\n\n.fa-hand-o-right:before{\n  content:\"\\f0a4\"\n}\n\n.fa-hand-o-left:before{\n  content:\"\\f0a5\"\n}\n\n.fa-hand-o-up:before{\n  content:\"\\f0a6\"\n}\n\n.fa-hand-o-down:before{\n  content:\"\\f0a7\"\n}\n\n.fa-arrow-circle-left:before{\n  content:\"\\f0a8\"\n}\n\n.fa-arrow-circle-right:before{\n  content:\"\\f0a9\"\n}\n\n.fa-arrow-circle-up:before{\n  content:\"\\f0aa\"\n}\n\n.fa-arrow-circle-down:before{\n  content:\"\\f0ab\"\n}\n\n.fa-globe:before{\n  content:\"\\f0ac\"\n}\n\n.fa-wrench:before{\n  content:\"\\f0ad\"\n}\n\n.fa-tasks:before{\n  content:\"\\f0ae\"\n}\n\n.fa-filter:before{\n  content:\"\\f0b0\"\n}\n\n.fa-briefcase:before{\n  content:\"\\f0b1\"\n}\n\n.fa-arrows-alt:before{\n  content:\"\\f0b2\"\n}\n\n.fa-group:before,.fa-users:before{\n  content:\"\\f0c0\"\n}\n\n.fa-chain:before,.fa-link:before{\n  content:\"\\f0c1\"\n}\n\n.fa-cloud:before{\n  content:\"\\f0c2\"\n}\n\n.fa-flask:before{\n  content:\"\\f0c3\"\n}\n\n.fa-cut:before,.fa-scissors:before{\n  content:\"\\f0c4\"\n}\n\n.fa-copy:before,.fa-files-o:before{\n  content:\"\\f0c5\"\n}\n\n.fa-paperclip:before{\n  content:\"\\f0c6\"\n}\n\n.fa-floppy-o:before,.fa-save:before{\n  content:\"\\f0c7\"\n}\n\n.fa-square:before{\n  content:\"\\f0c8\"\n}\n\n.fa-bars:before,.fa-navicon:before,.fa-reorder:before{\n  content:\"\\f0c9\"\n}\n\n.fa-list-ul:before{\n  content:\"\\f0ca\"\n}\n\n.fa-list-ol:before{\n  content:\"\\f0cb\"\n}\n\n.fa-strikethrough:before{\n  content:\"\\f0cc\"\n}\n\n.fa-underline:before{\n  content:\"\\f0cd\"\n}\n\n.fa-table:before{\n  content:\"\\f0ce\"\n}\n\n.fa-magic:before{\n  content:\"\\f0d0\"\n}\n\n.fa-truck:before{\n  content:\"\\f0d1\"\n}\n\n.fa-pinterest:before{\n  content:\"\\f0d2\"\n}\n\n.fa-pinterest-square:before{\n  content:\"\\f0d3\"\n}\n\n.fa-google-plus-square:before{\n  content:\"\\f0d4\"\n}\n\n.fa-google-plus:before{\n  content:\"\\f0d5\"\n}\n\n.fa-money:before{\n  content:\"\\f0d6\"\n}\n\n.fa-caret-down:before{\n  content:\"\\f0d7\"\n}\n\n.fa-caret-up:before{\n  content:\"\\f0d8\"\n}\n\n.fa-caret-left:before{\n  content:\"\\f0d9\"\n}\n\n.fa-caret-right:before{\n  content:\"\\f0da\"\n}\n\n.fa-columns:before{\n  content:\"\\f0db\"\n}\n\n.fa-sort:before,.fa-unsorted:before{\n  content:\"\\f0dc\"\n}\n\n.fa-sort-desc:before,.fa-sort-down:before{\n  content:\"\\f0dd\"\n}\n\n.fa-sort-asc:before,.fa-sort-up:before{\n  content:\"\\f0de\"\n}\n\n.fa-envelope:before{\n  content:\"\\f0e0\"\n}\n\n.fa-linkedin:before{\n  content:\"\\f0e1\"\n}\n\n.fa-rotate-left:before,.fa-undo:before{\n  content:\"\\f0e2\"\n}\n\n.fa-gavel:before,.fa-legal:before{\n  content:\"\\f0e3\"\n}\n\n.fa-dashboard:before,.fa-tachometer:before{\n  content:\"\\f0e4\"\n}\n\n.fa-comment-o:before{\n  content:\"\\f0e5\"\n}\n\n.fa-comments-o:before{\n  content:\"\\f0e6\"\n}\n\n.fa-bolt:before,.fa-flash:before{\n  content:\"\\f0e7\"\n}\n\n.fa-sitemap:before{\n  content:\"\\f0e8\"\n}\n\n.fa-umbrella:before{\n  content:\"\\f0e9\"\n}\n\n.fa-clipboard:before,.fa-paste:before{\n  content:\"\\f0ea\"\n}\n\n.fa-lightbulb-o:before{\n  content:\"\\f0eb\"\n}\n\n.fa-exchange:before{\n  content:\"\\f0ec\"\n}\n\n.fa-cloud-download:before{\n  content:\"\\f0ed\"\n}\n\n.fa-cloud-upload:before{\n  content:\"\\f0ee\"\n}\n\n.fa-user-md:before{\n  content:\"\\f0f0\"\n}\n\n.fa-stethoscope:before{\n  content:\"\\f0f1\"\n}\n\n.fa-suitcase:before{\n  content:\"\\f0f2\"\n}\n\n.fa-bell-o:before{\n  content:\"\\f0a2\"\n}\n\n.fa-coffee:before{\n  content:\"\\f0f4\"\n}\n\n.fa-cutlery:before{\n  content:\"\\f0f5\"\n}\n\n.fa-file-text-o:before{\n  content:\"\\f0f6\"\n}\n\n.fa-building-o:before{\n  content:\"\\f0f7\"\n}\n\n.fa-hospital-o:before{\n  content:\"\\f0f8\"\n}\n\n.fa-ambulance:before{\n  content:\"\\f0f9\"\n}\n\n.fa-medkit:before{\n  content:\"\\f0fa\"\n}\n\n.fa-fighter-jet:before{\n  content:\"\\f0fb\"\n}\n\n.fa-beer:before{\n  content:\"\\f0fc\"\n}\n\n.fa-h-square:before{\n  content:\"\\f0fd\"\n}\n\n.fa-plus-square:before{\n  content:\"\\f0fe\"\n}\n\n.fa-angle-double-left:before{\n  content:\"\\f100\"\n}\n\n.fa-angle-double-right:before{\n  content:\"\\f101\"\n}\n\n.fa-angle-double-up:before{\n  content:\"\\f102\"\n}\n\n.fa-angle-double-down:before{\n  content:\"\\f103\"\n}\n\n.fa-angle-left:before{\n  content:\"\\f104\"\n}\n\n.fa-angle-right:before{\n  content:\"\\f105\"\n}\n\n.fa-angle-up:before{\n  content:\"\\f106\"\n}\n\n.fa-angle-down:before{\n  content:\"\\f107\"\n}\n\n.fa-desktop:before{\n  content:\"\\f108\"\n}\n\n.fa-laptop:before{\n  content:\"\\f109\"\n}\n\n.fa-tablet:before{\n  content:\"\\f10a\"\n}\n\n.fa-mobile-phone:before,.fa-mobile:before{\n  content:\"\\f10b\"\n}\n\n.fa-circle-o:before{\n  content:\"\\f10c\"\n}\n\n.fa-quote-left:before{\n  content:\"\\f10d\"\n}\n\n.fa-quote-right:before{\n  content:\"\\f10e\"\n}\n\n.fa-spinner:before{\n  content:\"\\f110\"\n}\n\n.fa-circle:before{\n  content:\"\\f111\"\n}\n\n.fa-mail-reply:before,.fa-reply:before{\n  content:\"\\f112\"\n}\n\n.fa-github-alt:before{\n  content:\"\\f113\"\n}\n\n.fa-folder-o:before{\n  content:\"\\f114\"\n}\n\n.fa-folder-open-o:before{\n  content:\"\\f115\"\n}\n\n.fa-smile-o:before{\n  content:\"\\f118\"\n}\n\n.fa-frown-o:before{\n  content:\"\\f119\"\n}\n\n.fa-meh-o:before{\n  content:\"\\f11a\"\n}\n\n.fa-gamepad:before{\n  content:\"\\f11b\"\n}\n\n.fa-keyboard-o:before{\n  content:\"\\f11c\"\n}\n\n.fa-flag-o:before{\n  content:\"\\f11d\"\n}\n\n.fa-flag-checkered:before{\n  content:\"\\f11e\"\n}\n\n.fa-terminal:before{\n  content:\"\\f120\"\n}\n\n.fa-code:before{\n  content:\"\\f121\"\n}\n\n.fa-mail-reply-all:before,.fa-reply-all:before{\n  content:\"\\f122\"\n}\n\n.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{\n  content:\"\\f123\"\n}\n\n.fa-location-arrow:before{\n  content:\"\\f124\"\n}\n\n.fa-crop:before{\n  content:\"\\f125\"\n}\n\n.fa-code-fork:before{\n  content:\"\\f126\"\n}\n\n.fa-chain-broken:before,.fa-unlink:before{\n  content:\"\\f127\"\n}\n\n.fa-question:before{\n  content:\"\\f128\"\n}\n\n.fa-info:before{\n  content:\"\\f129\"\n}\n\n.fa-exclamation:before{\n  content:\"\\f12a\"\n}\n\n.fa-superscript:before{\n  content:\"\\f12b\"\n}\n\n.fa-subscript:before{\n  content:\"\\f12c\"\n}\n\n.fa-eraser:before{\n  content:\"\\f12d\"\n}\n\n.fa-puzzle-piece:before{\n  content:\"\\f12e\"\n}\n\n.fa-microphone:before{\n  content:\"\\f130\"\n}\n\n.fa-microphone-slash:before{\n  content:\"\\f131\"\n}\n\n.fa-shield:before{\n  content:\"\\f132\"\n}\n\n.fa-calendar-o:before{\n  content:\"\\f133\"\n}\n\n.fa-fire-extinguisher:before{\n  content:\"\\f134\"\n}\n\n.fa-rocket:before{\n  content:\"\\f135\"\n}\n\n.fa-maxcdn:before{\n  content:\"\\f136\"\n}\n\n.fa-chevron-circle-left:before{\n  content:\"\\f137\"\n}\n\n.fa-chevron-circle-right:before{\n  content:\"\\f138\"\n}\n\n.fa-chevron-circle-up:before{\n  content:\"\\f139\"\n}\n\n.fa-chevron-circle-down:before{\n  content:\"\\f13a\"\n}\n\n.fa-html5:before{\n  content:\"\\f13b\"\n}\n\n.fa-css3:before{\n  content:\"\\f13c\"\n}\n\n.fa-anchor:before{\n  content:\"\\f13d\"\n}\n\n.fa-unlock-alt:before{\n  content:\"\\f13e\"\n}\n\n.fa-bullseye:before{\n  content:\"\\f140\"\n}\n\n.fa-ellipsis-h:before{\n  content:\"\\f141\"\n}\n\n.fa-ellipsis-v:before{\n  content:\"\\f142\"\n}\n\n.fa-rss-square:before{\n  content:\"\\f143\"\n}\n\n.fa-play-circle:before{\n  content:\"\\f144\"\n}\n\n.fa-ticket:before{\n  content:\"\\f145\"\n}\n\n.fa-minus-square:before{\n  content:\"\\f146\"\n}\n\n.fa-minus-square-o:before{\n  content:\"\\f147\"\n}\n\n.fa-level-up:before{\n  content:\"\\f148\"\n}\n\n.fa-level-down:before{\n  content:\"\\f149\"\n}\n\n.fa-check-square:before{\n  content:\"\\f14a\"\n}\n\n.fa-pencil-square:before{\n  content:\"\\f14b\"\n}\n\n.fa-external-link-square:before{\n  content:\"\\f14c\"\n}\n\n.fa-share-square:before{\n  content:\"\\f14d\"\n}\n\n.fa-compass:before{\n  content:\"\\f14e\"\n}\n\n.fa-caret-square-o-down:before,.fa-toggle-down:before{\n  content:\"\\f150\"\n}\n\n.fa-caret-square-o-up:before,.fa-toggle-up:before{\n  content:\"\\f151\"\n}\n\n.fa-caret-square-o-right:before,.fa-toggle-right:before{\n  content:\"\\f152\"\n}\n\n.fa-eur:before,.fa-euro:before{\n  content:\"\\f153\"\n}\n\n.fa-gbp:before{\n  content:\"\\f154\"\n}\n\n.fa-dollar:before,.fa-usd:before{\n  content:\"\\f155\"\n}\n\n.fa-inr:before,.fa-rupee:before{\n  content:\"\\f156\"\n}\n\n.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{\n  content:\"\\f157\"\n}\n\n.fa-rouble:before,.fa-rub:before,.fa-ruble:before{\n  content:\"\\f158\"\n}\n\n.fa-krw:before,.fa-won:before{\n  content:\"\\f159\"\n}\n\n.fa-bitcoin:before,.fa-btc:before{\n  content:\"\\f15a\"\n}\n\n.fa-file:before{\n  content:\"\\f15b\"\n}\n\n.fa-file-text:before{\n  content:\"\\f15c\"\n}\n\n.fa-sort-alpha-asc:before{\n  content:\"\\f15d\"\n}\n\n.fa-sort-alpha-desc:before{\n  content:\"\\f15e\"\n}\n\n.fa-sort-amount-asc:before{\n  content:\"\\f160\"\n}\n\n.fa-sort-amount-desc:before{\n  content:\"\\f161\"\n}\n\n.fa-sort-numeric-asc:before{\n  content:\"\\f162\"\n}\n\n.fa-sort-numeric-desc:before{\n  content:\"\\f163\"\n}\n\n.fa-thumbs-up:before{\n  content:\"\\f164\"\n}\n\n.fa-thumbs-down:before{\n  content:\"\\f165\"\n}\n\n.fa-youtube-square:before{\n  content:\"\\f166\"\n}\n\n.fa-youtube:before{\n  content:\"\\f167\"\n}\n\n.fa-xing:before{\n  content:\"\\f168\"\n}\n\n.fa-xing-square:before{\n  content:\"\\f169\"\n}\n\n.fa-youtube-play:before{\n  content:\"\\f16a\"\n}\n\n.fa-dropbox:before{\n  content:\"\\f16b\"\n}\n\n.fa-stack-overflow:before{\n  content:\"\\f16c\"\n}\n\n.fa-instagram:before{\n  content:\"\\f16d\"\n}\n\n.fa-flickr:before{\n  content:\"\\f16e\"\n}\n\n.fa-adn:before{\n  content:\"\\f170\"\n}\n\n.fa-bitbucket:before{\n  content:\"\\f171\"\n}\n\n.fa-bitbucket-square:before{\n  content:\"\\f172\"\n}\n\n.fa-tumblr:before{\n  content:\"\\f173\"\n}\n\n.fa-tumblr-square:before{\n  content:\"\\f174\"\n}\n\n.fa-long-arrow-down:before{\n  content:\"\\f175\"\n}\n\n.fa-long-arrow-up:before{\n  content:\"\\f176\"\n}\n\n.fa-long-arrow-left:before{\n  content:\"\\f177\"\n}\n\n.fa-long-arrow-right:before{\n  content:\"\\f178\"\n}\n\n.fa-apple:before{\n  content:\"\\f179\"\n}\n\n.fa-windows:before{\n  content:\"\\f17a\"\n}\n\n.fa-android:before{\n  content:\"\\f17b\"\n}\n\n.fa-linux:before{\n  content:\"\\f17c\"\n}\n\n.fa-dribbble:before{\n  content:\"\\f17d\"\n}\n\n.fa-skype:before{\n  content:\"\\f17e\"\n}\n\n.fa-foursquare:before{\n  content:\"\\f180\"\n}\n\n.fa-trello:before{\n  content:\"\\f181\"\n}\n\n.fa-female:before{\n  content:\"\\f182\"\n}\n\n.fa-male:before{\n  content:\"\\f183\"\n}\n\n.fa-gittip:before,.fa-gratipay:before{\n  content:\"\\f184\"\n}\n\n.fa-sun-o:before{\n  content:\"\\f185\"\n}\n\n.fa-moon-o:before{\n  content:\"\\f186\"\n}\n\n.fa-archive:before{\n  content:\"\\f187\"\n}\n\n.fa-bug:before{\n  content:\"\\f188\"\n}\n\n.fa-vk:before{\n  content:\"\\f189\"\n}\n\n.fa-weibo:before{\n  content:\"\\f18a\"\n}\n\n.fa-renren:before{\n  content:\"\\f18b\"\n}\n\n.fa-pagelines:before{\n  content:\"\\f18c\"\n}\n\n.fa-stack-exchange:before{\n  content:\"\\f18d\"\n}\n\n.fa-arrow-circle-o-right:before{\n  content:\"\\f18e\"\n}\n\n.fa-arrow-circle-o-left:before{\n  content:\"\\f190\"\n}\n\n.fa-caret-square-o-left:before,.fa-toggle-left:before{\n  content:\"\\f191\"\n}\n\n.fa-dot-circle-o:before{\n  content:\"\\f192\"\n}\n\n.fa-wheelchair:before{\n  content:\"\\f193\"\n}\n\n.fa-vimeo-square:before{\n  content:\"\\f194\"\n}\n\n.fa-try:before,.fa-turkish-lira:before{\n  content:\"\\f195\"\n}\n\n.fa-plus-square-o:before{\n  content:\"\\f196\"\n}\n\n.fa-space-shuttle:before{\n  content:\"\\f197\"\n}\n\n.fa-slack:before{\n  content:\"\\f198\"\n}\n\n.fa-envelope-square:before{\n  content:\"\\f199\"\n}\n\n.fa-wordpress:before{\n  content:\"\\f19a\"\n}\n\n.fa-openid:before{\n  content:\"\\f19b\"\n}\n\n.fa-bank:before,.fa-institution:before,.fa-university:before{\n  content:\"\\f19c\"\n}\n\n.fa-graduation-cap:before,.fa-mortar-board:before{\n  content:\"\\f19d\"\n}\n\n.fa-yahoo:before{\n  content:\"\\f19e\"\n}\n\n.fa-google:before{\n  content:\"\\f1a0\"\n}\n\n.fa-reddit:before{\n  content:\"\\f1a1\"\n}\n\n.fa-reddit-square:before{\n  content:\"\\f1a2\"\n}\n\n.fa-stumbleupon-circle:before{\n  content:\"\\f1a3\"\n}\n\n.fa-stumbleupon:before{\n  content:\"\\f1a4\"\n}\n\n.fa-delicious:before{\n  content:\"\\f1a5\"\n}\n\n.fa-digg:before{\n  content:\"\\f1a6\"\n}\n\n.fa-pied-piper-pp:before{\n  content:\"\\f1a7\"\n}\n\n.fa-pied-piper-alt:before{\n  content:\"\\f1a8\"\n}\n\n.fa-drupal:before{\n  content:\"\\f1a9\"\n}\n\n.fa-joomla:before{\n  content:\"\\f1aa\"\n}\n\n.fa-language:before{\n  content:\"\\f1ab\"\n}\n\n.fa-fax:before{\n  content:\"\\f1ac\"\n}\n\n.fa-building:before{\n  content:\"\\f1ad\"\n}\n\n.fa-child:before{\n  content:\"\\f1ae\"\n}\n\n.fa-paw:before{\n  content:\"\\f1b0\"\n}\n\n.fa-spoon:before{\n  content:\"\\f1b1\"\n}\n\n.fa-cube:before{\n  content:\"\\f1b2\"\n}\n\n.fa-cubes:before{\n  content:\"\\f1b3\"\n}\n\n.fa-behance:before{\n  content:\"\\f1b4\"\n}\n\n.fa-behance-square:before{\n  content:\"\\f1b5\"\n}\n\n.fa-steam:before{\n  content:\"\\f1b6\"\n}\n\n.fa-steam-square:before{\n  content:\"\\f1b7\"\n}\n\n.fa-recycle:before{\n  content:\"\\f1b8\"\n}\n\n.fa-automobile:before,.fa-car:before{\n  content:\"\\f1b9\"\n}\n\n.fa-cab:before,.fa-taxi:before{\n  content:\"\\f1ba\"\n}\n\n.fa-tree:before{\n  content:\"\\f1bb\"\n}\n\n.fa-spotify:before{\n  content:\"\\f1bc\"\n}\n\n.fa-deviantart:before{\n  content:\"\\f1bd\"\n}\n\n.fa-soundcloud:before{\n  content:\"\\f1be\"\n}\n\n.fa-database:before{\n  content:\"\\f1c0\"\n}\n\n.fa-file-pdf-o:before{\n  content:\"\\f1c1\"\n}\n\n.fa-file-word-o:before{\n  content:\"\\f1c2\"\n}\n\n.fa-file-excel-o:before{\n  content:\"\\f1c3\"\n}\n\n.fa-file-powerpoint-o:before{\n  content:\"\\f1c4\"\n}\n\n.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{\n  content:\"\\f1c5\"\n}\n\n.fa-file-archive-o:before,.fa-file-zip-o:before{\n  content:\"\\f1c6\"\n}\n\n.fa-file-audio-o:before,.fa-file-sound-o:before{\n  content:\"\\f1c7\"\n}\n\n.fa-file-movie-o:before,.fa-file-video-o:before{\n  content:\"\\f1c8\"\n}\n\n.fa-file-code-o:before{\n  content:\"\\f1c9\"\n}\n\n.fa-vine:before{\n  content:\"\\f1ca\"\n}\n\n.fa-codepen:before{\n  content:\"\\f1cb\"\n}\n\n.fa-jsfiddle:before{\n  content:\"\\f1cc\"\n}\n\n.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{\n  content:\"\\f1cd\"\n}\n\n.fa-circle-o-notch:before{\n  content:\"\\f1ce\"\n}\n\n.fa-ra:before,.fa-rebel:before,.fa-resistance:before{\n  content:\"\\f1d0\"\n}\n\n.fa-empire:before,.fa-ge:before{\n  content:\"\\f1d1\"\n}\n\n.fa-git-square:before{\n  content:\"\\f1d2\"\n}\n\n.fa-git:before{\n  content:\"\\f1d3\"\n}\n\n.fa-hacker-news:before,.fa-y-combinator-square:before,.fa-yc-square:before{\n  content:\"\\f1d4\"\n}\n\n.fa-tencent-weibo:before{\n  content:\"\\f1d5\"\n}\n\n.fa-qq:before{\n  content:\"\\f1d6\"\n}\n\n.fa-wechat:before,.fa-weixin:before{\n  content:\"\\f1d7\"\n}\n\n.fa-paper-plane:before,.fa-send:before{\n  content:\"\\f1d8\"\n}\n\n.fa-paper-plane-o:before,.fa-send-o:before{\n  content:\"\\f1d9\"\n}\n\n.fa-history:before{\n  content:\"\\f1da\"\n}\n\n.fa-circle-thin:before{\n  content:\"\\f1db\"\n}\n\n.fa-header:before{\n  content:\"\\f1dc\"\n}\n\n.fa-paragraph:before{\n  content:\"\\f1dd\"\n}\n\n.fa-sliders:before{\n  content:\"\\f1de\"\n}\n\n.fa-share-alt:before{\n  content:\"\\f1e0\"\n}\n\n.fa-share-alt-square:before{\n  content:\"\\f1e1\"\n}\n\n.fa-bomb:before{\n  content:\"\\f1e2\"\n}\n\n.fa-futbol-o:before,.fa-soccer-ball-o:before{\n  content:\"\\f1e3\"\n}\n\n.fa-tty:before{\n  content:\"\\f1e4\"\n}\n\n.fa-binoculars:before{\n  content:\"\\f1e5\"\n}\n\n.fa-plug:before{\n  content:\"\\f1e6\"\n}\n\n.fa-slideshare:before{\n  content:\"\\f1e7\"\n}\n\n.fa-twitch:before{\n  content:\"\\f1e8\"\n}\n\n.fa-yelp:before{\n  content:\"\\f1e9\"\n}\n\n.fa-newspaper-o:before{\n  content:\"\\f1ea\"\n}\n\n.fa-wifi:before{\n  content:\"\\f1eb\"\n}\n\n.fa-calculator:before{\n  content:\"\\f1ec\"\n}\n\n.fa-paypal:before{\n  content:\"\\f1ed\"\n}\n\n.fa-google-wallet:before{\n  content:\"\\f1ee\"\n}\n\n.fa-cc-visa:before{\n  content:\"\\f1f0\"\n}\n\n.fa-cc-mastercard:before{\n  content:\"\\f1f1\"\n}\n\n.fa-cc-discover:before{\n  content:\"\\f1f2\"\n}\n\n.fa-cc-amex:before{\n  content:\"\\f1f3\"\n}\n\n.fa-cc-paypal:before{\n  content:\"\\f1f4\"\n}\n\n.fa-cc-stripe:before{\n  content:\"\\f1f5\"\n}\n\n.fa-bell-slash:before{\n  content:\"\\f1f6\"\n}\n\n.fa-bell-slash-o:before{\n  content:\"\\f1f7\"\n}\n\n.fa-trash:before{\n  content:\"\\f1f8\"\n}\n\n.fa-copyright:before{\n  content:\"\\f1f9\"\n}\n\n.fa-at:before{\n  content:\"\\f1fa\"\n}\n\n.fa-eyedropper:before{\n  content:\"\\f1fb\"\n}\n\n.fa-paint-brush:before{\n  content:\"\\f1fc\"\n}\n\n.fa-birthday-cake:before{\n  content:\"\\f1fd\"\n}\n\n.fa-area-chart:before{\n  content:\"\\f1fe\"\n}\n\n.fa-pie-chart:before{\n  content:\"\\f200\"\n}\n\n.fa-line-chart:before{\n  content:\"\\f201\"\n}\n\n.fa-lastfm:before{\n  content:\"\\f202\"\n}\n\n.fa-lastfm-square:before{\n  content:\"\\f203\"\n}\n\n.fa-toggle-off:before{\n  content:\"\\f204\"\n}\n\n.fa-toggle-on:before{\n  content:\"\\f205\"\n}\n\n.fa-bicycle:before{\n  content:\"\\f206\"\n}\n\n.fa-bus:before{\n  content:\"\\f207\"\n}\n\n.fa-ioxhost:before{\n  content:\"\\f208\"\n}\n\n.fa-angellist:before{\n  content:\"\\f209\"\n}\n\n.fa-cc:before{\n  content:\"\\f20a\"\n}\n\n.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{\n  content:\"\\f20b\"\n}\n\n.fa-meanpath:before{\n  content:\"\\f20c\"\n}\n\n.fa-buysellads:before{\n  content:\"\\f20d\"\n}\n\n.fa-connectdevelop:before{\n  content:\"\\f20e\"\n}\n\n.fa-dashcube:before{\n  content:\"\\f210\"\n}\n\n.fa-forumbee:before{\n  content:\"\\f211\"\n}\n\n.fa-leanpub:before{\n  content:\"\\f212\"\n}\n\n.fa-sellsy:before{\n  content:\"\\f213\"\n}\n\n.fa-shirtsinbulk:before{\n  content:\"\\f214\"\n}\n\n.fa-simplybuilt:before{\n  content:\"\\f215\"\n}\n\n.fa-skyatlas:before{\n  content:\"\\f216\"\n}\n\n.fa-cart-plus:before{\n  content:\"\\f217\"\n}\n\n.fa-cart-arrow-down:before{\n  content:\"\\f218\"\n}\n\n.fa-diamond:before{\n  content:\"\\f219\"\n}\n\n.fa-ship:before{\n  content:\"\\f21a\"\n}\n\n.fa-user-secret:before{\n  content:\"\\f21b\"\n}\n\n.fa-motorcycle:before{\n  content:\"\\f21c\"\n}\n\n.fa-street-view:before{\n  content:\"\\f21d\"\n}\n\n.fa-heartbeat:before{\n  content:\"\\f21e\"\n}\n\n.fa-venus:before{\n  content:\"\\f221\"\n}\n\n.fa-mars:before{\n  content:\"\\f222\"\n}\n\n.fa-mercury:before{\n  content:\"\\f223\"\n}\n\n.fa-intersex:before,.fa-transgender:before{\n  content:\"\\f224\"\n}\n\n.fa-transgender-alt:before{\n  content:\"\\f225\"\n}\n\n.fa-venus-double:before{\n  content:\"\\f226\"\n}\n\n.fa-mars-double:before{\n  content:\"\\f227\"\n}\n\n.fa-venus-mars:before{\n  content:\"\\f228\"\n}\n\n.fa-mars-stroke:before{\n  content:\"\\f229\"\n}\n\n.fa-mars-stroke-v:before{\n  content:\"\\f22a\"\n}\n\n.fa-mars-stroke-h:before{\n  content:\"\\f22b\"\n}\n\n.fa-neuter:before{\n  content:\"\\f22c\"\n}\n\n.fa-genderless:before{\n  content:\"\\f22d\"\n}\n\n.fa-facebook-official:before{\n  content:\"\\f230\"\n}\n\n.fa-pinterest-p:before{\n  content:\"\\f231\"\n}\n\n.fa-whatsapp:before{\n  content:\"\\f232\"\n}\n\n.fa-server:before{\n  content:\"\\f233\"\n}\n\n.fa-user-plus:before{\n  content:\"\\f234\"\n}\n\n.fa-user-times:before{\n  content:\"\\f235\"\n}\n\n.fa-bed:before,.fa-hotel:before{\n  content:\"\\f236\"\n}\n\n.fa-viacoin:before{\n  content:\"\\f237\"\n}\n\n.fa-train:before{\n  content:\"\\f238\"\n}\n\n.fa-subway:before{\n  content:\"\\f239\"\n}\n\n.fa-medium:before{\n  content:\"\\f23a\"\n}\n\n.fa-y-combinator:before,.fa-yc:before{\n  content:\"\\f23b\"\n}\n\n.fa-optin-monster:before{\n  content:\"\\f23c\"\n}\n\n.fa-opencart:before{\n  content:\"\\f23d\"\n}\n\n.fa-expeditedssl:before{\n  content:\"\\f23e\"\n}\n\n.fa-battery-4:before,.fa-battery-full:before,.fa-battery:before{\n  content:\"\\f240\"\n}\n\n.fa-battery-3:before,.fa-battery-three-quarters:before{\n  content:\"\\f241\"\n}\n\n.fa-battery-2:before,.fa-battery-half:before{\n  content:\"\\f242\"\n}\n\n.fa-battery-1:before,.fa-battery-quarter:before{\n  content:\"\\f243\"\n}\n\n.fa-battery-0:before,.fa-battery-empty:before{\n  content:\"\\f244\"\n}\n\n.fa-mouse-pointer:before{\n  content:\"\\f245\"\n}\n\n.fa-i-cursor:before{\n  content:\"\\f246\"\n}\n\n.fa-object-group:before{\n  content:\"\\f247\"\n}\n\n.fa-object-ungroup:before{\n  content:\"\\f248\"\n}\n\n.fa-sticky-note:before{\n  content:\"\\f249\"\n}\n\n.fa-sticky-note-o:before{\n  content:\"\\f24a\"\n}\n\n.fa-cc-jcb:before{\n  content:\"\\f24b\"\n}\n\n.fa-cc-diners-club:before{\n  content:\"\\f24c\"\n}\n\n.fa-clone:before{\n  content:\"\\f24d\"\n}\n\n.fa-balance-scale:before{\n  content:\"\\f24e\"\n}\n\n.fa-hourglass-o:before{\n  content:\"\\f250\"\n}\n\n.fa-hourglass-1:before,.fa-hourglass-start:before{\n  content:\"\\f251\"\n}\n\n.fa-hourglass-2:before,.fa-hourglass-half:before{\n  content:\"\\f252\"\n}\n\n.fa-hourglass-3:before,.fa-hourglass-end:before{\n  content:\"\\f253\"\n}\n\n.fa-hourglass:before{\n  content:\"\\f254\"\n}\n\n.fa-hand-grab-o:before,.fa-hand-rock-o:before{\n  content:\"\\f255\"\n}\n\n.fa-hand-paper-o:before,.fa-hand-stop-o:before{\n  content:\"\\f256\"\n}\n\n.fa-hand-scissors-o:before{\n  content:\"\\f257\"\n}\n\n.fa-hand-lizard-o:before{\n  content:\"\\f258\"\n}\n\n.fa-hand-spock-o:before{\n  content:\"\\f259\"\n}\n\n.fa-hand-pointer-o:before{\n  content:\"\\f25a\"\n}\n\n.fa-hand-peace-o:before{\n  content:\"\\f25b\"\n}\n\n.fa-trademark:before{\n  content:\"\\f25c\"\n}\n\n.fa-registered:before{\n  content:\"\\f25d\"\n}\n\n.fa-creative-commons:before{\n  content:\"\\f25e\"\n}\n\n.fa-gg:before{\n  content:\"\\f260\"\n}\n\n.fa-gg-circle:before{\n  content:\"\\f261\"\n}\n\n.fa-tripadvisor:before{\n  content:\"\\f262\"\n}\n\n.fa-odnoklassniki:before{\n  content:\"\\f263\"\n}\n\n.fa-odnoklassniki-square:before{\n  content:\"\\f264\"\n}\n\n.fa-get-pocket:before{\n  content:\"\\f265\"\n}\n\n.fa-wikipedia-w:before{\n  content:\"\\f266\"\n}\n\n.fa-safari:before{\n  content:\"\\f267\"\n}\n\n.fa-chrome:before{\n  content:\"\\f268\"\n}\n\n.fa-firefox:before{\n  content:\"\\f269\"\n}\n\n.fa-opera:before{\n  content:\"\\f26a\"\n}\n\n.fa-internet-explorer:before{\n  content:\"\\f26b\"\n}\n\n.fa-television:before,.fa-tv:before{\n  content:\"\\f26c\"\n}\n\n.fa-contao:before{\n  content:\"\\f26d\"\n}\n\n.fa-500px:before{\n  content:\"\\f26e\"\n}\n\n.fa-amazon:before{\n  content:\"\\f270\"\n}\n\n.fa-calendar-plus-o:before{\n  content:\"\\f271\"\n}\n\n.fa-calendar-minus-o:before{\n  content:\"\\f272\"\n}\n\n.fa-calendar-times-o:before{\n  content:\"\\f273\"\n}\n\n.fa-calendar-check-o:before{\n  content:\"\\f274\"\n}\n\n.fa-industry:before{\n  content:\"\\f275\"\n}\n\n.fa-map-pin:before{\n  content:\"\\f276\"\n}\n\n.fa-map-signs:before{\n  content:\"\\f277\"\n}\n\n.fa-map-o:before{\n  content:\"\\f278\"\n}\n\n.fa-map:before{\n  content:\"\\f279\"\n}\n\n.fa-commenting:before{\n  content:\"\\f27a\"\n}\n\n.fa-commenting-o:before{\n  content:\"\\f27b\"\n}\n\n.fa-houzz:before{\n  content:\"\\f27c\"\n}\n\n.fa-vimeo:before{\n  content:\"\\f27d\"\n}\n\n.fa-black-tie:before{\n  content:\"\\f27e\"\n}\n\n.fa-fonticons:before{\n  content:\"\\f280\"\n}\n\n.fa-reddit-alien:before{\n  content:\"\\f281\"\n}\n\n.fa-edge:before{\n  content:\"\\f282\"\n}\n\n.fa-credit-card-alt:before{\n  content:\"\\f283\"\n}\n\n.fa-codiepie:before{\n  content:\"\\f284\"\n}\n\n.fa-modx:before{\n  content:\"\\f285\"\n}\n\n.fa-fort-awesome:before{\n  content:\"\\f286\"\n}\n\n.fa-usb:before{\n  content:\"\\f287\"\n}\n\n.fa-product-hunt:before{\n  content:\"\\f288\"\n}\n\n.fa-mixcloud:before{\n  content:\"\\f289\"\n}\n\n.fa-scribd:before{\n  content:\"\\f28a\"\n}\n\n.fa-pause-circle:before{\n  content:\"\\f28b\"\n}\n\n.fa-pause-circle-o:before{\n  content:\"\\f28c\"\n}\n\n.fa-stop-circle:before{\n  content:\"\\f28d\"\n}\n\n.fa-stop-circle-o:before{\n  content:\"\\f28e\"\n}\n\n.fa-shopping-bag:before{\n  content:\"\\f290\"\n}\n\n.fa-shopping-basket:before{\n  content:\"\\f291\"\n}\n\n.fa-hashtag:before{\n  content:\"\\f292\"\n}\n\n.fa-bluetooth:before{\n  content:\"\\f293\"\n}\n\n.fa-bluetooth-b:before{\n  content:\"\\f294\"\n}\n\n.fa-percent:before{\n  content:\"\\f295\"\n}\n\n.fa-gitlab:before{\n  content:\"\\f296\"\n}\n\n.fa-wpbeginner:before{\n  content:\"\\f297\"\n}\n\n.fa-wpforms:before{\n  content:\"\\f298\"\n}\n\n.fa-envira:before{\n  content:\"\\f299\"\n}\n\n.fa-universal-access:before{\n  content:\"\\f29a\"\n}\n\n.fa-wheelchair-alt:before{\n  content:\"\\f29b\"\n}\n\n.fa-question-circle-o:before{\n  content:\"\\f29c\"\n}\n\n.fa-blind:before{\n  content:\"\\f29d\"\n}\n\n.fa-audio-description:before{\n  content:\"\\f29e\"\n}\n\n.fa-volume-control-phone:before{\n  content:\"\\f2a0\"\n}\n\n.fa-braille:before{\n  content:\"\\f2a1\"\n}\n\n.fa-assistive-listening-systems:before{\n  content:\"\\f2a2\"\n}\n\n.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before{\n  content:\"\\f2a3\"\n}\n\n.fa-deaf:before,.fa-deafness:before,.fa-hard-of-hearing:before{\n  content:\"\\f2a4\"\n}\n\n.fa-glide:before{\n  content:\"\\f2a5\"\n}\n\n.fa-glide-g:before{\n  content:\"\\f2a6\"\n}\n\n.fa-sign-language:before,.fa-signing:before{\n  content:\"\\f2a7\"\n}\n\n.fa-low-vision:before{\n  content:\"\\f2a8\"\n}\n\n.fa-viadeo:before{\n  content:\"\\f2a9\"\n}\n\n.fa-viadeo-square:before{\n  content:\"\\f2aa\"\n}\n\n.fa-snapchat:before{\n  content:\"\\f2ab\"\n}\n\n.fa-snapchat-ghost:before{\n  content:\"\\f2ac\"\n}\n\n.fa-snapchat-square:before{\n  content:\"\\f2ad\"\n}\n\n.fa-pied-piper:before{\n  content:\"\\f2ae\"\n}\n\n.fa-first-order:before{\n  content:\"\\f2b0\"\n}\n\n.fa-yoast:before{\n  content:\"\\f2b1\"\n}\n\n.fa-themeisle:before{\n  content:\"\\f2b2\"\n}\n\n.fa-google-plus-circle:before,.fa-google-plus-official:before{\n  content:\"\\f2b3\"\n}\n\n.fa-fa:before,.fa-font-awesome:before{\n  content:\"\\f2b4\"\n}\n\n.fa-handshake-o:before{\n  content:\"\\f2b5\"\n}\n\n.fa-envelope-open:before{\n  content:\"\\f2b6\"\n}\n\n.fa-envelope-open-o:before{\n  content:\"\\f2b7\"\n}\n\n.fa-linode:before{\n  content:\"\\f2b8\"\n}\n\n.fa-address-book:before{\n  content:\"\\f2b9\"\n}\n\n.fa-address-book-o:before{\n  content:\"\\f2ba\"\n}\n\n.fa-address-card:before,.fa-vcard:before{\n  content:\"\\f2bb\"\n}\n\n.fa-address-card-o:before,.fa-vcard-o:before{\n  content:\"\\f2bc\"\n}\n\n.fa-user-circle:before{\n  content:\"\\f2bd\"\n}\n\n.fa-user-circle-o:before{\n  content:\"\\f2be\"\n}\n\n.fa-user-o:before{\n  content:\"\\f2c0\"\n}\n\n.fa-id-badge:before{\n  content:\"\\f2c1\"\n}\n\n.fa-drivers-license:before,.fa-id-card:before{\n  content:\"\\f2c2\"\n}\n\n.fa-drivers-license-o:before,.fa-id-card-o:before{\n  content:\"\\f2c3\"\n}\n\n.fa-quora:before{\n  content:\"\\f2c4\"\n}\n\n.fa-free-code-camp:before{\n  content:\"\\f2c5\"\n}\n\n.fa-telegram:before{\n  content:\"\\f2c6\"\n}\n\n.fa-thermometer-4:before,.fa-thermometer-full:before,.fa-thermometer:before{\n  content:\"\\f2c7\"\n}\n\n.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{\n  content:\"\\f2c8\"\n}\n\n.fa-thermometer-2:before,.fa-thermometer-half:before{\n  content:\"\\f2c9\"\n}\n\n.fa-thermometer-1:before,.fa-thermometer-quarter:before{\n  content:\"\\f2ca\"\n}\n\n.fa-thermometer-0:before,.fa-thermometer-empty:before{\n  content:\"\\f2cb\"\n}\n\n.fa-shower:before{\n  content:\"\\f2cc\"\n}\n\n.fa-bath:before,.fa-bathtub:before,.fa-s15:before{\n  content:\"\\f2cd\"\n}\n\n.fa-podcast:before{\n  content:\"\\f2ce\"\n}\n\n.fa-window-maximize:before{\n  content:\"\\f2d0\"\n}\n\n.fa-window-minimize:before{\n  content:\"\\f2d1\"\n}\n\n.fa-window-restore:before{\n  content:\"\\f2d2\"\n}\n\n.fa-times-rectangle:before,.fa-window-close:before{\n  content:\"\\f2d3\"\n}\n\n.fa-times-rectangle-o:before,.fa-window-close-o:before{\n  content:\"\\f2d4\"\n}\n\n.fa-bandcamp:before{\n  content:\"\\f2d5\"\n}\n\n.fa-grav:before{\n  content:\"\\f2d6\"\n}\n\n.fa-etsy:before{\n  content:\"\\f2d7\"\n}\n\n.fa-imdb:before{\n  content:\"\\f2d8\"\n}\n\n.fa-ravelry:before{\n  content:\"\\f2d9\"\n}\n\n.fa-eercast:before{\n  content:\"\\f2da\"\n}\n\n.fa-microchip:before{\n  content:\"\\f2db\"\n}\n\n.fa-snowflake-o:before{\n  content:\"\\f2dc\"\n}\n\n.fa-superpowers:before{\n  content:\"\\f2dd\"\n}\n\n.fa-wpexplorer:before{\n  content:\"\\f2de\"\n}\n\n.fa-meetup:before{\n  content:\"\\f2e0\"\n}\n\n.sr-only{\n  position:absolute;\n  width:1px;\n  height:1px;\n  padding:0;\n  margin:-1px;\n  overflow:hidden;\n  clip:rect(0,0,0,0);\n  border:0\n}\n\n.sr-only-focusable:active,.sr-only-focusable:focus{\n  position:static;\n  width:auto;\n  height:auto;\n  margin:0;\n  overflow:visible;\n  clip:auto\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fontawesome-webfont.8b43027.eot";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fontawesome-webfont.8b43027.eot";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fontawesome-webfont.20fd170.woff2";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fontawesome-webfont.f691f37.woff";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fontawesome-webfont.1e59d23.ttf";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fontawesome-webfont.c1e38fd.svg";

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "AppNavbar", function() { return AppNavbar; });
__webpack_require__.d(components_namespaceObject, "BodyWrapper", function() { return BodyWrapper; });
__webpack_require__.d(components_namespaceObject, "NuxtLogo", function() { return NuxtLogo; });
__webpack_require__.d(components_namespaceObject, "Widget", function() { return Widget; });
__webpack_require__.d(components_namespaceObject, "WidgetDetails", function() { return WidgetDetails; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(11);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);

      app.context.beforeSerialize = fn => context.beforeSerializeFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(12);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(6);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(5);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(7);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          const el = document.querySelector(hash);

          if (el) {
            var _getComputedStyle$scr;

            // scroll to anchor by returning the selector
            position = {
              selector: hash
            }; // Respect any scroll-margin-top set in CSS when scrolling to anchor

            const y = Number((_getComputedStyle$scr = getComputedStyle(el)['scroll-margin-top']) === null || _getComputedStyle$scr === void 0 ? void 0 : _getComputedStyle$scr.replace('px', ''));

            if (y) {
              position.offset = {
                y
              };
            }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _6710ce3b = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 6).then(__webpack_require__.bind(null, 64)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/",
    component: _6710ce3b,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(15)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "42edb734"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(17)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "96989130"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/@nuxtjs/tailwindcss/dist/runtime/tailwind.css
var tailwind = __webpack_require__(19);

// EXTERNAL MODULE: ./assets/styles/main.css
var main = __webpack_require__(21);

// EXTERNAL MODULE: ./assets/styles/main.scss
var styles_main = __webpack_require__(30);

// EXTERNAL MODULE: ./assets/font-awesome/css/font-awesome.min.css
var font_awesome_min = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/layouts/default.vue?vue&type=template&id=0040005c&
var defaultvue_type_template_id_0040005c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Nuxt')}
var defaultvue_type_template_id_0040005c_staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/layouts/default.vue?vue&type=template&id=0040005c&

// CONCATENATED MODULE: ./.nuxt/layouts/default.vue

var script = {}


/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_0040005c_render,
  defaultvue_type_template_id_0040005c_staticRenderFns,
  false,
  null,
  null,
  "4b7abe58"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js










const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;

    if (this.isPreview) {
      if (this.$store && this.$store._actions.nuxtServerInit) {
        this.$loading.start();
        await this.$store.dispatch('nuxtServerInit', this.context);
      }

      await this.refresh();
      this.$loading.finish();
    }
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    },

    isPreview() {
      return Boolean(this.$options.previewData);
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    },

    getRouterBase() {
      return Object(external_ufo_["withoutTrailingSlash"])(this.$router.options.base);
    },

    getRoutePath(route = '/') {
      const base = this.getRouterBase();
      return Object(external_ufo_["withoutTrailingSlash"])(Object(external_ufo_["withoutBase"])(Object(external_ufo_["parsePath"])(route).pathname, base));
    },

    getStaticAssetsPath(route = '/') {
      const {
        staticAssetsBase
      } = window.__NUXT__;
      return urlJoin(staticAssetsBase, this.getRoutePath(route));
    },

    async fetchStaticManifest() {
      return window.__NUXT_IMPORT__('manifest.js', Object(external_ufo_["normalizeURL"])(urlJoin(this.getStaticAssetsPath(), 'manifest.js')));
    },

    setPagePayload(payload) {
      this._pagePayload = payload;
      this._fetchCounters = {};
    },

    async fetchPayload(route, prefetch) {
      const path = Object(external_ufo_["decode"])(this.getRoutePath(route));
      const manifest = await this.fetchStaticManifest();

      if (!manifest.routes.includes(path)) {
        if (!prefetch) {
          this.setPagePayload(false);
        }

        throw new Error(`Route ${path} is not pre-rendered`);
      }

      const src = urlJoin(this.getStaticAssetsPath(route), 'payload.js');

      try {
        const payload = await window.__NUXT_IMPORT__(path, Object(external_ufo_["normalizeURL"])(src));

        if (!prefetch) {
          this.setPagePayload(payload);
        }

        return payload;
      } catch (err) {
        if (!prefetch) {
          this.setPagePayload(false);
        }

        throw err;
      }
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/components/index.js
const AppNavbar = () => __webpack_require__.e(/* import() | components/app-navbar */ 1).then(__webpack_require__.bind(null, 55)).then(c => wrapFunctional(c.default || c));
const BodyWrapper = () => __webpack_require__.e(/* import() | components/body-wrapper */ 2).then(__webpack_require__.bind(null, 58)).then(c => wrapFunctional(c.default || c));
const NuxtLogo = () => __webpack_require__.e(/* import() | components/nuxt-logo */ 3).then(__webpack_require__.bind(null, 65)).then(c => wrapFunctional(c.default || c));
const Widget = () => __webpack_require__.e(/* import() | components/widget */ 4).then(__webpack_require__.bind(null, 59)).then(c => wrapFunctional(c.default || c));
const WidgetDetails = () => __webpack_require__.e(/* import() | components/widget-details */ 5).then(__webpack_require__.bind(null, 42)).then(c => wrapFunctional(c.default || c)); // nuxt/nuxt.js#8607

function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js



for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// CONCATENATED MODULE: ./.nuxt/index.js










/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const store = null;
  const router = await createRouter(ssrContext, config, {
    store
  }); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "nuxt-test-project",
      "htmlAttrs": {
        "lang": "en"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }, {
        "name": "format-detection",
        "content": "telephone=no"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "style": [],
      "script": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Check if plugin not already installed


    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config); // Add enablePreview(previewData = {}) in context for plugins

  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}

    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.nuxt.config || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // for beforeSerialize(nuxtState)

  ssrContext.beforeSerializeFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target

  if (ssrContext.url) {
    ssrContext.url = ssrContext.url.split('?')[0];
  } // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Call beforeSerialize() hooks
      ssrContext.beforeSerializeFns.forEach(fn => fn(ssrContext.nuxt));
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Call global middleware (nuxt.config.js)
  */

  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map