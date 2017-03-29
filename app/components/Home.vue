<template>
    <div class="main-content">
        <br />
        <div v-for="item in items" style="max-width:1000px; margin-left:auto; margin-right:auto;">
            <md-card md-with-hover>
                <md-card-header style="padding-bottom:10px; background:rgba(63,81,181,0.05)">
                    <md-layout md-gutter>
                        <md-layout md-column>
                            <h1 class="md-title">{{item.title}}</h1>
                            <h3 v-html="item.subheader" class="md-subhead"></h3>
                        </md-layout>
                        <md-layout md-flex="33" md-flex-offset="33" md-align="end">
                            <div>
                                <span style="color:#3f51b5; font-size:16px; font-weight:500;">{{item.timeline}}</span>
                            </div>
                        </md-layout>
                    </md-layout>
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

    const setItemWriteUpProp = () => {console.log('setting item prop')
        let widthBasis = window.innerWidth
        if(widthBasis > 1000) {
            widthBasis = 1000
        } 
        const elements = Array.from(document.getElementsByClassName("item-writeup-container"))
        elements.forEach(element => {
            element.style.maxWidth = `${widthBasis - 360}px`
        })
    }

    const getAppropriateHeightForAboutMe = () => {
        let imgHeight = document.getElementById("about-me-image-container").clientHeight
        let writeupHeight = document.getElementById("about-me-writeup-container").clientHeight    
        let appropriateHeight = (imgHeight > writeupHeight ? (imgHeight + 45) : (writeupHeight + 25))
        return appropriateHeight
    }
    
    const setAppropriateHeightForAboutMe = () => {console.log('yes?')
        document.getElementById("about-me").style.height = `${getAppropriateHeightForAboutMe()}px`
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
                    },
                    closeOnBgClick: false
                })
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

    window.onresize = () => {
        setItemWriteUpProp()
        if(document.getElementById("about-me").style.height && document.getElementById("about-me").style.height !== "0px"){
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