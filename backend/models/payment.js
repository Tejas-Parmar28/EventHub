const mongoose = require('mongoose');

// Define the Payment schema
const paymentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cardNumber: { type: String, required: true },
    expiry: { type: String, required: true },
    cvc: { type: String, required: true },
    event: { type: String, required: true },
    price: { type: Number, required: true }
});

// Export the Payment model
module.exports = mongoose.model('Payment', paymentSchema);
