import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../../api/api";

const officerSlice = createSlice({
    name: 'officer',
    initialState: {
        data: {
            employee: {},
            localStorage : localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
        },
        errors: {
            login: "",
        },
        message: {
            login: "",
        }
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            if (action.payload.statusFlag === 'success') {
                state.data.employee = action.payload.employee;
                state.data.localStorage = action.payload.employee;
                state.message.login = action.payload.message;
                state.errors.login = "";
                localStorage.setItem('user', JSON.stringify(action.payload.employee));
                setTimeout(() => {
                    window.location.href = '/officer';
                }, 1500);
            } else {
                state.errors.login = action.payload.errors;
            }
        })
    }
})

export default officerSlice.reducer;

export const login = createAsyncThunk(
    'officer/login',
    async (formData) => {
        return api.post('#', formData).then((response) => {
            return {
                statusFlag: 'success',
                employee: response.data.employee,
                message: response.data.message
            }
        }).catch((error) => {
            return {
                statusFlag: 'error',
                errors: error.response.data
            }
        })
    }
)