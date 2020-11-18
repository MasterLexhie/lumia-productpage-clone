<template>
  <section>
    <div class="container">
      <div class="products relative grid">
        <div v-if="allProducts && $apollo.loading" class="loader"></div>
        <div 
          v-for="item in allProducts"
          :key="item.id"
          class="products__item flex flex-col flex-v-center"
        >
          <a href="#" class="flex flex-col flex-v-center mb-10">
            <img :src="item.image_url" alt="" />
            <p class="mt-20 text-center">{{ item.title }}</p>
          </a>
          <p class="mb-20 text-center">From {{ `${currencyValue} ${item.price}` }}</p>
          <button @click.prevent="addToCart(item)">Add to Cart</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import { products } from "../graphql";

export default {
  apollo: {
    products: {
      query: products,
      variables() {
        return {
          currency: this.currencyValue
        }
      },
      result({data}){
        this.setAllProducts(data.products)
      },
    }
  },
  computed: {
    ...mapState(['currencyValue', 'allProducts']),
  },
  methods: {
    ...mapMutations(['openCart','setAllProducts']),
    addToCart(item) {
      this.$store.commit('addItem', item)
      this.openCart()
    }
  }
}
</script>
<style scoped>
section {
  background: var(--primary-color-dark);
}

.products {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  padding: 3rem 0;
  grid-gap: 1em;
}

.products__item {
  padding: 2em 0 3em;
}

.products__item p {
  line-height: 1.5;
  font-size: 16px;
}

.products__item > a {
  flex: auto;
}

.products__item > a > p {
  color: #2B2E2B;
}

.products__item img {
  max-width: 150px;
  object-fit: contain;
  height: 190px;
}

.products__item > div p {
  font-size: 16px;
  margin: .5em 0;
}

button {
  background: var(--secondary-color-dark);
  color: var(--white-color);
  font-weight: 600;
  width: 100%;
  max-width: 190px;
  height: 50px;
  transition: all 200ms ease 0s;
}

button:hover {
  transition: all 200ms ease 0s;
  background: rgb(43, 46, 43);
}

@media (min-width: 768px) {
  .products {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>