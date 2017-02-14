<template>
  <div>
    <app-nav></app-nav>
    <div style="position:relative; border:1px solid white;">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>

</template>

<script>
import AppNav from './AppNav.vue'
import AppFooter from './AppFooter.vue'
export default {
  name: 'app',
  components: { AppNav, AppFooter },
  data () {
    return {
    }
  }
}
</script>
