<template>
    <nav style="max-width:1000px; margin-left:auto; margin-right:auto; margin-top:50px;" class="navbar">
        <md-icon class="toggle">menu</md-icon>
        <h1 class="brand">Stephen Cowie</h1>
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
    .navbar {
        background: #ffffff;
    }
    .navbar .toggle, .navbar .brand {
        display: inline-block;
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
        .navbar .toggle {
            display: none;
        }
    }

    .navbar div {
        display: none;
    }

    @media (min-width: 48em) {
        .navbar div {
            display: flex;
        }
    }

    @media (max-width: 48em) {
        .navbar.active .toggle {
            background: #ffffff;
            color: black;
        }
        .navbar.active div {
            display: block;
        }
    }


    .navbar-button {
        padding:0px;
        height:30px;
        margin-top:20px;
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