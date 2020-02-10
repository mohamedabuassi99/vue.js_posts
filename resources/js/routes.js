import vueRoute from 'vue-router'
import Vue from 'vue'


//components
import test from './components/test'
import create from './components/post/create'

const routes = [
    {path: '/test', component: test},
    {path: '/post/create', component: create}
]
Vue.use(vueRoute);

const router = new vueRoute({
    routes,
});

export default router
