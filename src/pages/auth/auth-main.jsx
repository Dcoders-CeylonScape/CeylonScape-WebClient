import Logo from "../../assets/images/logo3.png";
import Button from "@mui/material/Button";
import GoogleButton from "../../assets/images/Google_login_.png";

function SignUp() {
  return (
    <div className="flex w-full h-screen flex-col items-center justify-center">
      <img
        src={Logo}
        className="w-[200px] h-auto sm:w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px]"
        alt="Logo"
      />
      <Button
        href="sign-in"
        variant="contained"
        sx={{ textTransform: "none", fontSize: "20px", marginTop: "5rem" }}
        className="w-[160px]  sm:w-[200px] md:w-[300px] lg:w-[400px] !font-inter !font-medium !bg-primary_pri50 !text-white !text-center !text-[20px] !leading-[25.069px] !bg-primary_pri50 !px-4 !py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 2xl:px-[24px] 2xl:py-[10px]"
      >
        Log in
      </Button>
      <Button
        href="sign-up"
        variant="contained"
        sx={{ textTransform: "none", fontSize: "20px", marginTop: "1.2rem" }}
        className="w-[160px] sm:w-[200px] md:w-[300px] lg:w-[400px] !font-inter !font-medium !bg-primary_pri50 !text-primary_pri50 !text-center !text-[20px] !leading-[25.069px] !bg-white !px-4 !py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 2xl:px-[24px] 2xl:py-[10px]"
      >
        Signup
      </Button>
      <div className="!font-inter !font-normal mt-14 !text-black text-center !text-[18px] !leading-[25.069px]">
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

export default SignUp;
