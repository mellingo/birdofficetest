<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
html {
  font-size: 100%;
  --light-grey: #acacac;
  --main-yellow: #febd17;
  --white: #ffffff;
  --main-grey: #484848;
  --dark-grey: #373738;
}

#app {
  font-family: "Circular Std Book", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

.title {
  font-family: "Circular Std Black", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--dark-grey);
}

main {
  padding: 5rem 13% 3rem;
}
</style>

<script>
import Header from "@/components/Header.vue";
export default {
  components: { Header }
};
</script>
