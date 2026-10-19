class ShippingCalculator {
  constructor() {
    this.regionRates = {
      sudeste: { base: 20, weightRate: 4 },
      sul: { base: 28, weightRate: 5 },
      "centro-oeste": { base: 35, weightRate: 6 },
      nordeste: { base: 45, weightRate: 7 },
      norte: { base: 60, weightRate: 9 },
      default: { base: 50, weightRate: 8 }
    };
  }

  calculate(order) {
    if (order.couponCode === "FRETEGRATIS") {
      return 0;
    }
    const region = order.getCustomerRegion();
    const weight = order.getTotalWeight();
    const rate = this.regionRates[region] || this.regionRates.default;
    return rate.base + weight * rate.weightRate;
  }
}

module.exports = ShippingCalculator;