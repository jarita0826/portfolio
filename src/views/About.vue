<template>
  <div class="px-5 lg:px-36 pt-16 lg:pb-10">
    <div class="lg:flex">
      <div class="w-full lg:w-2/3">
        <h1
          class="
            text-black-light text-3xl
            md:text-5xl
            leading-tight
            lg:pr-20
            font-light
          "
        >
          ERIC CHIA-HUA CHEN
        </h1>
        <div class="w-full lg:hidden mt-7">
          <img class="w-full" src="../assets/image/Eric-mb.jpg" alt="eric" />
        </div>

        <p class="my-8 lg:my-16 text-black-default lg:pr-36">
          Eric is one of the aliens lived in NYC and observing humans. He
          graduated from Parsons School of Design in Product Design major and
          Communciation Design minor. The opportunity to experience consisting
          of both 2D graphics and 3D prototyping, from hand-size products to
          physical spaces allowed him to work in a variety of fields, including
          furniture, lighting, home goods, consumer products, fashion and
          architecture. His goal is to make the earth a more romantic place
          through design and art.
        </p>
        <div class="mt-2">
          <router-link to="/" class="text-black-light text-2xl">
            CV on request
          </router-link>
        </div>
        <div class="my-9">
          <h2 class="text-black-lighter font-medium lg:text-xl text-lg">
            Contact
          </h2>
          <div class="space-y-4 lg:space-x-12 lg:space-y-0 lg:flex mt-3">
            <div v-for="(link, key) in links" :key="key">
              <a
                :href="link.href"
                class="flex items-center"
                @mouseover="mouseOver(key)"
                @mouseleave="mouseleave(key)"
              >
                <span class="text-3xl lg:text-4xl font-light text-black-light">
                  {{ link.label }}</span
                >
                <SvgIcon
                  v-show="links[key].active"
                  iconName="arrow-right"
                  class="w-6 h-5 ml-1 text-black-default"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden lg:w-1/3 lg:block">
        <img class="w-full" src="../assets/image/Eric.jpg" alt="eric" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import SvgIcon from "../components/SvgIcon.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "About",
  components: {
    SvgIcon,
    Footer,
  },
  data() {
    return {
      links: [
        {
          id: "0",
          active: false,
          label: "Email",
          href: "mailto:chiahua0307@gmail.com",
        },
        {
          id: "1",
          active: false,
          label: "Instagram",
          href: "https://www.instagram.com/iericchen/",
        },
        {
          id: "2",
          active: false,
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/iericchen/",
        },
      ],
    };
  },
  methods: {
    mouseOver: function (key) {
      if (key == this.links[key].id) {
        this.links[key].active = true;
      }
    },
    mouseleave: function (key) {
      if (key == this.links[key].id) {
        this.links[key].active = false;
      }
    },
  },
};
</script>
