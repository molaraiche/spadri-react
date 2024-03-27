const Visa = () => {
  return (
    <div className='visaCard'>
      <div className='personalInfo'>
        <input type='text' placeholder='Full Name' name='' id='' required />
        <input type='email' placeholder='Email' name='' id='' required />
      </div>
      <div className='bankInfo'>
        <input type='number' placeholder='Card Num' name='' id='' required />
        <input
          type='date'
          placeholder='Expiration date'
          name=''
          id=''
          required
        />
        <input type='text' placeholder='CVC' name='' id='' required />
      </div>
      <div className='payBtn'>
        <button>Procced</button>
      </div>
    </div>
  );
};

export default Visa;
