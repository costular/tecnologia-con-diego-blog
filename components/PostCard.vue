<template>
<div class="max-w-sm w-full lg:max-w-full lg:flex my-10">
  <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover text-center overflow-hidden" v-bind:style="{ backgroundImage: 'url('+getImageUrl()+')' }" title="Woman holding a mug">
  </div>
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center">
        <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="icon-shape">
								<path d="M1,3.99508929 C1,2.8932319 1.8926228,2 2.99508929,2 L17.0049107,2 C18.1067681,2 19,2.8926228 19,3.99508929 L19,18.0049107 C19,19.1067681 18.1073772,20 17.0049107,20 L2.99508929,20 C1.8932319,20 1,19.1073772 1,18.0049107 L1,3.99508929 Z M3,6 L17,6 L17,18 L3,18 L3,6 Z M5,0 L7,0 L7,2 L5,2 L5,0 Z M13,0 L15,0 L15,2 L13,2 L13,0 Z M5,9 L7,9 L7,11 L5,11 L5,9 Z M5,13 L7,13 L7,15 L5,15 L5,13 Z M9,9 L11,9 L11,11 L9,11 L9,9 Z M9,13 L11,13 L11,15 L9,15 L9,13 Z M13,9 L15,9 L15,11 L13,11 L13,9 Z M13,13 L15,13 L15,15 L13,15 L13,13 Z" id="Combined-Shape"></path>							</g>
						</g>
        </svg>
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