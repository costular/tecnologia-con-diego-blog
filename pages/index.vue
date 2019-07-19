<template>
  <section>
    <div class="my-8">
      <PostCard :post="post" v-for="(post, key) in posts" :key="key" />
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import PostCard from "~/components/PostCard.vue"
import axios from "axios";

@Component({
  components: {
    PostCard
  },
  async asyncData() {
    const { data } = await axios.post(
      <string>process.env.POSTS_URL,
      JSON.stringify({
        filter: { published: true },
        sort: { _created: -1 },
        populate: 1
      }),
      {
        headers: { "Content-Type": "application/json" }
      }
    );

    return { posts: data.entries };
  }
})
export default class extends Vue {}
</script>
