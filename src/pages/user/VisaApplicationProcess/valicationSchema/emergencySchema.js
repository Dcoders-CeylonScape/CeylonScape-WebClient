import * as Yup from "yup";

const emergencySchema = Yup.object().shape({
  emergencyname: Yup.string().required("Name is required"),
  emergencyaddress: Yup.string().required("Address is required"),
  emergencynumber: Yup.string()
    .matches(/^\d+$/, "Contact number must be a valid phone number")
    .required("Contact number is required"),
  emergencyrelationship: Yup.string().required("Relationship is required"),
  moneyamount: Yup.number()
    .positive("Amount must be a positive number")
    .required("Amount is required"),
  cardname: Yup.string().required("Card name is required"),
  spendableamount: Yup.number()
    .positive("Amount must be a positive number")
    .required("Spendable amount is required"),
  applcationreason: Yup.string().required("Reason is required"),
});

export default emergencySchema;
