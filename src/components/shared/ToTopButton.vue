<template>
  <div class="to-top-button" @click="clickTo">
    <span class="arrow"></span>
    <span class="top">TOP</span>
  </div>
</template>

<script>
export default {
  methods: {
    clickTo() {
      this.$emit('click-to');
    }
  }
}

</script>

<style lang="scss" scoped>
.to-top-button {
  display: block;
  position: relative;
  width: 50px;
  height: 50px;
  border: solid 2px #535353;
  border-radius: 4px;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
  .arrow {
    display: block;
    position: absolute;
    top: 8px;
    left: 15px;
    width: 15px;
    height: 15px;
    border-top: solid 3px #535353;
    border-left: solid 3px #535353;
    transform: rotate(45deg);
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 17px;
    left: 15px;
    width: 15px;
    height: 15px;
    border-top: solid 3px #535353;
    border-left: solid 3px #535353;
    transform: rotate(45deg);
  }
  .top {
    position: absolute;
    bottom: 3px;
    left: 9px;
    font-size: 1.4rem;
    font-weight: 700;
    color: #535353;
  }
}

@media (max-width: 768px) {
  
}
</style>