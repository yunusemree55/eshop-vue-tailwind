import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
    {
        path:"/",
        name:"HomePage",
        component:() => import("../views/HomeView.vue")
    },
    {
        path:"/login",
        name:"LoginPage",
        component:() => import("../views/LoginView.vue")
    },
    {
        path:"/register",
        name:"RegisterPage",
        component:() => import("../views/RegisterView.vue")
    }
]


const router = createRouter({
    routes,
    history:createWebHashHistory()
})

export default router;

