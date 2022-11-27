exports.ids = [7];
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

/***/ 221:
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

/***/ 223:
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

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(225);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("0d135400", content, true)

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bg-primary-lighten{background-color:#fce9ec!important}.text-primary-lighten{color:#fce9ec}.bg-body{background-color:#f6f9fc}.footer-text{color:#bdbdbd}.border-primary{border:1px solid #279ad6!important}.bg-white{background-color:#fff}a{color:#279ad6!important}h1{font-size:30px}h2{font-size:25px}h3{font-size:20px}h4{font-size:17px}.text-14,h5{font-size:14px}.text-16{font-size:16px}.text-sm{font-size:12px}.text-11{font-size:11px!important}.text-10{font-size:10px}.text-30{font-size:30px}.text-40{font-size:40px}.text-tiny{font-size:10px}.display-1{font-size:80px}.show-2{font-size:66px}@media(max-width:992px){.show-2{font-size:15px!important}}.show-3{line-height:1.2;font-size:50px!important}@media(max-width:600px){.show-3{font-size:30px!important}}@media(max-width:400px){.show-3{font-size:15px!important}}@media(max-width:992px){.banner-text{font-size:12px!important}}.shadow-sm{box-shadow:0 1px 3px rgba(3,0,71,.09)!important}.shadow{box-shadow:0 4px 16px rgba(43,52,69,.1)!important}.shadow-lg{box-shadow:0 8px 45px rgba(3,0,71,.09)!important}.font-600{font-weight:600}.ls-4{letter-spacing:4px}.leading-tight{line-height:1.25}.container-lg{max-width:1200px}.flex-1{flex:1}.cursor-pointer{cursor:pointer}.w-33{width:33.33%}.border-grey{border:1px solid #dae1e7}.z-0{z-index:0}.z-1{z-index:1}.z-10{z-index:10}.br-8{border-radius:8px!important}.br-12{border-radius:12px!important}.h-100{height:100%}.border-4-white{border:4px solid #fff}.card-overlay-item{position:relative}.card-overlay-item:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;transition:all .25s ease-in-out 0s}.card-overlay-item:hover:after{background:rgba(0,0,0,.3);z-index:0;border-radius:8px;cursor:pointer}.top-search-bar .v-text-field__details{display:none!important}svg{fill:currentColor!important}svg.icon:focus,svg:focus{outline:none}.bb-primary{border-bottom:2px solid #279ad6}ul.navbar-nav li.nav-item{position:relative;z-index:10}ul.navbar-nav li.nav-item:hover ul{display:block}ul.navbar-nav li.nav-item>ul{position:absolute}ul.navbar-nav li.nav-item ul{top:100%;box-shadow:0 4px 16px rgba(43,52,69,.1);background-color:#fff;padding:5px 0;width:250px;max-width:250px;border-radius:8px;display:none}ul.navbar-nav li.nav-item ul li{position:relative;list-style-type:none}ul.navbar-nav li.nav-item ul li:hover{background-color:#f6f9fc}ul.navbar-nav li.nav-item ul li a{width:100%;color:#4b566b;padding:.5rem 1rem;display:flex}ul.navbar-nav li.nav-item ul li:hover .navbar-submenu{display:block}ul.navbar-nav li.nav-item ul li .navbar-submenu{position:absolute;left:100%;top:0;display:none;width:100%;z-index:10;padding-left:1rem}ul.navigation-navbar .nav-item .nav-link{color:#0f3460}ul.navigation-navbar .nav-item .nav-link.active,ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}.hero-section-bg ul.navigation-navbar .nav-item .nav-link{color:#fff}.hero-section-bg ul.navigation-navbar .nav-item .nav-link.active,.hero-section-bg ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}ul.navbar-nav li.nav-item{list-style:none;margin-right:2rem!important}ul.navbar-nav li.nav-item:last-child{margin-right:0!important}ul.navbar-nav li.nav-item a{text-decoration:none}.router-link-active{color:#279ad6}.vuetify-carousel .v-carousel__controls .v-item-group button{color:#0f3460}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.5!important}.slick-next.slick-top-next-btn{top:-40px;right:0}.slick-next:before{opacity:0!important}@media(max-width:992px){.slick-next{right:5px!important}}.slick-prev{position:absolute;z-index:2}.slick-prev.slick-top-prev-btn{top:-40px;left:calc(100% - 105px)}@media(max-width:992px){.slick-prev.slick-top-prev-btn{left:calc(100% - 105px)!important}}.slick-prev:before{opacity:0!important}@media(max-width:992px){.slick-prev{left:5px!important}}.slick-dots{bottom:0!important}.slick-dots li button:before{font-size:16px!important}.slick-dots li.slick-active button:before,.slick-dots li:hover button:before{color:#0f3460!important;opacity:1!important}@media(max-width:375px){.slick-header-top-title{width:200px}}.slick-left-arrow{position:absolute;left:0!important}.slick-right-arrow{position:absolute;right:0!important}.slick-button-hover:hover .slick-arrow{display:block}.slick-button-hover .slick-arrow{display:none}.icon{width:24px;height:24px}.avatar-64{width:64px;height:auto}.brand-tabs .v-tabs-slider-wrapper{display:none}.box-wrapper{position:relative;display:flex;align-items:flex-start;width:100%;border-radius:8px}@media(max-width:959px){.box-wrapper .box-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99;background-color:rgba(0,0,0,.5);display:none}.box-wrapper .box-overlay.open{display:block}}.box-wrapper.box-wrapper-version-2 .box-sidebar{border-radius:0}.box-wrapper .box-sidebar{width:282px;background-color:#fff;border-radius:8px;transition:all .3s ease}@media(max-width:959px){.box-wrapper .box-sidebar{position:fixed;top:0;left:-282px;border-radius:0;z-index:99;overflow-y:scroll;height:calc(100% - 56px)}.box-wrapper .box-sidebar.open{left:0}}.box-wrapper .box-content{width:calc(100% - 300px);margin-left:auto;border-radius:8px}@media(max-width:959px){.box-wrapper .box-content{width:100%}}.custom-form-wizard.vue-form-wizard.md .wizard-icon-circle{width:96px!important;height:36px!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{top:23px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.square_shape,.custom-form-wizard.vue-form-wizard .wizard-icon-circle .wizard-icon-container.square_shape,.custom-form-wizard .vue-form-wizard .wizard-icon-circle .wizard-icon-container.tab_shape{border-radius:20px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle{border:none!important;border-radius:50%;font-weight:600;background-color:#ffe1e6!important;position:relative}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked{background-color:#279ad6!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked i{color:#fff!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{background-color:#ffe1e6}.custom-form-wizard i.wizard-icon{font-size:20px;color:#279ad6}.custom-form-wizard .stepTitle{color:#279ad6}.input-group-btn{display:flex;align-items:center}.input-group-btn .v-input__slot{border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}.input-group-btn button{border-top-left-radius:0;border-bottom-left-radius:0;height:42px!important}.p-relative{position:relative!important}.p-absolute{position:absolute!important}.right-0{right:0}.top-0{top:0}.bottom-0{bottom:0}v-application a{color:#279ad6!important}.mb-60{margin-bottom:60px}.py-48{padding-top:48px;padding-bottom:48px}.mt-32{margin-top:32px}.mt--66{margin-top:-66px}.mw-0{min-width:0}.w-100{width:100%}.size-28{width:28px;height:28px}.min-vh-100{min-height:100vh}.w-200{width:200px}.mw-70{max-width:70px}*{font-size:14px}body,html{color:#2b3445;background-color:#fff}.v-window{overflow:hidden}.v-window__container{display:flex;flex-direction:column;height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window__container--is-active{overflow:hidden}.v-window__next,.v-window__prev{background:rgba(0,0,0,.3);border-radius:50%;position:absolute;margin:0 16px;top:calc(50% - 20px);z-index:1}.v-window__next .v-btn:hover,.v-window__prev .v-btn:hover{background:none}.v-application--is-ltr .v-window__prev{left:0}.v-application--is-ltr .v-window__next,.v-application--is-rtl .v-window__prev{right:0}.v-application--is-rtl .v-window__next{left:0}.v-window--show-arrows-on-hover{overflow:hidden}.v-window--show-arrows-on-hover .v-window__next,.v-window--show-arrows-on-hover .v-window__prev{transition:transform .2s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(-200%)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__next,.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(200%)}.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__next{transform:translateX(-200%)}.v-window--show-arrows-on-hover:hover .v-window__next,.v-window--show-arrows-on-hover:hover .v-window__prev{transform:translateX(0)}.v-window-x-reverse-transition-enter-active,.v-window-x-reverse-transition-leave-active,.v-window-x-transition-enter-active,.v-window-x-transition-leave-active,.v-window-y-reverse-transition-enter-active,.v-window-y-reverse-transition-leave-active,.v-window-y-transition-enter-active,.v-window-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window-x-reverse-transition-leave,.v-window-x-reverse-transition-leave-to,.v-window-x-transition-leave,.v-window-x-transition-leave-to,.v-window-y-reverse-transition-leave,.v-window-y-reverse-transition-leave-to,.v-window-y-transition-leave,.v-window-y-transition-leave-to{position:absolute!important;top:0;width:100%}.v-window-x-transition-enter{transform:translateX(100%)}.v-window-x-reverse-transition-enter,.v-window-x-transition-leave-to{transform:translateX(-100%)}.v-window-x-reverse-transition-leave-to{transform:translateX(100%)}.v-window-y-transition-enter{transform:translateY(100%)}.v-window-y-reverse-transition-enter,.v-window-y-transition-leave-to{transform:translateY(-100%)}.v-window-y-reverse-transition-leave-to{transform:translateY(100%)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 226:
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

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(228);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("5939d713", content, true)

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bg-primary-lighten{background-color:#fce9ec!important}.text-primary-lighten{color:#fce9ec}.bg-body{background-color:#f6f9fc}.footer-text{color:#bdbdbd}.border-primary{border:1px solid #279ad6!important}.bg-white{background-color:#fff}a{color:#279ad6!important}h1{font-size:30px}h2{font-size:25px}h3{font-size:20px}h4{font-size:17px}.text-14,h5{font-size:14px}.text-16{font-size:16px}.text-sm{font-size:12px}.text-11{font-size:11px!important}.text-10{font-size:10px}.text-30{font-size:30px}.text-40{font-size:40px}.text-tiny{font-size:10px}.display-1{font-size:80px}.show-2{font-size:66px}@media(max-width:992px){.show-2{font-size:15px!important}}.show-3{line-height:1.2;font-size:50px!important}@media(max-width:600px){.show-3{font-size:30px!important}}@media(max-width:400px){.show-3{font-size:15px!important}}@media(max-width:992px){.banner-text{font-size:12px!important}}.shadow-sm{box-shadow:0 1px 3px rgba(3,0,71,.09)!important}.shadow{box-shadow:0 4px 16px rgba(43,52,69,.1)!important}.shadow-lg{box-shadow:0 8px 45px rgba(3,0,71,.09)!important}.font-600{font-weight:600}.ls-4{letter-spacing:4px}.leading-tight{line-height:1.25}.container-lg{max-width:1200px}.flex-1{flex:1}.cursor-pointer{cursor:pointer}.w-33{width:33.33%}.border-grey{border:1px solid #dae1e7}.z-0{z-index:0}.z-1{z-index:1}.z-10{z-index:10}.br-8{border-radius:8px!important}.br-12{border-radius:12px!important}.h-100{height:100%}.border-4-white{border:4px solid #fff}.card-overlay-item{position:relative}.card-overlay-item:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;transition:all .25s ease-in-out 0s}.card-overlay-item:hover:after{background:rgba(0,0,0,.3);z-index:0;border-radius:8px;cursor:pointer}.top-search-bar .v-text-field__details{display:none!important}svg{fill:currentColor!important}svg.icon:focus,svg:focus{outline:none}.bb-primary{border-bottom:2px solid #279ad6}ul.navbar-nav li.nav-item{position:relative;z-index:10}ul.navbar-nav li.nav-item:hover ul{display:block}ul.navbar-nav li.nav-item>ul{position:absolute}ul.navbar-nav li.nav-item ul{top:100%;box-shadow:0 4px 16px rgba(43,52,69,.1);background-color:#fff;padding:5px 0;width:250px;max-width:250px;border-radius:8px;display:none}ul.navbar-nav li.nav-item ul li{position:relative;list-style-type:none}ul.navbar-nav li.nav-item ul li:hover{background-color:#f6f9fc}ul.navbar-nav li.nav-item ul li a{width:100%;color:#4b566b;padding:.5rem 1rem;display:flex}ul.navbar-nav li.nav-item ul li:hover .navbar-submenu{display:block}ul.navbar-nav li.nav-item ul li .navbar-submenu{position:absolute;left:100%;top:0;display:none;width:100%;z-index:10;padding-left:1rem}ul.navigation-navbar .nav-item .nav-link{color:#0f3460}ul.navigation-navbar .nav-item .nav-link.active,ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}.hero-section-bg ul.navigation-navbar .nav-item .nav-link{color:#fff}.hero-section-bg ul.navigation-navbar .nav-item .nav-link.active,.hero-section-bg ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}ul.navbar-nav li.nav-item{list-style:none;margin-right:2rem!important}ul.navbar-nav li.nav-item:last-child{margin-right:0!important}ul.navbar-nav li.nav-item a{text-decoration:none}.router-link-active{color:#279ad6}.vuetify-carousel .v-carousel__controls .v-item-group button{color:#0f3460}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.5!important}.slick-next.slick-top-next-btn{top:-40px;right:0}.slick-next:before{opacity:0!important}@media(max-width:992px){.slick-next{right:5px!important}}.slick-prev{position:absolute;z-index:2}.slick-prev.slick-top-prev-btn{top:-40px;left:calc(100% - 105px)}@media(max-width:992px){.slick-prev.slick-top-prev-btn{left:calc(100% - 105px)!important}}.slick-prev:before{opacity:0!important}@media(max-width:992px){.slick-prev{left:5px!important}}.slick-dots{bottom:0!important}.slick-dots li button:before{font-size:16px!important}.slick-dots li.slick-active button:before,.slick-dots li:hover button:before{color:#0f3460!important;opacity:1!important}@media(max-width:375px){.slick-header-top-title{width:200px}}.slick-left-arrow{position:absolute;left:0!important}.slick-right-arrow{position:absolute;right:0!important}.slick-button-hover:hover .slick-arrow{display:block}.slick-button-hover .slick-arrow{display:none}.icon{width:24px;height:24px}.avatar-64{width:64px;height:auto}.brand-tabs .v-tabs-slider-wrapper{display:none}.box-wrapper{position:relative;display:flex;align-items:flex-start;width:100%;border-radius:8px}@media(max-width:959px){.box-wrapper .box-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99;background-color:rgba(0,0,0,.5);display:none}.box-wrapper .box-overlay.open{display:block}}.box-wrapper.box-wrapper-version-2 .box-sidebar{border-radius:0}.box-wrapper .box-sidebar{width:282px;background-color:#fff;border-radius:8px;transition:all .3s ease}@media(max-width:959px){.box-wrapper .box-sidebar{position:fixed;top:0;left:-282px;border-radius:0;z-index:99;overflow-y:scroll;height:calc(100% - 56px)}.box-wrapper .box-sidebar.open{left:0}}.box-wrapper .box-content{width:calc(100% - 300px);margin-left:auto;border-radius:8px}@media(max-width:959px){.box-wrapper .box-content{width:100%}}.custom-form-wizard.vue-form-wizard.md .wizard-icon-circle{width:96px!important;height:36px!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{top:23px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.square_shape,.custom-form-wizard.vue-form-wizard .wizard-icon-circle .wizard-icon-container.square_shape,.custom-form-wizard .vue-form-wizard .wizard-icon-circle .wizard-icon-container.tab_shape{border-radius:20px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle{border:none!important;border-radius:50%;font-weight:600;background-color:#ffe1e6!important;position:relative}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked{background-color:#279ad6!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked i{color:#fff!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{background-color:#ffe1e6}.custom-form-wizard i.wizard-icon{font-size:20px;color:#279ad6}.custom-form-wizard .stepTitle{color:#279ad6}.input-group-btn{display:flex;align-items:center}.input-group-btn .v-input__slot{border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}.input-group-btn button{border-top-left-radius:0;border-bottom-left-radius:0;height:42px!important}.p-relative{position:relative!important}.p-absolute{position:absolute!important}.right-0{right:0}.top-0{top:0}.bottom-0{bottom:0}v-application a{color:#279ad6!important}.mb-60{margin-bottom:60px}.py-48{padding-top:48px;padding-bottom:48px}.mt-32{margin-top:32px}.mt--66{margin-top:-66px}.mw-0{min-width:0}.w-100{width:100%}.size-28{width:28px;height:28px}.min-vh-100{min-height:100vh}.w-200{width:200px}.mw-70{max-width:70px}*{font-size:14px}body,html{color:#2b3445;background-color:#fff}.v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{padding:.5rem;border-radius:50%;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none}.v-rating .v-icon:after{display:none}.v-application--is-ltr .v-rating .v-icon{transform:scaleX(1)}.v-application--is-rtl .v-rating .v-icon{transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bghead-phone.03239b5.png";

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(234);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("197fcea4", content, true)

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bg-primary-lighten{background-color:#fce9ec!important}.text-primary-lighten{color:#fce9ec}.bg-body{background-color:#f6f9fc}.footer-text{color:#bdbdbd}.border-primary{border:1px solid #279ad6!important}.bg-white{background-color:#fff}a{color:#279ad6!important}h1{font-size:30px}h2{font-size:25px}h3{font-size:20px}h4{font-size:17px}.text-14,h5{font-size:14px}.text-16{font-size:16px}.text-sm{font-size:12px}.text-11{font-size:11px!important}.text-10{font-size:10px}.text-30{font-size:30px}.text-40{font-size:40px}.text-tiny{font-size:10px}.display-1{font-size:80px}.show-2{font-size:66px}@media(max-width:992px){.show-2{font-size:15px!important}}.show-3{line-height:1.2;font-size:50px!important}@media(max-width:600px){.show-3{font-size:30px!important}}@media(max-width:400px){.show-3{font-size:15px!important}}@media(max-width:992px){.banner-text{font-size:12px!important}}.shadow-sm{box-shadow:0 1px 3px rgba(3,0,71,.09)!important}.shadow{box-shadow:0 4px 16px rgba(43,52,69,.1)!important}.shadow-lg{box-shadow:0 8px 45px rgba(3,0,71,.09)!important}.font-600{font-weight:600}.ls-4{letter-spacing:4px}.leading-tight{line-height:1.25}.container-lg{max-width:1200px}.flex-1{flex:1}.cursor-pointer{cursor:pointer}.w-33{width:33.33%}.border-grey{border:1px solid #dae1e7}.z-0{z-index:0}.z-1{z-index:1}.z-10{z-index:10}.br-8{border-radius:8px!important}.br-12{border-radius:12px!important}.h-100{height:100%}.border-4-white{border:4px solid #fff}.card-overlay-item{position:relative}.card-overlay-item:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;transition:all .25s ease-in-out 0s}.card-overlay-item:hover:after{background:rgba(0,0,0,.3);z-index:0;border-radius:8px;cursor:pointer}.top-search-bar .v-text-field__details{display:none!important}svg{fill:currentColor!important}svg.icon:focus,svg:focus{outline:none}.bb-primary{border-bottom:2px solid #279ad6}ul.navbar-nav li.nav-item{position:relative;z-index:10}ul.navbar-nav li.nav-item:hover ul{display:block}ul.navbar-nav li.nav-item>ul{position:absolute}ul.navbar-nav li.nav-item ul{top:100%;box-shadow:0 4px 16px rgba(43,52,69,.1);background-color:#fff;padding:5px 0;width:250px;max-width:250px;border-radius:8px;display:none}ul.navbar-nav li.nav-item ul li{position:relative;list-style-type:none}ul.navbar-nav li.nav-item ul li:hover{background-color:#f6f9fc}ul.navbar-nav li.nav-item ul li a{width:100%;color:#4b566b;padding:.5rem 1rem;display:flex}ul.navbar-nav li.nav-item ul li:hover .navbar-submenu{display:block}ul.navbar-nav li.nav-item ul li .navbar-submenu{position:absolute;left:100%;top:0;display:none;width:100%;z-index:10;padding-left:1rem}ul.navigation-navbar .nav-item .nav-link{color:#0f3460}ul.navigation-navbar .nav-item .nav-link.active,ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}.hero-section-bg ul.navigation-navbar .nav-item .nav-link{color:#fff}.hero-section-bg ul.navigation-navbar .nav-item .nav-link.active,.hero-section-bg ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}ul.navbar-nav li.nav-item{list-style:none;margin-right:2rem!important}ul.navbar-nav li.nav-item:last-child{margin-right:0!important}ul.navbar-nav li.nav-item a{text-decoration:none}.router-link-active{color:#279ad6}.vuetify-carousel .v-carousel__controls .v-item-group button{color:#0f3460}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.5!important}.slick-next.slick-top-next-btn{top:-40px;right:0}.slick-next:before{opacity:0!important}@media(max-width:992px){.slick-next{right:5px!important}}.slick-prev{position:absolute;z-index:2}.slick-prev.slick-top-prev-btn{top:-40px;left:calc(100% - 105px)}@media(max-width:992px){.slick-prev.slick-top-prev-btn{left:calc(100% - 105px)!important}}.slick-prev:before{opacity:0!important}@media(max-width:992px){.slick-prev{left:5px!important}}.slick-dots{bottom:0!important}.slick-dots li button:before{font-size:16px!important}.slick-dots li.slick-active button:before,.slick-dots li:hover button:before{color:#0f3460!important;opacity:1!important}@media(max-width:375px){.slick-header-top-title{width:200px}}.slick-left-arrow{position:absolute;left:0!important}.slick-right-arrow{position:absolute;right:0!important}.slick-button-hover:hover .slick-arrow{display:block}.slick-button-hover .slick-arrow{display:none}.icon{width:24px;height:24px}.avatar-64{width:64px;height:auto}.brand-tabs .v-tabs-slider-wrapper{display:none}.box-wrapper{position:relative;display:flex;align-items:flex-start;width:100%;border-radius:8px}@media(max-width:959px){.box-wrapper .box-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99;background-color:rgba(0,0,0,.5);display:none}.box-wrapper .box-overlay.open{display:block}}.box-wrapper.box-wrapper-version-2 .box-sidebar{border-radius:0}.box-wrapper .box-sidebar{width:282px;background-color:#fff;border-radius:8px;transition:all .3s ease}@media(max-width:959px){.box-wrapper .box-sidebar{position:fixed;top:0;left:-282px;border-radius:0;z-index:99;overflow-y:scroll;height:calc(100% - 56px)}.box-wrapper .box-sidebar.open{left:0}}.box-wrapper .box-content{width:calc(100% - 300px);margin-left:auto;border-radius:8px}@media(max-width:959px){.box-wrapper .box-content{width:100%}}.custom-form-wizard.vue-form-wizard.md .wizard-icon-circle{width:96px!important;height:36px!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{top:23px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.square_shape,.custom-form-wizard.vue-form-wizard .wizard-icon-circle .wizard-icon-container.square_shape,.custom-form-wizard .vue-form-wizard .wizard-icon-circle .wizard-icon-container.tab_shape{border-radius:20px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle{border:none!important;border-radius:50%;font-weight:600;background-color:#ffe1e6!important;position:relative}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked{background-color:#279ad6!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked i{color:#fff!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{background-color:#ffe1e6}.custom-form-wizard i.wizard-icon{font-size:20px;color:#279ad6}.custom-form-wizard .stepTitle{color:#279ad6}.input-group-btn{display:flex;align-items:center}.input-group-btn .v-input__slot{border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}.input-group-btn button{border-top-left-radius:0;border-bottom-left-radius:0;height:42px!important}.p-relative{position:relative!important}.p-absolute{position:absolute!important}.right-0{right:0}.top-0{top:0}.bottom-0{bottom:0}v-application a{color:#279ad6!important}.mb-60{margin-bottom:60px}.py-48{padding-top:48px;padding-bottom:48px}.mt-32{margin-top:32px}.mt--66{margin-top:-66px}.mw-0{min-width:0}.w-100{width:100%}.size-28{width:28px;height:28px}.min-vh-100{min-height:100vh}.w-200{width:200px}.mw-70{max-width:70px}*{font-size:14px}body,html{color:#2b3445;background-color:#fff}.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:\"\";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 244:
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

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_1___default.a.extend({
  name: 'mobile',
  props: {
    mobileBreakpoint: {
      type: [Number, String],
      default() {
        // Avoid destroying unit
        // tests for users
        return this.$vuetify ? this.$vuetify.breakpoint.mobileBreakpoint : undefined;
      },
      validator: v => !isNaN(Number(v)) || ['xs', 'sm', 'md', 'lg', 'xl'].includes(String(v))
    }
  },
  computed: {
    isMobile() {
      const {
        mobile,
        width,
        name,
        mobileBreakpoint
      } = this.$vuetify.breakpoint; // Check if local mobileBreakpoint matches
      // the application's mobileBreakpoint

      if (mobileBreakpoint === this.mobileBreakpoint) return mobile;
      const mobileWidth = parseInt(this.mobileBreakpoint, 10);
      const isNumber = !isNaN(mobileWidth);
      return isNumber ? width < mobileWidth : name === this.mobileBreakpoint;
    }
  },
  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('mobile-break-point')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_0__[/* deprecate */ "d"])('mobile-break-point', 'mobile-breakpoint', this);
    }
  }
}));

/***/ }),

/***/ 257:
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

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(346);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("61383f3c", content, true, context)
};

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/35.beatsbluetoothearpohones.92fb730.png";

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(341);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("c176411c", content, true)

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bg-primary-lighten{background-color:#fce9ec!important}.text-primary-lighten{color:#fce9ec}.bg-body{background-color:#f6f9fc}.footer-text{color:#bdbdbd}.border-primary{border:1px solid #279ad6!important}.bg-white{background-color:#fff}a{color:#279ad6!important}h1{font-size:30px}h2{font-size:25px}h3{font-size:20px}h4{font-size:17px}.text-14,h5{font-size:14px}.text-16{font-size:16px}.text-sm{font-size:12px}.text-11{font-size:11px!important}.text-10{font-size:10px}.text-30{font-size:30px}.text-40{font-size:40px}.text-tiny{font-size:10px}.display-1{font-size:80px}.show-2{font-size:66px}@media(max-width:992px){.show-2{font-size:15px!important}}.show-3{line-height:1.2;font-size:50px!important}@media(max-width:600px){.show-3{font-size:30px!important}}@media(max-width:400px){.show-3{font-size:15px!important}}@media(max-width:992px){.banner-text{font-size:12px!important}}.shadow-sm{box-shadow:0 1px 3px rgba(3,0,71,.09)!important}.shadow{box-shadow:0 4px 16px rgba(43,52,69,.1)!important}.shadow-lg{box-shadow:0 8px 45px rgba(3,0,71,.09)!important}.font-600{font-weight:600}.ls-4{letter-spacing:4px}.leading-tight{line-height:1.25}.container-lg{max-width:1200px}.flex-1{flex:1}.cursor-pointer{cursor:pointer}.w-33{width:33.33%}.border-grey{border:1px solid #dae1e7}.z-0{z-index:0}.z-1{z-index:1}.z-10{z-index:10}.br-8{border-radius:8px!important}.br-12{border-radius:12px!important}.h-100{height:100%}.border-4-white{border:4px solid #fff}.card-overlay-item{position:relative}.card-overlay-item:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;transition:all .25s ease-in-out 0s}.card-overlay-item:hover:after{background:rgba(0,0,0,.3);z-index:0;border-radius:8px;cursor:pointer}.top-search-bar .v-text-field__details{display:none!important}svg{fill:currentColor!important}svg.icon:focus,svg:focus{outline:none}.bb-primary{border-bottom:2px solid #279ad6}ul.navbar-nav li.nav-item{position:relative;z-index:10}ul.navbar-nav li.nav-item:hover ul{display:block}ul.navbar-nav li.nav-item>ul{position:absolute}ul.navbar-nav li.nav-item ul{top:100%;box-shadow:0 4px 16px rgba(43,52,69,.1);background-color:#fff;padding:5px 0;width:250px;max-width:250px;border-radius:8px;display:none}ul.navbar-nav li.nav-item ul li{position:relative;list-style-type:none}ul.navbar-nav li.nav-item ul li:hover{background-color:#f6f9fc}ul.navbar-nav li.nav-item ul li a{width:100%;color:#4b566b;padding:.5rem 1rem;display:flex}ul.navbar-nav li.nav-item ul li:hover .navbar-submenu{display:block}ul.navbar-nav li.nav-item ul li .navbar-submenu{position:absolute;left:100%;top:0;display:none;width:100%;z-index:10;padding-left:1rem}ul.navigation-navbar .nav-item .nav-link{color:#0f3460}ul.navigation-navbar .nav-item .nav-link.active,ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}.hero-section-bg ul.navigation-navbar .nav-item .nav-link{color:#fff}.hero-section-bg ul.navigation-navbar .nav-item .nav-link.active,.hero-section-bg ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}ul.navbar-nav li.nav-item{list-style:none;margin-right:2rem!important}ul.navbar-nav li.nav-item:last-child{margin-right:0!important}ul.navbar-nav li.nav-item a{text-decoration:none}.router-link-active{color:#279ad6}.vuetify-carousel .v-carousel__controls .v-item-group button{color:#0f3460}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.5!important}.slick-next.slick-top-next-btn{top:-40px;right:0}.slick-next:before{opacity:0!important}@media(max-width:992px){.slick-next{right:5px!important}}.slick-prev{position:absolute;z-index:2}.slick-prev.slick-top-prev-btn{top:-40px;left:calc(100% - 105px)}@media(max-width:992px){.slick-prev.slick-top-prev-btn{left:calc(100% - 105px)!important}}.slick-prev:before{opacity:0!important}@media(max-width:992px){.slick-prev{left:5px!important}}.slick-dots{bottom:0!important}.slick-dots li button:before{font-size:16px!important}.slick-dots li.slick-active button:before,.slick-dots li:hover button:before{color:#0f3460!important;opacity:1!important}@media(max-width:375px){.slick-header-top-title{width:200px}}.slick-left-arrow{position:absolute;left:0!important}.slick-right-arrow{position:absolute;right:0!important}.slick-button-hover:hover .slick-arrow{display:block}.slick-button-hover .slick-arrow{display:none}.icon{width:24px;height:24px}.avatar-64{width:64px;height:auto}.brand-tabs .v-tabs-slider-wrapper{display:none}.box-wrapper{position:relative;display:flex;align-items:flex-start;width:100%;border-radius:8px}@media(max-width:959px){.box-wrapper .box-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99;background-color:rgba(0,0,0,.5);display:none}.box-wrapper .box-overlay.open{display:block}}.box-wrapper.box-wrapper-version-2 .box-sidebar{border-radius:0}.box-wrapper .box-sidebar{width:282px;background-color:#fff;border-radius:8px;transition:all .3s ease}@media(max-width:959px){.box-wrapper .box-sidebar{position:fixed;top:0;left:-282px;border-radius:0;z-index:99;overflow-y:scroll;height:calc(100% - 56px)}.box-wrapper .box-sidebar.open{left:0}}.box-wrapper .box-content{width:calc(100% - 300px);margin-left:auto;border-radius:8px}@media(max-width:959px){.box-wrapper .box-content{width:100%}}.custom-form-wizard.vue-form-wizard.md .wizard-icon-circle{width:96px!important;height:36px!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{top:23px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.square_shape,.custom-form-wizard.vue-form-wizard .wizard-icon-circle .wizard-icon-container.square_shape,.custom-form-wizard .vue-form-wizard .wizard-icon-circle .wizard-icon-container.tab_shape{border-radius:20px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle{border:none!important;border-radius:50%;font-weight:600;background-color:#ffe1e6!important;position:relative}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked{background-color:#279ad6!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked i{color:#fff!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{background-color:#ffe1e6}.custom-form-wizard i.wizard-icon{font-size:20px;color:#279ad6}.custom-form-wizard .stepTitle{color:#279ad6}.input-group-btn{display:flex;align-items:center}.input-group-btn .v-input__slot{border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}.input-group-btn button{border-top-left-radius:0;border-bottom-left-radius:0;height:42px!important}.p-relative{position:relative!important}.p-absolute{position:absolute!important}.right-0{right:0}.top-0{top:0}.bottom-0{bottom:0}v-application a{color:#279ad6!important}.mb-60{margin-bottom:60px}.py-48{padding-top:48px;padding-bottom:48px}.mt-32{margin-top:32px}.mt--66{margin-top:-66px}.mw-0{min-width:0}.w-100{width:100%}.size-28{width:28px;height:28px}.min-vh-100{min-height:100vh}.w-200{width:200px}.mw-70{max-width:70px}*{font-size:14px}body,html{color:#2b3445}.theme--light.v-tabs>.v-tabs-bar,body,html{background-color:#fff}.theme--light.v-tabs>.v-tabs-bar .v-tab--disabled,.theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active),.theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-btn,.theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-tabs .v-tab:hover:before{opacity:.04}.theme--light.v-tabs .v-tab--active:before,.theme--light.v-tabs .v-tab--active:hover:before,.theme--light.v-tabs .v-tab:focus:before{opacity:.12}.theme--light.v-tabs .v-tab--active:focus:before{opacity:.16}.theme--dark.v-tabs>.v-tabs-bar{background-color:#1e1e1e}.theme--dark.v-tabs>.v-tabs-bar .v-tab--disabled,.theme--dark.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active),.theme--dark.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-btn,.theme--dark.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-icon{color:hsla(0,0%,100%,.6)}.theme--dark.v-tabs .v-tab:hover:before{opacity:.08}.theme--dark.v-tabs .v-tab--active:before,.theme--dark.v-tabs .v-tab--active:hover:before,.theme--dark.v-tabs .v-tab:focus:before{opacity:.24}.theme--dark.v-tabs .v-tab--active:focus:before{opacity:.32}.theme--light.v-tabs-items{background-color:#fff}.theme--dark.v-tabs-items{background-color:#1e1e1e}.v-tabs-bar.accent .v-tab,.v-tabs-bar.accent .v-tabs-slider,.v-tabs-bar.error .v-tab,.v-tabs-bar.error .v-tabs-slider,.v-tabs-bar.info .v-tab,.v-tabs-bar.info .v-tabs-slider,.v-tabs-bar.primary .v-tab,.v-tabs-bar.primary .v-tabs-slider,.v-tabs-bar.secondary .v-tab,.v-tabs-bar.secondary .v-tabs-slider,.v-tabs-bar.success .v-tab,.v-tabs-bar.success .v-tabs-slider,.v-tabs-bar.warning .v-tab,.v-tabs-bar.warning .v-tabs-slider{color:#fff}.v-tabs{flex:1 1 auto;width:100%}.v-tabs .v-menu__activator{height:100%}.v-tabs.v.tabs--vertical.v-tabs--right{flex-direction:row-reverse}.v-tabs:not(.v-tabs--vertical) .v-tab{white-space:normal}.v-tabs:not(.v-tabs--vertical).v-tabs--right>.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) .v-slide-group__next,.v-tabs:not(.v-tabs--vertical):not(.v-tabs--right)>.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) .v-slide-group__prev{display:inline;display:initial;visibility:hidden}.v-tabs-bar{border-radius:inherit;height:48px}.v-tabs-bar.v-item-group>*{cursor:auto}.v-tab{align-items:center;cursor:pointer;display:flex;flex:0 1 auto;font-size:.875rem;font-weight:500;justify-content:center;letter-spacing:.0892857143em;line-height:normal;min-width:90px;max-width:360px;outline:none;padding:0 16px;position:relative;text-align:center;text-decoration:none;text-transform:uppercase;transition:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-tab.v-tab{color:inherit}.v-tab:before{bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-tab:before,.v-tabs-slider{background-color:currentColor}.v-tabs-slider{height:100%;width:100%}.v-tabs-slider-wrapper{bottom:0;margin:0!important;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-application--is-ltr .v-tabs--align-with-title>.v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing)>.v-slide-group__wrapper>.v-tabs-bar__content>.v-tab:first-child,.v-application--is-ltr .v-tabs--align-with-title>.v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing)>.v-slide-group__wrapper>.v-tabs-bar__content>.v-tabs-slider-wrapper+.v-tab{margin-left:42px}.v-application--is-rtl .v-tabs--align-with-title>.v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing)>.v-slide-group__wrapper>.v-tabs-bar__content>.v-tab:first-child,.v-application--is-rtl .v-tabs--align-with-title>.v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing)>.v-slide-group__wrapper>.v-tabs-bar__content>.v-tabs-slider-wrapper+.v-tab{margin-right:42px}.v-application--is-ltr .v-tabs--centered>.v-tabs-bar .v-tabs-bar__content>:last-child,.v-application--is-ltr .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-bar__content>:last-child{margin-right:auto}.v-application--is-ltr .v-tabs--centered>.v-tabs-bar .v-tabs-bar__content>:first-child:not(.v-tabs-slider-wrapper),.v-application--is-ltr .v-tabs--centered>.v-tabs-bar .v-tabs-slider-wrapper+*,.v-application--is-ltr .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-bar__content>:first-child:not(.v-tabs-slider-wrapper),.v-application--is-ltr .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-slider-wrapper+*,.v-application--is-rtl .v-tabs--centered>.v-tabs-bar .v-tabs-bar__content>:last-child,.v-application--is-rtl .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-bar__content>:last-child{margin-left:auto}.v-application--is-rtl .v-tabs--centered>.v-tabs-bar .v-tabs-bar__content>:first-child:not(.v-tabs-slider-wrapper),.v-application--is-rtl .v-tabs--centered>.v-tabs-bar .v-tabs-slider-wrapper+*,.v-application--is-rtl .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-bar__content>:first-child:not(.v-tabs-slider-wrapper),.v-application--is-rtl .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-slider-wrapper+*{margin-right:auto}.v-tabs--fixed-tabs>.v-tabs-bar .v-tab{flex:1 1 auto;width:100%}.v-tabs--grow>.v-tabs-bar .v-tab{flex:1 0 auto;max-width:none}.v-tabs--icons-and-text>.v-tabs-bar{height:72px}.v-tabs--icons-and-text>.v-tabs-bar .v-tab{flex-direction:column-reverse}.v-tabs--icons-and-text>.v-tabs-bar .v-tab>:first-child{margin-bottom:6px}.v-tabs--overflow>.v-tabs-bar .v-tab{flex:1 0 auto}.v-application--is-ltr .v-tabs--right>.v-tabs-bar .v-tab:first-child,.v-application--is-ltr .v-tabs--right>.v-tabs-bar .v-tabs-slider-wrapper+.v-tab{margin-left:auto}.v-application--is-rtl .v-tabs--right>.v-tabs-bar .v-tab:first-child,.v-application--is-rtl .v-tabs--right>.v-tabs-bar .v-tabs-slider-wrapper+.v-tab{margin-right:auto}.v-application--is-ltr .v-tabs--right>.v-tabs-bar .v-tab:last-child{margin-right:0}.v-application--is-rtl .v-tabs--right>.v-tabs-bar .v-tab:last-child{margin-left:0}.v-tabs--vertical{display:flex}.v-tabs--vertical>.v-tabs-bar{flex:1 0 auto;height:auto}.v-tabs--vertical>.v-tabs-bar .v-slide-group__next,.v-tabs--vertical>.v-tabs-bar .v-slide-group__prev{display:none}.v-tabs--vertical>.v-tabs-bar .v-tabs-bar__content{flex-direction:column}.v-tabs--vertical>.v-tabs-bar .v-tab{height:48px}.v-tabs--vertical>.v-tabs-bar .v-tabs-slider{height:100%}.v-tabs--vertical>.v-window{flex:0 1 100%}.v-tabs--vertical.v-tabs--icons-and-text>.v-tabs-bar .v-tab{height:72px}.v-tab--active{color:inherit}.v-tab--active.v-tab:not(:focus):before{opacity:0}.v-tab--active .v-btn.v-btn--flat,.v-tab--active .v-icon{color:inherit}.v-tab--disabled{opacity:.5}.v-tab--disabled,.v-tab--disabled *{pointer-events:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(343);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("8f7a87bc", content, true)

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bg-primary-lighten{background-color:#fce9ec!important}.text-primary-lighten{color:#fce9ec}.bg-body{background-color:#f6f9fc}.footer-text{color:#bdbdbd}.border-primary{border:1px solid #279ad6!important}.bg-white{background-color:#fff}a{color:#279ad6!important}h1{font-size:30px}h2{font-size:25px}h3{font-size:20px}h4{font-size:17px}.text-14,h5{font-size:14px}.text-16{font-size:16px}.text-sm{font-size:12px}.text-11{font-size:11px!important}.text-10{font-size:10px}.text-30{font-size:30px}.text-40{font-size:40px}.text-tiny{font-size:10px}.display-1{font-size:80px}.show-2{font-size:66px}@media(max-width:992px){.show-2{font-size:15px!important}}.show-3{line-height:1.2;font-size:50px!important}@media(max-width:600px){.show-3{font-size:30px!important}}@media(max-width:400px){.show-3{font-size:15px!important}}@media(max-width:992px){.banner-text{font-size:12px!important}}.shadow-sm{box-shadow:0 1px 3px rgba(3,0,71,.09)!important}.shadow{box-shadow:0 4px 16px rgba(43,52,69,.1)!important}.shadow-lg{box-shadow:0 8px 45px rgba(3,0,71,.09)!important}.font-600{font-weight:600}.ls-4{letter-spacing:4px}.leading-tight{line-height:1.25}.container-lg{max-width:1200px}.flex-1{flex:1}.cursor-pointer{cursor:pointer}.w-33{width:33.33%}.border-grey{border:1px solid #dae1e7}.z-0{z-index:0}.z-1{z-index:1}.z-10{z-index:10}.br-8{border-radius:8px!important}.br-12{border-radius:12px!important}.h-100{height:100%}.border-4-white{border:4px solid #fff}.card-overlay-item{position:relative}.card-overlay-item:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;transition:all .25s ease-in-out 0s}.card-overlay-item:hover:after{background:rgba(0,0,0,.3);z-index:0;border-radius:8px;cursor:pointer}.top-search-bar .v-text-field__details{display:none!important}svg{fill:currentColor!important}svg.icon:focus,svg:focus{outline:none}.bb-primary{border-bottom:2px solid #279ad6}ul.navbar-nav li.nav-item{position:relative;z-index:10}ul.navbar-nav li.nav-item:hover ul{display:block}ul.navbar-nav li.nav-item>ul{position:absolute}ul.navbar-nav li.nav-item ul{top:100%;box-shadow:0 4px 16px rgba(43,52,69,.1);background-color:#fff;padding:5px 0;width:250px;max-width:250px;border-radius:8px;display:none}ul.navbar-nav li.nav-item ul li{position:relative;list-style-type:none}ul.navbar-nav li.nav-item ul li:hover{background-color:#f6f9fc}ul.navbar-nav li.nav-item ul li a{width:100%;color:#4b566b;padding:.5rem 1rem;display:flex}ul.navbar-nav li.nav-item ul li:hover .navbar-submenu{display:block}ul.navbar-nav li.nav-item ul li .navbar-submenu{position:absolute;left:100%;top:0;display:none;width:100%;z-index:10;padding-left:1rem}ul.navigation-navbar .nav-item .nav-link{color:#0f3460}ul.navigation-navbar .nav-item .nav-link.active,ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}.hero-section-bg ul.navigation-navbar .nav-item .nav-link{color:#fff}.hero-section-bg ul.navigation-navbar .nav-item .nav-link.active,.hero-section-bg ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}ul.navbar-nav li.nav-item{list-style:none;margin-right:2rem!important}ul.navbar-nav li.nav-item:last-child{margin-right:0!important}ul.navbar-nav li.nav-item a{text-decoration:none}.router-link-active{color:#279ad6}.vuetify-carousel .v-carousel__controls .v-item-group button{color:#0f3460}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.5!important}.slick-next.slick-top-next-btn{top:-40px;right:0}.slick-next:before{opacity:0!important}@media(max-width:992px){.slick-next{right:5px!important}}.slick-prev{position:absolute;z-index:2}.slick-prev.slick-top-prev-btn{top:-40px;left:calc(100% - 105px)}@media(max-width:992px){.slick-prev.slick-top-prev-btn{left:calc(100% - 105px)!important}}.slick-prev:before{opacity:0!important}@media(max-width:992px){.slick-prev{left:5px!important}}.slick-dots{bottom:0!important}.slick-dots li button:before{font-size:16px!important}.slick-dots li.slick-active button:before,.slick-dots li:hover button:before{color:#0f3460!important;opacity:1!important}@media(max-width:375px){.slick-header-top-title{width:200px}}.slick-left-arrow{position:absolute;left:0!important}.slick-right-arrow{position:absolute;right:0!important}.slick-button-hover:hover .slick-arrow{display:block}.slick-button-hover .slick-arrow{display:none}.icon{width:24px;height:24px}.avatar-64{width:64px;height:auto}.brand-tabs .v-tabs-slider-wrapper{display:none}.box-wrapper{position:relative;display:flex;align-items:flex-start;width:100%;border-radius:8px}@media(max-width:959px){.box-wrapper .box-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99;background-color:rgba(0,0,0,.5);display:none}.box-wrapper .box-overlay.open{display:block}}.box-wrapper.box-wrapper-version-2 .box-sidebar{border-radius:0}.box-wrapper .box-sidebar{width:282px;background-color:#fff;border-radius:8px;transition:all .3s ease}@media(max-width:959px){.box-wrapper .box-sidebar{position:fixed;top:0;left:-282px;border-radius:0;z-index:99;overflow-y:scroll;height:calc(100% - 56px)}.box-wrapper .box-sidebar.open{left:0}}.box-wrapper .box-content{width:calc(100% - 300px);margin-left:auto;border-radius:8px}@media(max-width:959px){.box-wrapper .box-content{width:100%}}.custom-form-wizard.vue-form-wizard.md .wizard-icon-circle{width:96px!important;height:36px!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{top:23px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.square_shape,.custom-form-wizard.vue-form-wizard .wizard-icon-circle .wizard-icon-container.square_shape,.custom-form-wizard .vue-form-wizard .wizard-icon-circle .wizard-icon-container.tab_shape{border-radius:20px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle{border:none!important;border-radius:50%;font-weight:600;background-color:#ffe1e6!important;position:relative}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked{background-color:#279ad6!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked i{color:#fff!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{background-color:#ffe1e6}.custom-form-wizard i.wizard-icon{font-size:20px;color:#279ad6}.custom-form-wizard .stepTitle{color:#279ad6}.input-group-btn{display:flex;align-items:center}.input-group-btn .v-input__slot{border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}.input-group-btn button{border-top-left-radius:0;border-bottom-left-radius:0;height:42px!important}.p-relative{position:relative!important}.p-absolute{position:absolute!important}.right-0{right:0}.top-0{top:0}.bottom-0{bottom:0}v-application a{color:#279ad6!important}.mb-60{margin-bottom:60px}.py-48{padding-top:48px;padding-bottom:48px}.mt-32{margin-top:32px}.mt--66{margin-top:-66px}.mw-0{min-width:0}.w-100{width:100%}.size-28{width:28px;height:28px}.min-vh-100{min-height:100vh}.w-200{width:200px}.mw-70{max-width:70px}*{font-size:14px}body,html{color:#2b3445;background-color:#fff}.v-slide-group{display:flex}.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__next,.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__prev{display:none}.v-slide-group.v-item-group>.v-slide-group__next,.v-slide-group.v-item-group>.v-slide-group__prev{cursor:pointer}.v-slide-item{display:inline-flex;flex:0 1 auto}.v-slide-group__next,.v-slide-group__prev{align-items:center;display:flex;flex:0 1 52px;justify-content:center;min-width:52px}.v-slide-group__content{display:flex;flex:1 0 auto;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-slide-group__wrapper{contain:content;display:flex;flex:1 1 auto;overflow:hidden}.v-slide-group__next--disabled,.v-slide-group__prev--disabled{pointer-events:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/camera.6418a6b.svg";

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_5a61893c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(273);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_5a61893c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_5a61893c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_5a61893c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_5a61893c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bg-primary-lighten{background-color:#fce9ec!important}.text-primary-lighten{color:#fce9ec}.bg-body{background-color:#f6f9fc}.footer-text{color:#bdbdbd}.border-primary{border:1px solid #279ad6!important}.bg-white{background-color:#fff}a{color:#279ad6!important}h1{font-size:30px}h2{font-size:25px}h3{font-size:20px}h4{font-size:17px}.text-14,h5{font-size:14px}.text-16{font-size:16px}.text-sm{font-size:12px}.text-11{font-size:11px!important}.text-10{font-size:10px}.text-30{font-size:30px}.text-40{font-size:40px}.text-tiny{font-size:10px}.display-1{font-size:80px}.show-2{font-size:66px}@media(max-width:992px){.show-2{font-size:15px!important}}.show-3{line-height:1.2;font-size:50px!important}@media(max-width:600px){.show-3{font-size:30px!important}}@media(max-width:400px){.show-3{font-size:15px!important}}@media(max-width:992px){.banner-text{font-size:12px!important}}.shadow-sm{box-shadow:0 1px 3px rgba(3,0,71,.09)!important}.shadow{box-shadow:0 4px 16px rgba(43,52,69,.1)!important}.shadow-lg{box-shadow:0 8px 45px rgba(3,0,71,.09)!important}.font-600{font-weight:600}.ls-4{letter-spacing:4px}.leading-tight{line-height:1.25}.container-lg{max-width:1200px}.flex-1{flex:1}.cursor-pointer{cursor:pointer}.w-33{width:33.33%}.border-grey{border:1px solid #dae1e7}.z-0{z-index:0}.z-1{z-index:1}.z-10{z-index:10}.br-8{border-radius:8px!important}.br-12{border-radius:12px!important}.h-100{height:100%}.border-4-white{border:4px solid #fff}.card-overlay-item{position:relative}.card-overlay-item:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;transition:all .25s ease-in-out 0s}.card-overlay-item:hover:after{background:rgba(0,0,0,.3);z-index:0;border-radius:8px;cursor:pointer}.top-search-bar .v-text-field__details{display:none!important}svg{fill:currentColor!important}svg.icon:focus,svg:focus{outline:none}.bb-primary{border-bottom:2px solid #279ad6}ul.navbar-nav li.nav-item{position:relative;z-index:10}ul.navbar-nav li.nav-item:hover ul{display:block}ul.navbar-nav li.nav-item>ul{position:absolute}ul.navbar-nav li.nav-item ul{top:100%;box-shadow:0 4px 16px rgba(43,52,69,.1);background-color:#fff;padding:5px 0;width:250px;max-width:250px;border-radius:8px;display:none}ul.navbar-nav li.nav-item ul li{position:relative;list-style-type:none}ul.navbar-nav li.nav-item ul li:hover{background-color:#f6f9fc}ul.navbar-nav li.nav-item ul li a{width:100%;color:#4b566b;padding:.5rem 1rem;display:flex}ul.navbar-nav li.nav-item ul li:hover .navbar-submenu{display:block}ul.navbar-nav li.nav-item ul li .navbar-submenu{position:absolute;left:100%;top:0;display:none;width:100%;z-index:10;padding-left:1rem}ul.navigation-navbar .nav-item .nav-link{color:#0f3460}ul.navigation-navbar .nav-item .nav-link.active,ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}.hero-section-bg ul.navigation-navbar .nav-item .nav-link{color:#fff}.hero-section-bg ul.navigation-navbar .nav-item .nav-link.active,.hero-section-bg ul.navigation-navbar .nav-item .nav-link:hover{color:#279ad6}ul.navbar-nav li.nav-item{list-style:none;margin-right:2rem!important}ul.navbar-nav li.nav-item:last-child{margin-right:0!important}ul.navbar-nav li.nav-item a{text-decoration:none}.router-link-active{color:#279ad6}.vuetify-carousel .v-carousel__controls .v-item-group button{color:#0f3460}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.5!important}.slick-next.slick-top-next-btn{top:-40px;right:0}.slick-next:before{opacity:0!important}@media(max-width:992px){.slick-next{right:5px!important}}.slick-prev{position:absolute;z-index:2}.slick-prev.slick-top-prev-btn{top:-40px;left:calc(100% - 105px)}@media(max-width:992px){.slick-prev.slick-top-prev-btn{left:calc(100% - 105px)!important}}.slick-prev:before{opacity:0!important}@media(max-width:992px){.slick-prev{left:5px!important}}.slick-dots{bottom:0!important}.slick-dots li button:before{font-size:16px!important}.slick-dots li.slick-active button:before,.slick-dots li:hover button:before{color:#0f3460!important;opacity:1!important}@media(max-width:375px){.slick-header-top-title{width:200px}}.slick-left-arrow{position:absolute;left:0!important}.slick-right-arrow{position:absolute;right:0!important}.slick-button-hover:hover .slick-arrow{display:block}.slick-button-hover .slick-arrow{display:none}.icon{width:24px;height:24px}.avatar-64{width:64px;height:auto}.brand-tabs .v-tabs-slider-wrapper{display:none}.box-wrapper{position:relative;display:flex;align-items:flex-start;width:100%;border-radius:8px}@media(max-width:959px){.box-wrapper .box-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99;background-color:rgba(0,0,0,.5);display:none}.box-wrapper .box-overlay.open{display:block}}.box-wrapper.box-wrapper-version-2 .box-sidebar{border-radius:0}.box-wrapper .box-sidebar{width:282px;background-color:#fff;border-radius:8px;transition:all .3s ease}@media(max-width:959px){.box-wrapper .box-sidebar{position:fixed;top:0;left:-282px;border-radius:0;z-index:99;overflow-y:scroll;height:calc(100% - 56px)}.box-wrapper .box-sidebar.open{left:0}}.box-wrapper .box-content{width:calc(100% - 300px);margin-left:auto;border-radius:8px}@media(max-width:959px){.box-wrapper .box-content{width:100%}}.custom-form-wizard.vue-form-wizard.md .wizard-icon-circle{width:96px!important;height:36px!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{top:23px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.square_shape,.custom-form-wizard.vue-form-wizard .wizard-icon-circle .wizard-icon-container.square_shape,.custom-form-wizard .vue-form-wizard .wizard-icon-circle .wizard-icon-container.tab_shape{border-radius:20px!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle{border:none!important;border-radius:50%;font-weight:600;background-color:#ffe1e6!important;position:relative}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked{background-color:#279ad6!important}.custom-form-wizard.vue-form-wizard .wizard-icon-circle.checked i{color:#fff!important}.custom-form-wizard.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{background-color:#ffe1e6}.custom-form-wizard i.wizard-icon{font-size:20px;color:#279ad6}.custom-form-wizard .stepTitle{color:#279ad6}.input-group-btn{display:flex;align-items:center}.input-group-btn .v-input__slot{border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}.input-group-btn button{border-top-left-radius:0;border-bottom-left-radius:0;height:42px!important}.p-relative{position:relative!important}.p-absolute{position:absolute!important}.right-0{right:0}.top-0{top:0}.bottom-0{bottom:0}v-application a{color:#279ad6!important}.mb-60{margin-bottom:60px}.py-48{padding-top:48px;padding-bottom:48px}.mt-32{margin-top:32px}.mt--66{margin-top:-66px}.mw-0{min-width:0}.w-100{width:100%}.size-28{width:28px;height:28px}.min-vh-100{min-height:100vh}.w-200{width:200px}.mw-70{max-width:70px}*{font-size:14px}body,html{color:#2b3445;background-color:#fff}.cover-upload-wrapper{display:flex;align-items:flex-end}.cover-upload-wrapper .cover-upload{display:inline-flex;align-items:center;justify-content:center;height:auto;padding:0}.cover-upload-wrapper input{display:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(214);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(213);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(244);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(210);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(212);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VRating/VRating.js + 1 modules
var VRating = __webpack_require__(257);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(209);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/groupable/index.js
var groupable = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/routable/index.js
var routable = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTabs/VTab.js
// Mixins


 // Utilities



const baseMixins = Object(mixins["a" /* default */])(routable["a" /* default */],
// Must be after routable
// to overwrite activeClass
Object(groupable["a" /* factory */])('tabsBar'), themeable["a" /* default */]);
/* harmony default export */ var VTab = (baseMixins.extend().extend().extend({
  name: 'v-tab',
  props: {
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  },
  data: () => ({
    proxyClass: 'v-tab--active'
  }),
  computed: {
    classes() {
      return {
        'v-tab': true,
        ...routable["a" /* default */].options.computed.classes.call(this),
        'v-tab--disabled': this.disabled,
        ...this.groupClasses
      };
    },
    value() {
      let to = this.to || this.href;
      if (to == null) return to;
      if (this.$router && this.to === Object(this.to)) {
        const resolve = this.$router.resolve(this.to, this.$route, this.append);
        to = resolve.href;
      }
      return to.replace('#', '');
    }
  },
  methods: {
    click(e) {
      // Prevent keyboard actions
      // from children elements
      // within disabled tabs
      if (this.disabled) {
        e.preventDefault();
        return;
      } // If user provides an
      // actual link, do not
      // prevent default

      if (this.href && this.href.indexOf('#') > -1) e.preventDefault();
      if (e.detail) this.$el.blur();
      this.$emit('click', e);
      this.to || this.toggle();
    },
    toggle() {
      // VItemGroup treats a change event as a click
      if (!this.isActive || !this.tabsBar.mandatory && !this.to) {
        this.$emit('change');
      }
    }
  },
  render(h) {
    const {
      tag,
      data
    } = this.generateRouteLink();
    data.attrs = {
      ...data.attrs,
      'aria-selected': String(this.isActive),
      role: 'tab',
      tabindex: this.disabled ? -1 : 0
    };
    data.on = {
      ...data.on,
      keydown: e => {
        if (e.keyCode === helpers["w" /* keyCodes */].enter) this.click(e);
        this.$emit('keydown', e);
      }
    };
    return h(tag, data, this.$slots.default);
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VWindow/VWindowItem.js
var VWindowItem = __webpack_require__(226);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabItem.js
// Extensions

/* @vue/component */

/* harmony default export */ var VTabItem = (VWindowItem["a" /* default */].extend({
  name: 'v-tab-item',
  props: {
    id: String
  },
  methods: {
    genWindowItem() {
      const item = VWindowItem["a" /* default */].options.methods.genWindowItem.call(this);
      item.data.domProps = item.data.domProps || {};
      item.data.domProps.id = this.id || this.value;
      return item;
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VTabs/VTabs.sass
var VTabs = __webpack_require__(340);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VSlideGroup/VSlideGroup.sass
var VSlideGroup = __webpack_require__(342);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js
var VItemGroup = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/mobile/index.js
var mobile = __webpack_require__(251);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/resize/index.js
var resize = __webpack_require__(95);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/touch/index.js
var touch = __webpack_require__(221);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VSlideGroup/VSlideGroup.js
// Styles
 // Components


 // Extensions

 // Mixins

 // Directives


 // Utilities



function bias(val) {
  const c = 0.501;
  const x = Math.abs(val);
  return Math.sign(val) * (x / ((1 / c - 2) * (1 - x) + 1));
}
function calculateUpdatedOffset(selectedElement, widths, rtl, currentScrollOffset) {
  const clientWidth = selectedElement.clientWidth;
  const offsetLeft = rtl ? widths.content - selectedElement.offsetLeft - clientWidth : selectedElement.offsetLeft;
  if (rtl) {
    currentScrollOffset = -currentScrollOffset;
  }
  const totalWidth = widths.wrapper + currentScrollOffset;
  const itemOffset = clientWidth + offsetLeft;
  const additionalOffset = clientWidth * 0.4;
  if (offsetLeft <= currentScrollOffset) {
    currentScrollOffset = Math.max(offsetLeft - additionalOffset, 0);
  } else if (totalWidth <= itemOffset) {
    currentScrollOffset = Math.min(currentScrollOffset - (totalWidth - itemOffset - additionalOffset), widths.content - widths.wrapper);
  }
  return rtl ? -currentScrollOffset : currentScrollOffset;
}
function calculateCenteredOffset(selectedElement, widths, rtl) {
  const {
    offsetLeft,
    clientWidth
  } = selectedElement;
  if (rtl) {
    const offsetCentered = widths.content - offsetLeft - clientWidth / 2 - widths.wrapper / 2;
    return -Math.min(widths.content - widths.wrapper, Math.max(0, offsetCentered));
  } else {
    const offsetCentered = offsetLeft + clientWidth / 2 - widths.wrapper / 2;
    return Math.min(widths.content - widths.wrapper, Math.max(0, offsetCentered));
  }
}
const BaseSlideGroup = Object(mixins["a" /* default */])(VItemGroup["a" /* BaseItemGroup */], mobile["a" /* default */]).extend({
  name: 'base-slide-group',
  directives: {
    Resize: resize["a" /* default */],
    Touch: touch["a" /* default */]
  },
  props: {
    activeClass: {
      type: String,
      default: 'v-slide-item--active'
    },
    centerActive: Boolean,
    nextIcon: {
      type: String,
      default: '$next'
    },
    prevIcon: {
      type: String,
      default: '$prev'
    },
    showArrows: {
      type: [Boolean, String],
      validator: v => typeof v === 'boolean' || ['always', 'desktop', 'mobile'].includes(v)
    }
  },
  data: () => ({
    isOverflowing: false,
    resizeTimeout: 0,
    startX: 0,
    isSwipingHorizontal: false,
    isSwiping: false,
    scrollOffset: 0,
    widths: {
      content: 0,
      wrapper: 0
    }
  }),
  computed: {
    canTouch() {
      return typeof window !== 'undefined';
    },
    __cachedNext() {
      return this.genTransition('next');
    },
    __cachedPrev() {
      return this.genTransition('prev');
    },
    classes() {
      return {
        ...VItemGroup["a" /* BaseItemGroup */].options.computed.classes.call(this),
        'v-slide-group': true,
        'v-slide-group--has-affixes': this.hasAffixes,
        'v-slide-group--is-overflowing': this.isOverflowing
      };
    },
    hasAffixes() {
      switch (this.showArrows) {
        // Always show arrows on desktop & mobile
        case 'always':
          return true;
        // Always show arrows on desktop

        case 'desktop':
          return !this.isMobile;
        // Show arrows on mobile when overflowing.
        // This matches the default 2.2 behavior

        case true:
          return this.isOverflowing || Math.abs(this.scrollOffset) > 0;
        // Always show on mobile

        case 'mobile':
          return this.isMobile || this.isOverflowing || Math.abs(this.scrollOffset) > 0;
        // https://material.io/components/tabs#scrollable-tabs
        // Always show arrows when
        // overflowed on desktop

        default:
          return !this.isMobile && (this.isOverflowing || Math.abs(this.scrollOffset) > 0);
      }
    },
    hasNext() {
      if (!this.hasAffixes) return false;
      const {
        content,
        wrapper
      } = this.widths; // Check one scroll ahead to know the width of right-most item

      return content > Math.abs(this.scrollOffset) + wrapper;
    },
    hasPrev() {
      return this.hasAffixes && this.scrollOffset !== 0;
    }
  },
  watch: {
    internalValue: 'setWidths',
    // When overflow changes, the arrows alter
    // the widths of the content and wrapper
    // and need to be recalculated
    isOverflowing: 'setWidths',
    scrollOffset(val) {
      if (this.$vuetify.rtl) val = -val;
      let scroll = val <= 0 ? bias(-val) : val > this.widths.content - this.widths.wrapper ? -(this.widths.content - this.widths.wrapper) + bias(this.widths.content - this.widths.wrapper - val) : -val;
      if (this.$vuetify.rtl) scroll = -scroll;
      this.$refs.content.style.transform = `translateX(${scroll}px)`;
    }
  },
  mounted() {
    if (typeof ResizeObserver !== 'undefined') {
      const obs = new ResizeObserver(() => {
        this.onResize();
      });
      obs.observe(this.$el);
      obs.observe(this.$refs.content);
      this.$on('hook:destroyed', () => {
        obs.disconnect();
      });
    } else {
      let itemsLength = 0;
      this.$on('hook:beforeUpdate', () => {
        var _a;
        itemsLength = (((_a = this.$refs.content) === null || _a === void 0 ? void 0 : _a.children) || []).length;
      });
      this.$on('hook:updated', () => {
        var _a;
        if (itemsLength === (((_a = this.$refs.content) === null || _a === void 0 ? void 0 : _a.children) || []).length) return;
        this.setWidths();
      });
    }
  },
  methods: {
    onScroll() {
      this.$refs.wrapper.scrollLeft = 0;
    },
    onFocusin(e) {
      if (!this.isOverflowing) return; // Focused element is likely to be the root of an item, so a
      // breadth-first search will probably find it in the first iteration

      for (const el of Object(helpers["g" /* composedPath */])(e)) {
        for (const vm of this.items) {
          if (vm.$el === el) {
            this.scrollOffset = calculateUpdatedOffset(vm.$el, this.widths, this.$vuetify.rtl, this.scrollOffset);
            return;
          }
        }
      }
    },
    // Always generate next for scrollable hint
    genNext() {
      const slot = this.$scopedSlots.next ? this.$scopedSlots.next({}) : this.$slots.next || this.__cachedNext;
      return this.$createElement('div', {
        staticClass: 'v-slide-group__next',
        class: {
          'v-slide-group__next--disabled': !this.hasNext
        },
        on: {
          click: () => this.onAffixClick('next')
        },
        key: 'next'
      }, [slot]);
    },
    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-slide-group__content',
        ref: 'content',
        on: {
          focusin: this.onFocusin
        }
      }, this.$slots.default);
    },
    genData() {
      return {
        class: this.classes,
        directives: [{
          name: 'resize',
          value: this.onResize
        }]
      };
    },
    genIcon(location) {
      let icon = location;
      if (this.$vuetify.rtl && location === 'prev') {
        icon = 'next';
      } else if (this.$vuetify.rtl && location === 'next') {
        icon = 'prev';
      }
      const upperLocation = `${location[0].toUpperCase()}${location.slice(1)}`;
      const hasAffix = this[`has${upperLocation}`];
      if (!this.showArrows && !hasAffix) return null;
      return this.$createElement(VIcon["a" /* default */], {
        props: {
          disabled: !hasAffix
        }
      }, this[`${icon}Icon`]);
    },
    // Always generate prev for scrollable hint
    genPrev() {
      const slot = this.$scopedSlots.prev ? this.$scopedSlots.prev({}) : this.$slots.prev || this.__cachedPrev;
      return this.$createElement('div', {
        staticClass: 'v-slide-group__prev',
        class: {
          'v-slide-group__prev--disabled': !this.hasPrev
        },
        on: {
          click: () => this.onAffixClick('prev')
        },
        key: 'prev'
      }, [slot]);
    },
    genTransition(location) {
      return this.$createElement(transitions["c" /* VFadeTransition */], [this.genIcon(location)]);
    },
    genWrapper() {
      return this.$createElement('div', {
        staticClass: 'v-slide-group__wrapper',
        directives: [{
          name: 'touch',
          value: {
            start: e => this.overflowCheck(e, this.onTouchStart),
            move: e => this.overflowCheck(e, this.onTouchMove),
            end: e => this.overflowCheck(e, this.onTouchEnd)
          }
        }],
        ref: 'wrapper',
        on: {
          scroll: this.onScroll
        }
      }, [this.genContent()]);
    },
    calculateNewOffset(direction, widths, rtl, currentScrollOffset) {
      const sign = rtl ? -1 : 1;
      const newAbosluteOffset = sign * currentScrollOffset + (direction === 'prev' ? -1 : 1) * widths.wrapper;
      return sign * Math.max(Math.min(newAbosluteOffset, widths.content - widths.wrapper), 0);
    },
    onAffixClick(location) {
      this.$emit(`click:${location}`);
      this.scrollTo(location);
    },
    onResize() {
      /* istanbul ignore next */
      if (this._isDestroyed) return;
      this.setWidths();
    },
    onTouchStart(e) {
      const {
        content
      } = this.$refs;
      this.startX = this.scrollOffset + e.touchstartX;
      content.style.setProperty('transition', 'none');
      content.style.setProperty('willChange', 'transform');
    },
    onTouchMove(e) {
      if (!this.canTouch) return;
      if (!this.isSwiping) {
        // only calculate disableSwipeHorizontal during the first onTouchMove invoke
        // in order to ensure disableSwipeHorizontal value is consistent between onTouchStart and onTouchEnd
        const diffX = e.touchmoveX - e.touchstartX;
        const diffY = e.touchmoveY - e.touchstartY;
        this.isSwipingHorizontal = Math.abs(diffX) > Math.abs(diffY);
        this.isSwiping = true;
      }
      if (this.isSwipingHorizontal) {
        // sliding horizontally
        this.scrollOffset = this.startX - e.touchmoveX; // temporarily disable window vertical scrolling

        document.documentElement.style.overflowY = 'hidden';
      }
    },
    onTouchEnd() {
      if (!this.canTouch) return;
      const {
        content,
        wrapper
      } = this.$refs;
      const maxScrollOffset = content.clientWidth - wrapper.clientWidth;
      content.style.setProperty('transition', null);
      content.style.setProperty('willChange', null);
      if (this.$vuetify.rtl) {
        /* istanbul ignore else */
        if (this.scrollOffset > 0 || !this.isOverflowing) {
          this.scrollOffset = 0;
        } else if (this.scrollOffset <= -maxScrollOffset) {
          this.scrollOffset = -maxScrollOffset;
        }
      } else {
        /* istanbul ignore else */
        if (this.scrollOffset < 0 || !this.isOverflowing) {
          this.scrollOffset = 0;
        } else if (this.scrollOffset >= maxScrollOffset) {
          this.scrollOffset = maxScrollOffset;
        }
      }
      this.isSwiping = false; // rollback whole page scrolling to default

      document.documentElement.style.removeProperty('overflow-y');
    },
    overflowCheck(e, fn) {
      e.stopPropagation();
      this.isOverflowing && fn(e);
    },
    scrollIntoView
    /* istanbul ignore next */() {
      if (!this.selectedItem && this.items.length) {
        const lastItemPosition = this.items[this.items.length - 1].$el.getBoundingClientRect();
        const wrapperPosition = this.$refs.wrapper.getBoundingClientRect();
        if (this.$vuetify.rtl && wrapperPosition.right < lastItemPosition.right || !this.$vuetify.rtl && wrapperPosition.left > lastItemPosition.left) {
          this.scrollTo('prev');
        }
      }
      if (!this.selectedItem) {
        return;
      }
      if (this.selectedIndex === 0 || !this.centerActive && !this.isOverflowing) {
        this.scrollOffset = 0;
      } else if (this.centerActive) {
        this.scrollOffset = calculateCenteredOffset(this.selectedItem.$el, this.widths, this.$vuetify.rtl);
      } else if (this.isOverflowing) {
        this.scrollOffset = calculateUpdatedOffset(this.selectedItem.$el, this.widths, this.$vuetify.rtl, this.scrollOffset);
      }
    },
    scrollTo
    /* istanbul ignore next */(location) {
      this.scrollOffset = this.calculateNewOffset(location, {
        // Force reflow
        content: this.$refs.content ? this.$refs.content.clientWidth : 0,
        wrapper: this.$refs.wrapper ? this.$refs.wrapper.clientWidth : 0
      }, this.$vuetify.rtl, this.scrollOffset);
    },
    setWidths() {
      window.requestAnimationFrame(() => {
        if (this._isDestroyed) return;
        const {
          content,
          wrapper
        } = this.$refs;
        this.widths = {
          content: content ? content.clientWidth : 0,
          wrapper: wrapper ? wrapper.clientWidth : 0
        }; // https://github.com/vuetifyjs/vuetify/issues/13212
        // We add +1 to the wrappers width to prevent an issue where the `clientWidth`
        // gets calculated wrongly by the browser if using a different zoom-level.

        this.isOverflowing = this.widths.wrapper + 1 < this.widths.content;
        this.scrollIntoView();
      });
    }
  },
  render(h) {
    return h('div', this.genData(), [this.genPrev(), this.genWrapper(), this.genNext()]);
  }
});
/* harmony default export */ var VSlideGroup_VSlideGroup = (BaseSlideGroup.extend({
  name: 'v-slide-group',
  provide() {
    return {
      slideGroup: this
    };
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/ssr-bootable/index.js
var ssr_bootable = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabsBar.js
// Extensions
 // Mixins


 // Utilities


/* harmony default export */ var VTabsBar = (Object(mixins["a" /* default */])(BaseSlideGroup, ssr_bootable["a" /* default */], themeable["a" /* default */]
/* @vue/component */).extend({
  name: 'v-tabs-bar',
  provide() {
    return {
      tabsBar: this
    };
  },
  computed: {
    classes() {
      return {
        ...BaseSlideGroup.options.computed.classes.call(this),
        'v-tabs-bar': true,
        'v-tabs-bar--is-mobile': this.isMobile,
        // TODO: Remove this and move to v-slide-group
        'v-tabs-bar--show-arrows': this.showArrows,
        ...this.themeClasses
      };
    }
  },
  watch: {
    items: 'callSlider',
    internalValue: 'callSlider',
    $route: 'onRouteChange'
  },
  methods: {
    callSlider() {
      if (!this.isBooted) return;
      this.$emit('call:slider');
    },
    genContent() {
      const render = BaseSlideGroup.options.methods.genContent.call(this);
      render.data = render.data || {};
      render.data.staticClass += ' v-tabs-bar__content';
      return render;
    },
    onRouteChange(val, oldVal) {
      /* istanbul ignore next */
      if (this.mandatory) return;
      const items = this.items;
      const newPath = val.path;
      const oldPath = oldVal.path;
      let hasNew = false;
      let hasOld = false;
      for (const item of items) {
        if (item.to === oldPath) hasOld = true;else if (item.to === newPath) hasNew = true;
        if (hasNew && hasOld) break;
      } // If we have an old item and not a new one
      // it's assumed that the user navigated to
      // a path that is not present in the items

      if (!hasNew && hasOld) this.internalValue = undefined;
    }
  },
  render(h) {
    const render = BaseSlideGroup.options.render.call(this, h);
    render.data.attrs = {
      role: 'tablist'
    };
    return render;
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VWindow/VWindow.js
var VWindow = __webpack_require__(223);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabsItems.js
// Extensions
 // Types & Components


/* @vue/component */

/* harmony default export */ var VTabsItems = (VWindow["a" /* default */].extend({
  name: 'v-tabs-items',
  props: {
    mandatory: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        ...VWindow["a" /* default */].options.computed.classes.call(this),
        'v-tabs-items': true
      };
    },
    isDark() {
      return this.rootIsDark;
    }
  },
  methods: {
    getValue(item, i) {
      return item.id || VItemGroup["a" /* BaseItemGroup */].options.methods.getValue.call(this, item, i);
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabsSlider.js
// Mixins
 // Utilities


/* @vue/component */

/* harmony default export */ var VTabsSlider = (Object(mixins["a" /* default */])(colorable["a" /* default */]).extend({
  name: 'v-tabs-slider',
  render(h) {
    return h('div', this.setBackgroundColor(this.color, {
      staticClass: 'v-tabs-slider'
    }));
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/proxyable/index.js
var proxyable = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabs.js
// Styles
 // Components



 // Mixins



 // Directives

 // Utilities



const VTabs_baseMixins = Object(mixins["a" /* default */])(colorable["a" /* default */], proxyable["a" /* default */], themeable["a" /* default */]);
/* harmony default export */ var VTabs_VTabs = (VTabs_baseMixins.extend().extend({
  name: 'v-tabs',
  directives: {
    Resize: resize["a" /* default */]
  },
  props: {
    activeClass: {
      type: String,
      default: ''
    },
    alignWithTitle: Boolean,
    backgroundColor: String,
    centerActive: Boolean,
    centered: Boolean,
    fixedTabs: Boolean,
    grow: Boolean,
    height: {
      type: [Number, String],
      default: undefined
    },
    hideSlider: Boolean,
    iconsAndText: Boolean,
    mobileBreakpoint: [String, Number],
    nextIcon: {
      type: String,
      default: '$next'
    },
    optional: Boolean,
    prevIcon: {
      type: String,
      default: '$prev'
    },
    right: Boolean,
    showArrows: [Boolean, String],
    sliderColor: String,
    sliderSize: {
      type: [Number, String],
      default: 2
    },
    vertical: Boolean
  },
  data() {
    return {
      resizeTimeout: 0,
      slider: {
        height: null,
        left: null,
        right: null,
        top: null,
        width: null
      },
      transitionTime: 300
    };
  },
  computed: {
    classes() {
      return {
        'v-tabs--align-with-title': this.alignWithTitle,
        'v-tabs--centered': this.centered,
        'v-tabs--fixed-tabs': this.fixedTabs,
        'v-tabs--grow': this.grow,
        'v-tabs--icons-and-text': this.iconsAndText,
        'v-tabs--right': this.right,
        'v-tabs--vertical': this.vertical,
        ...this.themeClasses
      };
    },
    isReversed() {
      return this.$vuetify.rtl && this.vertical;
    },
    sliderStyles() {
      return {
        height: Object(helpers["h" /* convertToUnit */])(this.slider.height),
        left: this.isReversed ? undefined : Object(helpers["h" /* convertToUnit */])(this.slider.left),
        right: this.isReversed ? Object(helpers["h" /* convertToUnit */])(this.slider.right) : undefined,
        top: this.vertical ? Object(helpers["h" /* convertToUnit */])(this.slider.top) : undefined,
        transition: this.slider.left != null ? null : 'none',
        width: Object(helpers["h" /* convertToUnit */])(this.slider.width)
      };
    },
    computedColor() {
      if (this.color) return this.color;else if (this.isDark && !this.appIsDark) return 'white';else return 'primary';
    }
  },
  watch: {
    alignWithTitle: 'callSlider',
    centered: 'callSlider',
    centerActive: 'callSlider',
    fixedTabs: 'callSlider',
    grow: 'callSlider',
    iconsAndText: 'callSlider',
    right: 'callSlider',
    showArrows: 'callSlider',
    vertical: 'callSlider',
    '$vuetify.application.left': 'onResize',
    '$vuetify.application.right': 'onResize',
    '$vuetify.rtl': 'onResize'
  },
  mounted() {
    if (typeof ResizeObserver !== 'undefined') {
      const obs = new ResizeObserver(() => {
        this.onResize();
      });
      obs.observe(this.$el);
      this.$on('hook:destroyed', () => {
        obs.disconnect();
      });
    }
    this.$nextTick(() => {
      window.setTimeout(this.callSlider, 30);
    });
  },
  methods: {
    callSlider() {
      if (this.hideSlider || !this.$refs.items || !this.$refs.items.selectedItems.length) {
        this.slider.width = 0;
        return false;
      }
      this.$nextTick(() => {
        // Give screen time to paint
        const activeTab = this.$refs.items.selectedItems[0];
        /* istanbul ignore if */

        if (!activeTab || !activeTab.$el) {
          this.slider.width = 0;
          this.slider.left = 0;
          return;
        }
        const el = activeTab.$el;
        this.slider = {
          height: !this.vertical ? Number(this.sliderSize) : el.scrollHeight,
          left: this.vertical ? 0 : el.offsetLeft,
          right: this.vertical ? 0 : el.offsetLeft + el.offsetWidth,
          top: el.offsetTop,
          width: this.vertical ? Number(this.sliderSize) : el.scrollWidth
        };
      });
      return true;
    },
    genBar(items, slider) {
      const data = {
        style: {
          height: Object(helpers["h" /* convertToUnit */])(this.height)
        },
        props: {
          activeClass: this.activeClass,
          centerActive: this.centerActive,
          dark: this.dark,
          light: this.light,
          mandatory: !this.optional,
          mobileBreakpoint: this.mobileBreakpoint,
          nextIcon: this.nextIcon,
          prevIcon: this.prevIcon,
          showArrows: this.showArrows,
          value: this.internalValue
        },
        on: {
          'call:slider': this.callSlider,
          change: val => {
            this.internalValue = val;
          }
        },
        ref: 'items'
      };
      this.setTextColor(this.computedColor, data);
      this.setBackgroundColor(this.backgroundColor, data);
      return this.$createElement(VTabsBar, data, [this.genSlider(slider), items]);
    },
    genItems(items, item) {
      // If user provides items
      // opt to use theirs
      if (items) return items; // If no tabs are provided
      // render nothing

      if (!item.length) return null;
      return this.$createElement(VTabsItems, {
        props: {
          value: this.internalValue
        },
        on: {
          change: val => {
            this.internalValue = val;
          }
        }
      }, item);
    },
    genSlider(slider) {
      if (this.hideSlider) return null;
      if (!slider) {
        slider = this.$createElement(VTabsSlider, {
          props: {
            color: this.sliderColor
          }
        });
      }
      return this.$createElement('div', {
        staticClass: 'v-tabs-slider-wrapper',
        style: this.sliderStyles
      }, [slider]);
    },
    onResize() {
      if (this._isDestroyed) return;
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = window.setTimeout(this.callSlider, 0);
    },
    parseNodes() {
      let items = null;
      let slider = null;
      const item = [];
      const tab = [];
      const slot = this.$slots.default || [];
      const length = slot.length;
      for (let i = 0; i < length; i++) {
        const vnode = slot[i];
        if (vnode.componentOptions) {
          switch (vnode.componentOptions.Ctor.options.name) {
            case 'v-tabs-slider':
              slider = vnode;
              break;
            case 'v-tabs-items':
              items = vnode;
              break;
            case 'v-tab-item':
              item.push(vnode);
              break;
            // case 'v-tab' - intentionally omitted

            default:
              tab.push(vnode);
          }
        } else {
          tab.push(vnode);
        }
      }
      /**
       * tab: array of `v-tab`
       * slider: single `v-tabs-slider`
       * items: single `v-tabs-items`
       * item: array of `v-tab-item`
       */

      return {
        tab,
        slider,
        items,
        item
      };
    }
  },
  render(h) {
    const {
      tab,
      slider,
      items,
      item
    } = this.parseNodes();
    return h('div', {
      staticClass: 'v-tabs',
      class: this.classes,
      directives: [{
        name: 'resize',
        modifiers: {
          quiet: true
        },
        value: this.onResize
      }]
    }, [this.genBar(tab, slider), this.genItems(items, item)]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/Index.vue?vue&type=template&id=5a61893c&















var Indexvue_type_template_id_5a61893c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VContainer["a" /* default */], {
    staticClass: "container"
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('h1', [_vm._v("Mobile Navbar")]), _vm._v(" "), _c('HeaderNavbar')], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('h1', {
    staticClass: "mb-3"
  }, [_vm._v("Navbar Component")]), _vm._v(" "), _c('Navbar')], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('h1', {
    staticClass: "mb-3"
  }, [_vm._v("Flash Deals Single Item")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "mb-4",
    attrs: {
      "cols": "12",
      "md": "3",
      "sm": "6"
    }
  }), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "mb-3",
    attrs: {
      "cols": "12"
    }
  }, [_c('h1', [_vm._v("Top Categories")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c('base-card', {}, [_c(components_VCard["a" /* VCardText */], {
    staticClass: "d-flex justify-content-center p-4 mx-auto"
  }, [_c('div', {
    staticClass: "card-overlay-item br-8 overflow-hidden"
  }, [_c(VChip["a" /* default */], {
    staticClass: "ma-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("\n                Primary\n              ")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_c('img', {
    staticClass: "w-33 h-100",
    attrs: {
      "src": __webpack_require__(229),
      "alt": ""
    }
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_c('img', {
    staticClass: "w-33 h-100",
    attrs: {
      "src": __webpack_require__(229),
      "alt": ""
    }
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_c('img', {
    staticClass: "w-33 h-100",
    attrs: {
      "src": __webpack_require__(229),
      "alt": ""
    }
  })])], 1)])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c('base-card', {}, [_c(components_VCard["a" /* VCardText */], {
    staticClass: "d-flex justify-content-center p-4 mx-auto"
  }, [_c('div', {
    staticClass: "card-overlay-item br-8 overflow-hidden"
  }, [_c('a', {
    attrs: {
      "href": ""
    }
  }, [_c('img', {
    staticClass: "w-33 h-100",
    attrs: {
      "src": __webpack_require__(229),
      "alt": ""
    }
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_c('img', {
    staticClass: "w-33 h-100",
    attrs: {
      "src": __webpack_require__(229),
      "alt": ""
    }
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_c('img', {
    staticClass: "w-33 h-100",
    attrs: {
      "src": __webpack_require__(229),
      "alt": ""
    }
  })])])])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "mb-3",
    attrs: {
      "cols": "12"
    }
  }, [_vm._v("\n      Top Ratings\n    ")]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "mb-5",
    attrs: {
      "cols": "12",
      "lg": "6"
    }
  }, [_c('base-card', [_c('div', {
    staticClass: "px-3"
  }, [_c(VRow["a" /* default */], _vm._l(4, function (index) {
    return _c(VCol["a" /* default */], {
      key: index,
      attrs: {
        "cols": "6",
        "md": "3",
        "sm": "6",
        "lg": "3"
      }
    }, [_c(VImg["a" /* default */], {
      staticClass: "mb-3 card-overlay-item",
      attrs: {
        "contain": "",
        "src": "@/assets/images/products/camera-1.png"
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "text-center"
    }, [_c('div', {
      staticClass: "d-flex justify-center mb-1"
    }, [_c(VRating["a" /* default */], {
      attrs: {
        "value": 4.5,
        "color": "amber",
        "dense": "",
        "half-increments": "",
        "readonly": "",
        "size": "18"
      }
    }), _vm._v("\n                  (49)\n                ")], 1), _vm._v(" "), _c('h6', {
      staticClass: "mb-1"
    }, [_vm._v("Camera")]), _vm._v(" "), _c('h6', {
      staticClass: "primary--text"
    }, [_vm._v("$150")])])], 1);
  }), 1)], 1)])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "lg": "12"
    }
  }, [_c('base-card', [_c('div', {
    staticClass: "px-3"
  }, [_c(VRow["a" /* default */], _vm._l(6, function (index) {
    return _c(VCol["a" /* default */], {
      key: index,
      attrs: {
        "cols": "6",
        "sm": "4",
        "md": "3",
        "lg": "2"
      }
    }, [_c(VImg["a" /* default */], {
      staticClass: "mb-3 card-overlay-item",
      attrs: {
        "contain": "",
        "src": "@/assets/images/products/imagegoggles.png"
      }
    }), _vm._v(" "), _c('h6', {
      staticClass: "mb-1"
    }, [_vm._v("Sunglass")]), _vm._v(" "), _c('h6', {
      staticClass: "primary--text"
    }, [_vm._v("$150")])], 1);
  }), 1)], 1)])], 1), _vm._v(" "), _vm._l(12, function (index) {
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
        "src": __webpack_require__(339),
        "alt": ""
      }
    })]), _vm._v(" "), _c('p', {
      staticClass: "font-weight-bold mb-0 text-truncate"
    }, [_vm._v("Automobile")])], 1)])], 1)], 1);
  }), _vm._v(" "), _c(VCol["a" /* default */], [_c(VCard["a" /* default */], [_c(VTabsItems, {
    model: {
      value: _vm.tab,
      callback: function ($$v) {
        _vm.tab = $$v;
      },
      expression: "tab"
    }
  }, _vm._l(4, function (i) {
    return _c(VTabItem, {
      key: i,
      attrs: {
        "value": 'tab-' + i
      }
    }, [_c(VCard["a" /* default */], {
      attrs: {
        "flat": ""
      }
    }, [_c(components_VCard["a" /* VCardText */], [_vm._v(_vm._s(_vm.text))])], 1)], 1);
  }), 1), _vm._v(" "), _c(VTabs_VTabs, {
    attrs: {
      "background-color": "",
      "centered": "",
      "icons-and-text": ""
    },
    model: {
      value: _vm.tab,
      callback: function ($$v) {
        _vm.tab = $$v;
      },
      expression: "tab"
    }
  }, [_c(VTabsSlider), _vm._v(" "), _c(VTab, {
    staticClass: "text-capitalize",
    attrs: {
      "href": "#tab-1"
    }
  }, [_vm._v("\n              Home\n              "), _c('img', {
    directives: [{
      name: "svg-inline",
      rawName: "v-svg-inline"
    }],
    staticClass: "icon mr-0",
    attrs: {
      "src": __webpack_require__(124),
      "alt": ""
    }
  })]), _vm._v(" "), _c(VTab, {
    staticClass: "text-capitalize",
    attrs: {
      "href": "#tab-2"
    }
  }, [_vm._v("\n              Category\n              "), _c('img', {
    directives: [{
      name: "svg-inline",
      rawName: "v-svg-inline"
    }],
    staticClass: "icon mr-0",
    attrs: {
      "src": __webpack_require__(125),
      "alt": ""
    }
  })]), _vm._v(" "), _c(VTab, {
    staticClass: "text-capitalize",
    attrs: {
      "href": "#tab-3"
    }
  }, [_vm._v("\n              Cart\n              "), _c('img', {
    directives: [{
      name: "svg-inline",
      rawName: "v-svg-inline"
    }],
    staticClass: "icon mr-0",
    attrs: {
      "src": __webpack_require__(126),
      "alt": ""
    }
  })]), _vm._v(" "), _c(VTab, {
    staticClass: "text-capitalize",
    attrs: {
      "href": "#tab-3"
    }
  }, [_vm._v("\n              Account\n              "), _c('img', {
    directives: [{
      name: "svg-inline",
      rawName: "v-svg-inline"
    }],
    staticClass: "icon mr-0",
    attrs: {
      "src": __webpack_require__(127),
      "alt": ""
    }
  })])], 1)], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('h1', {
    staticClass: "mb-5"
  }, [_vm._v("Avatar Input Component")]), _vm._v(" "), _c('div', {
    staticClass: "cover-upload-wrapper"
  }, [_c('label', {
    attrs: {
      "for": "cover-image"
    }
  }, [_c('span', {
    staticClass: "primary cover-upload"
  }, [_c('img', {
    directives: [{
      name: "svg-inline",
      rawName: "v-svg-inline"
    }],
    staticClass: "icon mr-0",
    attrs: {
      "src": __webpack_require__(344),
      "alt": ""
    }
  })])]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "file",
      "id": "cover-image"
    }
  })])])], 2)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/home/Index.vue?vue&type=template&id=5a61893c&

// EXTERNAL MODULE: ./pages/home/navbar.vue + 4 modules
var navbar = __webpack_require__(47);

// EXTERNAL MODULE: ./pages/home/header-navbar.vue + 4 modules
var header_navbar = __webpack_require__(112);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/Index.vue?vue&type=script&lang=js&


/* harmony default export */ var Indexvue_type_script_lang_js_ = ({
  name: 'Home',
  components: {
    Navbar: navbar["default"],
    HeaderNavbar: header_navbar["default"]
  },
  data: () => ({
    rating: 4,
    tab: null,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }),
  methods: {}
});
// CONCATENATED MODULE: ./pages/home/Index.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_Indexvue_type_script_lang_js_ = (Indexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./pages/home/Index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(345)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_Indexvue_type_script_lang_js_,
  Indexvue_type_template_id_5a61893c_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6421b692"
  
)

/* harmony default export */ var Index = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);


/* harmony default export */ __webpack_exports__["a"] = (_VBtn__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ })

};;
//# sourceMappingURL=Index.js.map