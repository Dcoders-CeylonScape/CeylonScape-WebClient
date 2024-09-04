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
