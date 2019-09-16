<template>
    <div v-on:click="sound">
        <img id="play" src="~/assets/sound/audio_react_play.gif" alt="audio">
        <img id="pause" src="~/assets/sound/audio_react_pause.png" alt="audio">
        <p id="soundon">Audio On</p>
        <p id="soundoff">Audio Off</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            s: false
        }
    },

    methods: {
        sound(){
            const soundon = document.getElementById('soundon')
            const soundoff = document.getElementById('soundoff')
            const play = document.getElementById("play");
            const pause = document.getElementById("pause");
            
            if (this.s==false){
                this.s=true
                soundon.style.opacity = 0
                soundoff.style.opacity = 0.8
                play.style.opacity = 1
                pause.style.opacity = 0
            }else{
                this.s=false
                soundon.style.opacity = 0.8
                soundoff.style.opacity = 0
                play.style.opacity = 0
                pause.style.opacity = 1
            }
        }
    }
}
</script>

<style>
@media screen and (max-width: 1024px){
        #play{
        position: absolute;
        width: 80px;
        left: 10px;
        bottom: 10px;
        z-index: 50;
        opacity: 0;
        transition: .3s;
    }

    #pause{
        position: absolute;
        width: 80px;
        left: 10px;
        bottom: 10px;
        z-index: 50;
        opacity: 1;
        transition: .3s;
    }

    #soundon{
        position: absolute;
        bottom: 25px;
        left: 50px;
        color: white;
        opacity: .8;
        transition: .5s;
        z-index: 100;
        width: auto;

    }

    #soundoff{
        position: absolute;
        bottom: 25px;
        left: 50px;
        color: white;
        opacity: 0;
        transition: .5s;
        z-index: 100;
        width: auto;
    }
}

@media screen and (min-width: 1024px){
    #play{
        position: absolute;
        width: 100px;
        left: 50px;
        bottom: 30px;
        z-index: 50;
        opacity: 0;
        transition: .3s;
    }

    #pause{
        position: absolute;
        width: 100px;
        left: 50px;
        bottom: 30px;
        z-index: 50;
        opacity: 1;
        transition: .3s;
    }

    #soundon{
        position: absolute;
        bottom: 55px;
        left: 100px;
        color: white;
        opacity: .8;
        transition: .5s;
        z-index: 100;
        width: auto;

    }

    #soundoff{
        position: absolute;
        bottom: 55px;
        left: 100px;
        color: white;
        opacity: 0;
        transition: .5s;
        z-index: 100;
        width: auto;
    }
}


</style>