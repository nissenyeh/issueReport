import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  category: '',
  subCategory: '',
};

const CategorySlice = createSlice({
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSubCategory: (state, action) => {
      state.subCategory = action.payload;
    },
  },
});

export const {
  resetAddItemsModal,
  setAddItemsModalContentType,
} = CategorySlice.actions;

const initStore = (initialState) => {

  const store = configureStore({
    reducer: CategorySlice,
    preloadedState: initialState,
  });

  return store;
};

export default initStore;