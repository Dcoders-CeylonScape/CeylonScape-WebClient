import React from "react";
import Button from "@mui/material/Button";
import Arrow from "../../../assets/images/arrow.png";
import { Snackbar, Alert } from "@mui/material"; // Import Snackbar and Alert
import {
  updatePersonalDetails,
  updateUserDetails,
  updatePassportDetails,
  updateSpouseDetails,
  updateTravelDetails,
  updateEmergencyContact,
} from "../../../store/slices/visaform-slice.js";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Personal from "./Steps/Personal.jsx";
import User from "./Steps/User.jsx";
import Passport from "./Steps/passport.jsx";
import Spouse from "./Steps/spouse.jsx";
import Travel from "./Steps/travel.jsx";
import Emergency from "./Steps/emergency.jsx";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
const steps = [
  "Personal",
  "User",
  "Passport",
  "Spouse",
  "Travel",
  "Emergency Contact",
];

const CustomStepper = styled(Stepper)(({ theme }) => ({
  "& .MuiStepConnector-root": {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  "& .MuiStepIcon-root": {
    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 32,
    },
  },
  "& .MuiStepIcon-text": {
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 16,
    },
  },
  "& .MuiStepLabel-label": {
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 16,
    },
  },
}));
const navigate = useNavigate();
export default function VisaProcessStep1() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [openSnackbar, setOpenSnackbar] = React.useState(false); // Add Snackbar state
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.form);

  // Snackbar close handler
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const isStepOptional = (step) => {
    return step === 3;
  };

  const userID = sessionStorage.getItem("userID");
  const jsonData = {
    fullName: formState.personalDetails.name,
    // Other fields...
    userID: userID,
  };

  const handleNext = async (values) => {
    switch (activeStep) {
      case 0:
        dispatch(updatePersonalDetails(values));
        break;
      case 1:
        dispatch(updateUserDetails(values));
        break;
      case 2:
        dispatch(updatePassportDetails(values));
        break;
      case 3:
        dispatch(updateSpouseDetails(values));
        break;
      case 4:
        dispatch(updateTravelDetails(values));
        break;
      case 5:
        dispatch(updateEmergencyContact(values));
        break;
      default:
        break;
    }

    if (activeStep === steps.length - 1) {
      const token = sessionStorage.getItem("jwtToken");

      // Submit the form here
      try {
        // Uncomment when you're ready for submission
        // const response = await axios.post("/api/submit-form", jsonData, {
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization: `Bearer ${token}`,
        //   },
        // });
        // If submission is successful, show the success message
        setOpenSnackbar(true);

        console.log("Form submitted successfully:", jsonData);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } catch (error) {
        console.error("Form submission failed:", error);
      }
    } else if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="flex flex-col px-8 md:px-32 lg:px-64 items-center justify-center mt-44">
      <div className="flex text-[28px] md:text-[40px]  flex-col items-center font-inter font-semibold leading-tight">
        <div>Application for</div>
        <div className="text-primary_pri50 font-bold mb-8">Entry Visa</div>
      </div>

      <Box sx={{ width: "100%" }}>
        <CustomStepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "14px",
                    },
                  }}
                >
                  Optional
                </Typography>
              );
            }

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </CustomStepper>

        <React.Fragment>
          <div className="min-h-full mt-5 ">
            {activeStep === 0 && (
              <Personal handleNext={handleNext} handleBack={handleBack} />
            )}
            {activeStep === 1 && (
              <User handleNext={handleNext} handleBack={handleBack} />
            )}
            {activeStep === 2 && (
              <Passport handleNext={handleNext} handleBack={handleBack} />
            )}
            {activeStep === 3 && (
              <Spouse handleNext={handleNext} handleBack={handleBack} />
            )}
            {activeStep === 4 && (
              <Travel handleNext={handleNext} handleBack={handleBack} />
            )}
            {activeStep === 5 && (
              <Emergency handleNext={handleNext} handleBack={handleBack} />
            )}
          </div>
        </React.Fragment>

        {/* Snackbar for success message */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity="success">
            Form submitted successfully!
          </Alert>
        </Snackbar>
      </Box>
    </div>
  );
}
