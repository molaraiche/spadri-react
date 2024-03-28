import '../styles/login.css';
const Login = () => {
  return (
    <div className='login'>
      <h1>Admin dashboard </h1>
      <form action=''>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
