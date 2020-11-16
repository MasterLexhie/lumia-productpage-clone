<template>
  <section>
    <div class="container">
      <div class="products grid">
        <div 
          v-for="item in products"
          :key="item.id"
          class="products__item flex flex-col flex-v-center"
        >
          <a href="#" class="flex flex-col flex-v-center mb-10">
            <img :src="item.image_url" alt="" />
            <p class="">{{ item.title }}</p>
          </a>
          <p class="mb-20">{{ `From: ${item.price}` }}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { products } from "../graphql";

export default {
  apollo: {
    products
  }
}
</script>
<style scoped>
section {
  background: var(--primary-color-dark);
}

.products {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.products__item {
  padding: 2em 0 3em;
}

.products__item p {
  line-height: 1.5;
}

.products__item img {
  object-fit: contain;
  max-height: 190px;
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