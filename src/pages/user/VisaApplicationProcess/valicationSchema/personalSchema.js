import * as Yup from "yup";

export const personalSchema = Yup.object({
  name: Yup.string().required("Full name is required"),
  nationality: Yup.string().required("Nationality is required"),
  gender: Yup.string().required("Gender is required"),
  dateOfBirth: Yup.date().required("Date of birth is required").nullable(),
  country: Yup.string().required("Birth country is required"),
  status: Yup.string().required("Civil status is required"),
});
