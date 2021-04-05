<template>
  <div class="home">
    <Hero></Hero>
    <Portfolio></Portfolio>
    <Skills></Skills>
    <Stances></Stances>
    <Profile></Profile>
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
  }
}
</script>

<style lang="scss" scoped>
.home {
  margin: 0;
}
</style>