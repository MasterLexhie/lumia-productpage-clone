<template>
  <div v-if="openCartList" class="cart animateBody">
    <div class="overlay"></div>
    <div class="cart__body">
      <div class="cart__body_header mb-20 px-1">
        <div class="relative flex flex-v-center pt-20 pb-20">
          <button type="button" @click.prevent="openCart">
            <svg 
              viewBox="0 0 256 512" 
              focusable="false" 
              role="presentation">
              <path fill="currentColor" d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"></path>
            </svg>
          </button>
          <h5>YOUR CART</h5>
        </div>
        <label 
          for="currency" 
          class="flex flex-v-center relative"
          aria-label="Select language"
        >
          <select 
            v-model="currencyValue"
            id="currency" 
            name="currency" 
            class="currency"
          >
            <option 
              v-for="(item, index) in currency" 
              :key="index" 
              :value="item"
            >
              {{ item }}
            </option>
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
      <p 
        v-if="cart.length === 0 
        || cart.length === undefined" 
        class="text-center"
      >
        There are no items in your cart.
      </p>
      <div class="px-1">
        <div class="cart__cards grid">
          <div 
            v-for="item in cart"
            :key="item.id" 
            class="cart__cards-item relative flex"
          >
            <span class="remove-item" @click.prevent="deleteItemFromCart(item)">&#215;</span>
            <div class="products__description grid">
              <h3 class="no-bold">{{ item.title }}</h3>
              <div class="flex flex-h-bet">
                <p>{{`${currencyValue} ${ item.price * item.qty }`}}</p>
                <div class="counter flex flex-v-center">
                  <button type="button" @click.prevent="removeItem(item)"> - </button>
                  <input v-model="item.qty" type="text" disabled />
                  <button type="button" @click.prevent="addItem(item)"> + </button>
                </div>
              </div>
            </div>
            <div class="product__image">
              <img src="@/assets/images/image-1.webp" alt="Product image" />
            </div>
          </div>
        </div>
      </div>
      <div v-if="cart.length !== 0" class="cart__totals px-1">
        <div class="flex flex-v-center flex-h-bet">
          <p>Subtotal</p>
          <h3>{{`${currencyValue} ${total} `}}</h3>
        </div>
        <button class="full-width" type="button">REVERT TO ONE TIME PURCHASE</button>
        <button class="full-width" type="button">PROCEED TO CHECKOUT</button>
      </div>
    </div>
  </div>
</template>
<script>
import { currency } from '../graphql';
import { mapState, mapMutations } from 'vuex';

export default {
  apollo: {
    currency,
  },
  data() {
    return {
      currencyValue: 'NGN'
    }
  },
  computed: {
    ...mapState([
      'openCartList',
      'cart'
    ]),
    total () {
      return Object.values(this.cart)
        .reduce((acc, el) => acc + el.qty * el.price, 0)
        .toFixed(2)
    }
  },
  methods: {
    ...mapMutations([
      'openCart',
      'addItem',
      'removeItem',
      'deleteItemFromCart'
    ]),
  }
}
</script>
<style scoped>
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
.cart {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  z-index: 90;
  opacity: 1;
}

.cart__body {
  background: #f2f2ef;
  position: fixed;
  top: 0;
  bottom: 0;
  max-width: 550px;
  width: 100%;
  z-index: 200;
  right: 0;
  display: grid;
  grid-template-rows: 120px 1.5fr 1fr;
}

.cart__body_header button {
  width: 25px;
  height: 25px;
  display: inline-block;
  border: 1px solid rgb(198, 204, 199);
  border-radius: 50%;
  padding: 5px;
}

.cart__body_header button svg {
  width: 100%;
  height: 100%;
  transform: rotateZ(180deg);
}

.cart__body_header h5 {
  color: #696969;
  text-align: center;
  flex: auto;
}

.cart__body_header label {
  max-width: 70px;
}

.cart__body_header label span {
  position: absolute;
  width: 1.5em;
  height: 100%;
  right: 0;
  opacity: 0.5;
}

.currency {
  padding: .5em 2em .5em .7em;
  border: none;
  color: #2b2e2b;
  appearance: none;
  cursor: pointer;
  background-color: #fff;
  width: 100%;
}

.cart__cards {
  grid-gap: 1em;
  overflow-y: scroll;
  max-height: 320px;
  padding-right: 1em;
}

.cart__cards-item {
  background: #fff;
}

.remove-item {
  position: absolute;
  right: 10px;
  top: 3px;
  cursor: pointer;
  font-size: 25px;
  font-weight: bold;
}

.products__description {
  flex: auto;
  padding: 1em 1em 1em 1.5em;
  grid-gap: 1em;
}

.products__description > div {
  align-self: end;
  flex-direction: column;
}

.products__description > div p {
  font-size: 1.1em;
  letter-spacing: .03px;
  margin-bottom: 1em;
}

.counter {
  border: .5px solid #bcbcbc;
  height: 40px;
  max-width: 90px;
}

.counter input {
  height: 100%;
  width: 60%;
  background: #fff;
  border: none;
  text-align: center;
  font-size: 1.2em;
  color: #000;
}

.counter button {
  font-size: 14px;
  height: 100%;
  width: 20%;
}

.product__image {
  max-width: 190px;
  width: 100%;
  max-height: 160px;
}

.product__image img {
  object-fit: scale-down;
}

.cart__totals {
  border-top: 1px solid #d0d0d0;
  box-shadow: 0 -4px 12px rgba(0,0,0,.15);
}

.cart__totals > div {
  margin: 2em 0;
}

.cart__totals button {
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  padding: 16px 20px;
  text-align: center;
  text-decoration: none;
}

.cart__totals button{
  color: #2b2e2b;
  letter-spacing: .96px;
  border: 1px solid #2b2e2b;
  background-color: #fff;
}

.cart__totals button:last-child {
  color: #fff;
  letter-spacing: 2px;
  background-color: #4b5548;
  border: none;
  margin-top: 15px;
}

@media (min-width: 465px) {
  .products__description > div {
    flex-direction: row;
    align-items: center;
  }

  .products__description > div p{
    order: 1;
    margin-bottom: 0;
  }
}
</style>