exports.ids = [5];
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
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"widget__details"},[_vm._ssrNode("<div class=\"widget__details--left\" data-v-492194f0><div class=\"widget__details--type widget__details-box\" data-v-492194f0><p class=\"widget__details--title\" data-v-492194f0>"+_vm._ssrEscape(_vm._s(_vm.widgetDetails.type))+"</p> <p class=\"widget__details--value\" data-v-492194f0>"+_vm._ssrEscape("\n        "+_vm._s(_vm.widgetDetails.type_value)+"\n      ")+"</p></div> <div class=\"widget__details--color widget__details-box\" data-v-492194f0><p class=\"widget__details--title\" data-v-492194f0>"+_vm._ssrEscape(_vm._s(_vm.widgetDetails.color))+"</p> <p class=\"widget__details--value\" data-v-492194f0>"+_vm._ssrEscape("\n        "+_vm._s(_vm.widgetDetails.color_value)+"\n      ")+"</p></div> <div class=\"widget__details--accessories widget__details-box\" data-v-492194f0><p class=\"widget__details--title\" data-v-492194f0>"+_vm._ssrEscape("\n        "+_vm._s(_vm.widgetDetails.accessories)+"\n      ")+"</p> "+(_vm._ssrList((_vm.widgetDetails.accessories_values),function(accesory,index){return ("<p class=\"widget__details--value\" data-v-492194f0>"+_vm._ssrEscape("\n        "+_vm._s(accesory)+"\n      ")+"</p>")}))+"</div></div> <div class=\"widget__details--right\" data-v-492194f0><div class=\"widget__details--rental-period widget__details-box\" data-v-492194f0><p class=\"widget__details--title\" data-v-492194f0>"+_vm._ssrEscape("\n        "+_vm._s(_vm.widgetDetails.rental_period)+"\n      ")+"</p> <p class=\"widget__details--value\" data-v-492194f0>"+_vm._ssrEscape("\n        "+_vm._s(_vm.widgetDetails.rental_period_value)+"\n      ")+"</p></div> <div class=\"widget__details--driving-period widget__details-box\" data-v-492194f0><p class=\"widget__details--title\" data-v-492194f0>Akstur ?? ??ri</p> <p class=\"widget__details--value\" data-v-492194f0>18.000 km.</p></div></div>")])}
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
        type_value: "1.600cc Bens??n Sj??lfskipting - Framhj??ladrif",
        color: "Litur",
        color_value: "Kongabl??r",
        accessories: "Aukab??na??ur",
        accessories_values: {
          type1: "Toppbogar",
          type2: "Nelgd vetrardekk",
          type3: "Hj??lafestingar"
        },
        rental_period: "Leigut??mi",
        rental_period_value: "12 m??n.",
        driving_period: "Akstur ?? ??ri",
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


/***/ })

};;
//# sourceMappingURL=widget-details.js.map