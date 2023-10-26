import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65350f1bc620ba9358ec201b.mockapi.io';
export const fetchTasks = createAsyncThunk(
  'cars/fetchAll',
  // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/cars');
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchTasksPerPage = createAsyncThunk(
  'cars/fetchPag',

  async (currentPage, thunkAPI) => {
    // Accept currentPage as an argument
    try {
      const response = await axios.get(`/cars?page=${currentPage}&limit=12`); // Use currentPage in the URL

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
