import vueRoute from 'vue-router'
import test from './components/test'
 import Vue from 'vue'

const routes = [
    {path: '/test', component: test}
]
Vue.use(vueRoute);

const router = new vueRoute({
    routes,
});

export default router
