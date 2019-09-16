<template>
<div>
    <div id="works">
        <video-work preview="design/insta_pub.mp4" title="Instagram" role="Editor" context="School" tools="PremierePro AfterEffects" :sound="muted" :number="page"/>
        <video-work preview="design/opjet.mp4" title="Opjet" role="MotionDesigner" context="Freelance" tools="Photoshop AfterEffects" :sound="muted" :number="page"/>        
        <video-work preview="design/motion.mp4" title="Motion Design" role="MotionDesigner" context="School" tools="AfterEffects" :sound="muted" :number="page"/>        
        <video-work preview="design/AMV.mp4" title="AMV"  role="Editor" context="Youtube" tools="Photoshop PremierePro AfterEffects" :sound="muted" :number="page"/>
        <image-work preview="design/mockupmmi.png" title="Logo MMI Troyes"  role="Designer" context="Contest" tools="Photoshop Illustrator" :number="page" />
    </div>
    <div v-if="mob" id="works-mob">
        <video-work-mob preview="design/insta_pub.mp4" title="Instagram" role="Editor" context="School" tools="PremierePro AfterEffects" :sound="muted" :number="1"/>
        <video-work-mob preview="design/opjet.mp4" title="Opjet" role="MotionDesigner" context="Freelance" tools="Photoshop AfterEffects" :sound="muted" :number="2"/>        
        <video-work-mob preview="design/motion.mp4" title="Motion Design" role="MotionDesigner" context="School" tools="AfterEffects" :sound="muted" :number="3"/>        
        <video-work-mob preview="design/AMV.mp4" title="AMV"  role="Editor" context="Youtube" tools="Photoshop PremierePro AfterEffects" :sound="muted" :number="4"/>
        <image-work-mob preview="design/mockupmmi.png" title="Logo MMI Troyes"  role="Designer" context="Contest" tools="Photoshop Illustrator" :number="5" />
    </div>
    <audio-button @click.native="sound" class="audio-button"/>
    <scroll-down />
</div>
</template>

<script>
import VideoWork from '~/components/VideoWork.vue'
import VideoWorkMob from '~/components/VideoWorkMob.vue'
import ImageWork from '~/components/ImageWork.vue'
import ImageWorkMob from '~/components/ImageWorkMob.vue'
import AudioButton from '~/components/AudioButton.vue'
import ScrollDown from '~/components/ScrollDown.vue'

import { TimelineMax } from 'gsap'

export default {
    components: {
        VideoWork,
        VideoWorkMob,
        ImageWork,
        ImageWorkMob,
        AudioButton,
        ScrollDown
    },
    data() {
        return{
            index: 0,
            works: [],
            wheel: 0,
            muted: true,
            page: 1,
            mob: false,
            mousewheelevt: "mousewheel",
        }
    },

    mounted() {
        this.works=this.$children
        this.works.forEach((work,i) => {
            work.index = i
        });
        this.mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" 
        if(window.matchMedia("(min-width: 1024px)").matches){
            this.mob=false;
            document.addEventListener(this.mousewheelevt, this.mouseWheelEvent)
        }else{
            this.mob=true;
        }
    },

    computed: {
        worksCount(){
            return this.works.length-2
        },
    },

    methods: {
        sound() {
            if(this.muted==true){
                this.muted=false
            }else{
                this.muted=true
            }
        },

        mouseWheelEvent(e) {
            let delta = e.wheelDelta ? e.wheelDelta : -e.detail
            
            if(this.mousewheelevt == "DOMMouseScroll"){
                if(delta < 0 && delta <= -30){
                    this.wheel -=30
                }else if(delta > 0 && delta >= 30){
                    this.wheel +=30
                }else{
                    this.wheel += delta*6
                }
            }else if(this.mousewheelevt == "mousewheel"){
                if(delta < 0 && delta <= -30){
                    this.wheel -=30
                }else if(delta > 0 && delta >= 30){
                    this.wheel +=30
                }else{
                    this.wheel += delta/5
                }
            }

            const el = document.getElementById("works")
            
            if(this.wheel<=500 && this.wheel>=-500){
                el.style.transform = "perspective(500px) translateZ("+-(this.wheel)+"px)"
                el.style.opacity = 1
                if(this.wheel<-300 && this.wheel>-500 && delta < 0){
                    el.style.opacity = 0;
                }else if(this.wheel<500 && this.wheel>300 && delta > 0){
                    el.style.opacity = 0;
                }
            }else if (this.wheel<=-500 && this.index < this.worksCount){
                if(this.index == this.worksCount - 1){
                    this.wheel = 500
                    this.index = 0
                    this.page = 1
                }else{
                    this.wheel = 500
                    this.index++
                    this.page++
                }
            }else if (this.wheel>=500 && this.index < this.worksCount){
                if(this.index == 0){
                    this.wheel = -500
                    this.index = this.worksCount-1
                    this.page = this.worksCount
                }else{
                    this.wheel = -500
                    this.index--
                    this.page--
                }
            }
        }
    },
    beforeDestroy(){
        document.removeEventListener(this.mousewheelevt, this.mouseWheelEvent)
       
    },
    transition: {
        mode: 'out-in',
        appear: true,
        enter(el, done) {
            const tl = new TimelineMax({ onComplete: done })
            tl.fromTo('.video-container', .8, { width: 0}, { width: '45vw'}, 0)
            tl.fromTo('.video-work-mob', .8, { width: 0}, { width: '70vw'}, 0)
            tl.fromTo('.image-container', .8, { width: 0}, { width: '45vw'}, 0)
            tl.fromTo('.image-container-mob', .8, { width: 0}, { width: '70vw'}, 0)
            tl.fromTo('.scroll-down', 1, { opacity: 0 }, { opacity: 1 }, 0)
            tl.fromTo('.text', 1, { opacity: 0}, { opacity: 1}, .1)

            if (this.$store.state.prevRoute == 'index') {
                tl.fromTo('.audio-button', 1, { opacity: 0, x: '-500'}, { opacity: 1, x: 0}, .1)
            }
        },
        leave(el, done) {
            const tl = new TimelineMax({ onComplete: done })
            tl.to('.video-container', .8, { width: 0, border: "0px solid grey" }, .3)
            tl.to('.video-container-mob', .8, { width: 0, border: "0px solid grey" }, .3)
            tl.to('.image-container', .8, { width: 0, border: "0px solid grey" }, .3)
            tl.to('.image-container-mob', .8, { width: 0, border: "0px solid grey" }, .3)
            tl.to('.scroll-down', 1, { opacity: 0 }, 0)
            tl.to('.text', 1, { opacity: 0}, .1)


            if (this.$store.state.nextRoute == 'index') {
                tl.to('.audio-button', 1, { opacity: 0}, 0)
            }
        }
    }
    // transition: {
    //     mode: 'out-in',
    //     enter(el, done) {
    //         console.log('enter')
    //         console.log(this.$store.state.prevRoute)
    //         console.log(this.$store.state.nextRoute)
    //         done()
    //     },
    //     leave(el, done) {
    //         console.log('leave')
    //         console.log(this.$store.state.prevRoute)
    //         console.log(this.$store.state.nextRoute)
    //         done()
    //     }
    // }
}
</script>

<style scoped>
@media screen and (max-width: 1024px) and (orientation: portrait){
    #works {
        display:none
    }

    #works-mob{
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .audio-button{
        display: none;
    }
}

@media screen and (max-width: 1024px) and (orientation: landscape){
    #works {
        display: none;
    }

    #works-mob{
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .audio-button{
        display: none;
    }
}

@media screen and (min-width: 1024px){
    #works {
        position: fixed;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 0.5s;
    }

    #works-mob{
        display: none;
    }

    .audio-button {
        position: fixed;
        bottom: 1vw;
        left: 3vw;
        width: 230px;
    }
}

</style>


