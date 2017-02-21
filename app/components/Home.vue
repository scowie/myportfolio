<template>
    <div class="main-content">
        <div v-for="item in items">
            <md-card md-with-hover>
            
                <md-card-header style="padding-bottom:0px; background:rgba(240,240,240,0.9)">
                    <md-layout md-gutter>
                        <md-layout>
                            <h2 class="md-title">{{item.title}}</h2>
                        </md-layout>
                        <md-layout md-flex="33" md-flex-offset="33" md-align="end">
                            <div>
                                <md-icon class="md-primary">timeline</md-icon>
                                <span>{{item.timeline}}</span>
                            </div>
                        </md-layout>
                    </md-layout>
                
                    <md-chips v-model="item.tags" md-static>
                        <template scope="chip">{{ chip.value }}</template>
                    </md-chips>
            
                </md-card-header>
            
                <div style="margin-top:0px">
                    <div style="margin-bottom:20px; margin-left:20px; margin-top:20px; width:300px; height:200px; display:inline-block;">
                        <img :src="item.imageUrl" >
                    </div>
                    <div id="item-writeup-container" style="margin-top:20px; min-width:300px; display:inline-block; padding-left:20px; vertical-align:top">
                        <p class="item-writeup-text">
                            {{ item.description }}
                        </p>
                    </div>                
                </div>
            </md-card>
            <br />
        </div>
    </div>
</template>

<script>
    import PortfolioItems from '../data/portfolio-items/portfolio-items'

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
            return {
                items: false
            }
        },
        methods: {
            loadPortfolioItems() {
                console.log('called loadPortfolioItems')
                console.log(PortfolioItems)
                PortfolioItems.getAllPortfolioItems().then(items => {
                    console.log('items', items)
                    this.items = items
                })
            }
        },
        mounted: function() {
            this.loadPortfolioItems()
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

    .item-writeup-text {
        margin-top:0px;
        font-size:14px;
    }

</style>