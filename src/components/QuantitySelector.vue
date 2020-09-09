<template>
  <div class="quantitySelector">
    <div class="quantitySelector__input">
      <button
        class="button button--white button--icon"
        aria-label="Decrement quantity of product"
        @click="increment(-1)"
        :disabled="disableDecrement"
      >
        -
      </button>
      <span class="quantitySelector__input__number">{{ quantity }}</span>
      <button
        class="button button--white button--icon"
        aria-label="Increment quantity of product"
        @click="increment(1)"
      >
        +
      </button>
    </div>
    <button
      class="button button--yellow button--text quantitySelector__submit"
      @click="submit"
      :disabled="disableSubmit"
    >
      Add to Cart
    </button>
  </div>
</template>

<style scoped>
.quantitySelector {
  display: flex;
  flex-wrap: wrap;
}

.quantitySelector__input {
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 0.2rem;
  padding: 0.2rem;
  color: #969696;
  margin-right: 1.25rem;
}

.quantitySelector__input__number {
  width: 2rem;
  text-align: center;
  font-weight: 700;
}

.button {
  border-radius: 0.2rem;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
}

.button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.button--text {
  font-size: var(--f17);
  padding: 0.75rem 1.375rem;
}

.button--icon {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  width: 2.25rem;
  height: 2.25rem;
}

.button--white {
  color: #464646;
  border-color: #e5e5e5;
  background-color: var(--white);
}

.button--white:not(:disabled):hover {
  background-color: #e5e5e5;
}

.button--yellow {
  background-color: var(--main-yellow);
  color: var(--white);
  border-color: #fdb313;
}

.button--yellow:not(:disabled):hover {
  background-color: #fdb313;
}

@media (max-width: 760px) {
  .button--icon {
    font-size: 1.5rem;
    width: 3rem;
    height: 3rem;
  }

  .button--text {
    font-size: 1.2rem;
  }

  .quantitySelector__input {
    padding: 0.4rem 0.8rem;
    margin-right: 2rem;
  }
  .quantitySelector__input__number {
    width: 3rem;
  }
}
</style>

<script>
export default {
  props: ["decrementLimit"],
  data() {
    return {
      quantity: 0,
      limit: 0
    };
  },
  watch: {
    decrementLimit: function() {
      this.limit = this.decrementLimit || 0;
    }
  },
  computed: {
    disableDecrement: function() {
      return this.decrementLimit + this.quantity <= 0;
    },
    disableSubmit: function() {
      return (
        (this.quantity < 0 && this.decrementLimit + this.quantity < 0) ||
        this.quantity === 0
      );
    }
  },
  methods: {
    increment: function(value) {
      this.quantity += value;
    },
    submit: function() {
      this.$emit("submit", this.quantity);
    }
  }
};
</script>
