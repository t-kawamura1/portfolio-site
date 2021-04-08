<template>
  <li class="nav-list">
    <div class="nav-list-item" v-for="navListItem in navListItems" :key="navListItem">
      <a href="#">{{ navListItem }}</a>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    navListItems: Array
  }
}
</script>

<style lang="scss" scoped>
.nav-list {
  display: flex;
  justify-content: space-between;
  .nav-list-item {
    display: inline-block;
    font-weight: 300;
    color: #636363;
    line-height: 40px;
    height: 40px;
    font-size: 2rem;
    &:hover {
      opacity: 0.5;
    }
  }
}

@media (max-width: 768px) {
  .nav-list {
    justify-content: space-between;
    .nav-list-item {
      line-height: 13px;
      height: 13px;
      font-size: 1.3rem;
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>