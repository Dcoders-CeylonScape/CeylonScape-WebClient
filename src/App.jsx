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


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={"auth"} element={<AuthLayout />}>
        <Route path={"sign-up"} element={<SignUp />} />
        <Route path={"sign-in"} element={<SignIn />} />
        <Route path={"auth-main"} element={<AuthMain />} />
      </Route>
        <Route path={"officer"} element={<OfficerLayout/>} >
            <Route index element={<Dashboard/>} />
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
