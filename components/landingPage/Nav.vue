<template>
  <section class="main_container">
    <div class="sub_container">
      <!--
    ================
     NAVBAR SECTION
    ================
    -->
      <nav>
        <div class="nav-center">
          <!-- nav header -->
          <div class="nav-header">
            <img src="~/assets/icons/logo design.png" class="logo" alt="logo" />
            <button class="nav-toggle" @click="navToggle">
              <i class="fas fa-bars"></i>
            </button>
          </div>
          <!-- links -->
          <ul class="links">
            <li @click="$router.push('/')">
              <a>Home</a>
            </li>
            <li @click="$router.push('/Products')">
              <a>Products</a>
            </li>
            <li @click="$router.push('/Login')">
              <a>Login</a>
            </li>
            <li @click="$router.push('/Cart')">
              <a>Cart</a>
              
              <span class="qty">{{ $store.getters.cartQuantity }}</span>
            </li>
          </ul>
          <!-- social media -->
          <ul class="social-icons">
            <li>
              <a href="https://www.twitter.com">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <i class="fab fa-behance"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <i class="fab fa-sketch"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <!--
    =======================
     END OF NAVBAR SECTION
    =======================
    --></div>
  </section>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
    navToggle() {
      const navToggle = document.querySelector('.nav-toggle')
      const links = document.querySelector('.links')
      navToggle.addEventListener('click', () => {
        links.classList.toggle('show-links')
      })
    },
  },
  computed: {
    cartQuantity() {
      this.$store.getters
    },
  },
}
</script>

<style scoped>
ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

/*
=============== 
Navbar
===============
*/

.qty {
  position: relative;
  top: -40px;
  left: 55px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  font-size: 17px;
  color: #000;
}

nav {
  background: #777787;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

.nav-toggle {
  font-size: 1.5rem;
  color: hsl(205, 78%, 60%);
  background: transparent;
  border-color: transparent;
  transition: all 0.3s linear;
  cursor: pointer;
}

.nav-toggle:hover {
  color: hsl(205, 86%, 17%);
  transform: rotate(90deg);
}

.logo {
  height: 80px;
}
.links {
  margin-top: 1rem;
}

.links a {
  color: hsl(209, 34%, 30%);
  font-size: 1rem;
  font-family: 'montserrat';
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 0.1rem;
  display: block;
  padding: 0.5rem 1rem;
  transition: all 0.3s linear;
  cursor: pointer;
}

.links a:hover {
  background: hsl(205, 86%, 81%);
  color: hsl(205, 78%, 60%);
  padding-left: 1.5rem;
}

.social-icons {
  display: none;
}

.links {
  height: 0;
  overflow: hidden;
  transition: all 0.3s linear;
}

.show-links {
  height: 10rem;
}

@media screen and (min-width: 800px) {
  nav {
    background: #fff;
  }
  .nav-center {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .nav-header {
    padding: 0;
  }
  .nav-toggle {
    display: none;
  }
  .links {
    height: auto;
    display: flex;
  }
  .links a {
    padding: 0;
    margin: 0 0.5rem;
  }
  .links a:hover {
    padding: 0;
    background: transparent;
  }
  .social-icons {
    display: flex;
  }
  .social-icons a {
    margin: 0 0.5rem;
    color: hsl(205, 78%, 60%);
    transition: all 0.3s linear;
  }
  .social-icons a:hover {
    color: hsl(211, 27%, 70%);
  }
  .qty {
    left: 45px;
    top: -30px;
    color: #000;
  }
}
</style>
