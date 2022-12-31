<template>
  <section class="main_container">
    <!-- <Nav /> -->
    <div class="sub_container">
      <div class="single_item_wrap">
        <div>
          <div class="img_wrap">
            <img :src="product.getProductsById.image" alt="" />
          </div>
          <h4 class="price">$ {{ product.getProductsById.price }}</h4>
          <h4 class="title">{{ product.getProductsById.title }}</h4>
          <h4 class="title">{{ product.getProductsById.category }}</h4>
          <p class="desc">{{ product.getProductsById.description }}</p>
          <button @click="addToCart(product.getProductsById)">Add To Cart</button>
          <button @click="$router.push('/Cart')">view cart</button>
        </div>
        <h1>{{ getCategory.getCategory }}</h1>
      </div>
      <Category />
    </div>
  </section>
</template>

<script>
// import Nav from '../../components/landingPage/Nav.vue'
import Category from '../../components/Category.vue'
// import Loading from '../../components/Loading.vue'
export default {
  middleware: 'auth',

  comments: {  Category,  },
  computed: {
    product() {
      return this.$store.getters
    },

    getCategory() {
      return this.$store.getters
    },
  },
  methods: {
    addToCart(item) {
      this.$store.commit("ADD_TO_CART", item);
    },
  },
  created() {
    const body = {
      id: this.$route.params.id,
    }
    this.$store.dispatch('fetchSingleProduct', body)

  },
}
</script>

<style scoped>
.sub_container {
  width: 90vw;
  margin: 3rem auto;
  max-width: 1170px;
}

.single_item_wrap {
  display: grid;
  place-items: center;
  padding: 0.7rem;
  background-color: #ffffff;
}
.img_wrap {
  margin-top: 3rem;
  display: grid;
  place-items: center;
}
.img_wrap img {
  width: 100%;
  max-width: 500px;
  height: 20rem;
}

.price {
  font-family: 'Montserrat-bold';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
  margin-top: 1rem;
}

.title {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #333333;
  text-transform: capitalize;
}

.desc {
  width: 100%;
  max-width: 1000px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #000;
  margin-top: 2rem;
}

.single_item_wrap button {
  width: 140px;
  height: 40px;
  background: #9e2140;
  border-radius: 5px;
  outline: none;
  border: none;
  font-family: 'Montserrat-bold';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
  margin-top: 2rem;
}
</style>
