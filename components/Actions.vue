<template>
  <section class="main_container">
    <header>
      <h3>Choose a card to perform an action.</h3>
    </header>
    <div>
      <div class="card_content">
        <div class="blog_card" v-for="(info, index) in info" :key="index">
          <img
            :src="require(`~/assets/images/${info.photo}.jpeg`)"
            alt=""
            class="img"
          />
          <div class="info">
            <h4>{{ info.title }}</h4>
            <h6>{{ info.desc }}</h6>
            <router-link class="link" :to="`/${info.page}`">{{
              info.btn
            }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import Arrow from '~/assets/icons/arrow-right-light.svg'

export default {
  name: 'BlogCard',
  props: ['info'],
  components: {},
  computed: {},
}
</script>

<style scoped>
.main_container {

}

header h3 {
  color: #333;
  text-align: center;
}

.card_content {
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
  transition: 0.5s ease all;
  background-color: #fff;
}

.blog_card:hover {
  transform: rotate(-1deg) scale(1.01);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

img {
  width: 100%;
  height: 12rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.info {
  margin-top: 3rem;
  height: 170px;
}

.info h4 {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  text-transform: none;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.info h6 {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #333;
  text-transform: none;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.info a {
  width: 100px;
  height: 78px;
  background: #f23564;
  border-radius: 5px;
  outline: none;
  border: none;
  font-family: 'Montserrat-bold';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
  padding: 0.6rem;
  text-decoration: none;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  text-transform: none;
}
</style>
