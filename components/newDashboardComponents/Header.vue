<template>
  <div class="setup-dashboard-top-navbar">
    <div class="setup-dashboard-top-navbar-inner">
      <div class="setup-dashboard-top-navbar-menu-icon">
        <button
          class="setup-dashboard-top-navbar-menu-icon-btn"
          @click="$router.push('/MiniApp')"
        >
          <img src="~assets/icons/menu.svg" alt="" />
        </button>
      </div>
      <!-- <div class="setup-dashboard-top-navbar-search-bar-wrapper">
          <img width="18px" height="18px" src="~assets/icons/search.svg" class="search-icon" alt="">
          <input type="text" placeholder="search" class="search-input">
      </div> -->
      <!-- {{ isIdle }} -->
      <div class="setup-dashboard-top-navbar-avatar-container">
        <!-- <b-dropdown
          variant="link"
          toggle-class="text-decoration-none drop-down"
          no-caret
        >
          <template #button-content>
            <b-avatar size="50px" style="background: #D9D9D9; border;">
            </b-avatar>
          </template>
          <b-dropdown-item @click="onLogout"> Logout </b-dropdown-item>
        </b-dropdown> -->
        <div class="btn_wrap">
          <button class="cart_btn" @click="$router.push('/Cart')">Cart  <span>{{ $store.getters.cartQuantity }}</span> </button>
          <button class="logout_btn" @click="onLogout">Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newDashboardHeader',
  methods: {
    onLogout() {
      this.$store.dispatch('LOGOUT')
      this.$router.push('/')
    },
  },
  // created() {
  //   this.$store.dispatch('LOGOUT')
  // }
}
</script>

<style scoped>
.logout_btn {
  width: 100px;
  height: 48px;
  background: transparent;
  border-radius: 5px;
  outline: none;
  border: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 15px;
  color: #000;
  margin-bottom: 0.8rem;
  text-align: center;
}

.logout_btn:hover {
  background-color: rgba(114, 111, 111, 0.2);
}

.cart_btn {
   width: 90px;
  background-color: transparent;
  border-radius: 5px;
  outline: none;
  border: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 15px;
  color: #000000;
  position: relative;
}

button span {
  position: absolute;
  top: -10px;
  right: 15px;
}
</style>
