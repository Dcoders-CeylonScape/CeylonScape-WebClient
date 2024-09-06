import Logo from "../../assets/images/logo3.png";
import {Checkbox, Label, TextInput} from "flowbite-react";
import Button from "@mui/material/Button";

function OfficerLogin() {
  return (
    <div>
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
            <form className="w-full flex mt-5 min-w-64 flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Email" />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                {/* <SLmap /> */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Password" />
                    </div>
                    <TextInput
                        placeholder="Enter your password/PIN"
                        id="password1"
                        type="password"
                        required
                    />
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <a href="#">
                        <div className="text-primary_pri50 font-inter text-[14px]   font-normal leading-normal flex items-center gap-2">
                            Forgot password?
                        </div>
                    </a>
                </div>

            </form>
            <div className="flex justify-center" onClick={() => {
                window.location.href = "/officer";
            }}>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ textTransform: "none", fontSize: "20px", marginTop: "1rem" }}
                    className="w-[120px]  sm:w-[200px] md:w-[300px] lg:w-[400px] !font-inter !font-medium !bg-primary_pri50 !text-white !text-center !text-[14px] !leading-[25.069px] !px-4 !py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 2xl:px-[24px] 2xl:py-[10px]"

                >
                    Log in
                </Button>
            </div>
        </div>
    </div>
  );
}

export default OfficerLogin;