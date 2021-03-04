import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2ba149e1 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _24338344 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _6a19ac18 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _029c4e9c = () => interopDefault(import('..\\pages\\partner.vue' /* webpackChunkName: "pages/partner" */))
const _3af1768e = () => interopDefault(import('..\\pages\\team.vue' /* webpackChunkName: "pages/team" */))
const _227ce1fc = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _4b5924a6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _49a2835e = () => interopDefault(import('..\\pages\\_slug.vue' /* webpackChunkName: "pages/_slug" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _2ba149e1,
    name: "about"
  }, {
    path: "/blog",
    component: _24338344,
    name: "blog"
  }, {
    path: "/contact",
    component: _6a19ac18,
    name: "contact"
  }, {
    path: "/partner",
    component: _029c4e9c,
    name: "partner"
  }, {
    path: "/team",
    component: _3af1768e,
    name: "team"
  }, {
    path: "/blog/:slug",
    component: _227ce1fc,
    name: "blog-slug"
  }, {
    path: "/",
    component: _4b5924a6,
    name: "index"
  }, {
    path: "/:slug",
    component: _49a2835e,
    name: "slug"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
