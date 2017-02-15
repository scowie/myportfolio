<template>
    <div class="main-content">
        <md-layout md-gutter="24">

            <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="50">
                    <md-card class="card-example">
                        <md-card-area md-inset>
                            <md-card-header>
                                <h2 class="md-title">Portfolio Manager</h2>
                                <div class="md-subhead">
                                    <md-icon>timeline</md-icon>
                                    <span>Currently In Progress</span>
                                </div>
                            </md-card-header>
                            <md-card-media md-ratio="16:9">
                                <img src="https://s3.amazonaws.com/cowie-calkins/CascaisStreet_n.jpg" alt="Cascais Street">
                            </md-card-media>
                            <md-card-content>
                                Managing gallery images
                            </md-card-content>
                        </md-card-area>
                        <md-card-content>
                            <h3 class="md-subheading">Tech Used</h3>
                            <div class="card-reservation">
                                <md-icon>access_time</md-icon>
                                <md-button-toggle md-single class="md-button-group">
                                    <md-button>5:30PM</md-button>
                                    <md-button>7:30PM</md-button>
                                    <md-button>9:00PM</md-button>
                                </md-button-toggle>
                            </div>
                        </md-card-content>
                        <md-card-actions>
                            <md-button class="md-primary">Reserve</md-button>
                        </md-card-actions>
                    </md-card>
            </md-layout>

            <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="50">
                <div class="item-writeup">
                    <p>tkjekh jtlkjlk wtj lkwj tk wet kej tlkej tkej tewj te kejew e kewl ewk ewj 
                        jerwekjtkwejtkwej  klkt w j tkwj tkej tlkjw   ewtljwtj wkjtkwej tkwj tkw tkw t 
                        jtkejt wjlt wlkjtlkwj tlkw tw</p>
                </div>
            </md-layout>

        </md-layout>
    </div>
</template>

<script>
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
    .card-example .md-subhead .md-icon {
        width: 16px;
        min-width: 16px;
        height: 16px;
        min-height: 16px;
        font-size: 16px;
        line-height: 16px;
    }
    .card-example .md-subhead span {
        vertical-align: middle;
    }
    .card-example .card-reservation {
        margin-top: 8px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .card-example .card-reservation .md-icon {
        margin: 8px;
        color: rgba(0, 0, 0, 0.54) !important;
    }
    .card-example .card-reservation .md-button {
        border-radius: 2px !important;
    }

</style>