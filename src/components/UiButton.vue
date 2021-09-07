<template>
  <a
    href="mailto:chiahua0307@gmail.com"
    class="
      bg-black-default
      text-base text-white
      py-4
      pl-4
      pr-5
      flex
      items-center
      hover:opacity-80
    "
  >
    {{ text }}
    <SvgIcon iconName="arrow-right" class="w-6 h-8 ml-4" />
  </a>
</template>

<script>
import SvgIcon from "./SvgIcon.vue";
export default {
  name: "UiButton",
  components: {
    SvgIcon,
  },
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>
