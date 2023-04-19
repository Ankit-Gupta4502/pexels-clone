import Home from "../pages/Home.vue"
import Photos from "../pages/Photos.vue"
import { createRouter, createWebHistory } from "vue-router"
const routes = [
    {
        path: "/",
        component: Home,
        name: "home"
    },
    {
        path: "/photos/:slug",
        component: Photos,
        name: "photos"
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router