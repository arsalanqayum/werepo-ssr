exports.ids = [8];
exports.modules = {

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(338);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6af86f4b", content, true, context)
};

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_navbar_2_vue_vue_type_style_index_0_id_602de20a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(272);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_navbar_2_vue_vue_type_style_index_0_id_602de20a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_navbar_2_vue_vue_type_style_index_0_id_602de20a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_navbar_2_vue_vue_type_style_index_0_id_602de20a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_navbar_2_vue_vue_type_style_index_0_id_602de20a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bg-primary-lighten[data-v-602de20a]{background-color:#fce9ec!important}.text-primary-lighten[data-v-602de20a]{color:#fce9ec}.bg-body[data-v-602de20a]{background-color:#f6f9fc}.footer-text[data-v-602de20a]{color:#bdbdbd}.border-primary[data-v-602de20a]{border:1px solid #279ad6!important}.bg-white[data-v-602de20a]{background-color:#fff}a[data-v-602de20a]{color:#279ad6!important}h1[data-v-602de20a]{font-size:30px}h2[data-v-602de20a]{font-size:25px}h3[data-v-602de20a]{font-size:20px}h4[data-v-602de20a]{font-size:17px}.text-14[data-v-602de20a],h5[data-v-602de20a]{font-size:14px}.text-16[data-v-602de20a]{font-size:16px}.text-sm[data-v-602de20a]{font-size:12px}.text-11[data-v-602de20a]{font-size:11px!important}.text-10[data-v-602de20a]{font-size:10px}.text-30[data-v-602de20a]{font-size:30px}.text-40[data-v-602de20a]{font-size:40px}.text-tiny[data-v-602de20a]{font-size:10px}.display-1[data-v-602de20a]{font-size:80px}.show-2[data-v-602de20a]{font-size:66px}@media(max-width:992px){.show-2[data-v-602de20a]{font-size:15px!important}}.show-3[data-v-602de20a]{line-height:1.2;font-size:50px!important}@media(max-width:600px){.show-3[data-v-602de20a]{font-size:30px!important}}@media(max-width:400px){.show-3[data-v-602de20a]{font-size:15px!important}}@media(max-width:992px){.banner-text[data-v-602de20a]{font-size:12px!important}}.shadow-sm[data-v-602de20a]{box-shadow:0 1px 3px rgba(3,0,71,.09)!important}.shadow[data-v-602de20a]{box-shadow:0 4px 16px rgba(43,52,69,.1)!important}.shadow-lg[data-v-602de20a]{box-shadow:0 8px 45px rgba(3,0,71,.09)!important}.font-600[data-v-602de20a]{font-weight:600}.ls-4[data-v-602de20a]{letter-spacing:4px}.leading-tight[data-v-602de20a]{line-height:1.25}.container-lg[data-v-602de20a]{max-width:1200px}.flex-1[data-v-602de20a]{flex:1}.cursor-pointer[data-v-602de20a]{cursor:pointer}.w-33[data-v-602de20a]{width:33.33%}.border-grey[data-v-602de20a]{border:1px solid #dae1e7}.z-0[data-v-602de20a]{z-index:0}.z-1[data-v-602de20a]{z-index:1}.z-10[data-v-602de20a]{z-index:10}.br-8[data-v-602de20a]{border-radius:8px!important}.br-12[data-v-602de20a]{border-radius:12px!important}.h-100[data-v-602de20a]{height:100%}.border-4-white[data-v-602de20a]{border:4px solid #fff}.card-overlay-item[data-v-602de20a]{position:relative}.card-overlay-item[data-v-602de20a]:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;transition:all .25s ease-in-out 0s}.card-overlay-item[data-v-602de20a]:hover:after{background:rgba(0,0,0,.3);z-index:0;border-radius:8px;cursor:pointer}.top-search-bar .v-text-field__details[data-v-602de20a]{display:none!important}svg[data-v-602de20a]{fill:currentColor!important}svg.icon[data-v-602de20a]:focus,svg[data-v-602de20a]:focus{outline:none}.bb-primary[data-v-602de20a]{border-bottom:2px solid #279ad6}ul.navbar-nav li.nav-item[data-v-602de20a]{position:relative;z-index:10}ul.navbar-nav li.nav-item:hover ul[data-v-602de20a]{display:block}ul.navbar-nav li.nav-item>ul[data-v-602de20a]{position:absolute}ul.navbar-nav li.nav-item ul[data-v-602de20a]{top:100%;box-shadow:0 4px 16px rgba(43,52,69,.1);background-color:#fff;padding:5px 0;width:250px;max-width:250px;border-radius:8px;display:none}ul.navbar-nav li.nav-item ul li[data-v-602de20a]{position:relative;list-style-type:none}ul.navbar-nav li.nav-item ul li[data-v-602de20a]:hover{background-color:#f6f9fc}ul.navbar-nav li.nav-item ul li a[data-v-602de20a]{width:100%;color:#4b566b;padding:.5rem 1rem;display:flex}ul.navbar-nav li.nav-item ul li:hover .navbar-submenu[data-v-602de20a]{display:block}ul.navbar-nav li.nav-item ul li .navbar-submenu[data-v-602de20a]{position:absolute;left:100%;top:0;display:none;width:100%;z-index:10;padding-left:1rem}ul.navigation-navbar .nav-item .nav-link[data-v-602de20a]{color:#0f3460}ul.navigation-navbar .nav-item .nav-link.active[data-v-602de20a],ul.navigation-navbar .nav-item .nav-link[data-v-602de20a]:hover{color:#279ad6}.hero-section-bg ul.navigation-navbar .nav-item .nav-link[data-v-602de20a]{color:#fff}.hero-section-bg ul.navigation-navbar .nav-item .nav-link.active[data-v-602de20a],.hero-section-bg ul.navigation-navbar .nav-item .nav-link[data-v-602de20a]:hover{color:#279ad6}ul.navbar-nav li.nav-item[data-v-602de20a]{list-style:none;margin-right:2rem!important}ul.navbar-nav li.nav-item[data-v-602de20a]:last-child{margin-right:0!important}ul.navbar-nav li.nav-item a[data-v-602de20a]{text-decoration:none}.router-link-active[data-v-602de20a]{color:#279ad6}.vuetify-carousel .v-carousel__controls .v-item-group button[data-v-602de20a]{color:#0f3460}.slick-next.slick-disabled[data-v-602de20a]:before,.slick-prev.slick-disabled[data-v-602de20a]:before{opacity:.5!important}.slick-next.slick-top-next-btn[data-v-602de20a]{top:-40px;right:0}.slick-next[data-v-602de20a]:before{opacity:0!important}@media(max-width:992px){.slick-next[data-v-602de20a]{right:5px!important}}.slick-prev[data-v-602de20a]{position:absolute;z-index:2}.slick-prev.slick-top-prev-btn[data-v-602de20a]{top:-40px;left:calc(100% - 105px)}@media(max-width:992px){.slick-prev.slick-top-prev-btn[data-v-602de20a]{left:calc(100% - 105px)!important}}.slick-prev[data-v-602de20a]:before{opacity:0!important}@media(max-width:992px){.slick-prev[data-v-602de20a]{left:5px!important}}.slick-dots[data-v-602de20a]{bottom:0!important}.slick-dots li button[data-v-602de20a]:before{font-size:16px!important}.slick-dots li.slick-active button[data-v-602de20a]:before,.slick-dots li:hover button[data-v-602de20a]:before{color:#0f3460!important;opacity:1!important}@media(max-width:375px){.slick-header-top-title[data-v-602de20a]{width:200px}}.slick-left-arrow[data-v-602de20a]{position:absolute;left:0!important}.slick-right-arrow[data-v-602de20a]{position:absolute;right:0!important}.slick-button-hover:hover .slick-arrow[data-v-602de20a]{display:block}.slick-button-hover .slick-arrow[data-v-602de20a]{display:none}.icon[data-v-602de20a]{width:24px;height:24px}.avatar-64[data-v-602de20a]{width:64px;height:auto}.brand-tabs .v-tabs-slider-wrapper[data-v-602de20a]{display:none}.box-wrapper[data-v-602de20a]{position:relative;display:flex;align-items:flex-start;width:100%;border-radius:8px}@media(max-width:959px){.box-wrapper .box-overlay[data-v-602de20a]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99;background-color:rgba(0,0,0,.5);display:none}.box-wrapper .box-overlay.open[data-v-602de20a]{display:block}}.box-wrapper.box-wrapper-version-2 .box-sidebar[data-v-602de20a]{border-radius:0}.box-wrapper .box-sidebar[data-v-602de20a]{width:282px;background-color:#fff;border-radius:8px;transition:all .3s ease}@media(max-width:959px){.box-wrapper .box-sidebar[data-v-602de20a]{position:fixed;top:0;left:-282px;border-radius:0;z-index:99;overflow-y:scroll;height:calc(100% - 56px)}.box-wrapper .box-sidebar.open[data-v-602de20a]{left:0}}.box-wrapper .box-content[data-v-602de20a]{width:calc(100% - 300px);margin-left:auto;border-radius:8px}@media(max-width:959px){.box-wrapper .box-content[data-v-602de20a]{width:100%}}.custom-form-wizard.vue-form-wizard.md .wizard-icon-circle[data-v-602de20a]{width:96px!important;height:36px!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle[data-v-602de20a]{top:23px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.square_shape[data-v-602de20a],.custom-form-wizard.vue-form-wizard .wizard-icon-circle .wizard-icon-container.square_shape[data-v-602de20a],.custom-form-wizard .vue-form-wizard .wizard-icon-circle .wizard-icon-container.tab_shape[data-v-602de20a]{border-radius:20px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle[data-v-602de20a]{border:none!important;border-radius:50%;font-weight:600;background-color:#ffe1e6!important;position:relative}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked[data-v-602de20a]{background-color:#279ad6!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked i[data-v-602de20a]{color:#fff!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle[data-v-602de20a]{background-color:#ffe1e6}.custom-form-wizard i.wizard-icon[data-v-602de20a]{font-size:20px;color:#279ad6}.custom-form-wizard .stepTitle[data-v-602de20a]{color:#279ad6}.input-group-btn[data-v-602de20a]{display:flex;align-items:center}.input-group-btn .v-input__slot[data-v-602de20a]{border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}.input-group-btn button[data-v-602de20a]{border-top-left-radius:0;border-bottom-left-radius:0;height:42px!important}.p-relative[data-v-602de20a]{position:relative!important}.p-absolute[data-v-602de20a]{position:absolute!important}.right-0[data-v-602de20a]{right:0}.top-0[data-v-602de20a]{top:0}.bottom-0[data-v-602de20a]{bottom:0}v-application a[data-v-602de20a]{color:#279ad6!important}.mb-60[data-v-602de20a]{margin-bottom:60px}.py-48[data-v-602de20a]{padding-top:48px;padding-bottom:48px}.mt-32[data-v-602de20a]{margin-top:32px}.mt--66[data-v-602de20a]{margin-top:-66px}.mw-0[data-v-602de20a]{min-width:0}.w-100[data-v-602de20a]{width:100%}.size-28[data-v-602de20a]{width:28px;height:28px}.min-vh-100[data-v-602de20a]{min-height:100vh}.w-200[data-v-602de20a]{width:200px}.mw-70[data-v-602de20a]{max-width:70px}*[data-v-602de20a]{font-size:14px}body[data-v-602de20a],html[data-v-602de20a]{color:#2b3445;background-color:#fff}.category_menu[data-v-602de20a]{overflow-y:inherit;overflow-x:inherit;contain:inherit;background-color:#fff;box-shadow:none;border-radius:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(195);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js + 1 modules
var VMenu = __webpack_require__(198);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/header-navbar-2.vue?vue&type=template&id=602de20a&scoped=true&




var header_navbar_2vue_type_template_id_602de20a_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center"
  }, [_c(VMenu["a" /* default */], {
    attrs: {
      "offset-y": "",
      "content-class": "category_menu"
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function ({
        on,
        attrs
      }) {
        return [_c(VBtn["a" /* default */], _vm._g(_vm._b({
          class: {
            'd-none': _vm.$route.path == '/home-two'
          },
          attrs: {
            "icon": "",
            "tile": ""
          }
        }, 'v-btn', attrs, false), on), [_c(VIcon["a" /* default */], [_vm._v("mdi-view-dashboard")])], 1)];
      }
    }])
  }, [_vm._v(" "), _c('Navbar')], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/home/header-navbar-2.vue?vue&type=template&id=602de20a&scoped=true&

// EXTERNAL MODULE: ./pages/home/navbar.vue + 4 modules
var navbar = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/header-navbar-2.vue?vue&type=script&lang=js&

/* harmony default export */ var header_navbar_2vue_type_script_lang_js_ = ({
  components: {
    Navbar: navbar["default"]
  }
});
// CONCATENATED MODULE: ./pages/home/header-navbar-2.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_header_navbar_2vue_type_script_lang_js_ = (header_navbar_2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./pages/home/header-navbar-2.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(337)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_header_navbar_2vue_type_script_lang_js_,
  header_navbar_2vue_type_template_id_602de20a_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "602de20a",
  "dfc9898c"
  
)

/* harmony default export */ var header_navbar_2 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=header-navbar-2.js.map