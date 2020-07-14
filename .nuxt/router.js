import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _df58cf94 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _ca7998e8 = () => interopDefault(import('..\\pages\\index\\index.vue' /* webpackChunkName: "pages/index/index" */))
const _0060a8f4 = () => interopDefault(import('..\\pages\\index\\_id.vue' /* webpackChunkName: "pages/index/_id" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _df58cf94,
    children: [{
      path: "",
      component: _ca7998e8,
      name: "index"
    }, {
      path: ":id",
      component: _0060a8f4,
      name: "index-id"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
