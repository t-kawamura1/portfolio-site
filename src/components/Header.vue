<template>
  <header class="header">
    <h1 class="logo"><router-link to="/">T.K</router-link></h1>
    <nav class="nav">
      <ul class="nav-ul">
        <nav-list-item :navListItems="navListItems"/>
      </ul>
    </nav>
  </header>
</template>

<script>
import NavListItem from '@/components/shared/NavListItem'

export default {
  components: {
    NavListItem
  },
  data() {
    return {
      navListItems: [
        'PORTFOLIO',
        'SKILLS',
        'STANCES',
        'PROFILE'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #636363;
  padding: 0 30px;
  position: fixed;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 50px;
  .logo > a {
    display: inline-block;
    font-weight: 300;
    color: #636363;
    line-height: 40px;
    height: 40px;
    &:hover {
      opacity: 0.5;
    }
  }
  .nav {
    width: 500px;
    .nav-ul {
      padding: 0;
    }
  }
}

@media (max-width: 768px) {
  .header {
    justify-content: space-between;
    padding: 0 0 0 10px;
    a:hover {
      opacity: 1;
    }
    .logo > a {
      font-size: 2.6rem;
      line-height: 26px;
      height: 26px;
      &:hover {
        opacity: 1;
      }
    }
    .nav {
      width: 270px;
      .nav-ul {
        padding: 0;
      }
    }
  }
}
</style>
