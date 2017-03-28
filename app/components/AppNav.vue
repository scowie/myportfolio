<template>
    <div>
        <!-- Fixed navbar -->
        <md-toolbar class="fixed-top-nav">
            <div class="md-toolbar-container" style="flex: 1;">
                <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
                    <md-icon>menu</md-cion>
                </md-button>
                
                <h2 class="md-title">Stephen Cowie</h2>
                
            </div>
            
            <md-speed-dial>
                <md-button style="border:none; box-shadow: 0px 0px" class="md-fab md-mini md-primary" md-fab-trigger>
                    <md-icon md-icon-morph @click.native="toggleAboutMe">expand_less</md-icon>
                    <md-icon @click.native="toggleAboutMe">expand_more</md-icon>
                </md-button>
            </md-speed-dial>
        
        </md-toolbar>
        <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
            <md-toolbar>
                <div class="md-toolbar-container">
                    <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
                        <md-icon>navigate_before</md-cion>
                    </md-button>

                    <h3 class="md-title">Stephen Cowie</h3>
                </div>
            </md-toolbar>

            <md-list>
                <md-list-item href="mailto:cowiestephenjames@gmail.com">
                    <span>cowiestephenjames@gmail.com</span>
                </md-list-item>
                <md-list-item href="https://github.com/scowie" target="_blank">
                    <md-icon>
                    <svg width="20px" height="20px" viewBox="0 0 48 47" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch -->
                        <title>Github-color</title>
                        <desc>Created with Sketch.</desc>
                        <defs></defs>
                        <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Color-" transform="translate(-700.000000, -560.000000)" fill="#3E75C3">
                                <path d="M723.9985,560 C710.746,560 700,570.787092 700,584.096644 C700,594.740671 706.876,603.77183 716.4145,606.958412 C717.6145,607.179786 718.0525,606.435849 718.0525,605.797328 C718.0525,605.225068 718.0315,603.710086 718.0195,601.699648 C711.343,603.155898 709.9345,598.469394 709.9345,598.469394 C708.844,595.686405 707.2705,594.94548 707.2705,594.94548 C705.091,593.450075 707.4355,593.480194 707.4355,593.480194 C709.843,593.650366 711.1105,595.963499 711.1105,595.963499 C713.2525,599.645538 716.728,598.58234 718.096,597.964902 C718.3135,596.407754 718.9345,595.346062 719.62,594.743683 C714.2905,594.135281 708.688,592.069123 708.688,582.836167 C708.688,580.205279 709.6225,578.054788 711.1585,576.369634 C710.911,575.759726 710.0875,573.311058 711.3925,569.993458 C711.3925,569.993458 713.4085,569.345902 717.9925,572.46321 C719.908,571.928599 721.96,571.662047 724.0015,571.651505 C726.04,571.662047 728.0935,571.928599 730.0105,572.46321 C734.5915,569.345902 736.603,569.993458 736.603,569.993458 C737.9125,573.311058 737.089,575.759726 736.8415,576.369634 C738.3805,578.054788 739.309,580.205279 739.309,582.836167 C739.309,592.091712 733.6975,594.129257 728.3515,594.725612 C729.2125,595.469549 729.9805,596.939353 729.9805,599.18773 C729.9805,602.408949 729.9505,605.006706 729.9505,605.797328 C729.9505,606.441873 730.3825,607.191834 731.6005,606.9554 C741.13,603.762794 748,594.737659 748,584.096644 C748,570.787092 737.254,560 723.9985,560" id="Github"></path>
                            </g>
                        </g>
                    </svg>
                    </md-icon>
                   <span>scowie</span>
                </md-list-item>
                <md-list-item href="https://www.linkedin.com/in/stephenjamescowie" target="_blank">
                    <md-icon>
                        <svg width="20px" height="20px" viewBox="0 0 44 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch -->
                            <title>LinkedIn-color</title>
                            <desc>Created with Sketch.</desc>
                            <defs></defs>
                            <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Color-" transform="translate(-702.000000, -265.000000)" fill="#007EBB">
                                    <path d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z" id="LinkedIn"></path>
                                </g>
                            </g>
                        </svg>
                    </md-icon>
                    <span>stephenjamescowie</span>
                </md-list-item>
                <md-list-item href="https://www.facebook.com/stephen.cowie" target="_blank">
                    <md-icon>
                        <svg width="20px" height="20px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch -->
                            <title>Facebook-color</title>
                            <desc>Created with Sketch.</desc>
                            <defs></defs>
                            <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Color-" transform="translate(-200.000000, -160.000000)" fill="#4460A0">
                                    <path d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z" id="Facebook"></path>
                                </g>
                            </g>
                        </svg>
                    </md-icon>
                    <span>stephen.cowie</span>
                </md-list-item>
                <md-list-item href="https://twitter.com/stephen_cowie" target="_blank">
                    <md-icon>
                        <svg width="20px" height="20px" viewBox="0 0 48 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch -->
                            <title>Twitter-color</title>
                            <desc>Created with Sketch.</desc>
                            <defs></defs>
                            <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Color-" transform="translate(-300.000000, -164.000000)" fill="#00AAEC">
                                    <path d="M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 348,168.735283" id="Twitter"></path>
                                </g>
                            </g>
                        </svg>
                    </md-icon>
                   <span>stephen_cowie</span>
                </md-list-item>
            </md-list>
        </md-sidenav>
   
        <div id="about-me">

            <div id="about-me-image-container" style="height:125x; width:120px; margin-top:20px; margin-left:20px; display:inline-block;">
                <img style="" src="https://s3.amazonaws.com/cowie-calkins/Screen+Shot+2017-03-02+at+9.27.05+PM.png">
            </div>
  
             <div id="about-me-writeup-container" style="margin-top:20px; min-width:300px; display:inline-block; padding-left:20px; vertical-align:top;">
                <p class="about-me-writeup-text" v-html="aboutme.text" style="text-align:justify">
                </p>
                <a style="cursor:pointer" v-if="!showResume" v-on:click="toggleResume">Full Resume...</a>
                <a style="cursor:pointer" v-if="showResume" v-on:click="toggleResume">Full Resume [ ]</a>

                <div v-show="showResume" id="resume" style="border:1px solid red; margin-top:75px; margin-left:25px">
                    <h3>Education</h3>
                    <ul>
                        <li>UNC Greensboro, MS Computer Science (3.96), Dec. 2015</li>
                        <li>North Carolina State University, MS Civil Engineering (3.75), 2004</li>
                        <li>Duke University, BS Biology (3.39), 1999</li>
                    </ul>
                    <h3>Technical Skills</h3>
                    <ul style="list-style: none;">
                        <li>
                            <label>Frontend:</label><span>   HTML, CSS, Javascript, Angular, React, Vue, Redux, JQuery, Gulp, Webpack</span>
                        </li>
                        <li>
                            <label>API Development:</label><span>   Express, Node.js, C# .NET Web Api, PHP, Go</span>
                        </li>
                        <li>
                            <label>Databases:</label><span>   MongoDB, Couchbase, DynamoDB, Postgres, MySQL</span>
                        </li>
                        <li>
                            <label>Cloud/Distributed Systems:</label><span>   Amazon Web Services, IBM Bluemix, Hadoop</span>
                        </li>
                    </ul>
                    <h3>Relevant Experience</h3>

                    <h3>Courses Completed</h3>

                    <h3>Professional History</h3>
                </div>
            </div>   
        </div>
        



    </div>
</template>

<script>
    import AboutMe from '../data/about-me'
    import $ from 'jquery'

    const getAppropriateHeightForAboutMe = () => {
        let imgHeight = document.getElementById("about-me-image-container").clientHeight
        let writeupHeight = document.getElementById("about-me-writeup-container").clientHeight    
        let writeupLeftPos = $("#about-me-writeup-container").position().left
        let appropriateHeight
        if(writeupLeftPos > 100) {
            appropriateHeight = (imgHeight > writeupHeight ? (imgHeight + 45) : (writeupHeight + 25))
        } else {
            appropriateHeight = imgHeight+45+writeupHeight
        }
        return appropriateHeight
    }
    
    const setAppropriateHeightForAboutMe = () => {console.log(getAppropriateHeightForAboutMe())
        document.getElementById("about-me").style.height = `${getAppropriateHeightForAboutMe()}px`
    }


    export default {
    data () {
        return {
            aboutme: AboutMe,
            showResume: false
        }
    },
    methods: {
            toggleLeftSidenav() {
                this.$refs.leftSidenav.toggle();
            },
            closeLeftSidenav() {
                this.$refs.leftSidenav.close();
            },
            toggleAboutMe() {
                const el = document.getElementById("about-me")
                if(!el.style.height || el.style.height == "0px") {
                    setAppropriateHeightForAboutMe()
                } else {
                    this.showResume = false
                    el.style.height = "0px"
                }
            },
            toggleResume() {
                if(!this.showResume){
                    this.showResume = true
                    setTimeout(function() {
                        setAppropriateHeightForAboutMe()
                    }, 10)
                } else {
                    this.showResume = false
                    setTimeout(function() {
                        setAppropriateHeightForAboutMe()
                    }, 10)
                }
            },
            open(ref) {
                console.log('Opened: ' + ref);
            },
            close(ref) {
                console.log('Closed: ' + ref);
            }
        }
    }
</script>

<style>
    .fixed-top-nav {
        z-index:3;
        position:fixed;
        width:100%;
    }

    #about-me {
        position:relative; 
        overflow:hidden; 
        z-index:2; 
        top:64px; 
        width:100%; 
        height: 0px; 
        border-bottom:1px solid gray;
        -webkit-transition: height 1s; /* Safari */
        transition: height 1s;
    }

    .about-me-writeup-text {
        margin-top:0px;
        font-size:14px;
    }
</style>