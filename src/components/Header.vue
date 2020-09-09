<template>
  <header class="header">
    <router-link to="/"
      ><img alt="DE WALT" src="@/assets/header/logo.svg"
    /></router-link>
    <div class="cart">
      <span class="cart__details">{{ details }}</span>
      <span class="cart__title">shopping cart</span>
      <img
        class="cart__image"
        alt=""
        src="@/assets/header/shopping-cart-icon.svg"
      />
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 0.938rem 5%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 2px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.cart {
  display: flex;
  align-items: center;
  border-left: solid 1px #c3c3c3;
  padding: 0.75rem 0 0.8rem 1rem;
}

.cart__details {
  display: inline-block;
  background-color: var(--main-yellow);
  border-radius: 1rem;
  padding: 0.2rem 0.5rem;
  color: var(--white);
  margin-right: 0.8rem;
}

.cart__title {
  color: var(--light-grey);
  margin-right: 1.4rem;
}
</style>

<script>
export default {
  computed: {
    itemsCount() {
      return this.$store.getters.itemsCount;
    },
    itemsPrice() {
      return this.$store.getters.itemsPrice;
    },
    details() {
      return this.itemsCount && this.itemsPrice
        ? `${this.itemsCount} items - ${this.itemsPrice}$`
        : "0";
    }
  }
};
</script>
