<template>
  <div class="py-16 md:block hidden">
    <h3 class="font-light text-5xl">Other Projects</h3>

    <swiper
      :breakpoints="swiperOptions.breakpoints"
      :slidesPerView="slidesPerView"
      :spaceBetween="spaceBetween"
      :slidesPerGroup="slidesPerGroup"
      :grabCursor="true"
      :loop="true"
      :loopFillGroupWithBlank="true"
      :navigation="true"
      class="mySwiper z-0 mt-8"
    >
      <swiper-slide v-for="(item, key) in items" :key="key">
        <router-link :to="item.href" @click="scrollToTop">
          <img :src="item.src" :alt="item.alt" />
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";

import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { useWindowSize } from "vue-window-size";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 4,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
          },
        },
      },
    };
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    slidesPerView: {
      type: Number,
      default: 2,
    },
    spaceBetween: {
      type: Number,
      default: 20,
    },
    slidesPerGroup: {
      type: Number,
      default: 2,
    },
  },
  setup() {
    const { width, height } = useWindowSize();
    return {
      windowWidth: width,
      windowHeight: height,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
<style>
.swiper-button-next,
.swiper-button-prev {
  width: 40px;
  height: 40px;
  background: rgba(127, 127, 127, 0.8);
}

.swiper-container {
  width: 100%;
  height: 100%;
  --swiper-navigation-color: #e5e5e5;
  --swiper-navigation-size: 20px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
