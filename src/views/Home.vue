<template>
  <div class="home">
    <Hero/>
    <div class="fadein">
      <Portfolio/>
    </div>
    <div class="fadein">
      <Skills/>
    </div>
    <div class="fadein">
      <Stances/>
    </div>
    <div class="fadein">
      <Profile/>    
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Skills from '@/components/Skills'
import Stances from '@/components/Stances'
import Profile from '@/components/Profile'

export default {
  components: {
    Hero,
    Portfolio,
    Skills,
    Stances,
    Profile
  },
  created() {
    window.addEventListener('scroll', this.showComponent);
  },
  methods: {
    showComponent() {
      var element = document.getElementsByClassName('fadein');
      if (!element) return;

      var showTiming = window.innerHeight > 950 ? 200 : 80;
      var scrollY = window.pageYOffset;
      var windowH = window.innerHeight;

      for (var i = 0; i < element.length; i++) {
        var elementClientRect = element[i].getBoundingClientRect();
        var elementY = scrollY + elementClientRect.top;
        if (scrollY + windowH -showTiming > elementY) {
          element[i].classList.add('scrollin');
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  background: rgba(255, 255, 255, 0.7) url('../assets/home-bg.jpg') no-repeat fixed left bottom;
  background-size: cover;
  background-blend-mode: lighten;
  .fadein {
    opacity: 0;
    transform: translateY(50px);
    transition: all 1.0s;
    &.scrollin {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

@media (max-width: 768px) {
  .home {
    background: none;
  }
}
</style>

<noscript>
  <style scoped>
    .fadein {
      opacity: 1;
      transform: translate(0);
    }
  </style>
</noscript>