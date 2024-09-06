import React from "react";
import { useFormik } from "formik";
import { Label, TextInput } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import ArrowForward from "@mui/icons-material/ArrowForward";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { updateSpouseDetails } from "../../../../store/slices/visaform-slice";

export default function Spouse({ handleNext, handleBack }) {
  const dispatch = useDispatch();
  const spouseDetails = useSelector((state) => state.form);

  const formik = useFormik({
    initialValues: {
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
    onSubmit: (values) => {
      dispatch(updateSpouseDetails(values));
      console.log(spouseDetails);
      handleNext();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <div className="font-inter text-2xl font-semibold leading-normal mb-5">
          Spouse details
        </div>

        <div className="flex w-full flex-wrap justify-between gap-2">
          <div className="w-[500px] px-4">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Full Name*" />
            </div>
            <TextInput
              id="name"
              type="text"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-600">{formik.errors.name}</div>
            )}
          </div>
          <div className="w-[500px] px-4">
            <div className="mb-2 block">
              <Label htmlFor="nationality" value="Nationality*" />
            </div>
            <TextInput
              id="nationality"
              type="text"
              placeholder="Nationality"
              onChange={formik.handleChange}
              value={formik.values.nationality}
            />
            {formik.touched.nationality && formik.errors.nationality && (
              <div className="text-red-600">{formik.errors.nationality}</div>
            )}
          </div>
        </div>

        <div className="flex w-full flex-wrap justify-between gap-2 mt-2">
          <div className="w-[500px] px-4">
            <div className="mb-2 block">
              <Label htmlFor="postalAddress" value="Postal Address*" />
            </div>
            <TextInput
              id="postalAddress"
              type="text"
              placeholder="Address"
              onChange={formik.handleChange}
              value={formik.values.postalAddress}
            />
            {formik.touched.postalAddress && formik.errors.postalAddress && (
              <div className="text-red-600">{formik.errors.postalAddress}</div>
            )}
          </div>
          <div className="w-[500px] px-4">
            <div className="mb-2 block">
              <Label htmlFor="passportNumber" value="Passport Number*" />
            </div>
            <TextInput
              id="passportNumber"
              type="text"
              placeholder="Passport Number"
              onChange={formik.handleChange}
              value={formik.values.passportNumber}
            />
            {formik.touched.passportNumber && formik.errors.passportNumber && (
              <div className="text-red-600">{formik.errors.passportNumber}</div>
            )}
          </div>
        </div>

        <div className="flex w-full flex-wrap justify-between gap-2 mt-2">
          <div className="w-[500px] px-4 mt-2">
            <div className="mb-2 block">
              <Label htmlFor="dateOfExpiry" value="Date of Expiry*" />
            </div>
            <TextInput
              id="dateOfExpiry"
              type="date"
              placeholder="Expiry Date"
              onChange={formik.handleChange}
              value={formik.values.dateOfExpiry}
            />
            {formik.touched.dateOfExpiry && formik.errors.dateOfExpiry && (
              <div className="text-red-600">{formik.errors.dateOfExpiry}</div>
            )}
          </div>
        </div>

        <div className="flex-col">
          <div className="font-inter text-[18px] font-semibold leading-normal ps-4 mt-4">
            Naturalised
          </div>
          <div className="flex w-full flex-wrap justify-between gap-2 mt-2">
            <div className="w-[500px] px-4">
              <div className="mb-2 block">
                <Label htmlFor="naturalizationInfo.date" value="Date*" />
              </div>
              <TextInput
                id="naturalizationInfo.date"
                type="date"
                placeholder="Date"
                onChange={formik.handleChange}
                value={formik.values.naturalizationInfo.date}
              />
              {formik.touched.naturalizationInfo?.date &&
                formik.errors.naturalizationInfo?.date && (
                  <div className="text-red-600">
                    {formik.errors.naturalizationInfo.date}
                  </div>
                )}
            </div>
            <div className="w-[500px] px-4">
              <div className="mb-2 block">
                <Label
                  htmlFor="naturalizationInfo.placeOfNaturalization"
                  value="Place of Naturalised*"
                />
              </div>
              <TextInput
                id="naturalizationInfo.placeOfNaturalization"
                type="text"
                placeholder="Place"
                onChange={formik.handleChange}
                value={formik.values.naturalizationInfo.placeOfNaturalization}
              />
              {formik.touched.naturalizationInfo?.placeOfNaturalization &&
                formik.errors.naturalizationInfo?.placeOfNaturalization && (
                  <div className="text-red-600">
                    {formik.errors.naturalizationInfo.placeOfNaturalization}
                  </div>
                )}
            </div>
          </div>
          <div className="flex w-full flex-wrap justify-between gap-2 mt-2">
            <div className="w-[500px] px-4">
              <div className="mb-2 block">
                <Label
                  htmlFor="naturalizationInfo.formerNationality"
                  value="Former Nationality*"
                />
              </div>
              <TextInput
                id="naturalizationInfo.formerNationality"
                type="text"
                placeholder="Former Nationality"
                onChange={formik.handleChange}
                value={formik.values.naturalizationInfo.formerNationality}
              />
              {formik.touched.naturalizationInfo?.formerNationality &&
                formik.errors.naturalizationInfo?.formerNationality && (
                  <div className="text-red-600">
                    {formik.errors.naturalizationInfo.formerNationality}
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
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
