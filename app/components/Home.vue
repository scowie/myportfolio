<template>
    <div style="border:1px solid yellow">
        <br />
        <div v-for="item in items" style="max-width:1000px; margin-left:auto; margin-right:auto;">
            <md-card md-with-hover style="background-color:white; cursor:default;">
                <md-card-header style="padding-bottom:10px;">
                    <md-layout md-gutter>
                        <md-layout md-column>
                            <h1 class="md-title">{{item.title}}</h1>
                            <h3 v-html="item.subheader" class="md-subhead"></h3>
                        </md-layout>
                        <md-layout md-flex="33" md-flex-offset="33" md-align="end">
                            <div>
                                <span style="font-size:16px; font-weight:500;">{{item.timeline}}</span>
                            </div>
                        </md-layout>
                    </md-layout>
                </md-card-header>
                <div style="margin-top:0px">
                    <div 
                        class="image-container"
                        style="margin-bottom:20px; margin-left:20px; margin-top:20px; width:300px; height:200px; display:inline-block; border:1px solid #e4e4e4; cursor:zoom-in;">
                        <a v-for="imgUrl in item.imageUrls" :href="imgUrl" style="max-height: 200px; max-width: 300px; cursor:zoom-in;">
                        <progressive-img :src="imgUrl" style="object-fit:contain">
                        </a>
                        <video v-for="videoUrl in item.videoUrls"
                            controls="controls" 
                            width="800" 
                            height="600" 
                            name="NetworkAnimation" 
                            :src="videoUrl">
                        </video>

                    </div>
                    <div class="item-writeup-container" style="margin-top:20px; min-width:300px; display:inline-block; padding-left:20px; vertical-align:top">
                        <p v-html="item.description" class="item-writeup-text" style="text-align:justify">
            
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

    export default {
        name: 'home',
        mounted() {
            this.loadPortfolioItems()
            let stateCheck = setInterval(() => {
                if (document.readyState === 'complete') {
                    clearInterval(stateCheck)
                    this.setItemWriteUpProp()
                    this.initializeMagnificPopup()
                }
            }, 100)
        },
        data () {
            return {
                items: false
            }
        },
        methods: {
            loadPortfolioItems() {
                PortfolioItems.getAllPortfolioItems().then(items => {
                    this.items = items
                })
            },
            initializeMagnificPopup() {console.log('initializing mag popup')
                const imageContainer = $('.image-container')
                if(imageContainer) {
                    $('.image-container').each(function() {
                        $(this)
                        .slick({
                        })
                        .magnificPopup({
                            delegate: 'a:not(.slick-cloned)',
                            type:'image',
                            gallery: {
                                enabled: true
                            },
                            closeOnBgClick: false
                        })
                    })
                }
            },
            setItemWriteUpProp() {console.log('setting item prop')
                let widthBasis = window.innerWidth
                if(widthBasis > 1000) {
                    widthBasis = 1000
                } 
                const elements = Array.from(document.getElementsByClassName("item-writeup-container"))
                elements.forEach(element => {
                    element.style.maxWidth = `${widthBasis - 360}px`
                })
            }
        }
    }

</script>

<style>

    .item-writeup-text {
        margin-top:0px;
        font-size:16px;
        line-height:150%;
    }

</style>