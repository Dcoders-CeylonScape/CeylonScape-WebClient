import * as Yup from "yup";

const travelSchema = Yup.object().shape({
  routandmode: Yup.string().required("Route and mode of travel is required"),
  periodforvisit: Yup.number()
    .required("Period for visit is required")
    .positive("Must be a positive number"),
  lastplacesrilanka: Yup.string().required(
    "Last place of residence is required"
  ),
  dateofleaving: Yup.date().required("Date of leaving is required").nullable(),
  lastobtainedvisa: Yup.string().required("Last obtained visa is required"),
  dateofissueprevsl: Yup.date()
    .required("Date of issue is required")
    .nullable(),
  periodofvalidity: Yup.number()
    .required("Period of validity is required")
    .positive("Must be a positive number"),
  resvisanumber: Yup.string().when("lastobtainedvisa", {
    is: "immigrant",
    then: Yup.string().required(
      "Resident visa number is required for immigrant visa"
    ),
  }),
  hasrefusedavisa: Yup.string(),
});

export default travelSchema;
