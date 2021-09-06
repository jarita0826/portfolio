<template>
  <div
    class="
      pt-14
      pb-10
      md:text-2xl
      text-lg text-black-light
      md:space-x-16
      space-x-7
      md:mx-3
    "
  >
    <button
      class="px-1 py-0.5 focus:outline-none"
      v-for="content in contents"
      :key="content.id"
      @click="trigger(content.id)"
      :class="{
        'border-b-2 border-black-light': pagename == content.id,
      }"
    >
      {{ content.title }}
    </button>
  </div>
  <div
    v-for="content in contents"
    :key="content.id"
    v-show="pagename == content.id"
    class="md:mx-3"
  >
    <Article :items="content.sourses" />
    <Swiper :items="content.imgs" />
  </div>
</template>

<script>
import Article from "../components/Article.vue";
import Swiper from "../components/Swiper.vue";

export default {
  name: "Tab",
  components: {
    Article,
    Swiper,
  },
  data() {
    return {
      pagename: "1",
    };
  },
  props: {
    contents: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    trigger: function (selectedTab) {
      this.pagename = selectedTab;
    },
  },
};
</script>
