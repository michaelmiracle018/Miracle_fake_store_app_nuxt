<template>
  <section class="main_container">
    <newDashboardHeader />
    <div class="sub_container">
      <div class="all_content">
        <!-- BTN CONTAINER -->
        <section class="btn_container">
          <div class="left_btn_content">
            <button><span>Order /</span> Product</button>
          </div>
          <div class="right_btn_content">
            <div class="first_btn">
              <button @click="$router.push('/Products')">Products</button>
            </div>

            <div class="third_btn">
              <button @click="$router.push('/Login')">Login</button>
            </div>
            <div class="fourth_btn">
              <button @click="$router.push('/Home')">Home</button>
            </div>
          </div>
        </section>
        <!-- END OF BTN CONTAINER -->
        <section class="table_container">
          <div class="table_sub_container">
            <div class="thin-line-wrap">
              <div class="line"></div>
            </div>
            <div class="table_content" v-if="cart.getCart.length > 0">
              <table>
                <thead>
                  <tr class="table_header_wrap">
                    <th>Product Image</th>
                    <th>Title</th>
                    <th>Unit Price</th>
                    <th>In-Stock</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody v-for="item in cart.getCart" :key="item.id">
                  <tr class="table_list_wrap">
                    <td data-label="Product Image" class="item_img">
                      <img :src="item.image" alt="" />
                    </td>
                    <td data-label="Title">{{ item.title }}</td>
                    <td data-label="Unit Price">$ {{ item.price }}</td>
                    <td data-label="In-Stock">
                      {{ item.rating.count - item.quantity }}
                    </td>
                    <td data-label="Quantity">{{ item.quantity }}</td>
                    <td data-label="Total Price">
                      {{ (item.price * item.quantity).toFixed(2) }}
                    </td>
                    <td class="table_btn">
                      <!-- <button
                        
                      >
                        Sold
                      </button> -->
                      <button @click="$store.commit('DELETE_CART', item.id)">
                        remove
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- BOTTOM BTN CONTAINER -->
              <section>
                <div class="footer">
                  <hr />
                  <div class="total_cart">
                    <h2>Total</h2>
                    <h2>$ {{ $store.getters.getTotalItems }}</h2>
                  </div>
                  <div class="action_btn">
                    <div>
                      <button class="btn clear_btn" @click="handleDeleteModal">
                        clear Order
                      </button>
                    </div>
                    <div>
                      <button class="btn clear_btn" @click="OrderItems">
                        {{
                          cart.getCart.length > 1 ? 'Order Items' : 'Order Item'
                        }}
                      </button>
                    </div>
                  </div>
                </div>
                <!-- Modal COMPONENT -->
                <Modal
                  :show-modal="toggleModal"
                  modal-style="max-width: 650px"
                  title="Delete Cart"
                  @closeModal="toggleModal = false"
                >
                  <div>
                    <h4>Are you sure you want to do this?</h4>

                    <button class="btn clear_btn" @click="handleDeleteItems">
                      Confirm
                    </button>
                  </div>
                </Modal>
              </section>
              <!--END OF BOTTOM BTN CONTAINER -->
            </div>
            <div v-else>
              <h4>NO ITEM FOUND</h4>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import newDashboardHeader from '~/components/newDashboardComponents/Header.vue'
import Modal from '~/components/modalComponent/Modal.vue'
export default {
  components: { newDashboardHeader, Modal },
  middleware: 'auth',

  data() {
      return {
        toggleModal: false,
      }
    },
  computed: {
    fullYear() {
      return new Date().getFullYear()
    },
    

    cart() {
      return this.$store.getters
    },
  },
  methods: {
    handleDeleteModal() {
      this.toggleModal= true

    },
    handleDeleteItems() {
      this.$store.commit('CLEAR_CART')
      this.toggleModal = false
    },
    async OrderItems() {
      try {
        await this.$swal({
          title: 'Product ordered successfully.',
          icon: 'success',
          allowEscapeKey: false,
          allowOutsideClick: false,
          timer: 4000,
          timerProgressBar: true,
          text: 'You will be directed to our dashboard.',
          showConfirmButton: false,
        })
        this.$store.commit('CLEAR_CART')
        this.$router.push('/Products')
      } catch (error) {}
    },
  },

  beforeMount() {},
}
</script>

<style scoped>
/* STOCK SOLD COMPONENT */

.sub_container {
  padding-top: 150px;
  width: 100%;
  height: 100%;
  margin-bottom: 2rem;
}

.all_content {
  max-width: 1300px;
  margin: 0 auto;
}

/* ========BTN CONTAINER STYLES========= */
.btn_container {
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  flex-direction: row;
  padding-left: 10px;
  padding-right: 15px;
  margin-bottom: 2rem;
}

/* ++++++ left btn container +++++++ */
.left_btn_content button {
  width: 184px;
  height: 24px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  color: #000;
  border: none;
  outline: none;
  background: transparent !important;
}

.left_btn_content button span {
  color: #9f9f9f !important;
}
/* ++++++ end of left btn container +++++++ */

/* ++++++ right btn container +++++++ */
.right_btn_content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.right_btn_content button {
  background: rgba(158, 33, 64, 0.1);
  border-radius: 23px;
  border: none;
  outline: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #9e2140;
  margin-right: 20px;
}

.right_btn_content button:nth-child(1) {
  width: 106px;
  height: 38px;
}

.right_btn_content button:nth-child(2) {
  width: 76px;
  height: 38px;
}

.right_btn_content button:nth-child(3) {
  width: 115px;
  height: 38px;
}

.right_btn_content button:nth-child(4) {
  width: 96px;
  height: 38px;
  margin-right: 0;
}
/* ++++++ end of right btn container +++++++ */

/* ======== END OF BTN CONTAINER STYLES========= */

/* ======== TABLE CONTAINER STYLES ========  */
/* THIN LINE STYLES */
.thin-line-wrap {
  width: 100%;
  position: relative;
  top: 80px;
  z-index: 1;
}
.line {
  border: 1px solid #c8c8c8;
  background-color: #c8c8c8;
}

/* TABLE CONTENT STYLES */
.table_content {
  padding-top: 2rem;
  padding-left: 15px;
  padding-right: 15px;
}
table {
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  position: relative;
}
thead {
  /*background: #f4f1ef;*/
  font-family: 'Montserrat-bold';
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
}

tbody {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
}
tr {
  padding: 0.35em;
}
tr:hover button {
  display: block;
}

.item_img img {
  width: 100%;
  max-width: 70px;
}

th,
td {
  padding-top: 1.3em;
  padding-bottom: 1.3rem;
}

th:nth-child(1),
td:nth-child(1) {
  width: 250px;
}

td:nth-child(3),
td:nth-child(4),
td:nth-child(5),
td:nth-child(6),
th:nth-child(3),
th:nth-child(4),
th:nth-child(5),
th:nth-child(6) {
  text-align: right;
  padding-right: 3rem;
}

.table_btn {
  display: flex;
}

.table_btn button {
  display: none;
}
.table_btn button:hover {
  display: block;
}

/*.table_btn button:nth-child(1) {
  background: rgba(158, 33, 64, 0.1);
  border-radius: 5px;
  width: 52px;
  height: 28px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #9e2140;
  border: none;
  outline: none;
  margin-right: 10px;
}
*/

.table_btn button {
  width: 96px;
  height: 28px;
  background: #9e2140;
  border-radius: 5px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  border: none;
  outline: none;
  margin-top: 1.5rem;
}

.table_btn button:nth-child(2) span {
  margin-left: 3px;
}

/* ======== END OF TABLE CONTAINER STYLES========= */

/* ======== SIDE HUB ======*/
.sides-hub {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-top: 70px;
  background: #f4f1ef;
}
p {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: rgba(0, 0, 0, 0.35);
}
/* ========END OF SIDE HUB ======*/

/* =====MEDIA QUERIES=====*/

/* ===== Footer ========*/
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
@media screen and (max-width: 1300px) {
  .sub_container {
    padding-left: 7%;
    padding-right: 7%;
    height: 100%;
  }
  .thin-line-wrap {
    display: none;
  }

  .table_content table {
    border: 0;
  }
  thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  tr {
    border-bottom: 3px solid #000;
    display: block;
    margin-bottom: 0.625em;
  }

  td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
  }
  td::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  td:last-child {
    border-bottom: 0;
  }
  th:nth-child(1),
  td:nth-child(1) {
    width: 100%;
  }

  td:nth-child(3),
  td:nth-child(4),
  td:nth-child(5),
  td:nth-child(6),
  th:nth-child(3),
  th:nth-child(4),
  th:nth-child(5),
  th:nth-child(6) {
    text-align: right;
    padding-right: 0rem;
  }
}

@media screen and (max-width: 900px) {
  .btn_container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }
}

@media screen and (max-width: 500px) {
  .right_btn_content {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }
}

/* ===== END OF MEDIA QUERIES=====*/
</style>
