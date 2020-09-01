import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ( { price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51HJe9gAYnLZQ8FYMsIyi3aALVGOBjQxhFRjLgsEpcu8xFMLz1WsI1xJNimHCmbST4TgyZ4IPXvdPZPWcpVMxP7km00f9tf8quB';

    
    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
    
    return (
        <StripeCheckout 
           label='Pay Now'
           name='CRWN clothing Ltd.'
           billingAddress
           shippingAddress
           image='https://svgshare.com/i/CUz.svg'
           description={`Your total is $${price}`}
           amount={priceForStripe}
           panelLablel='Pay Now'
           token={onToken}
           stripekey={publishablekey}
           />
    );
    
};

export default StripeCheckoutButton;