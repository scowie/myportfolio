<template>
    <div>
        <!-- Fixed navbar -->
        <md-layout md-row>
        
        <!-- <div style="border:1px solid red; background-color:white; top:0px; width:100%; height:100px; z-index:9; padding-top:20px;" md-row> -->
                    <md-layout>
                    <div md-flex>
                    <h1 style="color:black; font-size:32px; font-weight:400">Stephen Cowie</h1>
                    </div>
                    </md-layout>
                    <md-layout>
                    <md-button md-flex md-hide-small>
                        <router-link to="/" id="navbar-link">My Work</router-link>
                    </md-button>
            
                    <md-layout>
                    <md-button md-flex>
                        <router-link to="/resume" id="navbar-link">Resume</router-link>
                    </md-button>
                    </md-button>
                    <md-layout>
                    <md-button md-flex>
                        <router-link to="/aboutme" id="navbar-link">Contact</router-link>
                    </md-button>
                    </md-button>
                    <md-layout>
                    <md-button md-flex><router-link to="/" id="navbar-link">Test</router-link></md-button>
                    </md-button>
        
        </div>
        </md-layout>



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