<template>
  <!-- <a :href="'/category/'+tag">-->
  <span
    class="inline-block border-gray-600 border-2 border-solid rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
  >#{{tag}}</span>
  <!--</a>-->
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component
export default class Tag extends Vue {
  @Prop() tag!: string;
}
</script>