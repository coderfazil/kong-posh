// src/redux/slices/adminSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async actions for signup, login, fetching, and deleting admins
export const adminSignup = createAsyncThunk('admin/signup', async (adminData, { rejectWithValue }) => {
  try {
    const response = await axios.post('/api/admin/signup', adminData); // Adjust the endpoint as per your API
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const adminLogin = createAsyncThunk('admin/login', async (adminCredentials, { rejectWithValue }) => {
  try {
    const response = await axios.post('/api/admin/login', adminCredentials); // Adjust the endpoint as per your API
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const fetchAdmins = createAsyncThunk('admin/fetchAdmins', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('/api/admins'); // Adjust the endpoint as per your API
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const deleteAdmin = createAsyncThunk('admin/deleteAdmin', async (id, { rejectWithValue }) => {
  try {
    await axios.delete(`/api/admins/${id}`); // Adjust the endpoint as per your API
    return id;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Initial state for the admin slice
const initialState = {
  currentAdmin: null,  // For storing the logged-in admin details
  admins: [],  // List of all admins (used in admin management)
  loading: false,  // Loading state for async actions
  error: null,  // To store any error messages
  isAuthenticated: false,  // Whether the admin is authenticated or not
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    logout(state) {
      state.currentAdmin = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Signup Reducers
      .addCase(adminSignup.pending, (state) => {
        state.loading = true;
      })
      .addCase(adminSignup.fulfilled, (state, action) => {
        state.loading = false;
        state.currentAdmin = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(adminSignup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Login Reducers
      .addCase(adminLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(adminLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.currentAdmin = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(adminLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch Admins Reducers
      .addCase(fetchAdmins.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAdmins.fulfilled, (state, action) => {
        state.loading = false;
        state.admins = action.payload;
      })
      .addCase(fetchAdmins.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete Admin Reducers
      .addCase(deleteAdmin.fulfilled, (state, action) => {
        state.admins = state.admins.filter((admin) => admin.id !== action.payload);
      })
      .addCase(deleteAdmin.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { logout } = adminSlice.actions;

export const selectAdminLoading = (state) => state.admin.loading;
export const selectAdminError = (state) => state.admin.error;
export const selectIsAuthenticated = (state) => state.admin.isAuthenticated;
export const selectAllAdmins = (state) => state.admin.admins;

export default adminSlice;
