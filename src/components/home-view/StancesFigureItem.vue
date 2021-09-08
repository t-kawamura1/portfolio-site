<template>
  <div class="stances-figure-item">
    <div class="stance-figure-wrapper">
      <span
        @mouseover="changeKeywordBox(keywordList[0], keywordTextList[0])"
        class="figure-element-word"
      >
        {{ keywordList[0] }}
      </span>
      <span
        @mouseover="changeKeywordBox(keywordList[1], keywordTextList[1])"
        class="figure-element-word"
      >
        {{ keywordList[1] }}
      </span>
      <span
        @mouseover="changeKeywordBox(keywordList[2], keywordTextList[2])"
        class="figure-element-word"
      >
        {{ keywordList[2] }}
      </span>
      <span
        @mouseover="changeKeywordBox(keywordList[3], keywordTextList[3])"
        class="figure-element-word"
      >
        {{ keywordList[3] }}
      </span>
      <span
        @mouseover="changeKeywordBox(keywordList[4], keywordTextList[4])"
        class="figure-element-word"
      >
        {{ keywordList[4] }}
      </span>
    </div>
    <div class="keyword-box">
      <div class="show-keyword">{{ showKeyword }}</div>
      <p class="show-keyword-text">{{ showKeywordText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keywordList: [
        '効率',
        '楽',
        '人',
        '未来',
        '幸福'
      ],
      keywordTextList: [
        '追求の基本スタンス。パフォーマンスを向上させるために必要とされるもの。本来持ち得る力を最大限発揮するには、如何に効率化させるかがテーマとなります。',
        '「楽」しさも追求したい。せっかくの人生、仕事だってプライベートだって楽しくやりたい。同時に人を「楽」にさせる仕事をしたいと考えています。',
        '自分を含めて、すべての物事の終着地に「人」がいることを忘れてはなりません。良いも悪いも、すべては人が決めるものです。',
        '未来を常に考える。仕事の志向はいつも未来に向けて。自分の仕事によって、未来の人たちが利益を享受できるよう心がけます。',
        'すべてのスタンスの元となる根本の欲求。幸福追求こそが、人を人たらしめるものです。エンジニアとして、もっとも実現したいものでもあります。'
      ],
      showKeyword: 'キーワード',
      showKeywordText: '図のキーワードにカーソルを合わせるかタップすると、表示が切り替わります。'
    }
  },
  methods: {
    changeKeywordBox(mouseoverKeyword, mouseoverKeywordText) {
      this.showKeyword = mouseoverKeyword;
      this.showKeywordText = mouseoverKeywordText;
    }
  }
}
</script>

<style lang="scss" scoped>
.stances-figure-item {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  .stance-figure-wrapper {
    font-size: 2rem;
    width: 700px;
    margin-bottom: 50px;
    .figure-element-word {
      display: inline-block;
      width: 20%;
      border: solid 1px #fff;
      height: 40px;
      line-height: 40px;
      border: solid 1px #fff;
      &:hover {
        cursor: pointer;
        color: #777;
        border: solid 1px #777;
        background-color: #fff;
      }
    }
  }
  .keyword-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 700px;
    .show-keyword {
      display: inline-block;
      width: 25%;
      font-size: 2.4rem;
      border-bottom: solid 1px #fff;
    }
    .show-keyword-text {
      display: inline-block;
      text-align: left;
      width: 65%;
      line-height: 2;
    }
  }
}

@media (max-width: 940px) {
  .stances-figure-item {
    .stance-figure-wrapper {
      font-size: 1.8rem;
      margin-bottom: 50px;
      width: 100%;
    }
    .keyword-box {
      width: 100%;
      flex-direction: column;
      align-items: center;
      .show-keyword {
        font-size: 1.8rem;
        width: 40%;
        margin-bottom: 15px;
      }
      .show-keyword-text {
        width: 100%;
        font-size: 1.4rem;
      }
    }
  }
}
</style>