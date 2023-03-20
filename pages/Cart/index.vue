<template>
  <div>
    <section>
      <Nav />
      <div v-if="cart.getCart.length > 0">
        <article class="cart_item" v-for="item in cart.getCart" :key="item.id">
          <img :src="item.image" alt="item.name" />
          <div>
            <h4>{{ item.title }}</h4>
            <h4 class="item_price">$ {{ item.price }}</h4>
            <button
              class="remove_btn"
              @click="$store.commit('DELETE_CART', item.id)"
            >
              remove
            </button>
          </div>
          <div>
            <button
              class="icon_btn"
              @click="$store.commit('INCREASE_CART', item.id)"
            >
              <i class="fa-solid fa-plus"></i>
            </button>
            <p class="amount">{{ item.quantity }}</p>
            <button
              class="icon_btn"
              @click="$store.commit('DECREASE_CART', item.id)"
            >
              <i class="fa-solid fa-minus"></i>
            </button>
          </div>
        </article>
        <div class="footer">
          <hr />
          <div class="total_cart">
            <h2>Total</h2>
            <h2>$ {{ $store.getters.getTotalItems }}</h2>
          </div>
          <div class="action_btn">
            <div>
              <button class="btn clear_btn" @click="handleDeleteModal">
                <!-- ="$store.commit('CLEAR_CART')" -->
                clear cart
              </button>
            </div>
            <div>
              <button class="btn clear_btn" @click="$router.push('/Order')">
                Check Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="empty_wrap" v-else>
        <div class="empty_cart_wrap">
          <div class="empty_cart">
            <img src="../../assets/icons/icon-empty.png" alt="" />
          </div>
          <div class="no_cart_text">No Item Found Yet</div>
          <button class="return_btn" @click="$router.push('/Products')">
            Return To Products
          </button>
        </div>
      </div>
    </section>
    <Modal
      :show-modal="deleteModal"
      modal-style="max-width: 650px"
      title="Delete Cart"
      @closeModal="deleteModal = false"
    >
      <div>
        <h4>Are you sure you want to do this?</h4>

        <button class="btn clear_btn" @click="handleDeleteItems">
          Confirm
        </button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Nav from '../../components/landingPage/Nav.vue'
import Modal from '../../components/modalComponent/Modal.vue'
export default {
  middleware: 'auth',

  components: { Nav, Modal },
  data() {
    return {
      deleteModal: false,
    }
  },
  computed: {
    cart() {
      return this.$store.getters
    },
    cartQuantity() {
      this.$store.getters
    },
  },
  methods: {
    handleDeleteModal() {
      this.deleteModal = true
    },
    handleDeleteItems() {
      this.$store.commit('CLEAR_CART')
      this.deleteModal = false
    },
  },
  head() {
    return {
    title: `Cart Page (${this.$store.getters.cartQuantity})`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Cart Page',
        },
      ],
    }
  },

  created() {
    // console.log(this.cart.getCart);
  },
}
</script>

<style scoped>
section {
  margin-bottom: 2rem;
}
.cart_item {
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 1.5rem;
  margin: 3rem auto;
  max-width: 1000px;
  background-color: #fff;
}

.cart_item img {
  width: 100%;
  max-width: 15rem;
  height: 15rem;
}
.cart_item h4 {
  margin-bottom: 0.5rem;
  font-weight: 500;
  letter-spacing: 2px;
  font-size: 16px;
  font-weight: 600;
  font-family: 'montserrat';
}
.item_price {
  color: #000;
}
.remove_btn {
  color: hsl(323, 95%, 43%);
  letter-spacing: 0.25rem;
  cursor: pointer;
  font-size: 0.85rem;
  background: transparent;
  border: none;
  margin-top: 0.375rem;
  transition: all 0.3s linear;
  font-family: 'montserrat';
  font-weight: 600;
}
.remove_btn:hover {
  color: hsl(330, 98%, 51%);
}
.amount_btn {
  width: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
}

.amount {
  text-align: center;
  margin-bottom: 0;
  font-size: 1.25rem;
  line-height: 1;
  font-size: 17px;
  font-family: 'montserrat';
  font-weight: 600;
  color: black;
}

.icon_btn {
  font-size: 16px;
  font-family: 'montserrat';
  font-weight: 600;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  margin: 2px 0;
  color: #000;
  width: 100%;
  height: 100%;
}

.icon_btn:hover {
  background-color: rgba(114, 111, 111, 0.2);
}

hr {
  background: #617d98;
  border-color: transparent;
  border-width: 0.25px;
}

.footer {
  max-width: 1000px;
  margin: 0 auto;
}

.total_cart {
  display: flex;
  justify-content: space-between;
}

.empty_cart_wrap {
  display: grid;
  place-items: center;
}

.empty_cart img {
  width: 300px;
  height: 300px;
  margin-bottom: 2rem;
  margin-top: 1rem;
}

.return_btn {
  height: 40px;
  background-color: rgb(220, 39, 87);
  border: none;
  outline: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  border-radius: 5px;
  color: white;
  padding: 10px;
}

.btn {
  text-transform: uppercase;
  color: #000;
  padding: 0.375rem 0.75rem;
  letter-spacing: 0.25rem;
  display: inline-block;
  font-weight: 700;
  transition: all 0.3s linear;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.action_btn {
  display: flex;
  justify-content: space-between;
}

.clear_btn {
  background: transparent;
  padding: 0.5rem 1rem;
  color: hsl(360, 67%, 44%);
  border: 1px solid hsl(360, 67%, 44%);
  margin-top: 2.25rem;
  border-radius: 0.25rem;
}
.clear_btn:hover {
  background: hsl(360, 71%, 66%);
  color: hsl(360, 67%, 44%);
  border-color: hsl(360, 71%, 66%);
}
</style>
