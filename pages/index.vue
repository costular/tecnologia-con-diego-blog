<template>
  <section>
    <div class="my-8">
      <ul class="flex flex-col w-full p-0">
        <li class="mb-6 w-full list-reset" v-for="(post, key) in posts" :key="key">
          <div class="text-grey-dark font-bold text-sm tracking-wide">
            <a
              v-for="tag in post.tags"
              :key="tag"
              :href="'/category/'+tag"
              class="ml-1 no-underline"
            >{{ tag }}</a>
          </div>

          <a :href="'/'+post.title_slug" class="no-underline">
            <h2 class="my-2 text-grey-darkest text-lg lg:text-xl">{{ post.title }}</h2>
          </a>

          <div class="page-content hidden md:block text-base mb-2" v-html="post.excerpt"></div>
          <a class="text-sm text-blue-light no-underline" :href="'/'+post.title_slug">Read more</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { 
  Vue,
  Component
 } from "nuxt-property-decorator";
import axios from 'axios'

@Component({
    async asyncData() {
      const { data } = await axios.post("http://cms.costulartools.es/api/collections/get/posts?token=52a4eb0ab163db69f03926ad5727b8",
    JSON.stringify({
        filter: { published: true },
        sort: {_created:-1},
        populate: 1
      }),
    {
      headers: { 'Content-Type': 'application/json' }
    })

    return { posts: data.entries }
    }
  })

export default class extends Vue {

}
</script>
