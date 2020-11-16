<template>
  <div>
    <Navigation />
    <main>
      <header class="filter-products">
        <div class="container flex">
          <div class="filter-products__description">
            <h1 class="mb-30">All Products</h1>
            <p>A 360° look at Lumin</p>
          </div>
          <div class="filter-products__input">
            <label for="filter" class="filter relative flex flex-v-center">
              <select name="filter" id="filter">
                <option disabled selected>Filter By</option>
                <option value="all">All Products</option>
              </select>
              <span>
                <svg 
                  viewBox="0 0 24 24" 
                  role="presentation" 
                  focusable="false" 
                  aria-hidden="true" 
                  style="width:100%;height:100%;color:currentColor">
                  <path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                </svg>
              </span>
            </label>
          </div>
        </div>
      </header>
      <Products />
      <Cart />
      <section id="man-care-movement">
        <div class="container">
          <div class="man-care-movement__title flex flex-v-center flex-h-center">
            <a href="#">Join the #ManCareMovement</a>
            <svg
              viewBox="0 0 94 94" 
              focusable="false" 
            >
              <path fill="currentColor" d="M58.75 19.5833L53.2275 25.1058L71.1658 43.0833H7.83333V50.9167H71.1658L53.1883 68.8942L58.75 74.4167L86.1667 47L58.75 19.5833Z"></path>
            </svg>
          </div>
          <div class="grid man-care-movement__grid mt-30">
            <a href="#">
              <img src="@/assets/images/instagram-image-1.webp" alt="instagram-images" />
            </a>
            <a href="#">
              <img src="@/assets/images/instagram-image-2.webp" alt="instagram-images" />
            </a>
            <a href="#">
              <img src="@/assets/images/instagram-image-3.webp" alt="instagram-images" />
            </a>
            <a href="#">
              <img src="@/assets/images/instagram-image-4.webp" alt="instagram-images" />
            </a>
            <a href="#">
              <img src="@/assets/images/instagram-image-5.webp" alt="instagram-images" />
            </a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
<script>
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Cart from "./components/Cart";



export default {
  name: 'App',
  components: {
    Navigation,
    Products,
    Footer,
    Cart
  },
  methods: {

  }
}
</script>

<style scoped>
.filter-products {
  padding: 5em 0 3em;
}

.filter-products > div {
  padding: 1em 2em;
  flex-direction: column;
}

.filter-products__description > h1 {
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-size: 1.7em;
  line-height: 1.25em;
}

.filter-products__description > p {
  font-weight: 400;
  font-size: 15px;
  line-height: 1.5;
}

.filter-products__input {
  flex: 1;
  margin-top: 1.5rem;
  max-width: 100%;
}

.filter > select {
  padding: .3em 2em .3em 1.7em;
  border: 1px solid #cdd1ce;
  color: #4B5548;
  appearance: none;
  cursor: pointer;
  background-color: transparent;
  height: 57px;
  width: 100%;
  font-size: 13px;
}

.filter > select:focus {
  border: 1px solid #2b2e2b;
}

.filter > span {
  position: absolute;
  right: 11px;
  width: 1.5em;
  height: 1.5em;
}

#man-care-movement {
  padding: 3em 0;
}

.man-care-movement__title a {
  font-size: 1.5em;
  line-height: 1.3;
  text-decoration: underline;
  font-weight: 400;
  text-align: center;
}

.man-care-movement__title svg {
  width: 20px;
  height: 20px;
  margin: 7px 0 0 7px;
}

.man-care-movement__grid {
  grid-gap: 1em;
}

.man-care-movement__grid a:last-child {
  display: none;
}

@media (min-width: 320px) {
  .man-care-movement__grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media (min-width: 450px) {
  .man-care-movement__title a {
    font-size: 2em;
  }
}

@media (min-width: 659px) {
  .man-care-movement__grid {
    grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
  }
}

@media (min-width: 768px) {
  .filter-products > div {
    padding: 1em 5em;
  }

  .filter-products__description > h1 {
    font-size: 2.3em;
  }

  .man-care-movement__title a {
    font-size: 2.3em;
  }

  .man-care-movement__grid {
    grid-template-columns: repeat(5, auto);
  }
}

@media (min-width: 992px) {
  .filter-products > div {
    padding: 1em 6em;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .filter-products__description > h1 {
    font-size: 3em;
  }

  .filter-products__input {
    max-width: 350px;
    margin-top: unset;
  }

  .man-care-movement__grid a:last-child {
    display: unset;
  }
}
</style>
