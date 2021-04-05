<template>
  <div class="stances">
    <h2 class="heading">STANCES</h2>
    <div class="stances-title">世の中を効率的に、かつ おもしろく</div>
    <div class="stances-container">
      <div class="stances-item">
        <p class="keyword">効率</p>
        <p class="stance-text">
          効率化はすべての人の利益になります。人々を単純作業の煩わしさから解放して、
          より良い業務等の運用・改善のサイクルへと導くことができます。
          プログラマーの三大美徳の一つ「怠惰」に深く共感し、すべての物事において「効率」を追求していきます。
        </p>
      </div>
      <div class="stances-item">
        <p class="keyword">おもしろさ</p>
        <p class="stance-text">
          世の中に革新や価値を届けることは「おもしろい」ことです。自分の仕事が世の中に少しでも影響を与えることができれば、
          それ以上のやりがいはありません。ワクワクします。その原動力になるためには、複雑な物事を解決する「技術力」が欠かせません。
          どのような需要や要望にも応える技術力を身につけていきます。
        </p>
      </div>
      <div class="stances-item">
        <div class="stance-figure">
          効率 楽 人 未来 幸福
        </div>
        <div class="keyword-box">
          <p class="keyword-choice">幸福</p>
          <p class="keyword-text">
            私もすべて現にとんだ創作国というものの一方にしならなけれ。
            まあ今日に学習らはついにこうしたらくたたかもから講じと得ますには経験しないうて。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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
    .stances-item {
      width: 40%;
      .keyword {
        font-size: 2.5rem;
        margin-bottom: 30px;
      }
      .stance-text {
        line-height: 2;
        margin-bottom: 60px;
      }
    }
    .stances-item:last-child {
      width: 100%;
    }
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
</style>
