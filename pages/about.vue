<template>
  <section class="my-8">
    <div class="text-center">
      <h1 class="mb-6">About Page</h1>
      <p>Hi this is a static blog made with Nuxt.js, Cockpit and Tailwindcss!</p>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class extends Vue {

 head() {
    return {
      title: "Info",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "This is the about page!"
        }
      ]
    };
  }
  
}
</script>