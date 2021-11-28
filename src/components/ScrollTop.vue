<template>
  <div class="fixed bottom-0 right-0" v-if="scrollpx > 200">
    <button
      class="top text-black-light mr-8 mb-8 hover:text-black-default"
      @click="scroll"
    >
      <SvgIcon iconName="arrow-top" class="w-9 h-10" />
    </button>
  </div>
</template>
<script>
import SvgIcon from "./SvgIcon.vue";
export default {
  name: "ScrollTop",
  data() {
    return {
      scrollpx: 0,
    };
  },
  components: {
    SvgIcon,
  },
  methods: {
    scroll() {
      window.scroll({ top: 0, behavior: "smooth" });
    },
    handleScroll() {
      this.scrollpx = window.scrollY;
    },
  },
  mounted() {
    // Load it only at client side, this is a bad example...
    require("smoothscroll-polyfill").polyfill();
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>
<style>
html {
  /* CSS custom property for the polyfill */
  --scroll-behavior: smooth;

  /* Normal CSS property for browsers with native support */
  scroll-behavior: smooth;
}
</style>
