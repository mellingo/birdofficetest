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
        <p :style="{ '--medium-grey': 'var(--light-grey)' }">
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
  flex-wrap: wrap;
  justify-content: space-between;
  --medium-grey: #585858;
  --light-yellow: #fef8e7;
  --separator-height: var(--m70);
}

.experience__informations {
  width: 60%;
  margin-bottom: var(--separator-height);
}

.experience__informations__header {
  padding-bottom: 1rem;
  border-bottom: var(--light-yellow) solid 15px;
  margin-bottom: 2rem;
}

.experience__informations__title {
  font-size: var(--f52);
  margin-bottom: 1rem;
}

.experience__informations__price {
  color: var(--main-yellow);
  font-weight: 500;
  font-size: var(--f34);
}

.experience__informations__description {
  margin: 0 1.875rem var(--separator-height) 0;
}

.experience__informations__description p {
  color: var(--medium-grey);
  line-height: 2;
}

.experience__image {
  width: 35%;
}

@media (max-width: 1200px) {
  .experience {
    --separator-height: 2.5rem;
  }
  .experience__informations,
  .experience__image {
    width: 100%;
  }
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
