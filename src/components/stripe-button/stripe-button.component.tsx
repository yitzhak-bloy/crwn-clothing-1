import React from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';
import { StripeCheckoutComponentProps } from 'cart-component-types';

const StripeCheckoutCompnent: React.FC<StripeCheckoutComponentProps> = ({ price }) => {
    const amount = price * 100;
    const publishKey = "pk_test_66M6PdgzOXmc52ac9oP4Jj4N00nniSJ3Cz";

    const onToken = (token: Token) => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now 💳'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            amount={amount}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishKey}
        />
    )
}

export default StripeCheckoutCompnent;
    