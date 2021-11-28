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
      tab
    "
  >
    <router-link to="/" class="px-1 py-0.5 ">
      UI/UX
    </router-link>

    <router-link to="/industrial" class="px-1 py-0.5">
      Industrial Design
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Tab",

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
    trigger: function(selectedTab) {
      this.pagename = selectedTab;
    },
  },
};
</script>

<style>
.tab .router-link-exact-active,
.tab a:hover {
  border-bottom-width: 2px;
  border-color: #333333;
}
</style>
