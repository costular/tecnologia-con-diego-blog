require('dotenv').config()
import PurgecssPlugin from 'purgecss-webpack-plugin';
import glob from 'fast-glob'
import path from 'path'
import axios from 'axios'
const collect = require('collect.js');

class TailwindExtractor {
  static extract(content: string) {
    return content.match(/[A-z0-9-:\/]+/g) || [];
  }
}

export default {
  env: {},
  head: {
    title: "Técnologia con Diego",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Blog de Técnologia con Diego" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  plugins: [
    "~/plugins/filters.ts",
    "~/plugins/fontawesome.ts"
  ],
  loading: { color: "#3B8070" },
  css: [
    "~/assets/css/main.css",
    "highlight.js/styles/dracula.css",
    "@fortawesome/fontawesome-svg-core/styles.css"
  ],
  generate: {
    routes: async () => {
      let { data } = await axios.post(<string>process.env.POSTS_URL,
        JSON.stringify({
          filter: { published: true },
          sort: { _created: -1 },
          populate: 1
        }),
        {
          headers: { 'Content-Type': 'application/json' }
        })

      const collection = collect(data.entries)

      let tags = collection.map((post: any): any => post.tags)
        .flatten()
        .unique()
        .map((tag: any): any => {
          let payload = collection.filter((item: any): any => {
            return collect(item.tags).contains(tag)
          }).all()

          return {
            route: `category/${tag}`,
            payload: payload
          }
        }).all()

      let posts = collection.map((post: any): any => {
        return {
          route: post.title_slug,
          payload: post
        }
      }).all()

      return posts.concat(tags)
    }
  },
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
    }
  },
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/sitemap"
  ],
  axios: {},
  sitemap: {
    path: '/sitemap.xml',
    hostname: process.env.URL,
    cacheTime: 1000 * 60 * 15,
    generate: true, // Enable me when using nuxt generate
    async routes () {
      let { data } = await axios.post(<string>process.env.POSTS_URL,
      JSON.stringify({
          filter: { published: true },
          sort: {_created:-1},
          populate: 1
        }),
      {
        headers: { 'Content-Type': 'application/json' }
      })
  
      const collection = collect(data.entries)
  
      let tags = collection.map((post: any): any => post.tags)
      .flatten()
      .unique()
      .map((tag: any): any => `category/${tag}`)
      .all()
  
      let posts = collection.map((post: any): any => post.title_slug).all()
  
      return posts.concat(tags)
    }
  }
}
