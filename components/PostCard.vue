<template>
<div class="max-w-sm w-full lg:max-w-full lg:flex my-10">
  <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover text-center overflow-hidden" v-bind:style="{ backgroundImage: 'url('+getImageUrl()+')' }" title="Woman holding a mug">
  </div>
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center">
        <font-awesome-icon icon="spinner" fixed-width />
        {{ getFormattedDate() }}
      </p>
      <div class="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
      <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
import ImageGetter from "~/util/ImageGetter.ts"
import * as moment from 'moment'

@Component
export default class PostCard extends Vue {
  @Prop() post!: any

  getFormattedDate(): string {
    return moment.unix(this.post._modified).format("MM/DD/YYYY")
  }

  getImageUrl(): string {
    return ImageGetter.getAbsolutePath(this.post.image.path)
  }

}
</script>