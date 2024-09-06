import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../../api/api";

const applicationSlice = createSlice({
    name: 'application',
    initialState: {
        data: {
            pendingApplications: [],
            allApplications: []
        },
        message: {
        },
        errors: {
            pendingApplications : "",
            allApplications : ""
        },
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getPendingApplications.fulfilled, (state, action) => {
            if (action.payload.statusFlag === 'success') {
                state.data.pendingApplications = action.payload.data
            }else{
                state.errors.pendingApplications = action.payload.errors
            }
        }).addCase(getAllApplications.fulfilled, (state, action) => {
            if (action.payload.statusFlag === 'success') {
                state.data.allApplications = action.payload.data
            } else {
                state.errors.allApplications = action.payload.errors
            }
        })
    }
})

export default applicationSlice.reducer;

export const getPendingApplications = createAsyncThunk(
    'application/getPendingApplications',
    async () => {
        return api.get('#').then((response) => {
            return {
                statusFlag: 'success',
                data: response.data
            }
        }).catch((error) => {
            return {
                statusFlag: 'error',
                errors: error.response.data
            }
        })
    }
)

export const getAllApplications = createAsyncThunk(
    'application/getAllApplications',
    async () => {
        return api.get('#').then((response) => {
            return {
                statusFlag: 'success',
                data: response.data
            }
        }).catch((error) => {
            return {
                statusFlag: 'error',
                errors: error.response.data
            }
        })
    }
)