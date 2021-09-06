<template>
  <footer class="pb-7">
    <div v-if="content" class="pt-28 pb-14 border-t border-lightest">
      <p class="w-full md:w-8/12 md:text-lg mb-12 text-black-default text-base">
        {{ content }}
      </p>
      <UiButton class="w-60" :text="text" />
    </div>
    <slot />
    <div
      class="
        items-end
        md:items-start
        flex
        text-black-lighter
        justify-between
        text-sm
        md:mt-14
        font-medium
      "
    >
      <p>
        2021 Eric Chen - New York, NY. Images and content may not be used
        without written permission. All rights reserved.®
      </p>
      <div class="text-black-lighter flex space-x-4">
        <a href="mailto:chiahua0307@gmail.com">
          <SvgIcon iconName="message" class="w-6 h-6 hover:text-black-default"
        /></a>
        <span
          @click="link('https://www.linkedin.com/in/iericchen/')"
          class="cursor-pointer"
        >
          <SvgIcon
            iconName="linkedin"
            class="w-6 h-6 hover:text-black-default"
          />
        </span>
        <span
          @click="link('https://www.instagram.com/iericchen/')"
          class="cursor-pointer"
        >
          <SvgIcon iconName="ig" class="w-6 h-6 hover:text-black-default"
        /></span>
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
  methods: {
    link: function (link) {
      window.location.href = link;
    },
  },
};
</script>
