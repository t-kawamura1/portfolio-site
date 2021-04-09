<template>
  <div class="home">
    <div class="hero">
      <h1 class="title">T.KAWAMURA</h1>
      <p class="sub-title">Make the world efficient and fun.</p>
      <div class="hero-buttons-box">
        <button-dark button-text="Portfolio"/>
        <button-dark button-text="About me"/>
      </div>
    </div>
    <div class="portfolio fadein">
      <heading heading="PORTFOLIO"/>
      <div class="portfolio-container">
        <portfolio-item
          :portfolioImgSrc="portfolioImgSrc[0]"
          portfolio-title="MY PORTFOLIO 1"
          portfolio-url="https://hogehoge.jp"
          portfolio-text="
            私もすべて現にとんだ創作国というものの一方にしならなけれ。
            まあ今日に学習らはついにこうしたらくたたかもから講じと得ますには経験しないうて、
            そうには見せるですででう。詞をしないのはまあ昔にもしなだた。
          "
        />
        <portfolio-item
          :portfolioImgSrc="portfolioImgSrc[1]"
          portfolio-title="MY PORTFOLIO 2"
          portfolio-url="https://hugahuga.jp"
          portfolio-text="
            私もすべて現にとんだ創作国というものの一方にしならなけれ。
            まあ今日に学習らはついにこうしたらくたたかもから講じと得ますには経験しないうて、
            そうには見せるですででう。詞をしないのはまあ昔にもしなだた。
          "
        />
      </div>
    </div>
    <div class="skills fadein">
      <heading heading="SKILLS"/>
      <div class="skills-container">
        <skills-item
          skill-title="SERVER-SIDE"
          :skillImgSrc="skillImgSrc[0]"
          skill-text="
            サーバーサイドの技術として、Ruby on Railsを学習中。
            ポートフォリオでは、Rails5をAPIモードで活用。
            適切なクエリ処理を心がけます。
          "
        />
        <skills-item
          skill-title="FRONT-END"
          :skillImgSrc="skillImgSrc[1]"
          skill-text="
            フロントエンドの技術として、Vue.jsを学習中。
            ポートフォリオのフロント実装に採用。当サイトはVue.jsのみで作成。
            適切なコンポーネント設計を心がけます。今後はNuxt.jsや他フレームワークにもチャレンジしたい。
          "
        />
        <skills-item
          skill-title="INFRASTRUCTURE"
          :skillImgSrc="skillImgSrc[2]"
          skill-text="
            環境の構築にはDockerを活用。
            本番環境はAWSの各種サービスを活用。
            必要に応じてモダンな開発環境に適応していきます。
          "
        />
      </div>
    </div>
    <div class="stances fadein">
      <heading heading="STANCES"/>
      <div class="stances-title">世の中を効率的に、かつ おもしろく</div>
      <div class="stances-container">
        <stances-item
          stance-title="効率"
          stance-text="
            効率化はすべての人の利益になります。人々を単純作業の煩わしさから解放して、
            より良い業務等の運用・改善のサイクルへと導くことができます。
            プログラマーの三大美徳の一つ「怠惰」に深く共感し、すべての物事において「効率」を追求していきます。
          "
        />
        <stances-item
          stance-title="おもしろさ"
          stance-text="
            世の中に革新や価値を届けることは「おもしろい」ことです。自分の仕事が世の中に少しでも影響を与えることができれば、
            それ以上のやりがいはありません。ワクワクします。その原動力になるためには、複雑な物事を解決する「技術力」が欠かせません。
            どのような需要や要望にも応える技術力を身につけていきます。
          "
        />
        <div class="stances-figure-item">
          <div class="stance-figure">
            効率 楽 人 未来 幸福
          </div>
          <div class="keyword-box">
            <div class="keyword-choice">幸福</div>
            <p class="keyword-text">
              私もすべて現にとんだ創作国というものの一方にしならなけれ。
              まあ今日に学習らはついにこうしたらくたたかもから講じと得ますには経験しないうて。
            </p>
          </div>
        </div>
      </div>
    </div>   
    <div class="profile fadein">
      <heading heading="PROFILE"/>
      <div class="profile-container">
        <div class="profile-image-item">
          <img src="../assets/my-image.jpg" alt="作成者のイメージ" class="my-image"> 
        </div>
        <div class="profile-item">
          <div class="my-name">河村 智之</div>
          <p class="profile-text">
            2021年、現在転職活動中の29歳。
            京都府出身。
            趣味はJリーグ観戦、ガンバ大阪サポーター。
            2021年3月、思うところあって5年勤めた京都市役所を退職。
            世の中をもっと効率的に、かつおもしろいものにするために、Webエンジニアを志す。
          </p>
        </div>
        <div class="external-link-item">
          <a href="https://github.com/t-kawamura1" class="github"><font-awesome-icon :icon="['fab', 'github']" /></a>
          <a href="https://twitter.com/kossari" class="twitter"><font-awesome-icon :icon="['fab', 'twitter-square']" /></a>
          <a href="https://itiiki.hatenablog.com/" class="hatena"><img src="../assets/hatena.svg" alt="はてなブログロゴ" class="hatena-logo"></a>
          <a href="https://www.wantedly.com/id/t_kawa/connections/impression" class="wantedly"><img src="../assets/wantedly.svg" alt="wantedlyロゴ" class="wantedly-logo"></a>
          <a href="https://qiita.com/t-kawamura1" class="qiita"><img src="../assets/qiita.png" alt="Qiitaロゴ" class="qiita-logo"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from '@/components/shared/Heading'
import ButtonDark from '@/components/shared/ButtonDark'
import PortfolioItem from '@/components/shared/PortfolioItem'
import SkillsItem from '@/components/shared/SkillsItem'
import StancesItem from '@/components/shared/StancesItem'

export default {
  components: {
    Heading,
    ButtonDark,
    PortfolioItem,
    SkillsItem,
    StancesItem,
  },
  data() {
    return {
      portfolioImgSrc: [
        require('@/assets/site-img-ex1.jpg'),
        require('@/assets/site-img-ex2.jpg')
      ],
      skillImgSrc: [
        require('@/assets/rails.svg'),
        require('@/assets/vue.svg'),
        require('@/assets/dockeraws.png')
      ]
    }
  },
  created() {
    window.addEventListener('scroll', this.showComponent);
  },
  methods: {
    showComponent() {
      var element = document.getElementsByClassName('fadein');
      if (!element) return;
      var showTiming = window.innerHeight > 950 ? 200 : 80;
      var scrollY = window.pageYOffset;
      var windowH = window.innerHeight;
      for (var i = 0; i < element.length; i++) {
        var elementClientRect = element[i].getBoundingClientRect();
        var elementY = scrollY + elementClientRect.top;
        if (scrollY + windowH -showTiming > elementY) {
          element[i].classList.add('scrollin');
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  background: rgba(255, 255, 255, 0.7) url('../assets/home-bg.jpg') no-repeat fixed left bottom;
  background-size: cover;
  background-blend-mode: lighten;
  .fadein {
    opacity: 0;
    transform: translateY(50px);
    transition: all 1.0s;
    &.scrollin {
      opacity: 1;
      transform: translateY(0);
    }
  }

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
    .hero-buttons-box {
      display: flex;
      margin: 0 auto;
      justify-content: space-between;
      width: 450px;
    }
  }

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
      
    }
  }

  .skills {
    padding: 100px 60px;
    background-color: #f5f5f5;
    .skills-container {
      display: flex;
      justify-content: space-between;
    }
  }

  .stances {
    padding: 100px 60px;
    background-color: #777;
    color: #fff;
    .stances-title {
      font-size: 2.5rem;
      margin-bottom: 60px;
      letter-spacing: 1px;
    }
    .stances-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      .stances-figure-item {
        width: 100%;
        .stance-figure {
          width: 100%;
          margin-bottom: 60px;
          font-size: 2.5rem;
        }
        .keyword-box {
          margin: 0 auto;
          width: 60%;
          .keyword-choice {
            display: inline-block;
            vertical-align: middle;
            width: 30%;
            height: 100%;
            font-size: 2.5rem;
          }
          .keyword-text {
            display: inline-block;
            vertical-align: middle;
            line-height: 2;
            width: 70%;
            height: 100%;
          }
        }
      }
    }
  }

  .profile {
    padding: 100px 60px 100px;
    color: #636363;
    p {
      text-align: left;
    }
    .profile-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      color: #333;
      .profile-image-item {
        width: 40%;
        flex-grow: 1;
        position: relative; 
        .my-image {
          width: 55%;
          border-radius: 50%;
        }
      }
      .profile-item {
        width: 60%;
        text-align: left;
        vertical-align: middle;
        flex-grow: 1;
        margin-bottom: 30px;
        .my-name {
          margin-bottom: 30px;
          font-size: 2.5rem;
        }
        .profile-text {
          line-height: 2;
        }
      }
      .external-link-item {
        display: flex;
        align-items: center;
        .github {
          font-size: 4.3rem;
          margin-right: 30px;
        }
        .twitter {
          font-size: 4.5rem;
          margin-right: 20px;
        }
        .hatena {
          margin-right: 5px;
          .hatena-logo {
            width: 60px;
            height: 60px;
          }
        }
        .wantedly {
          margin-right: 15px;
          .wantedly-logo {
            width: 60px;
            height: 60px;
          }
        }
        .qiita-logo {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .home {
    background: none;

    .hero {
      background: none;
      padding: 200px 30px 60px;
      .title {
        margin-bottom: 50px;
        font-size: 4rem;
        letter-spacing: 2px;
      }
      .sub-title {
        margin-bottom: 80px;
        font-size: 1.5rem;
      }
      .hero-buttons-box {
        flex-direction: column;
        width: 200px;
        height: 170px;
        margin-bottom: 50px;
      }
    }

    .portfolio {
      padding: 50px 30px 40px;
      .portfolio-container {
        flex-direction: column;
      }
    }

    .skills {
      padding: 50px 30px;
      background: none;
      .skills-container {
        flex-direction: column;
      }
    }

    .stances {
      padding: 50px 30px;
      .stances-title {
        display: none;
      }
      .stances-container {
        flex-direction: column;
        .stance-item {
          border-bottom: 1px solid #fff;
          margin-bottom: 40px;
        }
        .stances-figure-item {
          .stance-figure {
            font-size: 2rem;
            margin-bottom: 30px;
          }
          .keyword-box {
            width: 100%;
            display: flex;
            flex-direction: column;
            .keyword-choice {
              font-size: 2.2rem;
              width: 100%;
              margin-bottom: 15px;
            }
            .keyword-text {
              width: 100%;
            }
          }
        }
      }
    }

    .profile {
      padding: 50px 30px;
      .profile-container {
        flex-direction: column;
        .profile-image-item {
          width: 100%;
          .my-image {
            margin-bottom: 30px;
          }
        }
        .profile-item {
          width: 100%;
          text-align: center;
          margin-bottom: 20px;
          .my-name {
            font-size: 2rem;
            margin-bottom: 15px;
          }
        }
        .external-link-item {
          justify-content: space-evenly;
          width: 100%;
          & > * {
            margin: 0;
            width: 80%;
          }
        }
      }
    }
  }
}
</style>

<noscript>
  <style scoped>
    .fadein {
      opacity: 1;
      transform: translate(0);
    }
  </style>
</noscript>