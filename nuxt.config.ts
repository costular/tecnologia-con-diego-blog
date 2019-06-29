require('dotenv').config()
import PurgecssPlugin from 'purgecss-webpack-plugin';
import glob from 'fast-glob'
import path from 'path'
import axios from 'axios'

class TailwindExtractor {
  static extract(content: string) {
    return content.match(/[A-z0-9-:\/]+/g) || [];
  }
}

export default {
  env: {},
  head: {
    title: "tediego-blog",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Blog de Técnologia con Diego" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  loading: { color: "#3B8070" },
  css: ["~/assets/css/main.css"],
  build: {
    extractCSS: true,
    /*
    ** You can extend webpack config here
    */
    extend(config: any, { isDev }: { isDev: any }) {
      if (!isDev) {
        // Remove unused CSS using purgecss. See https://github.com/FullHuman/purgecss
        // for more information about purgecss.
        config.plugins.push(
          new PurgecssPlugin({
            // Specify the locations of any files you want to scan for class names.
            paths: glob.sync([
              path.join(__dirname, './pages/**/*.vue'),
              path.join(__dirname, './layouts/**/*.vue'),
              path.join(__dirname, './components/**/*.vue')
            ]),
            extractors: [
              {
                extractor: TailwindExtractor,
                // Specify the file extensions to include when scanning for
                // class names.
                extensions: ["html", "vue"]
              }
            ],
            whitelist: [
              "html",
              "body",
              "ul",
              "ol",
              "pre",
              "code",
              "blockquote"
            ],
            whitelistPatterns: [/\bhljs\S*/]
          })
        )
      }
    },
    modules: [
      "@nuxtjs/axios",
    ],
    axios: {}
  }
}
