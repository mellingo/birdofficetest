<template>
  <div
    class="image__full"
    :style="{
      backgroundImage: `url(${url})`,
      paddingTop: ratio
    }"
  ></div>
</template>

<style scoped>
.image__full {
  width: 100%;
  margin-bottom: 0.5rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>

<script>
export default {
  props: ["url", "ratio"]
};
</script>
