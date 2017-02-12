// 3rd party libraries
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'


Vue.use(VueRouter)
Vue.use(VueMaterial)

// local services
import containerComponent from './components/my-portfolio-container.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: containerComponent }
  ]
})

document.addEventListener('DOMContentLoaded', function(){ 
    new Vue({
        router
    }).$mount('#my-portfolio-spa')
});






