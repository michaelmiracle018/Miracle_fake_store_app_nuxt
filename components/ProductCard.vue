<template>
  <section class="main_container">
    <div class="sub_container">
      <header class="header">
        <h1>All Our Deals</h1>
      </header>
      <div class="item_wrap">
        <div
          class="single_card_item"
          v-for="item in products.getAllProducts"
          :key="item.id"
        >
          <div class="item_title">
            <h4>{{ item.title }}</h4>
          </div>
          <div class="item_image">
            <img :src="item.image" alt="image" />
          </div>
          <div class="item_category">
            <h4><span>Category:</span> {{ item.category }}</h4>
          </div>
          <div class="item_rating">
            <h6>
              rating:
              <span>{{ item.rating }}</span>
            </h6>
            <button>view more</button>
          </div>
          <div class="footer">
            <span>GhC {{ item.price }}</span>
            <button>Add To cart</button>
          </div>
        </div>
      </div>
       
     
       </div>
  </section>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['products'],
  methods: {
   
  },
}
</script>

<style scoped>

</style>
