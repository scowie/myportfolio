<template>
<div>
    <div id="about-this-site" >
    Blah blah blah
    <md-icon style="position:absolute; right:0px;">
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
            el.style.height = "200px"
            let scrollDown = setInterval(function() {
                console.log('again')
                window.scrollTo(0,document.body.scrollHeight)
            }, 1) 
            setTimeout(function() {
                clearInterval(scrollDown)
            }, 1200)
        } else {
            this.showAboutThisSiteContent = false
            el.style.height = "0px"
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
        height:0px; 
        width:100%; 
        border:1px solid red; 
        position:relative;
        transition: height 1s;
        -webkit-transition: height 1s;
    }
</style>