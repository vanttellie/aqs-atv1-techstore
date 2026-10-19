const VipDiscount = require("./VipDiscount");
const EmployeeDiscount = require("./EmployeeDiscount");
const CouponDiscount = require("./CouponDiscount");
const HighValueDiscount = require("./HighValueDiscount");

class DiscountCalculator {
  constructor(strategies = [
    new VipDiscount(),
    new EmployeeDiscount(),
    new CouponDiscount(),
    new HighValueDiscount()
  ]) {
    this.strategies = strategies;
  }

  calculate(order, subtotal) {
    return this.strategies.reduce((totalDiscount, strategy) => {
      return totalDiscount + strategy.calculate(order, subtotal);
    }, 0);
  }
}

module.exports = DiscountCalculator;