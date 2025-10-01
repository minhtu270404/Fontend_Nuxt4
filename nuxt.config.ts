export default defineNuxtConfig({
  runtimeConfig: {
    public: {
       apiBase: process.env.PUBLIC_API_BASE || 'http://localhost:8000/api'
    },
  },
  compatibilityDate: "2025-09-17",
  app: {
    head: {
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      title: "job Seeker",
      meta: [
        {
          name: "description",
          content: "Index page",
        },
        {
          name: "msapplication-TileColor",
          content: "#0E0E0E",
        },
        {
          name: "template_color",
          content: "#0E0E0E",
        },
        {
          name: "msapplication-config",
          content: "browserconfig.xml",
        },
        {
          name: "keywords",
          content: "index, page",
        },
        {
          name: "author",
          content: "Minh Tu",
        },
      ],
      link: [
        { rel: "stylesheet", href: "/assets/css/all.min.css" },
        { rel: "stylesheet", href: "/assets/css/style.css" },
   
        { rel: "shortcut icon", href: "", type:"image/x-icon" }
      ],
      script: [
        { src: "/assets/js/vendor/modernizr-3.6.0.min.js", defer: true },
        { src: "/assets/js/vendor/jquery-3.6.0.min.js", defer: true },
        { src: "/assets/js/vendor/jquery-migrate-3.3.0.min.js", defer: true },
        { src: "/assets/js/vendor/bootstrap.bundle.min.js", defer: true },
        { src: "/assets/js/plugins/waypoints.js", defer: true },
        { src: "/assets/js/plugins/wow.js", defer: true },
        { src: "/assets/js/plugins/magnific-popup.js", defer: true },
        { src: "/assets/js/plugins/perfect-scrollbar.min.js", defer: true },
        { src: "/assets/js/plugins/select2.min.js", defer: true },
        { src: "/assets/js/plugins/isotope.js", defer: true },
        { src: "/assets/js/plugins/scrollup.js", defer: true },
        { src: "/assets/js/plugins/swiper-bundle.min.js", defer: true },
        { src: "/assets/js/plugins/Font-Awesome.js", defer: true },
        { src: "/assets/js/plugins/counterup.js", defer: true },
        { src: "/assets/js/main.js?v=4.1", defer: true }
      ],
    },
  },
  modules: ["@nuxt/image"],
});
