import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "../../services/authService";

//# Register User or Signup User
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData, thunkAPI) => {
    try {
      const data = await authService.signupUser(userData);
      return data;
    } catch (error) {
      console.log("🚀 ~ error:", error);
      return thunkAPI.rejectWithValue(
        error.data?.data?.message || "Signup Failed",
      );
    }
  },
);

const initialState = {
  user: null,
  isLoading: false,
  isError: false,
  errorMessage: ""
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    //# Signup user 
    .addCase(signupUser.pending, (state) => {
      ((state.isLoading = true), (state.isError = false));
    })

    .addCase(signupUser.fulfilled, (state, action) => {
        state.isLoading = false,
        state.isError = false,
        state.user = action.payload.user
    })

    .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false,
        state.isError = true,
        state.errorMessage = action.payload
    })
  },
});

// export const {} = authSlice.actions;

export const authReducer = authSlice.reducer;
