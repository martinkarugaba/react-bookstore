import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  underConstruction: false,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
});

export default categoriesSlice.reducer;
