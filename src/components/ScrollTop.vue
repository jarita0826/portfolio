<template>
  <div class="fixed bottom-0 right-0" v-if="scrollpx > 200">
    <button
      class="text-black-light mr-8 mb-8 hover:text-black-default"
      @click="scrollToTop"
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
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handleScroll() {
      this.scrollpx = window.scrollY;
    },
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>
<style>
</style>