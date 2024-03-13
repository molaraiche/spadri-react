const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <h1>
        Contact <span className='greenit'>us</span>
      </h1>
      <form>
        <input type='text' required placeholder='Full Name' name='fullName' />
        <input type='email' required placeholder='Email' name='email' />
        <textarea placeholder='Message' cols={1} rows={10}></textarea>
        <div className='submitBtn'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
