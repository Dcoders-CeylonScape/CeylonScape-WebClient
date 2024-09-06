import * as Yup from "yup";

// Validation schema
const validationSchema = Yup.object().shape({
  numberpassport: Yup.string()
    .required("Passport number is required")
    .matches(
      /^[A-Z0-9]+$/,
      "Passport number must contain only uppercase letters and numbers"
    ),

  placeofissue: Yup.string()
    .required("Place of issue is required")
    .min(2, "Place of issue must be at least 2 characters"),

  dateofissue: Yup.date()
    .required("Date of issue is required")
    .max(new Date(), "Date of issue cannot be in the future"),

  dateofexpiry: Yup.date()
    .required("Date of expiry is required")
    .min(
      Yup.ref("dateofissue"),
      "Date of expiry must be after the date of issue"
    )
    .max(
      new Date(new Date().setFullYear(new Date().getFullYear() + 10)),
      "Date of expiry cannot be more than 10 years from now"
    ),

  prevpassnumber: Yup.string()
    .optional()
    .matches(
      /^[A-Z0-9]*$/,
      "Previous passport number must contain only uppercase letters and numbers"
    ),

  placeofissueprev: Yup.string()
    .optional()
    .min(2, "Previous place of issue must be at least 2 characters"),

  dateofissueprev: Yup.date()
    .optional()
    .max(new Date(), "Previous date of issue cannot be in the future"),

  dateofexpiryprev: Yup.date()
    .optional()
    .min(
      Yup.ref("dateofissueprev"),
      "Previous date of expiry must be after the previous date of issue"
    )
    .max(
      new Date(new Date().setFullYear(new Date().getFullYear() + 10)),
      "Previous date of expiry cannot be more than 10 years from now"
    ),
});

export default validationSchema;
