<template>
   <div>
        <div id="about-me-image-container" style="height:125x; width:120px; margin-top:20px; margin-left:20px; margin-right:20px; margin-bottom:10px; float:left;">
            <img style="" src="https://s3.amazonaws.com/cowie-public/AAEAAQAAAAAAAAKfAAAAJDNlZGIwM2FkLTgzM2EtNDIzYi04YmM5LTViNDdhNDllOGM3NQ.jpg">
        </div>

            <div id="about-me-writeup-container" style="margin-top:20px; margin-left:2px; min-width:300px; float:none; padding-left:20px; padding-right:20px; vertical-align:top; width:100%;">
            <p class="about-me-writeup-text" v-html="aboutme.text" style="text-align:justify; font-size:16px; line-height:150%;">
            </p>
            
        </div>   
    </div> 
        
</template>

<script>
 import AboutMe from '../data/about-me'

export default {
    name: 'aboutme',
  data () {
    return {
          aboutme: AboutMe
    }
  },
  methods: {

  }
}
</script>
    
<style>

</style>