'use client';

import { setProducts } from '../redux/products_slice';
import { loaderNumber } from '../shared/LoadNumbers';
import Loader from '../shared/Loader';
import { productType } from '../types/types';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {
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
    <div className='products' id='shop'>
      <h1 className='title'>
        <span className='greenit'>Our</span> Products
      </h1>
      <div className='productsContent'>
        {products.length > 0
          ? products.map((product) => (
              <a
                href={`products/${product.path}`}
                className='imgHolder'
                key={product._id}>
                <img
                  src={product.productImage}
                  alt={product.description}
                  width={500}
                  height={400}
                />
              </a>
            ))
          : loaderNumber.id.map((load) => <Loader key={load} />)}
      </div>
      <a className='seeMoreBtn' href='/shop'>
        See more
      </a>
    </div>
  );
};

export default Products;
