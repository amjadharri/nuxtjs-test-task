exports.ids = [6,1,2,4,5];
exports.modules = Array(41).concat([
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("26cb5191", content, true, context)
};

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WidgetDetails.vue?vue&type=template&id=492194f0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"widget__details"},[_vm._ssrNode("<div class=\"widget__details--left\" data-v-492194f0><div class=\"widget__details--type widget__details-box\" data-v-492194f0><p class=\"widget__details--title\" data-v-492194f0>"+_vm._ssrEscape(_vm._s(_vm.widgetDetails.type))+"</p> <p class=\"widget__details--value\" data-v-492194f0>"+_vm._ssrEscape("\n        "+_vm._s(_vm.widgetDetails.type_value)+"\n      ")+"</p></div> <div class=\"widget__details--color widget__details-box\" data-v-492194f0><p class=\"widget__details--title\" data-v-492194f0>"+_vm._ssrEscape(_vm._s(_vm.widgetDetails.color))+"</p> <p class=\"widget__details--value\" data-v-492194f0>"+_vm._ssrEscape("\n        "+_vm._s(_vm.widgetDetails.color_value)+"\n      ")+"</p></div> <div class=\"widget__details--accessories widget__details-box\" data-v-492194f0><p class=\"widget__details--title\" data-v-492194f0>"+_vm._ssrEscape("\n        "+_vm._s(_vm.widgetDetails.accessories)+"\n      ")+"</p> "+(_vm._ssrList((_vm.widgetDetails.accessories_values),function(accesory,index){return ("<p class=\"widget__details--value\" data-v-492194f0>"+_vm._ssrEscape("\n        "+_vm._s(accesory)+"\n      ")+"</p>")}))+"</div></div> <div class=\"widget__details--right\" data-v-492194f0><div class=\"widget__details--rental-period widget__details-box\" data-v-492194f0><p class=\"widget__details--title\" data-v-492194f0>"+_vm._ssrEscape("\n        "+_vm._s(_vm.widgetDetails.rental_period)+"\n      ")+"</p> <p class=\"widget__details--value\" data-v-492194f0>"+_vm._ssrEscape("\n        "+_vm._s(_vm.widgetDetails.rental_period_value)+"\n      ")+"</p></div> <div class=\"widget__details--driving-period widget__details-box\" data-v-492194f0><p class=\"widget__details--title\" data-v-492194f0>Akstur á ári</p> <p class=\"widget__details--value\" data-v-492194f0>18.000 km.</p></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/WidgetDetails.vue?vue&type=template&id=492194f0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WidgetDetails.vue?vue&type=script&lang=js&
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
//
//
//
//
//
/* harmony default export */ var WidgetDetailsvue_type_script_lang_js_ = ({
  name: "WidgetDetails",

  data() {
    return {
      widgetDetails: {
        product_title: "Hyundai",
        product_subtitle: "Tucson Comfort",
        type: "Gerd",
        type_value: "1.600cc Bensín Sjálfskipting - Framhjóladrif",
        color: "Litur",
        color_value: "Kongablár",
        accessories: "Aukabúnaður",
        accessories_values: {
          type1: "Toppbogar",
          type2: "Nelgd vetrardekk",
          type3: "Hjólafestingar"
        },
        rental_period: "Leigutími",
        rental_period_value: "12 mán.",
        driving_period: "Akstur á ári",
        driving_period_value: "18.000 km."
      }
    };
  }

});
// CONCATENATED MODULE: ./components/WidgetDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WidgetDetailsvue_type_script_lang_js_ = (WidgetDetailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/WidgetDetails.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(45)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_WidgetDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "492194f0",
  "648319da"
  
)

/* harmony default export */ var WidgetDetails = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("6101bb57", content, true, context)
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("da78bd64", content, true, context)
};

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetDetails_vue_vue_type_style_index_0_id_492194f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetDetails_vue_vue_type_style_index_0_id_492194f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetDetails_vue_vue_type_style_index_0_id_492194f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetDetails_vue_vue_type_style_index_0_id_492194f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetDetails_vue_vue_type_style_index_0_id_492194f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.widget__details[data-v-492194f0]{\n  display:flex;\n  justify-content:flex-start;\n  margin:auto 32px\n}\n@media(max-width:768px){\n.widget__details[data-v-492194f0]{\n    display:none\n}\n}\n.widget__details .widget__details--left[data-v-492194f0]{\n  padding-right:20px\n}\n.widget__details .widget__details--left .widget__details--type .widget__details--value[data-v-492194f0]{\n  font-size:11px;\n  margin-bottom:16px\n}\n.widget__details .widget__details--left .widget__details-box[data-v-492194f0],.widget__details .widget__details--right .widget__details-box[data-v-492194f0]{\n  margin-bottom:24px\n}\n.widget__details .widget__details--title[data-v-492194f0]{\n  font-weight:400;\n  font-size:16px;\n  line-height:120%;\n  color:#828282\n}\n.widget__details .widget__details--value[data-v-492194f0]{\n  font-weight:700;\n  font-size:18px;\n  line-height:180%;\n  color:#002a52\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("15fbd75a", content, true, context)
};

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.navbar{\n  background-color:#5c5c5c;\n  height:88px;\n  justify-content:space-between;\n  color:#fff;\n  position:-webkit-sticky;\n  position:sticky;\n  top:0;\n  z-index:1\n}\n.navbar,.navbar .navbar__logo{\n  display:flex;\n  align-items:center\n}\n.navbar .navbar__logo{\n  width:30%;\n  height:100%;\n  background:#002a52;\n  padding-left:48px;\n  font-size:36.21px;\n  font-weight:700\n}\n@media(max-width:768px){\n.navbar .navbar__logo{\n    padding-left:20px\n}\n}\n@media(min-width:768px)and (max-width:1060px){\n.navbar .navbar__logo{\n    font-size:26px;\n    width:25%\n}\n}\n.navbar .navbar__items{\n  font-family:\"Roboto\",sans-serif;\n  display:flex;\n  padding-right:96px\n}\n@media(max-width:768px){\n.navbar .navbar__items{\n    display:none\n}\n.navbar .navbar__items.collapse-menu{\n    background:#002a52;\n    display:block;\n    position:absolute;\n    left:0;\n    right:0;\n    top:88px;\n    padding:0 20px 12px 4px\n}\n.navbar .navbar__items.collapse-menu .navbar__items--item{\n    margin-left:0;\n    padding:8px 8px 8px 16px;\n    border-radius:8px\n}\n.navbar .navbar__items.collapse-menu .navbar__items--item:hover{\n    background-color:#fff;\n    color:#5c5c5c\n}\n}\n@media(min-width:768px)and (max-width:1060px){\n.navbar .navbar__items{\n    padding-left:1.75rem\n}\n}\n.navbar .navbar__items .navbar__items--item{\n  font-size:16px;\n  font-weight:500;\n  letter-spacing:.03em;\n  text-transform:uppercase;\n  margin-left:50px;\n  cursor:pointer\n}\n.navbar .navbar__items .navbar__items--item .navbar__items--item:first-child{\n  margin-left:0\n}\n@media(min-width:768px)and (max-width:1060px){\n.navbar .navbar__items .navbar__items--item{\n    margin-left:28px;\n    font-size:12px\n}\n}\n.navbar .navbr__navigation-icon{\n  display:none;\n  margin-right:20px;\n  color:#fff;\n  cursor:pointer\n}\n@media(max-width:768px){\n.navbar .navbr__navigation-icon{\n    display:block\n}\n}\n@media(max-width:768px){\n.navbar{\n    background:#002a52\n}\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BodyWrapper_vue_vue_type_style_index_0_id_2db81373_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BodyWrapper_vue_vue_type_style_index_0_id_2db81373_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BodyWrapper_vue_vue_type_style_index_0_id_2db81373_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BodyWrapper_vue_vue_type_style_index_0_id_2db81373_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BodyWrapper_vue_vue_type_style_index_0_id_2db81373_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.wrapper[data-v-2db81373]{\n  width:65%;\n  height:100%;\n  background-color:#e5e5e5;\n  padding:0 34px\n}\n.wrapper .tags[data-v-2db81373]{\n  overflow-x:hidden;\n  padding:16px 14px;\n  position:relative;\n  margin-top:0.75rem;\n  display:flex;\n  align-items:center\n}\n.wrapper .tags .tags__tag[data-v-2db81373]{\n  position:relative;\n  margin-right:44px\n}\n.wrapper .tags .tags__tag[data-v-2db81373]:first-child{\n  background:#edf7f6;\n  border-radius:0.25rem;\n  padding-left:1rem;\n  padding-right:1rem;\n  padding-top:0px;\n  padding-bottom:0px\n}\n.wrapper .tags .tags__tag:first-child .tag__label[data-v-2db81373]{\n  color:#002a52;\n  font-weight:700\n}\n.wrapper .tags .tags__tag[data-v-2db81373]:after{\n  content:\"\";\n  background:#55bfad;\n  top:10px;\n  right:-28px;\n  position:absolute;\n  height:0.25rem;\n  width:0.25rem;\n  border-radius:0.25rem\n}\n.wrapper .tags .tags__tag .tag__label[data-v-2db81373]{\n  font-size:14px;\n  color:#bdbdbd;\n  text-transform:capitalize\n}\n.wrapper .tags .icon[data-v-2db81373]{\n  cursor:pointer;\n  color:#002a52\n}\n@media(min-width:768px)and (max-width:1060px){\n.wrapper .tags .icon[data-v-2db81373]{\n    position:-webkit-sticky;\n    position:sticky;\n    right:0px\n}\n}\n@media(max-width:768px){\n.wrapper .tags .icon[data-v-2db81373]{\n    position:-webkit-sticky;\n    position:sticky;\n    right:0px\n}\n}\n@media(max-width:768px){\n.wrapper .tags[data-v-2db81373]{\n    background:#fafafa;\n    padding-left:45%;\n    position:-webkit-sticky;\n    position:sticky;\n    top:88px;\n    z-index:1;\n    margin-top:0\n}\n}\n.wrapper .type__title[data-v-2db81373]{\n  font-weight:700;\n  font-size:20px;\n  line-height:120%;\n  color:#002a52;\n  text-transform:uppercase;\n  margin-bottom:24px;\n  margin-top:44px;\n  padding:0 14px\n}\n.wrapper .product__details[data-v-2db81373]{\n  padding:20px 0 0 16px;\n  background:#fff;\n  margin-top:2.75rem;\n  margin-right:2rem;\n  border-radius:0.5rem\n}\n.wrapper .product__details .product__details--type[data-v-2db81373]{\n  font-size:20px;\n  line-height:120%;\n  color:#002a52;\n  border-bottom:1px solid #edf7f6;\n  display:flex;\n  align-items:center;\n  justify-content:space-between;\n  padding-right:1rem;\n  padding-bottom:1.25rem;\n  font-weight:700\n}\n.wrapper .product__details .table__details .table__details--row[data-v-2db81373]{\n  border-bottom:1px solid #edf7f6;\n  display:flex;\n  align-items:center;\n  padding-left:2rem;\n  padding-right:2rem;\n  padding-top:1rem;\n  padding-bottom:1rem;\n  padding-left:0px\n}\n@media(max-width:768px){\n.wrapper .product__details .table__details .table__details--row[data-v-2db81373]{\n    padding-right:0\n}\n}\n.wrapper .product__details .table__details .table__details--row.click-active[data-v-2db81373]{\n  background:#002a52\n}\n.wrapper .product__details .table__details .table__details--row.click-active .table__row .table__data .table__data--key[data-v-2db81373],.wrapper .product__details .table__details .table__details--row.click-active .table__row .table__data .table__data--value[data-v-2db81373]{\n  color:#fff\n}\n.wrapper .product__details .table__details .table__details--row.click-active .circle__wrapper .circle[data-v-2db81373]:before{\n  content:\"\";\n  background:#002a52;\n  border-radius:10px;\n  inset:3px;\n  position:absolute\n}\n.wrapper .product__details .table__details .table__details--row .circle__wrapper[data-v-2db81373]{\n  padding:8px;\n  border-radius:20px;\n  margin-left:-8px;\n  background:#fff\n}\n.wrapper .product__details .table__details .table__details--row .circle__wrapper .circle[data-v-2db81373]{\n  border:2px solid #002a52;\n  position:relative;\n  height:1.25rem;\n  width:1.25rem;\n  cursor:pointer;\n  border-radius:1.5rem\n}\n.wrapper .product__details .table__details .table__details--row .table__row[data-v-2db81373]{\n  margin-left:1rem;\n  display:flex;\n  width:100%;\n  flex-wrap:wrap;\n  justify-content:space-between\n}\n.wrapper .product__details .table__details .table__details--row .table__row .table__data[data-v-2db81373]{\n  margin-top:0.25rem;\n  margin-bottom:0.25rem;\n  display:flex;\n  flex-direction:column\n}\n.wrapper .product__details .table__details .table__details--row .table__row .table__data .table__data--key[data-v-2db81373]{\n  font-size:14px;\n  font-weight:700;\n  color:#002a52\n}\n.wrapper .product__details .table__details .table__details--row .table__row .table__data .table__data--value[data-v-2db81373]{\n  font-size:14px;\n  font-weight:400;\n  color:#002a52\n}\n@media(max-width:768px){\n.wrapper .product__details .table__details .table__details--row .table__row[data-v-2db81373]{\n    justify-content:flex-start\n}\n.wrapper .product__details .table__details .table__details--row .table__row .table__data[data-v-2db81373]{\n    margin-right:1rem\n}\n}\n@media(max-width:768px){\n.wrapper[data-v-2db81373]{\n    width:100%;\n    background:transparent;\n    height:-webkit-max-content;\n    height:-moz-max-content;\n    height:max-content;\n    padding:0\n}\n.wrapper .product__details[data-v-2db81373]{\n    margin:0 0 20px;\n    padding:20px 16px 0\n}\n.wrapper .product__details .product__details--type[data-v-2db81373]{\n    padding:20px 40px 20px 16px\n}\n.wrapper .type__title[data-v-2db81373]{\n    display:none\n}\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/car.7f8af45.png";

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget_vue_vue_type_style_index_0_id_24f13eb7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget_vue_vue_type_style_index_0_id_24f13eb7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget_vue_vue_type_style_index_0_id_24f13eb7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget_vue_vue_type_style_index_0_id_24f13eb7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget_vue_vue_type_style_index_0_id_24f13eb7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.widget[data-v-24f13eb7]{\n  width:35%;\n  height:100%;\n  padding-top:32px;\n  background:#fff;\n  position:fixed;\n  right:0;\n  top:88px;\n  bottom:0\n}\n.widget .content[data-v-24f13eb7]{\n  height:100%;\n  overflow-y:auto;\n  padding-bottom:220px\n}\n@media(max-width:768px){\n.widget .content[data-v-24f13eb7]{\n    overflow:hidden;\n    padding-bottom:0\n}\n}\n.widget .content[data-v-24f13eb7]::-webkit-scrollbar{\n  display:none\n}\n@media(max-width:768px){\n.widget .header[data-v-24f13eb7]{\n    display:flex;\n    align-items:center;\n    justify-content:space-between\n}\n}\n.widget .header .widget__title[data-v-24f13eb7]{\n  font-weight:700;\n  font-size:16px\n}\n.widget .header .widget__subtitle[data-v-24f13eb7],.widget .header .widget__title[data-v-24f13eb7]{\n  line-height:120%;\n  color:#002a52;\n  text-transform:uppercase;\n  margin:auto 32px\n}\n.widget .header .widget__subtitle[data-v-24f13eb7]{\n  font-weight:400;\n  font-size:24px\n}\n@media(max-width:768px){\n.widget .header .widget__subtitle[data-v-24f13eb7]{\n    margin-right:0\n}\n}\n.widget .header .widget__img[data-v-24f13eb7]{\n  width:68%;\n  height:35%;\n  margin:16px auto auto\n}\n@media(max-width:768px){\n.widget .header .widget__img[data-v-24f13eb7]{\n    height:auto;\n    width:179px\n}\n}\n.widget .price[data-v-24f13eb7]{\n  width:100%;\n  height:123px;\n  background:#edf7f6;\n  position:absolute;\n  bottom:88px;\n  padding-left:24px;\n  display:flex;\n  align-items:center;\n  justify-content:space-between;\n  padding-right:1rem\n}\n@media(max-width:768px){\n.widget .price[data-v-24f13eb7]{\n    bottom:0;\n    position:fixed;\n    height:80px\n}\n}\n.widget .price .price__wrapper .price__wrapper--product-name[data-v-24f13eb7]{\n  font-weight:400;\n  font-size:16px;\n  line-height:120%;\n  color:#828282\n}\n.widget .price .price__wrapper .price__wrapper--product-price[data-v-24f13eb7]{\n  font-weight:700;\n  font-size:26px;\n  line-height:120%;\n  letter-spacing:-2px;\n  color:#002a52\n}\n.widget .price .price__action--arrow[data-v-24f13eb7]{\n  top:-11px;\n  background:#edf7f6;\n  position:absolute;\n  display:flex;\n  height:1.5rem;\n  width:1.5rem;\n  cursor:pointer;\n  align-items:center;\n  justify-content:center;\n  border-radius:1.5rem;\n  opacity:0\n}\n@media(max-width:768px){\n.widget .price .price__action--arrow[data-v-24f13eb7]{\n    opacity:1\n}\n}\n.widget .price .btn__wrapper[data-v-24f13eb7]{\n  color:#fff;\n  display:flex;\n  justify-content:space-between;\n  align-items:center;\n  background:#002a52;\n  border-radius:4px;\n  padding:8px 16px 8px 24px;\n  cursor:pointer\n}\n.widget .price .btn__wrapper .label[data-v-24f13eb7]{\n  font-weight:700;\n  font-size:16px;\n  line-height:100%;\n  letter-spacing:.1px;\n  margin-right:12px\n}\n.widget .price .btn__wrapper .icon[data-v-24f13eb7]{\n  margin-left:12px\n}\n.widget .show__details[data-v-24f13eb7]{\n  background:#edf7f6;\n  box-shadow:0 -8px 32px rgba(0,42,82,.08);\n  top:0;\n  position:fixed!important;\n  padding-top:0;\n  z-index:3;\n  position:absolute;\n  top:0px;\n  right:0px;\n  bottom:0px;\n  left:0px;\n  padding-left:2rem;\n  padding-right:2rem;\n  padding-top:1rem;\n  padding-bottom:1rem\n}\n.widget .show__details .show__details--price[data-v-24f13eb7]{\n  width:100%;\n  height:100%;\n  position:relative\n}\n.widget .show__details .price[data-v-24f13eb7]{\n  position:absolute;\n  top:0;\n  height:80px;\n  display:flex;\n  padding-left:0;\n  padding-right:0\n}\n.widget .show__details .widget__details[data-v-24f13eb7]{\n  display:flex;\n  position:absolute;\n  top:108px;\n  margin-left:0;\n  margin-right:0\n}\n.widget .show__details .circle[data-v-24f13eb7]{\n  width:26px;\n  height:26px;\n  position:absolute;\n  background:#002a52;\n  border-radius:26px;\n  color:#fff;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  top:-12px;\n  left:30px;\n  z-index:1\n}\n@media(max-width:768px){\n.widget[data-v-24f13eb7]{\n    width:100%;\n    position:inherit;\n    padding-top:0;\n    height:128px\n}\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppNavbar.vue?vue&type=template&id=28f4828f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navbar"},[_vm._ssrNode("<div class=\"navbar__logo\">MANGO</div> <div"+(_vm._ssrClass("navbar__items",{ 'collapse-menu': _vm.collapse }))+">"+(_vm._ssrList((_vm.menuItems),function(menuItem){return ("<div class=\"navbar__items--item\">"+_vm._ssrEscape("\n      "+_vm._s(menuItem)+"\n    ")+"</div>")}))+"</div> "+((!_vm.collapse)?("<i class=\"fa fa-bars fa-2x navbr__navigation-icon\"></i>"):("<i class=\"fa fa-times fa-2x navbr__navigation-icon\"></i>")))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AppNavbar.vue?vue&type=template&id=28f4828f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppNavbar.vue?vue&type=script&lang=js&
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
//
//
//
//
//
/* harmony default export */ var AppNavbarvue_type_script_lang_js_ = ({
  name: "AppNavbar",

  data() {
    return {
      menuItems: ["menu item 1", "menu item 2", "menu item 3", "menu item 4"],
      collapse: false
    };
  },

  methods: {
    handleCollapse() {
      this.collapse = !this.collapse;
    }

  }
});
// CONCATENATED MODULE: ./components/AppNavbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppNavbarvue_type_script_lang_js_ = (AppNavbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/AppNavbar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(48)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AppNavbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "56feb6e6"
  
)

/* harmony default export */ var AppNavbar = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("0348c759", content, true, context)
};

/***/ }),
/* 57 */,
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BodyWrapper.vue?vue&type=template&id=2db81373&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[_vm._ssrNode("<div class=\"tags\" data-v-2db81373>"+(_vm._ssrList((_vm.tags),function(tag,index){return ("<div class=\"tags__tag\""+(_vm._ssrStyle(null,_vm.getTransform, null))+" data-v-2db81373><span class=\"tag__label\" data-v-2db81373>"+_vm._ssrEscape(_vm._s(tag))+"</span></div>")}))+" <i class=\"icon fa fa-chevron-right fa-1x\" data-v-2db81373></i></div> <h2 class=\"type__title\" data-v-2db81373>Gerð</h2> "+(_vm._ssrList((_vm.tableData),function(table,tableIndex){return ("<div class=\"product__details\" data-v-2db81373><div class=\"product__details--type\" data-v-2db81373><h2 class=\"type capitalize\" data-v-2db81373>"+_vm._ssrEscape(_vm._s(table.title))+"</h2> <h2 class=\"more\" data-v-2db81373>Nánar</h2></div> <div class=\"table__details\" data-v-2db81373>"+(_vm._ssrList((table.rows),function(tableRow,rowsIndex){return ("<div"+(_vm._ssrClass("table__details--row",{
          'click-active':
            tableIndex === _vm.activetableIndex && rowsIndex === _vm.activeRowIndex,
        }))+" data-v-2db81373>"+((!_vm.clicked)?("<div class=\"circle__wrapper\" data-v-2db81373><div class=\"circle\" data-v-2db81373></div></div>"):"<!---->")+" <div class=\"table__row\" data-v-2db81373>"+(_vm._ssrList((tableRow.row),function(ref,rowIndex){
        var key = ref.key;
        var value = ref.value;
return ("<div data-v-2db81373><div class=\"table__data\" data-v-2db81373><span class=\"table__data--key\" data-v-2db81373>"+_vm._ssrEscape(_vm._s(key))+"</span> <span class=\"table__data--value\" data-v-2db81373>"+_vm._ssrEscape(_vm._s(value))+"</span></div></div>")}))+"</div></div>")}))+"</div></div>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BodyWrapper.vue?vue&type=template&id=2db81373&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BodyWrapper.vue?vue&type=script&lang=js&
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
/* harmony default export */ var BodyWrappervue_type_script_lang_js_ = ({
  name: "BodyWrapper",

  data() {
    return {
      clicked: false,
      tags: ["Gerð", "Aukabúnaður", "Litur", "Innrétting", "Leigutími"],
      activeRowIndex: null,
      activetableIndex: null,
      transformWidth: 0,
      tagIndex: 0,
      tableData: [{
        id: 1,
        title: "classic",
        rows: [{
          row: [{
            key: "Vélarstærð",
            value: "1600cc Bensín"
          }, {
            key: "Skipting",
            value: "Beinskiptur"
          }, {
            key: "Drif",
            value: "Framhjóladrif"
          }, {
            key: "Co2 frá",
            value: "95 g/km"
          }, {
            key: "Eyðsla frá ",
            value: "3,7 l/100km"
          }, {
            key: "Afl og tog",
            value: "100hö/160nm"
          }]
        }, {
          row: [{
            key: "Vélarstærð",
            value: "1600cc Bensín"
          }, {
            key: "Skipting",
            value: "Beinskiptur"
          }, {
            key: "Drif",
            value: "Framhjóladrif"
          }, {
            key: "Co2 frá",
            value: "95 g/km"
          }, {
            key: "Eyðsla frá ",
            value: "3,7 l/100km"
          }, {
            key: "Afl og tog",
            value: "100hö/160nm"
          }]
        }, {
          row: [{
            key: "Vélarstærð",
            value: "1600cc Bensín"
          }, {
            key: "Skipting",
            value: "Beinskiptur"
          }, {
            key: "Drif",
            value: "Framhjóladrif"
          }, {
            key: "Co2 frá",
            value: "95 g/km"
          }, {
            key: "Eyðsla frá ",
            value: "3,7 l/100km"
          }, {
            key: "Afl og tog",
            value: "100hö/160nm"
          }]
        }]
      }, {
        id: 2,
        title: "Premium",
        rows: [{
          row: [{
            key: "Vélarstærð",
            value: "1600cc Bensín"
          }, {
            key: "Skipting",
            value: "Beinskiptur"
          }, {
            key: "Drif",
            value: "Framhjóladrif"
          }, {
            key: "Co2 frá",
            value: "95 g/km"
          }, {
            key: "Eyðsla frá ",
            value: "3,7 l/100km"
          }, {
            key: "Afl og tog",
            value: "100hö/160nm"
          }]
        }, {
          row: [{
            key: "Vélarstærð",
            value: "1600cc Bensín"
          }, {
            key: "Skipting",
            value: "Beinskiptur"
          }, {
            key: "Drif",
            value: "Framhjóladrif"
          }, {
            key: "Co2 frá",
            value: "95 g/km"
          }, {
            key: "Eyðsla frá ",
            value: "3,7 l/100km"
          }, {
            key: "Afl og tog",
            value: "100hö/160nm"
          }]
        }]
      }]
    };
  },

  computed: {
    getTransform() {
      return `transform: translateX(${this.transformWidth}px);`;
    }

  },
  methods: {
    handleActiveRow(rowIndex, tableIndex) {
      this.activeRowIndex = rowIndex;
      this.activetableIndex = tableIndex;
    },

    handleTransform() {
      if (this.tagIndex < this.tags.length - 2) {
        this.transformWidth = this.transformWidth - this.$refs.tag[0].clientWidth;
        this.tagIndex = this.tagIndex + 1;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/BodyWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BodyWrappervue_type_script_lang_js_ = (BodyWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/BodyWrapper.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(50)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BodyWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2db81373",
  "1f27fe8d"
  
)

/* harmony default export */ var BodyWrapper = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Widget.vue?vue&type=template&id=24f13eb7&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"widget"},[_vm._ssrNode("<div class=\"content\" data-v-24f13eb7>","</div>",[_vm._ssrNode("<div class=\"header\" data-v-24f13eb7><div class=\"header__description\" data-v-24f13eb7><h3 class=\"widget__title\" data-v-24f13eb7>"+_vm._ssrEscape(_vm._s(_vm.description.product_title))+"</h3> <h3 class=\"widget__subtitle\" data-v-24f13eb7>"+_vm._ssrEscape(_vm._s(_vm.description.product_subtitle))+"</h3></div> <img"+(_vm._ssrAttr("src",__webpack_require__(52)))+" alt class=\"widget__img\" data-v-24f13eb7></div> "),_c('WidgetDetails')],2),_vm._ssrNode(" "),_c('WidgetDetails',{staticClass:"widget__details--desktop-wrapper"}),_vm._ssrNode(" <div class=\"price\" data-v-24f13eb7><div class=\"price__action--arrow\" data-v-24f13eb7><i class=\"fa fa-chevron-up\" data-v-24f13eb7></i></div> <div class=\"price__wrapper\" data-v-24f13eb7><p class=\"price__wrapper--product-name\" data-v-24f13eb7>Leiguverð</p> <h2 class=\"price__wrapper--product-price\" data-v-24f13eb7>106.190 kr. /mán.</h2></div> <div class=\"btn__wrapper\" data-v-24f13eb7><span class=\"btn__wrapper--label\" data-v-24f13eb7>Áfram</span> <i class=\"icon fa fa-chevron-right\" data-v-24f13eb7></i></div></div> "),(_vm.showDetails)?_vm._ssrNode("<div class=\"show__details\" style=\"top: 221px\" data-v-24f13eb7>","</div>",[_vm._ssrNode("<div class=\"circle\" data-v-24f13eb7><i class=\"fa fa-chevron-down\" data-v-24f13eb7></i></div> <div class=\"show__details--price\" data-v-24f13eb7><div class=\"price\" data-v-24f13eb7><div class=\"price__wrapper\" data-v-24f13eb7><p class=\"price__wrapper--product-name\" data-v-24f13eb7>Leiguverð</p> <h2 class=\"price__wrapper--product-price\" data-v-24f13eb7>106.190 kr. /mán.</h2></div> <div class=\"btn__wrapper\" data-v-24f13eb7><span class=\"btn__wrapper--label\" data-v-24f13eb7>Áfram</span> <i class=\"icon fa fa-arrow-right\" data-v-24f13eb7></i></div></div></div> "),_c('WidgetDetails')],2):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Widget.vue?vue&type=template&id=24f13eb7&scoped=true&

// EXTERNAL MODULE: ./components/WidgetDetails.vue + 4 modules
var WidgetDetails = __webpack_require__(42);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Widget.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//

/* harmony default export */ var Widgetvue_type_script_lang_js_ = ({
  name: "Widget",
  components: {
    WidgetDetails: WidgetDetails["default"]
  },

  data() {
    return {
      showDetails: false,
      description: {
        product_title: "Hyundai",
        product_subtitle: "Tucson Comfort"
      }
    };
  },

  methods: {
    handleShowDetails() {
      this.showDetails = !this.showDetails;
    }

  }
});
// CONCATENATED MODULE: ./components/Widget.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Widgetvue_type_script_lang_js_ = (Widgetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Widget.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(53)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Widgetvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "24f13eb7",
  "16b19878"
  
)

/* harmony default export */ var Widget = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {WidgetDetails: __webpack_require__(42).default})


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.home-page{\n  font-family:\"GT America\",sans-serif\n}\n.home-page .body{\n  display:flex;\n  justify-content:space-between;\n  padding-bottom:32px\n}\n@media(max-width:768px){\n.home-page .body{\n    flex-direction:column-reverse;\n    padding:0px;\n    padding-bottom:6rem\n}\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 62 */,
/* 63 */,
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=69224ae6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_c('AppNavbar'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"body\">","</div>",[_c('BodyWrapper'),_vm._ssrNode(" "),_c('Widget')],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=69224ae6&

// EXTERNAL MODULE: ./components/AppNavbar.vue + 4 modules
var AppNavbar = __webpack_require__(55);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    AppNavbar: AppNavbar["default"]
  },
  name: "IndexPage"
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(60)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3096e502"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AppNavbar: __webpack_require__(55).default,BodyWrapper: __webpack_require__(58).default,Widget: __webpack_require__(59).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map