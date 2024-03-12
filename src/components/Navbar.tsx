import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import '../styles/navbar.css';

import logo from '/assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className='logoHolder'>
        <a href='/'>
          <img src={logo} alt='Spadri Ecommerce shoes store' />{' '}
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Shop</Link>
          </li>
          <li>
            <Link to='/blogs'>Blogs</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className='cw'>
        <Link to='/cart'>
          <FaShoppingCart />
        </Link>
        <Link to='/wishlist'>
          <FaHeart />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
