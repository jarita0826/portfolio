<template>
  <div>
    <picture class="block">
      <img :src="src" :alt="alt" />
    </picture>
  </div>
</template>

<script>
export default {
  name: "ArticlePicture",
  props: {
    src: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "",
    },
  },
};
</script>
