<template>
  <section>
    <article class="my-8">
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
<script lang="ts">
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
  getImageUrl(): string {
    return ImageGetter.getAbsolutePath(this.post.image.path);
  }

  async asyncData({
    app,
    params,
    error,
    payload
  }: {
    app: any;
    params: any;
    error: any;
    payload: any;
  }) {
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
}
</script>