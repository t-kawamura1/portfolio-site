<template>
  <div class="profile">
    <h2 class="heading">PROFILE</h2>
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
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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

@media (max-width: 768px) {
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
</style>
