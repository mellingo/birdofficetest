<template>
  <div id="app">
    <Header />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<style>
:root {
  --main-yellow: #febd17;
  --light-grey: #afafaf;
  --white: #ffffff;
  --f15: 0.938rem;
  --f17: 1.063rem;
  --f32: 2rem;
  --f34: 2.125rem;
  --f52: 3.25rem;
  --m70: 4.375rem;
  --m80: 5rem;
}

html {
  font-size: 100%;
}

body {
  line-height: 1.25;
}

#app {
  font-family: "Circular Std", Avenir, Helvetica, Arial, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

.title {
  font-weight: 900;
  color: #373738;
  margin-top: 0;
}

.main {
  padding: var(--m80) 13% 4.25rem;
  --bottom-separator-height: var(--m80);
}

@media (max-width: 1200px) {
  .main {
    padding: 2rem 5%;
    --bottom-separator-height: 2rem;
  }
}
</style>

<script>
import Header from "@/components/Header.vue";
export default {
  components: { Header }
};
</script>
