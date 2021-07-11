<template>
  <button
    class="bg-black-default text-base text-white py-4 pl-4 pr-5 flex items-center"
  >
    {{ text }}
    <SvgIcon iconName="arrow-right" class="w-6 h-8 ml-4" />
  </button>
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
