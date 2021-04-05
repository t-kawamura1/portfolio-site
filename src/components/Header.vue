<template>
  <header class="header">
    <h1 class="logo"><router-link to="/">T.K</router-link></h1>
    <nav>
      <ul class="global-nav">
        <li class="nav-item"><a href="#" class="aaa">PORTFOLIO</a></li>
        <li class="nav-item"><a href="#">SKILLS</a></li>
        <li class="nav-item"><a href="#">STANCES</a></li>
        <li class="nav-item"><a href="#">PROFILE</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {

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
  height: 54px;
  a {
    display: inline-block;
    font-weight: 300;
    color: #636363;
    line-height: 40px;
    height: 40px;
    &:hover {
      opacity: 0.5;
    }
  }
  .global-nav {
    display: flex;
    justify-content: space-between;
    .nav-item {
      margin-right: 30px;
      > a {
        font-size: 1.1em;
      }
    }
  }
}
</style>
