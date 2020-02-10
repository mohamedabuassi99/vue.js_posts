import vueRoute from 'vue-router'
import Vue from 'vue'


//components
import create from './components/post/create'
import index from './components/post/index'
import edit from './components/post/edit'

const routes = [
    {path: '/post/create', component: create},
    {path: '/', component: index},
    {path: '/post/edit/:id', component: edit} // id should with :id  :)
]
Vue.use(vueRoute);

const router = new vueRoute({
    routes,
    mode: 'history'
});

export default router
