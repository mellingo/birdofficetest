<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<style>
html {
  font-size: 100%;
  --light-grey: #acacac;
  --main-yellow: #febd17;
  --white: #ffffff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}
</style>

<script>
import Header from "@/components/Header.vue";
export default {
  components: { Header }
};
</script>
