<template>
  <div>
    <div class="related_item_wrap">
      <h2>Related Products</h2>
      <div class="item_wrap">
        <div
          class="single_card_item"
          v-for="item in getCategory.getSpecificCategory"
          :key="item.id"
        >
          <div class="item_title">
            <h4>{{ item.title }}</h4>
          </div>
          <div class="item_image">
            <nuxt-link class="card" :to="`/Products/${item.id}`">
              <img :src="item.image" alt="image" />
            </nuxt-link>
          </div>
          <div class="footer">
            <span>$ {{ item.price }}</span>
            <button @click="addToCart(item)">Add To cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  computed: {
    getCategory() {
      return this.$store.getters
    },
  },
  methods: {
    addToCart(item) {
      this.$store.commit('ADD_TO_CART', item)
    },
  },
  created() {
    console.log(this.getCategory)
  },
}
</script>

<style scoped>

.related_item_wrap h2 {
  margin-top: 1rem;
}
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

  color: #000000;
}

/*END OF SELECT STYLES*/
</style>
