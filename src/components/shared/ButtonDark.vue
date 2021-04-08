<template>
  <div class="button-dark">{{ buttonText }}</div>
</template>

<script>
export default {
  props: {
    buttonText: String
  },
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