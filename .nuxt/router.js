import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _406ee992 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _543d5d47 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _33a69401 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _850f2f7e = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _fa569eea = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _34a00fd5 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _b77aa8e4 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

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
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _406ee992,
    children: [{
      path: "",
      component: _543d5d47,
      name: "home"
    }, {
      path: "/login",
      component: _33a69401,
      name: "login"
    }, {
      path: "/register",
      component: _33a69401,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _850f2f7e,
      name: "profile"
    }, {
      path: "/settings",
      component: _fa569eea,
      name: "settings"
    }, {
      path: "/editor",
      component: _34a00fd5,
      name: "editor"
    }, {
      path: "/article:slug",
      component: _b77aa8e4,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
