<template>
  <div class="experience">
    <div class="experience__informations">
      <div class="experience__informations__header">
        <h1 class="experience__informations__title title">
          {{ experience.title }}
        </h1>
        <span class="experience__informations__price">{{ price }}</span>
      </div>
      <div class="experience__informations__description">
        <p>{{ experience.description.intro }}</p>
        <p>{{ experience.description.content }}</p>
        <p :style="{ '--medium-grey': '#afafaf' }">
          {{ experience.description.outro }}
        </p>
      </div>
      <QuantitySelector
        :decrement-limit="decrementLimit"
        class="experience__informations__selector"
        @submit="updateCart"
      />
    </div>
    <div class="experience__image">
      <ImageRatio
        :url="require('@/assets/experiences/' + experience.image)"
        ratio="190%"
      />
    </div>
  </div>
</template>

<style scoped>
.experience {
  display: flex;
  justify-content: space-between;
  --medium-grey: #585858;
  --light-yellow: #fef8e7;
}

.experience__informations {
  width: 60%;
}

.experience__informations__header {
  padding-bottom: 1rem;
  border-bottom: var(--light-yellow) solid 15px;
}

.experience__informations__title {
  font-size: 3.75rem;
  margin: 0 0 1rem;
}

.experience__informations__price {
  color: var(--main-yellow);
  font-family: "Circular Std Medium", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 2.5rem;
}

.experience__informations__description {
  margin-top: 2rem;
}

.experience__informations__selector {
  margin-top: 4rem;
}

.experience__informations__description p {
  color: var(--medium-grey);
  line-height: 1.8rem;
}

.experience__image {
  width: 35%;
}
</style>

<script>
import data from "@/assets/data.json";
import ImageRatio from "@/components/ImageRatio.vue";
import moneyParser from "@/mixins/moneyParser.js";
import QuantitySelector from "@/components/QuantitySelector.vue";

export default {
  components: {
    ImageRatio,
    QuantitySelector
  },
  mixins: [moneyParser],
  data() {
    return {
      experience: data["experiences"].find(
        item => item.id === this.$route.params.id
      )
    };
  },
  computed: {
    price: function() {
      let number = this.dollarsToEuro(this.experience.price);
      let price = this.americanNumberFormat(number);
      return `EUR ${price}`;
    },
    decrementLimit: function() {
      return this.$store.getters.getItemById(this.experience.id)
        ? this.$store.getters.getItemById(this.experience.id).quantity
        : 0;
    }
  },
  methods: {
    updateCart: function(value) {
      this.$store.dispatch("updateItem", {
        ...this.experience,
        quantity: value
      });
    }
  }
};
</script>
