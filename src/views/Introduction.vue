<template>
  <div class="px-5 lg:px-36 pt-16 lg:pb-10">
    <Intro :title="articles[0].title" />
    <Article :items="articles[1].sourses" />
    <ArticleSquare :items="articles[2].sourses" />
    <Swiper :items="articles[3].images" class="mt-10" />
    <Footer :content="articles[4].content" />
  </div>
</template>

<script>
import Intro from "../components/Intro.vue";
import Article from "../components/Article.vue";
import ArticleSquare from "../components/ArticleSquare.vue";
import Swiper from "../components/Swiper.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Introduction",
  components: {
    Intro,
    Article,
    ArticleSquare,
    Swiper,
    Footer,
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
              src: require("../assets/image/homepage/emote.jpg"),
              alt: "Emote",
            },
            {
              title: "SMART RM",
              subtitle: "UI/UX Branding",
              description:
                "Emote is an app made to be a directory for your emotions, making self-reflection and analysis conveniently in your hands. ",
              src: require("../assets/image/homepage/smartRM.jpg"),
              alt: "SMART RM",
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
              src: require("../assets/image/carousel/AdjusTable-3.jpg"),
              alt: "Emote",
              href: "/product/Emote",
            },
            {
              src: require("../assets/image/carousel/AdjusTable.jpg"),
              alt: "Emote",
              href: "/product/AdjusTable",
            },
            {
              src: require("../assets/image/carousel/AdjusTable-5.jpg"),
              alt: "Emote",
              href: "/product/Connect4U",
            },
            {
              src: require("../assets/image/carousel/AdjusTable-6.jpg"),
              alt: "Emote",
              href: "/product/LoveFortuneTeller",
            },
            {
              src: require("../assets/image/carousel/AdjusTable-5.jpg"),
              alt: "Emote",
              href: "/product/Connect4U",
            },
            {
              src: require("../assets/image/carousel/AdjusTable-4.jpg"),
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
