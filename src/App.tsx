import './styles/landing.css';
import './styles/products.css';
import './styles/contact.css';
import './styles/blogs.css';
import SpadriRoutes from './routes/routes.jsx';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <main className='box'>
      <div className='dashHolder'>
        <Link to='/admin'>Dashboard </Link>
      </div>
      <div className='mainBox'>
        <Navbar />
        <SpadriRoutes />
      </div>
    </main>
  );
};

export default LandingPage;
