<template>
  <div class="home">
    <Hero></Hero>
    <Portfolio></Portfolio>
    <Tools></Tools>
    <Stances></Stances>
    <Profile></Profile>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Tools from '@/components/Tools'
import Stances from '@/components/Stances'
import Profile from '@/components/Profile'

export default {
  components: {
    Hero,
    Portfolio,
    Tools,
    Stances,
    Profile
  }
}
</script>
