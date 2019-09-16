<template>
  <div>
    <div class="home">
      <video class="name" src="~/assets/home/hi+name.mp4" autoplay loop muted></video>
      <div class="networks">
        <a href="https://www.youtube.com/channel/UC4rtuyKaS4IMZ-cYpyFI-cg/featured?disable_polymer=true" target="_blank">
          <img src="~/assets/home/youtube.svg" alt="Youtube"></a>
        <a href="https://www.instagram.com/bryan_chg_/" target="_blank">
          <img href="" src="~/assets/home/linkedin.svg" alt="Linkedin">
        </a>
        <a href="https://www.linkedin.com/in/bryan-chung/" target="_blank">
          <img src="~/assets/home/instagram.svg" alt="Instagram">
        </a>
        <a href="mailto:bchung@bryanchung.fr">
          <img src="~/assets/home/mail.svg" alt="Enveloppe">
        </a>
      </div>
    </div>
    
    <scroll-down />

    <div class="skills">
      <h1>Skills</h1>
      <div class="icons">
        <div class="icon">
          <img src="~/assets/home/uxui.svg" alt="ux ui design icon">
          <p>UX/UI Design</p>
        </div>
        <div class="icon">
          <img src="~/assets/home/dev.svg" alt="dev icon">
          <p>Front Developement</p>
        </div>
        <div class="icon">
          <img src="~/assets/home/video.svg" alt="video icon">
          <p>Motion Design</p>
        </div>
        <div class="icon">
          <img src="~/assets/home/design.svg" alt="ux ui design icon">
          <p>Graphic Design </p>
        </div>
      </div>
    </div>

    <div class="about">
      <h1>About</h1>
      <p>
      Je suis un développeur front-end et designer français passionné par l'univers artistique depuis l'enfance. 
      J’ai toujours aimé créer quelque soit le domaine : image, vidéo, site web… 
      Actuellement diplômé d’un DUT MMI et étudiant à IIM,
      je continue à développer mes compétences artistiques dans l’espoir d’exercer un métier dans la création 
      et devenir un designer polyvalent.
      Je vous invite à regarder les divers projets que j'ai réalisé.
      </p>
      <a href="/" target="_blank" class="CV">Voir mon CV</a>
    </div>

    <div class="networks-mob">
        <a href="https://www.youtube.com/channel/UC4rtuyKaS4IMZ-cYpyFI-cg/featured?disable_polymer=true" target="_blank">
          <img src="~/assets/home/youtube.svg" alt="Youtube"></a>
        <a href="https://www.instagram.com/bryan_chg_/" target="_blank">
          <img href="" src="~/assets/home/linkedin.svg" alt="Linkedin">
        </a>
        <a href="https://www.linkedin.com/in/bryan-chung/" target="_blank">
          <img src="~/assets/home/instagram.svg" alt="Instagram">
        </a>
        <a href="mailto:bchung@bryanchung.fr">
          <img src="~/assets/home/mail.svg" alt="Enveloppe">
        </a>
    </div>

    <footer>
        <p>Copyright © 2019 Bryan CHUNG</p>
    </footer>
  </div>
</template>

<script>
import ScrollDown from '~/components/ScrollDown.vue'

import { TimelineMax } from 'gsap'

export default {
  components: {
    ScrollDown,
  },
  
  transition:{
    mode:"out-in",
    appear: true,

    enter(el,done){
      const tl= new TimelineMax({onComplete : done})

      tl.fromTo('.name', 1, { opacity: 0, x:'-500' }, { opacity: .9, x:0 }, 0 )
      tl.fromTo('.networks', 1, { opacity: 0, x:'200' }, { opacity: .9, x:0 }, .1 )
      tl.fromTo('.skills', 1, { opacity: 0 }, { opacity: 1 }, .1)
      tl.fromTo('.about', 1, { opacity: 0 }, { opacity: 1 }, .1)
      tl.fromTo('.networks-mob', 1, { opacity: 0 }, { opacity: 1 }, .1)
      tl.fromTo('.scroll-down', 1, { opacity: 0 }, { opacity: 1 }, .2)

    },
    leave(el,done){
      const tl= new TimelineMax({onComplete : done})
      
      tl.to('.name', 1, { opacity: 0 }, 0 )
      tl.to('.networks', 1, { opacity: 0 }, 0 )
      tl.to('.skills', 1, { opacity: 0 }, 0 )
      tl.to('.about', 1, { opacity: 0 }, 0 )
      tl.to('.networks-mob', 1, { opacity: 0 }, 0 )
      tl.to('.scroll-down', 1, { opacity: 0 }, 0 )

    }
  }
}
</script>

<style scoped>

@media screen and (max-width: 1024px) and (orientation: portrait)
{
  .home{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
  }

  .name{
    width: 100vw;
    border: none;
    z-index: 0;
    margin: 0px;
    padding: 0px;
    opacity: .9;

  }

  .networks{
    display: none;
  }

  .networks-mob{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 30vh;
    width: 90vw;
    margin: auto;
  }

  .networks-mob img{
    width: 8vw;
    margin: 25px 0px 25px;
    opacity: .9;
    transition: .5s;
  }

  .networks-mob img:hover{
    opacity: .5;
    transition: .5s;
  }

  .skills{
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .skills .icons{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 2vw;

  }

  .skills img{
    width: 13vw;
  }

  .about{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 80vh;
  }

  .about p{
    opacity: .7;
    width: 80vw;
    text-align: justify;
    line-height: 1.5;

  }

}


@media screen and (max-width: 1024px) and (orientation: landscape)
{
  .home{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
  }

  .name{
    width: 45vw;
    border: none;
    z-index: 0;
    margin: 0px;
    padding: 0px;
    opacity: .9;

  }

  .networks{
    display: none;
  }

  .networks-mob{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 30vh;
    width: 90vw;
    margin: auto;
  }

  .networks-mob img{
    width: 5vw;
    margin: 25px 0px 25px;
    opacity: .9;
    transition: .5s;

  }

  .networks-mob img:hover{
    opacity: .5;
    transition: .5s;
  }

  .skills{
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .skills .icons{
    width: 80vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 2vw;

  }

  .skills .icons .icon{
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: .7;

  }

  .skills img{
    width: 8vw;
  }

  .about{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  .about p{
    opacity: .7;
    width: 80vw;
    text-align: justify;
    line-height: 1.5;

  }
}

@media screen and (min-width: 1024px)
{
  .home{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
  }

  .name{
    width: 45vw;
    border: none;
    z-index: 0;
    margin: 0px;
    padding: 0px;
    opacity: .9;

  }

  .networks-mob{
    display: none;
  }

  .networks{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 100px;

  }

  .networks img{
    width: 25px;
    margin: 25px 0px 25px;
    opacity: .9;
    transition: .5s;

  }

  .networks img:hover{
    opacity: .5;
    transition: .5s;
  }

  .skills{
    height: 50vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .skills .icons{
    width: 80vw;
    display: flex;
    justify-content: space-around;
    margin: 2vw;

  }

  .skills .icons .icon{
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: .7;

  }

  .skills img{
    width: 5vw;
  }

  .about{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 80vh;
  }

  .about p{
    opacity: .7;
    width: 50vw;
    text-align: justify;
    line-height: 1.5;
    margin: 2vw;

  }
}

.skills .icons .icon{
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: .7;

}

.skills h1{
  opacity: .9;
  margin-bottom: 50px;
}

.about h1{
  font-family: 'Century Gothic';
  opacity: .9;

}

.about .CV{
  border: solid 1px white;
  border-radius: 100px;
  width: auto;
  opacity: .7;
  color: white;
  text-decoration: none;
  padding: .6rem 1.2rem;
  transition: .5s;

}

.about .CV:hover{
  border: solid 1px white;
  color: black;
  background: white;
  opacity: 1;
  transition: .5s;
}

footer{
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: .7;
  height: 20vh;
}
</style>

