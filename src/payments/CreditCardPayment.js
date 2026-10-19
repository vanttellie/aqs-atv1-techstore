class CreditCardPayment {
  calculateFee(subtotal) {
    return subtotal * 0.025; // Taxa de 2.5% sobre o subtotal
  }
}

module.exports = CreditCardPayment;