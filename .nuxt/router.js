import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f8fbe41a = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _34e025e8 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _675cdf80 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _466c6000 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _4db040ac = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _77b33436 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _78d7d966 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

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
    component: _f8fbe41a,
    children: [{
      path: "",
      component: _34e025e8,
      name: "home"
    }, {
      path: "/login",
      component: _675cdf80,
      name: "login"
    }, {
      path: "/register",
      component: _675cdf80,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _466c6000,
      name: "profile"
    }, {
      path: "/settings",
      component: _4db040ac,
      name: "settings"
    }, {
      path: "/editor",
      component: _77b33436,
      name: "editor"
    }, {
      path: "/article:slug",
      component: _78d7d966,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
