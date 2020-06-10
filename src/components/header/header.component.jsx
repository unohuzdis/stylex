import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

const Header = ({ hidden }) => (
    <div className='header'>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
        </div>
        <CartIcon />
        {hidden ? null : <CartDropdown />}
    </div>
);

const mapStateToProps = ({ cart: { hidden } }) => ({
    hidden
});

export default connect(mapStateToProps)(Header);
// export default Header;