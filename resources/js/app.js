require('./bootstrap');

import Vue from 'vue'

import Main from './Main'
import router from "./routes";
const app = new Vue({
    el: '#app',
    router,
    render:h=>h(Main)
});
