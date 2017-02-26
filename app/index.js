// 3rd party libraries
import $ from 'jquery'
import magnificPopup from 'magnific-popup'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import VueProgressiveImage from 'vue-progressive-image'

import 'vue-material/dist/vue-material.css'
import '../node_modules/magnific-popup/dist/magnific-popup.css'
import '../node_modules/magnific-popup/dist/jquery.magnific-popup.js'



Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.use(VueProgressiveImage)

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






