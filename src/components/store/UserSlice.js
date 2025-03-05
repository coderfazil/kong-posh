// src/redux/slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null, // Will hold the user info after signup/login
  isAuthenticated: false, // Whether the user is authenticated or not
  loading: false, // Loading state for async actions like signup/login
  error: null, // To store any error messages
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Start loading (e.g., while signup is happening)
    userStart(state) {
      state.loading = true;
      state.error = null;
    },
    // When signup is successful
    userSignupSuccess(state, action) {
      state.loading = false;
      state.currentUser = action.payload; // Store user info in state
      state.isAuthenticated = true;
    },
    // Handle signup failure
    userSignupFailure(state, action) {
      state.loading = false;
      state.error = action.payload; // Store error message
    },
    // Handle logout
    userLogout(state) {
      state.currentUser = null;
      state.isAuthenticated = false;
    }
  },
});

// Export actions
export const userActions= userSlice.actions;

// Selector to get user info from the state
export const selectCurrentUser = (state) => state.user.currentUser;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectUserLoading = (state) => state.user.loading;
export const selectUserError = (state) => state.user.error;

// Export reducer
export default userSlice;
