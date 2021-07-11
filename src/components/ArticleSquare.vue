<template>
  <div class="grid grid-cols-2 gap-9">
    <div class="pt-20" v-for="(item, key) in items" :key="key">
      <span class="text-black-lighter font-medium">{{ item.subtitle }} </span>
      <h2 class="text-black-light font-normal text-4xl mt-4 mb-6">
        {{ item.title }}
      </h2>
      <picture class="block">
        <img :src="item.src" :alt="item.alt" />
      </picture>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleSquare",
  components: {},
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
