<template>
    <nav style="max-width:1000px; margin-left:auto; margin-right:auto; margin-top:50px;" class="navbar">
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
                <router-link id="navbar-link" class="link" to="/">My Work</router-link>
            </md-button>
            <md-button v-if="showMenuItems" class="navbar-button">
                <router-link id="navbar-link" class="link" to="/resume">Resume</router-link>
            </md-button>
            <md-button v-if="showMenuItems" class="navbar-button">
                <router-link id="navbar-link" class="link" to="/aboutme">Contact</router-link>
            </md-button>
            
        </div>
        <div class="right">
            <md-button class="navbar-button">
                <router-link id="navbar-link" class="link" to="/">My Work</router-link>
            </md-button>
            <md-button class="navbar-button">
                <router-link id="navbar-link" class="link" to="/resume">Resume</router-link>
            </md-button>
            <md-button class="navbar-button">
                <router-link id="navbar-link" class="link" to="/aboutme">Contact</router-link>
            </md-button>
        </div>
    </nav>
</template>

<script>
    import $ from 'jquery'

    export default {
    data () {
        return {
            showMenuItems: false
        }
    },
    methods: {
            toggleShowMenu() {console.log('called')
                this.showMenuItems = !this.showMenuItems
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
        font-weight:400;
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

    #navbar-link {
        cursor:pointer;
        color:black;
        font-size:13px;
    }

    #navbar-link:hover {
        color:#bdbdbd;
        text-decoration:none;
    }

</style>