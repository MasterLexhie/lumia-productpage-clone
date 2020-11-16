<template>
  <div class="navigation">
    <div class="container flex flex-v-center flex-h-bet full-height">
      <div class="navigation__logo">
        <img src="../assets/images/logo.png" alt="Lumin Skincare">
      </div>
      <div class="navigation__mobile-menu-icon">
        <button class="burger-icon" @click.prevent="openMobileMenu = true">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <nav>
        <a href="#" class="mr-20">Shop</a>
        <a href="#" class="mr-20">Help</a>
        <a href="#" class="mr-20">Blog</a>
      </nav>
      <div class="flex flex-v-center">
        <div class="navigation__cart mr-20 flex flex-v-center">
          <a href="#" class="mr-20">Account</a>
          <button class="navigation__cart-button flex">
            <img src="../assets/images/cart.png" alt="">
            <span>{{0}}</span>
          </button>
        </div>
        <label 
          for="language" 
          class="flex"
          aria-label="Select language"
        >
          <select 
            id="language" 
            name="language" class="navigation__lang-select"
          >
            <option value="en">EN</option>
          </select>
        </label>
      </div>
    </div>
    <div v-if="openMobileMenu" class="mobile-menu">
      <div class="overlay"></div>
      <div class="menu__body">
        <div class="menu__header">
          <div class="flex px-1">
            <div class="menu__header-text flex flex-h-center">
              <div class="flex flex-h-around full-width">
                <button 
                  type="button" 
                  @click.prevent="showShopMenu"
                  :class="{border: shop}"
                >
                  Shop
                </button>
                <button 
                  type="button" 
                  @click.prevent="showHelpMenu"
                  :class="{border: help}"
                >
                  Help
                </button>
              </div>
            </div>
            <button type="button" @click.prevent="openMobileMenu = false">
              <svg 
                viewBox="0 0 256 512" 
                focusable="false" 
                role="presentation">
                <path fill="currentColor" d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"></path>
              </svg>
            </button>
          </div>
        </div>
        <nav class="menu__navigations">
          <ul v-if="shop" class="shop-navigations">
            <li>
              <a href="#">Skin</a>
            </li>
            <li>
              <a href="#">Hair & Body</a>
            </li>
            <li>
              <a href="#">Sets</a>
            </li>
            <li>
              <a href="#">Shop All</a>
            </li>
          </ul>
          <ul v-if="help" class="help-navigations">
            <li>
              <a href="#">How To</a>
            </li>
            <li>
              <a href="#">Ingredients</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
            <li>
              <a href="#">Heroes Program</a>
            </li>
            <li>
              <a href="#">Covid-19 FAQ</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      openMobileMenu: false,
      shop: true,
      help: false
    }
  },
  watch: {
    openMobileMenu: function(value) {
      value === true 
      ? document.body.classList.add('hideOverflowY') 
      : document.body.classList.remove('hideOverflowY')
    }
  },
  methods: {
    showShopMenu(){
      if (this.shop === false) {
        this.shop = true;
        this.help = false;
      }
    },
    showHelpMenu(){
      if (this.help === false) {
        this.help = true;
        this.shop = false;
      }
    },
  }
}
</script>
<style scoped>
.navigation {
  padding: 7px 0;
  height: 64px;
  box-shadow: grey 0px 2px 3px -3px;
}

.navigation nav {
  flex: auto;
}

.navigation__logo {
  max-width: 163px;
  width: 100%;
  margin-right: 5em;
}

.burger-icon {
  display: block;
  width: 16px;
  margin-right: 15px;
}

.burger-icon > span{
  height: 1px;
  display: block;
  background-color: #111211;
  margin-bottom: 4px;
}

.navigation > div:first-child > nav a {
  padding: .3em 1em;
}

.navigation__cart-button {
  position: relative;
  padding: 6px;
}

.navigation__cart-button  > img {
  width: 25px;
  object-fit: scale-down;
}

.navigation__cart-button > span {
  position: absolute;
  right: -2px;
  top: 0;
  font-size: 1em;
}

.navigation__lang-select {
  padding: .3em 2em .3em .7em;
  border: 1px solid #acafad;
  color: #2b2e2b;
  appearance: none;
  cursor: pointer;
  background-color: transparent;
}

.overlay {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  opacity: 0.8;
  z-index: 100;
  background: rgb(205, 209, 206) none repeat scroll 0% 0%;
}

.mobile-menu {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  z-index: 90;
}

.menu__body {
  background: #f2f2ef;
  position: fixed;
  top: 0;
  bottom: 0;
  max-width: 450px;
  width: 100%;
  z-index: 200;
  left: 0;
}

.menu__header {
  padding: 2em 0;
}

.menu__header > div > button {
  width: 25px;
  height: 25px;
  display: inline-block;
  border: 1px solid rgb(198, 204, 199);
  border-radius: 50%;
  padding: 5px;
}

.menu__header > div > button svg {
  width: 100%;
  height: 100%;
}

.menu__header-text {
  flex: auto;
}

.menu__header-text > div {
  max-width: 300px;
}

.menu__header-text button {
  font-weight: 400;
  font-size: 0.6875rem;
  line-height: 1.5;
  display: inline-block;
  width: auto;
  border-bottom: 1px solid;
  border-color: transparent;
  cursor: pointer;
  color: rgb(110, 123, 112);
  transition: color 0.4s ease-in-out 0s, border-color 0.4s ease-in-out 0s;

}

.menu__header-text > button:hover { 
  color: rgb(110, 123, 112);
}

.menu__navigations {
  padding: 1em 4em;
}

.menu__navigations li {
  margin-bottom: 2em;
}

.menu__navigations a {
  font-size: 1.5em;
}

.border {
  border-color: var(--black-color) !important;
}

@media (max-width: 991px) {
  .navigation__logo,
  .navigation > div:first-child > nav {
    display: none;
  }
}

@media (min-width: 992px) {
  .burger-icon {
    display: none;
    width: 16px;
    margin-right: 15px;
  }

  .navigation__lang-select {
    padding: .5em 2em .5em .7em;
  }
}

</style>