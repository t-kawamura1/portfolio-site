<template>
  <div class="portfolio">
    <h2 class="heading">PORTFOLIO</h2>
    <div class="portfolio-container">
      <div class="portfolio-item">
        <img src="../assets/site-img-ex1.jpg" alt="サイトスクリーンショット" class="site-image">
        <div class="portfolio-title">MY PORTFOLIO 1</div>
        <a href="#" class="portfolio-link">https://hogehoge.jp</a>
        <p class="portfolio-text">
          私もすべて現にとんだ創作国というものの一方にしならなけれ。
          まあ今日に学習らはついにこうしたらくたたかもから講じと得ますには経験しないうて、
          そうには見せるですででう。詞をしないのはまあ昔にもしなだた。
        </p>
        <router-link to="/portfolio-detail" class="button bright">Read more</router-link>
      </div>
      <div class="portfolio-item">
        <img src="../assets/site-img-ex2.jpg" alt="サイトスクリーンショット" class="site-image">
        <div class="portfolio-title">MY PORTFOLIO 2</div>
        <a href="#" class="portfolio-link">https://hugahuga.jp</a>
        <p class="portfolio-text">
          私もすべて現にとんだ創作国というものの一方にしならなけれ。
          まあ今日に学習らはついにこうしたらくたたかもから講じと得ますには経験しないうて、
          そうには見せるですででう。詞をしないのはまあ昔にもしなだた。
        </p>
        <router-link to="/portfolio-detail" class="button bright">Read more</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.portfolio {
  padding: 100px 60px;
  color: #fff;
  background-color: #777;
  p {
    text-align: left;
  }
  .portfolio-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
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
      // &::before {
      //   content: '';
      //   display: block;
      //   position: absolute;
      //   top: 0;
      //   left: 0;
      //   width: 100%;
      //   height: 100%;
      //   background-color: rgba(0, 0, 0, 0.5);
      // }
      // &::after {
      //   content: 'COMING SOON';
      //   display: inline-block;
      //   position: absolute;
      //   width: 100%;
      //   color: #fff;
      //   font-size: 3rem;
      //   top: 20%;
      //   left: 0;
      //   letter-spacing: 3px;
      // }
    }
  }
}

@media (max-width: 768px) {
  .portfolio {
    padding: 50px 30px 40px;
    .portfolio-container {
      flex-direction: column;
      .portfolio-item {
        width: 100%;
        &:first-child {
          padding-bottom: 20px;
          border-bottom: 1px solid #fff;
        }
        &:last-child {
          margin-top: 50px;
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
  }
}
</style>
