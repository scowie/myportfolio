<template>
    <div class="main-content">
        <md-card md-with-hover class="card-example">
            <md-card-area md-inset>
                <md-card-header>
                    <md-layout md-gutter>
                        <md-layout>
                            <h2 class="md-title">Portfolio Manager</h2>
                        </md-layout>
                        <md-layout md-flex="33" md-flex-offset="33" md-align="end">
                            <div>
                                <md-icon class="md-primary">timeline</md-icon>
                                <span>Currently In Progress...</span>
                            </div>
                        </md-layout>
                    </md-layout>
                    <div md-row style="margin-top:15px">
                        <md-chip>React.js</md-chip>
                        <md-chip>Redux</md-chip>
                        <md-chip>Material-UI</md-chip>
                        <md-chip>Node.js</md-chip>
                        <md-chip>MongoDB</md-chip>
                        <md-chip>Mongoose</md-chip>
                        <md-chip>Webpack</md-chip>
                        <md-chip>AWS S3</md-chip>
                    </div>
                </md-card-header>
            </md-card-area>
            <div>
                <div style="margin-bottom:20px; margin-left:20px; margin-top:20px; width:300px; height:200px; display:inline-block; border:1px solid purple">
                    <img src="https://s3.amazonaws.com/cowie-calkins/CascaisStreet_n.jpg" alt="Cascais Street">
                </div>
                <div id="item-writeup-container" style="margin-top:20px; min-width:300px; display:inline-block; padding-left:20px; vertical-align:top; border:1px solid red;">
                    <p class="item-writeup-text">
                        Managing gallery images jkjlkj klj  lkjlkjljlk lkj kljlkj  ljlkjlk lk j 
                        ljkj lkjkljlkj kl kjk lkjlkjlkj lk lkjl jlkj lkjlkjlkj lkj lk jl jkjlkjj
                        lk lkj lkjlj lj lkj lkjlkjlkj lkjlkj ljlkj lkj lkj l lj kljlkj lkj lk jlk 
                        kj ljlkj  jlkj j;kljkljkj jkjkjkl jkjlkj lkj lkjlkjlkjljlkjlk
                    </p>
                </div>                
            </div>
        </md-card>
    </div>
</template>

<script>

    const setItemWriteUpProp = () => {
        const screenWidth = window.innerWidth
        const element = document.getElementById("item-writeup-container")
        if(element){
            element.style.maxWidth = `${screenWidth - 360}px`
        }    
    }

    let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(stateCheck)
        setItemWriteUpProp()
    }
    }, 100)

    window.onresize = setItemWriteUpProp

    export default {
        name: 'home',
        data () {
            return {}
        },
        methods: {}
    }

</script>

<style>

    .main-content {
        margin-top: 80px;
        margin-bottom: 120px;
        margin-left: 10px;
        margin-right: 10px;
    }

    .item-writeup-text {
        margin-top:0px;
        font-size:14px;
    }

</style>