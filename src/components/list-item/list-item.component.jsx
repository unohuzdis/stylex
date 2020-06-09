import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './list-item.styles.scss';

const ListItem = ({ item, addItem }) => {
  const { title, price, url } = item;
  // console.log(item)

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${url})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{title}</span>
        <span className='price'>${price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(ListItem);

// const ListItem = ({ title, price, url }) => (
//     <div className='collection-item'>
//       <div
//         className='image'
//         style={{
//           backgroundImage: `url(${url})`
//         }}
//       />
//       <div className='collection-footer'>
//         <span className='name'>{title}</span>
//         <span className='price'>${price}</span>
//       </div>
//       <CustomButton inverted>
//         Add to cart
//       </CustomButton>
//     </div>
//   );
  
//   export default ListItem;
