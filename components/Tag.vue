<template>
  <!-- <a :href="'/category/'+tag">-->
  <span
    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
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