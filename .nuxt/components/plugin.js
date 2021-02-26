import Vue from 'vue'

const globalComponents = {
  Author: () => import('../..\\components\\global\\Author.vue' /* webpackChunkName: "components_global/Author" */).then(c => c.default || c),
  Cta: () => import('../..\\components\\global\\CTA.vue' /* webpackChunkName: "components_global/CTA" */).then(c => c.default || c),
  Resources: () => import('../..\\components\\global\\Resources.vue' /* webpackChunkName: "components_global/Resources" */).then(c => c.default || c)
}

for (const name in globalComponents) {
  Vue.component(name, globalComponents[name])
}
