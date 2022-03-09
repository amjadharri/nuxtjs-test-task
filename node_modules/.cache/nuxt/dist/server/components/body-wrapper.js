exports.ids = [2];
exports.modules = {

/***/ 44:
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

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BodyWrapper_vue_vue_type_style_index_0_id_2db81373_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BodyWrapper_vue_vue_type_style_index_0_id_2db81373_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BodyWrapper_vue_vue_type_style_index_0_id_2db81373_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BodyWrapper_vue_vue_type_style_index_0_id_2db81373_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BodyWrapper_vue_vue_type_style_index_0_id_2db81373_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 51:
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

/***/ 58:
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

/***/ })

};;
//# sourceMappingURL=body-wrapper.js.map