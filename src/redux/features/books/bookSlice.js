import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};
const bookSlice = createSlice({
  name: 'books',
  initialState,
});
export default bookSlice.reducer;
