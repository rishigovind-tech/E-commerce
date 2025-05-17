import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../config/axiosConfig";



export const checkAuthStatus = createAsyncThunk("auth/checkStatus", async (thunkAPI) => {
    try {
        const response = await axiosInstance.get(`/me`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue("Not authenticated");
    }
});

//logout


export const logout = createAsyncThunk("auth/logout", async (thunkAPI) => {

    console.log("from logout");
    try {
        await axiosInstance.delete("/logout");
        return null; 
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue("Logout failed");
    }
});


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(checkAuthStatus.pending, (state) => {
                state.loading = true;
            })
            .addCase(checkAuthStatus.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(checkAuthStatus.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.error = action.payload;
            })
            .addCase(logout.fulfilled,(state,action)=>{
                state.user=action.payload;
            })
    },
});

export default authSlice.reducer;