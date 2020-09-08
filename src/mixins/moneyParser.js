export default {
  data() {
    return {
      conversionRate: 0.85
    };
  },
  methods: {
    dollarsToEuro(value) {
      if (value != null) {
        return parseFloat(value) * this.conversionRate;
      }
      return 0;
    },
    americanNumberFormat(number) {
      return new Intl.NumberFormat("en-US").format(number);
    }
  }
};
