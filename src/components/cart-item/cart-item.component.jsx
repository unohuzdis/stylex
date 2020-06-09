import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { thumbnailUrl, price, title, quantity } }) => (
    <div className='cart-item'>
        <img src={thumbnailUrl} alt='item' />
        <div className='item-details'>
            <span className='name'>{title}</span>
            <span className='price'>
                {quantity} x ${price}
            </span>
        </div>
    </div>
);

export default CartItem;