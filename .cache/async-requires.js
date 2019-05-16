// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-components-contentful-js": () => import("/Users/nicholasgustafson/Documents/develop/personalWebsite/src/components/contentful.js" /* webpackChunkName: "component---src-components-contentful-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/nicholasgustafson/Documents/develop/personalWebsite/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/nicholasgustafson/Documents/develop/personalWebsite/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/nicholasgustafson/Documents/develop/personalWebsite/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/nicholasgustafson/Documents/develop/personalWebsite/.cache/data.json")

