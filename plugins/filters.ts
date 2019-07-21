import Vue from 'vue'
import highlightjs from 'highlight.js'
import marked, { Renderer } from 'marked'
import * as moment from "moment"
import ImageGetter from "~/util/ImageGetter.ts"
import TimeReadingHelper from "~/util/TimeReading.ts"

// Only import the languages that you need to keep our js bundle small
highlightjs.registerLanguage('php', require('highlight.js/lib/languages/php'))
highlightjs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
highlightjs.registerLanguage('css', require('highlight.js/lib/languages/css'))
highlightjs.registerLanguage('java', require('highlight.js/lib/languages/java'))
highlightjs.registerLanguage('kotlin', require('highlight.js/lib/languages/kotlin'))
highlightjs.registerLanguage('python', require('highlight.js/lib/languages/python'))
highlightjs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'))


// Create your custom renderer.
const renderer = new Renderer()
renderer.code = (code: string, language: string): string => {
  // Check whether the given language is valid for highlight.js.
  const validLang = !!(language && highlightjs.getLanguage(language))
  // Highlight only if the language is valid.
  const highlighted = validLang ? highlightjs.highlight(language, code).value : code
  // Render the highlighted code with `hljs` class.
  return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`
}

// Set the renderer to marked.
marked.setOptions({ renderer })

Vue.filter('parseMd', function(content: string): string {
    return marked(content)
})

Vue.filter('toDate', function(timestamp: number): string {
  return moment.unix(timestamp).format("D MMM YYYY")
})

Vue.filter('readingTime', function(content: string): string {
  const minsReading = TimeReadingHelper.calculateReadingTime(content)
  return `${minsReading} mins lectura`
})