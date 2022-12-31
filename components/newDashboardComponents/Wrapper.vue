<template>
  <div class="setup-dashboard" >
    <newDashboardHeader />
    <div class="setup-dashboard-main">
      <slot></slot>
    </div>
    <button class="setup-dashboard-help-btn">
      <img src="~assets/icons/help.svg" alt="" />
    </button>
  </div>
</template>

<script>
import newDashboardHeader from './Header.vue'
export default {
  name: 'newDashboardWrapper',
  components: { newDashboardHeader },
  
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/wrapper.scss';
</style>
