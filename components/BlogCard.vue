<template>
  <section>
    <div class="blog_container">
      <div
        class="blog_card"
        v-for="(info, index) in sampleBlogCards"
        :key="index"
      >
        <img :src="require(`~/assets/postCards/${info.photo}.jpg`)" alt="" />
        <div class="info">
          <h4>{{ info.title }}</h4>
          <h6>Posted on: {{ info.date }}</h6>
          <router-link class="link" to="#"> View The Post </router-link>
        </div>
      </div>
    </div>
 
  </section>
</template>

<script>
// import carousel from 'vue-owl-carousel'
export default {
  name: 'BlogCard',
  props: ['sampleBlogCards'],
  components: {  },

  computed: {},
}
</script>

<style scoped>
.blog_container {
  width: 90vw;
  margin: 3rem auto;
  max-width: 1170px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  cursor: hand;
  transform: 0.2s ease-in-out;
}

.blog_card {
  width: 100%;
  transition: 0.5s ease all;
  background-color: #fff;
}

.blog_card:hover {
  transform: rotate(-1deg) scale(1.01);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.blog_card img {
  width: 100%;
  height: 12rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.info {
  display: flex;
  flex-direction: column;
  height: 100%;
  z-index: 3;
  padding: 32px 16px;
  color: black;
}

h4 {
  padding-bottom: 8px;
  font-size: 20px;
  font-weight: 300;
}

h6 {
  font-weight: 400;
  font-size: 12px;
  padding-bottom: 16px;
}

.link {
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  padding-top: 20px;
  font-size: 20px;
  padding-bottom: 4px;
  transition: 0.5s ease-in all;
}
.link:hover {
  color: rgba(48, 48, 48, 0.8);
}
</style>
