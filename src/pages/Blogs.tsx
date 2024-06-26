'use client';
import { blogType } from '../types/types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBlogs } from '../redux/blogs_slice';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const selectBlogs = (state: { blogs: { blogs: blogType[] } }) =>
    state.blogs.blogs;
  const dispatch = useDispatch();
  const blogs = useSelector(selectBlogs);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get<{ response: blogType[] }>(
          'https://spadri-server.onrender.com/api/blogs'
        );
        dispatch(setBlogs(response.data.response));
      } catch (error) {
        console.error('Failed to fetch categories', error);
      }
    };

    fetchBlogs();
  }, [dispatch]);

  return (
    <div className='blogs' id='blogs'>
      <h1>
        <span className='greenit'>Our</span> Blogs
      </h1>
      <div className='blogsContent'>
        {blogs.map((blog) => (
          <Link to={`/${blog.path}`} key={blog._id}>
            <img
              src={blog.blogImage}
              width={400}
              height={600}
              alt={blog.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
