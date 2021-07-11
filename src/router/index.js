import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Login.vue"),
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import ("../views/About.vue"),
    },
    {
        path: "/introduction",
        name: "Introduction",
        component: () =>
            import ("../views/Introduction.vue"),
    },
    {
        path: "/product/:id",
        name: "Product",
        component: () =>
            import ("../views/Product.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;