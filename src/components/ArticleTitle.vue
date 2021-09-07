<template>
  <div class="md:w-4/5 w-full">
    <div class="flex items-center mb-2.5 space-x-1">
      <h3 class="md:text-4xl text-3xl font-normal text-black-light">
        {{ title }}
      </h3>
      <div
        class="mt-1"
        data-aos="zoom-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="500"
      >
        <SvgIcon iconName="arrow-right " class="w-6 h-6" />
      </div>
    </div>
    <span class="text-base font-medium text-black-lighter">{{ subTitle }}</span>
    <p class="text-lg mt-3.5 font-light text-black-default">
      {{ description }}
    </p>
  </div>
</template>

<script>
import SvgIcon from "./SvgIcon.vue";

export default {
  name: "ArticleTitle",
  components: {
    SvgIcon,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
