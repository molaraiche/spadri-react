import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import PaimentRoutes from '../routes/PaimentRoutes';
import '../styles/checkout.css';
import { useState } from 'react';
type activeType = {
  active: string;
};
const Checkout = () => {
  const [active, setActive] = useState<activeType>({ active: 'downAll' });

  const activateVisa = () => {
    setActive({
      active: 'activeVisa',
    });
  };
  const activatePaypal = () => {
    setActive({
      active: 'activePaypal',
    });
  };
  return (
    <div className='checkout'>
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
        <div className='finalPrice'>
          Finale price: <span className='greenit'> 2199,00 MAD</span>
        </div>
      </div>
      <div className='paimentInfo'>
        <div className='miniNav'>
          <Link
            to='checkout/visa'
            className='creditCard'
            id={active}
            onClick={activateVisa}>
            Visa
          </Link>
          
          <Link
            to='checkout/paypal'
            className='paypal'
            id={active}
            onClick={activatePaypal}>
            Paypal
          </Link>
        </div>
        <PaimentRoutes />
      </div>
    </div>
  );
};

export default Checkout;
