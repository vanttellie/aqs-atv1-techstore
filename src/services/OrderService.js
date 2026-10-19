const DiscountCalculator = require("../discounts/DiscountCalculator");
const ShippingCalculator = require("../shipping/ShippingCalculator");
const PaymentProcessor = require("../payments/PaymentProcessor");
const NotificationService = require("./NotificationService");

class OrderService {
  constructor(
    discountCalculator = new DiscountCalculator(),
    shippingCalculator = new ShippingCalculator(),
    paymentProcessor = new PaymentProcessor(),
    notificationService = new NotificationService()
  ) {
    this.discountCalculator = discountCalculator;
    this.shippingCalculator = shippingCalculator;
    this.paymentProcessor = paymentProcessor;
    this.notificationService = notificationService;
  }

  process(order) {
    console.log(`[INFO] Iniciando processamento do pedido ${order.id}.`);

    const subtotal = order.calculateSubtotal();
    const discount = this.discountCalculator.calculate(order, subtotal);
    const freight = this.shippingCalculator.calculate(order);
    const paymentFee = this.paymentProcessor.calculateFee(order.paymentMethod, subtotal);

    const total = subtotal - discount + freight + paymentFee;

    order.setTotals({ subtotal, discount, freight, paymentFee, total });
    order.status = "confirmed";

    this.notificationService.sendOrderConfirmation(order.customer, order.id, total);

    return order;
  }
}

module.exports = OrderService;
