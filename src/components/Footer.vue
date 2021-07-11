<template>
  <footer class="pb-7">
    <div v-if="content" class="pt-28 pb-14">
      <p class="w-full md:w-8/12 md:text-lg mb-12 text-black-default text-base">
        {{ content }}
      </p>
      <UiButton class="w-auto" :text="text" />
    </div>
    <slot />
    <div
      class="items-end md:items-start flex text-black-lighter justify-between text-sm md:mt-14 font-medium"
    >
      <p>
        2021 Eric Chen - New York, NY. Images and content may not be used
        without written permission. All rights reserved.®
      </p>
      <div class="text-black-lighter flex space-x-4">
        <SvgIcon iconName="message" class="w-6 h-6" />
        <SvgIcon iconName="linkedin" class="w-6 h-6" />
        <SvgIcon iconName="ig" class="w-6 h-6" />
      </div>
    </div>
  </footer>
</template>

<script>
import UiButton from "./UiButton.vue";
import SvgIcon from "./SvgIcon.vue";

export default {
  name: "Footer",
  components: {
    UiButton,
    SvgIcon,
  },
  props: {
    content: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      text: "Let’s work together",
    };
  },
};
</script>
