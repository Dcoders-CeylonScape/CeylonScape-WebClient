import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Label, TextInput } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ArrowForward from "@mui/icons-material/ArrowForward";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { updatePassportDetails } from "../../../../store/slices/visaform-slice";

export default function Passport({ handleNext, handleBack }) {
  const dispatch = useDispatch();
  const passportDetails = useSelector((state) => state.form);

  // Initialize formik
  const formik = useFormik({
    initialValues: {
      number: passportDetails?.number || "",
      placeOfIssue: passportDetails?.placeOfIssue || "",
      dateOfIssue: passportDetails?.dateOfIssue || "",
      dateOfExpiry: passportDetails?.dateOfExpiry || "",
      prevPassport: {
        number: passportDetails?.prevPassport?.number || "",
        placeOfIssue: passportDetails?.prevPassport?.placeOfIssue || "",
        dateOfIssue: passportDetails?.prevPassport?.dateOfIssue || "",
        dateOfExpiry: passportDetails?.prevPassport?.dateOfExpiry || "",
      },
    },
    onSubmit: (values) => {
      console.log(values); // Debug: Check form values
      dispatch(updatePassportDetails(values));
      handleNext();
    },
  });

  // Sync form values with Redux state
  useEffect(() => {
    formik.setValues({
      number: passportDetails?.number || "",
      placeOfIssue: passportDetails?.placeOfIssue || "",
      dateOfIssue: passportDetails?.dateOfIssue || "",
      dateOfExpiry: passportDetails?.dateOfExpiry || "",
      prevPassport: {
        number: passportDetails?.prevPassport?.number || "",
        placeOfIssue: passportDetails?.prevPassport?.placeOfIssue || "",
        dateOfIssue: passportDetails?.prevPassport?.dateOfIssue || "",
        dateOfExpiry: passportDetails?.prevPassport?.dateOfExpiry || "",
      },
    });
  }, [passportDetails]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <div className="font-inter text-2xl font-semibold leading-normal mb-5">
          Passport details
        </div>

        <div className="flex w-full flex-wrap justify-between gap-2">
          <div className="w-[500px] px-4">
            <div className="mb-2 block">
              <Label htmlFor="number" value="Number*" />
            </div>
            <TextInput
              id="number"
              name="number"
              type="text"
              placeholder="Number"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.number}
            />
            {formik.touched.number && formik.errors.number && (
              <div className="text-red-600">{formik.errors.number}</div>
            )}
          </div>
          <div className="w-[500px] px-4">
            <div className="mb-2 block">
              <Label htmlFor="placeOfIssue" value="Place of issue*" />
            </div>
            <TextInput
              id="placeOfIssue"
              name="placeOfIssue"
              type="text"
              placeholder="Place"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.placeOfIssue}
            />
            {formik.touched.placeOfIssue && formik.errors.placeOfIssue && (
              <div className="text-red-600">{formik.errors.placeOfIssue}</div>
            )}
          </div>
        </div>
        <div className="flex w-full flex-wrap justify-between gap-2 mt-2">
          <div className="w-[500px] px-4">
            <div className="mb-2 block">
              <Label htmlFor="dateOfIssue" value="Date of issue*" />
            </div>
            <TextInput
              id="dateOfIssue"
              name="dateOfIssue"
              type="date"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dateOfIssue}
            />
            {formik.touched.dateOfIssue && formik.errors.dateOfIssue && (
              <div className="text-red-600">{formik.errors.dateOfIssue}</div>
            )}
          </div>
          <div className="w-[500px] px-4">
            <div className="mb-2 block">
              <Label htmlFor="dateOfExpiry" value="Date of expiry*" />
            </div>
            <TextInput
              id="dateOfExpiry"
              name="dateOfExpiry"
              type="date"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dateOfExpiry}
            />
            {formik.touched.dateOfExpiry && formik.errors.dateOfExpiry && (
              <div className="text-red-600">{formik.errors.dateOfExpiry}</div>
            )}
          </div>
        </div>
        <div className="flex-col">
          <div className="font-inter text-[18px] font-semibold leading-normal ps-4 mt-4">
            Previous Passport
          </div>
          <div className="flex w-full flex-wrap justify-between gap-2 mt-2">
            <div className="w-[500px] px-4">
              <div className="mb-2 block">
                <Label htmlFor="prevPassport.number" value="Number*" />
              </div>
              <TextInput
                id="prevPassport.number"
                name="prevPassport.number"
                type="text"
                placeholder="Number"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.prevPassport.number}
              />
              {formik.touched.prevPassport?.number &&
                formik.errors.prevPassport?.number && (
                  <div className="text-red-600">
                    {formik.errors.prevPassport.number}
                  </div>
                )}
            </div>
            <div className="w-[500px] px-4">
              <div className="mb-2 block">
                <Label
                  htmlFor="prevPassport.placeOfIssue"
                  value="Place of issue*"
                />
              </div>
              <TextInput
                id="prevPassport.placeOfIssue"
                name="prevPassport.placeOfIssue"
                type="text"
                placeholder="Place"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.prevPassport.placeOfIssue}
              />
              {formik.touched.prevPassport?.placeOfIssue &&
                formik.errors.prevPassport?.placeOfIssue && (
                  <div className="text-red-600">
                    {formik.errors.prevPassport.placeOfIssue}
                  </div>
                )}
            </div>
          </div>
          <div className="flex w-full flex-wrap justify-between gap-2 mt-2">
            <div className="w-[500px] px-4">
              <div className="mb-2 block">
                <Label
                  htmlFor="prevPassport.dateOfIssue"
                  value="Date of issue*"
                />
              </div>
              <TextInput
                id="prevPassport.dateOfIssue"
                name="prevPassport.dateOfIssue"
                type="date"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.prevPassport.dateOfIssue}
              />
              {formik.touched.prevPassport?.dateOfIssue &&
                formik.errors.prevPassport?.dateOfIssue && (
                  <div className="text-red-600">
                    {formik.errors.prevPassport.dateOfIssue}
                  </div>
                )}
            </div>
            <div className="w-[500px] px-4">
              <div className="mb-2 block">
                <Label
                  htmlFor="prevPassport.dateOfExpiry"
                  value="Date of expiry*"
                />
              </div>
              <TextInput
                id="prevPassport.dateOfExpiry"
                name="prevPassport.dateOfExpiry"
                type="date"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.prevPassport.dateOfExpiry}
              />
              {formik.touched.prevPassport?.dateOfExpiry &&
                formik.errors.prevPassport?.dateOfExpiry && (
                  <div className="text-red-600">
                    {formik.errors.prevPassport.dateOfExpiry}
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
          <ArrowBack />
          <span className="ms-2">Back</span>
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
          <span className="me-2">Next</span>
          <ArrowForward />
        </Button>
      </div>
    </form>
  );
}
