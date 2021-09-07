import {
    createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
// import animated from 'animate.css';
import store from './store';


createApp(App).use(store).use(router).mount("#app");
// .use(animated)

const requireAll = (requireContext) =>
    requireContext.keys().map(requireContext);
const req = require.context("./assets/icon", true, /\.svg$/);
requireAll(req);