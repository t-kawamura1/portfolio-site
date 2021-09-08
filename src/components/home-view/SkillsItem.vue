<template>
  <div class="skills-item">
    <div class="skill-title">{{ skillTitle }}</div>
    <img :src="skillImgSrc" alt="スキルイメージ" class="skill-image">
    <p class="skill-text">{{ skillText }}</p>
  </div>
</template>

<script>
export default {
  props: {
    skillTitle: String,
    skillImgSrc: String,
    skillText: String
  }
}
</script>

<style lang="scss" scoped>
.skills-item {
  padding-top: 20px;
  width: 30%;
  .skill-title {
    font-size: 2.4rem;
    margin-bottom: 30px;
    letter-spacing: 1px;
  }
  .skill-image {
    display: inline-block;
    margin-bottom: 20px;
    height: 180px;
  }
  .skill-text {
    line-height: 2;
    text-align: left;
  }
}

@media (max-width: 768px) {
  .skills-item {
    width: 100%;
    padding: 30px 0;
    border-bottom: 1px solid #777;
    &:first-child {
      padding-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
      padding-bottom: 0;
      border-bottom: none;
    }
    .skill-title {
      font-size: 2.0rem;
      margin: 10px 0 20px;
    }
    .skill-image {
      margin-bottom: 20px;
      width: 40%;
      height: 40%;
    }
    .skill-text {
      font-size: 1.4rem;
    }
  }
}
</style>