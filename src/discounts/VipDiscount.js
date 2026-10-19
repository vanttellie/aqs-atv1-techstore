class VipDiscount {
  calculate(order, subtotal) {
    if (order.customer && order.customer.type === "vip") {
      return subtotal * 0.08;
    }
    return 0;
  }
}

module.exports = VipDiscount;