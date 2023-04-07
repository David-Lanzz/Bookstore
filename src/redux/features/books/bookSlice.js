import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/MfJpJE64qCZb9JRzTlel/books';
export const booksFromAPI = createAsyncThunk('data/getdata', async () => {
  try {
    const { data } = await axios.get(url);

    return data;
  } catch (error) {
    return (error.message);
  }
});
export const postToAPI = createAsyncThunk('data/postdata', async (input) => {
  try {
    const postdata = await axios.post(url, input);
    return postdata.data;
  } catch (error) {
    return error.message;
  }
});
export const deleteFromAPI = createAsyncThunk('books/deletebooks', async (id) => {
  try {
    const del = await axios.delete(`${url}/${id}`);
    return del.data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  books: [],
  isLoading: false,
  success: false,
  error: undefined,
};
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    removeBooks: (state, action) => {
      const id = action.payload;
      const filtered = state.books.filter((book) => book.item_id !== id);
      return { ...state, books: filtered };
    },
    addBooks: (state, action) => {
      const newBook = action.payload;
      return { ...state, books: [...state.books, { ...newBook }] };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(booksFromAPI.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(booksFromAPI.fulfilled, (state, action) => {
        const raw = action.payload;
        const data = [];

        for (const id in raw) {
          if (id) {
            const newbooks = raw[id][0];
            newbooks.item_id = id;
            data.push(newbooks);
          }
        }
        return {
          ...state, isLoading: false, success: true, books: data,
        };
      })
      .addCase(booksFromAPI.rejected, (state) => ({ ...state, isLoading: false, error: false }));
  },
});

export const { addBooks, removeBooks } = bookSlice.actions;
export default bookSlice.reducer;
