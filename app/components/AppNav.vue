<template>
    <div>
        <!-- Fixed navbar -->
        <md-toolbar style="background-color:white; top:0px; height:100px; z-index:9; padding-top:20px;">
            <div class="md-toolbar-container">
                
                <h1 class="md-title" style="flex:1; color:black; font-size:32px; font-weight:400">Stephen Cowie</h1>
                
                <md-button>
                    <router-link to="/" id="navbar-link">My Work</router-link>
                </md-button>
                <md-button>
                    <router-link to="/resume" id="navbar-link">Resume</router-link>
                </md-button>
                <md-button>
                    <router-link to="/aboutme" id="navbar-link">Contact</router-link>
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
            
        }
    }
</script>

<style>

    #navbar-link {
        cursor:pointer;
        color:black;
        font-size:13px;
    }

    #navbar-link:hover {
        color:#bdbdbd;
        text-decoration:none;
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