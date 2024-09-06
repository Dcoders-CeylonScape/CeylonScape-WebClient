import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Logo from "../../assets/images/logo3.png";
import GoogleButton from "../../assets/images/google_login_.png";
import { Checkbox, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user.data.user);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/Auth/Login",
        {
          email,
          password,
        }
      );
      console.log(response.data);
      sessionStorage.setItem("jwtToken", response.data.jwtToken);
      sessionStorage.setItem("userID", response.data.id);
      navigate("auth/sign-in"); //change this
    } catch (err) {
      setError("Invalid email or password. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full h-screen flex-col items-center justify-center">
      <img
        src={Logo}
        className="w-[200px] h-auto sm:w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px]"
        alt="Logo"
      />
      <div className="text-center mt-20 font-inter text-[22px] md:text-[28px] font-semibold leading-normal">
        Log in to your account
      </div>
      <div className="text-center font-normal font-inter text-[12px] md:text-[14px] leading-normal">
        Welcome back! Please enter your details
      </div>
      <form
        className="flex mt-5 min-w-64 flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Email" />
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
            <Label htmlFor="password1" value="Password" />
          </div>
          <TextInput
            placeholder="Enter your password/PIN"
            id="password1"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="text-red-600 text-center mt-2">{error}</div>}
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <a href="#">
            <div className="text-primary_pri50 font-inter text-[14px] font-normal leading-normal flex items-center gap-2">
              Forgot password?
            </div>
          </a>
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            variant="contained"
            sx={{ textTransform: "none", fontSize: "20px", marginTop: "1rem" }}
            className="w-[120px] sm:w-[200px] md:w-[300px] lg:w-[400px] !font-inter !font-medium !bg-primary_pri50 !text-white !text-center !text-[14px] !leading-[25.069px] !px-4 !py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 2xl:px-[24px] 2xl:py-[10px]"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Logging in..." : "Log in"}
          </Button>
        </div>
      </form>
      <div className="flex items-center gap-2 mt-3">
        <Label htmlFor="remember" className="text-[14px] font-normal">
          Not a Ceylonscapes?
        </Label>
        <a href="sign-up">
          <div className="text-primary_pri50 font-inter text-[14px] font-normal leading-normal flex items-center gap-2">
            Sign Up Now
          </div>
        </a>
      </div>
      <div className="!font-inter !font-normal mt-3 !text-black text-center text-[14px] !leading-[28px]">
        Or Login Using
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

export default SignIn;
