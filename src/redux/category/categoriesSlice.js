import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  underConstruction: false,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setUnderConstruction: (state) => {
      state.underConstruction = true;
    },
  },
});

export const { setUnderConstruction } = categoriesSlice.actions;
export default categoriesSlice.reducer;
