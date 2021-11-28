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
  name: "Home",
  components: {
    Intro,
    Tab,
    Footer,
    ScrollTop,
    Article,
    Swiper,
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
              id: "1",
              sourses: [
                {
                  title: "Emote",
                  subtitle: "UI/UX Branding",
                  description:
                    "Emote is an app made to be a directory for your emotions, making self-reflection and analysis conveniently in your hands. ",
                  src: require("../assets/image/homepage/Emote-Thumbnail.jpg"),
                  alt: "Emote",
                  href: "/product/Emote",
                },
                {
                  title: "SMART RM",
                  subtitle: "UI/UX Branding",
                  description:
                    "Emote is an app made to be a directory for your emotions, making self-reflection and analysis conveniently in your hands. ",
                  src: require("../assets/image/homepage/SmartRM-Thumbnail.jpg"),
                  alt: "SMART RM",
                  href: "/product/SmartRM",
                },
                {
                  title: "STARLUX APP",
                  subtitle: "Aviation, Business Marketing",
                  description:
                    "Emote is an app made to be a directory for your emotions, making self-reflection and analysis conveniently in your hands. ",
                  src: require("../assets/image/homepage/Starlux-Thumbnail.jpg"),
                  alt: "Starlux",
                  href: "/product/STARLUXAPP",
                },
                {
                  title: "Bankee APP",
                  subtitle: "FinTech, Personal Banking",
                  description:
                    "Emote is an app made to be a directory for your emotions, making self-reflection and analysis conveniently in your hands. ",
                  src: require("../assets/image/homepage/Bankee-Thumbnail.jpg"),
                  alt: "Bankee",
                },
              ],
              imgs: [
                {
                  src: require("../assets/image/carousel/Dumpling-Thumbnail.jpg"),
                  alt: "Dumpling Maker",
                  href: "/product/DumplingMaker",
                },
                {
                  src: require("../assets/image/carousel/Light-Thumbnail.jpg"),
                  alt: "3689 Light",
                  href: "/product/3689Light",
                },
                {
                  src: require("../assets/image/carousel/Fortune-Thumbnail.jpg"),
                  alt: "Love Fortune Teller",
                  href: "/product/LoveFortuneTeller",
                },
                {
                  src: require("../assets/image/carousel/Bartander-Thumbnail.jpg"),
                  alt: "Bar Tander",
                  href: "/product/Connect4U",
                },
                {
                  src: require("../assets/image/carousel/Bartander-Thumbnail.jpg"),
                  alt: "Bar Tander",
                  href: "/product/Connect4U",
                },
                {
                  src: require("../assets/image/carousel/Bartander-Thumbnail.jpg"),
                  alt: "Bar Tander",
                  href: "/product/Connect4U",
                },
                {
                  src: require("../assets/image/carousel/Bartander-Thumbnail.jpg"),
                  alt: "Bar Tander",
                  href: "/product/Connect4U",
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
        { id: ["1", "2", "3", "4"] },
      ],
    };
  },
};
</script>
