export { default as Author } from '../../components/global/Author.vue'
export { default as Cta } from '../../components/global/CTA.vue'
export { default as Hero } from '../../components/global/Hero.vue'
export { default as Mainpricing } from '../../components/global/Mainpricing.vue'
export { default as Resources } from '../../components/global/Resources.vue'
export { default as Scases } from '../../components/global/Scases.vue'
export { default as Scrollsign } from '../../components/global/Scrollsign.vue'
export { default as Selection } from '../../components/global/Selection.vue'
export { default as Services } from '../../components/global/Services.vue'
export { default as Cheader } from '../../components/Cheader.vue'
export { default as Footer } from '../../components/Footer.vue'

export const LazyAuthor = import('../../components/global/Author.vue' /* webpackChunkName: "components/global/Author" */).then(c => c.default || c)
export const LazyCta = import('../../components/global/CTA.vue' /* webpackChunkName: "components/global/CTA" */).then(c => c.default || c)
export const LazyHero = import('../../components/global/Hero.vue' /* webpackChunkName: "components/global/Hero" */).then(c => c.default || c)
export const LazyMainpricing = import('../../components/global/Mainpricing.vue' /* webpackChunkName: "components/global/Mainpricing" */).then(c => c.default || c)
export const LazyResources = import('../../components/global/Resources.vue' /* webpackChunkName: "components/global/Resources" */).then(c => c.default || c)
export const LazyScases = import('../../components/global/Scases.vue' /* webpackChunkName: "components/global/Scases" */).then(c => c.default || c)
export const LazyScrollsign = import('../../components/global/Scrollsign.vue' /* webpackChunkName: "components/global/Scrollsign" */).then(c => c.default || c)
export const LazySelection = import('../../components/global/Selection.vue' /* webpackChunkName: "components/global/Selection" */).then(c => c.default || c)
export const LazyServices = import('../../components/global/Services.vue' /* webpackChunkName: "components/global/Services" */).then(c => c.default || c)
export const LazyCheader = import('../../components/Cheader.vue' /* webpackChunkName: "components/Cheader" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/Footer" */).then(c => c.default || c)
