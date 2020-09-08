<template>
  <div class="home"></div>
</template>

<script>
import data from "@/assets/data.json";

export default {
  data() {
    return {
      booked: data["experiences"].filter(xp => xp.category === "booked"),
      featured: data["experiences"].filter(xp => xp.category === "featured")
    };
  }
};
</script>
