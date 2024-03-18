import { MdDelete } from 'react-icons/md';

import '../styles/cart.css';
const Cart = () => {
  return (
    <div className='cart'>
      <h1>
        <span className='greenit'>Your</span> Wishlist
      </h1>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Quantity</th>
            <th>Product Price</th>
            <th>Product Manage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>- Shoe</td>
            <td>06</td>
            <td>399,00</td>
            <td>
              <MdDelete className='DelBtnTable' />
            </td>
          </tr>
        </tbody>
      </table>
      <div className='total'>
        <p>
          Total: <span className='totalPrice'>{6 * 399},00</span>
        </p>
      </div>
      <div className='managewc'>
        <button> Add to cart</button>
      </div>
    </div>
  );
};

export default Cart;
