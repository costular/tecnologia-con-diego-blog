<template>
  <section>
    <article>
      <h1 class="title">{{ post.title }}</h1>
      <div class="text-grey-dark font-bold text-sm tracking-wide">
        <tag v-for="(tag, key) in post.tags" v-bind:tag="tag" :key="key" />
      </div>

      <div
        id="article-content"
        class="mt-4 markdown"
        v-html="$options.filters.parseMd(post.content)"
      ></div>
    </article>
  </section>
</template>
<script>
import { Vue, Component } from "nuxt-property-decorator";
import Tag from "~/components/Tag.vue";
import axios from "axios";
import ImageGetter from "~/util/ImageGetter.ts";

@Component({
  components: {
    Tag
  }
})
export default class extends Vue {

async asyncData({
    app,
    params,
    error,
    payload
  }) {
    if (payload) {
      return { post: payload };
    } else {
      let { data } = await axios.post(
        process.env.POSTS_URL,
        JSON.stringify({
          filter: { published: true, title_slug: params.title_slug },
          sort: { _created: -1 },
          populate: 1
        }),
        {
          headers: { "Content-Type": "application/json" }
        }
      );

      if (!data.entries[0]) {
        return error({ message: "404 Page not found", statusCode: 404 });
      }

      return { post: data.entries[0] };
    }
  }

  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: this.post.excerpt,
          name: this.post.excerpt
        }
      ] 
    }
  }
}
</script>