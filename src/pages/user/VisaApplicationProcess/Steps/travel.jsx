import React from "react";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { updateTravelDetails } from "../../../../store/slices/visaform-slice"; // Adjust the path according to your structure
import { Label, TextInput } from "flowbite-react";
import Button from "@mui/material/Button";
import ArrowForward from "@mui/icons-material/ArrowForward";
import ArrowBack from "@mui/icons-material/ArrowBack";

export default function Travel({ handleNext, handleBack }) {
  const dispatch = useDispatch();
  const travelDetails = useSelector((state) => state.form);
  const formik = useFormik({
    initialValues: {
      routeAndMode: "",
      periodForVisit: "",
      previouslyInSriLanka: {
        lastResidence: "",
        dateOfLeaving: "",
        lastObtainedVisa: "",
        visaType: "",
        dateOfIssue: "",
        periodOfValidity: "",
        residentVisaNumber: "",
        hasRefusedVisa: "",
      },
    },

    onSubmit: (values) => {
      dispatch(updateTravelDetails(values));
      console.log(travelDetails);
      handleNext();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <div className="font-inter text-2xl font-semibold leading-normal mb-5">
          Travel details
        </div>

        <div className="flex w-full flex-wrap justify-between gap-2">
          <div className="w-full px-4">
            <div className="mb-2 block">
              <Label htmlFor="routeAndMode" value="Route and mode of travel" />
            </div>
            <textarea
              id="routeAndMode"
              placeholder="Description"
              onChange={formik.handleChange}
              value={formik.values.routeAndMode}
              rows="4"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex w-full flex-wrap justify-between gap-2 mt-2">
          <div className="w-[500px] px-4">
            <div className="mb-2 block">
              <Label htmlFor="periodForVisit" value="Period for visit visa*" />
            </div>
            <TextInput
              id="periodForVisit"
              type="number"
              name="periodForVisit"
              placeholder="Period"
              onChange={formik.handleChange}
              value={formik.values.periodForVisit}
              required
            />
          </div>
        </div>

        <div className="flex-col">
          <div className="font-inter text-[18px] font-semibold leading-normal ps-4 mt-4">
            Previously in Sri Lanka?
          </div>
          <div className="flex w-full flex-wrap justify-between gap-2 mt-2">
            <div className="w-[500px] px-4">
              <div className="mb-2 block">
                <Label
                  htmlFor="lastResidence"
                  value="Last place of residence*"
                />
              </div>
              <TextInput
                id="lastResidence"
                type="text"
                placeholder="Place"
                name="previouslyInSriLanka.lastResidence"
                onChange={formik.handleChange}
                value={formik.values.previouslyInSriLanka.lastResidence}
                required
              />
            </div>
            <div className="w-[500px] px-4">
              <div className="mb-2 block">
                <Label htmlFor="dateOfLeaving" value="Date of leaving*" />
              </div>
              <TextInput
                id="dateOfLeaving"
                type="date"
                name="previouslyInSriLanka.dateOfLeaving"
                placeholder="Date"
                onChange={formik.handleChange}
                value={formik.values.previouslyInSriLanka.dateOfLeaving}
                required
              />
            </div>
          </div>

          <div className="flex w-full flex-wrap justify-between gap-2 mt-2">
            <div className="w-[500px] px-4">
              <div className="mb-2 block">
                <Label
                  htmlFor="previouslyInSriLanka.lastObtainedVisa"
                  value="Last obtained visa*"
                />
              </div>
              <select
                id="previouslyInSriLanka.lastObtainedVisa"
                name="previouslyInSriLanka.lastObtainedVisa"
                onChange={formik.handleChange}
                value={formik.values.previouslyInSriLanka.lastObtainedVisa}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Visa Type</option>
                <option value="tourist">Tourist Visa</option>
                <option value="business">Business Visa</option>
                <option value="work">Work Visa</option>
                <option value="student">Student Visa</option>
                <option value="family">Family/Dependent Visa</option>
                <option value="transit">Transit Visa</option>
                <option value="medical">Medical Visa</option>
                <option value="diplomatic">Diplomatic/Official Visa</option>
                <option value="immigrant">
                  Immigrant Visa (Permanent Residency)
                </option>
                <option value="spouse">Spouse/Marriage Visa</option>
                <option value="holiday">Working Holiday Visa</option>
              </select>
            </div>
            <div className="w-[500px] px-4">
              <div className="mb-2 block">
                <Label htmlFor="dateOfIssue" value="Date of issue*" />
              </div>
              <TextInput
                id="dateOfIssue"
                type="date"
                name="previouslyInSriLanka.dateOfIssue"
                placeholder="Date"
                onChange={formik.handleChange}
                value={formik.values.previouslyInSriLanka.dateOfIssue}
                required
              />
            </div>
            <div className="flex w-full flex-wrap justify-between gap-2 mt-2">
              <div className="w-[500px] px-4">
                <div className="mb-2 block">
                  <Label
                    htmlFor="periodOfValidity"
                    value="Period of validity*"
                  />
                </div>
                <TextInput
                  id="periodOfValidity"
                  type="number"
                  name="previouslyInSriLanka.periodOfValidity"
                  placeholder="Period"
                  onChange={formik.handleChange}
                  value={formik.values.previouslyInSriLanka.periodOfValidity}
                  required
                />
              </div>
              <div className="w-[500px] px-4">
                <div className="mb-2 block">
                  <Label
                    htmlFor="residentVisaNumber"
                    value="If resident visa - resident visa number"
                  />
                </div>
                <TextInput
                  id="residentVisaNumber"
                  type="text"
                  name="previouslyInSriLanka.residentVisaNumber"
                  placeholder="Visa number"
                  onChange={formik.handleChange}
                  value={formik.values.previouslyInSriLanka.residentVisaNumber}
                />
              </div>
            </div>
            <div className="w-[500px] px-4 mt-2">
              <div className="mb-2 block">
                <Label
                  htmlFor="hasRefusedVisa"
                  value="Have you ever been refused a visa?"
                />
              </div>
              <TextInput
                id="hasRefusedVisa"
                onChange={formik.handleChange}
                name="previouslyInSriLanka.hasRefusedVisa"
                value={formik.values.previouslyInSriLanka.hasRefusedVisa}
              />
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
