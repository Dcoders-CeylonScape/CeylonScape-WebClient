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
                    "nationality": "Sri Lankan",
                    "gender": "Male",
                    "dob": "1990-01-01T00:00:00Z",
                    "birthCountry": "Sri Lanka",
                    "birthPlace": "Colombo",
                    "height": 175,
                    "peculiarity": "None",
                    "domicileAddress": "123 Main St, Colombo",
                    "addressDuringSriLanka": "123 Main St, Colombo",
                    "periodofvisit": 0,
                    "telephone": "0111234567",
                    "mobile": "0771234567",
                    "createdAt": "2024-09-06T13:47:14.832362Z",
                    "email": "john.doe@example.com",
                    "civilStatus": 1,
                    "emergencyContacts": [
                        {
                            "id": 1,
                            "name": "Jane Doe",
                            "address": "123 Main St, Colombo",
                            "contact": "0776543210",
                            "relationship": "Spouse",
                            "userInfoId": 1,
                            "nameOfCreditCard": "dkjsa",
                            "support": "SUPPORT STRING",
                            "spendableAmount": 100.2,
                            "usdAmount": 12
                        }
                    ],
                    "naturalizationInfo": {
                        "userInfoId": 1,
                        "isNaturalized": false,
                        "naturalizationDate": "2020-01-01T00:00:00Z",
                        "placeOfNaturalization": "Sri Lanka",
                        "formerNationality": "Indian"
                    },
                    "spouse": {
                        "userInfoId": 1,
                        "fullname": "Jane Doe",
                        "nationality": "Sri Lankan",
                        "postalAddress": "123 Main St, Colombo",
                        "passportNumber": "ABC123456",
                        "dateOfExpiry": "2030-01-01T00:00:00Z"
                    },
                    "passport": {
                        "userInfoId": 1,
                        "number": "P123456789",
                        "placeOfIssue": "Colombo",
                        "dateOfIssue": "2020-01-01T00:00:00Z",
                        "dateOfExpiry": "2030-01-01T00:00:00Z",
                        "previousPlaceOfIssue": "dadasd",
                        "previousNumber": "reorj",
                        "previousDateOfExpiry": "2030-01-01T00:00:00Z",
                        "previousDateOfIssue": "2030-01-01T00:00:00Z"
                    },
                    "entryVisas": [
                        {
                            "id": 1,
                            "modeOfTravel": "Air",
                            "dateOfLeaving": "2020-01-01T00:00:00Z",
                            "lastPlaceOfResidence": "Sri Lanka",
                            "dateOfIssue": "2020-01-01T00:00:00Z",
                            "residenceVisaNumber": "RV123456",
                            "hasRefusedVisa": "yes with reason",
                            "objectOfVisit": "Tourism",
                            "periodOfVisitVisa": 34,
                            "periodOfValidity": 32,
                            "userInfoId": 1,
                            "lastObtainedVisa": "Work",
                            "entryVisaApprovals": [],
                            "visaExtensionInfos": []
                        }
                    ],
                    "profession": {
                        "id": 1,
                        "nameOfWorkplace": "ABC Corp",
                        "addressOfWorkplace": "123 Business St, Colombo",
                        "email": "abc@corp.com",
                        "fax": "facs",
                        "userInfoId": 1
                    },
                    "image": "Amo amo menna image",
                    "residenceVisaInfo": {
                        "id": 1,
                        "dateOfArrival": "2020-01-01T00:00:00Z",
                        "reasonForApplyingVisa": "Work",
                        "applyingFor": "Work Visa",
                        "salaryIncome": "50000",
                        "residenceVisaApprovals": [],
                        "business": null,
                        "userInfoId": 1
                    },
                    "visaRequestStatus": {
                        "id": 1,
                        "reason": "Accepted for no reason",
                        "flag": null,
                        "status": null,
                        "adminId": 0
                    },
                    "userID": 1
                }
            ],
            allApplications: [
                {
                    "id": 1,
                    "fullName": "John Doe",
                    "nationality": "Sri Lankan",
                    "gender": "Male",
                    "dob": "1990-01-01T00:00:00Z",
                    "birthCountry": "Sri Lanka",
                    "birthPlace": "Colombo",
                    "height": 175,
                    "peculiarity": "None",
                    "domicileAddress": "123 Main St, Colombo",
                    "addressDuringSriLanka": "123 Main St, Colombo",
                    "periodofvisit": 0,
                    "telephone": "0111234567",
                    "mobile": "0771234567",
                    "createdAt": "2024-09-06T13:47:14.832362Z",
                    "email": "john.doe@example.com",
                    "civilStatus": 1,
                    "emergencyContacts": [
                        {
                            "id": 1,
                            "name": "Jane Doe",
                            "address": "123 Main St, Colombo",
                            "contact": "0776543210",
                            "relationship": "Spouse",
                            "userInfoId": 1,
                            "nameOfCreditCard": "dkjsa",
                            "support": "SUPPORT STRING",
                            "spendableAmount": 100.2,
                            "usdAmount": 12
                        }
                    ],
                    "naturalizationInfo": {
                        "userInfoId": 1,
                        "isNaturalized": false,
                        "naturalizationDate": "2020-01-01T00:00:00Z",
                        "placeOfNaturalization": "Sri Lanka",
                        "formerNationality": "Indian"
                    },
                    "spouse": {
                        "userInfoId": 1,
                        "fullname": "Jane Doe",
                        "nationality": "Sri Lankan",
                        "postalAddress": "123 Main St, Colombo",
                        "passportNumber": "ABC123456",
                        "dateOfExpiry": "2030-01-01T00:00:00Z"
                    },
                    "passport": {
                        "userInfoId": 1,
                        "number": "P123456789",
                        "placeOfIssue": "Colombo",
                        "dateOfIssue": "2020-01-01T00:00:00Z",
                        "dateOfExpiry": "2030-01-01T00:00:00Z",
                        "previousPlaceOfIssue": "dadasd",
                        "previousNumber": "reorj",
                        "previousDateOfExpiry": "2030-01-01T00:00:00Z",
                        "previousDateOfIssue": "2030-01-01T00:00:00Z"
                    },
                    "entryVisas": [
                        {
                            "id": 1,
                            "modeOfTravel": "Air",
                            "dateOfLeaving": "2020-01-01T00:00:00Z",
                            "lastPlaceOfResidence": "Sri Lanka",
                            "dateOfIssue": "2020-01-01T00:00:00Z",
                            "residenceVisaNumber": "RV123456",
                            "hasRefusedVisa": "yes with reason",
                            "objectOfVisit": "Tourism",
                            "periodOfVisitVisa": 34,
                            "periodOfValidity": 32,
                            "userInfoId": 1,
                            "lastObtainedVisa": "Work",
                            "entryVisaApprovals": [],
                            "visaExtensionInfos": []
                        }
                    ],
                    "profession": {
                        "id": 1,
                        "nameOfWorkplace": "ABC Corp",
                        "addressOfWorkplace": "123 Business St, Colombo",
                        "email": "abc@corp.com",
                        "fax": "facs",
                        "userInfoId": 1
                    },
                    "image": "Amo amo menna image",
                    "residenceVisaInfo": {
                        "id": 1,
                        "dateOfArrival": "2020-01-01T00:00:00Z",
                        "reasonForApplyingVisa": "Work",
                        "applyingFor": "Work Visa",
                        "salaryIncome": "50000",
                        "residenceVisaApprovals": [],
                        "business": null,
                        "userInfoId": 1
                    },
                    "visaRequestStatus": {
                        "id": 1,
                        "reason": "Accepted for no reason",
                        "flag": null,
                        "status": null,
                        "adminId": 0
                    },
                    "userID": 1
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