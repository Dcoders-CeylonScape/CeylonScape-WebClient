import * as Yup from "yup";

const userValidationSchema = Yup.object().shape({
  height: Yup.number()
    .typeError("Height must be a number")
    .positive("Height must be a positive number")
    .required("Height is required"),

  identification: Yup.string()
    .min(3, "Identification marks must be at least 3 characters")
    .required("Identification marks are required"),

  domicile: Yup.string().required("Domicile address is required"),

  duration: Yup.string().required("Duration is required"),

  telephone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must only contain digits")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),

  mobile: Yup.string()
    .matches(
      /^[a-zA-Z0-9\s-]*$/,
      "Mobile number can contain alphanumeric characters, spaces, and dashes"
    )
    .min(10, "Mobile number must be at least 10 characters")
    .required("Mobile number is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  wrokspacename: Yup.string()
    .min(3, "Workspace name must be at least 3 characters")
    .required("Workspace name is required"),

  addressworkplace: Yup.string().required("Workplace address is required"),

  workemail: Yup.string()
    .email("Invalid email format")
    .required("Workplace email is required"),
});

export default userValidationSchema;
