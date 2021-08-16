<template>
  <div
    class="lg:px-10 md:flex justify-between items-center py-9"
    :class="{
      'flex-row-reverse': key % 2,
    }"
    v-for="(item, key) in items"
    :key="key"
  >
    <div class="md:w-1/2 w-full">
      <ArticlePicture :src="item.src" :alt="item.alt" />
    </div>
    <div
      class="md:w-1/2 w-full flex mt-5 md:mt-0"
      :class="[key % 2 ? 'justify-start md:pl-3' : 'justify-end']"
    >
      <ArticleTitle
        :title="item.title"
        :subTitle="item.subtitle"
        :description="item.description"
        :herf="item.herf"
      />
    </div>
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
};
</script>
