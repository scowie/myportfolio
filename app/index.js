// 3rd party libraries
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

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






