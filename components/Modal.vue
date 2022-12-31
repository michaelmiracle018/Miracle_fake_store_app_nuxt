<template>
  <section class="main_container">
    <!-- <newDashboardHeader /> -->
    <transition name="pop" appear>
      <div class="sub_container">
        <div class="all_content">
          <div class="main_card">
            <div class="sub_card">
              <h4 class="text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
                dicta. Maxime praesentium consequuntur incidunt corrupti
                deleniti culpa blanditiis enim voluptatem modi fugit ipsam,
                cumque quasi libero nesciunt odio quibusdam nostrum, ex ipsa.
                Omnis, vel?
              </h4>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
// import newDashboardHeader from '../../components/newDashboardComponents/Header.vue'
export default {
  components: {},
  props: ['toggleModal'],

  computed: {
    fullYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style scoped>
/* TRANSITION */
.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
.main_container {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(15px);
  height: 100vh;
}
.sub_container {
  padding-top: 150px;
  height: 100vh;
  width: 100%;
  padding-bottom: 100px;
  padding-left: 5%;
  padding-right: 5%;
}

.main_card {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sub_card {
  width: 530px;
  border-radius: 5px;
  height: 100%;
  background: #ffffff;
}
.text {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  text-transform: capitalize;
}
/* BTN CONTAINER STYLES*/
.btn_container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

.btn_sub_container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.btn_sub_container .left_btn_wrap button {
  width: 81px;
  height: 46px;
  background: rgba(158, 33, 64, 0.1);
  border: none;
  outline: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #9e2140;
  cursor: pointer;
}

.btn_sub_container .right_btn_wrap button {
  width: 90px;
  height: 46px;
  background: #9e2140;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
}
/* END OF BTN CONTAINER STYLES*/

/* MEDIA QUERIES */

@media screen and (max-width: 1600px) {
  .sub_container {
    height: 100%;
    padding-left: 7%;
    padding-right: 7%;
  }
}

@media screen and (max-width: 500px) {
  .input_container .first_input_wrap {
    flex-direction: column;
  }

  .input_container .first_input_wrap input {
    max-width: 450px;
  }

  .second_input_wrap {
    flex-direction: column;
  }

  .second_input_wrap input {
    max-width: 450px;
  }
  .cedis_icon_wrap {
    right: 210px;
  }

  .input_container .first_input_wrap .right_input_wrap input {
    text-indent: 60px;
  }
}
</style>
