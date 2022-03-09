exports.ids = [4,5];
exports.modules = {

/***/ 41:
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

/***/ 42:
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

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetDetails_vue_vue_type_style_index_0_id_492194f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetDetails_vue_vue_type_style_index_0_id_492194f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetDetails_vue_vue_type_style_index_0_id_492194f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetDetails_vue_vue_type_style_index_0_id_492194f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetDetails_vue_vue_type_style_index_0_id_492194f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 46:
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

/***/ 47:
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

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/car.7f8af45.png";

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget_vue_vue_type_style_index_0_id_24f13eb7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget_vue_vue_type_style_index_0_id_24f13eb7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget_vue_vue_type_style_index_0_id_24f13eb7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget_vue_vue_type_style_index_0_id_24f13eb7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Widget_vue_vue_type_style_index_0_id_24f13eb7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 54:
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

/***/ 59:
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


/***/ })

};;
//# sourceMappingURL=widget.js.map