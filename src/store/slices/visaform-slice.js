import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emergencyContact: {
    name: "",
    address: "",
    contactNumber: "",
    relationship: "",
    moneyAmount: "",
    cardName: "",
    spendableAmount: "",
    applicationReason: "",
  },
  passportDetails: {
    number: "",
    placeOfIssue: "",
    dateOfIssue: "",
    dateOfExpiry: "",
    prevPassport: {
      number: "",
      placeOfIssue: "",
      dateOfIssue: "",
      dateOfExpiry: "",
    },
  },
  personalDetails: {
    name: "",
    nationality: "",
    gender: "",
    dateOfBirth: "",
    country: "",
    status: "",
    image: "",
  },
  spouseDetails: {
    name: "",
    nationality: "",
    postalAddress: "",
    passportNumber: "",
    dateOfExpiry: "",
    naturalizationInfo: {
      date: "",
      placeOfNaturalization: "",
      formerNationality: "",
    },
  },
  travelDetails: {
    routeAndMode: "",
    periodForVisit: "",
    previouslyInSriLanka: {
      lastResidence: "",
      dateOfLeaving: "",
      lastObtainedVisa: "",
      visaType: "",
      dateOfIssue: "",
      periodOfValidity: "",
      residentVisaNumber: "",
      hasRefusedVisa: "",
    },
  },
  userDetails: {
    height: "",
    identificationMarks: "",
    address: {
      domicile: "",
      durationInSriLanka: "",
    },
    contactNumber: {
      telephone: "",
      mobile: "",
      email: "",
    },
    workspace: {
      name: "",
      address: "",
      email: "",
    },
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateEmergencyContact(state, action) {
      state.emergencyContact = { ...state.emergencyContact, ...action.payload };
    },
    updatePassportDetails(state, action) {
      state.passportDetails = { ...state.passportDetails, ...action.payload };
    },
    updatePersonalDetails(state, action) {
      state.personalDetails = { ...state.personalDetails, ...action.payload };
    },
    updateSpouseDetails(state, action) {
      state.spouseDetails = { ...state.spouseDetails, ...action.payload };
    },
    updateTravelDetails(state, action) {
      state.travelDetails = { ...state.travelDetails, ...action.payload };
    },
    updateUserDetails(state, action) {
      state.userDetails = { ...state.userDetails, ...action.payload };
    },
  },
});

export const {
  updateEmergencyContact,
  updatePassportDetails,
  updatePersonalDetails,
  updateSpouseDetails,
  updateTravelDetails,
  updateUserDetails,
} = formSlice.actions;

export default formSlice.reducer;
