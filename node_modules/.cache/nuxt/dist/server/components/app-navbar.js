exports.ids = [1];
exports.modules = {

/***/ 43:
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

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 49:
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

/***/ 55:
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

/***/ })

};;
//# sourceMappingURL=app-navbar.js.map