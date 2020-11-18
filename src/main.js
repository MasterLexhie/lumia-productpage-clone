import Vue from 'vue'
import App from './App.vue'
import apolloProvider from "./apollo"
import Vuex from 'vuex'
import '@/assets/css/main.css'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    cart: [],
    openCartList: false,
    currencyValue: 'USD'
  },
  mutations: {
    setCurrencyValue(state, value) {
      return state.currencyValue = value
    },
    openCart(state) {
      state.openCartList === false 
      ? (
          state.openCartList = true,
          document.body.classList.add('hideOverflowY')
        ) 
      : state.openCartList === true
      ? (
          state.openCartList = false,
          document.body.classList.remove('hideOverflowY')
        )
      : null
    },
    addItem(state, payload) {
      const product = { ...payload, qty: 1 };
      
      const productInCart = state.cart.find(
        product => product.id === payload.id
      )

      state.cart.length === 0 || state.cart === undefined || !productInCart
      ? state.cart.push(product)
      : productInCart
      ? productInCart.qty = productInCart.qty + 1
      : null
    },
    removeItem(state, payload) {
      const productInCart = state.cart.find(
        product => product.id === payload.id
      )

      productInCart && productInCart.qty > 1
      ? productInCart.qty = productInCart.qty - 1 
      : productInCart.qty === 1 
      ? state.cart = state.cart.filter(product => product.id !== payload.id) 
      : null
    },
    deleteItemFromCart(state, payload) {
      return state.cart = state.cart.filter(product => product.id !== payload.id) 
    }
  }
});

new Vue({
  store,
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
