<template>
    <div class="main-content">
        <br />
        <div v-for="item in items" style="max-width:1000px; margin-left:auto; margin-right:auto;">
            <md-card md-with-hover>
                <md-card-header style="padding-bottom:0px; background:rgba(63,81,181,0.05)">
                    <md-layout md-gutter>
                        <md-layout md-column>
                            <h1 class="md-title">{{item.title}}</h1>
                            <h3 class="md-subhead">{{item.subheader}}</h3>
                        </md-layout>
                        <md-layout md-flex="33" md-flex-offset="33" md-align="end">
                            <div>
                                <!--<md-icon class="md-primary">timeline</md-icon>-->
                                <span style="color:#3f51b5; font-size:16px; font-weight:500;">{{item.timeline}}</span>
                            </div>
                        </md-layout>
                    </md-layout>
                    <md-chips v-model="item.tags" md-static>
                        <template scope="chip"><a :href="chip.value.link">{{ chip.value.label }}</a></template>
                    </md-chips>
                </md-card-header>
                <div style="margin-top:0px">
                    <div 
                        style="margin-bottom:20px; margin-left:20px; margin-top:20px; width:300px; height:200px; display:inline-block;"
                        class="steven">
                        <progressive-img :src="item.imageUrl" >
                    </div>
                    <a class="steve" href="https://s3.amazonaws.com/cowie-calkins/CascaisStreet_n.jpg">Open popup</a>

                    <div id="item-writeup-container" style="margin-top:20px; min-width:300px; display:inline-block; padding-left:20px; vertical-align:top">
                        <p class="item-writeup-text">
                            {{ item.description }}
                        </p>
                    </div>                
                </div>
            </md-card>
            <br /><br />
        </div>
    </div>
</template>

<script>
    import PortfolioItems from '../data/portfolio-items/portfolio-items'
    import $ from 'jquery'
    

    // $(document).ready(function() {console.log(
    //     $('.image-container').width()
    // )
    // })

    const setItemWriteUpProp = () => {
        const screenWidth = window.innerWidth
        const element = document.getElementById("item-writeup-container")
        if(element){
            element.style.maxWidth = `${screenWidth - 360}px`
        }    
    }

    const initializeMagnificPopup = () => {console.log('initializing popup')
        const element = $('.steve')
        if(element) {
           $('.steve').magnificPopup({
                type:'image'
           })
            }
        }
    

    let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(stateCheck)
        setItemWriteUpProp()
        initializeMagnificPopup()
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
            console.log($('.steve'))
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