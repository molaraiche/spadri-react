import { FaSearch } from 'react-icons/fa';

const Search = () => {
  return (
    <form className='searchFrom'>
      <input type='search' placeholder='Search...' />
      <button type='submit' className='searchBtn'>
        <FaSearch /> Search
      </button>
    </form>
  );
};

export default Search;
