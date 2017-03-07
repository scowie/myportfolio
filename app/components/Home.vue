<template>
    <div class="main-content">
        <br />
        <div v-for="item in items" style="max-width:1000px; margin-left:auto; margin-right:auto;">
            <md-card md-with-hover>
                <md-card-header style="padding-bottom:0px; background:rgba(63,81,181,0.05)">
                    <md-layout md-gutter>
                        <md-layout md-column>
                            <h1 class="md-title">{{item.title}}</h1>
                            <h3 v-html="item.subheader" class="md-subhead"></h3>
                        </md-layout>
                        <md-layout md-flex="33" md-flex-offset="33" md-align="end">
                            <div>
                                <!--<md-icon class="md-primary">timeline</md-icon>-->
                                <span style="color:#3f51b5; font-size:16px; font-weight:500;">{{item.timeline}}</span>
                            </div>
                        </md-layout>
                    </md-layout>
                    <md-chips v-model="item.tags" md-static>
                        <template scope="chip"><a :href="chip.value.link" target="_blank">{{ chip.value.label }}</a></template>
                    </md-chips>
                </md-card-header>
                <div style="margin-top:0px">
                    <div 
                        class="image-container"
                        style="margin-bottom:20px; margin-left:20px; margin-top:20px; width:300px; height:200px; display:inline-block;">
                        <a v-for="imgUrl in item.imageUrls" :href="imgUrl" style="max-height: 200px; max-width: 300px">
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
                    <div id="item-writeup-container" style="margin-top:20px; min-width:300px; display:inline-block; padding-left:20px; vertical-align:top">
                        <p v-html="item.description" class="item-writeup-text" style="text-align:justify">
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

    const setItemWriteUpProp = () => {console.log('setting item prop')
        let widthBasis = window.innerWidth
        if(widthBasis > 1000) {
            widthBasis = 1000
        } 
        const element = document.getElementById("item-writeup-container")
        if(element){
            element.style.maxWidth = `${widthBasis - 360}px`
        }    
    }

    const getAppropriateHeightForAboutMe = () => {
        let imgHeight = document.getElementById("about-me-image-container").clientHeight
        let writeupHeight = document.getElementById("about-me-writeup-container").clientHeight    
        let writeupLeftPos = $("#about-me-writeup-container").position().left
        let appropriateHeight
        if(writeupLeftPos > 100) {
            appropriateHeight = imgHeight+45
        } else {
            appropriateHeight = imgHeight+45+writeupHeight
        }
        return appropriateHeight
    }
    
    const setAppropriateHeightForAboutMe = () => {console.log('yes?')
        document.getElementById("about-me").style.height = `${getAppropriateHeightForAboutMe()}px`
    }

    const setAboutMeWriteUpProp = () => {console.log('setting about me')
        const screenWidth = window.innerWidth
        const element = document.getElementById("about-me-writeup-container")
        if(element){
            element.style.maxWidth = `${screenWidth - 220}px`
        }    
    }

    const initializeMagnificPopup = () => {
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
                    }
                })
            })
        }
    }
    
    let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(stateCheck)
        setItemWriteUpProp()
        setAboutMeWriteUpProp()
        initializeMagnificPopup()
    }
    }, 100)

    window.onresize = () => {
        setItemWriteUpProp()
        setAboutMeWriteUpProp()
        if(document.getElementById("about-me").style.height){
            setAppropriateHeightForAboutMe()
        }
    }

    export default {
        name: 'home',
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