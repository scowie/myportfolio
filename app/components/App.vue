<template>
  <div>
    <md-theme md-name="default">
      <app-nav></app-nav>
      <div class="main-content">
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

<style>
    .main-content {
        margin-top: 25px;
        margin-bottom: 120px;
        margin-left: 10px;
        margin-right: 10px;
    }
</style>
