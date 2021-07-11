<template>
  <div class="w-full lg:w-2/3 py-16 md:px-10">
    <div class="pl-7 md:pl-10 pb-4 border-l border-black-light">
      <h2 class="font-medium text-lg">
        {{ title }}
      </h2>
      <p class="text-lg font-light mt-7">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Conclusion",
  components: {},
  props: {
    title: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },
  },
};
</script>
