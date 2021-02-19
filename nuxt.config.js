export default {
  target: "static",

  head: {
    htmlAttrs: {
      lang: "en",
    },
    title: "DatWit",
    titleTemplate: "%s | DatWit",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "We are a Serbian Company dedicated to creating multipurpose software solutions integrating modern techniques like Cloud Computing, Machine Learning, Data Analysis and microservices. Datwit develops small web apps with full artificial intelligence capabilities.",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/images/favicon.ico" }],
  },

  css: ["@/assets/css/tailwind.css"],

  plugins: [],

  components: true,

  buildModules: ["@nuxt/typescript-build", "@nuxtjs/tailwindcss"],

  modules: ["@nuxt/content"],

  content: {},

  build: {},

  server: {
    port: 3333 // default: 3000
  },
};
