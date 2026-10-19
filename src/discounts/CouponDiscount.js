class CouponDiscount {
  calculate(order, subtotal) {
    if (order.couponCode === "TECH10") {
      return subtotal * 0.10;
    }
    return 0;
  }
}

module.exports = CouponDiscount;