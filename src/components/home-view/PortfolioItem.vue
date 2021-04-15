<template>
  <div class="portfolio-item">
    <img :src="portfolioImgSrc" alt="サイトスクリーンショット" class="site-image">
    <div class="portfolio-title">{{ portfolioTitle }}</div>
    <a href="#" class="portfolio-link">{{ portfolioUrl }}</a>
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
  .site-image {
  display: block;
  margin-bottom: 50px;
  width: 100%;
  }
  .portfolio-title {
    font-size: 2.5rem;
    margin-bottom: 15px;
    letter-spacing: 1px;
  }
  .portfolio-link {
    display: inline-block;
    margin-bottom: 30px;
    color: #fff;
    font-weight: 300;
    &:hover {
      opacity: 0.8;
    }
  }
  .portfolio-text {
    display: inline-block;
    margin-bottom: 30px;
    line-height: 2;
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  &::after {
    content: 'COMING SOON';
    display: inline-block;
    position: absolute;
    width: 100%;
    color: #fff;
    font-size: 3rem;
    top: 20%;
    left: 0;
    letter-spacing: 3px;
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
      font-size: 2.2rem;
    }
    .portfolio-link:hover {
        opacity: 1;
    }
    // &::after {
    //   font-size: 2.5rem;
    //   top: 15%;
    //   letter-spacing: 2px;
    // }
  }
}
</style>