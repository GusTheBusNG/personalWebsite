const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-components-contentful-js": hot(preferDefault(require("/Users/nicholasgustafson/Documents/develop/personalWebsite/src/components/contentful.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/nicholasgustafson/Documents/develop/personalWebsite/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/nicholasgustafson/Documents/develop/personalWebsite/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/nicholasgustafson/Documents/develop/personalWebsite/src/pages/index.js")))
}

