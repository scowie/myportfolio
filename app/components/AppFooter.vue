<template>
    <div>
        <div id="about-this-site" >
            <p style="margin-left:20px;">
                This site was built in 2017 with <a href="https://vuejs.org/" target="_blank">Vue.js 2</a> and <a href="https://vuematerial.github.io/#/" target="_blank">Vue Material</a>.  For the image sliders I used <a href="http://kenwheeler.github.io/slick/" target="_blank">Slick</a>, and for image lightbox display <a href="http://dimsemenov.com/plugins/magnific-popup/" target="_blank">Magnific Popup</a>.
            </p>
            <md-icon
                @click.native="toggleAboutThisSiteContent" 
                style="position:absolute; right:5px; top:5px; cursor:pointer">
                close
            </md-icon>
        </div>
        <md-bottom-bar class="footer">
            <md-bottom-bar-item 
                md-icon="info_outline"
                @click.native="toggleAboutThisSiteContent">
                <span style="font-size:14px;">About This Site</span>
            </md-bottom-bar-item>
        </md-bottom-bar>
    </div>
</template>

<script>

export default {
  data () {
    return {
        showAboutThisSiteContent: false
    }
  },
  methods: {
      toggleAboutThisSiteContent() {
        let el = document.getElementById("about-this-site")
        if(!this.showAboutThisSiteContent) {
            this.showAboutThisSiteContent = true
            el.style.height = "50px"
            el.style.border = "1px solid #3f51b5"
            let scrollDown = setInterval(function() {
                window.scrollTo(0,document.body.scrollHeight)
            }, 1) 
            setTimeout(function() {
                clearInterval(scrollDown)
            }, 1200)
        } else {
            this.showAboutThisSiteContent = false
            el.style.height = "0px"
            el.style.border = "none"
        }
      }
  }
}
</script>

<style>
    .footer {
        width: 100%;
        height: 60px; 
        position: absolute; 
        bottom: 0px; 
        left: 0px;
    }

    #about-this-site {
        overflow:hidden;
        border-top-left-radius:5px;
        border-top-right-radius:5px;
        border-bottom-left-radius:5px;
        border-bottom-right-radius:5px;
        height:0px; 
        width:80%; 
        margin-left:auto;
        margin-right:auto;
        border:none;
        position:relative;
        bottom:60px;
        transition: height 1s;
        -webkit-transition: height 1s;
    }
</style>