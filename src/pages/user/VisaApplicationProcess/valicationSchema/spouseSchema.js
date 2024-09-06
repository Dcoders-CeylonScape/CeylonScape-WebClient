// spouseSchema.js
import * as Yup from "yup";

const spouseSchema = Yup.object().shape({
  spousename: Yup.string()
    .required("Full Name is required")
    .min(2, "Full Name must be at least 2 characters"),

  spousenationality: Yup.string()
    .required("Nationality is required")
    .min(2, "Nationality must be at least 2 characters"),

  postalAddress: Yup.string()
    .required("Postal Address is required")
    .min(5, "Postal Address must be at least 5 characters"),

  passportNumber: Yup.string()
    .required("Passport Number is required")
    .matches(
      /^[A-Z0-9]+$/,
      "Passport Number must contain only uppercase letters and numbers"
    ),

  dateofexpiryspouse: Yup.date()
    .required("Date of Expiry is required")
    .max(new Date(), "Date of Expiry cannot be in the future"),

  naturalizeddate: Yup.date()
    .required("Date of Naturalization is required")
    .max(new Date(), "Date of Naturalization cannot be in the future"),

  placeofinaturalised: Yup.string()
    .required("Place of Naturalization is required")
    .min(2, "Place of Naturalization must be at least 2 characters"),

  formernationality: Yup.string()
    .required("Former Nationality is required")
    .min(2, "Former Nationality must be at least 2 characters"),
});

export default spouseSchema;
