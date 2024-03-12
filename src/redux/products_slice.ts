import { productType } from '../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface menuStateType {
  products: productType[];
}

const initialState: menuStateType = {
  products: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<productType[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
