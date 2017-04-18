<template>
  <div>
    <md-theme md-name="default">
      <app-nav></app-nav>
      <div style="position:relative; border:1px solid white;">
        <router-view></router-view>
      </div>
      <app-footer></app-footer>
    </md-theme>
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
