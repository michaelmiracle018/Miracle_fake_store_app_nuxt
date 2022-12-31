<template>
  <section class="main_container">
    <div class="sub-container">
      <Carousel />
    </div>
    <div class="card_content">
      <Actions :info="ActionsInfo" />
    </div>
    <div class="footer">
      <!-- <Footer /> -->
    </div>
  </section>
</template>

<script>
import Carousel from '~/components/landingPage/Carousel'
import { ActionsInfo } from '~/assets/helper'
import Actions from '~/components/Actions'
// import Footer from '~/components/Footer'
export default {
  middleware: 'auth',
  components: { Actions, Carousel},
  data() {
    return {
      ActionsInfo: ActionsInfo,
    }
  },
    head() {
    return {
      title: 'MiniApp Page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'MiniApp Page',
        },
      ],
    }
  },
}
</script>

<style scoped>
.main_container {
  height: 100vh;
  margin-bottom: 2rem;
}


</style>
