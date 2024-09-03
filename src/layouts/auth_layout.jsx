import {Outlet} from "react-router-dom";

function AuthLayout() {
    return (
        <div>
            <p className={'bg-primary'}>Auth Layout</p>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default AuthLayout;