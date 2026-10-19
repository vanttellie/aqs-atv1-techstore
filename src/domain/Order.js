class Order {
  constructor(id, customer, items, couponCode, paymentMethod, installments) {
    this.id = id;
    this.customer = customer;
    this.items = items;
    this.couponCode = couponCode;
    this.paymentMethod = paymentMethod;
    this.installments = installments;
    this.status = "created";
    this.createdAt = new Date();
    this.subtotal = 0;
    this.discount = 0;
    this.freight = 0;
    this.paymentFee = 0;
    this.total = 0;
  }

  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getSubtotal() {
    return this.items.reduce((total, item) => total + item.getSubtotal(), 0);
  }

  // Alias para compatibilidade com o OrderService
  calculateSubtotal() {
    return this.getSubtotal();
  }

  getTotalWeight() {
    return this.items.reduce((total, item) => {
      const weight = item.product ? item.product.weight : (item.weight || 1);
      return total + weight * item.quantity;
    }, 0);
  }

  getCustomerRegion() {
    return this.customer && this.customer.address ? this.customer.address.region : "default";
  }

  setTotals({ subtotal, discount, freight, paymentFee, total }) {
    this.subtotal = subtotal;
    this.discount = discount;
    this.freight = freight;
    this.paymentFee = paymentFee;
    this.total = total;
  }
}

module.exports = Order;