import './styles/landing.css';
import './styles/products.css';
import './styles/contact.css';
import './styles/blogs.css';
import SpadriRoutes from './routes/routes.jsx';
import Navbar from './components/Navbar';
// import SpadriRoutes from '.';
// import Contact from './components/Contact';
// import Blogs from './components/Blogs';
// import Products from './components/Products';
const LandingPage = () => {
  return (
    <main className='box'>
      <Navbar />
      <SpadriRoutes />
    </main>
  );
};

export default LandingPage;
