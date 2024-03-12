import { blogType } from '../types/types';

interface BlogDetailsProps {
  blog: blogType;
}
const BlogDetails: React.FC<BlogDetailsProps> = ({ blog }) => {
  return <div>{blog.title}</div>;
};

export default BlogDetails;
