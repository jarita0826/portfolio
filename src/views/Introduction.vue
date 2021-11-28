<template>
  <div class="px-5 lg:px-36 pt-16 lg:pb-10">
    <Intro :title="articles[0].title" />
    <Article :items="articles[1].sourses" />
    <ArticleSquare :items="articles[2].sourses" />
    <Swiper :items="articles[3].images" class="mt-10" />
    <Footer :content="articles[4].content" />
    <ScrollTop />
  </div>
</template>

<script>
import Intro from "../components/Intro.vue";
import Article from "../components/Article.vue";
import ArticleSquare from "../components/ArticleSquare.vue";
import Swiper from "../components/Swiper.vue";
import Footer from "../components/Footer.vue";
import ScrollTop from "../components/ScrollTop.vue";

export default {
  name: "Introduction",
  components: {
    Intro,
    Article,
    ArticleSquare,
    Swiper,
    Footer,
    ScrollTop,
  },
  data() {
    return {
      articles: [
        {
          title:
            "Interdisciplinary designer with experinces on 2D graphic and 3D product design",
        },
        {
          sourses: [
            {
              title: "Emote",
              subtitle: "UI/UX Branding",
              description:
                "Emote is an app made to be a directory for your emotions, making self-reflection and analysis conveniently in your hands. ",
              src: require("../assets/image/homepage/Emote-Thumbnail.jpg"),
              alt: "Emote",
              herf: "/product/Emote",
            },
            {
              title: "SMART RM",
              subtitle: "UI/UX Branding",
              description:
                "Emote is an app made to be a directory for your emotions, making self-reflection and analysis conveniently in your hands. ",
              src: require("../assets/image/homepage/SmartRM-Thumbnail.jpg"),
              alt: "SMART RM",
              herf: "/product/SmartRM",
            },
          ],
        },
        {
          sourses: [
            {
              title: "Emote",
              subtitle: "UI/UX Branding",
              src: require("../assets/image/inside/statistic.jpg"),
              alt: "Emote",
            },
            {
              title: "Emote",
              subtitle: "UI/UX Branding",
              src: require("../assets/image/inside/statistic.jpg"),
              alt: "Emote",
            },
          ],
        },
        {
          images: [
            {
              src: require("../assets/image/carousel/Bartander-Thumbnail.jpg"),
              alt: "Emote",
              href: "/product/Emote",
            },
            {
              src: require("../assets/image/carousel/Bartander-Thumbnail.jpg"),
              alt: "Emote",
              href: "/product/AdjusTable",
            },
            {
              src: require("../assets/image/carousel/Bartander-Thumbnail.jpg"),
              alt: "Emote",
              href: "/product/Connect4U",
            },
            {
              src: require("../assets/image/carousel/Bartander-Thumbnail.jpg"),
              alt: "Emote",
              href: "/product/LoveFortuneTeller",
            },
            {
              src: require("../assets/image/carousel/Bartander-Thumbnail.jpg"),
              alt: "Emote",
              href: "/product/Connect4U",
            },
            {
              src: require("../assets/image/carousel/Bartander-Thumbnail.jpg"),
              alt: "Emote",
              href: "/product/DumplingMaker",
            },
          ],
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
