// 3rd party libraries
import vue from './services/configured-vue'
import vueRouter from 'vue-router'

// local services
import containerComponent from './components/my-portfolio-container.vue'


window.myPortfolio = {          
    bootstrap() {
        var router = new vueRouter({
            linkActiveClass: 'active'
        })

        router.map({
            '/': {
            component: containerComponent,
            },
        })

        router.start(vue.extend({}), '#my-portfolio-spa')
    }
}     
window.myPortfolio.bootstrap()
