import vueRoute from 'vue-router'
import Vue from 'vue'


//components
import create from './components/post/create'
import index from './components/post/index'

const routes = [
    {path: '/post/create', component: create},
    {path: '/', component: index}
]
Vue.use(vueRoute);

const router = new vueRoute({
    routes,
});

export default router
