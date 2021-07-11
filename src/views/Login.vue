<template>
  <div class="lg:px-36 px-5 pt-12 pb-10">
    <div class="space-y-7">
      <Intro :title="'Login'" />
      <p>
        Please enter password to access to my lastest work
      </p>
      <input
        class="placeholder-black-lighter focus:outline-gray w-2/3"
        placeholder=" Enter Password"
      />
      <UiButton class="w-auto" :text="'Submit'" />
    </div>
    <div class="mt-9">
      <router-link to="/" class="text-blue-default">
        Need a password?
      </router-link>
    </div>
  </div>
</template>

<script>
import UiButton from "../components/UiButton.vue";
import Intro from "../components/Intro.vue";

export default {
  name: "Login",
  components: {
    UiButton,
    Intro,
  },
};
</script>
