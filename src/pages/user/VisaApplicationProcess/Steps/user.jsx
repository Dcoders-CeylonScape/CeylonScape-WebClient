import { Label, TextInput } from "flowbite-react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import ArrowForward from "@mui/icons-material/ArrowForward";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useSelector, useDispatch } from "react-redux";
import { updateUserDetails } from "../../../../store/slices/visaform-slice.js";

export default function User({ handleNext, handleBack }) {
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Get the userDetails from Redux
  const userDetails = useSelector((state) => state.form.userDetails); // Access userDetails from the state
  const dispatch = useDispatch();

  const formik = useFormik({
    // Initialize form with Redux values or default if not present
    initialValues: {
      height: userDetails?.height || "",
      identificationMarks: userDetails?.identificationMarks || "",
      address: {
        domicile: userDetails?.address?.domicile || "",
        durationInSriLanka: userDetails?.address?.durationInSriLanka || "",
      },
      contactNumber: {
        telephone: userDetails?.contactNumber?.telephone || "",
        mobile: userDetails?.contactNumber?.mobile || "",
        email: userDetails?.contactNumber?.email || "",
      },
      workspace: {
        name: userDetails?.workspace?.name || "",
        address: userDetails?.workspace?.address || "",
        email: userDetails?.workspace?.email || "",
      },
    },
    onSubmit: (values) => {
      // Dispatch form values to Redux
      dispatch(updateUserDetails(values));
      delay(3000).then(() => {
        console.log(userDetails);
      });
      handleNext();
    },
    handleChange: (event) => {
      const { name, value } = event.target;
      if (
        name.startsWith("address.") ||
        name.startsWith("contactNumber.") ||
        name.startsWith("workspace.")
      ) {
        const [field, subField] = name.split(".");
        formik.setFieldValue(`${field}.${subField}`, value);
      } else {
        formik.handleChange(event);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="font-inter text-2xl font-semibold leading-normal mb-5">
        User Details
      </div>

      {/* User Details Fields */}
      <div className="flex w-full flex-wrap justify-between gap-2">
        <div className="w-[500px] px-4">
          <Label htmlFor="height" value="Height" />
          <TextInput
            id="height"
            name="height"
            type="number"
            placeholder="Height"
            required
            onChange={formik.handleChange}
            value={formik.values.height}
          />
        </div>
        <div className="w-[500px] px-4">
          <Label
            htmlFor="identificationMarks"
            value="Any identification marks or peculiarities"
          />
          <TextInput
            id="identificationMarks"
            name="identificationMarks"
            type="text"
            placeholder="Identification"
            required
            onChange={formik.handleChange}
            value={formik.values.identificationMarks}
          />
        </div>
      </div>

      {/* Address Section */}
      <div className="flex-col">
        <div className="font-inter text-[18px] font-semibold leading-normal ps-4 mt-4">
          Address
        </div>
        <div className="flex w-full flex-wrap justify-between gap-2 mt-2">
          <div className="w-[500px] px-4">
            <Label
              htmlFor="address.domicile"
              value="In the country of domicile*"
            />
            <TextInput
              id="address.domicile"
              name="address.domicile"
              type="text"
              placeholder="Address"
              required
              onChange={formik.handleChange}
              value={formik.values.address.domicile}
            />
          </div>
          <div className="w-[500px] px-4">
            <Label
              htmlFor="address.durationInSriLanka"
              value="During staying in Sri Lanka"
            />
            <TextInput
              id="address.durationInSriLanka"
              name="address.durationInSriLanka"
              type="text"
              placeholder="Duration"
              required
              onChange={formik.handleChange}
              value={formik.values.address.durationInSriLanka}
            />
          </div>
        </div>
      </div>

      {/* Contact Number Section */}
      <div className="flex-col">
        <div className="font-inter text-[18px] font-semibold leading-normal ps-4 mt-4">
          Contact number
        </div>
        <div className="flex w-full flex-wrap justify-between gap-2 mt-2">
          <div className="w-[500px] px-4">
            <Label htmlFor="contactNumber.telephone" value="Telephone*" />
            <TextInput
              id="contactNumber.telephone"
              name="contactNumber.telephone"
              type="tel"
              placeholder="Telephone"
              required
              onChange={formik.handleChange}
              value={formik.values.contactNumber.telephone}
            />
          </div>
          <div className="w-[500px] px-4">
            <Label htmlFor="contactNumber.mobile" value="Mobile*" />
            <TextInput
              id="contactNumber.mobile"
              name="contactNumber.mobile"
              type="tel"
              placeholder="Mobile"
              required
              onChange={formik.handleChange}
              value={formik.values.contactNumber.mobile}
            />
          </div>
        </div>
        <div className="flex w-full flex-wrap justify-between gap-2">
          <div className="w-[500px] px-4 mt-2">
            <Label htmlFor="contactNumber.email" value="Email*" />
            <TextInput
              id="contactNumber.email"
              name="contactNumber.email"
              type="email"
              placeholder="Email"
              required
              onChange={formik.handleChange}
              value={formik.values.contactNumber.email}
            />
          </div>
        </div>
      </div>

      {/* Workspace Section */}
      <div className="flex-col">
        <div className="font-inter text-[18px] font-semibold leading-normal ps-4 mt-4">
          Workspace
        </div>
        <div className="flex w-full flex-wrap justify-between gap-2 mt-2">
          <div className="w-[500px] px-4">
            <Label htmlFor="workspace.name" value="Name*" />
            <TextInput
              id="workspace.name"
              name="workspace.name"
              type="text"
              placeholder="Name"
              required
              onChange={formik.handleChange}
              value={formik.values.workspace.name}
            />
          </div>
          <div className="w-[500px] px-4">
            <Label htmlFor="workspace.address" value="Address*" />
            <TextInput
              id="workspace.address"
              name="workspace.address"
              type="text"
              placeholder="Address"
              required
              onChange={formik.handleChange}
              value={formik.values.workspace.address}
            />
          </div>
        </div>
        <div className="flex w-full flex-wrap justify-between gap-2 mt-2">
          <div className="w-[500px] px-4">
            <Label htmlFor="workspace.email" value="Workspace Email*" />
            <TextInput
              id="workspace.email"
              name="workspace.email"
              type="email"
              placeholder="Email"
              required
              onChange={formik.handleChange}
              value={formik.values.workspace.email}
            />
          </div>
        </div>
      </div>

      {/* Buttons for Next and Back */}
      <div className="w-full flex justify-between mt-10 px-2 mb-10">
        <Button
          onClick={handleBack}
          variant="contained"
          sx={{
            textTransform: "none",
            fontSize: {
              xs: "12px",
              sm: "14px",
              md: "16px",
              lg: "18px",
              xl: "20px",
            },
          }}
          className="!font-poppins justify-around !font-normal !bg-primary_pri50 !text-white !rounded-full !px-10 !py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6"
        >
          <ArrowBack sx={{ marginRight: 1 }} />
          Back
        </Button>

        <Button
          type="submit"
          variant="contained"
          sx={{
            textTransform: "none",
            fontSize: {
              xs: "12px",
              sm: "14px",
              md: "16px",
              lg: "18px",
              xl: "20px",
            },
          }}
          className="!font-poppins justify-around !font-normal !bg-primary_pri50 !text-white !rounded-full !px-10 !py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6"
        >
          Next
          <ArrowForward sx={{ marginLeft: 1 }} />
        </Button>
      </div>
    </form>
  );
}
