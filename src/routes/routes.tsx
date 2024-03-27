import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/Landing';
import Products from '../pages/Products';
import Blogs from '../pages/Blogs';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import Cart from '../pages/Cart';
import Wishlist from '../pages/Wishlist';
import { blogType, productType } from '../types/types';
import { setProducts } from '../redux/products_slice';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ProductDetails from '../components/ProductDetails';
import { setBlogs } from '../redux/blogs_slice';
import BlogDetails from '../components/BlogDetails';
import Checkout from '../components/Checkout';

const SpadriRoutes = () => {
  const selectBlogs = (state: { blogs: { blogs: blogType[] } }) =>
    state.blogs.blogs;
  const selectProducts = (state: { products: { products: productType[] } }) =>
    state.products.products;
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const blogs = useSelector(selectBlogs);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get<{ response: blogType[] }>(
          'https://spadri-server.onrender.com/api/blogs'
        );
        dispatch(setBlogs(response.data.response));
      } catch (error) {
        console.error('Failed to fetch categories', error);
      }
    };

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
    fetchBlogs();
    fetchProducts();
  }, [dispatch]);
  console.log(products);
  console.log(blogs);
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/products/*' element={<Products />} />
      {products.map((product) => (
        <Route
          key={product._id}
          path={`/${product.path}`}
          element={<ProductDetails product={product} />}
        />
      ))}
      <Route path='/blogs/*' element={<Blogs />} />
      {blogs.map((blog) => (
        <Route
          key={blog._id}
          path={`/${blog.path}`}
          element={<BlogDetails blog={blog} />}
        />
      ))}
      <Route path='/contact' element={<Contact />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/checkout/*' element={<Checkout />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default SpadriRoutes;
