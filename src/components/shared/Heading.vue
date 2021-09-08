<template>
  <h2 class="heading">{{ heading }}</h2>
</template>

<script>
export default {
  props: {
    heading: String
  },
}
</script>

<style lang="scss" scoped>
.heading {
  margin-bottom: 60px;
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 1px;
  &::before, &::after {
    content: '';
    display: inline-block;
    width: 30px;
    height: 3px;
    margin: 0 10px;
    border-bottom: solid 3px;
  }
}

@media (max-width: 768px) {
  .heading {
    margin-bottom: 40px;
    font-size: 2.6rem;
    font-weight: 300;
    &::before, &::after {
      width: 30px;
      height: 2px;
      margin: 0 10px;
      border-bottom: solid 2px;
    }
  }
}
</style>