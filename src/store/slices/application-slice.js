import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../../api/api";

const applicationSlice = createSlice({
    name: 'application',
    initialState: {
        data: {
            pendingApplications: [
                {
                    "id": 1,
                    "fullName": "John Doe",
                    "birthCountry": "Japan",
                    "birthPlace": "Colombo",
                    "createdAt": "2024-09-06T13:47:14.832362Z",
                    "email": "john.doe@example.com",
                    "passport": {
                        "userInfoId": 1,
                        "number": "P123456789",
                    },
                    "visaRequestStatus": {
                        "id": 1,
                        "reason": "Accepted for no reason",
                        "flag": null,
                        "status": null,
                        "adminId": 0
                    },
                    "userID": 1
                },
                {
                    id: 3,
                    fullName: "Raj Perera",
                    birthCountry: "Australia",
                    birthPlace: "Galle",
                    createdAt: "2024-07-10T10:15:00.000000Z",
                    email: "raj.perera@example.com",
                    passport: {
                        userInfoId: 3,
                        number: "P345678901",
                    },
                    visaRequestStatus: {
                        id: 3,
                        reason: "Business meeting",
                        flag: "Urgent",
                        status: "Pending",
                        adminId: 2,
                    },
                    userID: 3,
                },
                {
                    id: 4,
                    fullName: "Sara Silva",
                    birthCountry: "Sweden",
                    birthPlace: "Colombo",
                    createdAt: "2024-09-01T12:45:00.000000Z",
                    email: "sara.silva@example.com",
                    passport: {
                        userInfoId: 4,
                        number: "P456789012",
                    },
                    visaRequestStatus: {
                        id: 4,
                        reason: "Tourism",
                        flag: null,
                        status: "Approved",
                        adminId: 0,
                    },
                    userID: 4,
                },
                {
                    id: 5,
                    fullName: "Michael Wijesinghe",
                    birthCountry: "South Korea",
                    birthPlace: "Negombo",
                    createdAt: "2024-06-20T08:00:00.000000Z",
                    email: "michael.w@example.com",
                    passport: {
                        userInfoId: 5,
                        number: "P567890123",
                    },
                    visaRequestStatus: {
                        id: 5,
                        reason: "Conference speaker",
                        flag: "Urgent",
                        status: "Approved",
                        adminId: 3,
                    },
                    userID: 5,
                },
                {
                    id: 6,
                    fullName: "Nisha Jayawardena",
                    birthCountry: "India",
                    birthPlace: "Matara",
                    createdAt: "2024-05-15T14:20:00.000000Z",
                    email: "nisha.jay@example.com",
                    passport: {
                        userInfoId: 6,
                        number: "P678901234",
                    },
                    visaRequestStatus: {
                        id: 6,
                        reason: "Tourism",
                        flag: null,
                        status: "Pending",
                        adminId: 0,
                    },
                    userID: 6,
                },
                {
                    id: 7,
                    fullName: "Lakmal Fonseka",
                    birthCountry: "Japan",
                    birthPlace: "Kandy",
                    createdAt: "2024-04-12T11:45:00.000000Z",
                    email: "lakmal.f@example.com",
                    passport: {
                        userInfoId: 7,
                        number: "P789012345",
                    },
                    visaRequestStatus: {
                        id: 7,
                        reason: "Business trip",
                        flag: null,
                        status: "Rejected",
                        adminId: 4,
                    },
                    userID: 7,
                },
                {
                    id: 8,
                    fullName: "Amara De Silva",
                    birthCountry: "Japan",
                    birthPlace: "Batticaloa",
                    createdAt: "2024-03-10T09:00:00.000000Z",
                    email: "amara.desilva@example.com",
                    passport: {
                        userInfoId: 8,
                        number: "P890123456",
                    },
                    visaRequestStatus: {
                        id: 8,
                        reason: "Family visit",
                        flag: "Urgent",
                        status: "Approved",
                        adminId: 5,
                    },
                    userID: 8,
                },
                {
                    id: 9,
                    fullName: "Prasad Gunasekara",
                    birthCountry: "Bangaladesh",
                    birthPlace: "Anuradhapura",
                    createdAt: "2024-02-22T15:30:00.000000Z",
                    email: "prasad.g@example.com",
                    passport: {
                        userInfoId: 9,
                        number: "P901234567",
                    },
                    visaRequestStatus: {
                        id: 9,
                        reason: "Medical treatment",
                        flag: "Priority",
                        status: "Approved",
                        adminId: 6,
                    },
                    userID: 9,
                },
                {
                    id: 10,
                    fullName: "Dilani Ratnayake",
                    birthCountry: "Singapore",
                    birthPlace: "Jaffna",
                    createdAt: "2024-01-05T16:15:00.000000Z",
                    email: "dilani.ratnayake@example.com",
                    passport: {
                        userInfoId: 10,
                        number: "P012345678",
                    },
                    visaRequestStatus: {
                        id: 10,
                        reason: "Cultural exchange",
                        flag: null,
                        status: "Pending",
                        adminId: 7,
                    },
                    userID: 10,
                }
            ],
            allApplications: [
                {
                    "id": 1,
                    "fullName": "John Doe",
                    "birthCountry": "Australia",
                    "birthPlace": "Colombo",
                    "createdAt": "2024-09-06T13:47:14.832362Z",
                    "email": "john.doe@example.com",
                    "passport": {
                        "userInfoId": 1,
                        "number": "P123456789",
                    },
                    "visaRequestStatus": {
                        "id": 1,
                        "reason": "Accepted for no reason",
                        "flag": null,
                        "status": null,
                        "adminId": 0
                    },
                    "userID": 1
                },
                {
                    id: 3,
                    fullName: "Raj Perera",
                    birthCountry: "Australia",
                    birthPlace: "Galle",
                    createdAt: "2024-07-10T10:15:00.000000Z",
                    email: "raj.perera@example.com",
                    passport: {
                        userInfoId: 3,
                        number: "P345678901",
                    },
                    visaRequestStatus: {
                        id: 3,
                        reason: "Business meeting",
                        flag: "Urgent",
                        status: "Pending",
                        adminId: 2,
                    },
                    userID: 3,
                },
                {
                    id: 4,
                    fullName: "Sara Silva",
                    birthCountry: "Japan",
                    birthPlace: "Colombo",
                    createdAt: "2024-09-01T12:45:00.000000Z",
                    email: "sara.silva@example.com",
                    passport: {
                        userInfoId: 4,
                        number: "P456789012",
                    },
                    visaRequestStatus: {
                        id: 4,
                        reason: "Tourism",
                        flag: null,
                        status: "Approved",
                        adminId: 0,
                    },
                    userID: 4,
                },
                {
                    id: 5,
                    fullName: "Michael Wijesinghe",
                    birthCountry: "Japan",
                    birthPlace: "Negombo",
                    createdAt: "2024-06-20T08:00:00.000000Z",
                    email: "michael.w@example.com",
                    passport: {
                        userInfoId: 5,
                        number: "P567890123",
                    },
                    visaRequestStatus: {
                        id: 5,
                        reason: "Conference speaker",
                        flag: "Urgent",
                        status: "Approved",
                        adminId: 3,
                    },
                    userID: 5,
                },
                {
                    id: 6,
                    fullName: "Nisha Jayawardena",
                    birthCountry: "Singapore",
                    birthPlace: "Matara",
                    createdAt: "2024-05-15T14:20:00.000000Z",
                    email: "nisha.jay@example.com",
                    passport: {
                        userInfoId: 6,
                        number: "P678901234",
                    },
                    visaRequestStatus: {
                        id: 6,
                        reason: "Tourism",
                        flag: null,
                        status: "Pending",
                        adminId: 0,
                    },
                    userID: 6,
                },
                {
                    id: 7,
                    fullName: "Lakmal Fonseka",
                    birthCountry: "Singapore",
                    birthPlace: "Kandy",
                    createdAt: "2024-04-12T11:45:00.000000Z",
                    email: "lakmal.f@example.com",
                    passport: {
                        userInfoId: 7,
                        number: "P789012345",
                    },
                    visaRequestStatus: {
                        id: 7,
                        reason: "Business trip",
                        flag: null,
                        status: "Rejected",
                        adminId: 4,
                    },
                    userID: 7,
                },
                {
                    id: 8,
                    fullName: "Amara De Silva",
                    birthCountry: "Singapore",
                    birthPlace: "Batticaloa",
                    createdAt: "2024-03-10T09:00:00.000000Z",
                    email: "amara.desilva@example.com",
                    passport: {
                        userInfoId: 8,
                        number: "P890123456",
                    },
                    visaRequestStatus: {
                        id: 8,
                        reason: "Family visit",
                        flag: "Urgent",
                        status: "Approved",
                        adminId: 5,
                    },
                    userID: 8,
                },
                {
                    id: 9,
                    fullName: "Prasad Gunasekara",
                    birthCountry: "India",
                    birthPlace: "Anuradhapura",
                    createdAt: "2024-02-22T15:30:00.000000Z",
                    email: "prasad.g@example.com",
                    passport: {
                        userInfoId: 9,
                        number: "P901234567",
                    },
                    visaRequestStatus: {
                        id: 9,
                        reason: "Medical treatment",
                        flag: "Priority",
                        status: "Approved",
                        adminId: 6,
                    },
                    userID: 9,
                },
                {
                    id: 10,
                    fullName: "Dilani Ratnayake",
                    birthCountry: "India",
                    birthPlace: "Jaffna",
                    createdAt: "2024-01-05T16:15:00.000000Z",
                    email: "dilani.ratnayake@example.com",
                    passport: {
                        userInfoId: 10,
                        number: "P012345678",
                    },
                    visaRequestStatus: {
                        id: 10,
                        reason: "Cultural exchange",
                        flag: null,
                        status: "Pending",
                        adminId: 7,
                    },
                    userID: 10,
                }
            ]
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
        return api.get('/Userinfo').then((response) => {
            const pendingApplications = response.data.filter((application) => application.status === null)
            return {
                statusFlag: 'success',
                data: pendingApplications
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
        return api.get('/Userinfo').then((response) => {
            const allApplications = response.data.filter(application => application.visaRequestStatus.status !== null)
            return {
                statusFlag: 'success',
                data: allApplications
            }
        }).catch((error) => {
            return {
                statusFlag: 'error',
                errors: error.response.data
            }
        })
    }
)