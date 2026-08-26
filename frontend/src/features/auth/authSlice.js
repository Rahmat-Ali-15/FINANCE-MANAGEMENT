import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "../../services/authService";

//# Register User or Signup User
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData, thunkAPI) => {
    try {
      const response = await authService.signupUser(userData);
      return response.data;
    } catch (error) {
      console.log("🚀 ~ error:", error);
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Signup Failed",
      );
    }
  },
);

//# Login user
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, thunkAPI) => {
    try {
      const response = await authService.loginUser(userData);
      return response.data;
    } catch (error) {
      console.log("Error:", error);
      return thunkAPI.rejectWithValue(error.response?.data || "Login Failed");
    }
  },
);

const initialState = {
  user: null,
  isLoading: false,
  isError: false,
  success: "",
  errorMessage: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.isError = null;
    },
  },
  extraReducers: (builder) => {
    builder

      //# Signup user
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })

      .addCase(signupUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.errorMessage = "";
        state.user = action.payload.user;
      })

      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })

      //# Login user
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.success = action.payload;
        state.errorMessage = "";
        state.user = action.payload.user;
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.success = "";
        state.errorMessage = action.payload;
      });
  },
});

export const { clearError } = authSlice.actions;

export const authReducer = authSlice.reducer;
