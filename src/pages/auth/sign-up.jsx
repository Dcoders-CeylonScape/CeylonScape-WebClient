import Button from "@mui/material/Button";
import Logo from "../../assets/images/logo3.png";
import GoogleButton from "../../assets/images/Google_login_.png";
import { Label, TextInput } from "flowbite-react";

function SignUp() {
  return (
    <div className="flex w-full h-screen max-h-screen overflow-y-auto flex-col items-center justify-center pt-80 lg:pt-96 pb-10 ">
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
      <form className="flex mt-5 min-w-64 flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="firstname" value="First Name*" />
          </div>
          <TextInput
            id="firstname"
            type="text"
            placeholder="Enter your first name"
            required
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
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="phone" value="Mobile*" />
          </div>
          <TextInput
            id="phone"
            type="tel"
            placeholder="Enter your mobile number"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
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
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Confirm Password*" />
          </div>
          <TextInput
            placeholder="Confirm password"
            id="confirmpassword"
            type="password"
            required
          />
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            href="sign-in"
            variant="contained"
            sx={{ textTransform: "none", fontSize: "20px", marginTop: "1rem" }}
            className="w-[300px]  lg:w-[400px] !font-inter !font-medium !bg-primary_pri50 !text-white !text-center !text-[14px] !leading-[25.069px] !px-4 !py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 2xl:px-[24px] 2xl:py-[10px]"
          >
            Sign up
          </Button>
        </div>
      </form>
      <div className="!font-inter max-w-72 !font-normal mt-5 !text-black text-center text-[14px]  !leading-[18px]">
        By clicking the Sign Up button, I agree to the terms ans conditions
      </div>
      <div className="flex items-center gap-2 mt-3">
        <Label htmlFor="remember" className="text-[14px] font-normal">
          Already have a account?
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
