<template>
  <div class="lg:px-36 px-5 pt-12 pb-10">
    <div class="space-y-7">
      <Intro :title="'Login'" />
      <p>Please enter password to access to my lastest work</p>
      <input
        class="placeholder-black-lighter focus:outline-white w-3/3"
        placeholder=" Enter Password"
        v-model="message"
      />
      <p v-if="sign" class="text-red-600 font-light">Wrong Password</p>
      <a
        class="
          bg-black-default
          text-base text-white
          py-4
          pl-4
          pr-5
          flex
          items-center
          hover:opacity-80
          w-32
          cursor-pointer
        "
        @click="verify(message)"
      >
        Submit
        <SvgIcon iconName="arrow-right" class="w-6 h-8 ml-4" />
      </a>
    </div>
    <div class="mt-9">
      <a href="mailto:chiahua0307@gmail.com" class="text-blue-default">
        Need a password?
      </a>
    </div>
  </div>
</template>

<script>
import Intro from "../components/Intro.vue";
import SvgIcon from "../components/SvgIcon.vue";

export default {
  name: "Login",
  components: {
    Intro,
    SvgIcon,
  },
  data() {
    return {
      message: "",
      show: false,
      sign: false,
    };
  },
  props: {
    password: {
      type: String,
      default: "",
    },
  },
  methods: {
    verify(message) {
      if (message === this.password) {
        this.show = true;
        this.sign = false;
        this.$emit("value-update", this.show);
      } else {
        this.show = false;
        this.sign = true;
        this.$emit("value-update", this.show);
      }
    },
  },
};
</script>
