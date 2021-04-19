<template>
  <div class="portfolio-detail" ref="portfolio-detail">
    <header class="portfolio-detail-header">
      <logo/>
      <nav class="nav">
        <ul class="nav-list">
          <nav-list-item
            nav-list-item-name="MY PORTFOLIO"
            @scrollTo="scrollToAnchorPoint('portfolio1')"
          />
          <nav-list-item
            nav-list-item-name="T.KWAMURA"
            @scrollTo="scrollToAnchorPoint('portfolio2')"
          />
        </ul>
      </nav>
    </header>
    <transition name="button-fade">
      <to-top-button
        v-if="show"
        @scrollTo="scrollToAnchorPoint('portfolio-detail')"
        class="to-top-button"
      />
    </transition>
    <section class="portfolio1" ref="portfolio1">
      <div class="portfolio1-title-box">
        <div class="portfolio1-title">MY PORTFOLIO</div>
      </div>
      <div class="portfolio1-container">
        <p>COMING SOON!</p>
      </div>
    </section>
    <section class="portfolio2" ref="portfolio2">
      <div class="portfolio2-title-box">
        <div class="portfolio2-title">T.KAWAMURA</div>
        <div class="portfolio2-title">ポートフォリオサイト</div>
      </div>
      <div class="portfolio2-container">
        <div class="portfolio2-image-item-wrapper">
          <div class="portfolio2-image-item">
            <div class="portfolio2-image-box">
              <img src="../assets/pfsite-overall.png" alt="ポートフォリオサイトのイメージ" class="portfolio2-image">
            </div>
            <p class="note">※ 画像は開発中の画面です。</p>
          </div>
        </div>
        <div class="portfolio2-text-item">
          <p>Vue.jsの扱いに慣れるため、試しに作成した静的サイト。</p>
          <p>シンプルで見やすいデザインを意識しました。</p>
          <p>開発の過程で、Atomic Designを始めとしたコンポーネント設計手法を学習。</p>
          <p>CSSについても、BEM等の適切な設計手法について学習。</p>
          <p>サイト・アプリの規模に応じた設計手法を採用していきます。</p>
          <p class="p-last">開発過程についても、git-flowを意識したワークフローを取り入れました。</p>
          <table class="portfolio2-table">
            <tr>
              <th>種類</th>
              <th>名前</th>
              <th>バージョン・URL</th>
            </tr>
            <tr>
              <td>フロント</td>
              <td>
                Vue.js<br>
                (Vue CLI)
              </td>
              <td>
                2.6.12<br>
                (4.5.12)
              </td>
            </tr>
            <tr>
              <td>テストツール</td>
              <td>
                Vue Test Utils<br>
                Jest
              </td>
              <td>
                1.1.3<br>
                26.6.3
              </td>
            </tr>
            <tr>
              <td>環境構築</td>
              <td>
                Docker<br>
                (Node.js)<br>
                Docker Compose
              </td>
              <td>
                20.10.5<br>
                (14.16.0-alpine)<br>
                3.8
              </td>
            </tr>
            <tr>
              <td>ソースコード管理</td>
              <td>Github</td>
              <td>
                <a href="https://github.com/t-kawamura1/portfolio-site">
                  https://github.com/t-kawamura1/portfolio-site
                </a>
              </td>
            </tr>
            <tr>
              <td>ホスティング</td>
              <td>Netlify</td>
              <td>
                <a href="https://t-kawamura.netlify.app">
                  https://t-kawamura.netlify.app
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from '@/components/shared/Logo'
import NavListItem from '@/components/shared/NavListItem'
import ToTopButton from '@/components/shared/ToTopButton'

export default {
  components: {
    Logo,
    NavListItem,
    ToTopButton,
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    scrollToAnchorPoint(refName) {
      const el = this.$refs[refName];
      el.scrollIntoView({ behavior: 'smooth'});
    }
  },
  created() {
    window.addEventListener('scroll', () => {
      this.show = (window.scrollY > 400);
    });
  },
  mounted(){
    const title = "ポートフォリオ詳細 | T.KAWAMURA ポートフォリオサイト"
    const description = "Webエンジニアを目指す河村智之のポートフォリオサイトです。ここでは私のポートフォリオを紹介します。"
    document.title = title
    document.head.querySelector('[property$=title]').setAttribute('content', title)
    document.head.querySelector('[name="description"]').setAttribute('content', description)
    document.head.querySelector('[property$=description]').setAttribute('content', description)
  }
}
</script>


<style lang="scss" scoped>
.portfolio-detail {
  .button-fade-enter-active, .button-fade-leave-active {
    transition: opacity 0.5s;
  }
  .button-fade-leave-to {
    opacity: 0;
  }

  .portfolio-detail-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #636363;
    padding: 0 30px;
    position: fixed;
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.7);
    width: 100%;
    height: 50px;
    .nav {
      width: 320px;
      .nav-list {
        display: flex;
        justify-content: space-between;
        padding: 0;
      }
    }
  }

  .to-top-button {
    position: fixed;
    z-index: 9;
    bottom: 10px;
    right: 10px;
  }

  .portfolio1 {
    padding: 150px 60px 100px;
    background-color: #f5f5f5;
    .portfolio1-title {
      display: inline-block;
      font-size: 3rem;
      color: #636363;
      letter-spacing: 1px;
      margin-bottom: 60px;
    } 
  }

  .portfolio2 {
    padding: 150px 60px;
    background-color: #777;
    .portfolio2-title-box {
      margin-bottom: 90px;
      .portfolio2-title {
        display: inline-block;
        font-size: 3rem;
        color: #fff;
        letter-spacing: 2px;
        &:last-child {
          margin-left: 20px;
          letter-spacing: 1px;
        }
      }
    }
    .portfolio2-container {
      display: flex;
      justify-content: space-between;
      .portfolio2-image-item-wrapper {
        width: 476px;
        height: 580px;
        .portfolio2-image-item {
          position: relative;
          width: 476px;
          height: 500px;
          border-right: solid 1px #555;
          border-left: solid 1px #555;
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            background: linear-gradient(#555, rgba(0, 0, 0, 0));
            width: 100%;
            height: 40px;
          }
          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            background: linear-gradient(to top,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
            width: 100%;
            height: 40px;
          }
          .portfolio2-image-box {
            width: 474px;
            height: 500px;
            margin-bottom: 30px;
            overflow-y: scroll;
            -ms-overflow-style: none;
            scrollbar-width: none;
            &::-webkit-scrollbar {
              display:none;
            }
            .portfolio2-image {
              width: 474px;
              height: 1580px;
              &:hover {
                cursor: row-resize;
              }
            }
          }
        }
      }
      .portfolio2-text-item {
        line-height: 2;
        color: #fff;
        margin-left: 30px;
        > p {
          text-align: left;
          letter-spacing: 1px;
        }
        .p-last {
          margin-bottom: 30px;
        }
        .portfolio2-table {
          border-collapse: collapse;
          background-color: #666;
          th, td {
            border: solid 1px #fff;
            padding: 0 5px;
            > a {
              color: #fff;
              &:hover {
                opacity: 0.7;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .portfolio-detail {
    *:hover {
      opacity: 1;
    }

    .portfolio-detail-header {
      padding: 0 10px;
      height: 40px;
      .nav {
        width: 200px;
        height: 40px;
        .nav-list {
          padding: 0;
        }
      }
    }

    .portfolio2 {
      padding: 50px 10px;
      .portfolio2-title-box {
        margin-bottom: 30px;
        .portfolio2-title {
          display: block;
          font-size: 2rem;
          line-height: 2;
          &:last-child {
            margin-left: 0;
          }
        }
      }
      .portfolio2-container {
        flex-direction: column;
        align-items: center;
        font-size: 1.4rem;
        .portfolio2-image-item-wrapper {
          width: 318px;
          height: 400px;
          .portfolio2-image-item {
            width: 318px;
            height: 333px;
            &::before {
              height: 20px;
            }
            &::after {
              height: 20px;
            }
            .portfolio2-image-box {
              width: 316px;
              height: 333px;
              margin-bottom: 15px;
              overflow-y: scroll;
              -ms-overflow-style: none;
              scrollbar-width: none;
              &::-webkit-scrollbar {
                display:none;
              }
              .portfolio2-image {
                width: 316px;
                height: 1053px;
                &:hover {
                  cursor: row-resize;
                }
              }
            }
          }
        }
        .portfolio2-text-item {
          margin-left: 0;
          .portfolio2-table {
            th, td {
              > a:hover {
                  opacity: 1;
              }
            }
          }
        }
      }
    }
  }
}
</style>