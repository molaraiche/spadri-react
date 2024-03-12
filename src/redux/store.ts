import { configureStore } from '@reduxjs/toolkit';
import productSlice from './products_slice';
import blogSlice from './blogs_slice';

export const store = configureStore({
  reducer: {
    products: productSlice,
    blogs: blogSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
