import { useDispatch, useSelector } from 'react-redux';
import Swipers from '../shared/Swipers';
import { useEffect } from 'react';
import axios from 'axios';
import { productType } from '../types/types';
import { setProducts } from '../redux/products_slice';

const ThankYou = () => {
  const selectProducts = (state: { products: { products: productType[] } }) =>
    state.products.products;
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<{ response: productType[] }>(
          'https://spadri-server.onrender.com/api/products'
        );
        dispatch(setProducts(response.data.response));
      } catch (error) {
        console.error('Failed to fetch categories', error);
      }
    };
    fetchProducts();
  }, [dispatch]);
  return (
    <div>
      <h1>
        <span className='greenit'>Thank</span> you
      </h1>
      <p>
        Your trust in us turns moments into milestones. thank you for choosing
        <span className='greenit'>Spadri</span>. Looking forward to carfting
        more memories together.
      </p>
      <h3>Discover more products</h3>
      <div>
        {products.map((product) => (
          <Swipers
            path={product.path}
            productImage={product.productImage}
            description={product.description}
            key={product._id}
          />
        ))}
      </div>
    </div>
  );
};

export default ThankYou;
