<template>
    <!-- Fixed navbar -->
    <md-toolbar class="fixed-top-nav">
        <div class="md-toolbar-container" style="flex: 1;">
            <md-button>
                <h2 class="md-title">Stephen Cowie</h2>
            </md-button>
        </div>
        <!--<div md-align="end">-->
            <md-button class="md-icon-button">
                <md-icon>more_vert</md-cion>
            </md-button>
        <!--</div>-->
    </md-toolbar>
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
    .fixed-top-nav {
        z-index:2;
        position:fixed;
        width:100%;
    }
</style>