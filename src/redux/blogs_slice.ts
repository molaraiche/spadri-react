import { blogType } from '../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface menuStateType {
  blogs: blogType[];
}

const initialState: menuStateType = {
  blogs: [],
};

export const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setBlogs: (state, action: PayloadAction<blogType[]>) => {
      state.blogs = action.payload;
    },
  },
});

export const { setBlogs } = blogSlice.actions;

export default blogSlice.reducer;
