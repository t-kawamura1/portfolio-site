<template>
  <div v-show="loading" class="loading">
    <vue-loading
      type="spiningDubbles"
      color="#636363"
      :size="{ width: '90px', height: '90px' }"
      class="loading-icon"
    />
  </div>
</template>

<script>
import { VueLoading } from 'vue-loading-template'

export default {
  components: {
    VueLoading
  }
}
</script>

<style lang="scss" scoped>
.loading {
  position: relative;
  .loading-icon {
    position: absolute;
    top: 250px;
    left: 46%;
  }
}

@media (max-width: 768px) {
  .loading {
    .loading-icon {
      top: 360px;
      left: 37%;
    }
  }
}
</style>
