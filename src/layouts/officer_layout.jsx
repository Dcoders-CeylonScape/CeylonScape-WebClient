import {Outlet} from "react-router-dom";
import SideBar from "../components/sidebar.jsx";

function OfficerLayout() {
    return (
        <div>
            <SideBar />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default OfficerLayout;