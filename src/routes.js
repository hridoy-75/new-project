import { createWebHistory, createRouter } from 'vue-router'


import compHome from './Components/Home.vue'
import compFeatures from './Components/Features.vue'
import compExclusive from './Components/Exclusive.vue'
import compBlog from './Components/Blog.vue'
import compSuccess from './Components/Success.vue'

const routes = [

    {
        path: '/',
        component: compHome,
        meta: {
            title: 'Home'
        }
    },
    {
        path: '/Features',
        component: compFeatures,
        meta: {
            title: 'Features'
        }
    },
    {
        path: '/Exclusive',
        component: compExclusive,
        meta: {
            title: 'Exclusive'
        }
    },
    {
        path: '/Blog',
        component: compBlog,
        meta: {
            title: 'Blog'
        }
    },
    {
        path: '/Success',
        component: compSuccess,
        meta: {
            title: 'Success'
        }
    }
]




const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;