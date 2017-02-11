import vue from 'vue'
import vueResource from 'vue-resource'
import vueRouter from 'vue-router'

vue.config.devtools = false
vue.use(vueResource)
vue.use(vueRouter)

export default vue