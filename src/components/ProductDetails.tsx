// import { productType } from '../types/types';

const ProductDetails = ({ product }) => {
  return (
    <div>
      <h1> {product.name} </h1>
      <p> {product.price} </p>
    </div>
  );
};

export default ProductDetails;
