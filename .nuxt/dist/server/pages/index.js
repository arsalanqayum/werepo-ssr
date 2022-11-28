exports.ids = [9,2];
exports.modules = Array(57).concat([
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);


/* harmony default export */ __webpack_exports__["a"] = (_VBtn__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VCardActions */
/* unused harmony export VCardSubtitle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VCardText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VCardTitle; });
/* harmony import */ var _VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(214);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


const VCardActions = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "j"])('v-card__actions');
const VCardSubtitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "j"])('v-card__subtitle');
const VCardText = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "j"])('v-card__text');
const VCardTitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "j"])('v-card__title');

/* unused harmony default export */ var _unused_webpack_default_export = ({
  $_vuetify_subcomponents: {
    VCard: _VCard__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    VCardActions,
    VCardSubtitle,
    VCardText,
    VCardTitle
  }
});

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(219);
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89);
/* harmony import */ var _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(216);
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
// Styles
 // Extensions

 // Mixins


 // Helpers


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_mixins_loadable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_routable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]).extend({
  name: 'v-card',
  props: {
    flat: Boolean,
    hover: Boolean,
    img: String,
    link: Boolean,
    loaderHeight: {
      type: [Number, String],
      default: 4
    },
    raised: Boolean
  },
  computed: {
    classes() {
      return {
        'v-card': true,
        ..._mixins_routable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.classes.call(this),
        'v-card--flat': this.flat,
        'v-card--hover': this.hover,
        'v-card--link': this.isClickable,
        'v-card--loading': this.loading,
        'v-card--disabled': this.disabled,
        'v-card--raised': this.raised,
        ..._VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this)
      };
    },
    styles() {
      const style = {
        ..._VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.styles.call(this)
      };
      if (this.img) {
        style.background = `url("${this.img}") center center / cover no-repeat`;
      }
      return style;
    }
  },
  methods: {
    genProgress() {
      const render = _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].options.methods.genProgress.call(this);
      if (!render) return null;
      return this.$createElement('div', {
        staticClass: 'v-card__progress',
        key: 'progress'
      }, [render]);
    }
  },
  render(h) {
    const {
      tag,
      data
    } = this.generateRouteLink();
    data.style = this.styles;
    if (this.isClickable) {
      data.attrs = data.attrs || {};
      data.attrs.tabindex = 0;
    }
    return h(tag, this.setBackgroundColor(this.color, data), [this.genProgress(), this.$slots.default]);
  }
}));

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: VProgressLinear

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VProgressLinear/VProgressLinear.sass
var VProgressLinear = __webpack_require__(217);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/intersect/index.js
var intersect = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/positionable/index.js
var positionable = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/proxyable/index.js
var proxyable = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
 // Components

 // Directives

 // Mixins




 // Utilities



const baseMixins = Object(mixins["a" /* default */])(colorable["a" /* default */], Object(positionable["b" /* factory */])(['absolute', 'fixed', 'top', 'bottom']), proxyable["a" /* default */], themeable["a" /* default */]);
/* @vue/component */

/* harmony default export */ var VProgressLinear_VProgressLinear = (baseMixins.extend({
  name: 'v-progress-linear',
  directives: {
    intersect: intersect["a" /* default */]
  },
  props: {
    active: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String,
      default: null
    },
    backgroundOpacity: {
      type: [Number, String],
      default: null
    },
    bufferValue: {
      type: [Number, String],
      default: 100
    },
    color: {
      type: String,
      default: 'primary'
    },
    height: {
      type: [Number, String],
      default: 4
    },
    indeterminate: Boolean,
    query: Boolean,
    reverse: Boolean,
    rounded: Boolean,
    stream: Boolean,
    striped: Boolean,
    value: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      internalLazyValue: this.value || 0,
      isVisible: true
    };
  },
  computed: {
    __cachedBackground() {
      return this.$createElement('div', this.setBackgroundColor(this.backgroundColor || this.color, {
        staticClass: 'v-progress-linear__background',
        style: this.backgroundStyle
      }));
    },
    __cachedBar() {
      return this.$createElement(this.computedTransition, [this.__cachedBarType]);
    },
    __cachedBarType() {
      return this.indeterminate ? this.__cachedIndeterminate : this.__cachedDeterminate;
    },
    __cachedBuffer() {
      return this.$createElement('div', {
        staticClass: 'v-progress-linear__buffer',
        style: this.styles
      });
    },
    __cachedDeterminate() {
      return this.$createElement('div', this.setBackgroundColor(this.color, {
        staticClass: `v-progress-linear__determinate`,
        style: {
          width: Object(helpers["h" /* convertToUnit */])(this.normalizedValue, '%')
        }
      }));
    },
    __cachedIndeterminate() {
      return this.$createElement('div', {
        staticClass: 'v-progress-linear__indeterminate',
        class: {
          'v-progress-linear__indeterminate--active': this.active
        }
      }, [this.genProgressBar('long'), this.genProgressBar('short')]);
    },
    __cachedStream() {
      if (!this.stream) return null;
      return this.$createElement('div', this.setTextColor(this.color, {
        staticClass: 'v-progress-linear__stream',
        style: {
          width: Object(helpers["h" /* convertToUnit */])(100 - this.normalizedBuffer, '%')
        }
      }));
    },
    backgroundStyle() {
      const backgroundOpacity = this.backgroundOpacity == null ? this.backgroundColor ? 1 : 0.3 : parseFloat(this.backgroundOpacity);
      return {
        opacity: backgroundOpacity,
        [this.isReversed ? 'right' : 'left']: Object(helpers["h" /* convertToUnit */])(this.normalizedValue, '%'),
        width: Object(helpers["h" /* convertToUnit */])(Math.max(0, this.normalizedBuffer - this.normalizedValue), '%')
      };
    },
    classes() {
      return {
        'v-progress-linear--absolute': this.absolute,
        'v-progress-linear--fixed': this.fixed,
        'v-progress-linear--query': this.query,
        'v-progress-linear--reactive': this.reactive,
        'v-progress-linear--reverse': this.isReversed,
        'v-progress-linear--rounded': this.rounded,
        'v-progress-linear--striped': this.striped,
        'v-progress-linear--visible': this.isVisible,
        ...this.themeClasses
      };
    },
    computedTransition() {
      return this.indeterminate ? transitions["c" /* VFadeTransition */] : transitions["d" /* VSlideXTransition */];
    },
    isReversed() {
      return this.$vuetify.rtl !== this.reverse;
    },
    normalizedBuffer() {
      return this.normalize(this.bufferValue);
    },
    normalizedValue() {
      return this.normalize(this.internalLazyValue);
    },
    reactive() {
      return Boolean(this.$listeners.change);
    },
    styles() {
      const styles = {};
      if (!this.active) {
        styles.height = 0;
      }
      if (!this.indeterminate && parseFloat(this.normalizedBuffer) !== 100) {
        styles.width = Object(helpers["h" /* convertToUnit */])(this.normalizedBuffer, '%');
      }
      return styles;
    }
  },
  methods: {
    genContent() {
      const slot = Object(helpers["r" /* getSlot */])(this, 'default', {
        value: this.internalLazyValue
      });
      if (!slot) return null;
      return this.$createElement('div', {
        staticClass: 'v-progress-linear__content'
      }, slot);
    },
    genListeners() {
      const listeners = this.$listeners;
      if (this.reactive) {
        listeners.click = this.onClick;
      }
      return listeners;
    },
    genProgressBar(name) {
      return this.$createElement('div', this.setBackgroundColor(this.color, {
        staticClass: 'v-progress-linear__indeterminate',
        class: {
          [name]: true
        }
      }));
    },
    onClick(e) {
      if (!this.reactive) return;
      const {
        width
      } = this.$el.getBoundingClientRect();
      this.internalValue = e.offsetX / width * 100;
    },
    onObserve(entries, observer, isIntersecting) {
      this.isVisible = isIntersecting;
    },
    normalize(value) {
      if (value < 0) return 0;
      if (value > 100) return 100;
      return parseFloat(value);
    }
  },
  render(h) {
    const data = {
      staticClass: 'v-progress-linear',
      attrs: {
        role: 'progressbar',
        'aria-valuemin': 0,
        'aria-valuemax': this.normalizedBuffer,
        'aria-valuenow': this.indeterminate ? undefined : this.normalizedValue
      },
      class: this.classes,
      directives: [{
        name: 'intersect',
        value: this.onObserve
      }],
      style: {
        bottom: this.bottom ? 0 : undefined,
        height: this.active ? Object(helpers["h" /* convertToUnit */])(this.height) : 0,
        top: this.top ? 0 : undefined
      },
      on: this.genListeners()
    };
    return h('div', data, [this.__cachedStream, this.__cachedBackground, this.__cachedBuffer, this.__cachedBar, this.genContent()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/index.js


/* harmony default export */ var components_VProgressLinear = __webpack_exports__["a"] = (VProgressLinear_VProgressLinear);

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_VProgressLinear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(215);


/**
 * Loadable
 *
 * @mixin
 *
 * Used to add linear progress bar to components
 * Can use a default bar with a specific color
 * or designate a custom progress linear bar
 */

/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend().extend({
  name: 'loadable',
  props: {
    loading: {
      type: [Boolean, String],
      default: false
    },
    loaderHeight: {
      type: [Number, String],
      default: 2
    }
  },
  methods: {
    genProgress() {
      if (this.loading === false) return null;
      return this.$slots.progress || this.$createElement(_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        props: {
          absolute: true,
          color: this.loading === true || this.loading === '' ? this.color || 'primary' : this.loading,
          height: this.loaderHeight,
          indeterminate: true
        }
      });
    }
  }
}));

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(218);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("cf87dc84", content, true)

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bg-primary-lighten{background-color:#fce9ec!important}.text-primary-lighten{color:#fce9ec}.bg-body{background-color:#f6f9fc}.footer-text{color:#bdbdbd}.border-primary{border:1px solid #279ad6!important}.bg-white{background-color:#fff}a{color:#279ad6!important}h1{font-size:30px}h2{font-size:25px}h3{font-size:20px}h4{font-size:17px}.text-14,h5{font-size:14px}.text-16{font-size:16px}.text-sm{font-size:12px}.text-11{font-size:11px!important}.text-10{font-size:10px}.text-30{font-size:30px}.text-40{font-size:40px}.text-tiny{font-size:10px}.display-1{font-size:80px}.show-2{font-size:66px}@media(max-width:992px){.show-2{font-size:15px!important}}.show-3{line-height:1.2;font-size:50px!important}@media(max-width:600px){.show-3{font-size:30px!important}}@media(max-width:400px){.show-3{font-size:15px!important}}@media(max-width:992px){.banner-text{font-size:12px!important}}.shadow-sm{box-shadow:0 1px 3px rgba(3,0,71,.09)!important}.shadow{box-shadow:0 4px 16px rgba(43,52,69,.1)!important}.shadow-lg{box-shadow:0 8px 45px rgba(3,0,71,.09)!important}.font-600{font-weight:600}.ls-4{letter-spacing:4px}.leading-tight{line-height:1.25}.container-lg{max-width:1200px}.flex-1{flex:1}.cursor-pointer{cursor:pointer}.w-33{width:33.33%}.border-grey{border:1px solid #dae1e7}.z-0{z-index:0}.z-1{z-index:1}.z-10{z-index:10}.br-8{border-radius:8px!important}.br-12{border-radius:12px!important}.h-100{height:100%}.border-4-white{border:4px solid #fff}.card-overlay-item{position:relative}.card-overlay-item:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;transition:all .25s ease-in-out 0s}.card-overlay-item:hover:after{background:rgba(0,0,0,.3);z-index:0;border-radius:8px;cursor:pointer}.top-search-bar .v-text-field__details{display:none!important}svg{fill:currentColor!important}svg.icon:focus,svg:focus{outline:none}.bb-primary{border-bottom:2px solid #279ad6}ul.navbar-nav li.nav-item{position:relative;z-index:10}ul.navbar-nav li.nav-item:hover ul{display:block}ul.navbar-nav li.nav-item>ul{position:absolute}ul.navbar-nav li.nav-item ul{top:100%;box-shadow:0 4px 16px rgba(43,52,69,.1);background-color:#fff;padding:5px 0;width:250px;max-width:250px;border-radius:8px;display:none}ul.navbar-nav li.nav-item ul li{position:relative;list-style-type:none}ul.navbar-nav li.nav-item ul li:hover{background-color:#f6f9fc}ul.navbar-nav li.nav-item ul li a{width:100%;color:#4b566b;padding:.5rem 1rem;display:flex}ul.navbar-nav li.nav-item ul li:hover .navbar-submenu{display:block}ul.navbar-nav li.nav-item ul li .navbar-submenu{position:absolute;left:100%;top:0;display:none;width:100%;z-index:10;padding-left:1rem}ul.navigation-navbar .nav-item .nav-link{color:#0f3460}ul.navigation-navbar .nav-item .nav-link.active,ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}.hero-section-bg ul.navigation-navbar .nav-item .nav-link{color:#fff}.hero-section-bg ul.navigation-navbar .nav-item .nav-link.active,.hero-section-bg ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}ul.navbar-nav li.nav-item{list-style:none;margin-right:2rem!important}ul.navbar-nav li.nav-item:last-child{margin-right:0!important}ul.navbar-nav li.nav-item a{text-decoration:none}.router-link-active{color:#279ad6}.vuetify-carousel .v-carousel__controls .v-item-group button{color:#0f3460}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.5!important}.slick-next.slick-top-next-btn{top:-40px;right:0}.slick-next:before{opacity:0!important}@media(max-width:992px){.slick-next{right:5px!important}}.slick-prev{position:absolute;z-index:2}.slick-prev.slick-top-prev-btn{top:-40px;left:calc(100% - 105px)}@media(max-width:992px){.slick-prev.slick-top-prev-btn{left:calc(100% - 105px)!important}}.slick-prev:before{opacity:0!important}@media(max-width:992px){.slick-prev{left:5px!important}}.slick-dots{bottom:0!important}.slick-dots li button:before{font-size:16px!important}.slick-dots li.slick-active button:before,.slick-dots li:hover button:before{color:#0f3460!important;opacity:1!important}@media(max-width:375px){.slick-header-top-title{width:200px}}.slick-left-arrow{position:absolute;left:0!important}.slick-right-arrow{position:absolute;right:0!important}.slick-button-hover:hover .slick-arrow{display:block}.slick-button-hover .slick-arrow{display:none}.icon{width:24px;height:24px}.avatar-64{width:64px;height:auto}.brand-tabs .v-tabs-slider-wrapper{display:none}.box-wrapper{position:relative;display:flex;align-items:flex-start;width:100%;border-radius:8px}@media(max-width:959px){.box-wrapper .box-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99;background-color:rgba(0,0,0,.5);display:none}.box-wrapper .box-overlay.open{display:block}}.box-wrapper.box-wrapper-version-2 .box-sidebar{border-radius:0}.box-wrapper .box-sidebar{width:282px;background-color:#fff;border-radius:8px;transition:all .3s ease}@media(max-width:959px){.box-wrapper .box-sidebar{position:fixed;top:0;left:-282px;border-radius:0;z-index:99;overflow-y:scroll;height:calc(100% - 56px)}.box-wrapper .box-sidebar.open{left:0}}.box-wrapper .box-content{width:calc(100% - 300px);margin-left:auto;border-radius:8px}@media(max-width:959px){.box-wrapper .box-content{width:100%}}.custom-form-wizard.vue-form-wizard.md .wizard-icon-circle{width:96px!important;height:36px!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{top:23px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.square_shape,.custom-form-wizard.vue-form-wizard .wizard-icon-circle .wizard-icon-container.square_shape,.custom-form-wizard .vue-form-wizard .wizard-icon-circle .wizard-icon-container.tab_shape{border-radius:20px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle{border:none!important;border-radius:50%;font-weight:600;background-color:#ffe1e6!important;position:relative}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked{background-color:#279ad6!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked i{color:#fff!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{background-color:#ffe1e6}.custom-form-wizard i.wizard-icon{font-size:20px;color:#279ad6}.custom-form-wizard .stepTitle{color:#279ad6}.input-group-btn{display:flex;align-items:center}.input-group-btn .v-input__slot{border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}.input-group-btn button{border-top-left-radius:0;border-bottom-left-radius:0;height:42px!important}.p-relative{position:relative!important}.p-absolute{position:absolute!important}.right-0{right:0}.top-0{top:0}.bottom-0{bottom:0}v-application a{color:#279ad6!important}.mb-60{margin-bottom:60px}.py-48{padding-top:48px;padding-bottom:48px}.mt-32{margin-top:32px}.mt--66{margin-top:-66px}.mw-0{min-width:0}.w-100{width:100%}.size-28{width:28px;height:28px}.min-vh-100{min-height:100vh}.w-200{width:200px}.mw-70{max-width:70px}*{font-size:14px}body,html{color:#2b3445;background-color:#fff}.theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{animation-play-state:paused;background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{animation-name:indeterminate-ltr;animation-duration:2.2s;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{animation-name:indeterminate-short-ltr;animation-duration:2.2s;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{animation-name:indeterminate-short-rtl}.v-progress-linear__stream{animation:stream-ltr .25s linear infinite;animation-play-state:paused;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{animation-name:query-ltr;animation-duration:2s;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{animation-name:query-short-ltr;animation-duration:2s;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{animation-name:query-short-rtl}.v-progress-linear--visible .v-progress-linear__indeterminate--active .long,.v-progress-linear--visible .v-progress-linear__indeterminate--active .short,.v-progress-linear--visible .v-progress-linear__stream{animation-play-state:running}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(220);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("e23b7040", content, true)

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bg-primary-lighten{background-color:#fce9ec!important}.text-primary-lighten{color:#fce9ec}.bg-body{background-color:#f6f9fc}.footer-text{color:#bdbdbd}.border-primary{border:1px solid #279ad6!important}.bg-white{background-color:#fff}a{color:#279ad6!important}h1{font-size:30px}h2{font-size:25px}h3{font-size:20px}h4{font-size:17px}.text-14,h5{font-size:14px}.text-16{font-size:16px}.text-sm{font-size:12px}.text-11{font-size:11px!important}.text-10{font-size:10px}.text-30{font-size:30px}.text-40{font-size:40px}.text-tiny{font-size:10px}.display-1{font-size:80px}.show-2{font-size:66px}@media(max-width:992px){.show-2{font-size:15px!important}}.show-3{line-height:1.2;font-size:50px!important}@media(max-width:600px){.show-3{font-size:30px!important}}@media(max-width:400px){.show-3{font-size:15px!important}}@media(max-width:992px){.banner-text{font-size:12px!important}}.shadow-sm{box-shadow:0 1px 3px rgba(3,0,71,.09)!important}.shadow{box-shadow:0 4px 16px rgba(43,52,69,.1)!important}.shadow-lg{box-shadow:0 8px 45px rgba(3,0,71,.09)!important}.font-600{font-weight:600}.ls-4{letter-spacing:4px}.leading-tight{line-height:1.25}.container-lg{max-width:1200px}.flex-1{flex:1}.cursor-pointer{cursor:pointer}.w-33{width:33.33%}.border-grey{border:1px solid #dae1e7}.z-0{z-index:0}.z-1{z-index:1}.z-10{z-index:10}.br-8{border-radius:8px!important}.br-12{border-radius:12px!important}.h-100{height:100%}.border-4-white{border:4px solid #fff}.card-overlay-item{position:relative}.card-overlay-item:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;transition:all .25s ease-in-out 0s}.card-overlay-item:hover:after{background:rgba(0,0,0,.3);z-index:0;border-radius:8px;cursor:pointer}.top-search-bar .v-text-field__details{display:none!important}svg{fill:currentColor!important}svg.icon:focus,svg:focus{outline:none}.bb-primary{border-bottom:2px solid #279ad6}ul.navbar-nav li.nav-item{position:relative;z-index:10}ul.navbar-nav li.nav-item:hover ul{display:block}ul.navbar-nav li.nav-item>ul{position:absolute}ul.navbar-nav li.nav-item ul{top:100%;box-shadow:0 4px 16px rgba(43,52,69,.1);background-color:#fff;padding:5px 0;width:250px;max-width:250px;border-radius:8px;display:none}ul.navbar-nav li.nav-item ul li{position:relative;list-style-type:none}ul.navbar-nav li.nav-item ul li:hover{background-color:#f6f9fc}ul.navbar-nav li.nav-item ul li a{width:100%;color:#4b566b;padding:.5rem 1rem;display:flex}ul.navbar-nav li.nav-item ul li:hover .navbar-submenu{display:block}ul.navbar-nav li.nav-item ul li .navbar-submenu{position:absolute;left:100%;top:0;display:none;width:100%;z-index:10;padding-left:1rem}ul.navigation-navbar .nav-item .nav-link{color:#0f3460}ul.navigation-navbar .nav-item .nav-link.active,ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}.hero-section-bg ul.navigation-navbar .nav-item .nav-link{color:#fff}.hero-section-bg ul.navigation-navbar .nav-item .nav-link.active,.hero-section-bg ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}ul.navbar-nav li.nav-item{list-style:none;margin-right:2rem!important}ul.navbar-nav li.nav-item:last-child{margin-right:0!important}ul.navbar-nav li.nav-item a{text-decoration:none}.router-link-active{color:#279ad6}.vuetify-carousel .v-carousel__controls .v-item-group button{color:#0f3460}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.5!important}.slick-next.slick-top-next-btn{top:-40px;right:0}.slick-next:before{opacity:0!important}@media(max-width:992px){.slick-next{right:5px!important}}.slick-prev{position:absolute;z-index:2}.slick-prev.slick-top-prev-btn{top:-40px;left:calc(100% - 105px)}@media(max-width:992px){.slick-prev.slick-top-prev-btn{left:calc(100% - 105px)!important}}.slick-prev:before{opacity:0!important}@media(max-width:992px){.slick-prev{left:5px!important}}.slick-dots{bottom:0!important}.slick-dots li button:before{font-size:16px!important}.slick-dots li.slick-active button:before,.slick-dots li:hover button:before{color:#0f3460!important;opacity:1!important}@media(max-width:375px){.slick-header-top-title{width:200px}}.slick-left-arrow{position:absolute;left:0!important}.slick-right-arrow{position:absolute;right:0!important}.slick-button-hover:hover .slick-arrow{display:block}.slick-button-hover .slick-arrow{display:none}.icon{width:24px;height:24px}.avatar-64{width:64px;height:auto}.brand-tabs .v-tabs-slider-wrapper{display:none}.box-wrapper{position:relative;display:flex;align-items:flex-start;width:100%;border-radius:8px}@media(max-width:959px){.box-wrapper .box-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99;background-color:rgba(0,0,0,.5);display:none}.box-wrapper .box-overlay.open{display:block}}.box-wrapper.box-wrapper-version-2 .box-sidebar{border-radius:0}.box-wrapper .box-sidebar{width:282px;background-color:#fff;border-radius:8px;transition:all .3s ease}@media(max-width:959px){.box-wrapper .box-sidebar{position:fixed;top:0;left:-282px;border-radius:0;z-index:99;overflow-y:scroll;height:calc(100% - 56px)}.box-wrapper .box-sidebar.open{left:0}}.box-wrapper .box-content{width:calc(100% - 300px);margin-left:auto;border-radius:8px}@media(max-width:959px){.box-wrapper .box-content{width:100%}}.custom-form-wizard.vue-form-wizard.md .wizard-icon-circle{width:96px!important;height:36px!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{top:23px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.square_shape,.custom-form-wizard.vue-form-wizard .wizard-icon-circle .wizard-icon-container.square_shape,.custom-form-wizard .vue-form-wizard .wizard-icon-circle .wizard-icon-container.tab_shape{border-radius:20px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle{border:none!important;border-radius:50%;font-weight:600;background-color:#ffe1e6!important;position:relative}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked{background-color:#279ad6!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked i{color:#fff!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{background-color:#ffe1e6}.custom-form-wizard i.wizard-icon{font-size:20px;color:#279ad6}.custom-form-wizard .stepTitle{color:#279ad6}.input-group-btn{display:flex;align-items:center}.input-group-btn .v-input__slot{border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}.input-group-btn button{border-top-left-radius:0;border-bottom-left-radius:0;height:42px!important}.p-relative{position:relative!important}.p-absolute{position:absolute!important}.right-0{right:0}.top-0{top:0}.bottom-0{bottom:0}v-application a{color:#279ad6!important}.mb-60{margin-bottom:60px}.py-48{padding-top:48px;padding-bottom:48px}.mt-32{margin-top:32px}.mt--66{margin-top:-66px}.mw-0{min-width:0}.w-100{width:100%}.size-28{width:28px;height:28px}.min-vh-100{min-height:100vh}.w-200{width:200px}.mw-70{max-width:70px}*{font-size:14px}body,html{color:#2b3445;background-color:#fff}.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Touch */
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

const handleGesture = wrapper => {
  const {
    touchstartX,
    touchendX,
    touchstartY,
    touchendY
  } = wrapper;
  const dirRatio = 0.5;
  const minDistance = 16;
  wrapper.offsetX = touchendX - touchstartX;
  wrapper.offsetY = touchendY - touchstartY;
  if (Math.abs(wrapper.offsetY) < dirRatio * Math.abs(wrapper.offsetX)) {
    wrapper.left && touchendX < touchstartX - minDistance && wrapper.left(wrapper);
    wrapper.right && touchendX > touchstartX + minDistance && wrapper.right(wrapper);
  }
  if (Math.abs(wrapper.offsetX) < dirRatio * Math.abs(wrapper.offsetY)) {
    wrapper.up && touchendY < touchstartY - minDistance && wrapper.up(wrapper);
    wrapper.down && touchendY > touchstartY + minDistance && wrapper.down(wrapper);
  }
};
function touchstart(event, wrapper) {
  const touch = event.changedTouches[0];
  wrapper.touchstartX = touch.clientX;
  wrapper.touchstartY = touch.clientY;
  wrapper.start && wrapper.start(Object.assign(event, wrapper));
}
function touchend(event, wrapper) {
  const touch = event.changedTouches[0];
  wrapper.touchendX = touch.clientX;
  wrapper.touchendY = touch.clientY;
  wrapper.end && wrapper.end(Object.assign(event, wrapper));
  handleGesture(wrapper);
}
function touchmove(event, wrapper) {
  const touch = event.changedTouches[0];
  wrapper.touchmoveX = touch.clientX;
  wrapper.touchmoveY = touch.clientY;
  wrapper.move && wrapper.move(Object.assign(event, wrapper));
}
function createHandlers(value) {
  const wrapper = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: value.left,
    right: value.right,
    up: value.up,
    down: value.down,
    start: value.start,
    move: value.move,
    end: value.end
  };
  return {
    touchstart: e => touchstart(e, wrapper),
    touchend: e => touchend(e, wrapper),
    touchmove: e => touchmove(e, wrapper)
  };
}
function inserted(el, binding, vnode) {
  const value = binding.value;
  const target = value.parent ? el.parentElement : el;
  const options = value.options || {
    passive: true
  }; // Needed to pass unit tests

  if (!target) return;
  const handlers = createHandlers(binding.value);
  target._touchHandlers = Object(target._touchHandlers);
  target._touchHandlers[vnode.context._uid] = handlers;
  Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__[/* keys */ "x"])(handlers).forEach(eventName => {
    target.addEventListener(eventName, handlers[eventName], options);
  });
}
function unbind(el, binding, vnode) {
  const target = binding.value.parent ? el.parentElement : el;
  if (!target || !target._touchHandlers) return;
  const handlers = target._touchHandlers[vnode.context._uid];
  Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__[/* keys */ "x"])(handlers).forEach(eventName => {
    target.removeEventListener(eventName, handlers[eventName]);
  });
  delete target._touchHandlers[vnode.context._uid];
}
const Touch = {
  inserted,
  unbind
};
/* harmony default export */ __webpack_exports__["a"] = (Touch);

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(240);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("057220c7", content, true, context)
};

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VWindow_VWindow_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(224);
/* harmony import */ var _src_components_VWindow_VWindow_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VWindow_VWindow_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(221);
/* harmony import */ var _VBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/* harmony import */ var _VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
// Styles
 // Directives

 // Components




/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_4__[/* BaseItemGroup */ "a"].extend({
  name: 'v-window',
  directives: {
    Touch: _directives_touch__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
  },
  provide() {
    return {
      windowGroup: this
    };
  },
  props: {
    activeClass: {
      type: String,
      default: 'v-window-item--active'
    },
    continuous: Boolean,
    mandatory: {
      type: Boolean,
      default: true
    },
    nextIcon: {
      type: [Boolean, String],
      default: '$next'
    },
    prevIcon: {
      type: [Boolean, String],
      default: '$prev'
    },
    reverse: Boolean,
    showArrows: Boolean,
    showArrowsOnHover: Boolean,
    touch: Object,
    touchless: Boolean,
    value: {
      required: false
    },
    vertical: Boolean
  },
  data() {
    return {
      changedByDelimiters: false,
      internalHeight: undefined,
      transitionHeight: undefined,
      transitionCount: 0,
      isBooted: false,
      isReverse: false
    };
  },
  computed: {
    isActive() {
      return this.transitionCount > 0;
    },
    classes() {
      return {
        ..._VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_4__[/* BaseItemGroup */ "a"].options.computed.classes.call(this),
        'v-window--show-arrows-on-hover': this.showArrowsOnHover
      };
    },
    computedTransition() {
      if (!this.isBooted) return '';
      const axis = this.vertical ? 'y' : 'x';
      const reverse = this.internalReverse ? !this.isReverse : this.isReverse;
      const direction = reverse ? '-reverse' : '';
      return `v-window-${axis}${direction}-transition`;
    },
    hasActiveItems() {
      return Boolean(this.items.find(item => !item.disabled));
    },
    hasNext() {
      return this.continuous || this.internalIndex < this.items.length - 1;
    },
    hasPrev() {
      return this.continuous || this.internalIndex > 0;
    },
    internalIndex() {
      return this.items.findIndex((item, i) => {
        return this.internalValue === this.getValue(item, i);
      });
    },
    internalReverse() {
      return this.$vuetify.rtl ? !this.reverse : this.reverse;
    }
  },
  watch: {
    internalIndex(val, oldVal) {
      this.isReverse = this.updateReverse(val, oldVal);
    }
  },
  mounted() {
    window.requestAnimationFrame(() => this.isBooted = true);
  },
  methods: {
    genDefaultSlot() {
      return this.$slots.default;
    },
    genContainer() {
      const children = [this.genDefaultSlot()];
      if (this.showArrows) {
        children.push(this.genControlIcons());
      }
      return this.$createElement('div', {
        staticClass: 'v-window__container',
        class: {
          'v-window__container--is-active': this.isActive
        },
        style: {
          height: this.internalHeight || this.transitionHeight
        }
      }, children);
    },
    genIcon(direction, icon, click) {
      var _a, _b, _c;
      const on = {
        click: e => {
          e.stopPropagation();
          this.changedByDelimiters = true;
          click();
        }
      };
      const attrs = {
        'aria-label': this.$vuetify.lang.t(`$vuetify.carousel.${direction}`)
      };
      const children = (_c = (_b = (_a = this.$scopedSlots)[direction]) === null || _b === void 0 ? void 0 : _b.call(_a, {
        on,
        attrs
      })) !== null && _c !== void 0 ? _c : [this.$createElement(_VBtn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        props: {
          icon: true
        },
        attrs,
        on
      }, [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        props: {
          large: true
        }
      }, icon)])];
      return this.$createElement('div', {
        staticClass: `v-window__${direction}`
      }, children);
    },
    genControlIcons() {
      const icons = [];
      const prevIcon = this.$vuetify.rtl ? this.nextIcon : this.prevIcon;
      /* istanbul ignore else */

      if (this.hasPrev && prevIcon && typeof prevIcon === 'string') {
        const icon = this.genIcon('prev', prevIcon, this.prev);
        icon && icons.push(icon);
      }
      const nextIcon = this.$vuetify.rtl ? this.prevIcon : this.nextIcon;
      /* istanbul ignore else */

      if (this.hasNext && nextIcon && typeof nextIcon === 'string') {
        const icon = this.genIcon('next', nextIcon, this.next);
        icon && icons.push(icon);
      }
      return icons;
    },
    getNextIndex(index) {
      const nextIndex = (index + 1) % this.items.length;
      const item = this.items[nextIndex];
      if (item.disabled) return this.getNextIndex(nextIndex);
      return nextIndex;
    },
    getPrevIndex(index) {
      const prevIndex = (index + this.items.length - 1) % this.items.length;
      const item = this.items[prevIndex];
      if (item.disabled) return this.getPrevIndex(prevIndex);
      return prevIndex;
    },
    next() {
      /* istanbul ignore if */
      if (!this.hasActiveItems || !this.hasNext) return;
      const nextIndex = this.getNextIndex(this.internalIndex);
      const item = this.items[nextIndex];
      this.internalValue = this.getValue(item, nextIndex);
    },
    prev() {
      /* istanbul ignore if */
      if (!this.hasActiveItems || !this.hasPrev) return;
      const lastIndex = this.getPrevIndex(this.internalIndex);
      const item = this.items[lastIndex];
      this.internalValue = this.getValue(item, lastIndex);
    },
    updateReverse(val, oldVal) {
      const itemsLength = this.items.length;
      const lastIndex = itemsLength - 1;
      if (itemsLength <= 2) return val < oldVal;
      if (val === lastIndex && oldVal === 0) {
        return true;
      } else if (val === 0 && oldVal === lastIndex) {
        return false;
      } else {
        return val < oldVal;
      }
    }
  },
  render(h) {
    const data = {
      staticClass: 'v-window',
      class: this.classes,
      directives: []
    };
    if (!this.touchless) {
      const value = this.touch || {
        left: () => {
          this.$vuetify.rtl ? this.prev() : this.next();
        },
        right: () => {
          this.$vuetify.rtl ? this.next() : this.prev();
        },
        end: e => {
          e.stopPropagation();
        },
        start: e => {
          e.stopPropagation();
        }
      };
      data.directives.push({
        name: 'touch',
        value
      });
    }
    return h('div', data, [this.genContainer()]);
  }
}));

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(225);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("0d135400", content, true)

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bg-primary-lighten{background-color:#fce9ec!important}.text-primary-lighten{color:#fce9ec}.bg-body{background-color:#f6f9fc}.footer-text{color:#bdbdbd}.border-primary{border:1px solid #279ad6!important}.bg-white{background-color:#fff}a{color:#279ad6!important}h1{font-size:30px}h2{font-size:25px}h3{font-size:20px}h4{font-size:17px}.text-14,h5{font-size:14px}.text-16{font-size:16px}.text-sm{font-size:12px}.text-11{font-size:11px!important}.text-10{font-size:10px}.text-30{font-size:30px}.text-40{font-size:40px}.text-tiny{font-size:10px}.display-1{font-size:80px}.show-2{font-size:66px}@media(max-width:992px){.show-2{font-size:15px!important}}.show-3{line-height:1.2;font-size:50px!important}@media(max-width:600px){.show-3{font-size:30px!important}}@media(max-width:400px){.show-3{font-size:15px!important}}@media(max-width:992px){.banner-text{font-size:12px!important}}.shadow-sm{box-shadow:0 1px 3px rgba(3,0,71,.09)!important}.shadow{box-shadow:0 4px 16px rgba(43,52,69,.1)!important}.shadow-lg{box-shadow:0 8px 45px rgba(3,0,71,.09)!important}.font-600{font-weight:600}.ls-4{letter-spacing:4px}.leading-tight{line-height:1.25}.container-lg{max-width:1200px}.flex-1{flex:1}.cursor-pointer{cursor:pointer}.w-33{width:33.33%}.border-grey{border:1px solid #dae1e7}.z-0{z-index:0}.z-1{z-index:1}.z-10{z-index:10}.br-8{border-radius:8px!important}.br-12{border-radius:12px!important}.h-100{height:100%}.border-4-white{border:4px solid #fff}.card-overlay-item{position:relative}.card-overlay-item:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;transition:all .25s ease-in-out 0s}.card-overlay-item:hover:after{background:rgba(0,0,0,.3);z-index:0;border-radius:8px;cursor:pointer}.top-search-bar .v-text-field__details{display:none!important}svg{fill:currentColor!important}svg.icon:focus,svg:focus{outline:none}.bb-primary{border-bottom:2px solid #279ad6}ul.navbar-nav li.nav-item{position:relative;z-index:10}ul.navbar-nav li.nav-item:hover ul{display:block}ul.navbar-nav li.nav-item>ul{position:absolute}ul.navbar-nav li.nav-item ul{top:100%;box-shadow:0 4px 16px rgba(43,52,69,.1);background-color:#fff;padding:5px 0;width:250px;max-width:250px;border-radius:8px;display:none}ul.navbar-nav li.nav-item ul li{position:relative;list-style-type:none}ul.navbar-nav li.nav-item ul li:hover{background-color:#f6f9fc}ul.navbar-nav li.nav-item ul li a{width:100%;color:#4b566b;padding:.5rem 1rem;display:flex}ul.navbar-nav li.nav-item ul li:hover .navbar-submenu{display:block}ul.navbar-nav li.nav-item ul li .navbar-submenu{position:absolute;left:100%;top:0;display:none;width:100%;z-index:10;padding-left:1rem}ul.navigation-navbar .nav-item .nav-link{color:#0f3460}ul.navigation-navbar .nav-item .nav-link.active,ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}.hero-section-bg ul.navigation-navbar .nav-item .nav-link{color:#fff}.hero-section-bg ul.navigation-navbar .nav-item .nav-link.active,.hero-section-bg ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}ul.navbar-nav li.nav-item{list-style:none;margin-right:2rem!important}ul.navbar-nav li.nav-item:last-child{margin-right:0!important}ul.navbar-nav li.nav-item a{text-decoration:none}.router-link-active{color:#279ad6}.vuetify-carousel .v-carousel__controls .v-item-group button{color:#0f3460}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.5!important}.slick-next.slick-top-next-btn{top:-40px;right:0}.slick-next:before{opacity:0!important}@media(max-width:992px){.slick-next{right:5px!important}}.slick-prev{position:absolute;z-index:2}.slick-prev.slick-top-prev-btn{top:-40px;left:calc(100% - 105px)}@media(max-width:992px){.slick-prev.slick-top-prev-btn{left:calc(100% - 105px)!important}}.slick-prev:before{opacity:0!important}@media(max-width:992px){.slick-prev{left:5px!important}}.slick-dots{bottom:0!important}.slick-dots li button:before{font-size:16px!important}.slick-dots li.slick-active button:before,.slick-dots li:hover button:before{color:#0f3460!important;opacity:1!important}@media(max-width:375px){.slick-header-top-title{width:200px}}.slick-left-arrow{position:absolute;left:0!important}.slick-right-arrow{position:absolute;right:0!important}.slick-button-hover:hover .slick-arrow{display:block}.slick-button-hover .slick-arrow{display:none}.icon{width:24px;height:24px}.avatar-64{width:64px;height:auto}.brand-tabs .v-tabs-slider-wrapper{display:none}.box-wrapper{position:relative;display:flex;align-items:flex-start;width:100%;border-radius:8px}@media(max-width:959px){.box-wrapper .box-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99;background-color:rgba(0,0,0,.5);display:none}.box-wrapper .box-overlay.open{display:block}}.box-wrapper.box-wrapper-version-2 .box-sidebar{border-radius:0}.box-wrapper .box-sidebar{width:282px;background-color:#fff;border-radius:8px;transition:all .3s ease}@media(max-width:959px){.box-wrapper .box-sidebar{position:fixed;top:0;left:-282px;border-radius:0;z-index:99;overflow-y:scroll;height:calc(100% - 56px)}.box-wrapper .box-sidebar.open{left:0}}.box-wrapper .box-content{width:calc(100% - 300px);margin-left:auto;border-radius:8px}@media(max-width:959px){.box-wrapper .box-content{width:100%}}.custom-form-wizard.vue-form-wizard.md .wizard-icon-circle{width:96px!important;height:36px!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{top:23px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.square_shape,.custom-form-wizard.vue-form-wizard .wizard-icon-circle .wizard-icon-container.square_shape,.custom-form-wizard .vue-form-wizard .wizard-icon-circle .wizard-icon-container.tab_shape{border-radius:20px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle{border:none!important;border-radius:50%;font-weight:600;background-color:#ffe1e6!important;position:relative}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked{background-color:#279ad6!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked i{color:#fff!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{background-color:#ffe1e6}.custom-form-wizard i.wizard-icon{font-size:20px;color:#279ad6}.custom-form-wizard .stepTitle{color:#279ad6}.input-group-btn{display:flex;align-items:center}.input-group-btn .v-input__slot{border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}.input-group-btn button{border-top-left-radius:0;border-bottom-left-radius:0;height:42px!important}.p-relative{position:relative!important}.p-absolute{position:absolute!important}.right-0{right:0}.top-0{top:0}.bottom-0{bottom:0}v-application a{color:#279ad6!important}.mb-60{margin-bottom:60px}.py-48{padding-top:48px;padding-bottom:48px}.mt-32{margin-top:32px}.mt--66{margin-top:-66px}.mw-0{min-width:0}.w-100{width:100%}.size-28{width:28px;height:28px}.min-vh-100{min-height:100vh}.w-200{width:200px}.mw-70{max-width:70px}*{font-size:14px}body,html{color:#2b3445;background-color:#fff}.v-window{overflow:hidden}.v-window__container{display:flex;flex-direction:column;height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window__container--is-active{overflow:hidden}.v-window__next,.v-window__prev{background:rgba(0,0,0,.3);border-radius:50%;position:absolute;margin:0 16px;top:calc(50% - 20px);z-index:1}.v-window__next .v-btn:hover,.v-window__prev .v-btn:hover{background:none}.v-application--is-ltr .v-window__prev{left:0}.v-application--is-ltr .v-window__next,.v-application--is-rtl .v-window__prev{right:0}.v-application--is-rtl .v-window__next{left:0}.v-window--show-arrows-on-hover{overflow:hidden}.v-window--show-arrows-on-hover .v-window__next,.v-window--show-arrows-on-hover .v-window__prev{transition:transform .2s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(-200%)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__next,.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(200%)}.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__next{transform:translateX(-200%)}.v-window--show-arrows-on-hover:hover .v-window__next,.v-window--show-arrows-on-hover:hover .v-window__prev{transform:translateX(0)}.v-window-x-reverse-transition-enter-active,.v-window-x-reverse-transition-leave-active,.v-window-x-transition-enter-active,.v-window-x-transition-leave-active,.v-window-y-reverse-transition-enter-active,.v-window-y-reverse-transition-leave-active,.v-window-y-transition-enter-active,.v-window-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window-x-reverse-transition-leave,.v-window-x-reverse-transition-leave-to,.v-window-x-transition-leave,.v-window-x-transition-leave-to,.v-window-y-reverse-transition-leave,.v-window-y-reverse-transition-leave-to,.v-window-y-transition-leave,.v-window-y-transition-leave-to{position:absolute!important;top:0;width:100%}.v-window-x-transition-enter{transform:translateX(100%)}.v-window-x-reverse-transition-enter,.v-window-x-transition-leave-to{transform:translateX(-100%)}.v-window-x-reverse-transition-leave-to{transform:translateX(100%)}.v-window-y-transition-enter{transform:translateY(100%)}.v-window-y-reverse-transition-enter,.v-window-y-transition-leave-to{transform:translateY(-100%)}.v-window-y-reverse-transition-leave-to{transform:translateY(100%)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_bootable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _mixins_groupable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(221);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
// Mixins

 // Directives

 // Utilities



const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_mixins_bootable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], Object(_mixins_groupable__WEBPACK_IMPORTED_MODULE_1__[/* factory */ "a"])('windowGroup', 'v-window-item', 'v-window'));
/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend().extend().extend({
  name: 'v-window-item',
  directives: {
    Touch: _directives_touch__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
  },
  props: {
    disabled: Boolean,
    reverseTransition: {
      type: [Boolean, String],
      default: undefined
    },
    transition: {
      type: [Boolean, String],
      default: undefined
    },
    value: {
      required: false
    }
  },
  data() {
    return {
      isActive: false,
      inTransition: false
    };
  },
  computed: {
    classes() {
      return this.groupClasses;
    },
    computedTransition() {
      if (!this.windowGroup.internalReverse) {
        return typeof this.transition !== 'undefined' ? this.transition || '' : this.windowGroup.computedTransition;
      }
      return typeof this.reverseTransition !== 'undefined' ? this.reverseTransition || '' : this.windowGroup.computedTransition;
    }
  },
  methods: {
    genDefaultSlot() {
      return this.$slots.default;
    },
    genWindowItem() {
      return this.$createElement('div', {
        staticClass: 'v-window-item',
        class: this.classes,
        directives: [{
          name: 'show',
          value: this.isActive
        }],
        on: this.$listeners
      }, this.genDefaultSlot());
    },
    onAfterTransition() {
      if (!this.inTransition) {
        return;
      } // Finalize transition state.

      this.inTransition = false;
      if (this.windowGroup.transitionCount > 0) {
        this.windowGroup.transitionCount--; // Remove container height if we are out of transition.

        if (this.windowGroup.transitionCount === 0) {
          this.windowGroup.transitionHeight = undefined;
        }
      }
    },
    onBeforeTransition() {
      if (this.inTransition) {
        return;
      } // Initialize transition state here.

      this.inTransition = true;
      if (this.windowGroup.transitionCount === 0) {
        // Set initial height for height transition.
        this.windowGroup.transitionHeight = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* convertToUnit */ "h"])(this.windowGroup.$el.clientHeight);
      }
      this.windowGroup.transitionCount++;
    },
    onTransitionCancelled() {
      this.onAfterTransition(); // This should have the same path as normal transition end.
    },

    onEnter(el) {
      if (!this.inTransition) {
        return;
      }
      this.$nextTick(() => {
        // Do not set height if no transition or cancelled.
        if (!this.computedTransition || !this.inTransition) {
          return;
        } // Set transition target height.

        this.windowGroup.transitionHeight = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* convertToUnit */ "h"])(el.clientHeight);
      });
    }
  },
  render(h) {
    return h('transition', {
      props: {
        name: this.computedTransition
      },
      on: {
        // Handlers for enter windows.
        beforeEnter: this.onBeforeTransition,
        afterEnter: this.onAfterTransition,
        enterCancelled: this.onTransitionCancelled,
        // Handlers for leave windows.
        beforeLeave: this.onBeforeTransition,
        afterLeave: this.onAfterTransition,
        leaveCancelled: this.onTransitionCancelled,
        // Enter handler for height transition.
        enter: this.onEnter
      }
    }, this.showLazyContent(() => [this.genWindowItem()]));
  }
}));

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(228);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("5939d713", content, true)

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bg-primary-lighten{background-color:#fce9ec!important}.text-primary-lighten{color:#fce9ec}.bg-body{background-color:#f6f9fc}.footer-text{color:#bdbdbd}.border-primary{border:1px solid #279ad6!important}.bg-white{background-color:#fff}a{color:#279ad6!important}h1{font-size:30px}h2{font-size:25px}h3{font-size:20px}h4{font-size:17px}.text-14,h5{font-size:14px}.text-16{font-size:16px}.text-sm{font-size:12px}.text-11{font-size:11px!important}.text-10{font-size:10px}.text-30{font-size:30px}.text-40{font-size:40px}.text-tiny{font-size:10px}.display-1{font-size:80px}.show-2{font-size:66px}@media(max-width:992px){.show-2{font-size:15px!important}}.show-3{line-height:1.2;font-size:50px!important}@media(max-width:600px){.show-3{font-size:30px!important}}@media(max-width:400px){.show-3{font-size:15px!important}}@media(max-width:992px){.banner-text{font-size:12px!important}}.shadow-sm{box-shadow:0 1px 3px rgba(3,0,71,.09)!important}.shadow{box-shadow:0 4px 16px rgba(43,52,69,.1)!important}.shadow-lg{box-shadow:0 8px 45px rgba(3,0,71,.09)!important}.font-600{font-weight:600}.ls-4{letter-spacing:4px}.leading-tight{line-height:1.25}.container-lg{max-width:1200px}.flex-1{flex:1}.cursor-pointer{cursor:pointer}.w-33{width:33.33%}.border-grey{border:1px solid #dae1e7}.z-0{z-index:0}.z-1{z-index:1}.z-10{z-index:10}.br-8{border-radius:8px!important}.br-12{border-radius:12px!important}.h-100{height:100%}.border-4-white{border:4px solid #fff}.card-overlay-item{position:relative}.card-overlay-item:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;transition:all .25s ease-in-out 0s}.card-overlay-item:hover:after{background:rgba(0,0,0,.3);z-index:0;border-radius:8px;cursor:pointer}.top-search-bar .v-text-field__details{display:none!important}svg{fill:currentColor!important}svg.icon:focus,svg:focus{outline:none}.bb-primary{border-bottom:2px solid #279ad6}ul.navbar-nav li.nav-item{position:relative;z-index:10}ul.navbar-nav li.nav-item:hover ul{display:block}ul.navbar-nav li.nav-item>ul{position:absolute}ul.navbar-nav li.nav-item ul{top:100%;box-shadow:0 4px 16px rgba(43,52,69,.1);background-color:#fff;padding:5px 0;width:250px;max-width:250px;border-radius:8px;display:none}ul.navbar-nav li.nav-item ul li{position:relative;list-style-type:none}ul.navbar-nav li.nav-item ul li:hover{background-color:#f6f9fc}ul.navbar-nav li.nav-item ul li a{width:100%;color:#4b566b;padding:.5rem 1rem;display:flex}ul.navbar-nav li.nav-item ul li:hover .navbar-submenu{display:block}ul.navbar-nav li.nav-item ul li .navbar-submenu{position:absolute;left:100%;top:0;display:none;width:100%;z-index:10;padding-left:1rem}ul.navigation-navbar .nav-item .nav-link{color:#0f3460}ul.navigation-navbar .nav-item .nav-link.active,ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}.hero-section-bg ul.navigation-navbar .nav-item .nav-link{color:#fff}.hero-section-bg ul.navigation-navbar .nav-item .nav-link.active,.hero-section-bg ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}ul.navbar-nav li.nav-item{list-style:none;margin-right:2rem!important}ul.navbar-nav li.nav-item:last-child{margin-right:0!important}ul.navbar-nav li.nav-item a{text-decoration:none}.router-link-active{color:#279ad6}.vuetify-carousel .v-carousel__controls .v-item-group button{color:#0f3460}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.5!important}.slick-next.slick-top-next-btn{top:-40px;right:0}.slick-next:before{opacity:0!important}@media(max-width:992px){.slick-next{right:5px!important}}.slick-prev{position:absolute;z-index:2}.slick-prev.slick-top-prev-btn{top:-40px;left:calc(100% - 105px)}@media(max-width:992px){.slick-prev.slick-top-prev-btn{left:calc(100% - 105px)!important}}.slick-prev:before{opacity:0!important}@media(max-width:992px){.slick-prev{left:5px!important}}.slick-dots{bottom:0!important}.slick-dots li button:before{font-size:16px!important}.slick-dots li.slick-active button:before,.slick-dots li:hover button:before{color:#0f3460!important;opacity:1!important}@media(max-width:375px){.slick-header-top-title{width:200px}}.slick-left-arrow{position:absolute;left:0!important}.slick-right-arrow{position:absolute;right:0!important}.slick-button-hover:hover .slick-arrow{display:block}.slick-button-hover .slick-arrow{display:none}.icon{width:24px;height:24px}.avatar-64{width:64px;height:auto}.brand-tabs .v-tabs-slider-wrapper{display:none}.box-wrapper{position:relative;display:flex;align-items:flex-start;width:100%;border-radius:8px}@media(max-width:959px){.box-wrapper .box-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99;background-color:rgba(0,0,0,.5);display:none}.box-wrapper .box-overlay.open{display:block}}.box-wrapper.box-wrapper-version-2 .box-sidebar{border-radius:0}.box-wrapper .box-sidebar{width:282px;background-color:#fff;border-radius:8px;transition:all .3s ease}@media(max-width:959px){.box-wrapper .box-sidebar{position:fixed;top:0;left:-282px;border-radius:0;z-index:99;overflow-y:scroll;height:calc(100% - 56px)}.box-wrapper .box-sidebar.open{left:0}}.box-wrapper .box-content{width:calc(100% - 300px);margin-left:auto;border-radius:8px}@media(max-width:959px){.box-wrapper .box-content{width:100%}}.custom-form-wizard.vue-form-wizard.md .wizard-icon-circle{width:96px!important;height:36px!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{top:23px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.square_shape,.custom-form-wizard.vue-form-wizard .wizard-icon-circle .wizard-icon-container.square_shape,.custom-form-wizard .vue-form-wizard .wizard-icon-circle .wizard-icon-container.tab_shape{border-radius:20px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle{border:none!important;border-radius:50%;font-weight:600;background-color:#ffe1e6!important;position:relative}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked{background-color:#279ad6!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked i{color:#fff!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{background-color:#ffe1e6}.custom-form-wizard i.wizard-icon{font-size:20px;color:#279ad6}.custom-form-wizard .stepTitle{color:#279ad6}.input-group-btn{display:flex;align-items:center}.input-group-btn .v-input__slot{border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}.input-group-btn button{border-top-left-radius:0;border-bottom-left-radius:0;height:42px!important}.p-relative{position:relative!important}.p-absolute{position:absolute!important}.right-0{right:0}.top-0{top:0}.bottom-0{bottom:0}v-application a{color:#279ad6!important}.mb-60{margin-bottom:60px}.py-48{padding-top:48px;padding-bottom:48px}.mt-32{margin-top:32px}.mt--66{margin-top:-66px}.mw-0{min-width:0}.w-100{width:100%}.size-28{width:28px;height:28px}.min-vh-100{min-height:100vh}.w-200{width:200px}.mw-70{max-width:70px}*{font-size:14px}body,html{color:#2b3445;background-color:#fff}.v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{padding:.5rem;border-radius:50%;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none}.v-rating .v-icon:after{display:none}.v-application--is-ltr .v-rating .v-icon{transform:scaleX(1)}.v-application--is-rtl .v-rating .v-icon{transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 229 */,
/* 230 */,
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(232);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("2d62e390", content, true)

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bg-primary-lighten{background-color:#fce9ec!important}.text-primary-lighten{color:#fce9ec}.bg-body{background-color:#f6f9fc}.footer-text{color:#bdbdbd}.border-primary{border:1px solid #279ad6!important}.bg-white{background-color:#fff}a{color:#279ad6!important}h1{font-size:30px}h2{font-size:25px}h3{font-size:20px}h4{font-size:17px}.text-14,h5{font-size:14px}.text-16{font-size:16px}.text-sm{font-size:12px}.text-11{font-size:11px!important}.text-10{font-size:10px}.text-30{font-size:30px}.text-40{font-size:40px}.text-tiny{font-size:10px}.display-1{font-size:80px}.show-2{font-size:66px}@media(max-width:992px){.show-2{font-size:15px!important}}.show-3{line-height:1.2;font-size:50px!important}@media(max-width:600px){.show-3{font-size:30px!important}}@media(max-width:400px){.show-3{font-size:15px!important}}@media(max-width:992px){.banner-text{font-size:12px!important}}.shadow-sm{box-shadow:0 1px 3px rgba(3,0,71,.09)!important}.shadow{box-shadow:0 4px 16px rgba(43,52,69,.1)!important}.shadow-lg{box-shadow:0 8px 45px rgba(3,0,71,.09)!important}.font-600{font-weight:600}.ls-4{letter-spacing:4px}.leading-tight{line-height:1.25}.container-lg{max-width:1200px}.flex-1{flex:1}.cursor-pointer{cursor:pointer}.w-33{width:33.33%}.border-grey{border:1px solid #dae1e7}.z-0{z-index:0}.z-1{z-index:1}.z-10{z-index:10}.br-8{border-radius:8px!important}.br-12{border-radius:12px!important}.h-100{height:100%}.border-4-white{border:4px solid #fff}.card-overlay-item{position:relative}.card-overlay-item:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;transition:all .25s ease-in-out 0s}.card-overlay-item:hover:after{background:rgba(0,0,0,.3);z-index:0;border-radius:8px;cursor:pointer}.top-search-bar .v-text-field__details{display:none!important}svg{fill:currentColor!important}svg.icon:focus,svg:focus{outline:none}.bb-primary{border-bottom:2px solid #279ad6}ul.navbar-nav li.nav-item{position:relative;z-index:10}ul.navbar-nav li.nav-item:hover ul{display:block}ul.navbar-nav li.nav-item>ul{position:absolute}ul.navbar-nav li.nav-item ul{top:100%;box-shadow:0 4px 16px rgba(43,52,69,.1);background-color:#fff;padding:5px 0;width:250px;max-width:250px;border-radius:8px;display:none}ul.navbar-nav li.nav-item ul li{position:relative;list-style-type:none}ul.navbar-nav li.nav-item ul li:hover{background-color:#f6f9fc}ul.navbar-nav li.nav-item ul li a{width:100%;color:#4b566b;padding:.5rem 1rem;display:flex}ul.navbar-nav li.nav-item ul li:hover .navbar-submenu{display:block}ul.navbar-nav li.nav-item ul li .navbar-submenu{position:absolute;left:100%;top:0;display:none;width:100%;z-index:10;padding-left:1rem}ul.navigation-navbar .nav-item .nav-link{color:#0f3460}ul.navigation-navbar .nav-item .nav-link.active,ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}.hero-section-bg ul.navigation-navbar .nav-item .nav-link{color:#fff}.hero-section-bg ul.navigation-navbar .nav-item .nav-link.active,.hero-section-bg ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}ul.navbar-nav li.nav-item{list-style:none;margin-right:2rem!important}ul.navbar-nav li.nav-item:last-child{margin-right:0!important}ul.navbar-nav li.nav-item a{text-decoration:none}.router-link-active{color:#279ad6}.vuetify-carousel .v-carousel__controls .v-item-group button{color:#0f3460}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.5!important}.slick-next.slick-top-next-btn{top:-40px;right:0}.slick-next:before{opacity:0!important}@media(max-width:992px){.slick-next{right:5px!important}}.slick-prev{position:absolute;z-index:2}.slick-prev.slick-top-prev-btn{top:-40px;left:calc(100% - 105px)}@media(max-width:992px){.slick-prev.slick-top-prev-btn{left:calc(100% - 105px)!important}}.slick-prev:before{opacity:0!important}@media(max-width:992px){.slick-prev{left:5px!important}}.slick-dots{bottom:0!important}.slick-dots li button:before{font-size:16px!important}.slick-dots li.slick-active button:before,.slick-dots li:hover button:before{color:#0f3460!important;opacity:1!important}@media(max-width:375px){.slick-header-top-title{width:200px}}.slick-left-arrow{position:absolute;left:0!important}.slick-right-arrow{position:absolute;right:0!important}.slick-button-hover:hover .slick-arrow{display:block}.slick-button-hover .slick-arrow{display:none}.icon{width:24px;height:24px}.avatar-64{width:64px;height:auto}.brand-tabs .v-tabs-slider-wrapper{display:none}.box-wrapper{position:relative;display:flex;align-items:flex-start;width:100%;border-radius:8px}@media(max-width:959px){.box-wrapper .box-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99;background-color:rgba(0,0,0,.5);display:none}.box-wrapper .box-overlay.open{display:block}}.box-wrapper.box-wrapper-version-2 .box-sidebar{border-radius:0}.box-wrapper .box-sidebar{width:282px;background-color:#fff;border-radius:8px;transition:all .3s ease}@media(max-width:959px){.box-wrapper .box-sidebar{position:fixed;top:0;left:-282px;border-radius:0;z-index:99;overflow-y:scroll;height:calc(100% - 56px)}.box-wrapper .box-sidebar.open{left:0}}.box-wrapper .box-content{width:calc(100% - 300px);margin-left:auto;border-radius:8px}@media(max-width:959px){.box-wrapper .box-content{width:100%}}.custom-form-wizard.vue-form-wizard.md .wizard-icon-circle{width:96px!important;height:36px!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{top:23px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.square_shape,.custom-form-wizard.vue-form-wizard .wizard-icon-circle .wizard-icon-container.square_shape,.custom-form-wizard .vue-form-wizard .wizard-icon-circle .wizard-icon-container.tab_shape{border-radius:20px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle{border:none!important;border-radius:50%;font-weight:600;background-color:#ffe1e6!important;position:relative}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked{background-color:#279ad6!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked i{color:#fff!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{background-color:#ffe1e6}.custom-form-wizard i.wizard-icon{font-size:20px;color:#279ad6}.custom-form-wizard .stepTitle{color:#279ad6}.input-group-btn{display:flex;align-items:center}.input-group-btn .v-input__slot{border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}.input-group-btn button{border-top-left-radius:0;border-bottom-left-radius:0;height:42px!important}.p-relative{position:relative!important}.p-absolute{position:absolute!important}.right-0{right:0}.top-0{top:0}.bottom-0{bottom:0}v-application a{color:#279ad6!important}.mb-60{margin-bottom:60px}.py-48{padding-top:48px;padding-bottom:48px}.mt-32{margin-top:32px}.mt--66{margin-top:-66px}.mw-0{min-width:0}.w-100{width:100%}.size-28{width:28px;height:28px}.min-vh-100{min-height:100vh}.w-200{width:200px}.mw-70{max-width:70px}*{font-size:14px}body,html{color:#2b3445;background-color:#fff}.v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(234);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("197fcea4", content, true)

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bg-primary-lighten{background-color:#fce9ec!important}.text-primary-lighten{color:#fce9ec}.bg-body{background-color:#f6f9fc}.footer-text{color:#bdbdbd}.border-primary{border:1px solid #279ad6!important}.bg-white{background-color:#fff}a{color:#279ad6!important}h1{font-size:30px}h2{font-size:25px}h3{font-size:20px}h4{font-size:17px}.text-14,h5{font-size:14px}.text-16{font-size:16px}.text-sm{font-size:12px}.text-11{font-size:11px!important}.text-10{font-size:10px}.text-30{font-size:30px}.text-40{font-size:40px}.text-tiny{font-size:10px}.display-1{font-size:80px}.show-2{font-size:66px}@media(max-width:992px){.show-2{font-size:15px!important}}.show-3{line-height:1.2;font-size:50px!important}@media(max-width:600px){.show-3{font-size:30px!important}}@media(max-width:400px){.show-3{font-size:15px!important}}@media(max-width:992px){.banner-text{font-size:12px!important}}.shadow-sm{box-shadow:0 1px 3px rgba(3,0,71,.09)!important}.shadow{box-shadow:0 4px 16px rgba(43,52,69,.1)!important}.shadow-lg{box-shadow:0 8px 45px rgba(3,0,71,.09)!important}.font-600{font-weight:600}.ls-4{letter-spacing:4px}.leading-tight{line-height:1.25}.container-lg{max-width:1200px}.flex-1{flex:1}.cursor-pointer{cursor:pointer}.w-33{width:33.33%}.border-grey{border:1px solid #dae1e7}.z-0{z-index:0}.z-1{z-index:1}.z-10{z-index:10}.br-8{border-radius:8px!important}.br-12{border-radius:12px!important}.h-100{height:100%}.border-4-white{border:4px solid #fff}.card-overlay-item{position:relative}.card-overlay-item:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;transition:all .25s ease-in-out 0s}.card-overlay-item:hover:after{background:rgba(0,0,0,.3);z-index:0;border-radius:8px;cursor:pointer}.top-search-bar .v-text-field__details{display:none!important}svg{fill:currentColor!important}svg.icon:focus,svg:focus{outline:none}.bb-primary{border-bottom:2px solid #279ad6}ul.navbar-nav li.nav-item{position:relative;z-index:10}ul.navbar-nav li.nav-item:hover ul{display:block}ul.navbar-nav li.nav-item>ul{position:absolute}ul.navbar-nav li.nav-item ul{top:100%;box-shadow:0 4px 16px rgba(43,52,69,.1);background-color:#fff;padding:5px 0;width:250px;max-width:250px;border-radius:8px;display:none}ul.navbar-nav li.nav-item ul li{position:relative;list-style-type:none}ul.navbar-nav li.nav-item ul li:hover{background-color:#f6f9fc}ul.navbar-nav li.nav-item ul li a{width:100%;color:#4b566b;padding:.5rem 1rem;display:flex}ul.navbar-nav li.nav-item ul li:hover .navbar-submenu{display:block}ul.navbar-nav li.nav-item ul li .navbar-submenu{position:absolute;left:100%;top:0;display:none;width:100%;z-index:10;padding-left:1rem}ul.navigation-navbar .nav-item .nav-link{color:#0f3460}ul.navigation-navbar .nav-item .nav-link.active,ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}.hero-section-bg ul.navigation-navbar .nav-item .nav-link{color:#fff}.hero-section-bg ul.navigation-navbar .nav-item .nav-link.active,.hero-section-bg ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}ul.navbar-nav li.nav-item{list-style:none;margin-right:2rem!important}ul.navbar-nav li.nav-item:last-child{margin-right:0!important}ul.navbar-nav li.nav-item a{text-decoration:none}.router-link-active{color:#279ad6}.vuetify-carousel .v-carousel__controls .v-item-group button{color:#0f3460}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.5!important}.slick-next.slick-top-next-btn{top:-40px;right:0}.slick-next:before{opacity:0!important}@media(max-width:992px){.slick-next{right:5px!important}}.slick-prev{position:absolute;z-index:2}.slick-prev.slick-top-prev-btn{top:-40px;left:calc(100% - 105px)}@media(max-width:992px){.slick-prev.slick-top-prev-btn{left:calc(100% - 105px)!important}}.slick-prev:before{opacity:0!important}@media(max-width:992px){.slick-prev{left:5px!important}}.slick-dots{bottom:0!important}.slick-dots li button:before{font-size:16px!important}.slick-dots li.slick-active button:before,.slick-dots li:hover button:before{color:#0f3460!important;opacity:1!important}@media(max-width:375px){.slick-header-top-title{width:200px}}.slick-left-arrow{position:absolute;left:0!important}.slick-right-arrow{position:absolute;right:0!important}.slick-button-hover:hover .slick-arrow{display:block}.slick-button-hover .slick-arrow{display:none}.icon{width:24px;height:24px}.avatar-64{width:64px;height:auto}.brand-tabs .v-tabs-slider-wrapper{display:none}.box-wrapper{position:relative;display:flex;align-items:flex-start;width:100%;border-radius:8px}@media(max-width:959px){.box-wrapper .box-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99;background-color:rgba(0,0,0,.5);display:none}.box-wrapper .box-overlay.open{display:block}}.box-wrapper.box-wrapper-version-2 .box-sidebar{border-radius:0}.box-wrapper .box-sidebar{width:282px;background-color:#fff;border-radius:8px;transition:all .3s ease}@media(max-width:959px){.box-wrapper .box-sidebar{position:fixed;top:0;left:-282px;border-radius:0;z-index:99;overflow-y:scroll;height:calc(100% - 56px)}.box-wrapper .box-sidebar.open{left:0}}.box-wrapper .box-content{width:calc(100% - 300px);margin-left:auto;border-radius:8px}@media(max-width:959px){.box-wrapper .box-content{width:100%}}.custom-form-wizard.vue-form-wizard.md .wizard-icon-circle{width:96px!important;height:36px!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{top:23px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.square_shape,.custom-form-wizard.vue-form-wizard .wizard-icon-circle .wizard-icon-container.square_shape,.custom-form-wizard .vue-form-wizard .wizard-icon-circle .wizard-icon-container.tab_shape{border-radius:20px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle{border:none!important;border-radius:50%;font-weight:600;background-color:#ffe1e6!important;position:relative}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked{background-color:#279ad6!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked i{color:#fff!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{background-color:#ffe1e6}.custom-form-wizard i.wizard-icon{font-size:20px;color:#279ad6}.custom-form-wizard .stepTitle{color:#279ad6}.input-group-btn{display:flex;align-items:center}.input-group-btn .v-input__slot{border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}.input-group-btn button{border-top-left-radius:0;border-bottom-left-radius:0;height:42px!important}.p-relative{position:relative!important}.p-absolute{position:absolute!important}.right-0{right:0}.top-0{top:0}.bottom-0{bottom:0}v-application a{color:#279ad6!important}.mb-60{margin-bottom:60px}.py-48{padding-top:48px;padding-bottom:48px}.mt-32{margin-top:32px}.mt--66{margin-top:-66px}.mw-0{min-width:0}.w-100{width:100%}.size-28{width:28px;height:28px}.min-vh-100{min-height:100vh}.w-200{width:200px}.mw-70{max-width:70px}*{font-size:14px}body,html{color:#2b3445;background-color:#fff}.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:\"\";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(236);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("2065bca8", content, true)

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bg-primary-lighten{background-color:#fce9ec!important}.text-primary-lighten{color:#fce9ec}.bg-body{background-color:#f6f9fc}.footer-text{color:#bdbdbd}.border-primary{border:1px solid #279ad6!important}.bg-white{background-color:#fff}a{color:#279ad6!important}h1{font-size:30px}h2{font-size:25px}h3{font-size:20px}h4{font-size:17px}.text-14,h5{font-size:14px}.text-16{font-size:16px}.text-sm{font-size:12px}.text-11{font-size:11px!important}.text-10{font-size:10px}.text-30{font-size:30px}.text-40{font-size:40px}.text-tiny{font-size:10px}.display-1{font-size:80px}.show-2{font-size:66px}@media(max-width:992px){.show-2{font-size:15px!important}}.show-3{line-height:1.2;font-size:50px!important}@media(max-width:600px){.show-3{font-size:30px!important}}@media(max-width:400px){.show-3{font-size:15px!important}}@media(max-width:992px){.banner-text{font-size:12px!important}}.shadow-sm{box-shadow:0 1px 3px rgba(3,0,71,.09)!important}.shadow{box-shadow:0 4px 16px rgba(43,52,69,.1)!important}.shadow-lg{box-shadow:0 8px 45px rgba(3,0,71,.09)!important}.font-600{font-weight:600}.ls-4{letter-spacing:4px}.leading-tight{line-height:1.25}.container-lg{max-width:1200px}.flex-1{flex:1}.cursor-pointer{cursor:pointer}.w-33{width:33.33%}.border-grey{border:1px solid #dae1e7}.z-0{z-index:0}.z-1{z-index:1}.z-10{z-index:10}.br-8{border-radius:8px!important}.br-12{border-radius:12px!important}.h-100{height:100%}.border-4-white{border:4px solid #fff}.card-overlay-item{position:relative}.card-overlay-item:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;transition:all .25s ease-in-out 0s}.card-overlay-item:hover:after{background:rgba(0,0,0,.3);z-index:0;border-radius:8px;cursor:pointer}.top-search-bar .v-text-field__details{display:none!important}svg{fill:currentColor!important}svg.icon:focus,svg:focus{outline:none}.bb-primary{border-bottom:2px solid #279ad6}ul.navbar-nav li.nav-item{position:relative;z-index:10}ul.navbar-nav li.nav-item:hover ul{display:block}ul.navbar-nav li.nav-item>ul{position:absolute}ul.navbar-nav li.nav-item ul{top:100%;box-shadow:0 4px 16px rgba(43,52,69,.1);background-color:#fff;padding:5px 0;width:250px;max-width:250px;border-radius:8px;display:none}ul.navbar-nav li.nav-item ul li{position:relative;list-style-type:none}ul.navbar-nav li.nav-item ul li:hover{background-color:#f6f9fc}ul.navbar-nav li.nav-item ul li a{width:100%;color:#4b566b;padding:.5rem 1rem;display:flex}ul.navbar-nav li.nav-item ul li:hover .navbar-submenu{display:block}ul.navbar-nav li.nav-item ul li .navbar-submenu{position:absolute;left:100%;top:0;display:none;width:100%;z-index:10;padding-left:1rem}ul.navigation-navbar .nav-item .nav-link{color:#0f3460}ul.navigation-navbar .nav-item .nav-link.active,ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}.hero-section-bg ul.navigation-navbar .nav-item .nav-link{color:#fff}.hero-section-bg ul.navigation-navbar .nav-item .nav-link.active,.hero-section-bg ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}ul.navbar-nav li.nav-item{list-style:none;margin-right:2rem!important}ul.navbar-nav li.nav-item:last-child{margin-right:0!important}ul.navbar-nav li.nav-item a{text-decoration:none}.router-link-active{color:#279ad6}.vuetify-carousel .v-carousel__controls .v-item-group button{color:#0f3460}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.5!important}.slick-next.slick-top-next-btn{top:-40px;right:0}.slick-next:before{opacity:0!important}@media(max-width:992px){.slick-next{right:5px!important}}.slick-prev{position:absolute;z-index:2}.slick-prev.slick-top-prev-btn{top:-40px;left:calc(100% - 105px)}@media(max-width:992px){.slick-prev.slick-top-prev-btn{left:calc(100% - 105px)!important}}.slick-prev:before{opacity:0!important}@media(max-width:992px){.slick-prev{left:5px!important}}.slick-dots{bottom:0!important}.slick-dots li button:before{font-size:16px!important}.slick-dots li.slick-active button:before,.slick-dots li:hover button:before{color:#0f3460!important;opacity:1!important}@media(max-width:375px){.slick-header-top-title{width:200px}}.slick-left-arrow{position:absolute;left:0!important}.slick-right-arrow{position:absolute;right:0!important}.slick-button-hover:hover .slick-arrow{display:block}.slick-button-hover .slick-arrow{display:none}.icon{width:24px;height:24px}.avatar-64{width:64px;height:auto}.brand-tabs .v-tabs-slider-wrapper{display:none}.box-wrapper{position:relative;display:flex;align-items:flex-start;width:100%;border-radius:8px}@media(max-width:959px){.box-wrapper .box-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99;background-color:rgba(0,0,0,.5);display:none}.box-wrapper .box-overlay.open{display:block}}.box-wrapper.box-wrapper-version-2 .box-sidebar{border-radius:0}.box-wrapper .box-sidebar{width:282px;background-color:#fff;border-radius:8px;transition:all .3s ease}@media(max-width:959px){.box-wrapper .box-sidebar{position:fixed;top:0;left:-282px;border-radius:0;z-index:99;overflow-y:scroll;height:calc(100% - 56px)}.box-wrapper .box-sidebar.open{left:0}}.box-wrapper .box-content{width:calc(100% - 300px);margin-left:auto;border-radius:8px}@media(max-width:959px){.box-wrapper .box-content{width:100%}}.custom-form-wizard.vue-form-wizard.md .wizard-icon-circle{width:96px!important;height:36px!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{top:23px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.square_shape,.custom-form-wizard.vue-form-wizard .wizard-icon-circle .wizard-icon-container.square_shape,.custom-form-wizard .vue-form-wizard .wizard-icon-circle .wizard-icon-container.tab_shape{border-radius:20px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle{border:none!important;border-radius:50%;font-weight:600;background-color:#ffe1e6!important;position:relative}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked{background-color:#279ad6!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked i{color:#fff!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{background-color:#ffe1e6}.custom-form-wizard i.wizard-icon{font-size:20px;color:#279ad6}.custom-form-wizard .stepTitle{color:#279ad6}.input-group-btn{display:flex;align-items:center}.input-group-btn .v-input__slot{border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}.input-group-btn button{border-top-left-radius:0;border-bottom-left-radius:0;height:42px!important}.p-relative{position:relative!important}.p-absolute{position:absolute!important}.right-0{right:0}.top-0{top:0}.bottom-0{bottom:0}v-application a{color:#279ad6!important}.mb-60{margin-bottom:60px}.py-48{padding-top:48px;padding-bottom:48px}.mt-32{margin-top:32px}.mt--66{margin-top:-66px}.mw-0{min-width:0}.w-100{width:100%}.size-28{width:28px;height:28px}.min-vh-100{min-height:100vh}.w-200{width:200px}.mw-70{max-width:70px}*{font-size:14px}body,html{color:#2b3445;background-color:#fff}.v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;outline:none;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{animation-duration:.15s;animation-name:animate-dialog;animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(238);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("3f95a174", content, true)

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bg-primary-lighten{background-color:#fce9ec!important}.text-primary-lighten{color:#fce9ec}.bg-body{background-color:#f6f9fc}.footer-text{color:#bdbdbd}.border-primary{border:1px solid #279ad6!important}.bg-white{background-color:#fff}a{color:#279ad6!important}h1{font-size:30px}h2{font-size:25px}h3{font-size:20px}h4{font-size:17px}.text-14,h5{font-size:14px}.text-16{font-size:16px}.text-sm{font-size:12px}.text-11{font-size:11px!important}.text-10{font-size:10px}.text-30{font-size:30px}.text-40{font-size:40px}.text-tiny{font-size:10px}.display-1{font-size:80px}.show-2{font-size:66px}@media(max-width:992px){.show-2{font-size:15px!important}}.show-3{line-height:1.2;font-size:50px!important}@media(max-width:600px){.show-3{font-size:30px!important}}@media(max-width:400px){.show-3{font-size:15px!important}}@media(max-width:992px){.banner-text{font-size:12px!important}}.shadow-sm{box-shadow:0 1px 3px rgba(3,0,71,.09)!important}.shadow{box-shadow:0 4px 16px rgba(43,52,69,.1)!important}.shadow-lg{box-shadow:0 8px 45px rgba(3,0,71,.09)!important}.font-600{font-weight:600}.ls-4{letter-spacing:4px}.leading-tight{line-height:1.25}.container-lg{max-width:1200px}.flex-1{flex:1}.cursor-pointer{cursor:pointer}.w-33{width:33.33%}.border-grey{border:1px solid #dae1e7}.z-0{z-index:0}.z-1{z-index:1}.z-10{z-index:10}.br-8{border-radius:8px!important}.br-12{border-radius:12px!important}.h-100{height:100%}.border-4-white{border:4px solid #fff}.card-overlay-item{position:relative}.card-overlay-item:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;transition:all .25s ease-in-out 0s}.card-overlay-item:hover:after{background:rgba(0,0,0,.3);z-index:0;border-radius:8px;cursor:pointer}.top-search-bar .v-text-field__details{display:none!important}svg{fill:currentColor!important}svg.icon:focus,svg:focus{outline:none}.bb-primary{border-bottom:2px solid #279ad6}ul.navbar-nav li.nav-item{position:relative;z-index:10}ul.navbar-nav li.nav-item:hover ul{display:block}ul.navbar-nav li.nav-item>ul{position:absolute}ul.navbar-nav li.nav-item ul{top:100%;box-shadow:0 4px 16px rgba(43,52,69,.1);background-color:#fff;padding:5px 0;width:250px;max-width:250px;border-radius:8px;display:none}ul.navbar-nav li.nav-item ul li{position:relative;list-style-type:none}ul.navbar-nav li.nav-item ul li:hover{background-color:#f6f9fc}ul.navbar-nav li.nav-item ul li a{width:100%;color:#4b566b;padding:.5rem 1rem;display:flex}ul.navbar-nav li.nav-item ul li:hover .navbar-submenu{display:block}ul.navbar-nav li.nav-item ul li .navbar-submenu{position:absolute;left:100%;top:0;display:none;width:100%;z-index:10;padding-left:1rem}ul.navigation-navbar .nav-item .nav-link{color:#0f3460}ul.navigation-navbar .nav-item .nav-link.active,ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}.hero-section-bg ul.navigation-navbar .nav-item .nav-link{color:#fff}.hero-section-bg ul.navigation-navbar .nav-item .nav-link.active,.hero-section-bg ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}ul.navbar-nav li.nav-item{list-style:none;margin-right:2rem!important}ul.navbar-nav li.nav-item:last-child{margin-right:0!important}ul.navbar-nav li.nav-item a{text-decoration:none}.router-link-active{color:#279ad6}.vuetify-carousel .v-carousel__controls .v-item-group button{color:#0f3460}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.5!important}.slick-next.slick-top-next-btn{top:-40px;right:0}.slick-next:before{opacity:0!important}@media(max-width:992px){.slick-next{right:5px!important}}.slick-prev{position:absolute;z-index:2}.slick-prev.slick-top-prev-btn{top:-40px;left:calc(100% - 105px)}@media(max-width:992px){.slick-prev.slick-top-prev-btn{left:calc(100% - 105px)!important}}.slick-prev:before{opacity:0!important}@media(max-width:992px){.slick-prev{left:5px!important}}.slick-dots{bottom:0!important}.slick-dots li button:before{font-size:16px!important}.slick-dots li.slick-active button:before,.slick-dots li:hover button:before{color:#0f3460!important;opacity:1!important}@media(max-width:375px){.slick-header-top-title{width:200px}}.slick-left-arrow{position:absolute;left:0!important}.slick-right-arrow{position:absolute;right:0!important}.slick-button-hover:hover .slick-arrow{display:block}.slick-button-hover .slick-arrow{display:none}.icon{width:24px;height:24px}.avatar-64{width:64px;height:auto}.brand-tabs .v-tabs-slider-wrapper{display:none}.box-wrapper{position:relative;display:flex;align-items:flex-start;width:100%;border-radius:8px}@media(max-width:959px){.box-wrapper .box-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99;background-color:rgba(0,0,0,.5);display:none}.box-wrapper .box-overlay.open{display:block}}.box-wrapper.box-wrapper-version-2 .box-sidebar{border-radius:0}.box-wrapper .box-sidebar{width:282px;background-color:#fff;border-radius:8px;transition:all .3s ease}@media(max-width:959px){.box-wrapper .box-sidebar{position:fixed;top:0;left:-282px;border-radius:0;z-index:99;overflow-y:scroll;height:calc(100% - 56px)}.box-wrapper .box-sidebar.open{left:0}}.box-wrapper .box-content{width:calc(100% - 300px);margin-left:auto;border-radius:8px}@media(max-width:959px){.box-wrapper .box-content{width:100%}}.custom-form-wizard.vue-form-wizard.md .wizard-icon-circle{width:96px!important;height:36px!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{top:23px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.square_shape,.custom-form-wizard.vue-form-wizard .wizard-icon-circle .wizard-icon-container.square_shape,.custom-form-wizard .vue-form-wizard .wizard-icon-circle .wizard-icon-container.tab_shape{border-radius:20px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle{border:none!important;border-radius:50%;font-weight:600;background-color:#ffe1e6!important;position:relative}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked{background-color:#279ad6!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked i{color:#fff!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{background-color:#ffe1e6}.custom-form-wizard i.wizard-icon{font-size:20px;color:#279ad6}.custom-form-wizard .stepTitle{color:#279ad6}.input-group-btn{display:flex;align-items:center}.input-group-btn .v-input__slot{border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}.input-group-btn button{border-top-left-radius:0;border-bottom-left-radius:0;height:42px!important}.p-relative{position:relative!important}.p-absolute{position:absolute!important}.right-0{right:0}.top-0{top:0}.bottom-0{bottom:0}v-application a{color:#279ad6!important}.mb-60{margin-bottom:60px}.py-48{padding-top:48px;padding-bottom:48px}.mt-32{margin-top:32px}.mt--66{margin-top:-66px}.mw-0{min-width:0}.w-100{width:100%}.size-28{width:28px;height:28px}.min-vh-100{min-height:100vh}.w-200{width:200px}.mw-70{max-width:70px}*{font-size:14px}body,html{color:#2b3445;background-color:#fff}.theme--light.v-overlay{color:rgba(0,0,0,.87)}.theme--dark.v-overlay{color:#fff}.v-overlay{align-items:center;border-radius:inherit;display:flex;justify-content:center;position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;transition:.3s cubic-bezier(.25,.8,.5,1),z-index 1ms}.v-overlay__content{position:relative}.v-overlay__scrim{border-radius:inherit;bottom:0;height:100%;left:0;position:absolute;right:0;top:0;transition:inherit;width:100%;will-change:opacity}.v-overlay--absolute{position:absolute}.v-overlay--active{pointer-events:auto}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardCart_vue_vue_type_style_index_0_id_72446f57_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(222);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardCart_vue_vue_type_style_index_0_id_72446f57_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardCart_vue_vue_type_style_index_0_id_72446f57_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardCart_vue_vue_type_style_index_0_id_72446f57_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardCart_vue_vue_type_style_index_0_id_72446f57_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bg-primary-lighten[data-v-72446f57]{background-color:#fce9ec!important}.text-primary-lighten[data-v-72446f57]{color:#fce9ec}.bg-body[data-v-72446f57]{background-color:#f6f9fc}.footer-text[data-v-72446f57]{color:#bdbdbd}.border-primary[data-v-72446f57]{border:1px solid #279ad6!important}.bg-white[data-v-72446f57]{background-color:#fff}a[data-v-72446f57]{color:#279ad6!important}h1[data-v-72446f57]{font-size:30px}h2[data-v-72446f57]{font-size:25px}h3[data-v-72446f57]{font-size:20px}h4[data-v-72446f57]{font-size:17px}.text-14[data-v-72446f57],h5[data-v-72446f57]{font-size:14px}.text-16[data-v-72446f57]{font-size:16px}.text-sm[data-v-72446f57]{font-size:12px}.text-11[data-v-72446f57]{font-size:11px!important}.text-10[data-v-72446f57]{font-size:10px}.text-30[data-v-72446f57]{font-size:30px}.text-40[data-v-72446f57]{font-size:40px}.text-tiny[data-v-72446f57]{font-size:10px}.display-1[data-v-72446f57]{font-size:80px}.show-2[data-v-72446f57]{font-size:66px}@media(max-width:992px){.show-2[data-v-72446f57]{font-size:15px!important}}.show-3[data-v-72446f57]{line-height:1.2;font-size:50px!important}@media(max-width:600px){.show-3[data-v-72446f57]{font-size:30px!important}}@media(max-width:400px){.show-3[data-v-72446f57]{font-size:15px!important}}@media(max-width:992px){.banner-text[data-v-72446f57]{font-size:12px!important}}.shadow-sm[data-v-72446f57]{box-shadow:0 1px 3px rgba(3,0,71,.09)!important}.shadow[data-v-72446f57]{box-shadow:0 4px 16px rgba(43,52,69,.1)!important}.shadow-lg[data-v-72446f57]{box-shadow:0 8px 45px rgba(3,0,71,.09)!important}.font-600[data-v-72446f57]{font-weight:600}.ls-4[data-v-72446f57]{letter-spacing:4px}.leading-tight[data-v-72446f57]{line-height:1.25}.container-lg[data-v-72446f57]{max-width:1200px}.flex-1[data-v-72446f57]{flex:1}.cursor-pointer[data-v-72446f57]{cursor:pointer}.w-33[data-v-72446f57]{width:33.33%}.border-grey[data-v-72446f57]{border:1px solid #dae1e7}.z-0[data-v-72446f57]{z-index:0}.z-1[data-v-72446f57]{z-index:1}.z-10[data-v-72446f57]{z-index:10}.br-8[data-v-72446f57]{border-radius:8px!important}.br-12[data-v-72446f57]{border-radius:12px!important}.h-100[data-v-72446f57]{height:100%}.border-4-white[data-v-72446f57]{border:4px solid #fff}.card-overlay-item[data-v-72446f57]{position:relative}.card-overlay-item[data-v-72446f57]:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;transition:all .25s ease-in-out 0s}.card-overlay-item[data-v-72446f57]:hover:after{background:rgba(0,0,0,.3);z-index:0;border-radius:8px;cursor:pointer}.top-search-bar .v-text-field__details[data-v-72446f57]{display:none!important}svg[data-v-72446f57]{fill:currentColor!important}svg.icon[data-v-72446f57]:focus,svg[data-v-72446f57]:focus{outline:none}.bb-primary[data-v-72446f57]{border-bottom:2px solid #279ad6}ul.navbar-nav li.nav-item[data-v-72446f57]{position:relative;z-index:10}ul.navbar-nav li.nav-item:hover ul[data-v-72446f57]{display:block}ul.navbar-nav li.nav-item>ul[data-v-72446f57]{position:absolute}ul.navbar-nav li.nav-item ul[data-v-72446f57]{top:100%;box-shadow:0 4px 16px rgba(43,52,69,.1);background-color:#fff;padding:5px 0;width:250px;max-width:250px;border-radius:8px;display:none}ul.navbar-nav li.nav-item ul li[data-v-72446f57]{position:relative;list-style-type:none}ul.navbar-nav li.nav-item ul li[data-v-72446f57]:hover{background-color:#f6f9fc}ul.navbar-nav li.nav-item ul li a[data-v-72446f57]{width:100%;color:#4b566b;padding:.5rem 1rem;display:flex}ul.navbar-nav li.nav-item ul li:hover .navbar-submenu[data-v-72446f57]{display:block}ul.navbar-nav li.nav-item ul li .navbar-submenu[data-v-72446f57]{position:absolute;left:100%;top:0;display:none;width:100%;z-index:10;padding-left:1rem}ul.navigation-navbar .nav-item .nav-link[data-v-72446f57]{color:#0f3460}ul.navigation-navbar .nav-item .nav-link.active[data-v-72446f57],ul.navigation-navbar .nav-item .nav-link[data-v-72446f57]:hover{color:#279ad6}.hero-section-bg ul.navigation-navbar .nav-item .nav-link[data-v-72446f57]{color:#fff}.hero-section-bg ul.navigation-navbar .nav-item .nav-link.active[data-v-72446f57],.hero-section-bg ul.navigation-navbar .nav-item .nav-link[data-v-72446f57]:hover{color:#279ad6}ul.navbar-nav li.nav-item[data-v-72446f57]{list-style:none;margin-right:2rem!important}ul.navbar-nav li.nav-item[data-v-72446f57]:last-child{margin-right:0!important}ul.navbar-nav li.nav-item a[data-v-72446f57]{text-decoration:none}.router-link-active[data-v-72446f57]{color:#279ad6}.vuetify-carousel .v-carousel__controls .v-item-group button[data-v-72446f57]{color:#0f3460}.slick-next.slick-disabled[data-v-72446f57]:before,.slick-prev.slick-disabled[data-v-72446f57]:before{opacity:.5!important}.slick-next.slick-top-next-btn[data-v-72446f57]{top:-40px;right:0}.slick-next[data-v-72446f57]:before{opacity:0!important}@media(max-width:992px){.slick-next[data-v-72446f57]{right:5px!important}}.slick-prev[data-v-72446f57]{position:absolute;z-index:2}.slick-prev.slick-top-prev-btn[data-v-72446f57]{top:-40px;left:calc(100% - 105px)}@media(max-width:992px){.slick-prev.slick-top-prev-btn[data-v-72446f57]{left:calc(100% - 105px)!important}}.slick-prev[data-v-72446f57]:before{opacity:0!important}@media(max-width:992px){.slick-prev[data-v-72446f57]{left:5px!important}}.slick-dots[data-v-72446f57]{bottom:0!important}.slick-dots li button[data-v-72446f57]:before{font-size:16px!important}.slick-dots li.slick-active button[data-v-72446f57]:before,.slick-dots li:hover button[data-v-72446f57]:before{color:#0f3460!important;opacity:1!important}@media(max-width:375px){.slick-header-top-title[data-v-72446f57]{width:200px}}.slick-left-arrow[data-v-72446f57]{position:absolute;left:0!important}.slick-right-arrow[data-v-72446f57]{position:absolute;right:0!important}.slick-button-hover:hover .slick-arrow[data-v-72446f57]{display:block}.slick-button-hover .slick-arrow[data-v-72446f57]{display:none}.icon[data-v-72446f57]{width:24px;height:24px}.avatar-64[data-v-72446f57]{width:64px;height:auto}.brand-tabs .v-tabs-slider-wrapper[data-v-72446f57]{display:none}.box-wrapper[data-v-72446f57]{position:relative;display:flex;align-items:flex-start;width:100%;border-radius:8px}@media(max-width:959px){.box-wrapper .box-overlay[data-v-72446f57]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99;background-color:rgba(0,0,0,.5);display:none}.box-wrapper .box-overlay.open[data-v-72446f57]{display:block}}.box-wrapper.box-wrapper-version-2 .box-sidebar[data-v-72446f57]{border-radius:0}.box-wrapper .box-sidebar[data-v-72446f57]{width:282px;background-color:#fff;border-radius:8px;transition:all .3s ease}@media(max-width:959px){.box-wrapper .box-sidebar[data-v-72446f57]{position:fixed;top:0;left:-282px;border-radius:0;z-index:99;overflow-y:scroll;height:calc(100% - 56px)}.box-wrapper .box-sidebar.open[data-v-72446f57]{left:0}}.box-wrapper .box-content[data-v-72446f57]{width:calc(100% - 300px);margin-left:auto;border-radius:8px}@media(max-width:959px){.box-wrapper .box-content[data-v-72446f57]{width:100%}}.custom-form-wizard.vue-form-wizard.md .wizard-icon-circle[data-v-72446f57]{width:96px!important;height:36px!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle[data-v-72446f57]{top:23px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.square_shape[data-v-72446f57],.custom-form-wizard.vue-form-wizard .wizard-icon-circle .wizard-icon-container.square_shape[data-v-72446f57],.custom-form-wizard .vue-form-wizard .wizard-icon-circle .wizard-icon-container.tab_shape[data-v-72446f57]{border-radius:20px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle[data-v-72446f57]{border:none!important;border-radius:50%;font-weight:600;background-color:#ffe1e6!important;position:relative}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked[data-v-72446f57]{background-color:#279ad6!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked i[data-v-72446f57]{color:#fff!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle[data-v-72446f57]{background-color:#ffe1e6}.custom-form-wizard i.wizard-icon[data-v-72446f57]{font-size:20px;color:#279ad6}.custom-form-wizard .stepTitle[data-v-72446f57]{color:#279ad6}.input-group-btn[data-v-72446f57]{display:flex;align-items:center}.input-group-btn .v-input__slot[data-v-72446f57]{border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}.input-group-btn button[data-v-72446f57]{border-top-left-radius:0;border-bottom-left-radius:0;height:42px!important}.p-relative[data-v-72446f57]{position:relative!important}.p-absolute[data-v-72446f57]{position:absolute!important}.right-0[data-v-72446f57]{right:0}.top-0[data-v-72446f57]{top:0}.bottom-0[data-v-72446f57]{bottom:0}v-application a[data-v-72446f57]{color:#279ad6!important}.mb-60[data-v-72446f57]{margin-bottom:60px}.py-48[data-v-72446f57]{padding-top:48px;padding-bottom:48px}.mt-32[data-v-72446f57]{margin-top:32px}.mt--66[data-v-72446f57]{margin-top:-66px}.mw-0[data-v-72446f57]{min-width:0}.w-100[data-v-72446f57]{width:100%}.size-28[data-v-72446f57]{width:28px;height:28px}.min-vh-100[data-v-72446f57]{min-height:100vh}.w-200[data-v-72446f57]{width:200px}.mw-70[data-v-72446f57]{max-width:70px}*[data-v-72446f57]{font-size:14px}body[data-v-72446f57],html[data-v-72446f57]{color:#2b3445;background-color:#fff}.br-t-8[data-v-72446f57]{border-top-right-radius:8px;border-top-left-radius:8px}.card-hover:hover .card-hover-icon[data-v-72446f57]{display:block}.card-hover .card-hover-icon[data-v-72446f57]{display:none}.space-between[data-v-72446f57]{display:flex;justify-content:space-between;margin-left:2%;margin-right:2%;flex-wrap:wrap}.space-between div[data-v-72446f57]{line-height:4px!important;margin-top:20px;margin-bottom:20px;text-align:right}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VChip_VChip_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(233);
/* harmony import */ var _src_components_VChip_VChip_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VChip_VChip_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _mixins_groupable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22);
/* harmony import */ var _mixins_sizeable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3);
// Styles

 // Components


 // Mixins






 // Utilities


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _mixins_sizeable__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], _mixins_routable__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], Object(_mixins_groupable__WEBPACK_IMPORTED_MODULE_5__[/* factory */ "a"])('chipGroup'), Object(_mixins_toggleable__WEBPACK_IMPORTED_MODULE_7__[/* factory */ "b"])('inputValue')).extend({
  name: 'v-chip',
  props: {
    active: {
      type: Boolean,
      default: true
    },
    activeClass: {
      type: String,
      default() {
        if (!this.chipGroup) return '';
        return this.chipGroup.activeClass;
      }
    },
    close: Boolean,
    closeIcon: {
      type: String,
      default: '$delete'
    },
    closeLabel: {
      type: String,
      default: '$vuetify.close'
    },
    disabled: Boolean,
    draggable: Boolean,
    filter: Boolean,
    filterIcon: {
      type: String,
      default: '$complete'
    },
    label: Boolean,
    link: Boolean,
    outlined: Boolean,
    pill: Boolean,
    tag: {
      type: String,
      default: 'span'
    },
    textColor: String,
    value: null
  },
  data: () => ({
    proxyClass: 'v-chip--active'
  }),
  computed: {
    classes() {
      return {
        'v-chip': true,
        ..._mixins_routable__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].options.computed.classes.call(this),
        'v-chip--clickable': this.isClickable,
        'v-chip--disabled': this.disabled,
        'v-chip--draggable': this.draggable,
        'v-chip--label': this.label,
        'v-chip--link': this.isLink,
        'v-chip--no-color': !this.color,
        'v-chip--outlined': this.outlined,
        'v-chip--pill': this.pill,
        'v-chip--removable': this.hasClose,
        ...this.themeClasses,
        ...this.sizeableClasses,
        ...this.groupClasses
      };
    },
    hasClose() {
      return Boolean(this.close);
    },
    isClickable() {
      return Boolean(_mixins_routable__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].options.computed.isClickable.call(this) || this.chipGroup);
    }
  },
  created() {
    const breakingProps = [['outline', 'outlined'], ['selected', 'input-value'], ['value', 'active'], ['@input', '@active.sync']];
    /* istanbul ignore next */

    breakingProps.forEach(([original, replacement]) => {
      if (this.$attrs.hasOwnProperty(original)) Object(_util_console__WEBPACK_IMPORTED_MODULE_10__[/* breaking */ "a"])(original, replacement, this);
    });
  },
  methods: {
    click(e) {
      this.$emit('click', e);
      this.chipGroup && this.toggle();
    },
    genFilter() {
      const children = [];
      if (this.isActive) {
        children.push(this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
          staticClass: 'v-chip__filter',
          props: {
            left: true
          }
        }, this.filterIcon));
      }
      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_2__[/* VExpandXTransition */ "b"], children);
    },
    genClose() {
      return this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        staticClass: 'v-chip__close',
        props: {
          right: true,
          size: 18
        },
        attrs: {
          'aria-label': this.$vuetify.lang.t(this.closeLabel)
        },
        on: {
          click: e => {
            e.stopPropagation();
            e.preventDefault();
            this.$emit('click:close');
            this.$emit('update:active', false);
          }
        }
      }, this.closeIcon);
    },
    genContent() {
      return this.$createElement('span', {
        staticClass: 'v-chip__content'
      }, [this.filter && this.genFilter(), this.$slots.default, this.hasClose && this.genClose()]);
    }
  },
  render(h) {
    const children = [this.genContent()];
    let {
      tag,
      data
    } = this.generateRouteLink();
    data.attrs = {
      ...data.attrs,
      draggable: this.draggable ? 'true' : undefined,
      tabindex: this.chipGroup && !this.disabled ? 0 : data.attrs.tabindex
    };
    data.directives.push({
      name: 'show',
      value: this.active
    });
    data = this.setBackgroundColor(this.color, data);
    const color = this.textColor || this.outlined && this.color;
    return h(tag, this.setTextColor(color, data), children);
  }
}));

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/category-1.1bb83c2.png";

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(195);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(214);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(213);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(210);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VDialog/VDialog.sass
var VDialog = __webpack_require__(235);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VThemeProvider/VThemeProvider.js
var VThemeProvider = __webpack_require__(208);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/activatable/index.js
var activatable = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/dependent/index.js
var dependent = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/detachable/index.js
var detachable = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VOverlay/VOverlay.sass
var VOverlay = __webpack_require__(237);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/toggleable/index.js
var toggleable = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VOverlay/VOverlay.js
// Styles
 // Mixins



 // Utilities


/* @vue/component */

/* harmony default export */ var VOverlay_VOverlay = (Object(mixins["a" /* default */])(colorable["a" /* default */], themeable["a" /* default */], toggleable["a" /* default */]).extend({
  name: 'v-overlay',
  props: {
    absolute: Boolean,
    color: {
      type: String,
      default: '#212121'
    },
    dark: {
      type: Boolean,
      default: true
    },
    opacity: {
      type: [Number, String],
      default: 0.46
    },
    value: {
      default: true
    },
    zIndex: {
      type: [Number, String],
      default: 5
    }
  },
  computed: {
    __scrim() {
      const data = this.setBackgroundColor(this.color, {
        staticClass: 'v-overlay__scrim',
        style: {
          opacity: this.computedOpacity
        }
      });
      return this.$createElement('div', data);
    },
    classes() {
      return {
        'v-overlay--absolute': this.absolute,
        'v-overlay--active': this.isActive,
        ...this.themeClasses
      };
    },
    computedOpacity() {
      return Number(this.isActive ? this.opacity : 0);
    },
    styles() {
      return {
        zIndex: this.zIndex
      };
    }
  },
  methods: {
    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-overlay__content'
      }, this.$slots.default);
    }
  },
  render(h) {
    const children = [this.__scrim];
    if (this.isActive) children.push(this.genContent());
    return h('div', {
      staticClass: 'v-overlay',
      on: this.$listeners,
      class: this.classes,
      style: this.styles
    }, children);
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VOverlay/index.js


/* harmony default export */ var components_VOverlay = (VOverlay_VOverlay);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/overlayable/index.js
// Components
 // Utilities

 // Types


/* @vue/component */

/* harmony default export */ var overlayable = (external_vue_default.a.extend().extend({
  name: 'overlayable',
  props: {
    hideOverlay: Boolean,
    overlayColor: String,
    overlayOpacity: [Number, String]
  },
  data() {
    return {
      animationFrame: 0,
      overlay: null
    };
  },
  watch: {
    hideOverlay(value) {
      if (!this.isActive) return;
      if (value) this.removeOverlay();else this.genOverlay();
    }
  },
  beforeDestroy() {
    this.removeOverlay();
  },
  methods: {
    createOverlay() {
      const overlay = new components_VOverlay({
        propsData: {
          absolute: this.absolute,
          value: false,
          color: this.overlayColor,
          opacity: this.overlayOpacity
        }
      });
      overlay.$mount();
      const parent = this.absolute ? this.$el.parentNode : document.querySelector('[data-app]');
      parent && parent.insertBefore(overlay.$el, parent.firstChild);
      this.overlay = overlay;
    },
    genOverlay() {
      this.hideScroll();
      if (this.hideOverlay) return;
      if (!this.overlay) this.createOverlay();
      this.animationFrame = requestAnimationFrame(() => {
        if (!this.overlay) return;
        if (this.activeZIndex !== undefined) {
          this.overlay.zIndex = String(this.activeZIndex - 1);
        } else if (this.$el) {
          this.overlay.zIndex = Object(helpers["t" /* getZIndex */])(this.$el);
        }
        this.overlay.value = true;
      });
      return true;
    },
    /** removeOverlay(false) will not restore the scollbar afterwards */
    removeOverlay(showScroll = true) {
      if (this.overlay) {
        Object(helpers["a" /* addOnceEventListener */])(this.overlay.$el, 'transitionend', () => {
          if (!this.overlay || !this.overlay.$el || !this.overlay.$el.parentNode || this.overlay.value || this.isActive) return;
          this.overlay.$el.parentNode.removeChild(this.overlay.$el);
          this.overlay.$destroy();
          this.overlay = null;
        }); // Cancel animation frame in case
        // overlay is removed before it
        // has finished its animation

        cancelAnimationFrame(this.animationFrame);
        this.overlay.value = false;
      }
      showScroll && this.showScroll();
    },
    scrollListener(e) {
      if ('key' in e) {
        if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName) ||
        // https://github.com/vuetifyjs/vuetify/issues/4715
        e.target.isContentEditable) return;
        const up = [helpers["w" /* keyCodes */].up, helpers["w" /* keyCodes */].pageup];
        const down = [helpers["w" /* keyCodes */].down, helpers["w" /* keyCodes */].pagedown];
        if (up.includes(e.keyCode)) {
          e.deltaY = -1;
        } else if (down.includes(e.keyCode)) {
          e.deltaY = 1;
        } else {
          return;
        }
      }
      if (e.target === this.overlay || e.type !== 'keydown' && e.target === document.body || this.checkPath(e)) e.preventDefault();
    },
    hasScrollbar(el) {
      if (!el || el.nodeType !== Node.ELEMENT_NODE) return false;
      const style = window.getComputedStyle(el);
      return (['auto', 'scroll'].includes(style.overflowY) || el.tagName === 'SELECT') && el.scrollHeight > el.clientHeight || ['auto', 'scroll'].includes(style.overflowX) && el.scrollWidth > el.clientWidth;
    },
    shouldScroll(el, e) {
      if (el.hasAttribute('data-app')) return false;
      const dir = e.shiftKey || e.deltaX ? 'x' : 'y';
      const delta = dir === 'y' ? e.deltaY : e.deltaX || e.deltaY;
      let alreadyAtStart;
      let alreadyAtEnd;
      if (dir === 'y') {
        alreadyAtStart = el.scrollTop === 0;
        alreadyAtEnd = el.scrollTop + el.clientHeight === el.scrollHeight;
      } else {
        alreadyAtStart = el.scrollLeft === 0;
        alreadyAtEnd = el.scrollLeft + el.clientWidth === el.scrollWidth;
      }
      const scrollingUp = delta < 0;
      const scrollingDown = delta > 0;
      if (!alreadyAtStart && scrollingUp) return true;
      if (!alreadyAtEnd && scrollingDown) return true;
      if (alreadyAtStart || alreadyAtEnd) {
        return this.shouldScroll(el.parentNode, e);
      }
      return false;
    },
    isInside(el, parent) {
      if (el === parent) {
        return true;
      } else if (el === null || el === document.body) {
        return false;
      } else {
        return this.isInside(el.parentNode, parent);
      }
    },
    checkPath(e) {
      const path = Object(helpers["g" /* composedPath */])(e);
      if (e.type === 'keydown' && path[0] === document.body) {
        const dialog = this.$refs.dialog; // getSelection returns null in firefox in some edge cases, can be ignored

        const selected = window.getSelection().anchorNode;
        if (dialog && this.hasScrollbar(dialog) && this.isInside(selected, dialog)) {
          return !this.shouldScroll(dialog, e);
        }
        return true;
      }
      for (let index = 0; index < path.length; index++) {
        const el = path[index];
        if (el === document) return true;
        if (el === document.documentElement) return true;
        if (el === this.$refs.content) return true;
        if (this.hasScrollbar(el)) return !this.shouldScroll(el, e);
      }
      return true;
    },
    hideScroll() {
      if (this.$vuetify.breakpoint.smAndDown) {
        document.documentElement.classList.add('overflow-y-hidden');
      } else {
        Object(helpers["b" /* addPassiveEventListener */])(window, 'wheel', this.scrollListener, {
          passive: false
        });
        window.addEventListener('keydown', this.scrollListener);
      }
    },
    showScroll() {
      document.documentElement.classList.remove('overflow-y-hidden');
      window.removeEventListener('wheel', this.scrollListener);
      window.removeEventListener('keydown', this.scrollListener);
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/returnable/index.js
var returnable = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/stackable/index.js
var stackable = __webpack_require__(93);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/click-outside/index.js
var click_outside = __webpack_require__(91);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
// Styles
 // Components

 // Mixins






 // Directives

 // Helpers




const baseMixins = Object(mixins["a" /* default */])(dependent["a" /* default */], detachable["a" /* default */], overlayable, returnable["a" /* default */], stackable["a" /* default */], activatable["a" /* default */]);
/* @vue/component */

/* harmony default export */ var VDialog_VDialog = (baseMixins.extend({
  name: 'v-dialog',
  directives: {
    ClickOutside: click_outside["a" /* default */]
  },
  props: {
    dark: Boolean,
    disabled: Boolean,
    fullscreen: Boolean,
    light: Boolean,
    maxWidth: [String, Number],
    noClickAnimation: Boolean,
    origin: {
      type: String,
      default: 'center center'
    },
    persistent: Boolean,
    retainFocus: {
      type: Boolean,
      default: true
    },
    scrollable: Boolean,
    transition: {
      type: [String, Boolean],
      default: 'dialog-transition'
    },
    width: [String, Number]
  },
  data() {
    return {
      activatedBy: null,
      animate: false,
      animateTimeout: -1,
      stackMinZIndex: 200,
      previousActiveElement: null
    };
  },
  computed: {
    classes() {
      return {
        [`v-dialog ${this.contentClass}`.trim()]: true,
        'v-dialog--active': this.isActive,
        'v-dialog--persistent': this.persistent,
        'v-dialog--fullscreen': this.fullscreen,
        'v-dialog--scrollable': this.scrollable,
        'v-dialog--animated': this.animate
      };
    },
    contentClasses() {
      return {
        'v-dialog__content': true,
        'v-dialog__content--active': this.isActive
      };
    },
    hasActivator() {
      return Boolean(!!this.$slots.activator || !!this.$scopedSlots.activator);
    }
  },
  watch: {
    isActive(val) {
      var _a;
      if (val) {
        this.show();
        this.hideScroll();
      } else {
        this.removeOverlay();
        this.unbind();
        (_a = this.previousActiveElement) === null || _a === void 0 ? void 0 : _a.focus();
      }
    },
    fullscreen(val) {
      if (!this.isActive) return;
      if (val) {
        this.hideScroll();
        this.removeOverlay(false);
      } else {
        this.showScroll();
        this.genOverlay();
      }
    }
  },
  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('full-width')) {
      Object(console["e" /* removed */])('full-width', this);
    }
  },
  beforeMount() {
    this.$nextTick(() => {
      this.isBooted = this.isActive;
      this.isActive && this.show();
    });
  },
  beforeDestroy() {
    if (typeof window !== 'undefined') this.unbind();
  },
  methods: {
    animateClick() {
      this.animate = false; // Needed for when clicking very fast
      // outside of the dialog

      this.$nextTick(() => {
        this.animate = true;
        window.clearTimeout(this.animateTimeout);
        this.animateTimeout = window.setTimeout(() => this.animate = false, 150);
      });
    },
    closeConditional(e) {
      const target = e.target; // Ignore the click if the dialog is closed or destroyed,
      // if it was on an element inside the content,
      // if it was dragged onto the overlay (#6969),
      // or if this isn't the topmost dialog (#9907)

      return !(this._isDestroyed || !this.isActive || this.$refs.content.contains(target) || this.overlay && target && !this.overlay.$el.contains(target)) && this.activeZIndex >= this.getMaxZIndex();
    },
    hideScroll() {
      if (this.fullscreen) {
        document.documentElement.classList.add('overflow-y-hidden');
      } else {
        overlayable.options.methods.hideScroll.call(this);
      }
    },
    show() {
      !this.fullscreen && !this.hideOverlay && this.genOverlay(); // Double nextTick to wait for lazy content to be generated

      this.$nextTick(() => {
        this.$nextTick(() => {
          var _a, _b;
          if (!((_a = this.$refs.dialog) === null || _a === void 0 ? void 0 : _a.contains(document.activeElement))) {
            this.previousActiveElement = document.activeElement;
            (_b = this.$refs.dialog) === null || _b === void 0 ? void 0 : _b.focus();
          }
          this.bind();
        });
      });
    },
    bind() {
      window.addEventListener('focusin', this.onFocusin);
    },
    unbind() {
      window.removeEventListener('focusin', this.onFocusin);
    },
    onClickOutside(e) {
      this.$emit('click:outside', e);
      if (this.persistent) {
        this.noClickAnimation || this.animateClick();
      } else {
        this.isActive = false;
      }
    },
    onKeydown(e) {
      if (e.keyCode === helpers["w" /* keyCodes */].esc && !this.getOpenDependents().length) {
        if (!this.persistent) {
          this.isActive = false;
          const activator = this.getActivator();
          this.$nextTick(() => activator && activator.focus());
        } else if (!this.noClickAnimation) {
          this.animateClick();
        }
      }
      this.$emit('keydown', e);
    },
    // On focus change, wrap focus to stay inside the dialog
    // https://github.com/vuetifyjs/vuetify/issues/6892
    onFocusin(e) {
      if (!e || !this.retainFocus) return;
      const target = e.target;
      if (!!target && this.$refs.dialog &&
      // It isn't the document or the dialog body
      ![document, this.$refs.dialog].includes(target) &&
      // It isn't inside the dialog body
      !this.$refs.dialog.contains(target) &&
      // We're the topmost dialog
      this.activeZIndex >= this.getMaxZIndex() &&
      // It isn't inside a dependent element (like a menu)
      !this.getOpenDependentElements().some(el => el.contains(target)) // So we must have focused something outside the dialog and its children
      ) {
        // Find and focus the first available element inside the dialog
        const focusable = this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])');
        const el = [...focusable].find(el => !el.hasAttribute('disabled') && !el.matches('[tabindex="-1"]'));
        el && el.focus();
      }
    },
    genContent() {
      return this.showLazyContent(() => [this.$createElement(VThemeProvider["a" /* default */], {
        props: {
          root: true,
          light: this.light,
          dark: this.dark
        }
      }, [this.$createElement('div', {
        class: this.contentClasses,
        attrs: {
          role: 'dialog',
          'aria-modal': this.hideOverlay ? undefined : 'true',
          ...this.getScopeIdAttrs()
        },
        on: {
          keydown: this.onKeydown
        },
        style: {
          zIndex: this.activeZIndex
        },
        ref: 'content'
      }, [this.genTransition()])])]);
    },
    genTransition() {
      const content = this.genInnerContent();
      if (!this.transition) return content;
      return this.$createElement('transition', {
        props: {
          name: this.transition,
          origin: this.origin,
          appear: true
        }
      }, [content]);
    },
    genInnerContent() {
      const data = {
        class: this.classes,
        attrs: {
          tabindex: this.isActive ? 0 : undefined
        },
        ref: 'dialog',
        directives: [{
          name: 'click-outside',
          value: {
            handler: this.onClickOutside,
            closeConditional: this.closeConditional,
            include: this.getOpenDependentElements
          }
        }, {
          name: 'show',
          value: this.isActive
        }],
        style: {
          transformOrigin: this.origin
        }
      };
      if (!this.fullscreen) {
        data.style = {
          ...data.style,
          maxWidth: Object(helpers["h" /* convertToUnit */])(this.maxWidth),
          width: Object(helpers["h" /* convertToUnit */])(this.width)
        };
      }
      return this.$createElement('div', data, this.getContentSlot());
    }
  },
  render(h) {
    return h('div', {
      staticClass: 'v-dialog__container',
      class: {
        'v-dialog__container--attached': this.attach === '' || this.attach === true || this.attach === 'attach'
      }
    }, [this.genActivator(), this.genContent()]);
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VRating/VRating.js + 1 modules
var VRating = __webpack_require__(257);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(209);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/cartCard/CardCart.vue?vue&type=template&id=72446f57&scoped=true&











var CardCartvue_type_template_id_72446f57_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCard["a" /* default */], {
    staticClass: "card-hover",
    class: _vm.cardHoverShadow ? 'card-hover-shadow' : ''
  }, [_c('div', {
    staticClass: "card-hover-icon"
  }, [_c('div', {
    staticClass: "d-flex flex-column p-absolute right-0 z-1 mr-2 mt-1 card-hover-icon"
  }, [_c(VDialog_VDialog, {
    attrs: {
      "max-width": "600px"
    },
    model: {
      value: _vm.dialog,
      callback: function ($$v) {
        _vm.dialog = $$v;
      },
      expression: "dialog"
    }
  }, [_c('base-card', [_c(components_VCard["b" /* VCardTitle */], [_c(VBtn["a" /* default */], {
    staticClass: "mt-4",
    attrs: {
      "absolute": "",
      "right": "",
      "icon": "",
      "color": "secondary",
      "text": ""
    },
    on: {
      "click": function ($event) {
        _vm.dialog = false;
      }
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1), _vm._v(" "), _c(components_VCard["a" /* VCardText */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "height": "250",
      "src": "@/assets/images/products/Fashion/Shoes/23.NikeSilverRace.png"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('h1', {
    staticClass: "mt-4 mb-4 leading-tight"
  }, [_vm._v("Smart Watch Black")]), _vm._v(" "), _c('h5', {
    staticClass: "grey--text text--darken-5 mb-3"
  }, [_vm._v("\n                   Brand:\n                   "), _c('span', {
    staticClass: "grey--text text--darken-1 font-weight-medium ml-2"
  }, [_vm._v("Xiaomi")])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex mb-3"
  }, [_c('h5', {
    staticClass: "grey--text text--darken-5 mr-2"
  }, [_vm._v("Rated:")]), _vm._v(" "), _c('div', {
    staticClass: "d-flex mb-1"
  }, [_c(VRating["a" /* default */], {
    attrs: {
      "value": 4.5,
      "color": "amber",
      "dense": "",
      "half-increments": "",
      "readonly": "",
      "size": "16"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "grey--text text--darken-1 font-weight-bold ml-1"
  })], 1)]), _vm._v(" "), _c('h2', {
    staticClass: "font-weight-bold primary--text mb-2"
  }), _vm._v(" "), _c('h5', {
    staticClass: "font-weight-light mb-3"
  }), _vm._v(" "), _c('h5', {
    staticClass: "grey--text text--darken-5 mb-3"
  }, [_c('span', {
    staticClass: "grey--text text--darken-1 font-weight-medium ml-2"
  })])])], 1)], 1)], 1)], 1)], 1)]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/single-product"
    }
  }, [_c(VImg["a" /* default */], {
    staticClass: "br-t-8",
    attrs: {
      "height": "250",
      "src": _vm.contentImg
    }
  })], 1), _vm._v(" "), _vm.content ? _c('div', {
    staticClass: "space-between"
  }, [_c('div', [_c('p', [_vm._v("Type: " + _vm._s(_vm.content.type))])]), _vm._v(" "), _c('div', [_c('p', [_vm._v(_vm._s(_vm.content.days_left) + " " + _vm._s(_vm.content.days_left ? _vm.$t("home.card_cart.remaining_days") : ''))])]), _vm._v(" "), _c('div', [_c('p', [_vm._v(_vm._s(_vm.$t("home.card_cart.validity")) + " :" + _vm._s(_vm.content.expiration) + " ")])])]) : _vm._e(), _vm._v(" "), _c(components_VCard["a" /* VCardText */], {
    staticClass: "d-flex justify-content-between align-end"
  }, [_c('div', {
    staticClass: "flex-grow-1 my-3"
  }, [_c('router-link', {
    staticClass: "text-decoration-none",
    attrs: {
      "to": "/single-product"
    }
  }, [_c('h6', {
    staticClass: "mb-0 grey--text text--darken-4"
  }, [_vm._v(_vm._s(_vm.contentText))])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex mb-1"
  }), _vm._v(" "), _c('div', {
    staticClass: "d-flex"
  })], 1)]), _vm._v(" "), _vm.content ? _c('div', {
    staticClass: "space-between"
  }, [_c('div', [_c('p', [_vm._v(_vm._s(_vm.$t("home.card_cart.interest")))]), _vm._v(" "), _vm.content.rate ? _c('h4', [_vm._v(_vm._s(_vm.content.rate) + _vm._s(_vm.content.rate ? '%' : ''))]) : _vm._e(), _vm._v(" "), _vm.content.rate_min ? _c('h4', [_vm._v(_vm._s(_vm.content.rate_min) + _vm._s(_vm.content.rate_min ? '%' : '') + " - " + _vm._s(_vm.content.rate_max) + _vm._s(_vm.content.rate_max ? "%" : ''))]) : _vm._e()]), _vm._v(" "), _c('div', [_c('p', [_vm._v(_vm._s(_vm.$t("home.card_cart.month")))]), _vm._v(" "), _vm.content.duration ? _c('h4', [_vm._v(_vm._s(_vm.content.duration))]) : _vm._e(), _vm._v(" "), _vm.content.duration_min ? _c('h4', [_vm._v(_vm._s(_vm.content.duration_min) + " - " + _vm._s(_vm.content.duration_max))]) : _vm._e()]), _vm._v(" "), _c('div', [_c('p', [_vm._v(_vm._s(_vm.$t("home.card_cart.rising")))]), _vm._v(" "), _c('h4', [_vm._v(_vm._s(_vm.content.amount) + " " + _vm._s(_vm.content.amount ? '€' : ''))])])]) : _vm._e(), _vm._v(" "), _vm.content ? _c('div', {
    staticClass: "space-between"
  }, [_c('div', [_c('p', [_vm._v(_vm._s(_vm.$t("home.card_cart.object")))]), _vm._v(" "), _c('h4', [_vm._v(_vm._s(_vm.content.item.category.name))])]), _vm._v(" "), _c('div', [_c('p', [_vm._v(_vm._s(_vm.$t("home.card_cart.property_value")))]), _vm._v(" "), _c('h4', [_vm._v(_vm._s(_vm.content.item.price) + " " + _vm._s(_vm.content.item.price ? '€' : ""))])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "mr-5 mt-5 ml-5 mb-5",
    staticStyle: {
      "height": "63px"
    }
  }, [_vm.content ? _c('NuxtLink', {
    staticClass: "mb-5",
    attrs: {
      "to": 'transactions/' + _vm.content.id,
      "block": "",
      "color": "rgb(39, 154, 214)",
      "elevation": "2"
    }
  }, [_vm._v("Détails ")]) : _vm._e()], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/cartCard/CardCart.vue?vue&type=template&id=72446f57&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/cartCard/CardCart.vue?vue&type=script&lang=js&

/* harmony default export */ var CardCartvue_type_script_lang_js_ = ({
  props: {
    btnText: {
      type: String,
      default: ""
    },
    cardHoverShadow: {
      type: Boolean,
      default: false
    },
    counter: {
      type: Number,
      default: 0
    },
    contentImg: String,
    contentText: String,
    amount: {
      type: Number,
      default: 200
    },
    contentRating: {
      type: Number,
      default: 4.5
    },
    content: Object
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(["getProducts"])
  },
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    ...Object(external_vuex_["mapActions"])(["addCart"]),
    navigateToTransaction(id) {
      //  this.$axios.$get("/transactions/get/" + id).then((data) => {
      // this.$store.dispatch('transaction',data);

      //  this. $router.push('transaction/'+id)
      // });
    }
  }
});
// CONCATENATED MODULE: ./components/cartCard/CardCart.vue?vue&type=script&lang=js&
 /* harmony default export */ var cartCard_CardCartvue_type_script_lang_js_ = (CardCartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./components/cartCard/CardCart.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(239)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cartCard_CardCartvue_type_script_lang_js_,
  CardCartvue_type_template_id_72446f57_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "72446f57",
  "05839320"
  
)

/* harmony default export */ var CardCart = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 247 */,
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/10.LandsJacket.2f5b8fb.png";

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/apple-watch-0.ab34f22.png";

/***/ }),
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VRating/VRating.sass
var VRating = __webpack_require__(227);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/delayable/index.js
var delayable = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/sizeable/index.js
var sizeable = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/ripple/index.js
var ripple = __webpack_require__(27);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/rippleable/index.js
// Directives
 // Types


/* harmony default export */ var rippleable = (external_vue_default.a.extend({
  name: 'rippleable',
  directives: {
    ripple: ripple["a" /* default */]
  },
  props: {
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  },
  methods: {
    genRipple(data = {}) {
      if (!this.ripple) return null;
      data.staticClass = 'v-input--selection-controls__ripple';
      data.directives = data.directives || [];
      data.directives.push({
        name: 'ripple',
        value: {
          center: true
        }
      });
      return this.$createElement('div', data);
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VRating/VRating.js
// Styles
 // Components

 // Mixins





 // Utilities



/* @vue/component */

/* harmony default export */ var VRating_VRating = __webpack_exports__["a"] = (Object(mixins["a" /* default */])(colorable["a" /* default */], delayable["a" /* default */], rippleable, sizeable["a" /* default */], themeable["a" /* default */]).extend({
  name: 'v-rating',
  props: {
    backgroundColor: {
      type: String,
      default: 'accent'
    },
    color: {
      type: String,
      default: 'primary'
    },
    clearable: Boolean,
    dense: Boolean,
    emptyIcon: {
      type: String,
      default: '$ratingEmpty'
    },
    fullIcon: {
      type: String,
      default: '$ratingFull'
    },
    halfIcon: {
      type: String,
      default: '$ratingHalf'
    },
    halfIncrements: Boolean,
    hover: Boolean,
    length: {
      type: [Number, String],
      default: 5
    },
    readonly: Boolean,
    size: [Number, String],
    value: {
      type: Number,
      default: 0
    },
    iconLabel: {
      type: String,
      default: '$vuetify.rating.ariaLabel.icon'
    }
  },
  data() {
    return {
      hoverIndex: -1,
      internalValue: this.value
    };
  },
  computed: {
    directives() {
      if (this.readonly || !this.ripple) return [];
      return [{
        name: 'ripple',
        value: {
          circle: true
        }
      }];
    },
    iconProps() {
      const {
        dark,
        large,
        light,
        medium,
        small,
        size,
        xLarge,
        xSmall
      } = this.$props;
      return {
        dark,
        large,
        light,
        medium,
        size,
        small,
        xLarge,
        xSmall
      };
    },
    isHovering() {
      return this.hover && this.hoverIndex >= 0;
    }
  },
  watch: {
    internalValue(val) {
      val !== this.value && this.$emit('input', val);
    },
    value(val) {
      this.internalValue = val;
    }
  },
  methods: {
    createClickFn(i) {
      return e => {
        if (this.readonly) return;
        const newValue = this.genHoverIndex(e, i);
        if (this.clearable && this.internalValue === newValue) {
          this.internalValue = 0;
        } else {
          this.internalValue = newValue;
        }
      };
    },
    createProps(i) {
      const props = {
        index: i,
        value: this.internalValue,
        click: this.createClickFn(i),
        isFilled: Math.floor(this.internalValue) > i,
        isHovered: Math.floor(this.hoverIndex) > i
      };
      if (this.halfIncrements) {
        props.isHalfHovered = !props.isHovered && (this.hoverIndex - i) % 1 > 0;
        props.isHalfFilled = !props.isFilled && (this.internalValue - i) % 1 > 0;
      }
      return props;
    },
    genHoverIndex(e, i) {
      let isHalf = this.isHalfEvent(e);
      if (this.halfIncrements && this.$vuetify.rtl) {
        isHalf = !isHalf;
      }
      return i + (isHalf ? 0.5 : 1);
    },
    getIconName(props) {
      const isFull = this.isHovering ? props.isHovered : props.isFilled;
      const isHalf = this.isHovering ? props.isHalfHovered : props.isHalfFilled;
      return isFull ? this.fullIcon : isHalf ? this.halfIcon : this.emptyIcon;
    },
    getColor(props) {
      if (this.isHovering) {
        if (props.isHovered || props.isHalfHovered) return this.color;
      } else {
        if (props.isFilled || props.isHalfFilled) return this.color;
      }
      return this.backgroundColor;
    },
    isHalfEvent(e) {
      if (this.halfIncrements) {
        const rect = e.target && e.target.getBoundingClientRect();
        if (rect && e.pageX - rect.left < rect.width / 2) return true;
      }
      return false;
    },
    onMouseEnter(e, i) {
      this.runDelay('open', () => {
        this.hoverIndex = this.genHoverIndex(e, i);
      });
    },
    onMouseLeave() {
      this.runDelay('close', () => this.hoverIndex = -1);
    },
    genItem(i) {
      const props = this.createProps(i);
      if (this.$scopedSlots.item) return this.$scopedSlots.item(props);
      const listeners = {
        click: props.click
      };
      if (this.hover) {
        listeners.mouseenter = e => this.onMouseEnter(e, i);
        listeners.mouseleave = this.onMouseLeave;
        if (this.halfIncrements) {
          listeners.mousemove = e => this.onMouseEnter(e, i);
        }
      }
      return this.$createElement(VIcon["a" /* default */], this.setTextColor(this.getColor(props), {
        attrs: {
          'aria-label': this.$vuetify.lang.t(this.iconLabel, i + 1, Number(this.length))
        },
        directives: this.directives,
        props: this.iconProps,
        on: listeners
      }), [this.getIconName(props)]);
    }
  },
  render(h) {
    const children = Object(helpers["i" /* createRange */])(Number(this.length)).map(i => this.genItem(i));
    return h('div', {
      staticClass: 'v-rating',
      class: {
        'v-rating--readonly': this.readonly,
        'v-rating--dense': this.dense
      }
    }, children);
  }
}));

/***/ }),
/* 258 */,
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCarousel_VCarousel_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(231);
/* harmony import */ var _src_components_VCarousel_VCarousel_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCarousel_VCarousel_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VWindow_VWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(223);
/* harmony import */ var _VBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/* harmony import */ var _VProgressLinear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(215);
/* harmony import */ var _mixins_button_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);
// Styles
 // Extensions

 // Components



 // Mixins
// TODO: Move this into core components v2.0

 // Utilities



/* harmony default export */ __webpack_exports__["a"] = (_VWindow_VWindow__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].extend({
  name: 'v-carousel',
  props: {
    continuous: {
      type: Boolean,
      default: true
    },
    cycle: Boolean,
    delimiterIcon: {
      type: String,
      default: '$delimiter'
    },
    height: {
      type: [Number, String],
      default: 500
    },
    hideDelimiters: Boolean,
    hideDelimiterBackground: Boolean,
    interval: {
      type: [Number, String],
      default: 6000,
      validator: value => value > 0
    },
    mandatory: {
      type: Boolean,
      default: true
    },
    progress: Boolean,
    progressColor: String,
    showArrows: {
      type: Boolean,
      default: true
    },
    verticalDelimiters: {
      type: String,
      default: undefined
    }
  },
  // pass down the parent's theme
  provide() {
    return {
      parentTheme: this.theme
    };
  },
  data() {
    return {
      internalHeight: this.height,
      slideTimeout: undefined
    };
  },
  computed: {
    classes() {
      return {
        ..._VWindow_VWindow__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        'v-carousel': true,
        'v-carousel--hide-delimiter-background': this.hideDelimiterBackground,
        'v-carousel--vertical-delimiters': this.isVertical
      };
    },
    isDark() {
      return this.dark || !this.light;
    },
    isVertical() {
      return this.verticalDelimiters != null;
    }
  },
  watch: {
    internalValue: 'restartTimeout',
    interval: 'restartTimeout',
    height(val, oldVal) {
      if (val === oldVal || !val) return;
      this.internalHeight = val;
    },
    cycle(val) {
      if (val) {
        this.restartTimeout();
      } else {
        clearTimeout(this.slideTimeout);
        this.slideTimeout = undefined;
      }
    }
  },
  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('hide-controls')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_7__[/* breaking */ "a"])('hide-controls', ':show-arrows="false"', this);
    }
  },
  mounted() {
    this.startTimeout();
  },
  methods: {
    genControlIcons() {
      if (this.isVertical) return null;
      return _VWindow_VWindow__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genControlIcons.call(this);
    },
    genDelimiters() {
      return this.$createElement('div', {
        staticClass: 'v-carousel__controls',
        style: {
          left: this.verticalDelimiters === 'left' && this.isVertical ? 0 : 'auto',
          right: this.verticalDelimiters === 'right' ? 0 : 'auto'
        }
      }, [this.genItems()]);
    },
    genItems() {
      const length = this.items.length;
      const children = [];
      for (let i = 0; i < length; i++) {
        const child = this.$createElement(_VBtn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
          staticClass: 'v-carousel__controls__item',
          attrs: {
            'aria-label': this.$vuetify.lang.t('$vuetify.carousel.ariaLabel.delimiter', i + 1, length)
          },
          props: {
            icon: true,
            small: true,
            value: this.getValue(this.items[i], i)
          },
          key: i
        }, [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
          props: {
            size: 18
          }
        }, this.delimiterIcon)]);
        children.push(child);
      }
      return this.$createElement(_mixins_button_group__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
        props: {
          value: this.internalValue,
          mandatory: this.mandatory
        },
        on: {
          change: val => {
            this.internalValue = val;
          }
        }
      }, children);
    },
    genProgress() {
      return this.$createElement(_VProgressLinear__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
        staticClass: 'v-carousel__progress',
        props: {
          color: this.progressColor,
          value: (this.internalIndex + 1) / this.items.length * 100
        }
      });
    },
    restartTimeout() {
      this.slideTimeout && clearTimeout(this.slideTimeout);
      this.slideTimeout = undefined;
      window.requestAnimationFrame(this.startTimeout);
    },
    startTimeout() {
      if (!this.cycle) return;
      this.slideTimeout = window.setTimeout(this.next, +this.interval > 0 ? +this.interval : 6000);
    }
  },
  render(h) {
    const render = _VWindow_VWindow__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.render.call(this, h);
    render.data.style = `height: ${Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* convertToUnit */ "h"])(this.height)};`;
    /* istanbul ignore else */

    if (!this.hideDelimiters) {
      render.children.push(this.genDelimiters());
    }
    /* istanbul ignore else */

    if (this.progress || this.progressColor) {
      render.children.push(this.genProgress());
    }
    return render;
  }
}));

/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VWindow_VWindowItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(226);
/* harmony import */ var _VImg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(121);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
// Extensions
 // Components

 // Utilities



 // Types

const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_VWindow_VWindowItem__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], _mixins_routable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend().extend({
  name: 'v-carousel-item',
  inject: {
    parentTheme: {
      default: {
        isDark: false
      }
    }
  },
  // pass down the parent's theme
  provide() {
    return {
      theme: this.parentTheme
    };
  },
  inheritAttrs: false,
  methods: {
    genDefaultSlot() {
      return [this.$createElement(_VImg__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        staticClass: 'v-carousel__item',
        props: {
          ...this.$attrs,
          height: this.windowGroup.internalHeight
        },
        on: this.$listeners,
        scopedSlots: {
          placeholder: this.$scopedSlots.placeholder
        }
      }, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* getSlot */ "r"])(this))];
    },
    genWindowItem() {
      const {
        tag,
        data
      } = this.generateRouteLink();
      data.staticClass = 'v-window-item';
      data.directives.push({
        name: 'show',
        value: this.isActive
      });
      return this.$createElement(tag, data, this.genDefaultSlot());
    }
  }
}));

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/payment.ce1288d.png";

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/loan.c6901b1.png";

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/no-heavy-increase.4e79076.png";

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/right-to-default.8594c7c.png";

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/lipstick(2).2549a89.png";

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/category-2.73ca16b.png";

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/category-3.49b5af5.png";

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1.SilverHighNeckSweater.1e7118d.png";

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(310);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("43f96292", content, true, context)
};

/***/ }),
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/camera-1.1c68856.png";

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/shoes-2.e1476d8.png";

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mobile-1.06ca83f.png";

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/watch-1.e4b394a.png";

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/imagegoggles.93414e0.png";

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bgwatch.c43d5ff.png";

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/lipstick(4).e392a7d.png";

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/lipstick(3).7f84d4f.png";

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/werepo.5e506e9.jpg";

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1.cb9f626.png";

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/2.cf5f47b.png";

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/3.a56a212.png";

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/4.c06c85d.png";

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/5.7301524.png";

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/7.beatsw3.e9bac31.png";

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/9.SonyTV1080p.e6f245e.png";

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/10.SonyPS4.96288ad.png";

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/11.Netgear2020.6dbb570.png";

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/12.SonyBGB.4bd358e.png";

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/13.LGProducts.68a1a2f.png";

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/14.Panasonic2019.9595256.png";

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/15.DuneHD.9a783a7.png";

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/19.LGWashingMachine.d0c7db7.png";

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/london-britches.c871678.png";

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/jimandjiko.f870ac9.png";

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/18.DragonRedWristWatch.47bb45c.png";

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/10.RayBanOcean.d1aa42b.png";

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/3.BrownCap.2783845.png";

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1.NikeRed.0e19f5f.png";

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/5.NikeBlue.db95fbb.png";

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1.Heavy22ktGoldNecklaceSet.7483c21.png";

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/3.NBLHoopHoodie.69fe89d.png";

/***/ }),
/* 309 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_87d2602c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(269);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_87d2602c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_87d2602c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_87d2602c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_87d2602c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(311);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(312);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(313);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bg-primary-lighten[data-v-87d2602c]{background-color:#fce9ec!important}.text-primary-lighten[data-v-87d2602c]{color:#fce9ec}.bg-body[data-v-87d2602c]{background-color:#f6f9fc}.footer-text[data-v-87d2602c]{color:#bdbdbd}.border-primary[data-v-87d2602c]{border:1px solid #279ad6!important}.bg-white[data-v-87d2602c]{background-color:#fff}a[data-v-87d2602c]{color:#279ad6!important}h1[data-v-87d2602c]{font-size:30px}h2[data-v-87d2602c]{font-size:25px}h3[data-v-87d2602c]{font-size:20px}h4[data-v-87d2602c]{font-size:17px}.text-14[data-v-87d2602c],h5[data-v-87d2602c]{font-size:14px}.text-16[data-v-87d2602c]{font-size:16px}.text-sm[data-v-87d2602c]{font-size:12px}.text-11[data-v-87d2602c]{font-size:11px!important}.text-10[data-v-87d2602c]{font-size:10px}.text-30[data-v-87d2602c]{font-size:30px}.text-40[data-v-87d2602c]{font-size:40px}.text-tiny[data-v-87d2602c]{font-size:10px}.display-1[data-v-87d2602c]{font-size:80px}.show-2[data-v-87d2602c]{font-size:66px}@media(max-width:992px){.show-2[data-v-87d2602c]{font-size:15px!important}}.show-3[data-v-87d2602c]{line-height:1.2;font-size:50px!important}@media(max-width:600px){.show-3[data-v-87d2602c]{font-size:30px!important}}@media(max-width:400px){.show-3[data-v-87d2602c]{font-size:15px!important}}@media(max-width:992px){.banner-text[data-v-87d2602c]{font-size:12px!important}}.shadow-sm[data-v-87d2602c]{box-shadow:0 1px 3px rgba(3,0,71,.09)!important}.shadow[data-v-87d2602c]{box-shadow:0 4px 16px rgba(43,52,69,.1)!important}.shadow-lg[data-v-87d2602c]{box-shadow:0 8px 45px rgba(3,0,71,.09)!important}.font-600[data-v-87d2602c]{font-weight:600}.ls-4[data-v-87d2602c]{letter-spacing:4px}.leading-tight[data-v-87d2602c]{line-height:1.25}.container-lg[data-v-87d2602c]{max-width:1200px}.flex-1[data-v-87d2602c]{flex:1}.cursor-pointer[data-v-87d2602c]{cursor:pointer}.w-33[data-v-87d2602c]{width:33.33%}.border-grey[data-v-87d2602c]{border:1px solid #dae1e7}.z-0[data-v-87d2602c]{z-index:0}.z-1[data-v-87d2602c]{z-index:1}.z-10[data-v-87d2602c]{z-index:10}.br-8[data-v-87d2602c]{border-radius:8px!important}.br-12[data-v-87d2602c]{border-radius:12px!important}.h-100[data-v-87d2602c]{height:100%}.border-4-white[data-v-87d2602c]{border:4px solid #fff}.card-overlay-item[data-v-87d2602c]{position:relative}.card-overlay-item[data-v-87d2602c]:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;transition:all .25s ease-in-out 0s}.card-overlay-item[data-v-87d2602c]:hover:after{background:rgba(0,0,0,.3);z-index:0;border-radius:8px;cursor:pointer}.top-search-bar .v-text-field__details[data-v-87d2602c]{display:none!important}svg[data-v-87d2602c]{fill:currentColor!important}svg.icon[data-v-87d2602c]:focus,svg[data-v-87d2602c]:focus{outline:none}.bb-primary[data-v-87d2602c]{border-bottom:2px solid #279ad6}ul.navbar-nav li.nav-item[data-v-87d2602c]{position:relative;z-index:10}ul.navbar-nav li.nav-item:hover ul[data-v-87d2602c]{display:block}ul.navbar-nav li.nav-item>ul[data-v-87d2602c]{position:absolute}ul.navbar-nav li.nav-item ul[data-v-87d2602c]{top:100%;box-shadow:0 4px 16px rgba(43,52,69,.1);background-color:#fff;padding:5px 0;width:250px;max-width:250px;border-radius:8px;display:none}ul.navbar-nav li.nav-item ul li[data-v-87d2602c]{position:relative;list-style-type:none}ul.navbar-nav li.nav-item ul li[data-v-87d2602c]:hover{background-color:#f6f9fc}ul.navbar-nav li.nav-item ul li a[data-v-87d2602c]{width:100%;color:#4b566b;padding:.5rem 1rem;display:flex}ul.navbar-nav li.nav-item ul li:hover .navbar-submenu[data-v-87d2602c]{display:block}ul.navbar-nav li.nav-item ul li .navbar-submenu[data-v-87d2602c]{position:absolute;left:100%;top:0;display:none;width:100%;z-index:10;padding-left:1rem}ul.navigation-navbar .nav-item .nav-link[data-v-87d2602c]{color:#0f3460}ul.navigation-navbar .nav-item .nav-link.active[data-v-87d2602c],ul.navigation-navbar .nav-item .nav-link[data-v-87d2602c]:hover{color:#279ad6}.hero-section-bg ul.navigation-navbar .nav-item .nav-link[data-v-87d2602c]{color:#fff}.hero-section-bg ul.navigation-navbar .nav-item .nav-link.active[data-v-87d2602c],.hero-section-bg ul.navigation-navbar .nav-item .nav-link[data-v-87d2602c]:hover{color:#279ad6}ul.navbar-nav li.nav-item[data-v-87d2602c]{list-style:none;margin-right:2rem!important}ul.navbar-nav li.nav-item[data-v-87d2602c]:last-child{margin-right:0!important}ul.navbar-nav li.nav-item a[data-v-87d2602c]{text-decoration:none}.router-link-active[data-v-87d2602c]{color:#279ad6}.vuetify-carousel .v-carousel__controls .v-item-group button[data-v-87d2602c]{color:#0f3460}.slick-next.slick-disabled[data-v-87d2602c]:before,.slick-prev.slick-disabled[data-v-87d2602c]:before{opacity:.5!important}.slick-next.slick-top-next-btn[data-v-87d2602c]{top:-40px;right:0}.slick-next[data-v-87d2602c]:before{opacity:0!important}@media(max-width:992px){.slick-next[data-v-87d2602c]{right:5px!important}}.slick-prev[data-v-87d2602c]{position:absolute;z-index:2}.slick-prev.slick-top-prev-btn[data-v-87d2602c]{top:-40px;left:calc(100% - 105px)}@media(max-width:992px){.slick-prev.slick-top-prev-btn[data-v-87d2602c]{left:calc(100% - 105px)!important}}.slick-prev[data-v-87d2602c]:before{opacity:0!important}@media(max-width:992px){.slick-prev[data-v-87d2602c]{left:5px!important}}.slick-dots[data-v-87d2602c]{bottom:0!important}.slick-dots li button[data-v-87d2602c]:before{font-size:16px!important}.slick-dots li.slick-active button[data-v-87d2602c]:before,.slick-dots li:hover button[data-v-87d2602c]:before{color:#0f3460!important;opacity:1!important}@media(max-width:375px){.slick-header-top-title[data-v-87d2602c]{width:200px}}.slick-left-arrow[data-v-87d2602c]{position:absolute;left:0!important}.slick-right-arrow[data-v-87d2602c]{position:absolute;right:0!important}.slick-button-hover:hover .slick-arrow[data-v-87d2602c]{display:block}.slick-button-hover .slick-arrow[data-v-87d2602c]{display:none}.icon[data-v-87d2602c]{width:24px;height:24px}.avatar-64[data-v-87d2602c]{width:64px;height:auto}.brand-tabs .v-tabs-slider-wrapper[data-v-87d2602c]{display:none}.box-wrapper[data-v-87d2602c]{position:relative;display:flex;align-items:flex-start;width:100%;border-radius:8px}@media(max-width:959px){.box-wrapper .box-overlay[data-v-87d2602c]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99;background-color:rgba(0,0,0,.5);display:none}.box-wrapper .box-overlay.open[data-v-87d2602c]{display:block}}.box-wrapper.box-wrapper-version-2 .box-sidebar[data-v-87d2602c]{border-radius:0}.box-wrapper .box-sidebar[data-v-87d2602c]{width:282px;background-color:#fff;border-radius:8px;transition:all .3s ease}@media(max-width:959px){.box-wrapper .box-sidebar[data-v-87d2602c]{position:fixed;top:0;left:-282px;border-radius:0;z-index:99;overflow-y:scroll;height:calc(100% - 56px)}.box-wrapper .box-sidebar.open[data-v-87d2602c]{left:0}}.box-wrapper .box-content[data-v-87d2602c]{width:calc(100% - 300px);margin-left:auto;border-radius:8px}@media(max-width:959px){.box-wrapper .box-content[data-v-87d2602c]{width:100%}}.custom-form-wizard.vue-form-wizard.md .wizard-icon-circle[data-v-87d2602c]{width:96px!important;height:36px!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle[data-v-87d2602c]{top:23px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.square_shape[data-v-87d2602c],.custom-form-wizard.vue-form-wizard .wizard-icon-circle .wizard-icon-container.square_shape[data-v-87d2602c],.custom-form-wizard .vue-form-wizard .wizard-icon-circle .wizard-icon-container.tab_shape[data-v-87d2602c]{border-radius:20px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle[data-v-87d2602c]{border:none!important;border-radius:50%;font-weight:600;background-color:#ffe1e6!important;position:relative}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked[data-v-87d2602c]{background-color:#279ad6!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked i[data-v-87d2602c]{color:#fff!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle[data-v-87d2602c]{background-color:#ffe1e6}.custom-form-wizard i.wizard-icon[data-v-87d2602c]{font-size:20px;color:#279ad6}.custom-form-wizard .stepTitle[data-v-87d2602c]{color:#279ad6}.input-group-btn[data-v-87d2602c]{display:flex;align-items:center}.input-group-btn .v-input__slot[data-v-87d2602c]{border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}.input-group-btn button[data-v-87d2602c]{border-top-left-radius:0;border-bottom-left-radius:0;height:42px!important}.p-relative[data-v-87d2602c]{position:relative!important}.p-absolute[data-v-87d2602c]{position:absolute!important}.right-0[data-v-87d2602c]{right:0}.top-0[data-v-87d2602c]{top:0}.bottom-0[data-v-87d2602c]{bottom:0}v-application a[data-v-87d2602c]{color:#279ad6!important}.mb-60[data-v-87d2602c]{margin-bottom:60px}.py-48[data-v-87d2602c]{padding-top:48px;padding-bottom:48px}.mt-32[data-v-87d2602c]{margin-top:32px}.mt--66[data-v-87d2602c]{margin-top:-66px}.mw-0[data-v-87d2602c]{min-width:0}.w-100[data-v-87d2602c]{width:100%}.size-28[data-v-87d2602c]{width:28px;height:28px}.min-vh-100[data-v-87d2602c]{min-height:100vh}.w-200[data-v-87d2602c]{width:200px}.mw-70[data-v-87d2602c]{max-width:70px}*[data-v-87d2602c]{font-size:14px}body[data-v-87d2602c],html[data-v-87d2602c]{color:#2b3445;background-color:#fff}.white-bg[data-v-87d2602c]{background:#fff}.bg-image[data-v-87d2602c]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");min-height:100vh}.bg-news[data-v-87d2602c]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-color:transparent;background-color:initial;background-position:50%;background-repeat:no-repeat;background-size:cover;position:relative;z-index:2;line-height:60px}.bg-image div[data-v-87d2602c],.bg-news[data-v-87d2602c]{text-align:center;color:#fff}.bg-image div[data-v-87d2602c]{width:61%;margin:auto;padding-top:11%;line-height:93px}.bg-image div h1[data-v-87d2602c]{font-size:3.5rem}.bg-image div button[data-v-87d2602c]{width:40%;margin:auto;display:flex}.section-bg[data-v-87d2602c]{background-color:transparent;background-color:initial;background-position:50%;background-repeat:no-repeat;background-size:cover}.section.section-xl[data-v-87d2602c]{padding:160px 0}.bg-fixed[data-v-87d2602c]{background-attachment:fixed}.section[data-v-87d2602c]{position:relative;z-index:2}.newsletter-input[data-v-87d2602c]{border-radius:20px;max-width:740px;margin:0 auto;position:relative}.newsletter-input input[data-v-87d2602c]{padding:7px;border-radius:2.25rem;width:100%;border:none;background:#fff;outline:none;transition:all .3s ease;box-shadow:0 5px 30px 0 rgba(0,0,0,.05)}.newsletter-input .btn[data-v-87d2602c]{position:absolute;margin-top:6px;top:.25rem;right:.2125rem;background:#279ad6;border-radius:60%;height:52px;width:50px}.arrow-icon[data-v-87d2602c]{position:absolute;bottom:23%;left:27%;color:#fff}.padding[data-v-87d2602c]{padding-top:20px;padding-bottom:20px}.top-categories-img[data-v-87d2602c]{width:385px;min-width:100%;max-width:100%;height:380px}.theme--light.v-sheet[data-v-87d2602c]{border-color:#fff}.testamonial-title[data-v-87d2602c]{color:#fff}.testamonial-desc[data-v-87d2602c]{color:#fff!important}.testamonial-img[data-v-87d2602c]{border-radius:50%;overflow:hidden;width:200px;height:200px}.media-content p[data-v-87d2602c]{position:absolute;top:0;left:20%;font-weight:900}@media only screen and (max-width:600px)and (min-width:350px){.bg-image div[data-v-87d2602c]{width:90%;margin:auto;padding-top:11%;color:#fff;line-height:68px;text-align:center}.bg-image div h1[data-v-87d2602c]{font-size:1.5rem}h2[data-v-87d2602c]{font-size:16px}}.space-between[data-v-87d2602c]{display:flex;justify-content:space-between;margin-left:2%;margin-right:2%}.space-between div[data-v-87d2602c]{line-height:4px!important;margin-top:20px;margin-bottom:20px;text-align:right}.theme--light.v-sheet[data-v-87d2602c]{background-color:hsla(0,0%,100%,0);border-color:hsla(0,0%,100%,0)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
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
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/home-1.5a53bc5.jpg";

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/newsletter-bg.a130812.jpg";

/***/ }),
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(195);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(214);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(213);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCarousel/VCarousel.js
var VCarousel = __webpack_require__(259);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCarousel/VCarouselItem.js
var VCarouselItem = __webpack_require__(260);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(244);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(210);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(212);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/binds-attrs/index.js
var binds_attrs = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/registrable/index.js
var registrable = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
// Mixins



/* @vue/component */

/* harmony default export */ var VForm = (Object(mixins["a" /* default */])(binds_attrs["a" /* default */], Object(registrable["b" /* provide */])('form')
/* @vue/component */).extend({
  name: 'v-form',
  provide() {
    return {
      form: this
    };
  },
  inheritAttrs: false,
  props: {
    disabled: Boolean,
    lazyValidation: Boolean,
    readonly: Boolean,
    value: Boolean
  },
  data: () => ({
    inputs: [],
    watchers: [],
    errorBag: {}
  }),
  watch: {
    errorBag: {
      handler(val) {
        const errors = Object.values(val).includes(true);
        this.$emit('input', !errors);
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    watchInput(input) {
      const watcher = input => {
        return input.$watch('hasError', val => {
          this.$set(this.errorBag, input._uid, val);
        }, {
          immediate: true
        });
      };
      const watchers = {
        _uid: input._uid,
        valid: () => {},
        shouldValidate: () => {}
      };
      if (this.lazyValidation) {
        // Only start watching inputs if we need to
        watchers.shouldValidate = input.$watch('shouldValidate', val => {
          if (!val) return; // Only watch if we're not already doing it

          if (this.errorBag.hasOwnProperty(input._uid)) return;
          watchers.valid = watcher(input);
        });
      } else {
        watchers.valid = watcher(input);
      }
      return watchers;
    },
    /** @public */
    validate() {
      return this.inputs.filter(input => !input.validate(true)).length === 0;
    },
    /** @public */
    reset() {
      this.inputs.forEach(input => input.reset());
      this.resetErrorBag();
    },
    resetErrorBag() {
      if (this.lazyValidation) {
        // Account for timeout in validatable
        setTimeout(() => {
          this.errorBag = {};
        }, 0);
      }
    },
    /** @public */
    resetValidation() {
      this.inputs.forEach(input => input.resetValidation());
      this.resetErrorBag();
    },
    register(input) {
      this.inputs.push(input);
      this.watchers.push(this.watchInput(input));
    },
    unregister(input) {
      const found = this.inputs.find(i => i._uid === input._uid);
      if (!found) return;
      const unwatch = this.watchers.find(i => i._uid === found._uid);
      if (unwatch) {
        unwatch.valid();
        unwatch.shouldValidate();
      }
      this.watchers = this.watchers.filter(i => i._uid !== found._uid);
      this.inputs = this.inputs.filter(i => i._uid !== found._uid);
      this.$delete(this.errorBag, found._uid);
    }
  },
  render(h) {
    return h('form', {
      staticClass: 'v-form',
      attrs: {
        novalidate: true,
        ...this.attrs$
      },
      on: {
        submit: e => this.$emit('submit', e)
      }
    }, this.$slots.default);
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAvatar.js
var VListItemAvatar = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 1 modules
var VList = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(209);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=87d2602c&scoped=true&


















var lib_vue_loader_options_pagesvue_type_template_id_87d2602c_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {}, [_vm._ssrNode("<div class=\"white mb-60\" data-v-87d2602c>", "</div>", [_c(VContainer["a" /* default */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "xl": "12",
      "lg": "12",
      "md": "12",
      "sm": "12"
    }
  }, [_c(VCarousel["a" /* default */], {
    staticClass: "vuetify-carousel",
    attrs: {
      "cycle": "",
      "height": "100%",
      "hide-delimiter-background": "",
      "show-arrows-on-hover": "",
      "show-arrows": false
    }
  }, _vm._l(_vm.topSlider, function (item, index) {
    return _c(VCarouselItem["a" /* default */], {
      key: 'topSlider' + index
    }, [_c(VSheet["a" /* default */], {
      attrs: {
        "height": "100%",
        "light": ""
      }
    }, [_c(VRow["a" /* default */], {
      staticClass: "fill-height",
      attrs: {
        "align": "center"
      }
    }, [_c(VCol["a" /* default */], {
      staticClass: "mb-14 mb-sm-0",
      attrs: {
        "cols": "7",
        "lg": "8"
      }
    }, [_c(VCol["a" /* default */], {
      staticClass: "ms-3 ps-0",
      attrs: {
        "cols": "12",
        "xl": "7"
      }
    }, [_c('h1', {
      staticClass: "show-3 font-weight-bold mb-4"
    }, [_vm._v("\n                        " + _vm._s(_vm.$t("home.top_slider.title")) + "\n                      ")])]), _vm._v(" "), _c(VCol["a" /* default */], {
      attrs: {
        "cols": "12",
        "xl": "8"
      }
    }, [_c('p', {
      staticClass: "secondary--text banner-text mb-4"
    }, [_vm._v("\n                        " + _vm._s(_vm.$t("home.top_slider.sub_title")) + "\n                      ")])]), _vm._v(" "), _c(VBtn["a" /* default */], {
      staticClass: "text-capitalize ms-3",
      attrs: {
        "color": "primary"
      }
    }, [_vm._v(" " + _vm._s(_vm.$t("home.top_slider.button")))])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
      attrs: {
        "cols": "5",
        "lg": "4"
      }
    }, [_c(VImg["a" /* default */], {
      attrs: {
        "aspect-ratio": "1",
        "contain": "",
        "src": item.img
      }
    })], 1)], 1)], 1)], 1);
  }), 1)], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"white mb-60\" data-v-87d2602c>", "</div>", [_c(VContainer["a" /* default */], {
    staticClass: "mb-60"
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "d-flex justify-space-between align-center mb-4"
  }, [_c('div', {
    staticClass: "d-flex align-center"
  }, [_c('h2', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t("home.first_container.feature_transaction")))])]), _vm._v(" "), _c('a', {
    staticClass: "text-decoration-none blue-grey--text darken-1",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("\n            View all\n            "), _c(VIcon["a" /* default */], {
    staticClass: "m-0 p-0"
  }, [_vm._v("mdi-menu-right")])], 1)])]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "px-0",
    attrs: {
      "cols": "12"
    }
  }, [_c(VRow["a" /* default */], _vm._l(_vm.transactions, function (item, index) {
    return _c(VCol["a" /* default */], {
      key: index,
      staticClass: "col-12 col-lg-4 col-md-4 col-sm-6 m-5"
    }, [_c('CardCart', {
      attrs: {
        "cardHoverShadow": "",
        "content-img": item.item.image,
        "content-text": item.item.title,
        "counter": item.qty,
        "content": item,
        "amount": item.amount
      },
      on: {
        "cartRemove": function ($event) {
          return _vm.removeCart(item);
        },
        "cartAdd": function ($event) {
          return _vm.addCart(item);
        }
      }
    })], 1);
  }), 1)], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"white padding\" data-v-87d2602c>", "</div>", [_c(VContainer["a" /* default */], {
    staticClass: "mb-60 white-bg"
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    staticClass: "white col-12 col-lg-6 col-md-6 col-sm-12 col-sm-8 col-xl-6",
    attrs: {
      "col-xs": "12"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "white pa-11",
    attrs: {
      "elevation": "0"
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', [_c('h2', [_vm._v(_vm._s(_vm.$t("home.second_container.invest_with_repo")))]), _vm._v(" "), _c('p', [_vm._v("\n                    " + _vm._s(_vm.$t("home.second_container.paragraph")) + "\n                  ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticStyle: {
      "color": "#fff"
    },
    attrs: {
      "color": "#279ad6",
      "elevation": "2",
      "x-large": ""
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("home.second_container.button")))])], 1)])], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": __webpack_require__(261)
    }
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t("home.second_container.attractive_rates")))])])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": __webpack_require__(262)
    }
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t("home.second_container.helping_citizen")))])])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": __webpack_require__(263)
    }
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t("home.second_container.option_to_purchase")) + "\n                  ")])])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": __webpack_require__(264)
    }
  }), _vm._v(" "), _c('p', [_vm._v("\n                    " + _vm._s(_vm.$t("home.second_container.loan_secured")) + "\n                  ")])])])], 1)], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "col-12 col-lg-6 col-md-6 col-sm-12 col-sm-8 col-xl-6",
    attrs: {
      "col-xs": "12"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-11",
    staticStyle: {
      "min-height": "671px"
    },
    attrs: {
      "elevation": "0"
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', [_c('h2', [_vm._v(_vm._s(_vm.$t("home.second_container.invest_with_repo")))]), _vm._v(" "), _c('p', [_vm._v("\n                    " + _vm._s(_vm.$t("home.second_container.inexpansive")) + "\n                  ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticStyle: {
      "color": "#fff"
    },
    attrs: {
      "color": "#279ad6",
      "elevation": "2",
      "x-large": ""
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("home.second_container.button")))])], 1)])], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": __webpack_require__(261)
    }
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t("home.second_container.bank_consumer")) + "\n                  ")])])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": __webpack_require__(262)
    }
  }), _vm._v(" "), _c('p', [_vm._v("\n                    " + _vm._s(_vm.$t("home.second_container.flexibility_loan")) + "\n                  ")])])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": __webpack_require__(263)
    }
  }), _vm._v(" "), _c('p', [_vm._v("\n                    " + _vm._s(_vm.$t("home.second_container.debt")) + "\n                  ")])])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": __webpack_require__(264)
    }
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t("home.second_container.right_to_default")))])])])], 1)], 1)], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"bg-fixed ng-star-inserted section section-bg section-xl white mb-60 bg-news\" data-v-87d2602c>", "</div>", [_vm._ssrNode("<div data-v-87d2602c>", "</div>", [_vm._ssrNode("<p data-v-87d2602c>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t("home.second_container.subscribe")) + "\n      ") + "</p> <h2 data-v-87d2602c>Newsletter</h2> "), _c(VForm, [_c(VContainer["a" /* default */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    staticClass: "offset-3",
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "newsletter-input",
    attrs: {
      "_ngcontent-serverapp-c84": ""
    }
  }, [_c('input', {
    attrs: {
      "_ngcontent-serverapp-c84": "",
      "type": "text",
      "placeholder": _vm.$t("home.second_container.placeholder")
    }
  }), _c('button', {
    staticClass: "mat-focus-indicator btn mat-fab mat-button-base mat-primary",
    attrs: {
      "_ngcontent-serverapp-c84": "",
      "mat-fab": "",
      "color": "primary"
    }
  }, [_c(VIcon["a" /* default */], {
    staticClass: "arrow-icon"
  }, [_vm._v("mdi-arrow-right")]), _vm._v(" "), _c('span', {
    staticClass: "mat-ripple mat-button-ripple mat-button-ripple-round",
    attrs: {
      "matripple": ""
    }
  }), _c('span', {
    staticClass: "mat-button-focus-overlay"
  })], 1)])])], 1)], 1)], 1)], 2)]), _vm._ssrNode(" "), _c(VContainer["a" /* default */], {
    staticClass: "mb-60"
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "d-flex justify-space-between align-center mb-4"
  }, [_c('div', {
    staticClass: "d-flex align-center"
  }, [_c('h2', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t("home.third_container.article")))])]), _vm._v(" "), _c('a', {
    staticClass: "text-decoration-none blue-grey--text darken-1",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("\n            View all\n            "), _c(VIcon["a" /* default */], {
    staticClass: "m-0 p-0"
  }, [_vm._v("mdi-menu-right")])], 1)])]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "px-0",
    attrs: {
      "cols": "12"
    }
  }, [_c(VRow["a" /* default */], _vm._l(_vm.posts.slice(0, 3), function (n, index) {
    return _c(VCol["a" /* default */], {
      key: index,
      staticClass: "col-12 col-lg-4 col-md-4 col-sm-6 m-5"
    }, [_c('base-card', [_c(components_VCard["a" /* VCardText */], [_c('router-link', {
      staticClass: "text-decoration-none",
      attrs: {
        "to": "/single-product"
      }
    }, [_c(VImg["a" /* default */], {
      staticClass: "card-overlay-item mb-2 br-8",
      attrs: {
        "src": n.featured,
        "height": "400px"
      }
    })], 1), _vm._v(" "), _c('router-link', {
      staticClass: "text-decoration-none",
      attrs: {
        "to": "/single-product"
      }
    }, [_c(VChip["a" /* default */], {
      attrs: {
        "color": "blue"
      }
    }, [_vm._v("\n                    " + _vm._s(n.categories.length > 0 ? n.categories[0].name : ""))]), _vm._v(" "), _c('h5', {
      staticClass: "grey--text text--darken-4"
    }, [_vm._v("\n                    " + _vm._s(n.title) + "\n                  ")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm._f("formatDate")(n.created_at)))])], 1)], 1)], 1)], 1);
  }), 1)], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"white mb-60 bg-fixed ng-star-inserted section section-bg section-xl white mb-60 bg-news\" data-v-87d2602c>", "</div>", [_c(VContainer["a" /* default */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "xl": "12",
      "lg": "12",
      "md": "12",
      "sm": "12"
    }
  }, [_c(VCarousel["a" /* default */], {
    staticClass: "vuetify-carousel",
    attrs: {
      "cycle": "",
      "height": "100%",
      "hide-delimiter-background": "",
      "show-arrows-on-hover": "",
      "show-arrows": false
    }
  }, _vm._l(_vm.testimonial, function (item, index) {
    return _c(VCarouselItem["a" /* default */], {
      key: index
    }, [_c(VSheet["a" /* default */], {
      attrs: {
        "height": "100%",
        "light": ""
      }
    }, [_c(VRow["a" /* default */], {
      staticClass: "fill-height",
      attrs: {
        "align": "center"
      }
    }, [_c(VCol["a" /* default */], {
      staticClass: "mb-14 mb-sm-0",
      attrs: {
        "cols": "7",
        "lg": "8"
      }
    }, [_c(VCol["a" /* default */], {
      staticClass: "ms-3 ps-0",
      attrs: {
        "cols": "12",
        "xl": "7"
      }
    }, [_c('h1', {
      staticClass: "show-3 font-weight-bold mb-4",
      staticStyle: {
        "color": "#fff !important"
      }
    }, [_vm._v("\n                        " + _vm._s(_vm.$t("home.bottomcorasal.customer_thinking")) + "\n                      ")])]), _vm._v(" "), _c(VCol["a" /* default */], {
      attrs: {
        "cols": "12",
        "xl": "8"
      }
    }, [_c('p', {
      staticClass: "secondary--text banner-text mb-4",
      staticStyle: {
        "color": "#fff !important",
        "font-weight": "bold"
      }
    }, [_vm._v("\n                        " + _vm._s(item.description) + "\n                      ")])]), _vm._v(" "), _c(VCard["a" /* default */], {
      staticClass: "mx-auto",
      attrs: {
        "max-width": "200",
        "outlined": ""
      }
    }, [_c(VListItem["a" /* default */], {
      attrs: {
        "three-line": ""
      }
    }, [_c(VListItemAvatar["a" /* default */], {
      attrs: {
        "tile": "",
        "size": "80",
        "color": "grey"
      }
    }, [_c(VImg["a" /* default */], {
      attrs: {
        "src": item.picture
      }
    })], 1), _vm._v(" "), _c(VList["a" /* VListItemContent */], [_c('div', {
      staticClass: "text-overline mb-4",
      staticStyle: {
        "color": "#fff",
        "font-weight": "bold"
      }
    }, [_vm._v("\n                            " + _vm._s(item.name) + "\n                          ")])])], 1)], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
      attrs: {
        "cols": "5",
        "lg": "4"
      }
    })], 1)], 1)], 1);
  }), 1)], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _c(VContainer["a" /* default */], {
    staticClass: "mb-60"
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "d-flex justify-space-between mb-4"
  }, [_c('div', {
    staticClass: "d-flex align-center"
  }, [_c('h2', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t("home.bottomcorasal.our_partner")))])])])]), _vm._v(" "), _vm._l(_vm.partners, function (n, index) {
    return _c(VCol["a" /* default */], {
      key: index,
      attrs: {
        "cols": "6",
        "sm": "4",
        "md": "3",
        "lg": "2"
      }
    }, [_c('base-card', {
      staticClass: "card-hover-shadow"
    }, [_c(components_VCard["a" /* VCardText */], [_c('div', {
      staticClass: "d-flex align-center"
    }, [_c(VAvatar["a" /* default */], {
      attrs: {
        "tile": ""
      }
    }, [_c('img', {
      staticClass: "mr-3",
      attrs: {
        "src": n.image.full_path,
        "alt": ""
      }
    })]), _vm._v(" "), _c('p', {
      staticClass: "font-weight-bold mb-0 text-truncate"
    }, [_vm._v("\n                " + _vm._s(n.name) + "\n              ")])], 1)])], 1)], 1);
  })], 2)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=87d2602c&scoped=true&

// EXTERNAL MODULE: ./pages/home/navbar.vue + 4 modules
var navbar = __webpack_require__(47);

// EXTERNAL MODULE: ./components/cartCard/CardCart.vue + 8 modules
var CardCart = __webpack_require__(246);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(199);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&




/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  // name: 'Home',
  components: {
    Navbar: navbar["default"],
    CardCart: CardCart["default"]
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(["getProducts"])
  },
  filters: {
    formatDate(value) {
      return external_moment_default()(value).format("mm DD, yyyy");
    }
  },
  data() {
    return {
      slickSettings: {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [{
          breakpoint: 2100,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true
          }
        }, {
          breakpoint: 1900,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true
          }
        }, {
          breakpoint: 1800,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true
          }
        }, {
          breakpoint: 1264,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        }, {
          breakpoint: 960,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      },
      slickSettingsTwo: {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [{
          breakpoint: 1700,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        }, {
          breakpoint: 1264,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true
          }
        }, {
          breakpoint: 960,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        }, {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }]
      },
      slickSettingsThree: {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [{
          breakpoint: 1700,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
            infinite: true
          }
        }, {
          breakpoint: 1264,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true
          }
        }, {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }]
      },
      topRatings: [{
        img: __webpack_require__(277),
        title: "Camera",
        price: "$3,300"
      }, {
        img: __webpack_require__(278),
        title: "Shoe",
        price: "$400"
      }, {
        img: __webpack_require__(279),
        title: "Mobile",
        price: "$999"
      }, {
        img: __webpack_require__(280),
        title: "Watch",
        price: "$600"
      }],
      newArrivals: [{
        img: __webpack_require__(281),
        title: "Sunglass",
        price: "$150"
      }, {
        img: __webpack_require__(265),
        title: "Lipstick",
        price: "$250"
      }, {
        img: __webpack_require__(265),
        title: "Lipstick",
        price: "$250"
      }, {
        img: __webpack_require__(282),
        title: "Lipstick",
        price: "$250"
      }, {
        img: __webpack_require__(283),
        title: "Green Plant",
        price: "$250"
      }, {
        img: __webpack_require__(284),
        title: "Bonsai Tree",
        price: "$450"
      }],
      topSlider: [{
        img: __webpack_require__(285),
        title: "Sunglass",
        price: "$150"
      }, {
        img: __webpack_require__(286),
        title: "Lipstick",
        price: "$250"
      }, {
        img: __webpack_require__(287),
        title: "Lipstick",
        price: "$250"
      }, {
        img: __webpack_require__(288),
        title: "Lipstick",
        price: "$250"
      }, {
        img: __webpack_require__(289),
        title: "Green Plant",
        price: "$250"
      }, {
        img: __webpack_require__(290),
        title: "Bonsai Tree",
        price: "$450"
      }],
      bigDiscounts: [{
        img: __webpack_require__(291),
        title: "BenX 2020"
      }, {
        img: __webpack_require__(292),
        title: "Tony TV 1080p"
      }, {
        img: __webpack_require__(293),
        title: "Tony PS4"
      }, {
        img: __webpack_require__(294),
        title: "Setgearr 2020"
      }, {
        img: __webpack_require__(295),
        title: "Tony BGB"
      }, {
        img: __webpack_require__(296),
        title: "RG Products"
      }, {
        img: __webpack_require__(297),
        title: "Sanasonic 2019"
      }, {
        img: __webpack_require__(298),
        title: "Zune HD"
      }, {
        img: __webpack_require__(299),
        title: "JK Washing Machine"
      }],
      topCategories: [{
        img: __webpack_require__(245)
      }, {
        img: __webpack_require__(266)
      }, {
        img: __webpack_require__(267)
      }, {
        img: __webpack_require__(245)
      }, {
        img: __webpack_require__(245)
      }, {
        img: __webpack_require__(266)
      }, {
        img: __webpack_require__(267)
      }, {
        img: __webpack_require__(245)
      }],
      featuredBrands: [{
        img: __webpack_require__(300),
        title: "London Britches"
      }, {
        img: __webpack_require__(301),
        title: "Jim & Jago"
      }],
      categories: [{
        img: __webpack_require__(268),
        title: "Tops"
      }, {
        img: __webpack_require__(248),
        title: "Jacket"
      }, {
        img: __webpack_require__(302),
        title: "Smart Watch"
      }, {
        img: __webpack_require__(303),
        title: "Sunglasses"
      }, {
        img: __webpack_require__(304),
        title: "Cap"
      }, {
        img: __webpack_require__(305),
        title: "Nike Red"
      }, {
        img: __webpack_require__(306),
        title: "Nike Silver"
      }, {
        img: __webpack_require__(307),
        title: "Gold Necklace"
      }, {
        img: __webpack_require__(308),
        title: "NBL Hoodie"
      }, {
        img: __webpack_require__(248),
        title: "Jacket"
      }, {
        img: __webpack_require__(268),
        title: "Tops"
      }, {
        img: __webpack_require__(248),
        title: "Jacket"
      }],
      heroSlider: [{
        img: __webpack_require__(249),
        name: "50% Off For Your First Shopping"
      }, {
        img: __webpack_require__(249),
        name: " 20% Off For  First Electronics Purchase"
      }, {
        img: __webpack_require__(249),
        name: "Get 70% Off For  First  Grocery Purchase"
      }],
      tab: null,
      items: ["Brands", "Shops"],
      transactions: [],
      testimonial: [],
      partners: [],
      posts: []
    };
  },
  created() {
    this.$axios.$get("/data/home").then(success => {
      console.log(success);
      this.transactions = success.transactions;
      this.testimonial = success.testimonials;
      this.partners = success.partners;
      this.posts = success.posts;
    });
  },
  methods: {
    ...Object(external_vuex_["mapActions"])(["addCart", "removeCart"])
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(309)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  lib_vue_loader_options_pagesvue_type_template_id_87d2602c_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "87d2602c",
  "036420ad"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })
]);;
//# sourceMappingURL=index.js.map