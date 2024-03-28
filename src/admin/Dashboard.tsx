import { Link } from 'react-router-dom';
import '../styles/dash.css';
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='dashLinks'>
        <Link to='/mp' className='mp'>
          Manage Products
        </Link>
        <Link to='/mb' className='mb'>
          Manage Blogs
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
