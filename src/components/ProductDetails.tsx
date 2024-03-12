import { productType } from '../types/types';
import '../styles/productDetails.css';
interface ProductDetailsProps {
  product: productType;
}
const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className='productDetailsCard'>
      <div className='productImage'>
        <img src={product.productImage} alt={product.description} />
      </div>
      <div className='productDetails'>
        <h3> {product.name} </h3>
        <p> {product.description} </p>
        <p className='price'> {product.price} MAD </p>
        <div className='sizes'>
          <p> 38-39 </p>
          <p> 40-41 </p>
          <p> 42-43 </p>
          <p> 44-45 </p>
        </div>
        <div className='qt'>
          <p>
            Quantity available:{' '}
            <span className='qtAv'>{product.quantity} </span>
          </p>
          <div className='manageQt'>
            <button>-</button>
            <input type='number' />
            <button>+</button>
          </div>
        </div>
        <div className='manageBtn'>
          <button> Add to cart </button>
          <button> Add to wishlist </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
