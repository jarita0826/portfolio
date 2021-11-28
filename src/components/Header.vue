<template>
  <header
    class="
      relative
      flex
      justify-between
      items-center
      lg:px-36
      pt-10
      px-7
      pb-6
      lg:pb-3
    "
  >
    <div>
      <router-link to="/"
        ><SvgIcon iconName="logo" class="w-8 h-8"
      /></router-link>
    </div>
    <div>
      <button class="md:hidden" @click="slidemenu = !slidemenu">
        <SvgIcon iconName="menu" class="w-9 h-9" />
      </button>

      <ul
        class="
          hidden
          md:flex
          space-x-9
          text-black-lighter
          font-semibold
          text-sm
        "
      >
        <router-link to="/">
          <li class="hover:text-black-default">WORK</li></router-link
        >
        <router-link to="/about">
          <li class="hover:text-black-default">ABOUT</li></router-link
        >
        <a href="mailto:chiahua0307@gmail.com" class="hover:text-black-default">
          <li>CONTACT</li></a
        >
      </ul>
    </div>
  </header>
  <transition name="slide">
    <div
      class="backdrop-blur absolute left-0 right-0 top-0 h-screen"
      v-show="slidemenu"
    ></div>
  </transition>

  <transition name="slide">
    <div
      class="absolute bg-black-default w-5/6 right-0 top-0 h-screen"
      v-show="slidemenu"
    >
      <div class="w-full flex justify-end">
        <button class="mt-4 mr-4" @click="slidemenu = !slidemenu">
          <SvgIcon iconName="cross" class="w-9 h-9" />
        </button>
      </div>
      <div class="mt-40">
        <ul
          class="
            space-y-6
            flex flex-col
            items-center
            text-white
            font-light
            text-3xl
          "
        >
          <div>
            <router-link
              to="/introduction"
              class="hover:text-black-lighter"
              @click="close()"
            >
              <li>WORK</li>
            </router-link>
          </div>
          <div class="mt-6">
            <router-link
              to="/about"
              class="hover:text-black-lighter"
              @click="close()"
            >
              <li>ABOUT</li>
            </router-link>
          </div>
          <div>
            <a
              href="mailto:chiahua0307@gmail.com"
              class="hover:text-black-lighter"
            >
              <li>CONTACT</li>
            </a>
          </div>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import SvgIcon from "./SvgIcon.vue";

export default {
  name: "Header",
  components: {
    SvgIcon,
  },
  props: {},
  data() {
    return {
      slidemenu: false,
    };
  },
  methods: {
    close: function () {
      this.slidemenu = !this.slidemenu;
    },
  },
};
</script>

<style>
.backdrop-blur {
  backdrop-filter: blur(2px);
}

.slide-enter-active {
  animation: slide-in-right 0.5s;
}
.slide-leave-active {
  animation: slide-in-right 0.5s reverse;
}
@keyframes slide-in-right {
  0% {
    transform: translate(100%, 0);
  }
  100% {
    transform: translate(0%, 0);
  }
}
</style>
