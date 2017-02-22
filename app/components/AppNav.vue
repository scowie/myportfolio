<template>
    <div>
    <!-- Fixed navbar -->
    <md-toolbar class="fixed-top-nav">
        <div class="md-toolbar-container" style="flex: 1;">
            <md-button>
                <h2 class="md-title">Stephen Cowie</h2>
            </md-button>
        </div>
       
        <md-button class="md-icon-button" @click.native="toggleRightSidenav">
            <md-icon>more_vert</md-cion>
        </md-button>
     
    </md-toolbar>
    <md-sidenav class="md-right" ref="rightSidenav" @open="open('Right')" @close="close('Right')">
        <md-toolbar>
            <div class="md-toolbar-container">
                <h3 class="md-title">Sidenav content</h3>
            </div>
        </md-toolbar>

        <md-button class="md-raised md-accent" @click.native="closeRightSidenav">Close</md-button>
    </md-sidenav>
    </div>
</template>

<script>

export default {
  data () {
    return {
      
    }
  },
  methods: {
        toggleRightSidenav() {
            this.$refs.rightSidenav.toggle();
        },
        closeRightSidenav() {
            this.$refs.rightSidenav.close();
        },
        open(ref) {
            console.log('Opened: ' + ref);
        },
        close(ref) {
            console.log('Closed: ' + ref);
        }
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