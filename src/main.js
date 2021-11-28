import {
    createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
// import animated from 'animate.css';
import store from './store';
import smoothscroll from 'smoothscroll-polyfill';
import AOS from "aos";
import 'aos/dist/aos.css'
smoothscroll.polyfill();


createApp(App).use(store).use(router).use(AOS.init()).mount("#app");
// .use(animated)

const requireAll = (requireContext) =>
    requireContext.keys().map(requireContext);
const req = require.context("./assets/icon", true, /\.svg$/);
requireAll(req);