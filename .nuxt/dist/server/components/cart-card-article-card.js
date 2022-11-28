exports.ids = [1];
exports.modules = {

/***/ 213:
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

/***/ 214:
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

/***/ 215:
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

/***/ 216:
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

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(218);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("cf87dc84", content, true)

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bg-primary-lighten{background-color:#fce9ec!important}.text-primary-lighten{color:#fce9ec}.bg-body{background-color:#f6f9fc}.footer-text{color:#bdbdbd}.border-primary{border:1px solid #279ad6!important}.bg-white{background-color:#fff}a{color:#279ad6!important}h1{font-size:30px}h2{font-size:25px}h3{font-size:20px}h4{font-size:17px}.text-14,h5{font-size:14px}.text-16{font-size:16px}.text-sm{font-size:12px}.text-11{font-size:11px!important}.text-10{font-size:10px}.text-30{font-size:30px}.text-40{font-size:40px}.text-tiny{font-size:10px}.display-1{font-size:80px}.show-2{font-size:66px}@media(max-width:992px){.show-2{font-size:15px!important}}.show-3{line-height:1.2;font-size:50px!important}@media(max-width:600px){.show-3{font-size:30px!important}}@media(max-width:400px){.show-3{font-size:15px!important}}@media(max-width:992px){.banner-text{font-size:12px!important}}.shadow-sm{box-shadow:0 1px 3px rgba(3,0,71,.09)!important}.shadow{box-shadow:0 4px 16px rgba(43,52,69,.1)!important}.shadow-lg{box-shadow:0 8px 45px rgba(3,0,71,.09)!important}.font-600{font-weight:600}.ls-4{letter-spacing:4px}.leading-tight{line-height:1.25}.container-lg{max-width:1200px}.flex-1{flex:1}.cursor-pointer{cursor:pointer}.w-33{width:33.33%}.border-grey{border:1px solid #dae1e7}.z-0{z-index:0}.z-1{z-index:1}.z-10{z-index:10}.br-8{border-radius:8px!important}.br-12{border-radius:12px!important}.h-100{height:100%}.border-4-white{border:4px solid #fff}.card-overlay-item{position:relative}.card-overlay-item:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;transition:all .25s ease-in-out 0s}.card-overlay-item:hover:after{background:rgba(0,0,0,.3);z-index:0;border-radius:8px;cursor:pointer}.top-search-bar .v-text-field__details{display:none!important}svg{fill:currentColor!important}svg.icon:focus,svg:focus{outline:none}.bb-primary{border-bottom:2px solid #279ad6}ul.navbar-nav li.nav-item{position:relative;z-index:10}ul.navbar-nav li.nav-item:hover ul{display:block}ul.navbar-nav li.nav-item>ul{position:absolute}ul.navbar-nav li.nav-item ul{top:100%;box-shadow:0 4px 16px rgba(43,52,69,.1);background-color:#fff;padding:5px 0;width:250px;max-width:250px;border-radius:8px;display:none}ul.navbar-nav li.nav-item ul li{position:relative;list-style-type:none}ul.navbar-nav li.nav-item ul li:hover{background-color:#f6f9fc}ul.navbar-nav li.nav-item ul li a{width:100%;color:#4b566b;padding:.5rem 1rem;display:flex}ul.navbar-nav li.nav-item ul li:hover .navbar-submenu{display:block}ul.navbar-nav li.nav-item ul li .navbar-submenu{position:absolute;left:100%;top:0;display:none;width:100%;z-index:10;padding-left:1rem}ul.navigation-navbar .nav-item .nav-link{color:#0f3460}ul.navigation-navbar .nav-item .nav-link.active,ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}.hero-section-bg ul.navigation-navbar .nav-item .nav-link{color:#fff}.hero-section-bg ul.navigation-navbar .nav-item .nav-link.active,.hero-section-bg ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}ul.navbar-nav li.nav-item{list-style:none;margin-right:2rem!important}ul.navbar-nav li.nav-item:last-child{margin-right:0!important}ul.navbar-nav li.nav-item a{text-decoration:none}.router-link-active{color:#279ad6}.vuetify-carousel .v-carousel__controls .v-item-group button{color:#0f3460}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.5!important}.slick-next.slick-top-next-btn{top:-40px;right:0}.slick-next:before{opacity:0!important}@media(max-width:992px){.slick-next{right:5px!important}}.slick-prev{position:absolute;z-index:2}.slick-prev.slick-top-prev-btn{top:-40px;left:calc(100% - 105px)}@media(max-width:992px){.slick-prev.slick-top-prev-btn{left:calc(100% - 105px)!important}}.slick-prev:before{opacity:0!important}@media(max-width:992px){.slick-prev{left:5px!important}}.slick-dots{bottom:0!important}.slick-dots li button:before{font-size:16px!important}.slick-dots li.slick-active button:before,.slick-dots li:hover button:before{color:#0f3460!important;opacity:1!important}@media(max-width:375px){.slick-header-top-title{width:200px}}.slick-left-arrow{position:absolute;left:0!important}.slick-right-arrow{position:absolute;right:0!important}.slick-button-hover:hover .slick-arrow{display:block}.slick-button-hover .slick-arrow{display:none}.icon{width:24px;height:24px}.avatar-64{width:64px;height:auto}.brand-tabs .v-tabs-slider-wrapper{display:none}.box-wrapper{position:relative;display:flex;align-items:flex-start;width:100%;border-radius:8px}@media(max-width:959px){.box-wrapper .box-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99;background-color:rgba(0,0,0,.5);display:none}.box-wrapper .box-overlay.open{display:block}}.box-wrapper.box-wrapper-version-2 .box-sidebar{border-radius:0}.box-wrapper .box-sidebar{width:282px;background-color:#fff;border-radius:8px;transition:all .3s ease}@media(max-width:959px){.box-wrapper .box-sidebar{position:fixed;top:0;left:-282px;border-radius:0;z-index:99;overflow-y:scroll;height:calc(100% - 56px)}.box-wrapper .box-sidebar.open{left:0}}.box-wrapper .box-content{width:calc(100% - 300px);margin-left:auto;border-radius:8px}@media(max-width:959px){.box-wrapper .box-content{width:100%}}.custom-form-wizard.vue-form-wizard.md .wizard-icon-circle{width:96px!important;height:36px!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{top:23px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.square_shape,.custom-form-wizard.vue-form-wizard .wizard-icon-circle .wizard-icon-container.square_shape,.custom-form-wizard .vue-form-wizard .wizard-icon-circle .wizard-icon-container.tab_shape{border-radius:20px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle{border:none!important;border-radius:50%;font-weight:600;background-color:#ffe1e6!important;position:relative}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked{background-color:#279ad6!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked i{color:#fff!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{background-color:#ffe1e6}.custom-form-wizard i.wizard-icon{font-size:20px;color:#279ad6}.custom-form-wizard .stepTitle{color:#279ad6}.input-group-btn{display:flex;align-items:center}.input-group-btn .v-input__slot{border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}.input-group-btn button{border-top-left-radius:0;border-bottom-left-radius:0;height:42px!important}.p-relative{position:relative!important}.p-absolute{position:absolute!important}.right-0{right:0}.top-0{top:0}.bottom-0{bottom:0}v-application a{color:#279ad6!important}.mb-60{margin-bottom:60px}.py-48{padding-top:48px;padding-bottom:48px}.mt-32{margin-top:32px}.mt--66{margin-top:-66px}.mw-0{min-width:0}.w-100{width:100%}.size-28{width:28px;height:28px}.min-vh-100{min-height:100vh}.w-200{width:200px}.mw-70{max-width:70px}*{font-size:14px}body,html{color:#2b3445;background-color:#fff}.theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{animation-play-state:paused;background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{animation-name:indeterminate-ltr;animation-duration:2.2s;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{animation-name:indeterminate-short-ltr;animation-duration:2.2s;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{animation-name:indeterminate-short-rtl}.v-progress-linear__stream{animation:stream-ltr .25s linear infinite;animation-play-state:paused;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{animation-name:query-ltr;animation-duration:2s;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{animation-name:query-short-ltr;animation-duration:2s;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{animation-name:query-short-rtl}.v-progress-linear--visible .v-progress-linear__indeterminate--active .long,.v-progress-linear--visible .v-progress-linear__indeterminate--active .short,.v-progress-linear--visible .v-progress-linear__stream{animation-play-state:running}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(220);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("e23b7040", content, true)

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bg-primary-lighten{background-color:#fce9ec!important}.text-primary-lighten{color:#fce9ec}.bg-body{background-color:#f6f9fc}.footer-text{color:#bdbdbd}.border-primary{border:1px solid #279ad6!important}.bg-white{background-color:#fff}a{color:#279ad6!important}h1{font-size:30px}h2{font-size:25px}h3{font-size:20px}h4{font-size:17px}.text-14,h5{font-size:14px}.text-16{font-size:16px}.text-sm{font-size:12px}.text-11{font-size:11px!important}.text-10{font-size:10px}.text-30{font-size:30px}.text-40{font-size:40px}.text-tiny{font-size:10px}.display-1{font-size:80px}.show-2{font-size:66px}@media(max-width:992px){.show-2{font-size:15px!important}}.show-3{line-height:1.2;font-size:50px!important}@media(max-width:600px){.show-3{font-size:30px!important}}@media(max-width:400px){.show-3{font-size:15px!important}}@media(max-width:992px){.banner-text{font-size:12px!important}}.shadow-sm{box-shadow:0 1px 3px rgba(3,0,71,.09)!important}.shadow{box-shadow:0 4px 16px rgba(43,52,69,.1)!important}.shadow-lg{box-shadow:0 8px 45px rgba(3,0,71,.09)!important}.font-600{font-weight:600}.ls-4{letter-spacing:4px}.leading-tight{line-height:1.25}.container-lg{max-width:1200px}.flex-1{flex:1}.cursor-pointer{cursor:pointer}.w-33{width:33.33%}.border-grey{border:1px solid #dae1e7}.z-0{z-index:0}.z-1{z-index:1}.z-10{z-index:10}.br-8{border-radius:8px!important}.br-12{border-radius:12px!important}.h-100{height:100%}.border-4-white{border:4px solid #fff}.card-overlay-item{position:relative}.card-overlay-item:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;transition:all .25s ease-in-out 0s}.card-overlay-item:hover:after{background:rgba(0,0,0,.3);z-index:0;border-radius:8px;cursor:pointer}.top-search-bar .v-text-field__details{display:none!important}svg{fill:currentColor!important}svg.icon:focus,svg:focus{outline:none}.bb-primary{border-bottom:2px solid #279ad6}ul.navbar-nav li.nav-item{position:relative;z-index:10}ul.navbar-nav li.nav-item:hover ul{display:block}ul.navbar-nav li.nav-item>ul{position:absolute}ul.navbar-nav li.nav-item ul{top:100%;box-shadow:0 4px 16px rgba(43,52,69,.1);background-color:#fff;padding:5px 0;width:250px;max-width:250px;border-radius:8px;display:none}ul.navbar-nav li.nav-item ul li{position:relative;list-style-type:none}ul.navbar-nav li.nav-item ul li:hover{background-color:#f6f9fc}ul.navbar-nav li.nav-item ul li a{width:100%;color:#4b566b;padding:.5rem 1rem;display:flex}ul.navbar-nav li.nav-item ul li:hover .navbar-submenu{display:block}ul.navbar-nav li.nav-item ul li .navbar-submenu{position:absolute;left:100%;top:0;display:none;width:100%;z-index:10;padding-left:1rem}ul.navigation-navbar .nav-item .nav-link{color:#0f3460}ul.navigation-navbar .nav-item .nav-link.active,ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}.hero-section-bg ul.navigation-navbar .nav-item .nav-link{color:#fff}.hero-section-bg ul.navigation-navbar .nav-item .nav-link.active,.hero-section-bg ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}ul.navbar-nav li.nav-item{list-style:none;margin-right:2rem!important}ul.navbar-nav li.nav-item:last-child{margin-right:0!important}ul.navbar-nav li.nav-item a{text-decoration:none}.router-link-active{color:#279ad6}.vuetify-carousel .v-carousel__controls .v-item-group button{color:#0f3460}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.5!important}.slick-next.slick-top-next-btn{top:-40px;right:0}.slick-next:before{opacity:0!important}@media(max-width:992px){.slick-next{right:5px!important}}.slick-prev{position:absolute;z-index:2}.slick-prev.slick-top-prev-btn{top:-40px;left:calc(100% - 105px)}@media(max-width:992px){.slick-prev.slick-top-prev-btn{left:calc(100% - 105px)!important}}.slick-prev:before{opacity:0!important}@media(max-width:992px){.slick-prev{left:5px!important}}.slick-dots{bottom:0!important}.slick-dots li button:before{font-size:16px!important}.slick-dots li.slick-active button:before,.slick-dots li:hover button:before{color:#0f3460!important;opacity:1!important}@media(max-width:375px){.slick-header-top-title{width:200px}}.slick-left-arrow{position:absolute;left:0!important}.slick-right-arrow{position:absolute;right:0!important}.slick-button-hover:hover .slick-arrow{display:block}.slick-button-hover .slick-arrow{display:none}.icon{width:24px;height:24px}.avatar-64{width:64px;height:auto}.brand-tabs .v-tabs-slider-wrapper{display:none}.box-wrapper{position:relative;display:flex;align-items:flex-start;width:100%;border-radius:8px}@media(max-width:959px){.box-wrapper .box-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99;background-color:rgba(0,0,0,.5);display:none}.box-wrapper .box-overlay.open{display:block}}.box-wrapper.box-wrapper-version-2 .box-sidebar{border-radius:0}.box-wrapper .box-sidebar{width:282px;background-color:#fff;border-radius:8px;transition:all .3s ease}@media(max-width:959px){.box-wrapper .box-sidebar{position:fixed;top:0;left:-282px;border-radius:0;z-index:99;overflow-y:scroll;height:calc(100% - 56px)}.box-wrapper .box-sidebar.open{left:0}}.box-wrapper .box-content{width:calc(100% - 300px);margin-left:auto;border-radius:8px}@media(max-width:959px){.box-wrapper .box-content{width:100%}}.custom-form-wizard.vue-form-wizard.md .wizard-icon-circle{width:96px!important;height:36px!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{top:23px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.square_shape,.custom-form-wizard.vue-form-wizard .wizard-icon-circle .wizard-icon-container.square_shape,.custom-form-wizard .vue-form-wizard .wizard-icon-circle .wizard-icon-container.tab_shape{border-radius:20px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle{border:none!important;border-radius:50%;font-weight:600;background-color:#ffe1e6!important;position:relative}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked{background-color:#279ad6!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked i{color:#fff!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{background-color:#ffe1e6}.custom-form-wizard i.wizard-icon{font-size:20px;color:#279ad6}.custom-form-wizard .stepTitle{color:#279ad6}.input-group-btn{display:flex;align-items:center}.input-group-btn .v-input__slot{border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}.input-group-btn button{border-top-left-radius:0;border-bottom-left-radius:0;height:42px!important}.p-relative{position:relative!important}.p-absolute{position:absolute!important}.right-0{right:0}.top-0{top:0}.bottom-0{bottom:0}v-application a{color:#279ad6!important}.mb-60{margin-bottom:60px}.py-48{padding-top:48px;padding-bottom:48px}.mt-32{margin-top:32px}.mt--66{margin-top:-66px}.mw-0{min-width:0}.w-100{width:100%}.size-28{width:28px;height:28px}.min-vh-100{min-height:100vh}.w-200{width:200px}.mw-70{max-width:70px}*{font-size:14px}body,html{color:#2b3445;background-color:#fff}.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(352);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("08acb838", content, true, context)
};

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleCard_vue_vue_type_style_index_0_id_192f27da_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(276);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleCard_vue_vue_type_style_index_0_id_192f27da_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleCard_vue_vue_type_style_index_0_id_192f27da_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleCard_vue_vue_type_style_index_0_id_192f27da_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleCard_vue_vue_type_style_index_0_id_192f27da_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bg-primary-lighten[data-v-192f27da]{background-color:#fce9ec!important}.text-primary-lighten[data-v-192f27da]{color:#fce9ec}.bg-body[data-v-192f27da]{background-color:#f6f9fc}.footer-text[data-v-192f27da]{color:#bdbdbd}.border-primary[data-v-192f27da]{border:1px solid #279ad6!important}.bg-white[data-v-192f27da]{background-color:#fff}a[data-v-192f27da]{color:#279ad6!important}h1[data-v-192f27da]{font-size:30px}h2[data-v-192f27da]{font-size:25px}h3[data-v-192f27da]{font-size:20px}h4[data-v-192f27da]{font-size:17px}.text-14[data-v-192f27da],h5[data-v-192f27da]{font-size:14px}.text-16[data-v-192f27da]{font-size:16px}.text-sm[data-v-192f27da]{font-size:12px}.text-11[data-v-192f27da]{font-size:11px!important}.text-10[data-v-192f27da]{font-size:10px}.text-30[data-v-192f27da]{font-size:30px}.text-40[data-v-192f27da]{font-size:40px}.text-tiny[data-v-192f27da]{font-size:10px}.display-1[data-v-192f27da]{font-size:80px}.show-2[data-v-192f27da]{font-size:66px}@media(max-width:992px){.show-2[data-v-192f27da]{font-size:15px!important}}.show-3[data-v-192f27da]{line-height:1.2;font-size:50px!important}@media(max-width:600px){.show-3[data-v-192f27da]{font-size:30px!important}}@media(max-width:400px){.show-3[data-v-192f27da]{font-size:15px!important}}@media(max-width:992px){.banner-text[data-v-192f27da]{font-size:12px!important}}.shadow-sm[data-v-192f27da]{box-shadow:0 1px 3px rgba(3,0,71,.09)!important}.shadow[data-v-192f27da]{box-shadow:0 4px 16px rgba(43,52,69,.1)!important}.shadow-lg[data-v-192f27da]{box-shadow:0 8px 45px rgba(3,0,71,.09)!important}.font-600[data-v-192f27da]{font-weight:600}.ls-4[data-v-192f27da]{letter-spacing:4px}.leading-tight[data-v-192f27da]{line-height:1.25}.container-lg[data-v-192f27da]{max-width:1200px}.flex-1[data-v-192f27da]{flex:1}.cursor-pointer[data-v-192f27da]{cursor:pointer}.w-33[data-v-192f27da]{width:33.33%}.border-grey[data-v-192f27da]{border:1px solid #dae1e7}.z-0[data-v-192f27da]{z-index:0}.z-1[data-v-192f27da]{z-index:1}.z-10[data-v-192f27da]{z-index:10}.br-8[data-v-192f27da]{border-radius:8px!important}.br-12[data-v-192f27da]{border-radius:12px!important}.h-100[data-v-192f27da]{height:100%}.border-4-white[data-v-192f27da]{border:4px solid #fff}.card-overlay-item[data-v-192f27da]{position:relative}.card-overlay-item[data-v-192f27da]:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;transition:all .25s ease-in-out 0s}.card-overlay-item[data-v-192f27da]:hover:after{background:rgba(0,0,0,.3);z-index:0;border-radius:8px;cursor:pointer}.top-search-bar .v-text-field__details[data-v-192f27da]{display:none!important}svg[data-v-192f27da]{fill:currentColor!important}svg.icon[data-v-192f27da]:focus,svg[data-v-192f27da]:focus{outline:none}.bb-primary[data-v-192f27da]{border-bottom:2px solid #279ad6}ul.navbar-nav li.nav-item[data-v-192f27da]{position:relative;z-index:10}ul.navbar-nav li.nav-item:hover ul[data-v-192f27da]{display:block}ul.navbar-nav li.nav-item>ul[data-v-192f27da]{position:absolute}ul.navbar-nav li.nav-item ul[data-v-192f27da]{top:100%;box-shadow:0 4px 16px rgba(43,52,69,.1);background-color:#fff;padding:5px 0;width:250px;max-width:250px;border-radius:8px;display:none}ul.navbar-nav li.nav-item ul li[data-v-192f27da]{position:relative;list-style-type:none}ul.navbar-nav li.nav-item ul li[data-v-192f27da]:hover{background-color:#f6f9fc}ul.navbar-nav li.nav-item ul li a[data-v-192f27da]{width:100%;color:#4b566b;padding:.5rem 1rem;display:flex}ul.navbar-nav li.nav-item ul li:hover .navbar-submenu[data-v-192f27da]{display:block}ul.navbar-nav li.nav-item ul li .navbar-submenu[data-v-192f27da]{position:absolute;left:100%;top:0;display:none;width:100%;z-index:10;padding-left:1rem}ul.navigation-navbar .nav-item .nav-link[data-v-192f27da]{color:#0f3460}ul.navigation-navbar .nav-item .nav-link.active[data-v-192f27da],ul.navigation-navbar .nav-item .nav-link[data-v-192f27da]:hover{color:#279ad6}.hero-section-bg ul.navigation-navbar .nav-item .nav-link[data-v-192f27da]{color:#fff}.hero-section-bg ul.navigation-navbar .nav-item .nav-link.active[data-v-192f27da],.hero-section-bg ul.navigation-navbar .nav-item .nav-link[data-v-192f27da]:hover{color:#279ad6}ul.navbar-nav li.nav-item[data-v-192f27da]{list-style:none;margin-right:2rem!important}ul.navbar-nav li.nav-item[data-v-192f27da]:last-child{margin-right:0!important}ul.navbar-nav li.nav-item a[data-v-192f27da]{text-decoration:none}.router-link-active[data-v-192f27da]{color:#279ad6}.vuetify-carousel .v-carousel__controls .v-item-group button[data-v-192f27da]{color:#0f3460}.slick-next.slick-disabled[data-v-192f27da]:before,.slick-prev.slick-disabled[data-v-192f27da]:before{opacity:.5!important}.slick-next.slick-top-next-btn[data-v-192f27da]{top:-40px;right:0}.slick-next[data-v-192f27da]:before{opacity:0!important}@media(max-width:992px){.slick-next[data-v-192f27da]{right:5px!important}}.slick-prev[data-v-192f27da]{position:absolute;z-index:2}.slick-prev.slick-top-prev-btn[data-v-192f27da]{top:-40px;left:calc(100% - 105px)}@media(max-width:992px){.slick-prev.slick-top-prev-btn[data-v-192f27da]{left:calc(100% - 105px)!important}}.slick-prev[data-v-192f27da]:before{opacity:0!important}@media(max-width:992px){.slick-prev[data-v-192f27da]{left:5px!important}}.slick-dots[data-v-192f27da]{bottom:0!important}.slick-dots li button[data-v-192f27da]:before{font-size:16px!important}.slick-dots li.slick-active button[data-v-192f27da]:before,.slick-dots li:hover button[data-v-192f27da]:before{color:#0f3460!important;opacity:1!important}@media(max-width:375px){.slick-header-top-title[data-v-192f27da]{width:200px}}.slick-left-arrow[data-v-192f27da]{position:absolute;left:0!important}.slick-right-arrow[data-v-192f27da]{position:absolute;right:0!important}.slick-button-hover:hover .slick-arrow[data-v-192f27da]{display:block}.slick-button-hover .slick-arrow[data-v-192f27da]{display:none}.icon[data-v-192f27da]{width:24px;height:24px}.avatar-64[data-v-192f27da]{width:64px;height:auto}.brand-tabs .v-tabs-slider-wrapper[data-v-192f27da]{display:none}.box-wrapper[data-v-192f27da]{position:relative;display:flex;align-items:flex-start;width:100%;border-radius:8px}@media(max-width:959px){.box-wrapper .box-overlay[data-v-192f27da]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99;background-color:rgba(0,0,0,.5);display:none}.box-wrapper .box-overlay.open[data-v-192f27da]{display:block}}.box-wrapper.box-wrapper-version-2 .box-sidebar[data-v-192f27da]{border-radius:0}.box-wrapper .box-sidebar[data-v-192f27da]{width:282px;background-color:#fff;border-radius:8px;transition:all .3s ease}@media(max-width:959px){.box-wrapper .box-sidebar[data-v-192f27da]{position:fixed;top:0;left:-282px;border-radius:0;z-index:99;overflow-y:scroll;height:calc(100% - 56px)}.box-wrapper .box-sidebar.open[data-v-192f27da]{left:0}}.box-wrapper .box-content[data-v-192f27da]{width:calc(100% - 300px);margin-left:auto;border-radius:8px}@media(max-width:959px){.box-wrapper .box-content[data-v-192f27da]{width:100%}}.custom-form-wizard.vue-form-wizard.md .wizard-icon-circle[data-v-192f27da]{width:96px!important;height:36px!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle[data-v-192f27da]{top:23px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.square_shape[data-v-192f27da],.custom-form-wizard.vue-form-wizard .wizard-icon-circle .wizard-icon-container.square_shape[data-v-192f27da],.custom-form-wizard .vue-form-wizard .wizard-icon-circle .wizard-icon-container.tab_shape[data-v-192f27da]{border-radius:20px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle[data-v-192f27da]{border:none!important;border-radius:50%;font-weight:600;background-color:#ffe1e6!important;position:relative}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked[data-v-192f27da]{background-color:#279ad6!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked i[data-v-192f27da]{color:#fff!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle[data-v-192f27da]{background-color:#ffe1e6}.custom-form-wizard i.wizard-icon[data-v-192f27da]{font-size:20px;color:#279ad6}.custom-form-wizard .stepTitle[data-v-192f27da]{color:#279ad6}.input-group-btn[data-v-192f27da]{display:flex;align-items:center}.input-group-btn .v-input__slot[data-v-192f27da]{border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}.input-group-btn button[data-v-192f27da]{border-top-left-radius:0;border-bottom-left-radius:0;height:42px!important}.p-relative[data-v-192f27da]{position:relative!important}.p-absolute[data-v-192f27da]{position:absolute!important}.right-0[data-v-192f27da]{right:0}.top-0[data-v-192f27da]{top:0}.bottom-0[data-v-192f27da]{bottom:0}v-application a[data-v-192f27da]{color:#279ad6!important}.mb-60[data-v-192f27da]{margin-bottom:60px}.py-48[data-v-192f27da]{padding-top:48px;padding-bottom:48px}.mt-32[data-v-192f27da]{margin-top:32px}.mt--66[data-v-192f27da]{margin-top:-66px}.mw-0[data-v-192f27da]{min-width:0}.w-100[data-v-192f27da]{width:100%}.size-28[data-v-192f27da]{width:28px;height:28px}.min-vh-100[data-v-192f27da]{min-height:100vh}.w-200[data-v-192f27da]{width:200px}.mw-70[data-v-192f27da]{max-width:70px}*[data-v-192f27da]{font-size:14px}body[data-v-192f27da],html[data-v-192f27da]{color:#2b3445;background-color:#fff}.br-t-8[data-v-192f27da]{border-top-right-radius:8px;border-top-left-radius:8px}.card-hover:hover .card-hover-icon[data-v-192f27da]{display:block}.card-hover .card-hover-icon[data-v-192f27da]{display:none}.space-between[data-v-192f27da]{display:flex;justify-content:space-between;margin-left:2%;margin-right:2%}.space-between div[data-v-192f27da]{line-height:4px!important;margin-top:20px;margin-bottom:20px;text-align:right}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(214);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(213);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(121);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/cartCard/ArticleCard.vue?vue&type=template&id=192f27da&scoped=true&




var ArticleCardvue_type_template_id_192f27da_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCard["a" /* default */], {
    staticClass: "card-hover",
    class: _vm.cardHoverShadow ? 'card-hover-shadow' : ''
  }, [_c('div', {
    staticClass: "card-hover-icon"
  }, [_c('div', {
    staticClass: "d-flex flex-column p-absolute right-0 z-1 mr-2 mt-1 card-hover-icon"
  })]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/single-product"
    }
  }, [_c(VImg["a" /* default */], {
    staticClass: "br-t-8",
    attrs: {
      "height": "250",
      "src": _vm.content.picture
    }
  })], 1), _vm._v(" "), _c(components_VCard["a" /* VCardText */], {
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
  }, [_vm._v(_vm._s(_vm.content.description))])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex mb-1"
  }), _vm._v(" "), _c('div', {
    staticClass: "d-flex"
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "space-between"
  }, [_c('div', [_c('p', [_vm._v(_vm._s(_vm.content.created_at))])])])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/cartCard/ArticleCard.vue?vue&type=template&id=192f27da&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/cartCard/ArticleCard.vue?vue&type=script&lang=js&

/* harmony default export */ var ArticleCardvue_type_script_lang_js_ = ({
  props: {
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
    ...Object(external_vuex_["mapActions"])(["addCart"])
  }
});
// CONCATENATED MODULE: ./components/cartCard/ArticleCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var cartCard_ArticleCardvue_type_script_lang_js_ = (ArticleCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./components/cartCard/ArticleCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(351)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cartCard_ArticleCardvue_type_script_lang_js_,
  ArticleCardvue_type_template_id_192f27da_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "192f27da",
  "2e2e8f86"
  
)

/* harmony default export */ var ArticleCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=cart-card-article-card.js.map