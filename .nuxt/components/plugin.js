import Vue from 'vue'

const globalComponents = {
  Author: () => import('../..\\components\\global\\Author.vue' /* webpackChunkName: "components_global/Author" */).then(c => c.default || c),
  Cta: () => import('../..\\components\\global\\CTA.vue' /* webpackChunkName: "components_global/CTA" */).then(c => c.default || c),
  Hero: () => import('../..\\components\\global\\Hero.vue' /* webpackChunkName: "components_global/Hero" */).then(c => c.default || c),
  Mainpricing: () => import('../..\\components\\global\\Mainpricing.vue' /* webpackChunkName: "components_global/Mainpricing" */).then(c => c.default || c),
  Resources: () => import('../..\\components\\global\\Resources.vue' /* webpackChunkName: "components_global/Resources" */).then(c => c.default || c),
  Scases: () => import('../..\\components\\global\\Scases.vue' /* webpackChunkName: "components_global/Scases" */).then(c => c.default || c),
  Scrollsign: () => import('../..\\components\\global\\Scrollsign.vue' /* webpackChunkName: "components_global/Scrollsign" */).then(c => c.default || c),
  Selection: () => import('../..\\components\\global\\Selection.vue' /* webpackChunkName: "components_global/Selection" */).then(c => c.default || c),
  Services: () => import('../..\\components\\global\\Services.vue' /* webpackChunkName: "components_global/Services" */).then(c => c.default || c)
}

for (const name in globalComponents) {
  Vue.component(name, globalComponents[name])
}
