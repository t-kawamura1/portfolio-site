<template>
  <div class="portfolio-item">
    <img :src="portfolioImgSrc" alt="サイトスクリーンショット" class="site-image">
    <div class="portfolio-title">{{ portfolioTitle }}</div>
    <a href="https://t-kawamura.netlify.app" class="portfolio-link">{{ portfolioUrl }}</a>
    <p class="portfolio-text">{{ portfolioText }}</p>
    <button-bright button-text="もっと詳しく" @showMoreDetail="toPortfolioDetail"/>
  </div>
</template>

<script>
import ButtonBright from '@/components/home-view/ButtonBright'

export default {
  components:{
    ButtonBright
  },
  props: {
    portfolioImgSrc: String,
    portfolioTitle: String,
    portfolioUrl: String,
    portfolioText: String
  },
  methods: {
    toPortfolioDetail() {
      this.$router.push('portfolio-detail')
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio-item {
  width: 45%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .site-image {
  margin-bottom: 50px;
  width: 100%;
  }
  .portfolio-title {
    font-size: 2.5rem;
    margin-bottom: 15px;
    letter-spacing: 1px;
  }
  .portfolio-link {
    margin-bottom: 30px;
    color: #fff;
    font-weight: 300;
    &:hover {
      opacity: 0.8;
    }
  }
  .portfolio-text {
    margin-bottom: 30px;
    line-height: 2;
    text-align: left;
  }
}

@media (max-width: 768px) {
  .portfolio-item {
    width: 100%;
    &:first-child {
      padding-bottom: 40px;
      border-bottom: 1px solid #fff;
    }
    &:last-child {
      padding-top: 50px;
    }
    .site-image {
      margin-bottom: 30px;
    }
    .portfolio-title {
      font-size: 1.8rem;
    }
    .portfolio-link {
      font-size: 1.5rem;
    }
    .portfolio-link:hover {
        opacity: 1;
    }
    .portfolio-text {
      font-size: 1.4rem;
    }
    &:first-child::after {
      font-size: 2.5rem;
      top: 25%;
      letter-spacing: 2px;
    }
  }
}
</style>