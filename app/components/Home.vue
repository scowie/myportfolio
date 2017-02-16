<template>
    <div class="main-content">
        <md-card md-with-hover class="card-example">

            <md-card-area md-inset>
                <md-card-header>
                    <h2 class="md-title">Portfolio Manager</h2>
                    <div class="md-subhead">
                        <md-icon>timeline</md-icon>
                        <span>Currently In Progress</span>
                    </div>
                    <div md-row style="margin-top:15px">
                        <md-chip>React.js</md-chip>
                        <md-chip>Redux</md-chip>
                        <md-chip>Material-UI</md-chip>
                        <md-chip>React.js</md-chip>
                        <md-chip>Redux</md-chip>
                        <md-chip>Material-UI</md-chip>
                    </div>
                </md-card-header>
             </md-card-area>

            <!--<md-layout md-gutter>
                <md-layout md-flex-xsmall="100" md-flex-small="33" md-flex-medium="33">-->
                    <!--<md-card-media>-->
                  <div>
                        <div style="width:300px; height:200px; display:inline-block; border:1px solid purple">
                            <img src="https://s3.amazonaws.com/cowie-calkins/CascaisStreet_n.jpg" alt="Cascais Street">
                        </div>

                    <!--</md-card-media>-->
                <!--</md-layout>
                <md-layout md-flex-xsmall="100" md-flex-small="67" md-flex-medium="67">-->
                    <!--<md-card-content>-->




                        <div style="min-width:300px; max-width:50%; display:inline-block; vertical-align:top; border:1px solid red;">
                            <p class="item-writeup-text">
                                Managing gallery images jkjlkj klj  lkjlkjljlk lkj kljlkj  ljlkjlk lk j 
                                ljkj lkjkljlkj kl kjk lkjlkjlkj lk lkjl jlkj lkjlkjlkj lkj lk jl jkjlkjj
                                lk lkj lkjlj lj lkj lkjlkjlkj lkjlkj ljlkj lkj lkj l lj kljlkj lkj lk jlk 
                                kj ljlkj  jlkj j;kljkljkj jkjkjkl jkjlkj lkj lkjlkjlkjljlkjlk
                            </p>
                        </div>

                        
</div>
                    <!--</md-card-content>-->
                  
                <!--</md-layout>
            </md-layout>-->

            <md-card-content>
                <div md-row>
                    <md-chip>React.js</md-chip>
                    <md-chip>Redux</md-chip>
                    <md-chip>Material-UI</md-chip>
                </div>
                <div md-row>
                    <md-chip>Node.js</md-chip>
                    <md-chip>Mongoose</md-chip>
                    <md-chip>Express</md-chip>
                </div>
            </md-card-content>
        </md-card>
    </div>
</template>

<script>

window.onresize = function() {
    console.log(window.innerWidth)
    
}

export default {
    name: 'home',

  data () {
    return {
      
    }
  },
  methods: {
    
    }
}
</script>

<style>
    .main-content {
        margin-top: 80px;
        margin-bottom: 120px;
        margin-left: 10px;
        margin-right: 10px;
    }


</style>