<template>
  <div class="tools">
    <h2 class="heading">TOOLS</h2>
    <div class="tools-container">
      <div class="tools-item">
        <div class="tool-title">SERVER-SIDE</div>
        <img src="../assets/rails.svg" alt="railsロゴ" class="tool-image rails">
        <p class="tool-text">
          サーバーサイドの技術として、Ruby on Railsを学習中。
          ポートフォリオでは、Rails5をAPIモードで活用。
          適切なクエリ処理を心がけます。
        </p>
      </div>
      <div class="tools-item">
        <div class="tool-title">FRONT-END</div>
        <img src="../assets/vue.svg" alt="vueロゴ" class="tool-image vue">
        <p class="tool-text">
          フロントエンドの技術として、Vue.jsを学習中。
          ポートフォリオのフロント実装に採用。当サイトはVue.jsのみで作成。
          今後はNuxt.jsにもチャレンジしていきたい。
        </p>
      </div>
      <div class="tools-item">
        <div class="tool-title">INFRASTRUCTURE</div>
        <div class="infra-image">
          <img src="../assets/docker.svg" alt="dockerロゴ" class="tool-image docker">
          <img src="../assets/aws.svg" alt="awsロゴ" class="tool-image aws">
        </div>
        <p class="tool-text">
          環境の構築にはDockerを活用。
          本番環境はAWSの各種サービスを活用。
          モダンな開発環境に適応します。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.tools {
  padding: 100px 60px;
  background-color: #eee;
  .tools-container {
    display: flex;
    justify-content: space-around;
    .tools-item {
      margin: 0 20px;
      padding-top: 20px;
      width: 33%;
      .tool-title {
        font-size: 2.5rem;
        margin-bottom: 30px;
        letter-spacing: 1px;
      }
      .tool-image {
        display: inline-block;
        margin-bottom: 30px;
        height: 200px;
      }
      .infra-image {
        height: 230px;
        position: relative;
        & .docker {
          position: absolute;
          width: 50%;
          left: 0;
        }
        & .aws {
          position: absolute;
          width: 50%;
        }
      }
      .tool-text {
        line-height: 2;
      }
    }
  }
}
</style>
