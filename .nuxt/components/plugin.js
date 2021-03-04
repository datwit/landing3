import Vue from 'vue'

const globalComponents = {
  Author: () => import('../..\\components\\global\\Author.vue' /* webpackChunkName: "components_global/Author" */).then(c => c.default || c),
  Collapsible: () => import('../..\\components\\global\\Collapsible.vue' /* webpackChunkName: "components_global/Collapsible" */).then(c => c.default || c),
  Cta: () => import('../..\\components\\global\\CTA.vue' /* webpackChunkName: "components_global/CTA" */).then(c => c.default || c),
  Iconblock: () => import('../..\\components\\global\\Iconblock.vue' /* webpackChunkName: "components_global/Iconblock" */).then(c => c.default || c),
  Resources: () => import('../..\\components\\global\\Resources.vue' /* webpackChunkName: "components_global/Resources" */).then(c => c.default || c),
  Scrollsign: () => import('../..\\components\\global\\Scrollsign.vue' /* webpackChunkName: "components_global/Scrollsign" */).then(c => c.default || c),
  Studycase: () => import('../..\\components\\global\\Studycase.vue' /* webpackChunkName: "components_global/Studycase" */).then(c => c.default || c)
}

for (const name in globalComponents) {
  Vue.component(name, globalComponents[name])
}
