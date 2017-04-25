// 3rd party libraries
import $ from 'jquery'
import magnificPopup from 'magnific-popup'
import '../add-ins/slick/slick.js'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import VueProgressiveImage from 'vue-progressive-image'

import 'vue-material/dist/vue-material.css'
import '../node_modules/magnific-popup/dist/magnific-popup.css'
import '../add-ins/slick/slick.css'

Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.use(VueProgressiveImage)

Vue.material.registerTheme({
  default: {
    primary: {
      color: 'white',
      hue: 900
    },
    accent: {
      color: 'red',
      hue: 900
    },
    background: {
      color: 'grey',
      hue:100
    }
  },
  teal: {
    primary: 'blue',
    accent: 'pink'
  },
  purple: {
    primary: 'purple',
    accent: 'orange'
  }
})


/* App component */
import App from './components/App.vue'

const router = new VueRouter({
  base: '/dist/app',
  routes: [
    {
      path: '/',
      name: 'home',
      component: function (resolve) {
        require(['./components/Home.vue'], resolve)
      }
    },
    {
      path: '/resume',
      name: 'resume',
      component: function (resolve) {
        require(['./components/Resume.vue'], resolve)
      }
    },
    { path: '*', redirect: { name: 'home' } }

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






