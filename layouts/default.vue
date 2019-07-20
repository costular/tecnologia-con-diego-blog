<template>
  <div>
    <page-nav />
    <div class="flex flex-row justify-center w-screen">
      <div class="overflow-hidden content flex flex-col">
        <nuxt />
      </div>
    </div>
    <page-footer />
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