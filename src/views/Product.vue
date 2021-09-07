<template>
  <div class="lg:px-36 pt-12 md:pb-10 px-5">
    <Intro
      :title="getProductById.intro.title"
      :slogan="getProductById.intro.slogan"
      :description="getProductById.intro.description"
      :creative="getProductById.intro.creative"
      :creationTime="getProductById.intro.creationTime"
      :time="getProductById.intro.time"
      :style="getProductById.intro.style"
      class="md:mx-3"
    />
    <div
      v-for="(image, key) in getProductById.images"
      :key="key"
      class="md:mx-3"
    >
      <picture class="block">
        <img :src="image.src" :alt="image.alt" class="w-full" />
      </picture>
      <Conclusion
        v-if="image.conclusion"
        :title="image.conclusion.title"
        :description="image.conclusion.description"
      />
      <video autoplay muted loop v-if="image.video">
        <source :src="image.video" type="video/mp4" />
      </video>
    </div>

    <Footer>
      <div class="py-7 md:py-20">
        <h3 class="font-medium text-lg text-black-lighter mb-3">
          Next Project
        </h3>
        <router-link :to="getProductById.link.herf" @click="scrollToTop">
          <span class="text-black-light text-2xl font-light flex items-center">
            {{ getProductById.link.title }}
            <SvgIcon
              iconName="arrow-right"
              class="w-6 h-5 ml-1 text-black-default"
          /></span>
        </router-link>
      </div>
    </Footer>
    <ScrollTop />
  </div>
</template>

<script>
import Intro from "../components/Intro.vue";
import Conclusion from "../components/Conclusion.vue";
import Footer from "../components/Footer.vue";
import SvgIcon from "../components/SvgIcon.vue";
import ScrollTop from "../components/ScrollTop.vue";

export default {
  name: "Product",

  components: {
    Intro,
    Conclusion,
    Footer,
    SvgIcon,
    ScrollTop,
  },

  data() {
    return {};
  },
  props: {},
  computed: {
    getProductById() {
      return this.$store.state.productLists.find(
        (article) => article.article == this.$route.params.id
      );
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
