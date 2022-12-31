<template>
  <section class="news_container">
    <div class="news_sub_container">
      <div class="news_wrap">
        <h1>Newsletter</h1>
        <h3>Subscribe to receive discounts & more!</h3>
        <div class="form">
          <div class="form-item">
            <input
              type="email"
              id="username"
              autocomplete="off"
              required
              v-model="email"
            />
            <label for="email">Email</label>
          </div>
        </div>
        <button @click="submit">Subscribe</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async submit() {
      if (this.email === "") {
         {
        this.$swal({
          title: "Email Needed",
          icon: "error",
          allowEscapeKey: false,
          allowOutsideClick: true,
          timer: 2000,
          timerProgressBar: true,
          // text: "You will be notified when we have a deal or items on sale.",
          showConfirmButton: false,
        });
      }
      } else {
        this.$swal({
          title: "Thank You For Subscribing.",
          icon: "success",
          allowEscapeKey: false,
          allowOutsideClick: false,
          timer: 4000,
          timerProgressBar: true,
          text: "You will be notified when we have a deal or items on sale.",
          showConfirmButton: false,
        });
      }
    },
  },
};
</script>

<style scoped>
.news_container {
  width: 100%;
  height: 100%;
  max-width: 800px;
  min-height: 250px;
  background-color: rgb(196, 23, 118);
  margin: 2rem auto;
  border-radius: 20px;
}

.news_sub_container {
  padding-top: 1rem;
  display: flex;
  justify-content: center;
}

.news_container h1,
h3 {
  color: white;
  margin-bottom: 1rem;
  font-size: 20px;
  font-family: "montserrat";
}
*,
*:focus {
  outline: none;
}

.form {
  width: 100%;
  margin: 0 auto;
  font-family: sans-serif;
}
.form-item {
  position: relative;
  margin-bottom: 15px;
}
.form-item input {
  display: block;
  width: 100%;
  max-width: 400px;
  height: 40px;
  background: transparent;
  border: solid 1px #ccc;
  transition: all 0.3s ease;
  padding: 0 15px;
}
.form-item input:focus {
  border-color: #fff;
}
.form-item label {
  position: absolute;
  cursor: text;
  z-index: 2;
  top: 13px;
  left: 10px;
  font-size: 12px;
  font-weight: bold;
  background-color: rgb(196, 23, 118);

  padding: 0 10px;
  color: #999;
  transition: all 0.3s ease;
}
.form-item input:focus + label,
.form-item input:valid + label {
  font-size: 11px;
  top: -5px;
}
.form-item input:focus + label {
  color: #fff;
}

button {
  max-width: 400px;
  width: 100%;
  height: 40px;
  border: 1px solid #fff;
  font-size: 20px;
  font-family: "montserrat";
  background-color: rgb(196, 23, 118);
  color: #fff;
}

button:hover {
  background-color: rgb(254, 71, 172);
}
</style>
