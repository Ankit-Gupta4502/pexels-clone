import Home from "../pages/Home.vue"
import {createRouter,createWebHistory} from "vue-router"
const routes = [
    {
        path:"/",
        component:Home,
        name:""
    },

]

const router = createRouter({
    routes,
    history:createWebHistory()
})

export default router