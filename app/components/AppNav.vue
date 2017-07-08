<template>
    <nav style="max-width:1000px; margin-left:auto; margin-right:auto; margin-top:40px;" class="navbar">
        <h1 class="brand">Stephen Cowie</h1>
        <div class="drop-down">
            <h1 class="brand">Stephen Cowie</h1>
            <md-button 
                style="z-index:99"
                class="menu-button"
                @click.native="toggleShowMenu">
                <md-icon>menu</md-icon>
            </md-button>
            
            <md-button v-if="showMenuItems" class="navbar-button">
                <router-link 
                    @click.native="setActiveLink('navbar-link-mywork')"
                    id="navbar-link-mywork" 
                    class="link" 
                    to="/">My Work</router-link>
            </md-button>
            <md-button v-if="showMenuItems" class="navbar-button">
                <router-link 
                    @click.native="setActiveLink('navbar-link-resume')"
                    id="navbar-link-resume" 
                    class="link" 
                    to="/resume">Resume</router-link>
            </md-button>
            <md-button v-if="showMenuItems" class="navbar-button">
                <router-link 
                    @click.native="setActiveLink('navbar-link-aboutme')"
                    id="navbar-link-aboutme" 
                    class="link" 
                    to="/aboutme">Contact</router-link>
            </md-button>
            
        </div>
        <div class="right">
            <md-button class="navbar-button">
                <router-link 
                    @click.native="setActiveLink('navbar-link-mywork')"
                    id="navbar-link-mywork" 
                    class="link" 
                    to="/">My Work</router-link>
            </md-button>
            <md-button class="navbar-button">
                <router-link 
                    @click.native="setActiveLink('navbar-link-resume')"
                    id="navbar-link-resume" 
                    class="link" 
                    to="/resume">Resume</router-link>
            </md-button>
            <md-button class="navbar-button">
                <router-link 
                    @click.native="setActiveLink('navbar-link-aboutme')"
                    id="navbar-link-aboutme" 
                    class="link" 
                    to="/aboutme">Contact</router-link>
            </md-button>
        </div>
    </nav>
</template>

<script>
    import $ from 'jquery'
    import {EventBus} from '../services/event-bus'

    export default {
    mounted() {
        const hash = window.location.hash
        switch(hash) {
            case "#/resume":
                this.setActiveLink('navbar-link-resume')
                break
            case "#/aboutme":
                this.setActiveLink('navbar-link-aboutme')
                break
            default: 
        }
    },
    data () {
        return {
            showMenuItems: false
        }
    },
    methods: {
            toggleShowMenu() {
                this.showMenuItems = !this.showMenuItems
            },
            setActiveLink(link) {
                switch(link) {
                    case "navbar-link-aboutme":
                        {   
                            $(`#${link}`).css('color', 'black')
                            $("#navbar-link-resume").css('color', '#616161')
                            $("#navbar-link-mywork").css('color', '#616161')
                            break;
                        }
                    case "navbar-link-resume":
                        {   
                            $(`#${link}`).css('color', 'black')
                            $("#navbar-link-aboutme").css('color', '#616161')
                            $("#navbar-link-mywork").css('color', '#616161')
                            break;
                        }
                    default: 
                        {   
                            $(`#${link}`).css('color', 'black')
                            $("#navbar-link-resume").css('color', '#616161')
                            $("#navbar-link-aboutme").css('color', '#616161')
                        }
                }
                
            }
        }
    }
</script>

<style>
    .navbar {
        background: #ffffff;
    }
    .navbar .link {
        display: block;
        font-weight:600;
        width: 100%;
        text-align: center;
        text-decoration: none;
        background: white;
    }
    .navbar > link:hover, .navbar > .link:active {
        background: white;
        text-decoration:none;
    }
    .navbar .brand {
        font-size: 32px;
        text-align: center;
        background: #ffffff;
        color: black;
        font-weight:500;
    }
    .navbar .toggle {
        padding: 1em;
        color: black;
        vertical-align: middle;
    }

     /* do show the dropdown */
    .navbar div.drop-down {
        display:flex;
        flex-direction:column;
    }

    @media (min-width: 48em) {
        .navbar {
            display: flex;
        }
        .navbar .left, .navbar .right {
            display: flex;
            flex: 1;
        }
        .navbar .link {
            width: auto;
        }
        .navbar .right {
            justify-content: flex-end;
        }
        /* dont show toggle when screen is large */
        .navbar .toggle {
            display: none;
        }
    }

    /* when screen is small don't show right side */
    .navbar div.right {
        display: none;
    }

    .navbar div.drop-down {
        display: flex;
        flex-direction: column;
    }

    .navbar > .brand {
        display: none;
    }
   

    @media (min-width: 48em) {
        .navbar div.right {
            display: flex;
        }
        .navbar div.drop-down {
            display: none;
        }
        .navbar  > .brand {
            display: inline-block;
        }
    }

    .navbar-button {
        padding:0px;
        height:30px;
        margin-top:20px;
    }
    .navbar .menu-button {
        width:100px;
        margin-left:auto;
        margin-right:auto;
    }

    #navbar-link-resume {
        cursor:pointer;
        color:#616161;
        font-size:13px;
    }
    #navbar-link-aboutme {
        cursor:pointer;
        color:#616161;
        font-size:13px;
    }
    #navbar-link-mywork {
        cursor:pointer;
        color:black;
        font-size:13px;
    }
    #navbar-link-resume:hover {
        color:black;
        text-decoration:none;
    }
    #navbar-link-aboutme:hover {
        color:black;
        text-decoration:none;
    }
    #navbar-link-mywork:hover {
        color:black;
        text-decoration:none;
    }

</style>