const express = require('express');
const router = express.Router();
const Payment = require('../../models/payment'); // Import the Payment model

// Route to handle payment submission
router.post('/submit-payment', async (req, res) => {
    const { name, cardNumber, expiry, cvc, event, price } = req.body;

    // Validate the required fields
    if (!name || !cardNumber || !expiry || !cvc || !event || !price) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Create a new Payment record
        const payment = new Payment({
            name,
            cardNumber,
            expiry,
            cvc,
            event,
            price
        });

        // Save payment to MongoDB
        await payment.save();
        
        // Send success response
        res.status(200).json({ message: 'Payment processed successfully!' });
    } catch (error) {
        console.error('Error saving payment:', error);
        res.status(500).json({ message: 'Error processing payment. Please try again.' });
    }
});

module.exports = router;
