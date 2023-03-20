<template>
  <div>
    <Nav />
    <section class="main_container">
      
      <div class="sub_container">
        <div class="product_card">
          <header class="header">
            <h1>All Our Deals</h1>
          </header>
          <div class="input_wrap">
            <input
            type="text"
            placeholder="search for a category"
            v-model="search"
            />
            
            <button @click="searchCategory">Search</button>
          </div>
          <div v-if="loadingStatus" class="loading">
            <Loading />
          </div>
          <div v-else>
            <div
              class="item_wrap"
              v-if="getAllProducts.getAllProducts.length > 0"
              >
              <div
              class="single_card_item"
              v-for="item in getAllProducts.getAllProducts"
              :key="item.id"
              >
                <div class="item_title">
                  <h4>
                    {{ item.title }}
                  </h4>
                </div>
                <div class="item_image">
                  <nuxt-link :to="`/Products/${item.id}`" class="card">
                    <img
                    :src="item.image"
                    alt="image"
                    @click="getCategoryProduct(item.category)"
                    />
                  </nuxt-link>
                </div>
                <div class="item_category">
                  <h4><span>Category:</span> {{ item.category }}</h4>
                </div>
                <div class="item_rating">
                  <!-- <h6>
                    <span>{{ item.rating.rate }}</span>
                </h6> -->
                <!-- <button>view more</button> -->
              </div>
                <div class="footer">
                  <span>$ {{ item.price }}</span>
                  <button @click="addToCart(item)">Add To cart</button>
                </div>
              </div>
            </div>
            <div class="no_search_msg" v-else>
              <h3>No result match your search term</h3>
            </div>
          </div>

          <div class="select_wrap">
            <select class="select" @change="getFilteredList($event)">
              <option value="10">4</option>
              <option value="20">8</option>
              <option value="30">12</option>
              <option value="40">16</option>
              <option value="50">20</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Wrapper from '../../components/newDashboardComponents/Wrapper.vue'
import ProductCard from '../../components/ProductCard.vue'
import Loading from '../../components/Loading.vue'
import Nav from '~/components/landingPage/Nav.vue'

// import axios from 'axios'
export default {
  middleware: 'auth',

  components: { Wrapper, ProductCard, Loading, Nav },

  data() {
    return {
      openSidebar: false,
      text: '',
      search: '',
      loading: false,
    }
  },
  computed: {
    auth() {
      return this.$store.getters.ifAuthenticated
    },
    getAllProducts() {
      return this.$store.getters
    },
    getLoginToken() {
      return this.$store.state.loginToken
    },
    cart() {
      return this.$store.getters
    },
    loadingStatus() {
      return this.$store.getters.getLoadingStatus
    },
  },
  methods: {
    async searchCategory() {
      if (this.search !== '') {
        try {
          const result = {
            search: this.search,
          }
          await this.$store.dispatch('fetchSearchItem', result)
          this.search = ''
        } catch (error) {
          console.log(error)
        }
      }
    },

    getCategoryProduct(category) {
      this.$store.dispatch('getRelatedCategory', category)
    },

    addToCart(item) {
      this.$store.commit('ADD_TO_CART', item)
    },

    getFilteredList(e) {
      // GET SELECTED NUMBER
      const limit = parseInt(
        e.target.options[e.target.options.selectedIndex].innerText
      )
      this.$store.dispatch('fetchAllProduct', {
        limit,
      })
    },
  },
  created() {
    const body = {
      limit: this.limit,
    }
    this.$store.dispatch('fetchAllProduct', body)
    //  console.log(this.getAllProducts);
  },
  beforeMount() {},
  head() {
    return {
      title: 'Dashboard Page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Dashboard Page',
        },
      ],
    }
  },
}
</script>

<style scoped>
.no_search_msg {
  text-align: center;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
}
.main_container {
  margin-bottom: 2rem;
  height: 100%;
  width: 100%;
  background-color: rgb(252, 246, 249);
}

/* HEADER STYLES */

.header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header h1 {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: clamp(30px, 5vw, 60px);
  line-height: 28px;
  color: #000000;
  text-transform: capitalize;
}

/*END OF HEADER STYLES */

/* INPUT STYLES */

.input_wrap {
  max-width: 1170px;
  margin: 1rem auto;
}

.input_wrap input {
  width: 100%;
  max-width: 250px;
}

.input_wrap button {
  width: 100px;
  height: 48px;
  background: #9e2140;
  border-radius: 5px;
  outline: none;
  border: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
  margin-bottom: 0.8rem;
}

/*END OF INPUT STYLES */

/* ITEM WRAP STYLES */
.item_wrap {
  width: 90vw;
  margin: 3rem auto;
  max-width: 1170px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  cursor: hand;
  transform: 0.2s ease-in-out;
  margin-bottom: 3rem;
}

.single_card_item {
  margin-bottom: 1rem;
}

.single_card_item:hover {
  transform: translateY(-0.5%);
  box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.2);
}

/* Item Tile */

.item_title {
  background: rgba(158, 33, 64, 0.5);
  padding: 0.5rem;
  height: 70px;
}

.item_rating h6 {
  margin-left: 0.5rem;
}

.item_title h4 {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #000000;
  text-transform: capitalize;
}

/* Item Image */

.item_image {
  padding-bottom: 0.4rem;
}

.item_image img {
  width: 100%;
  height: 12rem;
}

/* Item Category */
.item_category {
  margin-left: 10px;
}

.item_category h4 {
  font-family: 'Montserrat';
  font-style: normal;
  font-size: 15px;
  font-weight: 500;

  line-height: 28px;
  color: #333;
}

.item_category h4 span {
  font-weight: 800;
  color: #000000;
}

.item_rating button {
  width: 150px;
  background-color: transparent;
  border-radius: 5px;
  outline: none;
  border: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
}

/* Item Footer */

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(158, 33, 64, 0.1);
  padding: 0.5rem;
}

.footer button {
  width: 140px;
  height: 40px;
  background: #9e2140;
  border-radius: 5px;
  outline: none;
  border: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
}

/* END OF ITEM WRAP STYLES */

/* SELECT STYLES*/
.select_wrap {
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
}

.select {
  border: 2px solid #d9d9d9;
  width: 100px;
  height: 55px;
  padding: 7px;
  border-radius: 9px;
  background-color: transparent;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
}

.select option {
  color: #000000;
}

/*END OF SELECT STYLES*/

@media screen and (max-width: 1200px) {
  .input_wrap {
    margin-left: 3rem;
  }
}
</style>
