<template>
  <div class="home">
    <BlogPost :info="welcomeScreen" />
    <BlogPost
      v-for="(info, index) in sampleBlogPost"
      :key="index"
      :info="info"
    />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>You Can Post Your Products Online</h3>
        <div class="blog-content">
          <BlogCard :sampleBlogCards="sampleBlogCards" />
        </div>
      </div>
    </div>
    <div>
      <Hero />
    </div>
  </div>
</template>

<script>
import BlogPost from '../../components/BlogPost.vue'
import BlogCard from '../../components/BlogCard.vue'
import Arrow from '../../assets/icons/arrow-right-light.svg'
import { sampleBlogCards } from '../../assets/helper'
import Hero from '../../components/landingPage/Hero.vue'
// import Footer from '../../components/Footer.vue'
export default {
  name: 'Home',
  components: {
    BlogPost,
    BlogCard,
    Arrow,
    Hero,
    // Footer
  },
  data() {
    return {
      welcomeScreen: {
        title: 'Welcome!',
        post: 'Get deals on Shopping in women and men wears at Wings dealers. As well as electronic stuffs',
        welcomeScreen: true,
        photo: 'boutique-shop',
      },
      sampleBlogPost: [
        {
          title: 'Men and Women Wear Available ',
          checkout: 'Checkout more clothings',
          photo: 'wears',
        },
        {
          title: 'Electronics gadget Available',
          checkout: 'Checkout more',
          photo: 'electronics',
        },
      ],
      sampleBlogCards: sampleBlogCards,
    }
  },

  head() {
    return {
      title: 'Home Page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home Page',
        },
      ],
    }
  },
}
</script>

<style scoped>
.blog-card-wrap h3 {
  font-weight: 300;
  font-size: 28px;
  margin-bottom: 32px;
}

.blog_content {
  width: 90vw;
  margin: 3rem auto;
  max-width: 1170px;
  display: flex;

  cursor: hand;
  transform: 0.2s ease-in-out;
}

.router-button {
  display: flex;
  font-size: 14px;
  text-decoration: none;
}

h2 {
  font-weight: 300;
  font-size: 32px;
  max-width: 425px;
  width: 100%;
  text-align: center;
  text-decoration: uppercase;
}

@media screen and (min-width: 800px) {
  .container {
    padding: 125px 25px;
    flex-direction: row;
  }
  .router-button {
    margin-left: auto;
  }
  h2 {
    text-align: initial;
    font-size: 40px;
  }
}

@media screen and (max-width: 800px) {
  .home {
    margin-top: -1rem;
  }
}
</style>
