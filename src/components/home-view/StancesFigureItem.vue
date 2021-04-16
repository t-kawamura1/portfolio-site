<template>
  <div class="stances-figure-item">
    <div class="stance-figure-wrapper">
      <span
        @mouseover="changeKeywordBox(keywordList[0], keywordTextList[0])" 
        class="figure-element-word top"
      >
        {{ keywordList[0] }}
      </span>
      <span
        @mouseover="changeKeywordBox(keywordList[1], keywordTextList[1])"
        class="figure-element-word right"
      >
        {{ keywordList[1] }}
      </span>
      <span
        @mouseover="changeKeywordBox(keywordList[2], keywordTextList[2])"
        class="figure-element-word bottom"
      >
        {{ keywordList[2] }}
      </span>
      <span
        @mouseover="changeKeywordBox(keywordList[3], keywordTextList[3])"
        class="figure-element-word left"
      >
        {{ keywordList[3] }}
      </span>
      <span
        @mouseover="changeKeywordBox(keywordList[4], keywordTextList[4])"
        class="figure-element-word center"
      >
        {{ keywordList[4] }}
      </span>
      <span class="connect-line right-top"></span>
      <span class="connect-line right-bottom"></span>
      <span class="connect-line left-bottom"></span>
      <span class="connect-line left-top"></span>
      <span class="connect-line horizontal"></span>
      <span class="connect-line vertical"></span>
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
        '追求の基本スタンス。パフォーマンスを向上させるために必要とされるもの。本来持ち得る力を最大限発揮するには、如何に効率化させるかがテーマとなる。',
        '「楽」しさも追求したい。せっかくの人生、仕事だってプライベートだって楽しくやりたい。同時に人を「楽」にさせる仕事をしたい。',
        '自分を含めて、すべての物事の終着地に「人」がいることを忘れてはならない。良いも悪いも、すべては人が決める。',
        '未来を常に考える。仕事の志向はいつも未来に向けて。自分の仕事によって、未来の人たちが利益を享受できるよう心がける。',
        '根本の欲求。すべてのスタンスの元となる。ここから始まり、ここに至ることを願うもの。エンジニアとして、もっとも実現したいもの。'
      ],
      showKeyword: 'キーワード',
      showKeywordText: '図のキーワードにカーソルを合わせると、表示が切り替わります。'
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
  display: flex;
  justify-content: space-evenly;
  .stance-figure-wrapper {
    display: inline-block;
    position: relative;
    width: 520px;
    height: 300px;
    font-size: 2.5rem;
    .figure-element-word {
      display: inline-block;
      position: absolute;
      width: 90px;
      height: 50px;
      line-height: 50px;
      border: solid 2px #fff;
      border-radius: 50%;
      background-color: #777;
      z-index: 5;
      &:hover {
        cursor: pointer;
        color: #777;
        border: #777;
        background-color: #fff;
      }
      &.top {
        left: 215px;
      }
      &.right {
        top: 125px;
        right: 0;
      }
      &.bottom {
        left: 215px;
        bottom: 0;
      }
      &.left {
        top: 125px;
        left: 0;
      }
      &.center {
        top: 125px;
        left: 215px;
      }
    }
    .connect-line {
      display: inline-block;
      position: absolute;
      height: 2px;
      background-color: #fff;
      z-index: 4;
      &.right-top {
        width: 245px;
        transform: rotate(30deg);
        top: 87px;
        left: 243px;
      }
      &.right-bottom {
        width: 245px;
        transform: rotate(-30deg);
        bottom: 87px;
        left: 243px;
      }
      &.left-bottom {
        width: 245px;
        transform: rotate(210deg);
        bottom: 87px;
        right: 243px;
      }
      &.left-top {
        width: 245px;
        transform: rotate(330deg);
        top: 87px;
        right: 243px;
      }
      &.horizontal {
        width: 420px;
        top: 149px;
        left: 50px;
      }
      &.vertical {
        width: 250px;
        transform: rotate(90deg);
        top: 150px;
        left: 135px;
      }
    }
  }
  .keyword-box {
    width: 35%;
    height: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .show-keyword {
      display: inline-block;
      width: 25%;
      font-size: 2.5rem;
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
    flex-direction: column;
    .stance-figure-wrapper {
      font-size: 1.8rem;
      width: 100%;
      height: 100%;
      margin-bottom: 50px;
      position: static;
      .figure-element-word {
        width: 20%;
        border: solid 1px #fff;
        border-radius: 0;
        background-color: transparent;
        position: static;
      }
      .connect-line {
        display: none;
      }
    }
    .keyword-box {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .show-keyword {
        font-size: 1.8rem;
        width: 30%;
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