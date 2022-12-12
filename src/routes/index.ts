import { createRouter , createWebHistory } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import Home from '../components/Home.vue'


const routes = [
    {
        path : '/' ,
        name : 'Home' , 
        component : HomeComponent
    } , 
    {   path : '/home-only' , 
        name : 'HomeOnly' ,
        component : Home
        
        
    }
]

const router = createRouter({
    history : createWebHistory(import.meta.env.URL) , 
    routes 
})
export default router