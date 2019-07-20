<template>
  <footer class="block w-full text-center mt-10 p-8 bg-white px-6 border-t">
    <div class="py-4">
      <social-icons />
    </div>
    
    <div class="text-grey-dark text-sm mt-8 pb-4">
      <p class="font-mono">Blog diseñado y desarrollado por <a target="_blank" href="https://costular.com"><b>costular</b></a></p>
    </div>
  </footer>
</template>

<script>
import { Component, Vue, Prop } from "nuxt-property-decorator"
import SocialIcons from "~/components/SocialIcons.vue"

@Component({
  components: { SocialIcons }
})
export default class PageFooter extends Vue {

}

</script>