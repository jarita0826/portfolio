<template>
  <div class="lg:px-36 lg:pt-12 lg:pb-10 pt-10 px-6">
    <Intro :subTitle="articles[0].subTitle" :title="articles[0].title" />
    <Tab :contents="articles[1].contents" />
    <Footer :content="articles[2].content" />
  </div>
</template>

<script>
import Intro from "../components/Intro.vue";
import Tab from "../components/Tab.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Intro,
    Tab,
    Footer,
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
              title: "UI/UX",
              id: "1",
              sourses: [
                {
                  title: "Emote",
                  subtitle: "UI/UX Branding",
                  description:
                    "Emote is an app made to be a directory for your emotions, making self-reflection and analysis conveniently in your hands. ",
                  src: require("../assets/image/homepage/emote.jpg"),
                  alt: "Emote",
                  herf: "/product/Emote",
                },
                {
                  title: "SMART RM",
                  subtitle: "UI/UX Branding",
                  description:
                    "Emote is an app made to be a directory for your emotions, making self-reflection and analysis conveniently in your hands. ",
                  src: require("../assets/image/homepage/smartRM.jpg"),
                  alt: "SMART RM",
                  herf: "/product/SmartRM",
                },
                {
                  title: "STARLUX APP",
                  subtitle: "UI/UX Branding",
                  description:
                    "Emote is an app made to be a directory for your emotions, making self-reflection and analysis conveniently in your hands. ",
                  src: require("../assets/image/homepage/emote.jpg"),
                  alt: "Bartender",
                  herf: "/product/STARLUXAPP",
                },
                {
                  title: "Bartender",
                  subtitle: "UI/UX Branding",
                  description:
                    "Emote is an app made to be a directory for your emotions, making self-reflection and analysis conveniently in your hands. ",
                  src: require("../assets/image/homepage/smartRM.jpg"),
                  alt: "Bartender",
                },
              ],
              imgs: [
                {
                  src: require("../assets/image/carousel/AdjusTable-4.jpg"),
                  alt: "Emote",
                  href: "/product/DumplingMaker",
                },
                {
                  src: require("../assets/image/carousel/AdjusTable-2.jpg"),
                  alt: "Emote",
                  href: "/product/3689Light",
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
              title: "Industrial Design",
              id: "2",
              sourses: [
                {
                  title: "Dizzedy",
                  subtitle: "Cultural Study, 3D Modeling",
                  description:
                    "DIZZEDY is a massage tool that is designed to be used in the aircraft environment specifically for motion sickness to increase passengers’ own willingness to fly. ",
                  src: require("../assets/image/homepage/Dizzedy.jpg"),
                  alt: "Dizzedy",
                  herf: "/product/Dizzedy",
                },
                {
                  title: "Mind of Dots",
                  subtitle: "Game Design, 3D Rendering",
                  description:
                    "Mind of Dots is a portable tabletop drinking game that helps bring people together in this technological day and age. ",
                  src: require("../assets/image/homepage/smartRM.jpg"),
                  alt: "Game Design, 3D Rendering",
                  herf: "/product/MindofDots",
                },
                {
                  title: "EmergenSee",
                  subtitle: "Lighting Studies, Laser Cutting, Wood Working",
                  description:
                    "EmergenSee is a lamp that made to be readily available during an earthquake for individuals who don’t have emergency kits easily accessible.",
                  src: require("../assets/image/homepage/EmergenSee.jpg"),
                  alt: "EmergenSee",
                  herf: "/product/EmergenSee",
                },
                {
                  title: "T 42",
                  subtitle: "3D Rendering, Casting, Ceramic Working",
                  description:
                    "TEA FOR TWO is a teapot set that promotes a better social wellbeing through communal engagement that happens in our everyday life.",
                  src: require("../assets/image/homepage/T42.jpg"),
                  alt: "T 42",
                  herf: "/product/T42",
                },
              ],
              imgs: [
                {
                  src: require("../assets/image/carousel/AdjusTable-3.jpg"),
                  href: "/product/Emote",
                  alt: "Emote",
                },
                {
                  src: require("../assets/image/carousel/AdjusTable.jpg"),
                  href: "/product/AdjusTable",
                  alt: "Emote",
                },
                {
                  src: require("../assets/image/carousel/AdjusTable-5.jpg"),
                  href: "/product/Connect4U",
                  alt: "Emote",
                },
                {
                  src: require("../assets/image/carousel/AdjusTable-6.jpg"),
                  href: "/product/LoveFortuneTeller",
                  alt: "Emote",
                },
                {
                  src: require("../assets/image/carousel/AdjusTable-5.jpg"),
                  href: "/product/Connect4U",
                  alt: "Emote",
                },
                {
                  src: require("../assets/image/carousel/AdjusTable-4.jpg"),
                  href: "/product/DumplingMaker",
                  alt: "Emote",
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
