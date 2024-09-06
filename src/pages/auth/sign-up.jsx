import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Logo from "../../assets/images/logo3.png";
import GoogleButton from "../../assets/images/google_login_.png";
import { Checkbox, Label, TextInput } from "flowbite-react";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/User", {
        firstName,
        lastName,
        phone,
        email,
        password,
      });
      console.log(response.data);
    } catch (err) {
      setError("Sign up failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full h-screen max-h-screen overflow-y-auto flex-col items-center justify-center pt-80 lg:pt-96 pb-10">
      <img
        src={Logo}
        className="w-[200px] h-auto sm:w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px]"
        alt="Logo"
      />
      <div className="text-center mt-20 font-inter text-[22px] md:text-[28px] font-semibold leading-normal">
        Create an account
      </div>
      <div className="text-center font-normal font-inter text-[12px] md:text-[14px] leading-normal">
        Sign up with Ceylonscapes for free
      </div>
      <form
        className="flex mt-5 min-w-64 flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="firstname" value="First Name*" />
          </div>
          <TextInput
            id="firstname"
            type="text"
            placeholder="Enter your first name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="lastname" value="Last Name*" />
          </div>
          <TextInput
            id="lastname"
            type="text"
            placeholder="Enter your last name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="phone" value="Mobile*" />
          </div>
          <TextInput
            id="phone"
            type="tel"
            placeholder="+94 71 234 5678"
            pattern="\+94\d{7,10}"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Email*" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Password*" />
          </div>
          <TextInput
            placeholder="Create a password"
            id="password1"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="confirmpassword" value="Confirm Password*" />
          </div>
          <TextInput
            placeholder="Confirm password"
            id="confirmpassword"
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <div className="text-red-600 text-center mt-2">{error}</div>}
        <div className="flex justify-center">
          <Button
            type="submit"
            variant="contained"
            sx={{ textTransform: "none", fontSize: "20px", marginTop: "1rem" }}
            className="w-[300px] lg:w-[400px] !font-inter !font-medium !bg-primary_pri50 !text-white !text-center !text-[14px] !leading-[25.069px] !px-4 !py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 2xl:px-[24px] 2xl:py-[10px]"
          >
            {loading ? "Loading..." : "Sign up"}
          </Button>
        </div>
      </form>
      <div className="!font-inter max-w-72 !font-normal mt-5 !text-black text-center text-[14px] !leading-[18px]">
        By clicking the Sign Up button, I agree to the terms and conditions
      </div>
      <div className="flex items-center gap-2 mt-3">
        <Label htmlFor="remember" className="text-[14px] font-normal">
          Already have an account?
        </Label>
        <a href="sign-in">
          <div className="text-primary_pri50 font-inter text-[14px] font-normal leading-normal flex items-center gap-2">
            Log in Now
          </div>
        </a>
      </div>
      <div className="!font-inter !font-normal mt-3 !text-black text-center text-[14px] !leading-[28px]">
        Or Sign Up Using
      </div>
      <button
        onClick={() => {
          console.log("Image button clicked!");
        }}
        className="flex items-center justify-center p-0 bg-transparent border-none cursor-pointer transition-transform transform active:scale-95"
      >
        <img
          src={GoogleButton}
          className="w-[50px] mt-3 h-auto sm:w-[70px] md:w-[80px] lg:w-[80px]"
          alt="Google Button"
        />
      </button>
    </div>
  );
}

export default SignUp;
