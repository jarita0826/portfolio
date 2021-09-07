<template>
  <div v-for="(item, index) in items" :key="index">
    <button
      class="lg:px-10 md:flex justify-between items-center py-9"
      @click="changePage(item.herf)"
      :class="{
        'flex-row-reverse': index % 2,
      }"
    >
      <div class="md:w-1/2 w-full">
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
