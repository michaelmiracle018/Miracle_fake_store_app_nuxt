<template>
  <div class="main_container">
    <!-- <Login /> -->
    <div class="nav_content">
      <Nav v-if="!navigation" />
    </div>
    <Home />

    <Footer />
  </div>
</template>

<script>
import Nav from '../components/landingPage/Nav.vue'
import Footer from '../components/Footer.vue'
import Home from '../pages/Home/index.vue'
export default {
  components: { Nav, Footer, Home},
  data() {
    return {
      navigation: null,
    }
  },
  computed: {
    getLoginToken() {
      return localStorage.getItem('signInToken')
    },
  },
  methods: {
    checkRoute() {
      if (this.$route.name === 'Login') {
        this.navigation = true
        return
      }
      this.navigation = false
    },
  },
  watch: {
    $route() {
      this.checkRoute()
    },
  },
  created() {
    this.checkRoute()
		this.$store.dispatch('autoLogin')
		
  },
}
</script>

<style lang="scss">
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media screen and (max-width: 799px) {
  .hero {
    margin-top: -1rem;
  }
}

@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');


.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}

.arrow {
  margin-left: 8px;
  width: 12px;
  path {
    fill: #000;
  }
}

.arrow-light {
  path {
    fill: #fff;
  }
}

button,
.router-button {
  transition: 500ms ease all;
  cursor: pointer;
  margin-top: 24px;
  padding: 12px 24px;
  background-color: #303030;
  color: #fff;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgba(48, 48, 48, 0.7);
  }
}

.button-ghost {
  color: #000;
  padding: 0;
  border-radius: 0;
  margin-top: 50px;
  font-size: 15px;
  font-weight: 500;
  background-color: transparent;
  @media screen and (min-width: 700px) {
    margin-top: 0;
    margin-left: auto;
  }
  i {
    margin-left: 8px;
  }
}

.button-light {
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
}

.button-inactive {
  pointer-events: none !important;
  cursor: none !important;
  background-color: rgba(128, 128, 128, 0.5) !important;
}

.error {
  text-align: center;
  font-size: 12px;
  color: red;
}

.blog-card-wrap {
  position: relative;
  padding: 80px 16px;
  background-color: #f1f1f1;
  @media screen and (min-width: 500px) {
    padding: 100px 16px;
  }
  .blog-cards {
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;
    @media screen and (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 5900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
