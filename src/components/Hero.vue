<template>
  <div class="hero">
    <h1 class="title">T.KAWAMURA</h1>
    <p class="sub-title">Make the world efficient and fun.</p>
    <div class="buttons">
      <div class="button">Portfolio</div>
      <div class="button">About me</div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.hero {
  color: #636363;
  padding: 190px 60px 220px;
  .title {
    margin-bottom: 40px;
    font-weight: 200;
    font-size: 7rem;
    letter-spacing: 4px;
  }
  .sub-title {
    margin-bottom: 80px;
    font-weight: 300;
    font-size: 2.8rem;
    letter-spacing: 1px;
  }
}

@media (max-width: 768px) {
  .hero {
    background: none;
    padding: 200px 30px 60px;
    .title {
      margin-bottom: 50px;
      font-size: 4rem;
      letter-spacing: 2px;
    }
    .sub-title {
      margin-bottom: 120px;
      font-size: 1.5rem;
    }
  }
}
</style>
