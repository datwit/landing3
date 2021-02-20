import Vue from 'vue'

const globalComponents = {
  Author: () => import('../../components/global/Author.vue' /* webpackChunkName: "components/global/Author" */).then(c => c.default || c),
  Cta: () => import('../../components/global/CTA.vue' /* webpackChunkName: "components/global/CTA" */).then(c => c.default || c),
  Hero: () => import('../../components/global/Hero.vue' /* webpackChunkName: "components/global/Hero" */).then(c => c.default || c),
  Mainpricing: () => import('../../components/global/Mainpricing.vue' /* webpackChunkName: "components/global/Mainpricing" */).then(c => c.default || c),
  Resources: () => import('../../components/global/Resources.vue' /* webpackChunkName: "components/global/Resources" */).then(c => c.default || c),
  Scases: () => import('../../components/global/Scases.vue' /* webpackChunkName: "components/global/Scases" */).then(c => c.default || c),
  Scrollsign: () => import('../../components/global/Scrollsign.vue' /* webpackChunkName: "components/global/Scrollsign" */).then(c => c.default || c),
  Selection: () => import('../../components/global/Selection.vue' /* webpackChunkName: "components/global/Selection" */).then(c => c.default || c),
  Services: () => import('../../components/global/Services.vue' /* webpackChunkName: "components/global/Services" */).then(c => c.default || c)
}

for (const name in globalComponents) {
  Vue.component(name, globalComponents[name])
}
