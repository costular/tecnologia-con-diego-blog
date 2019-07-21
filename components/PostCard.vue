<template>
<a :href="'/'+post.title_slug">
<div class="max-w-sm w-full lg:max-w-full lg:flex my-10">
  <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover text-center overflow-hidden" v-bind:style="{ backgroundImage: 'url('+getImageUrl()+')' }" title="Woman holding a mug">
  </div>
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center">{{ post._created | toDate }} · {{ this.post.content | readingTime }}</p>
      <div class="text-gray-900 font-bold text-xl mb-2">{{ post.title }}</div>
      <p class="text-gray-700 text-base">{{ post.excerpt }}</p>
    </div>
  </div>
</div>
</a>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
import ImageGetter from "~/util/ImageGetter.ts"

@Component
export default class PostCard extends Vue {
  @Prop() post!: any

  getImageUrl(): string {
    return ImageGetter.getAbsolutePath(this.post.image.path)
  }

}
</script>