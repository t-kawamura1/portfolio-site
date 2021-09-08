<template>
  <div class="stances-item">
    <div class="stance-title">{{ stanceTitle }}</div>
    <p class="stance-text">{{ stanceText }}</p>
  </div>
</template>

<script>
export default {
  props: {
    stanceTitle: String,
    stanceText: String
  }
}
</script>

<style lang="scss" scoped>
.stances-item {
  width: 40%;
  .stance-title {
    font-size: 2rem;
    margin-bottom: 30px;
  }
  .stance-text {
    line-height: 2;
    text-align: left;
    margin-bottom: 60px;
  }
}

@media (max-width: 768px) {
  .stances-item {
    width: 100%;
    .stance-title {
      font-size: 2rem;
      margin-bottom: 15px;
    }
    .stance-text {
      margin-bottom: 50px;
      font-size: 1.4rem;
    }
    // &:nth-child(2) {
    //   border-bottom: 1px solid #fff;
    //   margin-bottom: 40px;
    // }
  }
}
</style>