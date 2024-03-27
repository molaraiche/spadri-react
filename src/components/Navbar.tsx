import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import '../styles/navbar.css';
import { IoMenu } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import logo from '/assets/logo.png';
import { Link } from 'react-router-dom';
type MenuType = {
  menu: boolean;
};

const Navbar = () => {
  const [menu, setMenu] = useState<MenuType>({ menu: true });
  return (
    <header>
      <div className='logoHolder'>
        <Link to='/'>
          <img src={logo} alt='Spadri Ecommerce shoes store' />{' '}
        </Link>
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
      <div className='menu'>
        {menu.menu === true ? <IoMenu /> : <IoMdClose />}
      </div>
    </header>
  );
};

export default Navbar;
