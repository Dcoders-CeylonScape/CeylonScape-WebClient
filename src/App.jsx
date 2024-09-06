import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AuthLayout from "./layouts/auth_layout.jsx";
import SignUp from "./pages/auth/sign-up.jsx";
import SignIn from "./pages/auth/sign-in.jsx";
import AuthMain from "./pages/auth/auth-main.jsx";
import UserLayout from "./layouts/user_layout.jsx";
import Home from "./pages/user/home.jsx";
import DestinationsProvince from "./pages/user/DestinationsProvince/destinations-province.jsx";
import Western from "./pages/user/DestinationsProvince/Provinces/western.jsx";
import Uva from "./pages/user/DestinationsProvince/Provinces/uva.jsx";
import Southern from "./pages/user/DestinationsProvince/Provinces/southern.jsx";
import Eastern from "./pages/user/DestinationsProvince/Provinces/eastern.jsx";
import NorthCentral from "./pages/user/DestinationsProvince/Provinces/north-central.jsx";
import Northern from "./pages/user/DestinationsProvince/Provinces/north.jsx";
import NorthWestern from "./pages/user/DestinationsProvince/Provinces/north-western.jsx";
import Sabaragamuwa from "./pages/user/DestinationsProvince/Provinces/sabaragamuwa.jsx";
import Central from "./pages/user/DestinationsProvince/Provinces/central.jsx";
import OfficerLayout from "./layouts/officer_layout.jsx";
import Dashboard from "./pages/officer/dashboard.jsx";
import VisaProcessStep from "./pages/user/VisaApplicationProcess/visa-process.jsx";
import OfficerLogin from "./pages/officer/officer-login.jsx";
import AllApplications from "./pages/officer/all-applications.jsx";
import PendingApplications from "./pages/officer/pending-applications.jsx";
import PendingApp from "./pages/officer/pending-application.jsx";
import Notices from "./pages/officer/notices.jsx";

import Interpol from "./pages/interpoltest/interpol.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={"auth"} element={<AuthLayout />}>
        <Route path={"sign-up"} element={<SignUp />} />
        <Route path={"sign-in"} element={<SignIn />} />
        <Route path={"auth-main"} element={<AuthMain />} />
          <Route path={"officer-login"} element={<OfficerLogin/>} />
      </Route>
      <Route path={"officer"} element={<OfficerLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
        <Route path={"officer"} element={<OfficerLayout/>} >
            <Route index element={<Dashboard/>} />
            <Route path={"all-applications"} element={<AllApplications/>} />
            <Route path={"pending-applications"} element={<PendingApplications/>} />
            <Route path={"pending-application/:id"} element={<PendingApp />} />
            <Route path={"pending-application/:id/notices"} element={<Notices />} />
        </Route>
      <Route path={"/"} element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path={"provinces"} element={<DestinationsProvince />}>
          <Route path={"western"} element={<Western />} />
          <Route path={"uva"} element={<Uva />} />
          <Route path={"southern"} element={<Southern />} />
          <Route path={"northcentral"} element={<NorthCentral />} />
          <Route path={"northen"} element={<Northern />} />
          <Route path={"northwestern"} element={<NorthWestern />} />
          <Route path={"sabaragamuwa"} element={<Sabaragamuwa />} />
          <Route path={"central"} element={<Central />} />
          <Route path={"eastern"} element={<Eastern />} />
        </Route>
        <Route path={"visa-application"} element={<VisaProcessStep />} />
      </Route>
      <Route path={"/interpol"} element={<Interpol />} >
      </Route>
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
