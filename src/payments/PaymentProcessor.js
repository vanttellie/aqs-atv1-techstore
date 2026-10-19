const CreditCardPayment = require("./CreditCardPayment");
const PixPayment = require("./PixPayment");
const BoletoPayment = require("./BoletoPayment");

class PaymentProcessor {
  constructor() {
    this.strategies = {
      credit_card: new CreditCardPayment(),
      pix: new PixPayment(),
      boleto: new BoletoPayment()
    };
  }

  calculateFee(method, subtotal) {
    const strategy = this.strategies[method];
    if (!strategy) {
      throw new Error(`Método de pagamento '${method}' não suportado.`);
    }
    return strategy.calculateFee(subtotal);
  }
}

module.exports = PaymentProcessor;