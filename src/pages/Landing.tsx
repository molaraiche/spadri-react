import { Link } from 'react-router-dom';
import Blogs from './Blogs';
import Contact from './Contact';
import Products from './Products';
import heroImage from '/assets/heroImg.png';
const LandingPage = () => {
  return (
    <section className='landingPage'>
      <div className='hero' id='home'>
        <div className='slogan'>
          <div className='heroTxt'>
            <h1>Stride Ahead:</h1>
            <h1>
              <span className='greenit'>Every Step Counts</span>
            </h1>
          </div>
          <div className='heroBtns'>
            <Link to='/shop' className='shopBtn'>
              Shop
            </Link>
            <Link to='/blog' className='blogBtn'>
              Blog
            </Link>
          </div>
        </div>

        <div className='heroImg'>
          <img src={heroImage} alt='nike' />
        </div>
      </div>
      <Products />
      <Blogs />
      <Contact />
    </section>
  );
};

export default LandingPage;
