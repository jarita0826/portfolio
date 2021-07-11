<template>
  <div>
    <div class="minWidth mx-auto">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style>
html {
  font-family: "Inter", sans-serif;
}
.minWidth {
  max-width: 1440px;
}
</style>
