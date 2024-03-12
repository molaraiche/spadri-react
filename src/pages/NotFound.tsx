const NotFound = () => {
  return (
    <div className='notFound'>
      <img src='/assets/notFound.png' alt='' />
      <div className='notFoundInfo'>
        <h1>This page those not exist </h1>
        <a href='/'> Back </a>
      </div>
    </div>
  );
};

export default NotFound;
