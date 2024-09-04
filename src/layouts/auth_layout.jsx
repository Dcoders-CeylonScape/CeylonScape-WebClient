import { Outlet } from "react-router-dom";

import background from "../assets/images/background_auth.png";

function AuthLayout() {
  return (
    <div className="flex w-full h-full">
      <div className="w-full sm:w-1/2 h-full flex items-end justify-center">
        <Outlet />
      </div>
      <div className="w-1/2 h-full flex items-end justify-center sm:block hidden">
        <img
          src={background}
          className="h-screen w-auto object-cover object-left"
          style={{ objectPosition: "40% 0" }}
          alt=""
        />
      </div>
    </div>
  );
}

export default AuthLayout;
