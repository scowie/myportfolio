<template>
    <md-bottom-bar class="footer">
        <md-bottom-bar-item md-icon="history">Recents</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="favorite" md-active>Favorites</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>
    </md-bottom-bar>
</template>

<script>

export default {
  data () {
    return {
      
    }
  },
  methods: {
    
    }
}
</script>

<style>
    .footer {
        width: 100%;
        height: 100px; 
        position: absolute; 
        bottom: 0px; 
        left: 0px;
    }
</style>