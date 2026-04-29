import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header/index.jsx";

export function UserLayout(){
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}