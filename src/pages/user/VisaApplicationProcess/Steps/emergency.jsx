import React from "react";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { updateEmergencyContact } from "../../../../store/slices/visaform-slice"; // Adjust the path according to your structure
import { Label, TextInput } from "flowbite-react";
import Button from "@mui/material/Button";
import ArrowForward from "@mui/icons-material/ArrowForward";
import ArrowBack from "@mui/icons-material/ArrowBack";

export default function Emergency({ handleNext, handleBack }) {
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const dispatch = useDispatch();
  const updateEmergencyDetails = useSelector((state) => state.form);

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      contactNumber: "",
      relationship: "",
      moneyAmount: "",
      cardName: "",
      spendableAmount: "",
      applicationReason: "",
    },
    onSubmit: (values) => {
      dispatch(updateEmergencyContact(values));
      delay(2000).then(() => {
        console.log(updateEmergencyDetails);
      });

      handleNext();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <div className="font-inter text-2xl font-semibold leading-normal mb-5">
          Emergency contacts details in Sri Lanka
        </div>
        <div className="flex w-full flex-wrap justify-between gap-2">
          <div className="w-[500px] px-4">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Name*" />
            </div>
            <TextInput
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              required
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          <div className="w-[500px] px-4">
            <div className="mb-2 block">
              <Label htmlFor="address" value="Address*" />
            </div>
            <TextInput
              id="address"
              name="address"
              required
              type="text"
              placeholder="Address"
              onChange={formik.handleChange}
              value={formik.values.address}
            />
          </div>
        </div>
        <div className="flex w-full flex-wrap justify-between gap-2 mt-2">
          <div className="w-[500px] px-4">
            <div className="mb-2 block">
              <Label htmlFor="contactNumber" value="Contact number*" />
            </div>
            <TextInput
              id="contactNumber"
              name="contactNumber"
              type="text"
              required
              placeholder="Contact number"
              onChange={formik.handleChange}
              value={formik.values.contactNumber}
            />
          </div>
          <div className="w-[500px] px-4">
            <div className="mb-2 block">
              <Label htmlFor="relationship" value="Relationship*" />
            </div>
            <TextInput
              id="relationship"
              name="relationship"
              type="text"
              required
              placeholder="Relationship"
              onChange={formik.handleChange}
              value={formik.values.relationship}
            />
          </div>
        </div>

        <div className="flex w-full flex-wrap justify-between gap-2 mt-2">
          <div className="w-[500px] px-4 mt-2">
            <div className="mb-2 block">
              <Label
                htmlFor="moneyAmount"
                value="How much money in USD will the applicant have with him/her"
              />
            </div>
            <TextInput
              id="moneyAmount"
              name="moneyAmount"
              type="number"
              placeholder="Amount"
              onChange={formik.handleChange}
              value={formik.values.moneyAmount}
            />
          </div>
          <div className="w-[500px] px-4 mt-2">
            <div className="mb-2 block">
              <Label
                htmlFor="cardName"
                value="If credit card available, name of the card"
              />
            </div>
            <TextInput
              id="cardName"
              name="cardName"
              type="text"
              placeholder="Card name"
              onChange={formik.handleChange}
              value={formik.values.cardName}
            />
          </div>
        </div>

        <div className="flex w-full flex-wrap justify-between gap-2 mt-2">
          <div className="w-[500px] px-4 mt-2">
            <div className="mb-2 block">
              <Label htmlFor="spendableAmount" value="Spendable amount" />
            </div>
            <TextInput
              id="spendableAmount"
              name="spendableAmount"
              type="number"
              placeholder="Amount"
              onChange={formik.handleChange}
              value={formik.values.spendableAmount}
            />
            {formik.touched.spendableAmount &&
              formik.errors.spendableAmount && (
                <div className="text-red-600">
                  {formik.errors.spendableAmount}
                </div>
              )}
          </div>
          <div className="w-[500px] px-4 mt-2">
            <div className="mb-2 block">
              <Label
                htmlFor="applicationReason"
                value="Any other reason to urge in support of application"
              />
            </div>
            <TextInput
              id="applicationReason"
              name="applicationReason"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.applicationReason}
            />
            {formik.touched.applicationReason &&
              formik.errors.applicationReason && (
                <div className="text-red-600">
                  {formik.errors.applicationReason}
                </div>
              )}
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
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}
