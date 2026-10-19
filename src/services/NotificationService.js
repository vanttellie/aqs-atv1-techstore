class NotificationService {
  sendOrderConfirmation(customer, orderId, total) {
    console.log(`[NOTIFICATION] E-mail enviado para ${customer.email}: Pedido ${orderId} confirmado no valor de R$ ${total.toFixed(2)}.`);
  }
}

module.exports = NotificationService;