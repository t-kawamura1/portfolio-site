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
  font-size: 5rem;
  font-weight: 400;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .heading {
    margin-bottom: 40px;
    font-size: 3rem;
    font-weight: 300;
  }
}
</style>