<template>
  <div id="app">
    <!-- <Loading v-show="loading"/> -->
    <router-view />
  </div>
</template>

<script>
// import Loading from '@/components/Loading'

export default {
  // components: {
  //   Loading
  // },
  // data() {
  //   return {
  //     loading: true
  //   }
  // },
  methods: {
    createTitleAndDescription(routeInstance) {
      if (routeInstance.meta.title) {
        const setTitle = routeInstance.meta.title + " | T.KAWAMURA ポートフォリオサイト";
        document.title = setTitle;
      } else {
        document.title = "T.KAWAMURA ポートフォリオサイト";
      }
      if (routeInstance.meta.desc) {
        const setDesc = routeInstance.meta.desc + " | T.KAWAMURA ポートフォリオサイト";
        document
          .querySelector("meta[name='description']")
          .setAttribute("content", setDesc);
      }
    },
  },
  mounted() {
    // setTimeout(() => {
    //   this.loading = false;
    // }, 1000);
    const routeInstance = this.$route;
    this.createTitleAndDescription(routeInstance);
  },
  watch: {
    $route(routeInstance) {
      this.createTitleAndDescription(routeInstance);
    },
  },
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
