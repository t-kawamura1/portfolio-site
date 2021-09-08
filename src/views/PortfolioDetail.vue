<template>
  <div class="portfolio-detail" ref="portfolio-detail">
    <header class="portfolio-detail-header">
      <logo/>
      <nav class="nav">
        <ul class="nav-list">
          <nav-list-item
            nav-list-item-name="Lemon Sour DB"
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
      <div class="pf1-title">Lemon Sour DB</div>
      <div class="pf1-container">
        <div class="pf1-text-item">
          <p>市販レモンサワーデータベース兼アルコール摂取量計算アプリ。</p>
          <p>レモンサワーを選択してアルコール摂取量を計算、カレンダーに記録を反映することができます。</p>
          <p>フロントエンドをVue.jsで、バックエンドをRailsで構築しました。</p>
          <p class="p-last">環境をDockerで構築し、CircleCIで継続的インテグレーションを実施、最終はAWS FARGATEでデプロイしています。</p>
        </div>
        <hooper
          v-if="hooperSize"
          class="pf1-pc-images-slide"
          :settings="pcHooperSettings"
        >
          <slide>
            <img src="../assets/lsdb-pc-top.png" alt="ポートフォリオのイメージ" class="pf1-pc-image">
          </slide>
          <slide>
            <img src="../assets/lsdb-pc-sours-index.png" alt="ポートフォリオのイメージ" class="pf1-pc-image">
          </slide>
          <slide>
            <img src="../assets/lsdb-pc-sour.png" alt="ポートフォリオのイメージ" class="pf1-pc-image">
          </slide>
          <slide>
            <img src="../assets/lsdb-pc-calc.png" alt="ポートフォリオのイメージ" class="pf1-pc-image">
          </slide>
          <slide>
            <img src="../assets/lsdb-pc-calendar.png" alt="ポートフォリオのイメージ" class="pf1-pc-image">
          </slide>
          <slide>
            <img src="../assets/lsdb-pc-user.png" alt="ポートフォリオのイメージ" class="pf1-pc-image">
          </slide>
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
          <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
        <hooper
          v-else
          class="pf1-sp-images-slide"
          :settings="spHoperSettings"
        >
          <slide>
            <img src="../assets/lsdb-sp-top.png" alt="ポートフォリオのイメージ" class="pf1-sp-image">
          </slide>
          <slide>
            <img src="../assets/lsdb-sp-sours-index.png" alt="ポートフォリオのイメージ" class="pf1-sp-image">
          </slide>
          <slide>
            <img src="../assets/lsdb-sp-sour.png" alt="ポートフォリオのイメージ" class="pf1-sp-image">
          </slide>
          <slide>
            <img src="../assets/lsdb-sp-calc.png" alt="ポートフォリオのイメージ" class="pf1-sp-image">
          </slide>
          <slide>
            <img src="../assets/lsdb-sp-calendar.png" alt="ポートフォリオのイメージ" class="pf1-sp-image">
          </slide>
          <slide>
            <img src="../assets/lsdb-sp-user.png" alt="ポートフォリオのイメージ" class="pf1-sp-image">
          </slide>
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
          <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
        <table class="pf1-table">
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
              2.6.14<br>
              (4.5.13)
            </td>
          </tr>
          <tr>
            <td>バック</td>
            <td>
              Ruby on Rails<br>
              (Ruby)
            </td>
            <td>
              6.0.3.7<br>
              (2.7.2)
            </td>
          </tr>
          <tr>
            <td>
              テストフレームワーク
            </td>
            <td>
              Jest<br>
              Puppeteer<br>
              RSpec
            </td>
            <td>
              26.6.3<br>
              8.0.0<br>
              4.0.2
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
              20.10.8<br>
              (14-slim)<br>
              3.8
            </td>
          </tr>
          <tr>
            <td>ソースコード管理</td>
            <td>Github</td>
            <td>
              <a href="https://github.com/t-kawamura1/lemon-sour-db-front">
                https://github.com/t-kawamura1/lemon-sour-db-front
                <font-awesome-icon
                  class="pf1-table-link-icon"
                  icon="external-link-alt"
                ></font-awesome-icon>
              </a>
              <br>
              <a href="https://github.com/t-kawamura1/lemon-sour-db-api">
                https://github.com/t-kawamura1/lemon-sour-db-api
                <font-awesome-icon
                  class="pf1-table-link-icon"
                  icon="external-link-alt"
                ></font-awesome-icon>
              </a>
            </td>
          </tr>
          <tr>
            <td>CIツール</td>
            <td>CircleCI</td>
            <td>2.1</td>
          </tr>
          <tr>
            <td>ホスティング</td>
            <td>AWS ECS/FARGATE</td>
            <td>
              <a href="https://lemonsourdb.net">
                フロント https://lemonsourdb.net
                <font-awesome-icon
                  class="pf1-table-link-icon"
                  icon="external-link-alt"
                ></font-awesome-icon>
              </a>
              <br>
              <a href="https://lsdb-back.work">
                バック https://lsdb-back.work
                <font-awesome-icon
                  class="pf1-table-link-icon"
                  icon="external-link-alt"
                ></font-awesome-icon>
              </a>
            </td>
          </tr>
        </table>
      </div>
    </section>
    <section class="portfolio2" ref="portfolio2">
      <div class="pf2-title-box">
        <div class="pf2-title">T.KAWAMURA</div>
        <div class="pf2-title">ポートフォリオサイト</div>
      </div>
      <div class="pf2-container">
        <div class="pf2-image-item-wrapper">
          <div class="pf2-image-item">
            <div class="pf2-image-box">
              <img src="../assets/pfsite-overall.png" alt="ポートフォリオサイトのイメージ" class="pf2-image">
            </div>
            <p class="note">※ 画像は開発中の画面です。</p>
          </div>
        </div>
        <div class="pf2-text-item">
          <p>扱いに慣れるために、Vue.jsで初めて作成した静的サイト。</p>
          <p>シンプルで見やすいデザインを意識しました。</p>
          <p>規模の小さいサイトですが、学習目的でDockerを導入しています。</p>
          <p>この開発を通じてコンポネート・CSS設計の重要性を学びました。</p>
          <p class="p-last">開発過程についても、git-flowを意識したワークフローを取り入れています。</p>
          <table class="pf2-table">
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
                  <font-awesome-icon
                    class="pf2-table-link-icon"
                    icon="external-link-alt"
                  ></font-awesome-icon>
                </a>
              </td>
            </tr>
            <tr>
              <td>ホスティング</td>
              <td>Netlify</td>
              <td>
                <a href="https://t-kawamura.netlify.app">
                  https://t-kawamura.netlify.app
                  <font-awesome-icon
                    class="pf2-table-link-icon"
                    icon="external-link-alt"
                  ></font-awesome-icon>
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
import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  Navigation as HooperNavigation
} from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  components: {
    Logo,
    NavListItem,
    ToTopButton,
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation,
  },
  data() {
    return {
      show: false,
      pcHooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        autoPlay: true,
        playSpeed: 2000,
        infiniteScroll: true,
      },
      spHooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        vertical: true,
        autoPlay: true,
        playSpeed: 2000,
        infiniteScroll: true,
      },
      hooperSize: true,
    }
  },
  methods: {
    scrollToAnchorPoint(refName) {
      const el = this.$refs[refName];
      el.scrollIntoView({ behavior: 'smooth'});
    },
    judgeMediaQuery() {
      if (window.innerWidth > 768) {
        this.hooperSize = true;
      } else {
        this.hooperSize = false;
      }
    }
  },
  created() {
    window.addEventListener('scroll', () => {
      this.show = (window.scrollY > 400);
    });
    this.judgeMediaQuery();
  },
  mounted(){
    const title = "ポートフォリオ詳細 | T.KAWAMURA ポートフォリオサイト"
    const description = "Webエンジニアを目指す河村智之のポートフォリオサイトです。ここでは私のポートフォリオを紹介します。"
    document.title = title
    document.head.querySelector('[property$=title]').setAttribute('content', title)
    document.head.querySelector('[name="description"]').setAttribute('content', description)
    document.head.querySelector('[property$=description]').setAttribute('content', description)
    window.addEventListener('resize', this.judgeMediaQuery)
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
    .pf1-title {
      display: inline-block;
      font-size: 3rem;
      color: #636363;
      letter-spacing: 2px;
      margin-bottom: 60px;
    }
    .pf1-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1.8;
      .pf1-text-item {
        > p {
          text-align: center;
        }
        .p-last {
          margin-bottom: 30px;
        }
      }
      .pf1-pc-images-slide {
        width: 500px;
        height: 273px;
        margin-bottom: 40px;
        .hooper-slide {
          .pf1-pc-image {
            width: 500px;
            height: 273px;
            border-radius: 10px;
          }
        }
      }
      .pf1-table {
        border-collapse: collapse;
        background-color: #f1f1f1;
        th, td {
          border: solid 1px #636363;
          padding: 0 5px;
          > a {
            &:hover {
              opacity: 0.7;
            }
            .pf1-table-link-icon {
              margin-left: 5px;
            }
          }
        }
      }
    }
  }

  .portfolio2 {
    padding: 150px 60px 90px;
    background-color: #777;
    .pf2-title-box {
      margin-bottom: 90px;
      .pf2-title {
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
    .pf2-container {
      display: flex;
      justify-content: space-between;
      .pf2-image-item-wrapper {
        width: 476px;
        height: 580px;
        .pf2-image-item {
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
          .pf2-image-box {
            width: 474px;
            height: 500px;
            margin-bottom: 30px;
            overflow-y: scroll;
            -ms-overflow-style: none;
            scrollbar-width: none;
            &::-webkit-scrollbar {
              display:none;
            }
            .pf2-image {
              width: 474px;
              height: 1580px;
              &:hover {
                cursor: row-resize;
              }
            }
          }
        }
      }
      .pf2-text-item {
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
        .pf2-table {
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
              .pf2-table-link-icon {
                margin-left: 5px;
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

    .portfolio1{
      padding: 90px 20px 60px;
      .pf1-title {
        font-size: 2rem;
        margin-bottom: 40px;
        letter-spacing: 1px;
      }
      .pf1-container {
        .pf1-text-item {
          font-size: 1.4rem;
          line-height: 1.8;
        }
        .pf1-sp-images-slide {
          widows: 210px;
          height: 455px;
          margin-bottom: 20px;
          .pf1-sp-image {
            width: 210px;
            height: 455px;
            border-radius: 10px;
          }
        }
        .pf1-table {
          font-size: 1rem;
        }
      }
    }

    .portfolio2 {
      padding: 50px 10px;
      .pf2-title-box {
        margin-bottom: 30px;
        .pf2-title {
          display: block;
          font-size: 2rem;
          line-height: 1.5;
          &:last-child {
            margin-left: 0;
          }
        }
      }
      .pf2-container {
        flex-direction: column;
        align-items: center;
        font-size: 1.4rem;
        .pf2-image-item-wrapper {
          width: 318px;
          height: 400px;
          .pf2-image-item {
            width: 318px;
            height: 333px;
            &::before {
              height: 20px;
            }
            &::after {
              height: 20px;
            }
            .pf2-image-box {
              width: 316px;
              height: 333px;
              margin-bottom: 15px;
              overflow-y: scroll;
              -ms-overflow-style: none;
              scrollbar-width: none;
              &::-webkit-scrollbar {
                display:none;
              }
              .pf2-image {
                width: 316px;
                height: 1053px;
                &:hover {
                  cursor: row-resize;
                }
              }
            }
          }
        }
        .pf2-text-item {
          margin-left: 0;
          padding: 0 10px;
          line-height: 1.6;
          .pf2-table {
            font-size: 1rem;
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