<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap');

html {
  font-size: 62.5%;
}
*, *::before, *::after {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: 'Montserrat', "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif;
  line-height: 1;
  font-size: 1.6rem;
  color: #333;
  text-align: center;
}
a {
  vertical-align:baseline;
  background-color: transparent;
  text-decoration: none;
  color: #333;
  }
nav ul li {
  list-style:none;
}
h1, h2, h3, div, p, a, button, nav, ul, li, header {
  margin: 0;
}
</style>
