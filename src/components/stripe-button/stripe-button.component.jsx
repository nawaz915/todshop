import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HrUbYHCvIlPQtDmzQ3oqOxbc44e10c0EQLlMMFKUWZOzlyzg2Eskk8togct5Lrf20WkPY36U1dgem1fafkKHK7W00jlj7Ox4f';

   const  onToken = token => {
        alert('Payment Successful');

    }
    return (
        <StripeCheckout 
        label= "Pay Now"
        name= "TodShop"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description = {`Your total is ${price}`}
        amount = {priceForStripe}
        panelLabel= "Pay Now"
        token = {onToken}
        stripeKey = {publishableKey}
        />

    );
};

export default StripeCheckoutButton;