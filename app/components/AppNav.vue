<template>
    <div>
        <!-- Fixed navbar -->
        <md-toolbar class="fixed-top-nav">
            <div class="md-toolbar-container" style="flex: 1;">
                <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
                    <md-icon>menu</md-cion>
                </md-button>
                
                <h2 class="md-title">Stephen Cowie</h2>
                
            </div>
            
            <md-speed-dial>
                <md-button style="border:none; box-shadow: 0px 0px" class="md-fab md-mini md-primary" md-fab-trigger>
                    <md-icon md-icon-morph @click.native="toggleAboutMe">chevron_left</md-icon>
                    <md-icon @click.native="toggleAboutMe">expand_more</md-icon>
                </md-button>
            </md-speed-dial>
        
        </md-toolbar>
        <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
            <md-toolbar>
                <div class="md-toolbar-container">
                    <h3 class="md-title">Stephen Cowie</h3>
                </div>
            </md-toolbar>
            <md-list>
                <md-list-item>
                    <span>cowiestephenjames@gmail.com</span>
                </md-list-item>
                <md-list-item>
                    <span>scowie</span>
                    <md-icon>github</md-icon>
                </md-list-item>
            </md-list>
            <md-button class="md-raised md-accent" @click.native="closeLeftSidenav">Close</md-button>
        </md-sidenav>
   
        <div id="about-me">
        </div>

    </div>
</template>

<script>

export default {
  data () {
    return {
      
    }
  },
  methods: {
        toggleLeftSidenav() {
            this.$refs.leftSidenav.toggle();
        },
        closeLeftSidenav() {
            this.$refs.leftSidenav.close();
        },
        toggleAboutMe() {console.log('called toggle')
            const el = document.getElementById("about-me")
            if(!el.style.height || el.style.height == "0px") {
                el.style.height = "250px"
            } else {
                el.style.height = "0px"
            }
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
        z-index:3;
        position:fixed;
        width:100%;
    }

    #about-me {
        position:relative; 
        overflow:hidden; 
        z-index:2; 
        top:64px; 
        width:100%; 
        height: 0px; 
        border:1px solid red;
        -webkit-transition: height 1s; /* Safari */
        transition: height 1s;
    }
</style>