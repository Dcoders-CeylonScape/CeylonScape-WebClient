import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: {
            user: {
                name: 'Edward',
                email: 'edward1@gmail.com',
            },
            errors: {},
            message: ''
        }
    },
    reducers: {
        setUser: (state, action) => {
            state.data.user = action.payload;
        }
    },
    extraReducers: (builder) => {
    }
});

export default userSlice.reducer;