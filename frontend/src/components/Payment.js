import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Payment.css'; // Import custom styles

const Payment = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const eventName = queryParams.get('event');
    const price = queryParams.get('price');

    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');

    const handlePayment = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/payment/submit-payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    cardNumber,
                    expiry,
                    cvc,
                    event: eventName,
                    price
                })
            });

            const data = await response.json();

            if (response.ok) {
                alert('Payment successful!');
            } else {
                alert(data.message || 'Error processing payment. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting payment:', error);
            alert('Error processing payment. Please try again.');
        }
    };

    return (
        <div className="payment-container">
            <div className="payment-card">
                <h2 className="payment-title">Complete Your Purchase</h2>
                <h3 className="event-name">Event: {eventName}</h3>
                <p className="payment-description">
                    You are purchasing a ticket for <strong>{eventName}</strong>. Please complete the payment to confirm your booking.
                </p>
                <p className="payment-price">Total Amount: ₹{price}</p>

                <form className="payment-form" onSubmit={handlePayment}>
                    <div className="form-group">
                        <label htmlFor="name">Name on Card:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="card-number">Card Number:</label>
                        <input
                            type="text"
                            id="card-number"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="expiry">Expiry Date:</label>
                        <input
                            type="text"
                            id="expiry"
                            value={expiry}
                            onChange={(e) => setExpiry(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cvc">CVC:</label>
                        <input
                            type="text"
                            id="cvc"
                            value={cvc}
                            onChange={(e) => setCvc(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn-pay">Proceed to Payment</button>
                </form>

                <p className="secure-text">* All transactions are secure and encrypted.</p>
            </div>
        </div>
    );
};

export default Payment;
