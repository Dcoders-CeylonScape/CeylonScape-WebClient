import countries from "../coutries.js";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { FileInput, Label, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import { updatePersonalDetails } from "../../../../store/slices/visaform-slice.js";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

export default function Personal({ handleNext }) {
  const dispatch = useDispatch();
  const personalDetails = useSelector((state) => state.form.personalDetails);
  const [imageBase64, setImageBase64] = useState("");

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result);
        formik.setFieldValue("image", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: personalDetails.name || "",
      nationality: personalDetails.nationality || "",
      gender: personalDetails.gender || "",
      dateOfBirth: personalDetails.dateOfBirth || "",
      country: personalDetails.country || "",
      status: personalDetails.status || "",
      image: imageBase64,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
      dispatch(updatePersonalDetails(values));

      delay(2000).then(() => {
        console.log(personalDetails);
      });

      handleNext();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="font-inter text-2xl font-semibold leading-normal mb-5">
        Personal Details
      </div>

      {/* File Input */}
      <div className="flex w-full items-center justify-center px-4 mb-2">
        <Label
          htmlFor="dropzone-file"
          className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
        >
          <div className="flex flex-col items-center justify-center py-10">
            <p className="text-xs text-gray-500">Upload a picture</p>
          </div>
          <FileInput
            id="dropzone-file"
            className="hidden"
            onChange={handleFileChange} // Handle file input change
          />
        </Label>
      </div>

      {/* Form Fields */}
      <div className="flex w-full flex-wrap justify-between gap-2 mt-2">
        <div className="w-[500px] px-4">
          <Label htmlFor="name" value="Full name*" />
          <TextInput
            id="name"
            name="name"
            type="text"
            placeholder="Full name"
            required
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div className="w-[500px] px-4">
          <Label htmlFor="nationality" value="Nationality*" />
          <TextInput
            id="nationality"
            name="nationality"
            type="text"
            placeholder="Nationality"
            required
            onChange={formik.handleChange}
            value={formik.values.nationality}
          />
        </div>
      </div>

      <div className="flex w-full flex-wrap justify-between gap-2 mt-2">
        <div className="w-[500px] px-4">
          <Label htmlFor="gender" value="Gender*" />
          <select
            id="gender"
            name="gender"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            onChange={formik.handleChange}
            value={formik.values.gender}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="w-[500px] px-4">
          <Label htmlFor="dateOfBirth" value="Date of Birth*" />
          <TextInput
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            placeholder="Date of Birth"
            required
            onChange={formik.handleChange}
            value={formik.values.dateOfBirth}
          />
        </div>
      </div>

      <div className="flex w-full flex-wrap justify-between gap-2 mt-2">
        <div className="w-[500px] px-4">
          <Label htmlFor="country" value="Country of Birth*" />
          <select
            id="country"
            name="country"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            onChange={formik.handleChange}
            value={formik.values.country}
            required
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="w-[500px] px-4">
          <Label htmlFor="status" value="Civil status*" />
          <select
            id="status"
            name="status"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            onChange={formik.handleChange}
            value={formik.values.status}
            required
          >
            <option value="">Select Status</option>
            <option value="0">Single</option>
            <option value="1">Married</option>
            <option value="2">Widowed</option>
            <option value="3">Divorced</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end mt-10 mb-10">
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
          className="!font-poppins justify-around !font-normal !bg-primary_pri50 !text-white !rounded-full !px-10 !py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 2xl:px-[24px] 2xl:py-[10px]"
        >
          Next
          <ArrowForward sx={{ marginLeft: 1 }} />
        </Button>
      </div>
    </form>
  );
}
