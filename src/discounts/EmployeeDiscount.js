class EmployeeDiscount {
  calculate(order, subtotal) {
    if (order.customer && order.customer.type === "employee") {
      return subtotal * 0.15;
    }
    return 0;
  }
}

module.exports = EmployeeDiscount;