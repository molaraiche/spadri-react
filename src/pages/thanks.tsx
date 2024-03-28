import '../styles/thanks.css';
import Products from './Products';
const Thanks = () => {
  return (
    <div className='thanks'>
      <h1>
        <span className='greenit'>Thank</span> you
      </h1>
      <p>
        Your trust in us turns moments into milestones. thank you for choosing
        <span className='greenit'>Spadri</span>. Looking forward to carfting
        more memories together.
      </p>

      <div className='suggestions'>
        <Products />
      </div>
    </div>
  );
};

export default Thanks;
