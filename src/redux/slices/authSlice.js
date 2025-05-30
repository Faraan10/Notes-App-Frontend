import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import registerUser from "../api/registerUser";
import loginUser from "../api/loginUser";
import sendOtp from "../api/sendOtp";
import verifyOtp from "../api/verifyOtp";
import getUser from "../api/getUser";
import { toast } from "react-toastify";

const user = JSON.parse(localStorage.getItem("user"));
const userData = JSON.parse(localStorage.getItem("userData"));
const initialState = {
  user: user ? user : null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  userData: userData ? userData : null,
};

// register user

export const registerUserAsync = createAsyncThunk(
  "auth/register",
  async (user) => {
    const response = await registerUser(user);
    // console.log(response.createUser);
    if (response.createUser) {
      toast.success(response.message);
    } else {
      toast.error(response.data.message);
    }
    return response;
  }
);

export const loginUserAsync = createAsyncThunk("auth/login", async (user) => {
  const response = await loginUser(user);
  // console.log(response);
  if (response.token) {
    toast.success(response.message);
    localStorage.setItem("user", JSON.stringify(response.token));
  } else {
    toast.error(response.data.message);
  }
  return response;
});

export const sendOtpAsync = createAsyncThunk(
  "auth/login/request-otp",
  async (user) => {
    const response = await sendOtp(user);
    console.log(response);

    if (response.message) {
      toast.success(response.message || "OTP sent successfully!");
    } else {
      toast.error(response?.data?.message || "Failed to send OTP.");
    }

    return response;
  }
);

// Verify OTP API call
export const verifyOtpAsync = createAsyncThunk(
  "auth/login/verify-otp",
  async (user) => {
    const response = await verifyOtp(user);
    console.log(response);

    if (response?.message && response.token) {
      toast.success(response.message || "OTP verified successfully!");
      localStorage.setItem("user", JSON.stringify(response.token));
    } else {
      toast.error(response?.message || "Invalid OTP");
    }
    return response;
  }
);

export const getUserAsync = createAsyncThunk("auth/getUser", async () => {
  const response = await getUser();
  return response;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.user = null;
    },
    setUserDetails: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    removeUser: (state) => {
      localStorage.removeItem("user");
      localStorage.removeItem("userData");
      state.user = null;
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.userData = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUserAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerUserAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isSuccess = true;
    });
    builder.addCase(registerUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(loginUserAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUserAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isSuccess = true;
    });
    builder.addCase(sendOtpAsync.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(sendOtpAsync.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(sendOtpAsync.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(verifyOtpAsync.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(verifyOtpAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isSuccess = true;
    });

    builder.addCase(verifyOtpAsync.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(getUserAsync.fulfilled, (state, action) => {
      state.userData = action.payload;
      localStorage.setItem("userData", JSON.stringify(state.userData));
    });
  },
});

export const { reset, setUserDetails, removeUser } = authSlice.actions;

export default authSlice.reducer;
