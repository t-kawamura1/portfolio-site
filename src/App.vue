<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
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
  background: rgba(255, 255, 255, 0.7) url('./assets/home-bg.jpg') no-repeat fixed left bottom;
  background-size: cover;
  background-blend-mode: lighten;
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
.button {
  display: inline-block;
  margin: 0 20px 20px;
  width: 200px;
  padding: 20px;
  border-radius: 4px;
  background-color: #777;
  color: #fff;
  letter-spacing: 1px;
  font-size: 2rem;
  &:hover {
    background-color: #555;
    transition: 0.2s;
  }
  &.bright {
    border: 1px solid #fff;
    &:hover{
      background-color: rgba(255, 255, 255, 0.4);
      transition: 0.2s;
    }
  }
}
.heading {
  margin-bottom: 60px;
  font-size: 5rem;
  font-weight: 400;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .button {
    width: 150px;
    padding: 10px;
    font-size: 1.7rem;
    &:hover {
      background-color: #777;
    }
    &.bright:hover{
      background-color: #777;
    }
  }
  .heading {
    margin-bottom: 40px;
    font-size: 3rem;
    font-weight: 300;
  }
}
</style>
