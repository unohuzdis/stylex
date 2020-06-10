
import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { title, thumbnailUrl, price, quantity } }) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={thumbnailUrl} alt='item' />
        </div>
        <span className='name'>{title}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        {/* <div className='remove-button'>&#10005;</div> */}
    </div>
);

export default CheckoutItem;