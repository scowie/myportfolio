// 3rd party libraries
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'


Vue.use(VueRouter)
Vue.use(VueMaterial)

/* App component */
import App from './components/App.vue'

const router = new VueRouter({
  mode: 'history',
  base: '/dist/app',
  routes: [
    {
      path: '/',
      name: 'home',
      component: function (resolve) {
        require(['./components/Home.vue'], resolve)
      }
    }
  ]
  
})

document.addEventListener('DOMContentLoaded', function(){ 
    new Vue({
      // Attach the Vue instance to the window,
      // so it's available globally.
      created: function () {
        window.Vue = this
      },
      router,
      render: h => h(App)
    }).$mount('#app')
});






