import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Details from '../views/Details.vue'
import NotFound from '../views/NotFound.vue'
// import HelloWorld from '../components/HelloWorld.vue'
// import Profile from '../views/Profile.vue'
// import Signup from '../views/Signup.vue'

const router =  createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:"/",
            component: Home,
            children: [
            ]
        },
        {
            path:"/home",
            name:"home",
            component:Home,
        },
        {
            path:"/login",
            name:"login",
            component: Login,
        },
        {
            path:"/details",
            name:"details",
            component:Details,
        },
        {
            path:"/NotFound",
            name:"NotFound",
            component:NotFound,
        },
        
        // {
        //     path:"/signup",
        //     name:"signup",
        //     component: Signup,
        // }
        
    ]


})

export default router;
