import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _46155a74 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _077d9ccf = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _49829d04 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _76089241 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _7451f0f9 = () => interopDefault(import('../pages/_slug.vue' /* webpackChunkName: "pages/_slug" */))

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
    path: "/blog",
    component: _46155a74,
    name: "blog"
  }, {
    path: "/contact",
    component: _077d9ccf,
    name: "contact"
  }, {
    path: "/blog/:slug",
    component: _49829d04,
    name: "blog-slug"
  }, {
    path: "/",
    component: _76089241,
    name: "index"
  }, {
    path: "/:slug",
    component: _7451f0f9,
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
