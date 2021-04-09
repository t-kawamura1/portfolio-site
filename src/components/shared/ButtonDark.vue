<template>
  <div class="button-dark" @click="clickToScroll">{{ buttonText }}</div>
</template>

<script>
export default {
  props: {
    buttonText: String
  },
  methods: {
    clickToScroll() {
      this.$emit('scroll-to')
    }
  }
}
</script>

<style lang="scss" scoped>
.button-dark {
  display: inline-block;
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
    cursor: pointer;
  }
}

@media (max-width: 768px) {
  .button-dark {
    // width: 150px;
    // padding: 10px;
    font-size: 1.7rem;
    &:hover {
      background-color: #777;
    }
  }
}
</style>