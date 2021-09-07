<template>
  <div class="button-bright" @click="clickToMore">{{ buttonText }}</div>
</template>

<script>
export default {
  props: {
    buttonText: String
  },
  methods: {
    clickToMore() {
      this.$emit('showMoreDetail')
    }
  }
}
</script>

<style lang="scss" scoped>
.button-bright {
  display: inline-block;
  width: 200px;
  padding: 20px;
  border-radius: 4px;
  background-color: #777;
  color: #fff;
  border: 1px solid #fff;
  letter-spacing: 1px;
  font-size: 2rem;
  &:hover{
    background-color: rgba(255, 255, 255, 0.4);
    transition: 0.2s;
    cursor: pointer;
  }
}

@media (max-width: 768px) {
  .button-bright {
    width: 150px;
    padding: 10px;
    font-size: 1.7rem;
    &:hover{
      background-color: #777;
      cursor: pointer;
    }
  }
}
</style>