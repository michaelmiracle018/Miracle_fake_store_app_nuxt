<template>
  <div class="form-wrap">
    <form class="login" @click.prevent="handleSubmit">
      <h2>Login</h2>
      <div class="inputs">
        <div class="input">
          <input
            type="text"
            placeholder="Username"
            v-model="username"
            name="username"
            required
          />
        </div>
        <div class="input">
          <input
            type="password"
            placeholder="Password"
            v-model="password"
            name="password"
            required
          />
        </div>
        <!-- <div class="error" >{{ this.errorMsg }}</div> -->
        <div class="text" v-show="msg">{{ this.textMsg }}</div>
      </div>
      <button>Sign IN</button>
      <div class="angle"></div>
      <div class="copy_text">
        <h4>
          <span class="text">Note</span> : Please copy the text below into the
          username input.
          <span class="text">Password has been entered already.</span>
        </h4>
        <div class="control" style="width: 100%">
          <label for="username">Username: </label>

          <input
            v-on:focus="$event.target.select()"
            ref="generator"
            v-model="copyUsername"
            id="generator"
            class="input is-medium is-rounded"
            type="text"
            readonly
            placeholder="GUID goes here"
          />
          <div class="btn_wrap">
            <button class="span_btn" v-on:click.prevent="copyToClipboard">
              <i class="fa-solid fa-copy"></i>
            </button>
          </div>
        </div>
        <button class="back_btn_login" @click="$router.push('/')">
          Back To Home
        </button>
      </div>
    </form>
    <div class="background">
      <button class="back_btn" @click="$router.push('/')">Back To Home</button>
      <!-- <h2 v-show="networkErr">{{ networkMsg }}</h2> -->
    </div>
  </div>
</template>

<script>
import errorResponse from '~/helpers/errorResponse'
export default {
  name: 'Login',
  components: {},
  data() {
    return {
      username: '',
      password: '83r5^_',
      copyUsername: 'mor_2314',
      // copyPassword: '83r5^_',
      textMsg: null,
      msg: false,
      errorMsg: '',
      error: false,
      networkErr: false,
      networkMsg: '',
    }
  },

  computed: {
    getLoginToken() {
      return this.$store.state.loginToken
    },
    getError() {
      return this.$store.getters
    }
  },

  methods: {
    // HANDLE SUBMIT FOR LOGIN
    async handleSubmit() {
      if (this.username !== '' && this.password !== '') {
        this.msg = false
        this.textMsg = ''
        try {
          await this.$store.dispatch('login', {
            username: this.username,
            password: this.password,
          })
          this.username = ''
        } catch (error) {
          console.log(error)
      //  this.errorMsg = errorResponse(error)
        }
      } else {
        this.msg = true
        this.textMsg = 'Please enter all fields'
      }
    },
    // COPY TO CLIPBOARD

    copyToClipboard() {
      this.$refs.generator.focus()
      document.execCommand('copy')
      this.$swal({
        toast: true,
        text: 'Text Copied',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
        position: 'top-end',
      })
    },
  },
  created() { },
    head() {
    return {
      title: 'Login Page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Login Page',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.copy_text {
  margin-top: 1rem;

  @media screen and (min-width: 900px) {
    .back_btn_login {
      display: none;
    }
  }
}

.text {
  color: red;
}

.control {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  .btn_wrap {
    .span_btn {
      margin-bottom: 2rem;
    }
  }
}
.form-wrap {
  background: #fff;
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  @media screen and (min-width: 900px) {
    width: 100%;
    padding-top: 0rem;
    padding-bottom: 0rem;
  }
  .login-register {
    margin-bottom: 32px;

    .router-link {
      color: #000;
    }
  }
  form {
    padding: 0 10px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex: 1;
    @media screen and (min-width: 900px) {
      padding: 0 50px;
    }
    h2 {
      text-align: center;
      font-size: 32px;
      color: #303030;
      margin-bottom: 40px;
      @media screen and (min-width: 900px) {
        font-size: 40px;
      }
    }

    .inputs {
      width: 100%;
      max-width: 350px;

      .input {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;

        input {
          width: 100%;
          border: none;
          background-color: #f2f7f6;
          padding: 4px 4px 4px 30px;
          height: 50px;
          color: #000;

          &:focus {
            outline: none;
          }
        }
        .icon {
          width: 12px;
          position: relative;
          left: -330px;
        }
      }
    }

    .forget-password {
      text-decoration: none;
      color: #000;
      cursor: pointer;
      font-size: 14px;
      margin: 16px 0 32px;
      border-bottom: 1px solid transparent;
      transition: 0.5s ease all;
      &:hover {
        border-color: #303030;
      }
    }
    .angle {
      display: none;
      position: absolute;
      background-color: #fff;
      transform: rotateZ(3deg);
      width: 60px;
      right: -30px;
      height: 101%;
      @media screen and (min-width: 900px) {
        display: initial;
      }
    }
  }
  .background {
    display: none;
    flex: 2;
    background-size: cover;
    background-image: url('../assets/images/background.png');
    widows: 100%;
    height: 100%;

    .back_btn {
      margin-left: 7rem;
      transition: 500ms ease all;
      cursor: pointer;
      margin-top: 24px;
      padding: 12px 24px;
      background-color: #e94991;
      color: #fff;
      border-radius: 20px;
      border: none;
      text-transform: uppercase;
    }

    @media screen and (min-width: 900px) {
      display: initial;
    }
  }
}

button {
  transition: 500ms ease all;
  cursor: pointer;
  margin-top: 24px;
  padding: 12px 24px;
  background-color: #303030;
  color: #fff;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgba(48, 48, 48, 0.7);
  }
}
</style>
