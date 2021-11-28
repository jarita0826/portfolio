import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
        meta: {title: 'Home'}
    },
    {
        path: "/industrial",
        name: "Industrial",
        component: () =>
            import ("../views/Industrial.vue"),
        meta: {title: 'Home'}
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import ("../views/Login.vue"),
        meta: {title: 'Login'}

    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import ("../views/About.vue"),
        meta: {title: 'About'}
    },
    {
        path: "/introduction",
        name: "Introduction",
        component: () =>
            import ("../views/Introduction.vue"),
        meta: {title: 'Introduction'}
    },
    {
        path: "/product/:id",
        name: "Product",
        component: () =>
            import ("../views/Product.vue"),
        meta: {title: 'Product'}
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
router.beforeEach((to, from, next) => {if (to.meta.title) {
    window.document.title = to.meta.title;
}
    next()
  })

export default router;