<template>
  <div v-for="(item, index) in items" :key="index">
    <button
      class="lg:px-10 md:flex justify-between items-center py-9 group"
      @click="changePage(item.href)"
      :class="{
        'flex-row-reverse': index % 2,
      }"
      data-aos="fade-down"
      data-aos-offset="60"
      data-aos-duration="700"
      data-aos-easing="ease-in-out"
      data-aos-once="ture"
      data-aos-anchor-placement="top-center"
    >
      <div
        class="md:w-1/2 w-full transform transition group-hover:scale-105 duration-700"
      >
        <ArticlePicture :src="item.src" :alt="item.alt" />
      </div>
      <div
        class="md:w-1/2 w-full flex mt-5 md:mt-0 text-left"
        :class="[index % 2 ? 'justify-start md:pl-3' : 'justify-end']"
      >
        <ArticleTitle
          :title="item.title"
          :subTitle="item.subtitle"
          :description="item.description"
          :class="'group'"
        />
      </div>
    </button>
  </div>
</template>

<script>
import ArticlePicture from "./ArticlePicture.vue";
import ArticleTitle from "./ArticleTitle.vue";

export default {
  name: "Article",
  components: {
    ArticleTitle,
    ArticlePicture,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changePage(a) {
      this.$router.push({ path: a });
      window.scrollTo(0, 0);
    },
  },
};
</script>
