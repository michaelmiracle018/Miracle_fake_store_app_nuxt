<template>
  <section class="main_container">
    <div class="hero_center">

      <div class="sub_container">
        <div class="left_container">
          <p class="email_us">miradefashion018@gmail.com</p>
          <h1 class="header_text">
            A style for <br />
            <span>every story.</span>
          </h1>
          <p class="paragraph_text">
            Get the latest styles here at an inexpensive price!
          </p>
          <button class="shop_btn" @click="$router.push('/Products')">Shop Online</button>
          <ul class="icons">
            <li>
              <i class="fab fa-twitter"></i>
            </li>
            <li>
              <i class="fab fa-facebook"></i>
            </li>
            <li>
              <i class="fab fa-linkedin"></i>
            </li>
          </ul>
        </div>
        <div class="right_container">
          <img src="../../assets/images/fashion logo.webp" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.main_container {
  background-color: #fff;
  width: 100%;
}

.sub_container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/*LEFT CONTAINER STYLES */
.left_container {
  padding-top: 8rem;
  flex: 1;
}
.email_us {
  color: #7a6de3;
  font-family: 'montserrat';
  font-weight: 400;
  font-size: 16px;
}

.header_text {
  color: #000;
  font-family: 'montserrat-bold';
  font-weight: 700;
  font-size: clamp(2rem, 10vw, 4rem);
}

.paragraph_text {
  color: #000;
  font-family: 'montserrat';
  font-weight: 300;
  font-size: 14px;
}

.shop_btn {
  width: 150px;
  height: 50px;
  color: #fff;
  font-family: 'montserrat';
  font-weight: 300;
  font-size: 14px;
  border: none;
  outline: none;
  background-color: rgb(232, 40, 120);
  border-radius: 30px;
  cursor: pointer;
}

.icons {
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  margin-top: 5rem;
}

.icons li {
  list-style-type: none;
}

.icons li i {
  color: rgb(171, 169, 169);
}

/*END OF LEFT CONTAINER STYLES */

/* RIGHT CONTAINER STYLES */
.right_container{
  flex: 2;
}
.right_container img {
  width: clamp(200px, 80%, 500px);
}
/*END OF RIGHT CONTAINER STYLES */

/*MEDIA QUERIES */
@media screen and (max-width: 900px) {
  .sub_container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .right_container {
    display: flex;
    justify-content: center;
  }

  .icons {
    margin-top: 1rem;
  }
}

@media screen and (max-width: 799px) {
  .main_container {
    padding-top: -2rem;
  }
  
}

@media screen and (min-width: 1000px) {
 
  .hero_center {
     display: flex;
  max-width: 1170px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  }
 
}

@media screen and (min-width: 1100px) {
 
  .right_container img {
    width: clamp(30rem, 100%, 50rem);
  }
}

@media screen and (min-width: 1400px) {
   .right_container img {
    width: clamp(50rem, 100%, 70rem);
  }
}
</style>
