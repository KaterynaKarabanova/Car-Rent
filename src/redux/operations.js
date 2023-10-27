import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65350f1bc620ba9358ec201b.mockapi.io';
export const fetchTasks = createAsyncThunk(
  'cars/fetchAll',

  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/cars');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchTasksPerPage = createAsyncThunk(
  'cars/fetchPag',

  async (currentPage, thunkAPI) => {
    try {
      const response = await axios.get(`/cars?page=${currentPage}&limit=12`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
