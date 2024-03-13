import { blogType } from '../types/types';
import '../styles/blogDetails.css';
interface BlogDetailsProps {
  blog: blogType;
}
const BlogDetails: React.FC<BlogDetailsProps> = ({ blog }) => {
  return (
    <div className='blogDetails'>
      <div className='blogTxt'>
        <h1> {blog.title} </h1>
        <p> {blog.description} </p>
      </div>
      <div className='blogImg'>
        <img src={blog.blogImage} alt={blog.description} />
      </div>
    </div>
  );
};

export default BlogDetails;
