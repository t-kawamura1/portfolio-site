<template>
  <div class="about">
    <Header/>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    Header,
  },
  mounted(){
    const title = "ポートフォリオ詳細 | T.KAWAMURA ポートフォリオサイト"
    const description = "Webエンジニアを目指す河村智之のポートフォリオサイトです。ここでは私のポートフォリオを紹介します。"
    document.title = title
    document.querySelector("meta[property='og:title']").setAttribute('content', title)
    document.querySelector("meta[name='description']").setAttribute('content', description)
    document.querySelector("meta[property='og:description']").setAttribute('content', description)
  }
}
</script>


<style lang="scss" scoped>
@media (max-width: 768px) {
  
}
</style>