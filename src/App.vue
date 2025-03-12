<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import Header from './components/Header.vue'
import { computed } from 'vue'
import Nav from './components/Nav.vue'
import { usePersistCart } from './composables/usePersistCart'
import { useCartStore } from '@/stores/cart'
import { useProductStore } from '@/stores/products'

const productStore = useProductStore()
const cartStore = useCartStore()

productStore.fetchAll()
usePersistCart()

const count = computed(() => cartStore.count)
</script>

<template>
  <div class="drawer">
    <input id="drawer-input" type="checkbox" class="drawer-toggle" />
    <div class="bg-base-100 text-base-content min-h-screen drawer-content">
      <Nav />
      <router-view />
    </div>
    <div class="drawer-side">
      <label for="drawer-input" class="drawer-overlay" />
      <ul class="p-4 overflow-y-auto menu w-80 bg-base-100 text-base-content">
        <li>
          <router-link to="/"> Home </router-link>
        </li>
        <li>
          <router-link to="/about"> About </router-link>
        </li>
        <li>
          <router-link to="/cart">
            Cart
            <div class="badge ml-2 badge-outline" v-text="count" />
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
