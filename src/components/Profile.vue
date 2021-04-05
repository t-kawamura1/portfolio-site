<template>
  <div class="profile">
    <h2 class="heading">PROFILE</h2>
    <div class="profile-container">
      <div class="profile-image-item">
        <img src="../assets/my-image.png" alt="作成者のイメージ" class="my-image"> 
      </div>
      
      <div class="profile-item">
        <p class="my-name">河村 智之</p>
        <p class="profile-text">
          1991年4月23日生まれ、29歳。
          京都府宇治市出身。
          趣味はJリーグ観戦、ガンバ大阪サポーター。
          2021年3月、思うところあって5年勤めた京都市役所を退職。
          世の中をもっと効率的に、かつ楽しいものにするために、Webエンジニアを志す。
        </p>
        <div class="external-link-wrapper">
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
export default {

}
</script>

<style lang="scss" scoped>
.profile {
  padding: 100px 90px 60px 100px;
  background: rgba(255, 255, 255, 0.6) url('../assets/home-bg2.jpg') no-repeat fixed top;
  background-size: cover;
  color: #636363;
  .profile-container {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 100px;
    .profile-image-item {
      display: block;
      width: 40%;
      flex-grow: 1;
      .my-image {
        display: block;
        width: 100%;
      }
    }
    .profile-item {
      width: 60%;
      text-align: left;
      vertical-align: middle;
      flex-grow: 1;

      .my-name {
        margin-bottom: 30px;
        font-size: 2.5rem;
      }
      .profile-text {
        line-height: 2;
        margin-bottom: 30px;
      }
    }
    .external-link-wrapper {
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
</style>
