<template>
  <div>
    <div class="min-h-screen m-0">
      <page-nav />
      <div class="w-full">
        <div class="container max-w-4xl mx-auto md:flex items-start py-8 px-12 md:px-0">
          <nuxt />
        </div>
      </div>
      <page-footer />
    </div>
  </div>
</template>
<script>
import PageNav from "~/components/PageNav.vue";
import PageFooter from "~/components/PageFooter.vue";

export default {
  components: {
    PageNav,
    PageFooter
  }
};
</script>