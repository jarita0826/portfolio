<template>
  <div class="lg:px-36 lg:pt-12 lg:pb-10 pt-10 px-6">
    <Intro :subTitle="articles[0].subTitle" :title="articles[0].title" />
    <Tab />
    <div
      v-for="content in articles[1].contents"
      :key="content.id"
      class="md:mx-3"
    >
      <Article :items="content.sourses" />
      <Swiper :items="content.imgs" />
    </div>
    <Footer :content="articles[2].content" />
    <ScrollTop />
  </div>
</template>

<script>
import Intro from "../components/Intro.vue";
import Tab from "../components/Tab.vue";
import Footer from "../components/Footer.vue";
import ScrollTop from "../components/ScrollTop.vue";
import Article from "../components/Article.vue";
import Swiper from "../components/Swiper.vue";

export default {
  name: "Industrial",
  components: {
    Intro,
    Tab,
    Footer,
    Article,
    Swiper,
    ScrollTop,
  },
  data() {
    return {
      articles: [
        {
          subTitle: "ERIC CHIA-HUA CHEN",
          title:
            "Interdisciplinary designer with experinces on 2D graphic and 3D product design",
        },
        {
          contents: [
            {
              id: "2",
              sourses: [
                {
                  title: "Dizzedy",
                  subtitle: "Cultural Study, 3D Modeling",
                  description:
                    "DIZZEDY is a massage tool that is designed to be used in the aircraft environment specifically for motion sickness to increase passengers’ own willingness to fly. ",
                  src: require("../assets/image/homepage/Dizzedy-Thumbnail.jpg"),
                  alt: "Dizzedy",
                  herf: "/product/Dizzedy",
                },
                {
                  title: "Mind of Dots",
                  subtitle: "Game Design, 3D Rendering",
                  description:
                    "Mind of Dots is a portable tabletop drinking game that helps bring people together in this technological day and age. ",
                  src: require("../assets/image/homepage/MOD-Thumbnail.jpg"),
                  alt: "Game Design, 3D Rendering",
                  herf: "/product/MindofDots",
                },
                {
                  title: "EmergenSee",
                  subtitle: "Lighting Studies, Laser Cutting, Wood Working",
                  description:
                    "EmergenSee is a lamp that made to be readily available during an earthquake for individuals who don’t have emergency kits easily accessible.",
                  src: require("../assets/image/homepage/EmergenSee-Thumbnail.jpg"),
                  alt: "EmergenSee",
                  herf: "/product/EmergenSee",
                },
                {
                  title: "T 42",
                  subtitle: "3D Rendering, Casting, Ceramic Working",
                  description:
                    "TEA FOR TWO is a teapot set that promotes a better social wellbeing through communal engagement that happens in our everyday life.",
                  src: require("../assets/image/homepage/T42-Thumbnail.jpg"),
                  alt: "T 42",
                  herf: "/product/T42",
                },
              ],
              imgs: [
                {
                  src: require("../assets/image/carousel/Necklace-Thumbnail.jpg"),
                  href: "/product/Emote",
                  alt: "Necklace",
                },
                {
                  src: require("../assets/image/carousel/AdjusTable-Thumbnail.jpg"),
                  href: "/product/AdjusTable",
                  alt: "AdjusTable",
                },
                {
                  src: require("../assets/image/carousel/Connect4-Thumbnail.jpg"),
                  href: "/product/Connect4U",
                  alt: "Connect4U",
                },
                {
                  src: require("../assets/image/carousel/Henry-Thumbnail.jpg"),
                  href: "/product/LoveFortuneTeller",
                  alt: "Henry The Chicken",
                },
              ],
            },
          ],
          pagename: "1",
        },
        {
          content:
            "Additionally, I have helped design for companies like Shadow Architect, PARISA WANG, STARLUX AIRLINES, and FarEastern International Bank.",
        },
      ],
    };
  },
};
</script>
