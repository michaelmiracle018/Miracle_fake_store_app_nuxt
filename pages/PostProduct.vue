<template>
  <section class="main_container">
    <!-- <newDashboardHeader /> -->
    <div class="sub_container">
      <div class="all_content">
        <div class="main_card">
          <div class="sub_card">
            <div class="inner_content">
              <div class="main_header">
                <h1>Post Your Product Online!</h1>
              </div>
              <div class="para_text_wrap">
                <p>
                  Specify the title of the product as well as an image url to
                  the product.
                </p>
              </div>
              <!-- INPUT CONTAINER -->
              <section class="input_container">
                <div class="input_sub_container">
                  <div class="first_input_wrap">
                    <div class="left_input_wrap">
                      <input
                        type="text"
                        required
                        placeholder="Title of product"
                        v-model="title"
                      />
                    </div>
                    <div class="right_input_wrap">
                      <input
                        type="text"
                        required
                        placeholder="$ Price of product"
                        v-model.number="price"
                      />
                    </div>
                  </div>
                  <div class="second_input_wrap">
                    <div class="left_input_wrap">
                      <input
                        type="text"
                        required
                        placeholder=" Description"
                        v-model="description"
                      />
                    </div>
                    <div class="right_input_wrap">
                      <input
                        type="url"
                        required
                        placeholder="Product url eg.https://i.pravatar.cc "
                        v-model="image"
                      />
                    </div>
                  </div>
                  <div class="third_input_wrap">
                    <input
                      type="text"
                      required
                      placeholder="Category eg. jewelry"
                      v-model="category"
                    />
                  </div>
                </div>
        <div class="text" v-show="msg">{{ this.textMsg }}</div>

              </section>
              <!-- END OF INPUT CONTAINER -->
              <!-- BTN CONTAINER -->
              <section class="btn_container">
                <div class="btn_sub_container">
                  <div class="left_btn_wrap">
                    <button @click="$router.push('/MiniApp')">Cancel</button>
                  </div>
                  <div class="right_btn_wrap">
                    <button @click.prevent="handleSubmit">Post</button>
                  </div>
                </div>
              </section>
              <!-- END OF BTN CONTAINER -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import newDashboardHeader from '../../components/newDashboardComponents/Header.vue'
export default {
  components: {},
  props: ['toggleModal'],
  data() {
    return {
      title: '',
      price: '',
      description: '',
      image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png',
      category: '',
      msg: false,
      textMsg: '',
    }
  },
  methods: {
    // HANDLE SUBMIT FOR LOGIN
    async handleSubmit() {
      if (
        this.title !== '' &&
        this.price !== '' &&
        this.description !== '' &&
        this.image !== '' &&
        this.category !== ''
      ) {
        this.msg = false
        this.textMsg = ''
        try {
          await this.$store.dispatch('postProduct', {
            title: this.title,
            price: this.price,
            image: this.image,
            description: this.description,
            category: this.category,
          })
          ;(this.title = ''),
            (this.price = ''),
            (this.description = ''),
          //   (this.image = ''),
            (this.category = '')
        } catch (error) {
          console.log(error)
        }
      } else {
        this.msg = true
        this.textMsg = 'Please enter all fields'
      }
    },
  },
  computed: {
    fullYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style scoped>
.text {
  color: red;
}
.main_container {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(15px);
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

.main_header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}
.main_header h1 {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #9e2140;
}

.para_text_wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 30px;
}
.para_text_wrap p {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #9f9f9f;
  width: 358px;
  height: 29px;
}

/* INPUT CONTAINER STYLES*/
.input_container {
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 50px;
}

.input_container .first_input_wrap input {
  width: 100%;
  height: 100%;
  max-width: 210px;
  max-height: 60px;
  border-radius: 0px;
}

.input_container .first_input_wrap .right_input_wrap {
  position: relative;
}

.cedis_icon_wrap {
  position: absolute;
  top: 15px;
  right: 150px;
}

.input_container .first_input_wrap {
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  flex-direction: row;
  gap: 30px;
}

.second_input_wrap {
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  gap: 30px;
  flex-direction: row;
  margin-top: 20px;
}

.second_input_wrap input {
  width: 100%;
  height: 100%;
  max-width: 210px;
  max-height: 60px;
  border-radius: 0px;
}

.second_input_wrap .right_input_wrap {
  position: relative;
}

.expand_icon_wrap {
  position: absolute;
  top: 15px;
  right: 15px;
}

.third_input_wrap {
  margin-top: 20px;
}

.third_input_wrap input {
  width: 100%;
  height: 100%;
  max-width: 450px;
  max-height: 60px;
  border-radius: 0px;
}
/*END OF INPUT CONTAINER STYLES*/

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
  background: rgba(246, 64, 110, 0.1);
  border: none;
  outline: none;
  font-family: 'Montserrat-bold';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #2b2425;
  cursor: pointer;
  border-radius: 10px;
}

.btn_sub_container .right_btn_wrap button {
  width: 72px;
  height: 46px;
  background: #f23564;
  font-family: 'Montserrat-bold';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
}
/* END OF BTN CONTAINER STYLES*/

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
    align-items: center;
  }
  .cedis_icon_wrap {
    right: 210px;
  }
}
</style>
