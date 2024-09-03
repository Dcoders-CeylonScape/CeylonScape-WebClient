import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";
import AuthLayout from "./layouts/auth_layout.jsx";
import SignUp from "./pages/auth/sign-up.jsx";
import SignIn from "./pages/auth/sign-in.jsx";
import UserLayout from "./layouts/user_layout.jsx";
import Home from "./pages/user/home.jsx";


const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path={"auth"} element={<AuthLayout/>} >
            <Route path={"sign-up"} element={<SignUp/>} />
            <Route path={"sign-in"} element={<SignIn/>} />
        </Route>

        <Route path={"/"} element={<UserLayout/>} >
            <Route index element={<Home/>} />
        </Route>

    </Route>
));
function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
