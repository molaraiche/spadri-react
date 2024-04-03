import { Link } from 'react-router-dom';
import '../styles/table.css';
import { MdModeEditOutline, MdDelete } from 'react-icons/md';

const ManageProducts = () => {
  return (
    <div className='productManage'>
      <div className='BackBtn'>
        <Link to='/dashboard'>Back</Link>
      </div>
      <div className='addNewProduct'>
        <button> Add new product</button>
      </div>
      <div className='productsManageSection'>
        <table border={2}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Path</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Description</td>
              <td>Image</td>
              <td>Quantity</td>
              <td>Price</td>
              <td>Path</td>
              <td className='btnHolder'>
                <button className='editBtn'>
                  <MdModeEditOutline />
                </button>
                <button className='deleteBtn'>
                  <MdDelete />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
