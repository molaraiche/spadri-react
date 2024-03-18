import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import PaimentRoutes from '../routes/PaimentRoutes';

const Checkout = () => {
  return (
    <div>
      <div className='productDetails'>
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
        <div className='finalPrice'>Finale price: 2199,00</div>
      </div>
      <div className='paimentInfo'>
        <div className='miniNav'>
          <Link to='checkout/visa' className='creditCard'>
            Visa
          </Link>
          <Link to='checkout/paypal' className='paypal'>
            Paypal
          </Link>
        </div>
        <PaimentRoutes />
      </div>
    </div>
  );
};

export default Checkout;
