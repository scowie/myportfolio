<template>
    <div>
        <!-- Fixed navbar -->
        <md-toolbar class="fixed-top-nav" style="background-color:white; top:0px; height:100px; z-index:9; padding-top:20px;">
            <div class="md-toolbar-container">
                
                <h1 class="md-title" style="flex:1; color:black; font-size:32px; font-weight:400">Stephen Cowie</h1>
                
                <md-button>
                    <router-link to="/" style="color:black; font-size:13px;">My Work</router-link>
                </md-button>
                <md-button>
                    <router-link to="/resume" style="color:black; font-size:13px;">Resume</router-link>
                </md-button>
                <md-button>
                    <router-link to="/aboutme" style="color:black; font-size:13px;">Contact</router-link>
                </md-button>
            </div>
        </md-toolbar>



    </div>
</template>

<script>
    import AboutMe from '../data/about-me'
    import $ from 'jquery'

    export default {
    data () {
        return {
            aboutme: AboutMe,
            showResume: false
        }
    },
    methods: {
            fadeInResume() {
                this.showResume = true
            },
            fadeOutResume() {
                this.showResume = false
            },
            toggleLeftSidenav() {
                this.$refs.leftSidenav.toggle();
            },
            closeLeftSidenav() {
                this.$refs.leftSidenav.close();
            },
            toggleAboutMe() {console.log('toggleAboutMe')
                const el = document.getElementById("about-me")
                if(!el.style.height || el.style.height == "0px") {
                    setAppropriateHeightForAboutMe()
                } else {
                    this.showResume = false
                    el.style.height = "0px"
                }
            },
            toggleResume() {
                if(!this.showResume){
                    this.fadeInResume()
                } else {
                    this.fadeOutResume()
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

    #resume {
        opacity:1;
        transition: opacity 0.75s;
    }

    #about-me {
        position:relative; 
        overflow:hidden; 
        z-index:2; 
        top:64px; 
        width:100%; 
        height: 0px; 
        /*border-bottom:1px solid gray;*/
        -webkit-transition: height 1s; /* Safari */
        transition: height 1s;
    }

    .about-me-writeup-text {
        margin-top:0px;
        font-size:14px;
    }
</style>