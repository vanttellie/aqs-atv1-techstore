class BoletoPayment {
  calculateFee(subtotal) {
    return 3.50; // Taxa fixa de boleto
  }
}

module.exports = BoletoPayment;