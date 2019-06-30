<template>
  <section>
    <article class="my-8">
      <div class="text-grey-dark font-bold text-sm tracking-wide">
        <a
          v-for="(tag, key) in post.tags"
          :key="key"
          :href="'/category/'+tag"
          class="ml-1 no-underline"
        >{{ tag }}</a>
      </div>
      <h1 class="title">{{ post.title }}</h1>
      <div class="mt-4 markdown" v-html="$options.filters.parseMd(post.excerpt + '\n' + post.content)"></div>
    </article>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import axios from "axios";

@Component({
  async asyncData({ app, params, error, payload }) {
    if (payload) {
      return { post: payload };
    } else {
      let { data } = await axios.post(
        <string>process.env.POSTS_URL,
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
})
export default class extends Vue {}
</script>