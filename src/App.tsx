import './styles/landing.css';
import './styles/products.css';
import './styles/contact.css';
import './styles/blogs.css';
import SpadriRoutes from './routes/routes.jsx';
import Navbar from './components/Navbar';

const LandingPage = () => {
  return (
    <main className='box'>
      <Navbar />
      <SpadriRoutes />
    </main>
  );
};

export default LandingPage;
