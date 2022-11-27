import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _430921d6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _2573fcde = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _efb40b78 = () => interopDefault(import('../pages/transactions/index.vue' /* webpackChunkName: "pages/transactions/index" */))
const _7b849668 = () => interopDefault(import('../pages/home/header-navbar.vue' /* webpackChunkName: "pages/home/header-navbar" */))
const _2410a2f1 = () => interopDefault(import('../pages/home/header-navbar-2.vue' /* webpackChunkName: "pages/home/header-navbar-2" */))
const _ef8d15a4 = () => interopDefault(import('../pages/home/Index.vue' /* webpackChunkName: "pages/home/Index" */))
const _5ccd1f78 = () => interopDefault(import('../pages/home/navbar.vue' /* webpackChunkName: "pages/home/navbar" */))
const _2eb5bdac = () => interopDefault(import('../pages/transactions/_id.vue' /* webpackChunkName: "pages/transactions/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/es",
    component: _430921d6,
    name: "index___es"
  }, {
    path: "/fr",
    component: _430921d6,
    name: "index___fr"
  }, {
    path: "/inspire",
    component: _2573fcde,
    name: "inspire___en"
  }, {
    path: "/transactions",
    component: _efb40b78,
    name: "transactions___en"
  }, {
    path: "/es/inspire",
    component: _2573fcde,
    name: "inspire___es"
  }, {
    path: "/es/transactions",
    component: _efb40b78,
    name: "transactions___es"
  }, {
    path: "/fr/inspire",
    component: _2573fcde,
    name: "inspire___fr"
  }, {
    path: "/fr/transactions",
    component: _efb40b78,
    name: "transactions___fr"
  }, {
    path: "/home/header-navbar",
    component: _7b849668,
    name: "home-header-navbar___en"
  }, {
    path: "/home/header-navbar-2",
    component: _2410a2f1,
    name: "home-header-navbar-2___en"
  }, {
    path: "/home/Index",
    component: _ef8d15a4,
    name: "home-Index___en"
  }, {
    path: "/home/navbar",
    component: _5ccd1f78,
    name: "home-navbar___en"
  }, {
    path: "/es/home/header-navbar",
    component: _7b849668,
    name: "home-header-navbar___es"
  }, {
    path: "/es/home/header-navbar-2",
    component: _2410a2f1,
    name: "home-header-navbar-2___es"
  }, {
    path: "/es/home/Index",
    component: _ef8d15a4,
    name: "home-Index___es"
  }, {
    path: "/es/home/navbar",
    component: _5ccd1f78,
    name: "home-navbar___es"
  }, {
    path: "/fr/home/header-navbar",
    component: _7b849668,
    name: "home-header-navbar___fr"
  }, {
    path: "/fr/home/header-navbar-2",
    component: _2410a2f1,
    name: "home-header-navbar-2___fr"
  }, {
    path: "/fr/home/Index",
    component: _ef8d15a4,
    name: "home-Index___fr"
  }, {
    path: "/fr/home/navbar",
    component: _5ccd1f78,
    name: "home-navbar___fr"
  }, {
    path: "/es/transactions/:id",
    component: _2eb5bdac,
    name: "transactions-id___es"
  }, {
    path: "/fr/transactions/:id",
    component: _2eb5bdac,
    name: "transactions-id___fr"
  }, {
    path: "/transactions/:id",
    component: _2eb5bdac,
    name: "transactions-id___en"
  }, {
    path: "/",
    component: _430921d6,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
