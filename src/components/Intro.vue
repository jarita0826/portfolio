<template>
  <div>
    <span
      v-if="subTitle"
      class="text-black-lighter lg:text-3xl text-xl font-light"
      >{{ subTitle }}</span
    >

    <h1
      class="text-black-light md:text-5xl text-3xl w-full leading-tight font-light text-3xl md:w-3/4"
    >
      {{ title }}
    </h1>
    <div class="mt-11 mb-8 md:mb-24 md:flex" v-if="slogan">
      <div class="w-full md:w-7/12">
        <p class="text-black-lighter font-medium mt-4">
          {{ slogan }}
        </p>
        <p
          class="mt-6 md:mt-7 text-black-light font-light text-lg"
          v-if="description"
        >
          {{ description }}
        </p>
      </div>
      <div v-if="creative" class="w-full md:w-5/12 md:pl-14 mt-8">
        <div>
          <span class="text-black-lighter font-medium">{{ creationTime }}</span>
          <p class="text-black-light font-light text-lg">{{ creative }}</p>
        </div>
        <div class="mt-4">
          <span class="text-black-lighter font-medium">{{ time }}</span>
          <p class="text-black-light font-light text-lg">{{ style }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    slogan: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    creative: {
      type: String,
      default: "",
    },
    creationTime: {
      type: String,
      default: "",
    },
    time: {
      type: String,
      default: "",
    },
    style: {
      type: String,
      default: "",
    },
  },
};
</script>
