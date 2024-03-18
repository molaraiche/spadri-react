import { Route, Routes } from 'react-router-dom';
import Paypal from '../components/Paypal';
import Visa from '../components/Visa';

const PaimentRoutes = () => {
  return (
    <Routes>
      <Route path='checkout/visa' element={<Visa />} />
      <Route path='checkout/paypal' element={<Paypal />} />
    </Routes>
  );
};

export default PaimentRoutes;
